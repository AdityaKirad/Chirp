import type { Intent } from "@conform-to/react";
import { conformZodMessage } from "@conform-to/zod";
import { differenceInYears } from "date-fns";
import { z } from "zod";

export function createSchema(intent: Intent | null, options?: { isEmailUnique: (email: string) => Promise<boolean> }) {
  return z.object({
    name: z.string().trim().min(1, "What's your name").max(50, "Your name is too long"),
    email: z
      .string()
      .email()
      .pipe(
        z.string().superRefine((email, ctx) => {
          const isValidatingEmail = intent === null || (intent.type === "validate" && intent.payload.name === "email");

          if (!isValidatingEmail) {
            ctx.addIssue({
              code: "custom",
              message: conformZodMessage.VALIDATION_SKIPPED,
            });
            return;
          }

          if (typeof options?.isEmailUnique !== "function") {
            ctx.addIssue({
              code: "custom",
              message: conformZodMessage.VALIDATION_UNDEFINED,
              fatal: true,
            });
            return;
          }

          return options.isEmailUnique(email).then((isUnique) => {
            if (isUnique) {
              ctx.addIssue({
                code: "custom",
                message: "Email already taken",
              });
            }
          });
        }),
      ),
    dob: z.date().refine((val) => differenceInYears(new Date(), val) >= 13, "You must be at least 13 years old"),
  });
}

export type PersonalInfoType = z.infer<ReturnType<typeof createSchema>>;

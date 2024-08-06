import { type Intent } from "@conform-to/react";
import { conformZodMessage } from "@conform-to/zod";
import { z } from "zod";

const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]*$/;

export function createSchema(
  intent: Intent | null,
  options?: { isUsernameTaken?: (username: string) => Promise<boolean> },
) {
  return z
    .object({
      username: z
        .string()
        .min(4, "Must be at least 4 characters")
        .max(15, "Cannot exceed 15 characters")
        .regex(usernameRegex, "Must start with letter, only letters, numbers & underscores allowed")
        .refine((val) => !val.toLowerCase().includes("twitter"), "Cannot contain 'twitter'")
        .refine((val) => !val.toLowerCase().includes("admin"), "Cannot contain 'admin'")
        .refine((val) => !val.toLowerCase().endsWith("com"), "Cannot end with 'com'")
        .pipe(
          z.string().superRefine((username, ctx) => {
            const isValidatingUsername =
              intent === null || (intent.type === "validate" && intent.payload.name === "username");

            if (!isValidatingUsername) {
              ctx.addIssue({
                code: "custom",
                message: conformZodMessage.VALIDATION_SKIPPED,
              });
              return;
            }

            if (typeof options?.isUsernameTaken !== "function") {
              ctx.addIssue({
                code: "custom",
                message: conformZodMessage.VALIDATION_UNDEFINED,
                fatal: true,
              });
              return;
            }

            return options.isUsernameTaken(username).then((isTaken) => {
              if (isTaken) {
                ctx.addIssue({
                  code: "custom",
                  message: "Username already taken",
                });
              }
            });
          }),
        ),
      password: z.string().min(8, "Must be at least 8 characters"),
      confirmPassword: z.string(),
    })
    .refine((data) => !(data.password !== data.confirmPassword), {
      message: "Password's don't match",
      path: ["confirmPassword"],
    });
}

export type CredentialsSchema = z.infer<ReturnType<typeof createSchema>>;

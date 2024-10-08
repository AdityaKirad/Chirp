import { z } from "zod";
import { UsernameSchema, PasswordAndConfirmPasswordSchema } from "~/lib/user-validation";

export const VerificationSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
  __action: z.enum(["verify", "resend-otp"]),
});

export const CredentialsSchema = z
  .object({
    username: UsernameSchema,
  })
  .and(PasswordAndConfirmPasswordSchema);

export type CredentialsSchemaType = z.infer<typeof CredentialsSchema>;

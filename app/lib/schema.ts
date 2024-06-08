import { isAtleast13 } from "./utils";
import { z } from "zod";

const ProfileSchema = z.object({
  name: z.string().trim().min(1, "What's your name").max(50, "Your name is too long"),
  email: z.string().email(),
  dob: z.date().refine(isAtleast13, "You must be at least 13 years old"),
});

type ProfileType = z.infer<typeof ProfileSchema>;

export { ProfileSchema };
export type { ProfileType };

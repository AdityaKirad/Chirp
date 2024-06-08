import { z } from "zod";

const profile = z.object({
  name: z.string().trim().min(1, "What's your name").max(50, "Your name is too long"),
  email: z.string().email(),
  // dob: z.date(),
});

type Profile = z.infer<typeof profile>;

export { profile };
export type { Profile };

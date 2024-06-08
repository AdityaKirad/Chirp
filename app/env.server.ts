import { z, TypeOf } from "zod";

const zodEnv = z.object({
  DATABASE_URL: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  SESSION_SECRET: z.string(),
  AUTH_URL: z.string().url(),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends TypeOf<typeof zodEnv> {}
  }
}

try {
  zodEnv.parse(process.env);
} catch (error) {
  if (error instanceof z.ZodError) {
    const { fieldErrors } = error.flatten();
    const errorMessage = Object.entries(fieldErrors)
      .map(([field, error]) => (error ? `${field}: ${error.join(", ")}` : field))
      .join("\n ");
    throw new Error(`Missing enviornment variables:\n ${errorMessage}`);
    process.exit(1);
  }
}

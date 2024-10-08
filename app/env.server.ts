import { z, type TypeOf } from "zod";

const zodEnv = z.object({
  AUTH_URL: z.string().url(),
  DATABASE_URL: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  HONEYPOT_SEED: z.string(),
  PLUNK_API_KEY: z.string(),
  SESSION_SECRET: z.string(),
});

try {
  zodEnv.parse(process.env);
} catch (error) {
  if (error instanceof z.ZodError) {
    const { fieldErrors } = error.flatten();
    const errorMessage = Object.entries(fieldErrors)
      .map(([field, error]) => (error ? `${field}: ${error.join(", ")}` : field))
      .join("\n ");
    console.error(`Missing enviornment variables:\n ${errorMessage}`);
    process.exit(1);
  }
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv extends TypeOf<typeof zodEnv> {}
  }
}

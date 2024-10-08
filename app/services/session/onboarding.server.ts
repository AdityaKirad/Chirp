import { createCookieSessionStorage } from "@remix-run/node";
import { getExpirationDate } from "~/lib/utils";

export const onboardingSessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__onboarding",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    maxAge: 60 * 10,
    secrets: process.env.SESSION_SECRET.split(","),
    secure: process.env.NODE_ENV === "production",
  },
});

export const { commitSession, destroySession, getSession } = onboardingSessionStorage;

const originalCommitSession = commitSession;

Object.defineProperty(onboardingSessionStorage, "commitSession", {
  value: async function commitSession(...args: Parameters<typeof originalCommitSession>) {
    const [session, options] = args;

    if (options?.expires) {
      session.set("expires", options.expires);
    }
    if (options?.maxAge) {
      const expires = getExpirationDate(options.maxAge);
      session.set("expires", expires);
    }

    const expires = session.has("expires") ? new Date(session.get("expires")!) : undefined;

    const setCookieHeader = await originalCommitSession(session, {
      ...options,
      expires,
    });

    return setCookieHeader;
  },
});

export async function createOnboardingUser(data: { name: string; email: string; dob: Date }) {
  const session = await getSession();
  session.set("data", data);
  return await commitSession(session);
}

export async function getOnboardingUser(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));
  const data = session.get("data");
  return data;
}

import { createCookieSessionStorage } from "@remix-run/node";

export const authSessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    maxAge: 172800,
    secrets: process.env.SESSION_SECRET.split(","),
    secure: process.env.NODE_ENV === "production",
  },
});

const originalCommitSession = authSessionStorage.commitSession;

Object.defineProperty(authSessionStorage, "commitSession", {
  value: async function commitSession(...args: Parameters<typeof originalCommitSession>) {
    const [session, options] = args;

    if (options?.expires) session.set("expires", options.expires);
    if (options?.maxAge) session.set("expires", new Date(Date.now() + options.maxAge * 1000));

    const expires = session.has("expires") ? new Date(session.get("expires")) : undefined;

    const setCookieHeader = await originalCommitSession(session, {
      ...options,
      expires,
    });

    return setCookieHeader;
  },
});
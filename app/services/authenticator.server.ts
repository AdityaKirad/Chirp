import { db } from "./db.server";
import { authSessionStorage } from "./session/auth.server";
import type { Password, User } from "@prisma/client";
import { redirect } from "@remix-run/node";
import bcrypt from "bcryptjs";
import { Authenticator } from "remix-auth";
import { GoogleStrategy } from "remix-auth-google";
import { generateUniqueId, getExpirationDate } from "~/lib/utils";

const GOOGLE_CALLBACK_URL = "/auth/google/callback";

export const sessionKey = "sessionId";

export const authenticator = new Authenticator<{ id: string }>(authSessionStorage, { sessionKey });

const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:
      process.env.NODE_ENV === "production"
        ? `${process.env.URL}${GOOGLE_CALLBACK_URL}`
        : `localhost:5173${GOOGLE_CALLBACK_URL}`,
  },
  async ({ profile }) => {
    const email = profile.emails[0].value;
    const expiresAt = getExpirationDate(2 * 24 * 60 * 60);
    const name = [profile.name.givenName, profile.name.middleName, profile.name.familyName].filter(Boolean).join(" ");
    const userData = {
      name,
      email,
      username: profile.displayName,
      image: profile.photos[0].value,
    };
    return await db.session.create({
      data: {
        id: generateUniqueId(),
        expiresAt,
        user: {
          connectOrCreate: {
            where: { email },
            create: {
              id: generateUniqueId(),
              ...userData,
            },
          },
        },
      },
      select: { id: true },
    });
  },
);

authenticator.use(googleStrategy);

export async function login({
  identifier,
  password,
}: {
  identifier: User["username"] | User["email"];
  password: Password["hash"];
}) {
  const user = await verifyUserWithPassword({ identifier, password });
  if (!user) return null;
  const session = await db.session.create({
    data: {
      id: generateUniqueId(),
      userId: user.id,
      expiresAt: getExpirationDate(2 * 24 * 60 * 60),
    },
    select: { id: true, expiresAt: true },
  });
  return session;
}

export async function signup({
  name,
  username,
  email,
  dob,
  password,
}: Pick<User, "name" | "username" | "dob" | "email"> & { password: string }) {
  const hashedPassword = await getPasswordHash(password);
  const session = await db.session.create({
    data: {
      id: generateUniqueId(),
      expiresAt: getExpirationDate(2 * 24 * 60 * 60),
      user: {
        create: {
          id: generateUniqueId(),
          name,
          username,
          email,
          dob,
          password: {
            create: {
              hash: hashedPassword,
            },
          },
        },
      },
    },
    select: { id: true, expiresAt: true },
  });
  return session;
}

export async function getAnonymousSession(request: Request) {
  const id = await getUserId(request);
  if (id) {
    throw redirect("/home");
  }
}

export async function getAuthSession(request: Request) {
  const redirectTo = new URL(request.url).pathname;
  const id = await getUserId(request, { redirectTo });
  if (!id) {
    const loginURI = getLoginRedirectURI(request, { redirectTo });
    throw redirect(loginURI);
  }
  return id;
}

async function getUserId(request: Request, { redirectTo }: { redirectTo?: string | null } = {}) {
  const authSession = await authSessionStorage.getSession(request.headers.get("Cookie"));
  const id = authSession.get(sessionKey);
  if (!id) return null;
  const session = await db.session.findUnique({
    where: { id, expiresAt: { gt: new Date() } },
    select: { user: { select: { id: true, name: true, username: true, image: true } } },
  });
  if (!session?.user) {
    const loginRedirect = getLoginRedirectURI(request, { redirectTo });
    throw redirect(loginRedirect, {
      headers: {
        "Set-Cookie": await authSessionStorage.destroySession(authSession),
      },
    });
  }
  return session.user;
}

function getLoginRedirectURI(request: Request, { redirectTo }: { redirectTo?: string | null }) {
  const requestUrl = new URL(request.url);
  redirectTo = redirectTo === null ? null : (redirectTo ?? `${requestUrl.pathname}${requestUrl.search}`);
  const loginParams = redirectTo ? new URLSearchParams({ redirectTo }) : null;
  const loginRedirect = ["/login", loginParams?.toString()].filter(Boolean).join("?");
  return loginRedirect;
}

async function getPasswordHash(password: string) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

async function verifyUserWithPassword({ identifier, password }: { identifier: string; password: Password["hash"] }) {
  const userWithPassword = await db.user.findFirst({
    where: {
      OR: [{ email: identifier }, { username: identifier }],
    },
    select: { id: true, password: { select: { hash: true } } },
  });

  if (!userWithPassword || !userWithPassword.password) {
    return null;
  }

  const isValid = await bcrypt.compare(password, userWithPassword.password.hash);

  if (!isValid) {
    return null;
  }

  return { id: userWithPassword.id };
}

export async function resetPassword({ email, password }: { email: string; password: string }) {
  const hash = await getPasswordHash(password);
  return await db.user.update({
    data: {
      password: { update: { hash } },
    },
    where: { email },
    select: { id: true },
  });
}

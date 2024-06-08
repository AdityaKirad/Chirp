import { db } from "./db.server";
import { sessionStorage } from "./session.server";
import "@prisma/client";
import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { GoogleStrategy } from "remix-auth-google";

export const authenticator = new Authenticator(sessionStorage);

const credentialStrategy = new FormStrategy(async ({ form }) => {
  const user = form.get("user") as string | undefined;
  const password = form.get("password");
  if (user === "adityakirad3" && password === "@d!ty@K1r@d2o01") return { userId: crypto.randomUUID() };
  else throw new AuthorizationError("credential are incorrect");

  // const user = await db.account.findFirst({
  //   where: { OR: [
  //     {username: nameOrEmail },
  //     {email: nameOrEmail }
  //   ]}
  // })
});

// const googleStrategy = new GoogleStrategy(
//   {
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: `${process.env.AUTH_URL}/auth/callback/google`,
//   },
//   async ({ accessToken, refreshToken, extraParams, profile  }) => {
//     const existingUser = await db.account.findUnique({ where: { email: profile.emails[0].value } });
//     if(!existingUser) {

//       const [user] = await Promise.all([
//         db.account.create({data: {}}),
//         db.user.create({data: {}})
//       ])
//       return user
//     }
//     return existingUser
//   },
// );

authenticator.use(credentialStrategy, "credentials");
// authenticator.use(googleStrategy, "google")

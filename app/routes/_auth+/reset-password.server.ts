import { VERIFICATION_SESSION_KEY } from "./reset-password";
import type { VerifyFunctionArgs } from "./verify.server";
import { json, redirect } from "@remix-run/node";
import { db } from "~/services/db.server";
import { verificationSessionStorage } from "~/services/session/verify.sever";

export async function handleVerification({ submission }: VerifyFunctionArgs) {
  if (submission.status !== "success") {
    throw new Error("Submission should be successfull now");
  }
  const target = submission.value.target;
  const user = await db.user.findFirst({
    where: {
      OR: [{ username: target }, { email: target }],
    },
    select: { email: true, username: true },
  });
  if (!user) {
    return json(submission.reply({ fieldErrors: { otp: ["Invalid code"] } }));
  }
  const session = await verificationSessionStorage.getSession();
  session.set(VERIFICATION_SESSION_KEY, user.email);
  return redirect("/reset-password", {
    headers: {
      "Set-Cookie": await verificationSessionStorage.commitSession(session),
    },
  });
}

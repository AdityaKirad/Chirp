import { redirect } from "@remix-run/node";
import { safeRedirect } from "remix-utils/safe-redirect";
import { sessionKey } from "~/services/authenticator.server";
import { authSessionStorage } from "~/services/session/auth.server";

export async function handleNewSession({
  request,
  redirectTo,
  session,
}: {
  request: Request;
  redirectTo?: string;
  session: { id: string; expiresAt: Date };
}) {
  const authSession = await authSessionStorage.getSession(request.headers.get("Cookie"));
  authSession.set(sessionKey, session.id);
  return redirect(safeRedirect(redirectTo, "/home"), {
    headers: {
      "Set-Cookie": await authSessionStorage.commitSession(authSession, {
        expires: session.expiresAt,
      }),
    },
  });
}

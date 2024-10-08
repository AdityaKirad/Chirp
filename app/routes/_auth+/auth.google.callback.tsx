import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/services/authenticator.server";
import { authSessionStorage } from "~/services/session/auth.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const { id } = await authenticator.authenticate("google", request, { failureRedirect: "/" });
  const session = await authSessionStorage.getSession(request.headers.get("Cookie"));
  session.set(authenticator.sessionKey, id);
  const headers = new Headers({
    "Set-Cookie": await authSessionStorage.commitSession(session),
  });
  return redirect("/home", { headers });
}

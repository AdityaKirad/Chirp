import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { getAuthSession } from "~/services/authenticator.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await getAuthSession(request);
  return json({});
};

export default function Page() {
  return <p>Lists page under construction</p>;
}

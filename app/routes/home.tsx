import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getAuthSession } from "~/services/authenticator.server";

export const meta: MetaFunction = () => {
  return [{ title: "Home" }, { name: "description", content: "Welcome to Remix!" }];
};
export const loader = async ({ request }: LoaderFunctionArgs) => {
  await getAuthSession(request);
  return json({});
};

export default function Page() {
  return (
    <div className="p-4">
      <ul>{["Home", "About", "Contact"]}</ul>
    </div>
  );
}

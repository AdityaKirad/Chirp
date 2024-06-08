import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Home" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Page() {
  return (
    <div className="p-4">
      <ul>{["Home", "About", "Contact"]}</ul>
    </div>
  );
}

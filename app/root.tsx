import { json } from "@remix-run/node";
import { Links, Meta, Scripts, ScrollRestoration, Outlet, useLoaderData } from "@remix-run/react";
import { HoneypotProvider } from "remix-utils/honeypot/react";
import "~/globals.css";
import { honeypot } from "~/services/honeypot.server";

export function loader() {
  const honetpotProps = honeypot.getInputProps();

  return json({ honetpotProps });
}

export default function App() {
  const data = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <HoneypotProvider {...data.honetpotProps}>
          <Outlet />
        </HoneypotProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

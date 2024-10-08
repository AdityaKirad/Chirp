import { Link as RemixLink, NavLink as RemixNavLink } from "@remix-run/react";
import { Routes } from "remix-routes";

export function Link({ to, ...props }: React.ComponentProps<typeof RemixLink> & { to: keyof Routes }) {
  return <RemixLink to={to} {...props} />;
}

export function NavLink({ to, ...props }: React.ComponentProps<typeof RemixNavLink> & { to: keyof Routes }) {
  <RemixNavLink to={to} {...props} />;
}

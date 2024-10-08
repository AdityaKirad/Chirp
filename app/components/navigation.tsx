import { Button } from "./ui";
import { NavLink } from "@remix-run/react";
import { Bell, Bookmark, Home, List, Mail, Search, Settings, UserRound } from "lucide-react";
import { Routes } from "remix-routes";
import BrandLogo from "~/assets/logo-small.webp";

export default function Navigation() {
  return (
    <div className="border-r-2 border-neutral-800">
      <img src={BrandLogo} alt="Brand Logo" loading="lazy" decoding="async" width={64} height={64} />
      <nav className="flex flex-col gap-2 text-lg">
        <NavigationLink href="/" title="Home" icon={<Home />} />
        <NavigationLink href="/explore" title="Explore" icon={<Search />} />
        <NavigationLink href="/notifications" title="Notifications" icon={<Bell />} />
        <NavigationLink href="/messages" title="Messages" icon={<Mail />} />
        <NavigationLink href="/lists" title="Lists" icon={<List />} />
        <NavigationLink href="/profile" title="Profile" icon={<UserRound />} />
        <NavigationLink href="/bookmarks" title="Bookmarks" icon={<Bookmark />} />
        <NavigationLink href="/settings" title="Settings" icon={<Settings />} />
      </nav>
      <Button className="mt-2 w-full rounded-full bg-blue-500 text-white hover:bg-blue-600">Post</Button>
    </div>
  );
}

function NavigationLink({ href, icon, title }: { href: keyof Routes; icon: JSX.Element; title: string }) {
  return (
    <NavLink className="group block outline-none" to={href} title={title}>
      <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 outline-white transition-[outline-color,background-color] duration-300 group-focus-visible:outline group-[.active]:font-semibold group-[:not(:focus-visible)]:group-hover:bg-neutral-800">
        {icon} {title}
      </span>
    </NavLink>
  );
}

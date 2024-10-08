import { Link, Outlet } from "@remix-run/react";
import { X } from "lucide-react";
import LogoSmall from "~/assets/logo-small.webp";
import { Button } from "~/components/ui";

export default function Layout() {
  return (
    <div className="grid sm:h-screen sm:place-items-center">
      <div className="relative w-full rounded px-10 pb-16 pt-2 outline-neutral-700 sm:max-w-lg sm:px-20 sm:outline">
        <img
          className="mx-auto"
          src={LogoSmall}
          alt="brand logo"
          loading="lazy"
          decoding="async"
          height="64"
          width="64"
        />
        <Button className="absolute left-2 top-2 hover:bg-transparent" variant="ghost" size="icon" asChild>
          <Link to="/">
            <X />
          </Link>
        </Button>
        <div className="[&>h1]:text-heading flex flex-col gap-2 [&>h1]:font-semibold">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

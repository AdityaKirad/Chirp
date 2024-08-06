import { type MetaFunction } from "@remix-run/node";
import { Link, Outlet, useLocation, useNavigate } from "@remix-run/react";
import { X } from "lucide-react";
import { useRef } from "react";
import LogoSmall from "~/assets/logo-small.webp";
import Logo from "~/assets/logo.webp";
import GoogleLogin from "~/components/google-login";
import { Button, Separator } from "~/components/ui";
import { useOnClickOutside } from "~/lib/hooks";

export const meta: MetaFunction = () => [{ title: "Happening Now" }];

export default function Page() {
  const { pathname } = useLocation();
  const regex = /\/auth\/([^\\/]+)/;
  const isNestedRoute = regex.test(pathname);
  return (
    <>
      <div className="absolute inset-0 m-auto flex max-w-fit gap-8 px-4 max-lg:flex-col lg:max-h-fit">
        <img
          className="object-cover object-center max-lg:size-20"
          src={Logo}
          srcSet={`${LogoSmall} 1024w, ${Logo}`}
          height={400}
          width={400}
          alt="brand logo"
          loading="lazy"
          decoding="async"
        />

        <div className="font-bold">
          <h1 className="text-4xl">Happening now</h1>
          <h2 className="my-12 text-3xl">Join today</h2>
          <div className="flex max-w-64 flex-col">
            <GoogleLogin />
            <Separator className="my-2" />
            <Button
              className="rounded-full bg-blue-500 text-white hover:bg-blue-600 focus-visible:bg-blue-600 focus-visible:ring-blue-600"
              asChild>
              <Link to="/auth/signup">Create Account</Link>
            </Button>
            <h3 className="mb-4 mt-12">Already have an account?</h3>
            <Button
              className="rounded-full !text-blue-500 hover:bg-blue-500/10 focus-visible:bg-blue-500/10 focus-visible:ring-blue-500"
              variant="outline"
              asChild>
              <Link to="/auth/login">Sign in</Link>
            </Button>
          </div>
        </div>
      </div>
      {isNestedRoute && <AuthLayout />}
    </>
  );
}

function AuthLayout() {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const exitCurrentAuthFlow = () => navigate("/auth");
  useOnClickOutside(ref, exitCurrentAuthFlow);
  return (
    <div className="fixed inset-0 isolate z-10 grid overflow-auto before:fixed before:inset-0 before:bg-black/50 before:backdrop-blur-lg sm:place-items-center">
      <div
        ref={ref}
        className="relative w-full rounded bg-background px-10 pb-16 pt-2 outline outline-neutral-700 sm:m-4 sm:max-w-lg sm:px-20">
        <img
          className="mx-auto"
          src={LogoSmall}
          alt="brand logo"
          loading="lazy"
          decoding="async"
          height="64"
          width="64"
        />
        <Button
          className="absolute left-2 top-2 hover:bg-transparent"
          variant="ghost"
          size="icon"
          onClick={exitCurrentAuthFlow}>
          <X />
        </Button>
        <div className="[&>h1]:mb-4 [&>h1]:text-lg [&>h1]:font-semibold">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

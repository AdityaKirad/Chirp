import { type MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import Logo from "~/assets/logo.webp";
import GoogleLogin from "~/components/google-login";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

export const meta: MetaFunction = () => [{ title: "Happening Now" }];

const Page = () => {
  return (
    <>
      <div className="fixed inset-0 flex max-lg:mx-auto max-lg:max-w-fit max-lg:flex-col lg:items-center lg:[&>div]:flex-1">
        <div>
          <img
            className="object-cover object-center max-lg:size-20"
            src={Logo}
            alt="brand logo"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>
          <div className="mx-auto max-w-fit">
            <h1 className="text-4xl font-bold">Happening now</h1>
            <h2 className="my-12 text-3xl font-semibold">Join today</h2>
            <div className="flex max-w-64 flex-col">
              <GoogleLogin />
              <Separator className="my-2" />
              <Button
                className="rounded-full bg-blue-500 text-white hover:bg-blue-600 focus-visible:bg-blue-600 focus-visible:ring-blue-600"
                asChild>
                <Link to="/auth/signup">Create Account</Link>
              </Button>
              <h3 className="mb-4 mt-12 font-semibold">Already have an account?</h3>
              <Button
                className="rounded-full !text-blue-500 hover:bg-blue-500/10 focus-visible:bg-blue-500/10 focus-visible:ring-blue-500"
                variant="outline"
                asChild>
                <Link to="/auth/login">Sign in</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Page;

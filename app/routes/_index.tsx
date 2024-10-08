import { Link } from "@remix-run/react";
import LogoSmall from "~/assets/logo-small.webp";
import Logo from "~/assets/logo.webp";
import GoogleLogin from "~/components/google-login";
import { Button, Separator } from "~/components/ui";

export const meta = () => [
  {
    title: "Happening Now",
  },
];

export default function Page() {
  return (
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
        <h1 className="text-auth-heading">Happening now</h1>
        <h2 className="text-auth-sub-heading my-12">Join today</h2>
        <div className="flex max-w-64 flex-col">
          <GoogleLogin />
          <Separator className="my-2" />
          <Button
            className="rounded-full bg-blue-500 text-white hover:bg-blue-600 focus-visible:bg-blue-600 focus-visible:ring-blue-600"
            asChild>
            <Link to="/signup">Create Account</Link>
          </Button>
          <h3 className="mb-4 mt-12">Already have an account?</h3>
          <Button
            className="rounded-full !text-blue-500 hover:bg-blue-500/10 focus-visible:bg-blue-500/10 focus-visible:ring-blue-500"
            variant="outline"
            asChild>
            <Link to="/login">Sign in</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

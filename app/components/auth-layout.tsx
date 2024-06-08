import { Button } from "./ui/button";
import { X } from "lucide-react";
import BrandLogo from "~/assets/logo-small.webp";

type AuthLayout = {
  children: React.ReactNode;
  title: string;
};

export default function AuthLayout(props: AuthLayout) {
  return (
    <div className="fixed inset-0 z-10">
      <div className="fixed inset-0 bg-background/80" />
      <div className="fixed inset-0 rounded bg-background px-10 pb-16 pt-2 outline outline-neutral-700 sm:m-auto sm:h-fit sm:max-w-lg sm:px-20">
        <img
          className="mx-auto"
          src={BrandLogo}
          alt="brand logo"
          loading="lazy"
          decoding="async"
          height="64"
          width="64"
        />
        <Button className="absolute left-2 top-2 hover:bg-transparent" variant="ghost" size="icon">
          <X />
        </Button>
        <div>
          <h2 className="mb-4 text-lg font-semibold">{props.title}</h2>
          {props.children}
        </div>
      </div>
    </div>
  );
}

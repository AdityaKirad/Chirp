import GoogleLogo from "./google-logo";
import { Button } from "./ui/button";
import { Link } from "@remix-run/react";

export default function GoogleLogin() {
  return (
    <Button className="justify-start gap-4 rounded-full p-2" asChild>
      <Link to="/auth">
        <GoogleLogo className="h-6 w-6" /> <span>Sign up with Google</span>
      </Link>
    </Button>
  );
}

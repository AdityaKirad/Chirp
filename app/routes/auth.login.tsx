import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Form } from "@remix-run/react";
import AuthLayout from "~/components/auth-layout";
import GoogleLogin from "~/components/google-login";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";
import { authenticator } from "~/services/auth.server";

export const action: ActionFunction = async ({ request }) => {
  return await authenticator.authenticate("credentials", request, {
    successRedirect: "/",
    failureRedirect: "/auth",
  });
};

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });
};

export default function Page() {
  return (
    <AuthLayout title="Sign in to Twitter Clone">
      <div className="flex flex-col gap-4">
        <GoogleLogin />
        <Separator />
        <Form method="POST" className="flex flex-col gap-4">
          <Input type="text" placeholder="Email or username" name="user" />
          <Input type="password" placeholder="Your Password" name="password" />
          <Button type="submit" className="rounded-full">
            Next
          </Button>
        </Form>
        <Button className="rounded-full" variant="outline">
          Forgot Password?
        </Button>
      </div>
      <p className="text-neutral-700">
        Don&apos;t have an account?
        <Button className="text-blue-500" variant="link" asChild>
          <Link to="/auth/signup">Sign up</Link>
        </Button>
      </p>
    </AuthLayout>
  );
}

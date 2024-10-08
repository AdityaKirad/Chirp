import { getFormProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { HoneypotInputs } from "remix-utils/honeypot/react";
import { PasswordField } from "~/components/password-field";
import { Button, Loader } from "~/components/ui";
import { useIsPending } from "~/lib/hooks";
import { PasswordAndConfirmPasswordSchema as schema } from "~/lib/user-validation";
import { checkHoneyPot } from "~/services/honeypot.server";
import { verificationSessionStorage } from "~/services/session/verify.sever";

export const VERIFICATION_SESSION_KEY = "resetPasswordEmail";

async function getResetPasswordEmail(request: Request) {
  const session = await verificationSessionStorage.getSession(request.headers.get("Cookie"));
  const email = session.get(VERIFICATION_SESSION_KEY);
  if (typeof email !== "string" || !email) {
    throw redirect("/login");
  }
  return email;
}

export async function loader({ request }: LoaderFunctionArgs) {
  await getResetPasswordEmail(request);
  return json({});
}

export async function action({ request }: ActionFunctionArgs) {
  const resetPasswordEmail = await getResetPasswordEmail(request);
  const formData = await request.formData();
  checkHoneyPot(formData);
  const submission = parseWithZod(formData, { schema });
  if (submission.status !== "success") {
    return json(submission.reply());
  }
  return json({});
}

export default function Page() {
  const isPending = useIsPending();
  const lastResult = useActionData<typeof action>();
  const [form, fields] = useForm({
    id: "reset-password",
    lastResult,
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
  });
  return (
    <>
      <h1>Choose a new password</h1>
      <p className="text-sm text-muted-foreground">
        Make sure your new password is 8 characters or more. Try including numbers, letters, and punctuation marks for a
        strong password.
      </p>
      <p className="text-sm text-muted-foreground">
        You&apos;ll be logged out of all active X sessions after your password is changed.
      </p>
      <Form method="POST" className="space-y-4" {...getFormProps(form)}>
        <HoneypotInputs />
        <PasswordField field={fields.password} placeholder="Enter a new password" />
        <PasswordField field={fields.confirmPassword} placeholder="Confirm your password" />
        <Button type="submit" className="w-full rounded-full" disabled={isPending}>
          {isPending ? <Loader /> : "Next"}
        </Button>
      </Form>
    </>
  );
}

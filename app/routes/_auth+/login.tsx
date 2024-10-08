import { handleNewSession } from "./login.server";
import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { type ActionFunctionArgs, json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, Form, useActionData, useSearchParams } from "@remix-run/react";
import { HoneypotInputs } from "remix-utils/honeypot/react";
import { z, type IssueData } from "zod";
import GoogleLogin from "~/components/google-login";
import { PasswordField } from "~/components/password-field";
import { Field, FieldError, Loader } from "~/components/ui";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";
import { useIsPending } from "~/lib/hooks";
import { IdentifierSchema, PasswordSchema } from "~/lib/user-validation";
import { getAnonymousSession, login } from "~/services/authenticator.server";
import { checkHoneyPot } from "~/services/honeypot.server";

const schema = z.object({
  identifier: IdentifierSchema,
  password: PasswordSchema,
  redirectTo: z.string().optional(),
});

export const meta = () => [
  {
    title: "Login to Chirp",
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  await getAnonymousSession(request);
  return json({});
}

export async function action({ request }: ActionFunctionArgs) {
  await getAnonymousSession(request);

  const formData = await request.formData();

  checkHoneyPot(formData);

  const submission = await parseWithZod(formData, {
    schema: (intent) =>
      schema.transform(async (data, ctx) => {
        if (intent !== null) return { ...data, session: null };

        const session = await login(data);
        if (!session) {
          const issue: IssueData = {
            code: z.ZodIssueCode.custom,
            message: "Invalid credentials",
          };
          ctx.addIssue({
            path: ["identifier"],
            ...issue,
          });
          ctx.addIssue({
            path: ["password"],
            ...issue,
          });
          return z.NEVER;
        }

        return { ...data, session };
      }),
    async: true,
  });

  if (submission.status !== "success" || !submission.value.session) {
    console.log(submission.reply());
    return json(submission.reply({ hideFields: ["password"] }));
  }

  const { session, redirectTo } = submission.value;

  await handleNewSession({
    request,
    session,
    redirectTo,
  });
}

export default function Page() {
  const lastResult = useActionData<typeof action>();
  const isSubmitting = useIsPending();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");
  const [form, fields] = useForm({
    id: "login",
    lastResult,
    defaultValue: { redirectTo },
    shouldRevalidate: "onBlur",
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
  });
  return (
    <>
      <h1>Sign in to Chirp</h1>
      <div className="contents">
        <GoogleLogin />
        <Separator />
        <Form className="contents" method="POST" {...getFormProps(form)}>
          <HoneypotInputs />

          <Field>
            <Input placeholder="Email or username" {...getInputProps(fields.identifier, { type: "text" })} />
            <FieldError>{fields.identifier.errors?.join(", ")}</FieldError>
          </Field>

          <PasswordField placeholder="Your password" field={fields.password} />

          <input {...getInputProps(fields.redirectTo, { type: "hidden" })} />

          <Button type="submit" className="rounded-full" disabled={isSubmitting}>
            {isSubmitting ? <Loader /> : "Next"}
          </Button>
        </Form>
        <Button className="rounded-full" variant="outline" asChild>
          <Link to="/forgot-password">Forgot Password?</Link>
        </Button>
      </div>
      <p className="text-neutral-700">
        Don&apos;t have an account?
        <Button className="text-blue-500" variant="link" asChild>
          <Link
            to={{
              pathname: "/signup",
              search: redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : "",
            }}>
            Sign up
          </Link>
        </Button>
      </p>
    </>
  );
}

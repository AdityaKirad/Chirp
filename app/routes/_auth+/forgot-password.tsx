import { prepareVerification } from "./verify.server";
import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { json, redirect, type ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { HoneypotInputs } from "remix-utils/honeypot/react";
import { z } from "zod";
// import ForgotPasswordMail from "~/components/mails/forgot-password";
import { Button, Field, FieldError, Input, Loader } from "~/components/ui";
import { useIsPending } from "~/lib/hooks";
import { IdentifierSchema } from "~/lib/user-validation";
import { db } from "~/services/db.server";
// import { sendEmail } from "~/services/email.server";
import { checkHoneyPot } from "~/services/honeypot.server";

export const schema = z.object({
  identifer: IdentifierSchema,
});

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  checkHoneyPot(formData);

  const submission = await parseWithZod(formData, {
    schema: schema.superRefine(async ({ identifer }, ctx) => {
      const doesUserExist = await db.user.findFirst({
        where: {
          OR: [{ email: identifer }, { username: identifer }],
        },
        select: { id: true },
      });
      if (!doesUserExist) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["identifer"],
          message: "No accout with following credentials",
        });
        return;
      }
    }),
    async: true,
  });

  if (submission.status !== "success") return json(submission.reply());

  const { identifer } = submission.value;

  // const user = await db.user.findFirstOrThrow({
  //   where: {
  //     OR: [{ email: identifer }, { username: identifer }],
  //   },
  //   select: { email: true, username: true },
  // });

  const { otp, redirectUrl } = await prepareVerification({
    period: 60 * 10,
    request,
    target: identifer,
    type: "reset-password",
  });

  // const { success } = await sendEmail({
  //   to: user.email,
  //   subject: "Password reset request",
  //   react: ForgotPasswordMail({ otp, username: user.username }),
  // });
  // if (!success) {
  //   return json(submission.reply({ formErrors: ["Failed to send email please try again"] }));
  // }

  return redirect(redirectUrl.toString());
}

export default function Page() {
  const isPending = useIsPending();
  const lastResult = useActionData<typeof action>();
  const [form, fields] = useForm({
    id: "forgot-password",
    lastResult,
    shouldRevalidate: "onBlur",
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
  });
  return (
    <>
      <h1>Find your Chirp Account</h1>
      <p className="text-sm text-muted-foreground">
        Enter email or username associated with your account to change password
      </p>
      <Form method="POST" className="mt-8" {...getFormProps(form)}>
        <HoneypotInputs />

        <Field>
          <Input placeholder="Enter email or username" {...getInputProps(fields.identifer, { type: "text" })} />
          <FieldError>{fields.identifer.errors?.join(", ")}</FieldError>
        </Field>

        <Button className="mt-24 w-full rounded-full" disabled={isPending}>
          {isPending ? <Loader /> : "Next"}
        </Button>
      </Form>
    </>
  );
}

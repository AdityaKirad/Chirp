import { PersonalInfo } from "./personal-info";
import { createSchema } from "./schema";
import { isEmailUnique, createNewUser } from "./utils.server";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { json, redirect, type ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import OTPEmail from "~/components/otp-mail";
import { Button, Loader } from "~/components/ui";
import { sendEmail } from "~/services/email.server";
import { generateTOTP } from "~/services/totp.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const submission = await parseWithZod(formData, {
    schema: (intent) => createSchema(intent, { isEmailUnique }),
    async: true,
  });
  if (submission.status !== "success") return json(submission.reply());
  const { otp, charSet: _charSet, ...otpProps } = generateTOTP({ period: 600 });
  const { error } = await sendEmail({
    to: submission.value.email,
    subject: "Verication code for Chirp",
    react: OTPEmail({ otp }),
  });
  if (error) return json(submission.reply({ fieldErrors: { email: [error.message] } }));
  const id = await createNewUser({ userInfo: submission.value, verification: otpProps });
  if (id) return redirect("/auth/signup/verify");
  return null;
};

export default function Page() {
  const lastResult = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [form, fields] = useForm({
    id: "signup",
    lastResult,
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: (intent) => createSchema(intent) });
    },
  });

  return (
    <>
      <h1>Create your account</h1>
      <Form
        className="flex flex-col gap-2"
        method="POST"
        id={form.id}
        onSubmit={form.onSubmit}
        autoComplete="off"
        noValidate>
        <PersonalInfo fields={fields} />
        <Button className="rounded-full" type="submit" disabled={!form.valid || isSubmitting}>
          {isSubmitting ? <Loader /> : "Next"}
        </Button>
      </Form>
    </>
  );
}

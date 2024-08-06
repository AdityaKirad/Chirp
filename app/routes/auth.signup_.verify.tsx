import { getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { z } from "zod";
import { Field, FieldError } from "~/components/field";
import { Button, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, Label, Loader } from "~/components/ui";

const schema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
});

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  console.log(formData);
  const submission = parseWithZod(formData, { schema });
  if (submission.status !== "success") return json(submission.reply());
  return redirect("/auth/signup/finalize");
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
      return parseWithZod(formData, { schema });
    },
  });
  return (
    <>
      <h1>We have sent you a code</h1>
      <Form method="POST" id={form.id} onSubmit={form.onSubmit} autoComplete="off" noValidate>
        <Field>
          <Label htmlFor={fields.otp.id}>Enter it below to verify your email</Label>
          <InputOTP maxLength={6} {...getInputProps(fields.otp, { type: "text" })}>
            <InputOTPGroup className="flex-1 [&>*]:flex-1">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup className="flex-1 [&>*]:flex-1">
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <FieldError>{fields.otp.errors}</FieldError>
        </Field>
        <Button className="mt-20 w-full rounded-full" type="submit" disabled={!form.valid || isSubmitting}>
          {isSubmitting ? <Loader /> : "Next"}
        </Button>
      </Form>
    </>
  );
}

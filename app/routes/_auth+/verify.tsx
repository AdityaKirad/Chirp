import { validateRequest } from "./verify.server";
import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { type ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useSearchParams } from "@remix-run/react";
import { HoneypotInputs } from "remix-utils/honeypot/react";
import { z } from "zod";
import { Button, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, Label, Loader } from "~/components/ui";
import { Field, FieldError } from "~/components/ui/field";
import { useIsPending } from "~/lib/hooks";
import { checkHoneyPot } from "~/services/honeypot.server";

export const typeQueryParam = "type";
export const targetQueryParam = "target";
export const redirectToQueryParam = "redirectTo";

const VerificationTypeSchema = z.enum(["onboarding", "reset-password"]);
export const VerificationSchema = z.object({
  otp: z.string().min(6).max(6),
  [typeQueryParam]: VerificationTypeSchema,
  [targetQueryParam]: z.string(),
  [redirectToQueryParam]: z.string().optional(),
});

export type VerificationType = z.infer<typeof VerificationTypeSchema>;

export const meta = () => [{ title: "Verify your account" }];

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  checkHoneyPot(formData);

  return validateRequest(request, formData);
};

export default function Page() {
  const lastResult = useActionData<typeof action>();
  const isSubmitting = useIsPending();
  const [searchParams] = useSearchParams();
  const [form, fields] = useForm({
    id: "signup",
    lastResult,
    defaultValue: {
      type: searchParams.get("type"),
      target: searchParams.get("target"),
      redirectTo: searchParams.get("redirectTo"),
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: VerificationSchema });
    },
  });
  return (
    <>
      <h1>We have sent you a code</h1>
      <Form method="POST" {...getFormProps(form)}>
        <HoneypotInputs />

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

        <input {...getInputProps(fields[targetQueryParam], { type: "hidden" })} />
        <input {...getInputProps(fields[typeQueryParam], { type: "hidden" })} />
        <input {...getInputProps(fields[redirectToQueryParam], { type: "hidden" })} />
        <Button className="mt-24 w-full rounded-full text-[1rem]" type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Loader /> : "Next"}
        </Button>
      </Form>
    </>
  );
}

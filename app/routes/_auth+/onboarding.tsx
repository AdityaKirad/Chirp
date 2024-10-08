import { CredentialsSchema as schema } from "./schema";
import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { type ActionFunctionArgs } from "@remix-run/node";
import { Form, json, useActionData, useNavigation } from "@remix-run/react";
import { HoneypotInputs } from "remix-utils/honeypot/react";
import { PasswordField } from "~/components/password-field";
import { Button, Field, FieldError, Input, Label, Loader } from "~/components/ui";
import { db } from "~/services/db.server";

export const meta = () => [{ title: "Setup your account" }];
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const submission = await parseWithZod(formData, {
    schema: schema.superRefine(async ({ username }, ctx) => {
      const isTaken = await db.user.findUnique({
        where: { username },
        select: { id: true },
      });
      if (isTaken) {
        ctx.addIssue({
          code: "custom",
          path: ["username"],
          message: "username already taken",
        });
      }
    }),
    async: true,
  });
  if (submission.status !== "success") return json(submission.reply());
  return null;
}

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
      <h1>Setup your account</h1>
      <Form className="flex flex-col gap-2" method="POST" {...getFormProps(form)}>
        <HoneypotInputs />

        <Field>
          <Label htmlFor={fields.username.id}>UserName</Label>
          <Input placeholder="Enter username" {...getInputProps(fields.username, { type: "text" })} />
          <FieldError>{fields.username.errors?.join(", ")}</FieldError>
        </Field>

        <PasswordField label="Password" field={fields.password} placeholder="Enter new password" />

        <PasswordField label="Confirm Password" field={fields.confirmPassword} placeholder="Confirm Password" />

        <Button className="rounded-full" type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Loader /> : "Next"}
        </Button>
      </Form>
    </>
  );
}

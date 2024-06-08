import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { json, type ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import AuthLayout from "~/components/auth-layout";
import Profile from "~/components/profile";
import { Button } from "~/components/ui/button";
import { ProfileSchema } from "~/lib/schema";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  console.log(Object.fromEntries(formData));
  const submission = parseWithZod(formData, { schema: ProfileSchema });
  if (submission.status !== "success") return json(submission.reply());
  return null;
};

export default function Page() {
  const lastResult = useActionData<typeof action>();
  const [form, fields] = useForm({
    id: "signup",
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: ProfileSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <AuthLayout title="Create your account">
      <Form
        className="flex flex-col gap-4"
        method="POST"
        id={form.id}
        onSubmit={form.onSubmit}
        autoComplete="off"
        noValidate>
        <Profile fields={fields} />
        <Button className="rounded-full" type="submit">
          Next
        </Button>
      </Form>
    </AuthLayout>
  );
}

import { Credentials } from "./credentials";
import { createSchema } from "./schema";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { type ActionFunctionArgs } from "@remix-run/node";
import { Form, json, useActionData, useNavigation } from "@remix-run/react";
import { Button, Loader } from "~/components/ui";
import { db } from "~/services/db.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const submission = await parseWithZod(formData, {
    schema: (intent) =>
      createSchema(intent, {
        async isUsernameTaken(username) {
          const isUsernameTaken = await db.user.findUnique({ where: { username }, select: { id: true } });
          return isUsernameTaken ? true : false;
        },
      }),
    async: true,
  });
  if (submission.status !== "success") return json(submission.reply());
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
      return parseWithZod(formData, { schema: createSchema });
    },
  });
  return (
    <>
      <h1>Setup your account</h1>
      <Form
        className="flex flex-col gap-2"
        method="POST"
        id={form.id}
        onSubmit={form.onSubmit}
        autoComplete="off"
        noValidate>
        <Credentials fields={fields} />
        <Button className="rounded-full" type="submit" disabled={!form.valid || isSubmitting}>
          {isSubmitting ? <Loader /> : "Next"}
        </Button>
      </Form>
    </>
  );
}

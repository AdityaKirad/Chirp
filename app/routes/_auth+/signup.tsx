import { prepareVerification } from "./verify.server";
import {
  getFormProps,
  getInputProps,
  unstable_useControl as useControl,
  useForm,
  type FieldMetadata,
} from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { json, redirect, type ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useSearchParams } from "@remix-run/react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useRef } from "react";
import { HoneypotInputs } from "remix-utils/honeypot/react";
import { z } from "zod";
// import ConfirmationMail from "~/components/mails/confirmation";
import {
  Button,
  Calendar,
  Field,
  FieldError,
  Input,
  Label,
  Loader,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui";
import { useIsPending } from "~/lib/hooks";
import { DOBSchema, EmailSchema, NameSchema } from "~/lib/user-validation";
import { cn } from "~/lib/utils";
import { db } from "~/services/db.server";
// import { sendEmail } from "~/services/email.server";
import { checkHoneyPot } from "~/services/honeypot.server";
import { createOnboardingUser } from "~/services/session/onboarding.server";

const schema = z.object({
  name: NameSchema,
  email: EmailSchema,
  dob: DOBSchema,
  redirectTo: z.string().optional(),
});

export const meta = () => [{ title: "Signup to Chirp" }];

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  checkHoneyPot(formData);

  const submission = await parseWithZod(formData, {
    schema: schema.superRefine(async ({ email }, ctx) => {
      const isEmailTaken = await db.user.findUnique({
        where: { email },
        select: { id: true },
      });
      if (isEmailTaken) {
        ctx.addIssue({
          path: ["email"],
          code: "custom",
          message: "Email already taken",
        });
      }
    }),
    async: true,
  });
  if (submission.status !== "success") {
    return json(submission.reply());
  }
  const { email } = submission.value;
  const [{ otp, redirectUrl }, session] = await Promise.all([
    prepareVerification({ request, target: email, type: "onboarding", period: 60 * 10 }),
    createOnboardingUser({ ...submission.value }),
  ]);

  // const { success } = await sendEmail({
  //   to: email,
  //   subject: "Verication code for Chirp",
  //   react: ConfirmationMail({ otp }),
  // });
  // if (!success) {
  //   return json(submission.reply({ formErrors: ["Failed to send email please try again"] }));
  // }

  console.log(otp);

  return redirect(redirectUrl.toString(), {
    headers: {
      "Set-Cookie": session,
    },
  });
}

export default function Page() {
  const lastResult = useActionData<typeof action>();
  const isSubmitting = useIsPending();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");
  const [form, fields] = useForm({
    id: "signup",
    lastResult,
    defaultValue: { redirectTo },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
    onValidate: ({ formData }) => parseWithZod(formData, { schema }),
  });

  return (
    <>
      <h1>Create your account</h1>
      <Form className="contents" method="POST" {...getFormProps(form)}>
        <HoneypotInputs />

        <Field>
          <Label htmlFor={fields.name.id}>Name</Label>
          <Input placeholder="Your name" {...getInputProps(fields.name, { type: "text" })} />
          <FieldError>{fields.name.errors}</FieldError>
        </Field>

        <Field>
          <Label htmlFor={fields.email.id}>Email</Label>
          <Input placeholder="Your email" {...getInputProps(fields.email, { type: "email" })} />
          <FieldError>{fields.email.errors}</FieldError>
        </Field>

        <DOBField field={fields.dob} />

        <Input {...getInputProps(fields.redirectTo, { type: "hidden" })} />
        <Button className="rounded-full" type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Loader /> : "Next"}
        </Button>
      </Form>
    </>
  );
}

function DOBField({ field }: { field: FieldMetadata<Date> }) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const control = useControl(field);
  const controlValue = control.value;
  const DATE_FORMAT = "yyyy-MM-dd";
  return (
    <Field>
      <Label htmlFor={field.name}>Date of birth</Label>
      <p className="text-sm text-muted-foreground">
        This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or
        something else.
      </p>
      <Input
        type="hidden"
        id={field.name}
        ref={control.register}
        name={field.name}
        defaultValue={
          controlValue
            ? format(new Date(controlValue), DATE_FORMAT)
            : field.initialValue
              ? format(new Date(field.initialValue), DATE_FORMAT)
              : ""
        }
        onFocus={() => triggerRef.current?.focus()}
        tabIndex={-1}
        aria-hidden
      />

      <Popover>
        <PopoverTrigger asChild>
          <Button
            ref={triggerRef}
            className={cn("w-full justify-between", {
              "text-muted-foreground": !controlValue,
            })}
            variant="outline">
            <span>{controlValue ? format(new Date(controlValue), "MMM d, yyyy") : "Pick a date"}</span>
            <CalendarIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto bg-background p-0">
          <Calendar
            mode="single"
            captionLayout="dropdown"
            fromYear={1900}
            toYear={new Date().getFullYear()}
            selected={new Date(controlValue ?? "")}
            onSelect={(e) => control.change(e?.toISOString() ?? "")}
          />
        </PopoverContent>
      </Popover>
      <FieldError>{field.errors}</FieldError>
    </Field>
  );
}

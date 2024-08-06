import { type CredentialsSchema } from "./schema";
import { getInputProps, type FieldMetadata } from "@conform-to/react";
import { Field, FieldError } from "~/components/field";
import { Input, Label, PasswordInput } from "~/components/ui";

type FieldProps = FieldMetadata<string, CredentialsSchema, string[]>;

type PasswordFieldProps = {
  field: FieldProps;
  label: string;
  placeholder: string;
};

type Props = {
  fields: Required<{
    [K in keyof CredentialsSchema]: FieldProps;
  }>;
};

export function Credentials({ fields }: Props) {
  return (
    <>
      <Field>
        <Label htmlFor={fields.username.id}>Username</Label>
        <Input {...getInputProps(fields.username, { type: "text" })} placeholder="Username" />
        <FieldError>{fields.username.errors?.join(", ")}</FieldError>
      </Field>
      <PasswordField field={fields.password} label="Password" placeholder="Password" />
      <PasswordField field={fields.confirmPassword} label="Confirm Password" placeholder="Confirm Password" />
    </>
  );
}

function PasswordField({ field, label, placeholder }: PasswordFieldProps) {
  return (
    <Field>
      <Label htmlFor={field.id}>{label}</Label>
      <PasswordInput
        key={field.key}
        id={field.id}
        name={field.name}
        form={field.formId}
        defaultValue={field.value}
        placeholder={placeholder}
        aria-invalid={!field.valid || undefined}
        aria-describedby={!field.valid ? field.errorId : undefined}
      />
      <FieldError>{field.errors?.join(", ")}</FieldError>
    </Field>
  );
}

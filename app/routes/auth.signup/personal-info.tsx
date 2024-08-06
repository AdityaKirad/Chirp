import { type PersonalInfoType } from "./schema";
import { getInputProps, type FieldMetadata, unstable_useControl as useControl } from "@conform-to/react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useRef } from "react";
import { Field, FieldError } from "~/components/field";
import { Button, Calendar, Input, Label, Popover, PopoverContent, PopoverTrigger } from "~/components/ui";
import { cn } from "~/lib/utils";

type InputField = FieldMetadata<string, PersonalInfoType, string[]>;
type DOBFieldType = FieldMetadata<Date>;

type Props = {
  fields: Required<{
    name: InputField;
    email: InputField;
    dob: DOBFieldType;
  }>;
};

export function PersonalInfo({ fields }: Props) {
  return (
    <>
      <Field>
        <Label htmlFor={fields.name.id}>Name</Label>
        <Input {...getInputProps(fields.name, { type: "text" })} placeholder="Your name" />
        <FieldError>{fields.name.errors}</FieldError>
      </Field>

      <Field>
        <Label htmlFor={fields.email.id}>Email</Label>
        <Input {...getInputProps(fields.email, { type: "email" })} placeholder="Your email" />
        <FieldError>{fields.email.errors}</FieldError>
      </Field>

      <DOBField field={fields.dob} />
    </>
  );
}

function DOBField({ field }: { field: DOBFieldType }) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const control = useControl(field);
  const controlValue = control.value;
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
            ? format(new Date(controlValue), "yyyy-MM-dd")
            : field.initialValue
              ? format(new Date(field.initialValue), "yyyy-MM-dd")
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
            className=""
            classNames={{
              caption_dropdowns: "flex items-center gap-2",
              dropdown:
                "absolute inset-0 appearance-none border-0 border-none bg-background opacity-0 [&>option]:p-2 hover:[&>option]:bg-accent-foreground focus-visible:[&>option]:bg-accent-foreground",
              dropdown_month: "relative",
              dropdown_year: "relative",
              caption_label: "inline-flex items-center gap-2 text-sm font-medium",
            }}
          />
        </PopoverContent>
      </Popover>
      <FieldError>{field.errors}</FieldError>
    </Field>
  );
}

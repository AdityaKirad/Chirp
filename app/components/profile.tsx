import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { type FieldMetadata, unstable_useControl as useControl } from "@conform-to/react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useRef } from "react";
import { ProfileType } from "~/lib/schema";
import { cn } from "~/lib/utils";

type Field = FieldMetadata<string, ProfileType, string[]>;
type DOBField = FieldMetadata<Date>;

type Props = {
  fields: Required<{
    name: Field;
    email: Field;
    dob: DOBField;
  }>;
};

export default function Profile({ fields }: Props) {
  return (
    <>
      <Name field={fields.name} />
      <Email field={fields.email} />
      <DOB field={fields.dob} />
    </>
  );
}

function Field({ children }: { children: React.ReactNode }) {
  return <div className="space-y-2">{children}</div>;
}

function FieldError({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-red-500">{children}</p>;
}

function Name({ field }: { field: Field }) {
  return (
    <Field>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        placeholder="Your name"
        id="name"
        min="1"
        max="50"
        key={field.key}
        name={field.name}
        defaultValue={field.initialValue}
      />
      <FieldError>{field.errors}</FieldError>
    </Field>
  );
}

function Email({ field }: { field: Field }) {
  return (
    <Field>
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        placeholder="Your email"
        id="email"
        key={field.key}
        name={field.name}
        defaultValue={field.initialValue}
      />
      <FieldError>{field.errors}</FieldError>
    </Field>
  );
}

function DOB({ field }: { field: DOBField }) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const control = useControl(field);
  const controlValue = control.value;
  return (
    <Field>
      <Label htmlFor="dob">Date of birth</Label>
      <p className="text-sm text-muted-foreground">
        This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or
        something else.
      </p>
      <Input
        type="hidden"
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
            captionLayout="dropdown-buttons"
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

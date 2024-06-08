import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { type FieldMetadata } from "@conform-to/react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useMultiStepForm } from "~/lib/hooks";
import { Profile as ProfileType } from "~/lib/schema";
import { cn } from "~/lib/utils";

type Field = FieldMetadata<string, ProfileType, string[]>;

type Props = {
  fields: Required<{
    name: Field;
    email: Field;
    // dob?: Field;
  }>;
};

export default function Profile({ fields }: Props) {
  return (
    <>
      <Name field={fields.name} />
      <Email field={fields.email} />
      {/* <DOB {...fields.dob} /> */}
    </>
  );
}

function Name({ field }: { field: Field }) {
  return (
    <div className="space-y-2">
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
      <span>{field.errors}</span>
    </div>
  );
}

function Email({ field }: { field: Field }) {
  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input
        className="mt-2"
        type="email"
        placeholder="Your email"
        id="email"
        key={field.key}
        name={field.name}
        defaultValue={field.initialValue}
      />
      <span>{field.errors}</span>
    </div>
  );
}

function DOB(props: Field) {
  const { selected, handleChange } = useMultiStepForm((state) => state.dob);
  return (
    <div className="space-y-2">
      <Label htmlFor="dob">Date of birth</Label>
      <p className="text-sm text-muted-foreground">
        This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or
        something else.
      </p>
      <Input type="hidden" name="dob" value={selected ? format(selected, "MMM d, yyyy") : "Pick a date"} />

      <Popover>
        <PopoverTrigger asChild>
          <Button className={cn("w-full justify-between", { "text-muted-foreground": !selected })} variant="outline">
            <span>{selected ? format(selected, "MMM d, yyyy") : "Pick a date"}</span>
            <CalendarIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto bg-background p-0">
          <Calendar
            mode="single"
            captionLayout="dropdown-buttons"
            fromYear={1900}
            toYear={new Date().getFullYear()}
            selected={selected}
            onSelect={(e) => handleChange({ dob: e })}
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
    </div>
  );
}

import { format } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, useDayPicker, useNavigation } from "react-day-picker";
import { buttonVariants } from "~/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger } from "~/components/ui/select";
import { cn } from "~/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",

        vhidden: "sr-only",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "size-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(buttonVariants({ variant: "ghost" }), "size-9 p-0 font-normal aria-selected:opacity-100"),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="size-4" {...props} />,
        IconRight: ({ ...props }) => <ChevronRight className="size-4" {...props} />,
        // eslint-disable-next-line react/prop-types
        Dropdown: ({ name, value }) => {
          const { fromDate, fromMonth, fromYear, toDate, toMonth, toYear } = useDayPicker();
          const { currentMonth, goToMonth } = useNavigation();
          if (name === "months") {
            const months = Array.from({ length: 12 }, (_, i) => ({
              index: i.toString(),
              value: format(new Date(2024, i, 1), "MMM"),
            }));
            return (
              <Select
                value={value?.toString()}
                onValueChange={(date) => {
                  const newDate = new Date(currentMonth);
                  newDate.setMonth(parseInt(date));
                  goToMonth(newDate);
                }}>
                <SelectTrigger
                  className="h-fit gap-2 py-1 opacity-50 transition-[colors,opacity] hover:bg-accent hover:text-accent-foreground hover:opacity-100 [&>svg]:data-[state=open]:rotate-180"
                  title="select-month">
                  <span>{format(currentMonth, "MMM")}</span>
                </SelectTrigger>
                <SelectContent className="bg-background">
                  {months.map((month) => (
                    <SelectItem key={month.index} value={month.index}>
                      {month.value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            );
          } else {
            const startYear = fromYear || fromDate?.getFullYear() || fromMonth?.getFullYear();
            const endingYear = toYear || toDate?.getFullYear() || toMonth?.getFullYear();
            if (startYear && endingYear) {
              const years = Array.from({ length: endingYear - startYear + 1 }, (_, i) => ({
                index: (startYear + i).toString(),
                value: (startYear + i).toString(),
              }));
              return (
                <Select
                  value={value?.toString()}
                  onValueChange={(date) => {
                    const newDate = new Date(currentMonth);
                    newDate.setFullYear(parseInt(date));
                    goToMonth(newDate);
                  }}>
                  <SelectTrigger
                    className="h-fit gap-2 py-1 opacity-50 transition-[colors,opacity] hover:bg-accent hover:text-accent-foreground hover:opacity-100 [&>svg]:data-[state=open]:rotate-180"
                    title="select-year">
                    <span>{currentMonth.getFullYear()}</span>
                  </SelectTrigger>
                  <SelectContent className="bg-background">
                    {years.map((year) => (
                      <SelectItem key={year.index} value={year.index}>
                        {year.value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              );
            }
            return null;
          }
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };

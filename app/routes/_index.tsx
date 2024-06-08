import type { MetaFunction } from "@remix-run/node";
import { format } from "date-fns";

export const meta: MetaFunction = () => {
  return [{ title: "Home" }, { name: "description", content: "Welcome to Remix!" }];
};

const months: { index: number; value: string }[] = Array(12)
  .fill(null)
  .map((_, i) => ({
    index: i + 1,
    value: format(new Date(2022, i, 1), "MMM"),
  }));

export default function Page() {
  console.log(months);
  return (
    <div className="p-4">
      <ul>
        {months.map((month) => (
          <li key={month.index}>{month.value}</li>
        ))}
      </ul>
    </div>
  );
}

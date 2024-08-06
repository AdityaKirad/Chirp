import { cva, type VariantProps } from "class-variance-authority";

const loaderVariants = cva("aspect-square loading", {
  variants: {
    variant: {
      default: "bg-background",
    },
    size: {
      default: "w-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export function Loader({ variant, size }: VariantProps<typeof loaderVariants>) {
  return <div className={loaderVariants({ size, variant })} />;
}

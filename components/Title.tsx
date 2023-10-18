import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const title = tv({
  variants: {
    variant: {
      default: "text-foreground font-bold",
    },
    size: {
      default: "text-2xl sm:text-5xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type TypographyProps = ComponentProps<"p"> & VariantProps<typeof title>;

export function Title({ variant, size, className, ...props }: TypographyProps) {
  return <h1 className={title({ variant, size, className })} {...props} />;
}

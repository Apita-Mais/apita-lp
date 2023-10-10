import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const typography = tv({
  variants: {
    variant: {
      default: "text-foreground font-medium",
      bold: "text-foreground font-bold font-title",
    },
    size: {
      default: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      xxxl: "text-4xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type TypographyProps = ComponentProps<"p"> & VariantProps<typeof typography>;

export function Typography({
  variant,
  size,
  className,
  ...props
}: TypographyProps) {
  return <p className={typography({ variant, size, className })} {...props} />;
}

import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  variants: {
    variant: {
      default:
        "font-semibold text-sm text-foreground bg-primary rounded-full hover:opacity-80 duration-300",
      outline:
        "font-semibold text-sm bg-primary/10 text-foreground/80 rounded-full hover:bg-primary/30 hover:text-white duration-300",
    },
    size: {
      default: "px-6 py-4",
      md: "p-2",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return <button className={button({ variant, size, className })} {...props} />;
}

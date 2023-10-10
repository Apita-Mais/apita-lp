import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  variants: {
    variant: {
      default:
        "font-title font-semibold border-2 border-transparent text-foreground bg-primary rounded-xl hover:opacity-80 duration-300",
      outline:
        "font-title font-semibold border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white duration-300",
    },
    size: {
      default: "px-4 py-2",
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

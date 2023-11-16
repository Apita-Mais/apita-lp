import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type ContainerProps = ComponentProps<"main">;

export function Container({ className, ...props }: ContainerProps) {
  return <main className={cn("mx-auto w-full max-w-5xl px-10", className)} {...props} />;
}

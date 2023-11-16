import { cn } from "@/lib/utils";

export function Blur({ className }: { className?: string }) {
  return (
    <div className={cn("absolute -right-80 -top-56 -z-10 h-[500px] w-[500px] rounded-full bg-primary blur-[350px]", className)} />
  );
}

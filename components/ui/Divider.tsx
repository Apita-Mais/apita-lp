import { cn } from "@/lib/utils";

export function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn("mx-4 block h-[25px] w-px bg-foreground/30", className)}
    />
  );
}

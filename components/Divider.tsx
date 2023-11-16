import { cn } from "@/lib/utils";

export function Divider({ className }: { className?: string }) {
    return (
        <div className={cn("mx-4 w-px h-[25px] block bg-foreground/30", className)} />
    )
}
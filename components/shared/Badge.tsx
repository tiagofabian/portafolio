import { cn } from "@/lib/utils"

const Badge = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    className={cn(
      "inline-flex items-center justify-center border border-transparent bg-secondary text-secondary-foreground text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden",
      className
    )}
    {...props}
  />
)

export { Badge }
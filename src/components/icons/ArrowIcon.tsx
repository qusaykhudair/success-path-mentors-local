import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

/**
 * A "forward" arrow that mirrors automatically in RTL layouts via
 * Tailwind's `rtl:` variant, so it always points in the reading
 * direction rather than a hardcoded physical direction.
 */
export function ArrowIcon({
  className,
  ...props
}: React.ComponentProps<typeof ArrowRight>) {
  return <ArrowRight className={cn("rtl:-scale-x-100", className)} {...props} />;
}

import { FileText } from "lucide-react";
import { cn } from "@/utils/cn";

type ContentPendingProps = {
  message: string;
  className?: string;
};

/**
 * Shown in place of sections that depend on real business data not yet
 * supplied (statistics, team bios, testimonials, company history). Per
 * the implementation rule: "create a clear placeholder structure without
 * introducing fake business data" — this is that placeholder, used
 * consistently everywhere real content is still pending instead of
 * inventing numbers/names/quotes.
 */
export function ContentPending({ message, className }: ContentPendingProps) {
  return (
    <div
      className={cn(
        "border-border bg-muted/40 text-muted-foreground rounded-card flex flex-col items-center gap-2 border border-dashed px-6 py-10 text-center text-sm",
        className,
      )}
    >
      <FileText className="size-5" aria-hidden="true" />
      <p>{message}</p>
    </div>
  );
}

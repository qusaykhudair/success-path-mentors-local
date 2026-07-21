import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

/**
 * Per docs/26 - Forms & Validation Standards.md and
 * docs/07 - Component Library Specification.md.
 * Forwards its ref — needed by React Hook Form registration and by any
 * caller managing focus imperatively (e.g. Search).
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, invalid, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn(
        "border-border bg-surface text-foreground placeholder:text-muted-foreground rounded-input focus:border-primary focus:ring-primary/20 h-11 w-full border px-3.5 text-sm transition-colors duration-200 outline-none focus:ring-2",
        invalid && "border-danger focus:border-danger focus:ring-danger/20",
        className,
      )}
      {...props}
    />
  );
});

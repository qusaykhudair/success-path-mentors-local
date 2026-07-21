import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type IconButtonSize = "sm" | "md" | "lg";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
  size?: IconButtonSize;
  /** Required — IconButton has no visible text, so a11y label is mandatory. */
  "aria-label": string;
};

const sizeClasses: Record<IconButtonSize, string> = {
  sm: "size-9",
  md: "size-11",
  lg: "size-13",
};

export function IconButton({ icon, size = "md", className, ...props }: IconButtonProps) {
  return (
    <button
      className={cn(
        "text-foreground hover:bg-surface focus-visible:outline-primary inline-flex items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  );
}

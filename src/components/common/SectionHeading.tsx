import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  action?: ReactNode;
  className?: string;
};

/**
 * Per docs/03 - Design System Specification.md — Section Layout:
 * "Heading, Description, Content, Call To Action." The consistent
 * header pattern every section on every page opens with.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-start",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-accent text-xs font-semibold tracking-[0.14em] uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-foreground text-2xl font-bold sm:text-3xl">{title}</h2>
      {description && (
        <p
          className={cn(
            "text-muted-foreground text-base",
            align === "center" && "max-w-2xl",
          )}
        >
          {description}
        </p>
      )}
      {action}
    </div>
  );
}

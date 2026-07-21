import type { ElementType, ReactNode } from "react";
import { cn } from "@/utils/cn";

type ContainerProps = {
  as?: ElementType;
  wide?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * Per docs/03 - Design System Specification.md container rules:
 * max-width 1280px (1440px for "wide"), centered, consistent
 * horizontal padding across breakpoints.
 */
export function Container({
  as: Tag = "div",
  wide = false,
  className,
  children,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        wide ? "max-w-(--container-wide)" : "max-w-(--container-content)",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

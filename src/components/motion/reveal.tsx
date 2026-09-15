import { ReactNode } from "react";
import clsx from "clsx";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({
  children,
  className,
}: RevealProps) {
  return (
    <div className={clsx(className)}>
      {children}
    </div>
  );
}

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FloatingCard({
  children,
  className,
}: FloatingCardProps) {
  return (
    <div className={clsx(className)}>
      {children}
    </div>
  );
}
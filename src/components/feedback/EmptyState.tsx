import type { ReactNode } from "react";
import { Container } from "@/components/common/Container";

type EmptyStateProps = {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
};

/**
 * Per docs/07 - Component Library Specification.md — Feedback Components
 * (EmptyState, ErrorState, NotFound, NoResults all share this shape).
 * "Every page should include meaningful empty states. Never leave blank
 * screens." (docs/03 - Design System Specification.md)
 */
export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-4 py-16 text-center">
      {icon}
      <h1 className="text-foreground text-xl font-semibold">{title}</h1>
      {description && (
        <p className="text-muted-foreground max-w-sm text-sm">{description}</p>
      )}
      {action}
    </Container>
  );
}

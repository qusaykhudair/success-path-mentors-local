import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/**
 * Generic global primitive — per docs/07 - Component Library
 * Specification.md ("FeatureCard"). Used wherever the pattern is just
 * icon + title + description (Core Values, Why Choose Us, and likely
 * Home "Why Choose Us" once that page is built).
 */
export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="border-border bg-surface rounded-card flex flex-col gap-3 border p-6">
      <div className="bg-primary/10 text-primary inline-flex size-11 items-center justify-center rounded-lg">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="text-foreground text-base font-semibold">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";

type CTAAction = {
  label: string;
  href: string;
  variant?: "primary" | "outline";
};

type CTASectionProps = {
  title: string;
  description?: string;
  actions: CTAAction[];
};

/**
 * Cross-page shared section per docs/adr/0002-sections-folder-structure.md
 * — a "Final CTA" (Headline + 2-3 action buttons) closes almost every
 * page in the spec set. Takes its copy/links as props.
 */
export function CTASection({ title, description, actions }: CTASectionProps) {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-primary-foreground text-2xl font-bold sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-xl text-sm text-white/80 sm:text-base">{description}</p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {actions.map((action) => (
            <Button
              key={action.href}
              href={action.href}
              variant={action.variant === "outline" ? "outline" : "secondary"}
              size="lg"
              className={
                action.variant === "outline"
                  ? "text-primary-foreground border-white/30 hover:bg-white/10"
                  : undefined
              }
            >
              {action.label}
            </Button>
          ))}
        </div>
      </Container>
    </section>
  );
}

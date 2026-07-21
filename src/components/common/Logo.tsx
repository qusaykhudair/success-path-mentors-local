import { cn } from "@/utils/cn";

type LogoProps = {
  className?: string;
  /** Renders only the monogram mark, no wordmark — used in tight spaces. */
  markOnly?: boolean;
};

/**
 * PLACEHOLDER logo. Per docs/03 - Design System Specification.md the real
 * logo file must be preserved from the existing brand — none was supplied
 * in the documentation set, so this is a simple monogram + wordmark
 * standing in for it. Replace with the real logo asset (likely an SVG in
 * public/logos/) before any visual/content phase.
 */
export function Logo({ className, markOnly = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="bg-primary text-primary-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold"
      >
        SP
      </span>
      {!markOnly && (
        <span className="text-foreground flex flex-col leading-tight">
          <span className="text-sm font-bold tracking-tight">Success Path</span>
          <span className="text-accent text-[0.6875rem] font-medium tracking-[0.14em] uppercase">
            Mentors
          </span>
        </span>
      )}
    </span>
  );
}

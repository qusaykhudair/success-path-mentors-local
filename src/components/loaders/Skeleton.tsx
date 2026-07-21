import { cn } from "@/utils/cn";

type SkeletonProps = {
  className?: string;
};

/**
 * Base skeleton block. Per docs/03 - Design System Specification.md
 * ("Use Skeleton Loaders. Avoid blank loading screens.") and
 * docs/27 - Motion & Animation Guidelines.md (Skeleton Guidelines).
 *
 * Uses the `animate-shimmer` keyframe defined in styles/animations.css,
 * which itself references the `muted`/`border` tokens — so skeletons
 * automatically stay on-brand if the palette changes.
 */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={cn("animate-shimmer rounded-md", className)}
    />
  );
}

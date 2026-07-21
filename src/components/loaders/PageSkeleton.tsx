import { Container } from "@/components/common/Container";
import { Skeleton } from "@/components/loaders/Skeleton";

/**
 * Generic, page-agnostic loading skeleton used by app/[locale]/loading.tsx
 * (and reusable by any route-level loading.tsx added in later phases).
 *
 * Deliberately generic — it does not mimic the real Home Page layout
 * (which doesn't exist yet, per the current phase boundary) but gives a
 * believable content shape: a hero block, a row of cards, a wide block.
 * Swap for section-specific skeletons once real page structure exists.
 */
export function PageSkeleton() {
  return (
    <Container className="flex flex-col gap-12 py-16">
      <div className="flex flex-col items-center gap-4 text-center">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-10 w-full max-w-xl" />
        <Skeleton className="h-4 w-full max-w-md" />
        <Skeleton className="rounded-button mt-2 h-11 w-40" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="border-border rounded-card flex flex-col gap-4 border p-6"
          >
            <Skeleton className="size-10 rounded-lg" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-5/6" />
          </div>
        ))}
      </div>

      <Skeleton className="rounded-card h-64 w-full" />
    </Container>
  );
}

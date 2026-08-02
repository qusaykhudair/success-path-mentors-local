import {
  MathPathwayCard,
} from './math-pathway-card';

import type {
  MathExplorerCopy,
  PublicMathPathwaySummary,
} from '@/types/math-overview';

interface MathPathwayGridProps {
  pathways:
    PublicMathPathwaySummary[];
  selectedSlug: string;
  onSelect: (
    slug: string
  ) => void;
  copy: MathExplorerCopy;
}

export function MathPathwayGrid({
  pathways,
  selectedSlug,
  onSelect,
  copy,
}: MathPathwayGridProps) {
  return (
    <div
      className="
        grid
        gap-6
        sm:grid-cols-2
        xl:grid-cols-3
      "
    >
      {pathways.map(
        (pathway) => (
          <MathPathwayCard
            key={
              pathway.slug
            }
            pathway={pathway}
            selected={
              selectedSlug ===
              pathway.slug
            }
            onSelect={() =>
              onSelect(
                pathway.slug
              )
            }
            copy={copy}
          />
        )
      )}
    </div>
  );
}

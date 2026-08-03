import {
  MathPathwayCard,
} from './math-pathway-card';

import {
  routePath,
} from '@/config/routes';
import type {
  SiteLocale,
} from '@/config/site';
import type {
  MathExplorerCopy,
  PublicMathPathwaySummary,
} from '@/types/math-overview';

interface MathPathwayGridProps {
  pathways:
    PublicMathPathwaySummary[];
  locale: SiteLocale;
  copy: MathExplorerCopy;
}

export function MathPathwayGrid({
  pathways,
  locale,
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
            href={
              routePath.mathPathway(
                locale,
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

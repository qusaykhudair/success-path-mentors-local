import {
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';

import type { FeatureItem } from '@/types/internal-page';

interface FeatureGridProps {
  items: FeatureItem[];
  columns?: 2 | 3;
  inverse?: boolean;
}

function FeatureIcon({
  icon: Icon,
}: {
  icon?: LucideIcon;
}) {
  const ResolvedIcon =
    Icon ?? CheckCircle2;

  return (
    <span
      className="
        flex
        h-11
        w-11
        shrink-0
        items-center
        justify-center
        rounded-xl
        bg-accent
        text-accent-foreground
      "
    >
      <ResolvedIcon
        aria-hidden="true"
        className="h-5 w-5"
        strokeWidth={1.8}
      />
    </span>
  );
}

export function FeatureGrid({
  items,
  columns = 3,
  inverse = false,
}: FeatureGridProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul
      className={`
        grid
        gap-5
        ${
          columns === 2
            ? 'md:grid-cols-2'
            : 'md:grid-cols-2 lg:grid-cols-3'
        }
      `}
    >
      {items.map((item) => (
        <li
          key={item.title}
          className={`
            rounded-card
            border
            p-6
            shadow-card
            ${
              inverse
                ? 'border-white/10 bg-white/5 text-white'
                : 'border-border bg-card text-card-foreground'
            }
          `}
        >
          <FeatureIcon icon={item.icon} />

          <h3
            className={`
              mt-5
              text-h3
              font-bold
              ${
                inverse
                  ? 'text-white'
                  : 'text-primary-950'
              }
            `}
          >
            {item.title}
          </h3>

          <p
            className={`
              mt-3
              text-small
              leading-7
              ${
                inverse
                  ? 'text-white/70'
                  : 'text-muted-foreground'
              }
            `}
          >
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
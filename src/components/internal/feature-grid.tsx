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
        transition-transform
        duration-300
        group-hover:scale-110
        group-hover:rotate-3
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
            group
            rounded-card
            border
            p-6
            transition-all
            duration-300
            ease-out
            hover:-translate-y-1
            ${
              inverse
                ? 'border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10'
                : 'shadow-card border-border bg-card text-card-foreground hover:border-primary/20 hover:shadow-xl'
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
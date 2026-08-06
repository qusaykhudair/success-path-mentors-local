import Link from 'next/link';
import {
  ChevronRight,
  Home,
} from 'lucide-react';

import type { BreadcrumbItem } from '@/types/internal-page';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  ariaLabel: string;
  inverse?: boolean;
}

export function Breadcrumbs({
  items,
  ariaLabel,
  inverse = false,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label={ariaLabel}
      className="overflow-x-auto"
    >
      <ol
        className="
          flex
          min-w-max
          items-center
          gap-2
          text-caption
        "
      >
        {items.map((item, index) => {
          const isCurrent =
            index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="
                flex
                items-center
                gap-2
              "
            >
              {index > 0 && (
                <ChevronRight
                  aria-hidden="true"
                  className={`
                    h-3.5
                    w-3.5
                    shrink-0
                    rtl:-scale-x-100
                    ${
                      inverse
                        ? 'text-white/35'
                        : 'text-muted-foreground'
                    }
                  `}
                  strokeWidth={1.8}
                />
              )}

              {item.href && !isCurrent ? (
                <Link
                  href={item.href}
                  className={`
                    inline-flex
                    min-h-touch
                    items-center
                    gap-1.5
                    rounded-md
                    py-2
                    font-semibold
                    transition-colors
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-ring
                    ${
                      inverse
                        ? 'text-white/70 hover:text-accent-200'
                        : 'text-muted-foreground hover:text-accent-700'
                    }
                  `}
                >
                  {index === 0 && (
                    <Home
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                      strokeWidth={1.8}
                    />
                  )}

                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={
                    isCurrent
                      ? 'page'
                      : undefined
                  }
                  className={
                    inverse
                      ? 'font-bold text-white'
                      : 'font-bold text-foreground'
                  }
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
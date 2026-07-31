import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import type { RelatedPage } from '@/types/internal-page';

interface RelatedPagesProps {
  heading: string;
  items: RelatedPage[];
}

export function RelatedPages({
  heading,
  items,
}: RelatedPagesProps) {
  if (items.length === 0) {
    return null;
  }

  const headingId =
    'related-pages-heading';

  return (
    <nav aria-labelledby={headingId}>
      <h2
        id={headingId}
        className="
          text-h2
          font-black
          text-primary-950
        "
      >
        {heading}
      </h2>

      <ul
        className="
          mt-7
          grid
          gap-5
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="
                group
                flex
                h-full
                flex-col
                rounded-card
                border
                border-border
                bg-card
                p-6
                text-card-foreground
                shadow-card
                transition-[transform,border-color,box-shadow]
                duration-200
                hover:-translate-y-1
                hover:border-accent-300
                hover:shadow-card-hover
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-ring
                focus-visible:ring-offset-2
                motion-reduce:transition-none
                motion-reduce:hover:translate-y-0
              "
            >
              <h3
                className="
                  text-h3
                  font-bold
                  text-primary-950
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-3
                  flex-1
                  text-small
                  leading-7
                  text-muted-foreground
                "
              >
                {item.description}
              </p>

              <span
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  text-small
                  font-bold
                  text-accent-700
                "
              >
                {item.label}

                <ArrowRight
                  aria-hidden="true"
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                    rtl:-scale-x-100
                    rtl:group-hover:-translate-x-1
                    motion-reduce:transition-none
                  "
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
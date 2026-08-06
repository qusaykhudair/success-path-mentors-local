import { ChevronDown } from 'lucide-react';

import type { FaqItem } from '@/types/internal-page';

interface InternalFaqProps {
  items: FaqItem[];
}

export function InternalFaq({
  items,
}: InternalFaqProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-3 sm:gap-4">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="
            group
            rounded-card
            border
            border-border
            bg-card
            text-card-foreground
            shadow-card
            open:border-accent-300
            open:shadow-card-hover
          "
        >
          <summary
            className="
              flex
              min-h-touch
              cursor-pointer
              list-none
              items-center
              gap-4
              px-5
              py-5
              text-start
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-inset
              focus-visible:ring-ring
              [&::-webkit-details-marker]:hidden
              sm:px-6
              sm:py-6
            "
          >
            <span
              aria-hidden="true"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-accent-50
                text-caption
                font-black
                text-accent-700
                group-open:bg-accent
                group-open:text-accent-foreground
              "
            >
              {String(index + 1).padStart(
                2,
                '0'
              )}
            </span>

            <span
              className="
                min-w-0
                flex-1
                text-small
                font-bold
                leading-relaxed
                text-foreground
                sm:text-body
              "
            >
              {item.question}
            </span>

            <span
              aria-hidden="true"
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-border
                bg-surface-sunken
                text-muted-foreground
                transition-transform
                duration-200
                group-open:rotate-180
                motion-reduce:transition-none
              "
            >
              <ChevronDown
                className="h-5 w-5"
                strokeWidth={2}
              />
            </span>
          </summary>

          <div
            className="
              mx-5
              border-t
              border-border
              pb-6
              pt-5
              sm:mx-6
            "
          >
            <p
              className="
                whitespace-pre-line
                text-small
                leading-7
                text-muted-foreground
              "
            >
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
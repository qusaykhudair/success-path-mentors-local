import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-3 sm:gap-4">
      {items.map((item, index) => (
        <details
          key={`${item.question}-${index}`}
          open={index === 0 ? true : undefined}
          className={cn(
            'group relative overflow-hidden rounded-card border border-border bg-card text-card-foreground shadow-card',
            'transition-[border-color,box-shadow,transform] duration-300 motion-reduce:transition-none',
            'hover:-translate-y-0.5 hover:border-accent-200 hover:shadow-card-hover motion-reduce:hover:translate-y-0',
            'open:border-accent-300 open:shadow-card-hover'
          )}
        >
          <summary
            className={cn(
              'relative flex min-h-touch w-full cursor-pointer list-none items-center gap-4 px-5 py-5 text-start sm:px-6 sm:py-6',
              '[&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring'
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-caption font-black transition-colors duration-300 motion-reduce:transition-none',
                'bg-accent-50 text-accent-700 group-hover:bg-accent-100 group-open:bg-accent group-open:text-accent-foreground'
              )}
            >
              {String(index + 1).padStart(2, '0')}
            </span>

            <span className="min-w-0 flex-1 text-small font-bold leading-relaxed text-foreground transition-colors duration-300 group-hover:text-primary-800 group-open:text-primary-900 sm:text-body">
              {item.question}
            </span>

            <span
              aria-hidden="true"
              className={cn(
                'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface-sunken text-muted-foreground',
                'transition-[transform,background-color,border-color,color] duration-300 motion-reduce:transition-none',
                'group-hover:border-accent-200 group-hover:text-accent-700',
                'group-open:rotate-180 group-open:border-accent-200 group-open:bg-accent-50 group-open:text-accent-800'
              )}
            >
              <ChevronDown className="h-5 w-5" strokeWidth={2} />
            </span>
          </summary>

          <div className="mx-5 border-t border-border pb-6 pt-5 sm:mx-6">
            <p className="whitespace-pre-line text-small leading-7 text-muted-foreground">
              {item.answer}
            </p>
          </div>

          <span
            aria-hidden="true"
            className="absolute bottom-0 start-0 h-1 w-0 rounded-e-full bg-gradient-to-r from-accent to-primary-500 transition-[width] duration-500 group-open:w-24 rtl:bg-gradient-to-l motion-reduce:transition-none"
          />
        </details>
      ))}
    </div>
  );
}
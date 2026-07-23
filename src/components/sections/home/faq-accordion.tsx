'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-primary-100 rounded-card border border-primary-100 bg-surface">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start text-body font-semibold text-primary"
              >
                {item.question}
                <ChevronDown
                  className={cn('h-5 w-5 flex-shrink-0 transition-transform', isOpen && 'rotate-180')}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-6 pb-5 text-small text-ink/70"
            >
              {item.answer || (
                <span className="italic text-ink/40">
                  Answer content pending — to be provided.
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

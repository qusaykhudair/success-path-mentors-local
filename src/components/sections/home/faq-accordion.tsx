'use client';

import { useMemo, useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [query] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q),
    );
  }, [items, query]);

  return (
    <div>
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-card border border-dashed border-primary/20 py-14 text-center">
          <MessageCircleQuestion className="size-8 text-ink/30" />
          <p className="text-small text-ink/60">
            ما لقينا أسئلة تطابق بحثك عن &quot;{query}&quot;
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
                className={`faq-item-in overflow-hidden rounded-card border bg-card shadow-card transition-[box-shadow,border-color] duration-300 ${
                  isOpen ? 'border-primary/30 shadow-card-hover' : 'border-primary/10'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 sm:px-6 sm:py-5"
                >
                  <span
                    className={`text-small font-semibold transition-colors sm:text-body ${
                      isOpen ? 'text-primary' : 'text-ink'
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen ? 'rotate-180 bg-primary/10 text-primary' : 'bg-primary/5 text-ink/50'
                    }`}
                  >
                    <ChevronDown className="size-4" strokeWidth={2.5} />
                  </span>
                </button>

                {/* حاوية الإجابة — أنيميشن ارتفاع سلس بدون أي مكتبة خارجية */}
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-primary/10 px-5 pb-5 pt-4 text-small leading-relaxed text-ink/70 sm:px-6">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <style>{`
        @keyframes faq-item-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .faq-item-in {
          animation: faq-item-in 0.4s ease-out both;
        }
      `}</style>
    </div>
  );
}
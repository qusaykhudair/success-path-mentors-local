'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';

export function FaqSection() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-20 bg-slate-50/80 py-20 md:py-32 border-y border-slate-200/60">
      <Container>
        <ScrollReveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200/80">
            <HelpCircle className="h-3.5 w-3.5 text-accent-600" />
            <span>{t('eyebrow')}</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl md:text-5xl text-balance">
            {t('headline')}
          </h2>

          <p className="max-w-2xl text-base text-primary-700 sm:text-lg text-balance">
            {t('subheadline')}
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-16 flex max-w-3xl flex-col gap-4">
          {[0, 1, 2, 3, 4, 5].map((index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <ScrollReveal key={index} delay={index * 0.05} yOffset={15}>
                <div
                  className={cn(
                    'rounded-2xl border bg-white transition-all duration-200',
                    isOpen
                      ? 'border-accent-300 shadow-md ring-1 ring-accent-100'
                      : 'border-primary-100 hover:border-primary-200 hover:shadow-xs'
                  )}
                >
                  <button
                    type="button"
                    id={headingId}
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex min-h-touch w-full items-center justify-between gap-4 p-6 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl"
                  >
                    <span className="text-base font-bold text-primary-950 sm:text-lg">
                      {t(`questions.${index}.q`)}
                    </span>
                    <div
                      className={cn(
                        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-200',
                        isOpen
                          ? 'bg-accent-100 text-accent-700 rotate-180'
                          : 'bg-primary-50 text-primary-500'
                      )}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className={cn(
                      'overflow-hidden transition-all duration-300 ease-in-out',
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    )}
                  >
                    <p className="px-6 pb-6 text-sm text-primary-600 leading-relaxed sm:text-base border-t border-primary-50 pt-4">
                      {t(`questions.${index}.a`)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

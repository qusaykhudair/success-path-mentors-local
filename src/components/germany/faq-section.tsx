'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';

export function FaqSection() {
  const t = useTranslations('faq');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="bg-primary-50 py-20 md:py-32">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-accent-600">
            {t('eyebrow')}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl md:text-5xl lg:text-6xl text-balance">
            {t('headline')}
          </h2>
          <p className="max-w-2xl text-lg text-primary-700 md:text-xl text-balance">
            {t('subheadline')}
          </p>
        </div>

        <div className="mx-auto mt-16 flex max-w-3xl flex-col gap-4">
          {[0, 1, 2, 3, 4, 5].map((index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={cn(
                  "rounded-2xl border bg-white transition-all duration-200",
                  isOpen ? "border-accent-200 shadow-md" : "border-primary-100 hover:border-primary-300"
                )}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 p-6 text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-bold text-primary-900">
                    {t(`questions.${index}.q`)}
                  </span>
                  <div className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors",
                    isOpen ? "bg-accent-100 text-accent-600" : "bg-primary-50 text-primary-500"
                  )}>
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </div>
                </button>
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="px-6 pb-6 text-base text-primary-700 leading-relaxed">
                    {t(`questions.${index}.a`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

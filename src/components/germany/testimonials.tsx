'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';

export function Testimonials() {
  const t = useTranslations('testimonials');
  const items = t.raw('items') as { name: string; quote: string }[];
  const feedbackLabel = t('feedbackLabel');

  return (
    <section id="testimonials" className="relative scroll-mt-20 bg-white py-20 md:py-32">
      <Container>
        <ScrollReveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200/80">
            <MessageSquare className="h-3.5 w-3.5 text-accent-600" />
            <span>{t('eyebrow')}</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl md:text-5xl text-balance">
            {t('headline')}
          </h2>

          <p className="max-w-2xl text-base text-primary-700 sm:text-lg text-balance">
            {t('subheadline')}
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((review, index) => {
            const initial = review.name.charAt(0);

            return (
              <ScrollReveal key={index} delay={index * 0.1} yOffset={20}>
                <div className="relative flex h-full flex-col justify-between rounded-3xl border border-primary-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-xl sm:p-10">
                  <Quote className="absolute end-8 top-8 h-8 w-8 text-primary-100/60" aria-hidden="true" />

                  <div>
                    {/* Stars */}
                    <div className="flex gap-1" aria-label="5 out of 5 stars">
                      {[0, 1, 2, 3, 4].map((star) => (
                        <Star key={star} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="mt-6 text-base text-primary-800 leading-relaxed italic">
                      "{review.quote}"
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-3.5 pt-6 border-t border-primary-100/70">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-900">
                      {initial}
                    </div>
                    <div>
                      <p className="font-bold text-primary-950 text-sm">{review.name}</p>
                      <p className="text-xs text-primary-500 font-medium">{feedbackLabel}</p>
                    </div>
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

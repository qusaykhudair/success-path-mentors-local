'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';

export function Testimonials() {
  const t = useTranslations('testimonials');
  const locale = useLocale();

  const items = t.raw('items') as { name: string; quote: string }[];

  return (
    <section className="bg-white py-20 md:py-32">
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

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((review, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-6 rounded-3xl border border-primary-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md sm:p-10"
            >
              <Quote className="absolute right-8 top-8 h-8 w-8 text-primary-100" />
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <p className="text-lg text-primary-800 leading-relaxed italic">
                "{review.quote}"
              </p>
              <div className="mt-auto pt-6 border-t border-primary-100">
                <p className="font-bold text-primary-950">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

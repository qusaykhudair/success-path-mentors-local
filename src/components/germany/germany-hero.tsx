'use client';

import { useTranslations } from 'next-intl';
import { HeroServiceSelector } from './hero-service-selector';
import { Container } from '@/components/ui/container';
import { CheckCircle2, Users, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';

export function GermanyHero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/80 to-white pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-28 lg:pb-32">
      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12 xl:gap-20">
          
          {/* Content Side */}
          <div className="flex flex-col gap-8 max-w-2xl">
            {/* Eyebrow / Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-sm font-semibold text-accent-700 shadow-sm">
              <Star className="h-4 w-4 fill-accent-500 text-accent-500" />
              <span>{t('eyebrow', { fallback: 'Premium Online Tutoring' })}</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-black tracking-tight text-primary-950 sm:text-6xl lg:text-7xl text-balance leading-tight">
              {t('headline')}
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-primary-700 sm:text-2xl text-balance leading-relaxed">
              {t('subheadline')}
            </p>

            {/* Benefit Points */}
            <div className="mt-4 flex flex-col gap-4">
              {[
                t('benefits.0', { fallback: 'Personalized 1-to-1 learning' }),
                t('benefits.1', { fallback: 'Flexible online lessons' }),
                t('benefits.2', { fallback: 'Expert human coordination' })
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 text-lg font-medium text-primary-900">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-accent-500" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Trust Context */}
            <div className="mt-6 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm border border-primary-100 w-fit">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                <Users className="h-6 w-6" />
              </div>
              <p className="text-base font-bold text-primary-900 text-balance max-w-[200px] leading-tight">
                {t('trustContext')}
              </p>
            </div>
          </div>

          {/* Interaction Side */}
          <div className="w-full lg:ms-auto">
            {/* Soft backdrop blur for the interaction card area */}
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-accent-200 to-primary-200 opacity-50 blur-xl" />
              <div className="relative rounded-3xl bg-white shadow-2xl ring-1 ring-primary-900/5">
                <HeroServiceSelector />
              </div>
            </div>
          </div>

        </div>
      </Container>
      
      {/* Decorative abstract shapes */}
      <div className="absolute top-0 right-0 -z-10 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/4 rounded-full bg-gradient-to-br from-accent-100/40 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/4 rounded-full bg-gradient-to-tr from-primary-100/40 to-transparent blur-3xl" />
    </section>
  );
}

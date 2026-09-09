'use client';

import { useTranslations } from 'next-intl';
import { HeroServiceSelector } from './hero-service-selector';
import { Container } from '@/components/ui/container';

export function GermanyHero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-primary-50/50 pt-8 pb-16 md:pt-16 md:pb-24 lg:pt-24 lg:pb-32">
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Content Side */}
          <div className="flex flex-col gap-8 max-w-3xl">
            <h1 className="text-5xl font-black tracking-tight text-primary-950 sm:text-6xl lg:text-7xl text-balance leading-tight">
              {t('headline')}
            </h1>
            <p className="text-xl text-muted-foreground sm:text-2xl text-balance leading-relaxed">
              {t('subheadline')}
            </p>
            <div className="flex items-center gap-4 text-base font-bold text-primary-900 bg-primary-100/50 p-4 rounded-2xl w-fit mt-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {t('trustContext')}
            </div>
          </div>

          {/* Interaction Side */}
          <div className="lg:ms-auto w-full max-w-lg">
            <HeroServiceSelector />
          </div>

        </div>
      </Container>
      
      {/* Decorative background blur */}
      <div className="absolute -top-40 -end-40 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute top-40 -start-40 -z-10 h-96 w-96 rounded-full bg-primary-200/20 blur-3xl" />
    </section>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { HeroServiceSelector } from './hero-service-selector';
import { Container } from '@/components/ui/container';

export function GermanyHero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-primary-50/50 pt-8 pb-16 md:pt-16 md:pb-24 lg:pt-24 lg:pb-32">
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Content Side */}
          <div className="flex flex-col gap-6 max-w-2xl">
            <h1 className="text-4xl font-black tracking-tight text-primary-950 sm:text-5xl md:text-6xl text-balance">
              {t('headline')}
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl text-balance">
              {t('subheadline')}
            </p>
            <div className="flex items-center gap-4 text-sm font-medium text-primary-900 bg-primary-100/50 p-4 rounded-2xl w-fit">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {t('trustContext')}
            </div>
          </div>

          {/* Interaction Side */}
          <div className="lg:ms-auto w-full max-w-md">
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

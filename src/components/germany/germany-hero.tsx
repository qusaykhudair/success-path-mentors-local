'use client';

import Image from 'next/image';
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
    <section id="germany-hero" className="relative isolate overflow-hidden bg-primary-950 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
      {/* Background Hero Image */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/hero.webp"
          alt={t('headline')}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center select-none"
        />
      </div>

      {/* Blue Gradient Curtain (ستارة وتدرج أزرق شفاف فاخر) */}
      <div 
        aria-hidden="true" 
        className={cn(
          "absolute inset-0 -z-20",
          // Directional curtain: high contrast for text (95%), elegant visibility for photo (50-60%)
          "bg-gradient-to-r from-primary-950/95 via-primary-950/82 to-primary-900/55",
          "rtl:bg-gradient-to-l rtl:from-primary-950/95 rtl:via-primary-950/82 rtl:to-primary-900/55"
        )} 
      />

      {/* Ambient gradient top and bottom for smooth blending */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-950/70 via-transparent to-primary-950/85 pointer-events-none" 
      />

      {/* Subtle brand glow effects */}
      <div 
        aria-hidden="true" 
        className="absolute -top-24 -end-24 -z-10 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute -bottom-24 -start-24 -z-10 h-96 w-96 rounded-full bg-primary-600/20 blur-3xl pointer-events-none" 
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          
          {/* Content Side (58% on desktop) */}
          <div className="flex flex-col gap-5 max-w-2xl lg:col-span-7">
            {/* Eyebrow / Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-400/30 bg-accent-500/15 px-3.5 py-1 text-xs sm:text-sm font-semibold text-accent-300 shadow-sm backdrop-blur-md">
              <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-accent-400 text-accent-400" />
              <span>{t('eyebrow', { fallback: 'Premium Online Tutoring' })}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[2.85rem] xl:text-5xl text-balance leading-[1.14] drop-shadow-sm">
              {t('headline')}
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg text-primary-100/90 text-balance leading-relaxed font-normal">
              {t('subheadline')}
            </p>

            {/* Benefit Points */}
            <div className="flex flex-col gap-2.5">
              {[
                t('benefits.0', { fallback: 'Personalized 1-to-1 learning' }),
                t('benefits.1', { fallback: 'Flexible online lessons' }),
                t('benefits.2', { fallback: 'Expert human coordination' })
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-white/95">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-accent-400" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Trust Context */}
            <div className="mt-1 flex items-center gap-3.5 rounded-xl bg-white/10 backdrop-blur-md p-3 sm:p-3.5 shadow-lg border border-white/15 w-fit">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-400/20 text-accent-300 ring-1 ring-accent-400/30">
                <Users className="h-5 w-5" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white text-balance max-w-[240px] leading-snug">
                {t('trustContext')}
              </p>
            </div>
          </div>

          {/* Interaction Side - Shifted strictly to the right side on desktop (42%) */}
          <div className="w-full flex justify-center lg:justify-end lg:col-span-5">
            {/* Soft luminous ambient backdrop for the selector card */}
            <div className="relative w-full max-w-[390px] sm:max-w-[410px]">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-accent-400/25 to-primary-400/25 opacity-70 blur-xl pointer-events-none" />
              <div className="relative rounded-2xl sm:rounded-3xl bg-white shadow-xl ring-1 ring-white/20">
                <HeroServiceSelector />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Check, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { parseNavigationContext } from '@/lib/market-navigation';
import { cn } from '@/lib/utils';

export function PricingSection() {
  const t = useTranslations('pricing');
  const pathname = usePathname() || '';
  const context = parseNavigationContext(pathname);
  const isRtl = context.locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const planKeys = ['starter', 'progress', 'momentum'] as const;

  return (
    <section id="pricing" className="relative scroll-mt-20 bg-slate-50/70 py-20 md:py-32">
      {/* Subtle background decorative shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -start-40 top-1/3 h-96 w-96 rounded-full bg-accent-100/40 blur-3xl" />
        <div className="absolute -end-40 bottom-10 h-96 w-96 rounded-full bg-primary-100/40 blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-800">
            <Sparkles className="h-3.5 w-3.5 text-accent-600" />
            <span>{t('eyebrow')}</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl md:text-5xl text-balance">
            {t('headline')}
          </h2>

          <p className="max-w-2xl text-base text-primary-700 sm:text-lg text-balance">
            {t('subheadline')}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
          {planKeys.map((key) => {
            const isFeatured = key === 'progress';

            return (
              <div
                key={key}
                className={cn(
                  'relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300',
                  isFeatured
                    ? 'border-2 border-accent-500 bg-white shadow-2xl shadow-accent-500/10 ring-4 ring-accent-100/80 lg:-translate-y-2'
                    : 'border border-primary-100 bg-white/90 shadow-lg hover:border-primary-200 hover:shadow-xl'
                )}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-4 start-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-600 to-accent-500 px-4 py-1 text-xs font-bold text-white shadow-md">
                      <Sparkles className="h-3.5 w-3.5" />
                      {t(`plans.${key}.badge`)}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-950">
                        {t(`plans.${key}.name`)}
                      </h3>
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent-600">
                        {t(`plans.${key}.subtitle`)}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-primary-600 leading-relaxed">
                    {t(`plans.${key}.description`)}
                  </p>

                  {/* Sessions & Structure Banner */}
                  <div className="mt-6 rounded-2xl bg-primary-50/70 p-4 border border-primary-100/80">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-500">
                      {t(`plans.${key}.sessions`)}
                    </span>
                    <div className="mt-1 text-lg font-bold text-primary-950">
                      {t(`plans.${key}.priceLabel`)}
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="mt-8 space-y-3.5">
                    {[0, 1, 2, 3].map((idx) => {
                      const feature = t(`plans.${key}.features.${idx}`);
                      if (!feature || feature.startsWith('plans.')) return null;

                      return (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600 ring-1 ring-accent-200/60 mt-0.5">
                            <Check className="h-3 w-3 stroke-[3]" />
                          </div>
                          <span className="text-sm font-medium text-primary-700">
                            {feature}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-6 border-t border-primary-100/60">
                  <a
                    href={`/de/${context.locale}/trial`}
                    className={cn(
                      'group inline-flex min-h-touch w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                      isFeatured
                        ? 'bg-accent-600 text-white shadow-lg shadow-accent-600/25 hover:bg-accent-500 hover:shadow-xl'
                        : 'border border-primary-200 bg-primary-50/50 text-primary-900 hover:bg-primary-100 hover:border-primary-300'
                    )}
                  >
                    <span>{t(`plans.${key}.cta`)}</span>
                    <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Business Approval Notice */}
        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-primary-200/60 bg-white/70 p-4 text-center text-xs font-medium text-primary-600 backdrop-blur-xs">
          <p>{t('pendingNote')}</p>
        </div>
      </Container>
    </section>
  );
}

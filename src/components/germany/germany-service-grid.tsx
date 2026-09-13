'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { parseNavigationContext } from '@/lib/market-navigation';
import { ScrollReveal } from './scroll-reveal';
import { LANGUAGE_BADGES } from './language-icons';

const SERVICES = [
  { id: 'german', badge: LANGUAGE_BADGES.german, tKey: 'german' },
  { id: 'english', badge: LANGUAGE_BADGES.english, tKey: 'english' },
  { id: 'arabic', badge: LANGUAGE_BADGES.arabic, tKey: 'arabic' },
  { id: 'french', badge: LANGUAGE_BADGES.french, tKey: 'french' }
];

export function GermanyServiceGrid() {
  const t = useTranslations('services');
  const pathname = usePathname() || '';
  const context = parseNavigationContext(pathname);
  const isRtl = context.locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="relative scroll-mt-20 bg-white py-20 md:py-32">
      <Container>
        <ScrollReveal className="mx-auto mb-16 flex max-w-3xl flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200/80">
            <Sparkles className="h-3.5 w-3.5 text-accent-600" />
            <span>{context.locale === 'de' ? 'Unsere Fachbereiche' : context.locale === 'ar' ? 'مجالات التدريس' : 'Core Disciplines'}</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl md:text-5xl text-balance">
            {t('headline')}
          </h2>

          <p className="max-w-2xl text-base text-primary-700 sm:text-lg text-balance">
            {t('subheadline')}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, idx) => {
            const Badge = service.badge;
            return (
              <ScrollReveal key={service.id} delay={idx * 0.08} yOffset={20}>
                <div className="group flex h-full flex-col justify-between rounded-3xl border border-primary-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-300 hover:shadow-xl">
                  <div className="flex flex-col items-center">
                    <div className="mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Badge className="h-20 w-20 drop-shadow-md" />
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-primary-950 tracking-tight">
                      {t(`items.${service.tKey}.title`)}
                    </h3>

                    <p className="text-base text-primary-600 leading-relaxed">
                      {t(`items.${service.tKey}.description`)}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-primary-100/60">
                    <a
                      href={`/de/${context.locale}/trial?subject=${service.id}`}
                      className="group/btn inline-flex items-center gap-1.5 text-sm font-bold text-accent-700 hover:text-accent-800 transition-colors"
                    >
                      <span>{context.locale === 'de' ? 'Probestunde anfragen' : context.locale === 'ar' ? 'طلب حصة تجريبية' : 'Request Trial'}</span>
                      <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" />
                    </a>
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

'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { BookOpen, Languages, MessageSquare, GraduationCap, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { parseNavigationContext } from '@/lib/market-navigation';
import { ScrollReveal } from './scroll-reveal';

const SERVICES = [
  { id: 'german', icon: MessageSquare, tKey: 'german' },
  { id: 'english', icon: Languages, tKey: 'english' },
  { id: 'arabic', icon: BookOpen, tKey: 'arabic' },
  { id: 'french', icon: GraduationCap, tKey: 'french' }
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
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.id} delay={idx * 0.08} yOffset={20}>
                <div className="group flex h-full flex-col justify-between rounded-3xl border border-primary-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-xl">
                  <div className="flex flex-col items-center">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 ring-1 ring-accent-200/70 transition-all duration-200 group-hover:scale-105 group-hover:bg-accent-500 group-hover:text-white">
                      <Icon className="h-8 w-8" />
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-primary-950">
                      {t(`items.${service.tKey}.title`)}
                    </h3>

                    <p className="text-sm text-primary-600 leading-relaxed">
                      {t(`items.${service.tKey}.description`)}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-primary-100/60">
                    <a
                      href={`/de/${context.locale}/trial?subject=${service.id}`}
                      className="group/btn inline-flex items-center gap-1.5 text-xs font-bold text-accent-700 hover:text-accent-800 transition-colors"
                    >
                      <span>{context.locale === 'de' ? 'Probestunde anfragen' : context.locale === 'ar' ? 'طلب حصة تجريبية' : 'Request Trial'}</span>
                      <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" />
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

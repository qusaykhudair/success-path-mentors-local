'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Home, GraduationCap, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';

export function UseCases() {
  const t = useTranslations('useCases');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const icons = [
    <Home className="h-8 w-8" key="1" />,
    <GraduationCap className="h-8 w-8" key="2" />,
    <Briefcase className="h-8 w-8" key="3" />
  ];

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
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="group flex flex-col gap-6 rounded-3xl bg-primary-50 p-8 transition-colors hover:bg-primary-100/60 sm:p-10"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-primary-600 shadow-sm transition-transform group-hover:scale-110 group-hover:text-accent-600">
                {icons[index]}
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-primary-950 sm:text-2xl">
                  {t(`cases.${index}.title`)}
                </h3>
                <p className="text-base text-primary-700 sm:text-lg leading-relaxed">
                  {t(`cases.${index}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

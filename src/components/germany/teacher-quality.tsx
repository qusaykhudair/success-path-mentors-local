'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { CheckCircle2, SearchCode } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';

export function TeacherQuality() {
  const t = useTranslations('teacherQuality');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  return (
    <section className="bg-primary-50 py-20 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-bold uppercase tracking-wider text-accent-600">
              {t('eyebrow')}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl lg:text-5xl text-balance">
              {t('headline')}
            </h2>
            <p className="text-lg text-primary-700 md:text-xl text-balance">
              {t('subheadline')}
            </p>

            <ul className="mt-6 flex flex-col gap-4">
              {[0, 1, 2, 3].map((index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-accent-500" />
                  <span className="text-lg font-medium text-primary-900">
                    {t(`points.${index}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-white/40 blur-2xl lg:-inset-8" />
            <div className="relative flex flex-col gap-8 rounded-3xl border border-white bg-white/60 p-8 shadow-xl backdrop-blur-md sm:p-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
                <SearchCode className="h-8 w-8" />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-primary-950">
                  {t('matching.title')}
                </h3>
                <p className="text-lg text-primary-700 leading-relaxed">
                  {t('matching.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

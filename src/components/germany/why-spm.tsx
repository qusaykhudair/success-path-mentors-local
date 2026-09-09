'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { UserPlus, Calendar, HeartHandshake, Laptop } from 'lucide-react';
import { cn } from '@/lib/utils';

export function WhySpm() {
  const t = useTranslations('whySpm');

  const icons = [
    <UserPlus className="h-6 w-6" key="1" />,
    <HeartHandshake className="h-6 w-6" key="2" />,
    <Calendar className="h-6 w-6" key="3" />,
    <Laptop className="h-6 w-6" key="4" />
  ];

  return (
    <section className="bg-primary-950 py-20 text-white md:py-32">
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-accent-400">
            {t('eyebrow')}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-balance">
            {t('headline')}
          </h2>
          <p className="max-w-2xl text-lg text-primary-200 md:text-xl text-balance">
            {t('subheadline')}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/20 text-accent-400">
                {icons[index]}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {t(`features.${index}.title`)}
              </h3>
              <p className="text-sm text-primary-200">
                {t(`features.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

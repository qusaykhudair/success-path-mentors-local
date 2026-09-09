'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { MousePointerClick, CalendarCheck, GraduationCap } from 'lucide-react';

export function HowItWorks() {
  const t = useTranslations('howItWorks');

  const steps = [
    { icon: <MousePointerClick className="h-8 w-8" /> },
    { icon: <CalendarCheck className="h-8 w-8" /> },
    { icon: <GraduationCap className="h-8 w-8" /> }
  ];

  return (
    <section className="bg-white py-20 md:py-32">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-accent-600">
            {t('eyebrow', { fallback: 'Einfach loslegen' })}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl md:text-5xl text-balance">
            {t('headline', { fallback: 'In 3 Schritten zum Erfolg' })}
          </h2>
          <p className="max-w-2xl text-lg text-primary-700 text-balance">
            {t('subheadline', { fallback: 'Der schnellste Weg zum passenden Lehrer.' })}
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute left-1/2 top-10 hidden h-0.5 w-[calc(100%-8rem)] -translate-x-1/2 bg-primary-100 md:block" />
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl ring-1 ring-primary-100">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                    {step.icon}
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-primary-950">
                    {t(`steps.step${index + 1}.title`, { 
                      fallback: index === 0 ? 'Kostenlos anmelden' : index === 1 ? 'Lehrer finden' : 'Erfolgreich lernen' 
                    })}
                  </h3>
                  <p className="text-base text-primary-600 leading-relaxed">
                    {t(`steps.step${index + 1}.description`, {
                      fallback: index === 0 ? 'Füllen Sie unser kurzes Formular aus.' : index === 1 ? 'Wir matchen Sie mit dem perfekten Lehrer.' : 'Starten Sie mit dem Unterricht online.'
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

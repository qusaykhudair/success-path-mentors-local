'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';

export function HowItWorks() {
  const t = useTranslations('howItWorks');

  const steps = [
    { number: '1', tKey: 'step1' },
    { number: '2', tKey: 'step2' },
    { number: '3', tKey: 'step3' }
  ];

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl text-balance">
            {t('headline')}
          </h2>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Connecting line for desktop */}
          <div className="absolute top-8 start-[10%] end-[10%] hidden h-0.5 bg-border md:block" aria-hidden="true" />
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-black text-primary-foreground shadow-lg ring-8 ring-background">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {t(`items.${step.tKey}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-balance">
                  {t(`items.${step.tKey}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

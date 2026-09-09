'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { BookOpen, Languages, MessageSquare, Briefcase } from 'lucide-react';

const SERVICES = [
  { id: 'german', icon: MessageSquare, tKey: 'german' },
  { id: 'english', icon: Languages, tKey: 'english' },
  { id: 'arabic', icon: BookOpen, tKey: 'arabic' },
  { id: 'french', icon: Briefcase, tKey: 'french' }
];

export function GermanyServiceGrid() {
  const t = useTranslations('services');

  return (
    <section className="bg-muted/30 py-20 md:py-32">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center mb-16">
          <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl text-balance">
            {t('headline')}
          </h2>
          <p className="max-w-3xl text-xl text-muted-foreground text-balance">
            {t('subheadline')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group flex flex-col items-center rounded-3xl bg-background p-8 text-center shadow-xs ring-1 ring-border/50 transition-all duration-300 hover:shadow-xl hover:ring-primary/20"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {t(`items.${service.tKey}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`items.${service.tKey}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

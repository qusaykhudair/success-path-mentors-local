'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { ShieldCheck, Users, Clock } from 'lucide-react';

export function TrustStrip() {
  const t = useTranslations('trustStrip');

  return (
    <section className="border-b border-border/50 bg-background py-8">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/20 text-accent-700">
              <Users className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground">{t('item1.title')}</span>
              <span className="text-xs text-muted-foreground">{t('item1.subtitle')}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground">{t('item2.title')}</span>
              <span className="text-xs text-muted-foreground">{t('item2.subtitle')}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-turquoise/20 text-turquoise-700">
              <Clock className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground">{t('item3.title')}</span>
              <span className="text-xs text-muted-foreground">{t('item3.subtitle')}</span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

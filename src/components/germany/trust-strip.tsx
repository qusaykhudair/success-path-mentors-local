'use client';

import { useTranslations } from 'next-intl';
import { ShieldCheck, Users, Clock } from 'lucide-react';

export function TrustStrip() {
  const t = useTranslations('trustStrip');

  return (
    <section className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14 mb-4 sm:mb-6">
      <div className="rounded-3xl border border-primary-100 bg-white p-6 shadow-xl sm:p-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:divide-x md:divide-primary-100">
          
          <div className="flex items-start gap-4 md:px-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 ring-1 ring-accent-100">
              <Users className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-primary-950">{t('items.item1.title')}</h3>
              <p className="text-sm text-primary-600">{t('items.item1.subtitle')}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 md:px-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 ring-1 ring-primary-100">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-primary-950">{t('items.item2.title')}</h3>
              <p className="text-sm text-primary-600">{t('items.item2.subtitle')}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 md:px-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 ring-1 ring-accent-100">
              <Clock className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-primary-950">{t('items.item3.title')}</h3>
              <p className="text-sm text-primary-600">{t('items.item3.subtitle')}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

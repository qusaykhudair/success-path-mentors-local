'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { parseNavigationContext } from '@/lib/market-navigation';
import { getMarketLocalePath } from '@/lib/market-routing';
import { LANGUAGE_BADGES } from './language-icons';

const SERVICES = [
  { id: 'german' as const, badge: LANGUAGE_BADGES.german, tKey: 'german' },
  { id: 'english' as const, badge: LANGUAGE_BADGES.english, tKey: 'english' },
  { id: 'arabic' as const, badge: LANGUAGE_BADGES.arabic, tKey: 'arabic' },
  { id: 'french' as const, badge: LANGUAGE_BADGES.french, tKey: 'french' }
];

export function HeroServiceSelector() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = useTranslations('hero.selector');
  const pathname = usePathname() || '';
  const router = useRouter();
  const context = parseNavigationContext(pathname);

  const handleContinue = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!selectedService) return;
    
    setIsSubmitting(true);
    
    const marketId = context.marketId || 'germany';
    const locale = (context.locale as 'de' | 'en' | 'ar') || 'de';
    const basePath = getMarketLocalePath(marketId, locale);
    router.push(`${basePath}/trial?subject=${encodeURIComponent(selectedService)}`);
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-5 rounded-[1.5rem] sm:rounded-[2rem] bg-white p-5 sm:p-6">
      <div className="flex flex-col gap-1.5 text-center">
        <h2 className="text-xl font-bold text-primary-950 sm:text-2xl">
          {t('question')}
        </h2>
        <p className="text-xs text-primary-600 font-medium sm:text-sm">
          {t('instruction')}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        {SERVICES.map((service) => {
          const Badge = service.badge;
          const isSelected = selectedService === service.id;
          
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => setSelectedService(service.id)}
              className={`
                group relative flex flex-col items-center justify-center gap-2 rounded-xl sm:rounded-2xl border-2 p-3 sm:p-3.5 text-center transition-all duration-200
                ${isSelected 
                  ? 'border-accent-500 bg-accent-50/70 text-accent-700 shadow-sm ring-1 ring-accent-500' 
                  : 'border-primary-100 bg-white text-primary-600 hover:border-primary-300 hover:bg-primary-50/60 hover:text-primary-900 hover:shadow-2xs'
                }
              `}
            >
              <div className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl p-1 transition-all duration-200 ${isSelected ? 'scale-105' : 'group-hover:scale-105'}`}>
                <Badge className="h-8 w-8 sm:h-9 sm:w-9 drop-shadow-xs" />
              </div>
              <span className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-accent-950' : 'text-primary-950'}`}>
                {t(`services.${service.tKey}`)}
              </span>
              
              <div className={`absolute top-2 end-2 transition-opacity duration-200 ${isSelected ? 'opacity-100' : 'opacity-0'}`}>
                <CheckCircle2 className="h-4 w-4 text-accent-600" />
              </div>
            </button>
          );
        })}
      </div>

      <button
        onClick={handleContinue}
        disabled={!selectedService || isSubmitting}
        className="mt-1 flex min-h-[2.875rem] sm:min-h-[3.125rem] w-full items-center justify-center rounded-xl sm:rounded-2xl bg-accent-600 px-6 text-sm sm:text-base font-bold text-white shadow-[0_6px_14px_-3px_rgba(var(--accent-600),0.4)] transition-all duration-200 hover:bg-accent-700 hover:shadow-[0_8px_16px_-3px_rgba(var(--accent-600),0.5)] hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {t('processing', { fallback: 'Loading...' })}
          </span>
        ) : (
          t('continue')
        )}
      </button>

      <div className="flex items-center justify-center text-[11px] sm:text-xs font-semibold text-primary-500 text-center">
        <span>{t('microcopy', { fallback: '100% Free Trial • No Commitment' })}</span>
      </div>
    </div>
  );
}

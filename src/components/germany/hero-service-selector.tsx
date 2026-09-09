'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { BookOpen, Languages, MessageSquare, Briefcase, CheckCircle2 } from 'lucide-react';
import { parseNavigationContext } from '@/lib/market-navigation';
import { getMarketLocalePath } from '@/lib/market-routing';

const SERVICES = [
  { id: 'german', icon: MessageSquare, tKey: 'german' },
  { id: 'english', icon: Languages, tKey: 'english' },
  { id: 'arabic', icon: BookOpen, tKey: 'arabic' },
  { id: 'french', icon: Briefcase, tKey: 'french' }
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
    router.push(`${basePath}/trial`);
  };

  return (
    <div className="flex flex-col gap-8 rounded-[2rem] bg-white p-8 sm:p-10">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-2xl font-bold text-primary-950 sm:text-3xl">
          {t('question')}
        </h2>
        <p className="text-base text-primary-600 font-medium">
          {t('instruction')}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          const isSelected = selectedService === service.id;
          
          return (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`
                group relative flex flex-col items-center justify-center gap-4 rounded-2xl border-2 p-6 text-center transition-all duration-300
                ${isSelected 
                  ? 'border-accent-500 bg-accent-50 text-accent-700 shadow-md ring-1 ring-accent-500' 
                  : 'border-primary-100 bg-white text-primary-600 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-900 hover:shadow-sm'
                }
              `}
            >
              <div className={`rounded-2xl p-3 transition-colors ${isSelected ? 'bg-accent-500 text-white shadow-sm' : 'bg-primary-100 text-primary-500 group-hover:bg-primary-200 group-hover:text-primary-700'}`}>
                <Icon className="h-8 w-8" />
              </div>
              <span className={`text-base font-bold ${isSelected ? 'text-accent-900' : 'text-primary-950'}`}>
                {t(`services.${service.tKey}`)}
              </span>
              
              <div className={`absolute top-3 end-3 transition-opacity duration-200 ${isSelected ? 'opacity-100' : 'opacity-0'}`}>
                <CheckCircle2 className="h-6 w-6 text-accent-500" />
              </div>
            </button>
          );
        })}
      </div>

      <button
        onClick={handleContinue}
        disabled={!selectedService || isSubmitting}
        className="mt-4 flex min-h-[4rem] w-full items-center justify-center rounded-2xl bg-accent-600 px-8 text-lg font-bold text-white shadow-[0_8px_16px_-4px_rgba(var(--accent-600),0.5)] transition-all duration-300 hover:bg-accent-700 hover:shadow-[0_12px_20px_-4px_rgba(var(--accent-600),0.6)] hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-3">
            <svg className="h-6 w-6 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {t('processing', { fallback: 'Loading...' })}
          </span>
        ) : (
          t('continue')
        )}
      </button>

      <div className="flex items-center justify-center text-xs font-semibold text-primary-500 mt-2 text-center">
        <span>{t('microcopy', { fallback: '100% Free Trial • No Commitment' })}</span>
      </div>
    </div>
  );
}

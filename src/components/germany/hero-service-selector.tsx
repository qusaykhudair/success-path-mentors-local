'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { BookOpen, Languages, MessageSquare, Briefcase } from 'lucide-react';
import { parseNavigationContext } from '@/lib/market-navigation';

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
  const context = parseNavigationContext(pathname);

  const handleContinue = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!selectedService) return;
    
    setIsSubmitting(true);
    // Temporary MVP preview: just show it works and disable after click
    setTimeout(() => {
      alert(`Service selected: ${selectedService}\nThe full trial flow will be implemented in the next work unit.`);
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="flex flex-col gap-6 rounded-3xl bg-background p-6 shadow-xl ring-1 ring-border/50 sm:p-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold text-foreground">
          {t('question')}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t('instruction')}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          const isSelected = selectedService === service.id;
          
          return (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`
                group relative flex flex-col items-center justify-center gap-3 rounded-2xl border-2 p-4 text-center transition-all duration-200
                ${isSelected 
                  ? 'border-primary bg-primary-50 text-primary shadow-sm' 
                  : 'border-border bg-background text-muted-foreground hover:border-primary-200 hover:bg-muted hover:text-foreground'
                }
              `}
            >
              <div className={`rounded-full p-2 ${isSelected ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground group-hover:bg-primary/5 group-hover:text-primary-600'}`}>
                <Icon className="h-6 w-6" />
              </div>
              <span className={`text-sm font-semibold ${isSelected ? 'text-primary-900' : 'text-foreground'}`}>
                {t(`services.${service.tKey}`)}
              </span>
              
              {isSelected && (
                <div className="absolute top-2 end-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <button
        onClick={handleContinue}
        disabled={!selectedService || isSubmitting}
        className="mt-2 flex min-h-[3.5rem] w-full items-center justify-center rounded-button bg-primary px-8 text-base font-bold text-primary-foreground shadow-button transition-all duration-200 hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="h-5 w-5 animate-spin text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {t('processing')}
          </span>
        ) : (
          t('continue')
        )}
      </button>
    </div>
  );
}

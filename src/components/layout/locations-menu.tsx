'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown, ChevronRight, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { LocationNavCountry } from '@/content/locations/location-navigation';

interface LocationsMenuProps {
  triggerLabel: string;
  overviewHref: string;
  overviewLabel: string;
  countries: LocationNavCountry[];
  locale: 'en' | 'ar';
}

function localizeHref(locale: 'en' | 'ar', href: string): string {
  return `/${locale}${href}`;
}

export function LocationsMenu({ triggerLabel, overviewHref, overviewLabel, countries, locale }: LocationsMenuProps) {
  const [open, setOpen] = useState(false);
  const [countryKey, setCountryKey] = useState(countries[0]?.key ?? '');
  const activeCountry = useMemo(() => countries.find((item) => item.key === countryKey) ?? countries[0], [countries, countryKey]);
  const [regionKey, setRegionKey] = useState(activeCountry?.regions[0]?.key ?? '');
  const activeRegion = useMemo(() => activeCountry?.regions.find((item) => item.key === regionKey) ?? activeCountry?.regions[0], [activeCountry, regionKey]);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpen(true);
  };

  const scheduleClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setOpen(false), 220);
  };

  useEffect(() => {
    setRegionKey(activeCountry?.regions[0]?.key ?? '');
  }, [activeCountry]);

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative" onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
      <button type="button" aria-expanded={open} aria-haspopup="menu" onClick={() => setOpen((value) => !value)} className="group inline-flex min-h-touch items-center gap-1.5 rounded-button px-2.5 text-small font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        {triggerLabel}
        <ChevronDown aria-hidden="true" className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} />
      </button>

      <div role="menu" aria-hidden={!open} onMouseEnter={cancelClose} onMouseLeave={scheduleClose} className={cn('fixed left-1/2 top-[5.5rem] z-[60] grid w-[min(76rem,calc(100vw-2rem))] max-h-[calc(100dvh-6.5rem)] -translate-x-1/2 grid-cols-[13rem_20rem_minmax(0,1fr)] overflow-hidden rounded-[1.25rem] border border-border bg-popover shadow-[0_24px_70px_rgba(7,20,38,0.18)] transition-[transform,opacity] duration-200', open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0')}>
        <div className="overflow-y-auto border-e border-border bg-muted/45 p-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <a href={overviewHref} className="mb-3 flex min-h-touch items-center justify-between rounded-xl bg-primary-900 px-3.5 text-small font-black text-white">
            {overviewLabel}<MapPin className="h-4 w-4" />
          </a>
          <div className="grid gap-1">
            {countries.map((country) => (
              <a key={country.key} href={localizeHref(locale, country.href)} onMouseEnter={() => setCountryKey(country.key)} onFocus={() => setCountryKey(country.key)} className={cn('flex min-h-touch items-center justify-between rounded-xl px-3.5 text-small font-bold', activeCountry?.key === country.key ? 'bg-accent-50 text-accent-800' : 'hover:bg-background')}>
                {country.label[locale]}<ChevronRight className="h-4 w-4 rtl:-scale-x-100" />
              </a>
            ))}
          </div>
        </div>

        <div className="overflow-y-auto border-e border-border p-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="mb-2 px-2 text-xs font-black uppercase tracking-wide text-muted-foreground">{activeCountry?.label[locale]}</div>
          <div className="grid gap-1">
            {activeCountry?.regions.map((region) => (
              <a key={region.key} href={localizeHref(locale, region.href)} onMouseEnter={() => setRegionKey(region.key)} onFocus={() => setRegionKey(region.key)} className={cn('flex min-h-touch items-center justify-between rounded-xl px-3.5 text-small font-bold', activeRegion?.key === region.key ? 'bg-accent-50 text-accent-800' : 'hover:bg-muted')}>
                {region.label[locale]}<ChevronRight className="h-4 w-4 rtl:-scale-x-100" />
              </a>
            ))}
          </div>
        </div>

        <div className="min-h-0 overflow-y-auto p-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {activeRegion && (
            <>
              <a href={localizeHref(locale, activeRegion.href)} className="mb-3 block rounded-xl border border-accent-100 bg-accent-50 p-4 font-black text-accent-900">
                {activeRegion.label[locale]}
              </a>
              <a href={localizeHref(locale, activeRegion.curriculum.href)} className="mb-4 flex min-h-touch items-center justify-between rounded-xl border border-border px-4 py-3 font-bold hover:border-accent-200 hover:bg-accent-50">
                {activeRegion.curriculum.label[locale]}<ChevronRight className="h-4 w-4 rtl:-scale-x-100" />
              </a>
              <div className="mb-2 text-xs font-black uppercase tracking-wide text-muted-foreground">{locale === 'ar' ? 'المدن' : 'Cities'}</div>
              <div className="grid grid-cols-2 gap-1.5 lg:grid-cols-3">
                {activeRegion.cities.map((city) => (
                  <a key={city.href} href={localizeHref(locale, city.href)} className="rounded-xl border border-transparent px-3 py-2.5 text-small font-semibold text-muted-foreground hover:border-accent-100 hover:bg-accent-50 hover:text-accent-800">
                    {city.label[locale]}
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import type { LocationNavCountry } from '@/content/locations/location-navigation';

const emptyCountries: LocationNavCountry[] = [];

/** Share the async data chunk across both menus, outside the initial bundle. */
export function useLocationNavigation(enabled: boolean, provided?: LocationNavCountry[]) {
  const [countries, setCountries] = useState(emptyCountries);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!enabled || provided) return;
    let cancelled = false;
    setFailed(false);
    import('@/content/locations/location-navigation').then(
      (module) => { if (!cancelled) setCountries(module.locationNavigation); },
      () => { if (!cancelled) setFailed(true); },
    );
    return () => { cancelled = true; };
  }, [enabled, provided]);

  return { countries: provided ?? countries, failed };
}

'use client';

import { MarketHeader } from './market-header';
import { GermanyHero } from './germany-hero';
import { TrustStrip } from './trust-strip';
import { GermanyServiceGrid } from './germany-service-grid';
import { HowItWorks } from './how-it-works';
import { GermanyConversionCTA } from './germany-conversion-cta';
import { MarketFooter } from './market-footer';

export function GermanyVisualPreview({ locale }: { locale: string }) {
  return (
    <div className="flex flex-col min-h-screen">
      <MarketHeader />
      <main className="flex-1">
        <GermanyHero />
        <TrustStrip />
        <GermanyServiceGrid />
        <HowItWorks />
        <GermanyConversionCTA />
      </main>
      <MarketFooter />
    </div>
  );
}

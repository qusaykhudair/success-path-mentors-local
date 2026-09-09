import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { MarketHeader } from '@/components/germany/market-header';
import { MarketFooter } from '@/components/germany/market-footer';
import { getMarketMessages } from '@/lib/market-messages';
import { cn } from '@/lib/utils';

export default async function MarketSegmentsLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ marketSegments?: string[] }>;
}) {
  const { marketSegments } = await params;
  const locale = (marketSegments && marketSegments[0]) || 'de';

  if (!['de', 'en', 'ar'].includes(locale)) notFound();

  let messages;
  try {
    messages = await getMarketMessages('germany', locale as 'de' | 'en' | 'ar');
  } catch (error) {
    notFound();
  }

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <div
      dir={dir}
      lang={locale}
      className={cn(
        'min-h-screen bg-background font-sans antialiased selection:bg-accent-200 selection:text-accent-900',
        locale === 'ar' && 'font-arabic'
      )}
    >
      <NextIntlClientProvider locale={locale} messages={messages}>
        <div className="flex min-h-screen flex-col">
          <MarketHeader />
          <main className="flex-1">{children}</main>
          <MarketFooter />
        </div>
      </NextIntlClientProvider>
    </div>
  );
}

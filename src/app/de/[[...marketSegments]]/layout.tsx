import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { MarketHeader } from '@/components/germany/market-header';
import { MarketFooter } from '@/components/germany/market-footer';
import { FloatingWhatsAppButton } from '@/components/layout/floating-whatsapp-button';
import { BackToTopButton } from '@/components/layout/back-to-top-button';
import { N8nChat } from '@/components/chat/n8n-chat';
import { getMarketMessages } from '@/lib/market-messages';
import { resolveMarketRoute } from '@/lib/market-routing';
import { cn } from '@/lib/utils';
import '@n8n/chat/style.css';

export default async function MarketSegmentsLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ marketSegments?: string[] }>;
}) {
  const { marketSegments } = await params;
  const route = resolveMarketRoute('germany', marketSegments);
  if (!route) notFound();

  const locale = route.language;

  let messages;
  try {
    messages = await getMarketMessages('germany', locale as 'de' | 'en' | 'ar');
  } catch {
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
        <div className="flex min-h-screen flex-col relative">
          <MarketHeader />
          <FloatingWhatsAppButton
            locale={locale as 'de' | 'en' | 'ar'}
            phoneNumber="4915123974353"
          />
          <BackToTopButton locale={locale as 'de' | 'en' | 'ar'} />
          <N8nChat key={locale} locale={locale as 'de' | 'en' | 'ar'} />
          <main className="flex-1">{children}</main>
          <MarketFooter />
        </div>
      </NextIntlClientProvider>
    </div>
  );
}

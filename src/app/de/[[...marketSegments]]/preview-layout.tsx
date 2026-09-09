import { NextIntlClientProvider } from 'next-intl';
import { getMarketMessages } from '@/lib/market-messages';
import { getMarketLanguageDirection } from '@/lib/market-routing';
import { GermanyVisualPreview } from '@/components/germany/preview-harness';
import { dinNext } from '@/lib/fonts';
import '@/app/globals.css';

export default async function GermanyPreviewHarness({
  locale,
}: {
  locale: string;
}) {
  const messages = await getMarketMessages('germany', locale as any);
  const dir = getMarketLanguageDirection(locale as any);

  return (
    <html lang={locale} dir={dir} className={dinNext.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <GermanyVisualPreview locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

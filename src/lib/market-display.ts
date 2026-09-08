import { getDefaultMarket } from '@/config/markets';

/** Keep the existing tel URI format independent of WhatsApp's destination. */
export function getDefaultTelephoneHref(): string | undefined {
  const phone = getDefaultMarket().contact.phone;
  return phone ? `tel:${phone.replace(/\s/g, '')}` : undefined;
}

export function getDefaultOpenGraphLocale(locale: string): string {
  const { seo } = getDefaultMarket();
  const language = locale === 'ar' ? 'ar' : 'en';
  return seo.locales[language] ?? `${language}_${seo.region}`;
}

/** Preserve the site's symbol-first, en-US decimal formatting in both languages. */
export function formatMarketPrice(value: number): string {
  const symbol = new Intl.NumberFormat('en-US', {
    style: 'currency', currency: getDefaultMarket().currency, currencyDisplay: 'narrowSymbol',
  }).formatToParts(0).find((part) => part.type === 'currency')?.value ?? '';
  const number = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0, maximumFractionDigits: 2,
  }).format(value);
  return `${symbol}${number}`;
}

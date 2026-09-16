import { type MarketId, type MarketLanguage } from './market-routing';

export type GermanyMessages = typeof import('../../messages/markets/germany/en.json');

export async function getMarketMessages(id: MarketId, language: MarketLanguage): Promise<GermanyMessages> {
  if (id === 'germany') {
    switch (language) {
      case 'de':
        return (await import('../../messages/markets/germany/de.json')).default;
      case 'en':
        return (await import('../../messages/markets/germany/en.json')).default;
      case 'ar':
        return (await import('../../messages/markets/germany/ar.json')).default;
      default:
        throw new RangeError(`Unsupported language '${language}' for market '${id}'`);
    }
  }
  
  throw new Error(`Market message resolution for '${id}' is not implemented`);
}

import { getDefaultMarket } from '@/config/markets';
import { siteConfig } from '@/config/site';

const configuredMarketLegalName =
  getDefaultMarket().organization.legalName;

const configuredLegalEntityName =
  configuredMarketLegalName
    ?.replace(/\s+operating as\s+.+$/i, '')
    .trim();

export const legalConfig = {
  brandName: siteConfig.name,
  operatingName: siteConfig.organizationName,
  contactEmail: siteConfig.email,

  /*
   * Prefer an explicitly configured legal entity when supplied.
   * Otherwise use the verified North America market organization
   * instead of silently falling back to the public brand name.
   */
  legalEntityName:
    process.env.NEXT_PUBLIC_LEGAL_ENTITY_NAME?.trim() ||
    configuredLegalEntityName ||
    siteConfig.organizationName,

  effectiveDate: 'August 5, 2026',
  effectiveDateArabic: '5 أغسطس 2026',
} as const;

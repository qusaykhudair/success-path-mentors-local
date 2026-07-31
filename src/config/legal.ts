import { siteConfig } from '@/config/site';

export const legalConfig = {
  brandName: siteConfig.name,
  operatingName: siteConfig.organizationName,
  contactEmail: siteConfig.email,

  /*
   * Confirm this exact entity before publishing.
   * It should be the entity that receives payments and contracts
   * with parents or guardians.
   */
  legalEntityName:
    process.env.NEXT_PUBLIC_LEGAL_ENTITY_NAME?.trim() ||
    siteConfig.organizationName,

  effectiveDate: 'July 31, 2026',
  effectiveDateArabic: '31 يوليو 2026',
} as const;
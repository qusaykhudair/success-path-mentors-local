/**
 * Central Germany / Europe Legal Configuration
 *
 * IMPORTANT LEGAL GATE:
 * The EU registered legal entity details must be completed with actual
 * corporate information before production deployment.
 * Do not invent company details, reuse Canadian corporation numbers, or assign
 * third parties as the controller unless confirmed by approved legal documentation.
 */

export const germanyLegalConfig = {
  brandName: 'Success Path Mentors Europe / Success Path Mentors Germany',

  /** Legal entity name (e.g. registered GmbH or EU company) - required before production */
  legalEntityName: process.env.NEXT_PUBLIC_GERMANY_LEGAL_ENTITY_NAME?.trim() || 'REQUIRED_BEFORE_PRODUCTION',

  /** Registered corporate address in the EU */
  registeredAddress: process.env.NEXT_PUBLIC_GERMANY_REGISTERED_ADDRESS?.trim() || 'REQUIRED_BEFORE_PRODUCTION',

  /** Commercial register number (Handelsregisternummer / Company ID) */
  registrationNumber: process.env.NEXT_PUBLIC_GERMANY_REGISTRATION_NUMBER?.trim() || 'REQUIRED_BEFORE_PRODUCTION',

  /** VAT Identification Number (USt-IdNr.), if applicable */
  vatId: process.env.NEXT_PUBLIC_GERMANY_VAT_ID?.trim() || 'REQUIRED_BEFORE_PRODUCTION_OR_NA',

  /** Managing director / legal representative */
  representative: process.env.NEXT_PUBLIC_GERMANY_LEGAL_REPRESENTATIVE?.trim() || 'REQUIRED_BEFORE_PRODUCTION_IF_APPLICABLE',

  /** Designated contact email for European operations and GDPR requests */
  contactEmail: 'europe@successpathmentors.net',

  /** Official German WhatsApp / telephone line */
  whatsapp: '+49 1512 3974353',
  whatsappDisplay: '+49 1512 3974353',

  /**
   * Status regarding participation in consumer dispute resolution (VSBG § 36).
   * Values: 'participates' | 'does_not_participate' | 'REQUIRED_LEGAL_DECISION'
   */
  consumerADRStatus: 'REQUIRED_LEGAL_DECISION' as const,

  effectiveDate: 'September 2026',
  effectiveDateGerman: 'September 2026',
  effectiveDateArabic: 'سبتمبر 2026',
} as const;

export type GermanyLegalConfig = typeof germanyLegalConfig;

/**
 * Checks if the legal entity details are fully populated with actual business data.
 * Used to render development-time transparency alerts for the legal gate.
 */
export function hasCompleteLegalEntityDetails(): boolean {
  return (
    germanyLegalConfig.legalEntityName !== 'REQUIRED_BEFORE_PRODUCTION' &&
    germanyLegalConfig.registeredAddress !== 'REQUIRED_BEFORE_PRODUCTION' &&
    germanyLegalConfig.registrationNumber !== 'REQUIRED_BEFORE_PRODUCTION'
  );
}

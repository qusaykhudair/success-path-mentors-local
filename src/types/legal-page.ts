export interface LegalSubsection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalSection {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: LegalSubsection[];
}

export interface LegalPageContent {
  seo: {
    title: string;
    description: string;
  };

  breadcrumbs: {
    home: string;
    current: string;
    ariaLabel: string;
  };

  hero: {
    eyebrow: string;
    title: string;
    description: string;
    lastUpdatedLabel: string;
    lastUpdated: string;
    appliesToLabel: string;
    appliesTo: string;
    contactLabel: string;
  };

  tableOfContentsLabel: string;
  sections: LegalSection[];

  closing: {
    title: string;
    description: string;
    contactLabel: string;
  };
}
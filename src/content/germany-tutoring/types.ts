export type TutoringLocale = 'de' | 'en' | 'ar';

export type TutoringCategory = 'format' | 'language' | 'school' | 'adults';

export interface TutoringHighlight {
  readonly title: string;
  readonly badge?: string;
  readonly description: string;
  readonly iconName?: 'user' | 'users' | 'target' | 'book' | 'award' | 'clock' | 'sparkles' | 'compass' | 'calendar' | 'shield';
}

export interface TutoringCurriculumPillar {
  readonly title: string;
  readonly badge?: string;
  readonly items: readonly string[];
}

export interface TutoringFaq {
  readonly question: string;
  readonly answer: string;
}

export interface TutoringPageContent {
  readonly slug: string; // e.g., 'tutoring/one-to-one', 'languages/german'
  readonly category: TutoringCategory;
  readonly serviceId: string; // query param for trial flow, e.g., 'one-to-one', 'german'
  readonly seo: {
    readonly title: string;
    readonly description: string;
    readonly keywords: readonly string[];
  };
  readonly hero: {
    readonly badge: string;
    readonly title: string;
    readonly headline: string;
    readonly subheadline: string;
    readonly primaryCta: string;
    readonly secondaryCta: string;
  };
  readonly highlightsTitle: string;
  readonly highlightsSubheadline?: string;
  readonly highlights: readonly TutoringHighlight[];
  readonly curriculumTitle: string;
  readonly curriculumSubheadline: string;
  readonly curriculumPillars: readonly TutoringCurriculumPillar[];
  readonly formatComparisonTitle?: string;
  readonly formatComparisonSubtitle?: string;
  readonly showCefrDisclaimer?: boolean;
  readonly showPlacementCta?: boolean;
  readonly faqs: readonly TutoringFaq[];
}

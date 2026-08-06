import type {
  SiteLocale,
} from '@/config/site';

export type LocationCountryCode =
  | 'CA'
  | 'US';

export type LocationPageLevel =
  | 'index'
  | 'country'
  | 'region'
  | 'curriculum'
  | 'city';

export interface LocalizedText {
  en: string;
  ar: string;
}

export interface LocalizedStringList {
  en: string[];
  ar: string[];
}

export interface LocationSeo {
  title: LocalizedText;
  description: LocalizedText;
  primaryKeyword: LocalizedText;
  secondaryKeywords: LocalizedStringList;
  imageAlt: LocalizedText;
}

export interface LocationFeature {
  title: LocalizedText;
  description: LocalizedText;
  icon:
    | 'book'
    | 'check'
    | 'globe'
    | 'graduation'
    | 'layers'
    | 'message'
    | 'shield';
}

export interface LocationSubjectLink {
  label: LocalizedText;
  description: LocalizedText;
  hrefType:
    | 'localized-subject'
    | 'absolute';
  hrefValue: string;
}

export interface LocationAssessment {
  name: LocalizedText;
  description: LocalizedText;
}

export interface LocationEducationResource {
  name: string;
  description: LocalizedText;
  url: string;
  type:
    | 'education-authority'
    | 'assessment'
    | 'school'
    | 'library'
    | 'college'
    | 'university'
    | 'municipal';
}

export interface LocationFaq {
  question: LocalizedText;
  answer: LocalizedText;
}

export interface LocationPageDefinition {
  id: string;
  level: LocationPageLevel;
  countryCode?: LocationCountryCode;
  segments: string[];
  parentId?: string;
  childIds: string[];
  relatedIds: string[];
  name: LocalizedText;
  shortName: LocalizedText;
  eyebrow: LocalizedText;
  seo: LocationSeo;
  heroTitle: LocalizedText;
  heroDescription: LocalizedText;
  trustPoints: LocalizedStringList;
  introductionTitle: LocalizedText;
  introduction: LocalizedText;
  servicesTitle: LocalizedText;
  servicesDescription: LocalizedText;
  services: LocationFeature[];
  subjectsTitle: LocalizedText;
  subjectsDescription: LocalizedText;
  subjects: LocationSubjectLink[];
  curriculumTitle: LocalizedText;
  curriculumDescription: LocalizedText;
  curriculumPoints: LocalizedStringList;
  assessmentsTitle: LocalizedText;
  assessmentsDescription: LocalizedText;
  assessments: LocationAssessment[];
  gradesTitle: LocalizedText;
  gradesDescription: LocalizedText;
  grades: LocationFeature[];
  familyTitle: LocalizedText;
  familyDescription: LocalizedText;
  familyPoints: LocalizedStringList;
  localGuideTitle: LocalizedText;
  localGuideDescription: LocalizedText;
  localContext: LocalizedStringList;
  resources: LocationEducationResource[];
  faqTitle: LocalizedText;
  faqDescription: LocalizedText;
  faqs: LocationFaq[];
  reviewedAt: string;
}

export interface LocalizedLocationPage {
  id: string;
  level: LocationPageLevel;
  countryCode?: LocationCountryCode;
  segments: string[];
  parentId?: string;
  childIds: string[];
  relatedIds: string[];
  name: string;
  shortName: string;
  eyebrow: string;
  seo: {
    title: string;
    description: string;
    primaryKeyword: string;
    secondaryKeywords: string[];
    imageAlt: string;
  };
  heroTitle: string;
  heroDescription: string;
  trustPoints: string[];
  introductionTitle: string;
  introduction: string;
  servicesTitle: string;
  servicesDescription: string;
  services: Array<{
    title: string;
    description: string;
    icon: LocationFeature['icon'];
  }>;
  subjectsTitle: string;
  subjectsDescription: string;
  subjects: Array<{
    label: string;
    description: string;
    hrefType: LocationSubjectLink['hrefType'];
    hrefValue: string;
  }>;
  curriculumTitle: string;
  curriculumDescription: string;
  curriculumPoints: string[];
  assessmentsTitle: string;
  assessmentsDescription: string;
  assessments: Array<{
    name: string;
    description: string;
  }>;
  gradesTitle: string;
  gradesDescription: string;
  grades: Array<{
    title: string;
    description: string;
    icon: LocationFeature['icon'];
  }>;
  familyTitle: string;
  familyDescription: string;
  familyPoints: string[];
  localGuideTitle: string;
  localGuideDescription: string;
  localContext: string[];
  resources: Array<{
    name: string;
    description: string;
    url: string;
    type: LocationEducationResource['type'];
  }>;
  faqTitle: string;
  faqDescription: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  reviewedAt: string;
}

export function localizeText(
  value: LocalizedText,
  locale: SiteLocale
): string {
  return value[locale];
}

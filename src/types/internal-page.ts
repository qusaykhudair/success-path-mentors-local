import type { LucideIcon } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageAction {
  label: string;
  href: string;
  external?: boolean;
  newTab?: boolean;
}

export interface PageHighlight {
  value: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RelatedPage {
  title: string;
  description: string;
  href: string;
  label: string;
}

export interface PageSeo {
  title: string;
  description: string;
  pathname: string;
  imagePath?: string;
  noIndex?: boolean;
}
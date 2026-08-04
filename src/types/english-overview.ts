import type {
  EnglishGrade,
  EnglishMainTopic,
} from '@/types/english-curriculum';

export type EnglishStrandStatus =
  | 'pending-data'
  | 'approved';

export type EnglishStrandIconKey =
  | 'book-open-check'
  | 'braces'
  | 'library'
  | 'book-search'
  | 'audio-lines'
  | 'messages-square'
  | 'spell-check'
  | 'clipboard-list'
  | 'pen-line'
  | 'file-check'
  | 'panels-top-left';

export interface EnglishStrandDefinition {
  slug: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  iconKey: EnglishStrandIconKey;
  status: EnglishStrandStatus;
  gradeRange: {
    min: number;
    max: number;
  };
}

export interface EnglishStrandSummary {
  slug: string;
  title: string;
  description: string;
  iconKey: EnglishStrandIconKey;
  status: EnglishStrandStatus;
  gradeRange: {
    min: number;
    max: number;
  };
  mainTopicCount?: number;
  subtopicCount?: number;
}

export interface EnglishCurriculumOverview {
  totals: {
    gradeMin: number;
    gradeMax: number;
    strandCount: number;
    approvedStrandCount: number;
  };
  strands: EnglishStrandSummary[];
}

export interface EnglishGradePageData {
  grade: EnglishGrade;
  label: string;
  shortLabel: string;
  topics: EnglishMainTopic[];
}

export interface EnglishStrandPageData {
  slug: string;
  title: string;
  description: string;
  iconKey: EnglishStrandIconKey;
  gradeRange: {
    min: number;
    max: number;
  };
  grades: EnglishGradePageData[];
}

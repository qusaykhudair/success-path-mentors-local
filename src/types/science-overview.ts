import type {
  ScienceGrade,
  ScienceMainTopic,
  ScienceSubjectKey,
  ScienceSubjectName,
} from '@/types/science-curriculum';

export type ScienceStrandStatus =
  | 'pending-data'
  | 'approved';

export type ScienceStrandIconKey =
  | 'atom'
  | 'balance'
  | 'battery'
  | 'beaker'
  | 'calculator'
  | 'circuit'
  | 'droplet'
  | 'earth'
  | 'energy'
  | 'flame'
  | 'flask'
  | 'force'
  | 'formula'
  | 'gas'
  | 'gauge'
  | 'lab'
  | 'layers'
  | 'leaf'
  | 'magnet'
  | 'molecule'
  | 'momentum'
  | 'motion'
  | 'optics'
  | 'oscillation'
  | 'physics'
  | 'quantum'
  | 'radiation'
  | 'reaction'
  | 'structure'
  | 'thermometer'
  | 'vector'
  | 'wave';

export interface ScienceStrandDefinition {
  subjectKey: ScienceSubjectKey;
  slug: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  iconKey: ScienceStrandIconKey;
  status: ScienceStrandStatus;
}

export interface ScienceStrandSummary {
  subjectKey: ScienceSubjectKey;
  slug: string;
  title: string;
  description: string;
  iconKey: ScienceStrandIconKey;
  status: ScienceStrandStatus;
  gradeLevels: number[];
  mainTopicCount: number;
  subtopicCount: number;
}

export interface ScienceSubjectOverview {
  subjectKey: ScienceSubjectKey;
  subjectName: ScienceSubjectName;
  totals: {
    gradeLevels: number[];
    strandCount: number;
    approvedStrandCount: number;
    mainTopicCount: number;
    subtopicCount: number;
  };
  strands: ScienceStrandSummary[];
}

export interface ScienceGradePageData {
  grade: ScienceGrade;
  label: string;
  shortLabel: string;
  topics: ScienceMainTopic[];
}

export interface ScienceStrandPageData {
  subjectKey: ScienceSubjectKey;
  subjectTitle: string;
  slug: string;
  title: string;
  description: string;
  iconKey: ScienceStrandIconKey;
  gradeLevels: number[];
  grades: ScienceGradePageData[];
  sourceNote: string;
}

import type {
  MathGrade,
  MathPathwayIconKey,
  MathStageId,
} from '@/types/math-curriculum';

export type MathTopicStatus =
  | 'available'
  | 'topic-only';

export interface MathTopicSummary {
  id: string;
  title: string;
  status: MathTopicStatus;
}

export interface MathGradeTopicGroup {
  grade: MathGrade;
  label: string;
  shortLabel: string;
  topicCount: number;
  topics: MathTopicSummary[];
}

export interface MathPathwayStageSummary {
  id: MathStageId;
  label: string;
  grades: MathGradeTopicGroup[];
  topicCount: number;
}

export interface PublicMathPathwaySummary {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  iconKey: MathPathwayIconKey;
  gradeRange: {
    min: number;
    max: number;
  };
  topicCount: number;
  stageCount: number;
  stages: MathPathwayStageSummary[];
}

export interface MathGradePathwaySummary {
  slug: string;
  title: string;
  iconKey: MathPathwayIconKey;
  topicCount: number;
  topics: MathTopicSummary[];
}

export interface MathGradeSummary {
  grade: MathGrade;
  label: string;
  shortLabel: string;
  topicCount: number;
  pathwayCount: number;
  pathways: MathGradePathwaySummary[];
}

export interface MathCurriculumOverview {
  totals: {
    gradeMin: number;
    gradeMax: number;
    strandCount: number;
    topicCount: number;
    publicPathwayCount: number;
  };
  pathways: PublicMathPathwaySummary[];
  grades: MathGradeSummary[];
}

export interface MathExplorerCopy {
  sectionEyebrow: string;
  sectionTitle: string;
  sectionDescription: string;
  pathwaysTab: string;
  gradesTab: string;
  pathwaysAriaLabel: string;
  gradesAriaLabel: string;
  pathwayCardAction: string;
  gradeRangeLabel: string;
  topicsLabel: string;
  stagesLabel: string;
  selectedPathwayLabel: string;
  gradeStageDescription: string;
  selectedGradeLabel: string;
  gradeOverviewDescription: string;
  bookTrialLabel: string;
  detailsHeading: string;
  gradesIncludedLabel: string;
  stageTopicsLabel: string;
  gradeTopicsLabel: string;
  learningAreasLabel: string;
  topicsHeading: string;
  topicsInGradeLabel: string;
  topicOverviewLabel: string;
  gradeNames: Record<MathGrade, string>;
  gradeShortNames: Record<MathGrade, string>;
}

export interface MathHeroCopy {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: string;
  secondaryAction: string;
  breadcrumbLabel: string;
  homeLabel: string;
  subjectsLabel: string;
  currentLabel: string;
  highlights: Array<{
    value: string;
    label: string;
  }>;
  visualLabel: string;
  visualTitle: string;
  visualDescription: string;
  visualStats: {
    grades: string;
    topics: string;
    pathways: string;
  };
  visualTiles: {
    functions: string;
    advancedMath: string;
  };
}

export interface MathOverviewCtaCopy {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: string;
  secondaryAction: string;
}

export interface MathPageCopy {
  seo: {
    title: string;
    description: string;
    pathname: string;
    imagePath?: string;
  };
  hero: MathHeroCopy;
  explorer: MathExplorerCopy;
  cta: MathOverviewCtaCopy;
  schema: {
    serviceName: string;
    serviceDescription: string;
  };
}

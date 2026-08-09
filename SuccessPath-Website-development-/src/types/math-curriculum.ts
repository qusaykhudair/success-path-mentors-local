export type MathLocale = 'en' | 'ar';

export type MathGrade =
  | 'G2'
  | 'G3'
  | 'G4'
  | 'G5'
  | 'G6'
  | 'G7'
  | 'G8'
  | 'G9'
  | 'G10'
  | 'G11'
  | 'G12';

export type MathStageId =
  | 'grades-2-3'
  | 'grades-4-5'
  | 'grades-6-8'
  | 'grades-9-10'
  | 'grades-11-12';

export type MathPathwaySlug =
  | 'basics-operations'
  | 'fractions-rational-numbers'
  | 'algebra-equations'
  | 'functions'
  | 'geometry-trigonometry'
  | 'statistics-probability'
  | 'advanced-precalculus'
  | 'financial-literacy';

export interface LocalizedText {
  en: string;
  ar: string;
}

export interface MathCurriculumTopicSource {
  topic: string;
  subtopics: string[];
}

export type MathCurriculumSource = Record<
  string,
  Partial<
    Record<
      MathGrade,
      MathCurriculumTopicSource
    >
  >
>;

export type ReviewCellStatus =
  | 'available'
  | 'topic_only'
  | 'not_listed';

export interface StrandPathwayReviewGradeCell {
  rawCell: string | null;
  topic: string | null;
  subtopicCount: number | null;
  hasSubtopics: boolean;
  status: ReviewCellStatus;
}

export interface StrandPathwayReviewItem {
  sourceRow: number;
  strand: string;
  proposedPathway: string;
  grades: Record<
    MathGrade,
    StrandPathwayReviewGradeCell
  >;
}

export interface StrandPathwayReviewSource {
  statistics: {
    strandCount: number;
    gradeCount: number;
    possibleStrandGradeCells: number;
    populatedTopicCells: number;
    topicOnlyCells: number;
    blankCells: number;
    totalSubtopicCountShownInExcel: number;
    pathwayCount: number;
  };
  strands: StrandPathwayReviewItem[];
}

export type MathPathwayIconKey =
  | 'calculator'
  | 'divide-circle'
  | 'variable'
  | 'chart-spline'
  | 'shapes'
  | 'chart'
  | 'sigma'
  | 'coins';

export interface PublicMathPathway {
  slug: MathPathwaySlug;
  title: LocalizedText;
  shortTitle: LocalizedText;
  description: LocalizedText;
  iconKey: MathPathwayIconKey;
}

export type MathClassificationBasis =
  | 'topic-title-and-subtopics'
  | 'subtopic-content-correction';

export interface MathTopicDistributionEntry {
  pathwaySlug: MathPathwaySlug;
  sourceTopic: string;
  displayTitle: string;
  subtopicCount: number;
  sourceOrder: number;
  classificationBasis: MathClassificationBasis;
  reviewNote?: string;
}

export interface MathTopicDistributionSource {
  metadata: {
    sourceFile: string;
    sourceRecordCount: number;
    sourceSubtopicCount: number;
    publicTopicCount: number;
    classificationSections: MathPathwaySlug[];
    classificationRule: string;
    displayDeduplicationRule: string;
    correctedRecordCount: number;
    trueDuplicateGroupsMerged: number;
  };
  records: Record<
    string,
    MathTopicDistributionEntry
  >;
}

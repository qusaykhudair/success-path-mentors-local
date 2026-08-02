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

export interface StrandPathwayReviewItem {
  strand: string;
  proposedPathway: string;
}

export interface StrandPathwayReviewSource {
  statistics: {
    strandCount: number;
    populatedTopicCells: number;
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

export type PublicPathwayStatus =
  | 'confirmed'
  | 'curated';

export type MathLeafSourceStrategy =
  | {
      type: 'source-pathways';
      sourceNames: string[];
      grades?: MathGrade[];
    }
  | {
      type: 'topic-filter';
      includePatterns: string[];
      excludePatterns?: string[];
      grades?: MathGrade[];
    };

export type MathSourceStrategy =
  | MathLeafSourceStrategy
  | {
      type: 'composite';
      strategies: MathLeafSourceStrategy[];
    };

export interface PublicMathPathway {
  slug: string;
  title: LocalizedText;
  shortTitle: LocalizedText;
  description: LocalizedText;
  iconKey: MathPathwayIconKey;
  status: PublicPathwayStatus;
  sourceStrategy: MathSourceStrategy;
}

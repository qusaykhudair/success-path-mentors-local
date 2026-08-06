export type EnglishGrade =
  | 'G1'
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

export interface EnglishSubtopic {
  id: string;
  title: string;
}

export interface EnglishMainTopic {
  id: string;
  title: string;
  subtopics: EnglishSubtopic[];
  sourceRows: number[];
  status: 'approved-source' | 'needs-review';
}

export interface EnglishGradeCurriculum {
  grade: EnglishGrade;
  label: string;
  status: 'available' | 'pending-data';
  topics: EnglishMainTopic[];
  mainTopicCount: number;
  subtopicCount: number;
}

export interface EnglishStrandCurriculum {
  metadata: {
    subject: 'English';
    strand: string;
    strandSlug: string;
    gradeRange: {
      min: number;
      max: number;
    };
    sourceRecordCount: number;
    gradedSourceRecordCount: number;
    nonGradedSourceRecordCount: number;
    mainTopicCount: number;
    subtopicCount: number;
    exactDuplicateRowsRemoved: number;
    publicStatus: 'draft-review' | 'approved';
    countingRule?: string;
    integrityRules: string[];
  };
  strand: {
    slug: string;
    title: {
      en: string;
      ar: string;
    };
    description: {
      en: string;
      ar: string;
    };
  };
  grades: EnglishGradeCurriculum[];
}

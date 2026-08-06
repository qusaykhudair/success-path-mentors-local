export type ScienceSubjectKey =
  | 'chemistry'
  | 'physics'
  | 'general-science';

export type ScienceSubjectName =
  | 'Chemistry'
  | 'Physics'
  | 'General Science';

export type ScienceGrade =
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

export interface ScienceSubtopic {
  id: string;
  title: string;
}

export interface ScienceMainTopic {
  id: string;
  title: string;
  subtopics: ScienceSubtopic[];
  sourceRows: number[];
  status:
    | 'approved-source'
    | 'needs-review';
}

export interface ScienceGradeCurriculum {
  grade: ScienceGrade;
  label: string;
  status:
    | 'available'
    | 'pending-data';
  topics: ScienceMainTopic[];
  mainTopicCount: number;
  subtopicCount: number;
}

export interface ScienceStrandCurriculum {
  metadata: {
    subject: ScienceSubjectName;
    subjectSlug: ScienceSubjectKey;
    strand: string;
    strandSlug: string;
    gradeRange: {
      min: number;
      max: number;
    };
    gradeLevels: number[];
    sourceRecordCount: number;
    gradedSourceRecordCount: number;
    nonGradedSourceRecordCount: number;
    mainTopicCount: number;
    subtopicCount: number;
    exactDuplicateRowsRemoved: number;
    publicStatus:
      | 'draft-review'
      | 'approved';
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
  grades: ScienceGradeCurriculum[];
}

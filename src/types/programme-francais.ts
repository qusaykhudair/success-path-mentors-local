export type ProgrammeFrancaisSubjectKey =
  | 'francais'
  | 'mathematiques-en-francais';

export type ProgrammeFrancaisStatus =
  | 'observe'
  | 'reference';

export type ProgrammeFrancaisIconKey =
  | 'algebre'
  | 'donnees'
  | 'espace'
  | 'finance'
  | 'francais'
  | 'langue'
  | 'lecture'
  | 'litteratie'
  | 'mathematiques'
  | 'nombres'
  | 'processus'
  | 'redaction';

export interface ProgrammeFrancaisSubtopic {
  id: string;
  titre: string;
  competence: string;
  activite: string;
  statut: ProgrammeFrancaisStatus;
  statutSource: string;
  confiance: string;
  sourceRow: number;
}

export interface ProgrammeFrancaisMainTopic {
  id: string;
  titre: string;
  sousSujets:
    ProgrammeFrancaisSubtopic[];
  sourceRows: number[];
}

export interface ProgrammeFrancaisGrade {
  niveau: number;
  label: string;
  statut:
    | 'disponible'
    | 'sans-donnees';
  sujetsPrincipaux:
    ProgrammeFrancaisMainTopic[];
  nombreSujetsPrincipaux: number;
  nombreSousSujets: number;
}

export interface ProgrammeFrancaisDomainCurriculum {
  metadata: {
    programme: 'Programme français';
    matiere:
      | 'Français'
      | 'Mathématiques en français';
    matiereSlug:
      ProgrammeFrancaisSubjectKey;
    domaine: string;
    domaineSlug: string;
    niveaux: number[];
    sourceRecordCount: number;
    publicRecordCount: number;
    nonStandardRecordCount: number;
    mainTopicPlacementCount: number;
    subtopicPlacementCount: number;
    observedRecordCount: number;
    referenceRecordCount: number;
    exactDuplicateRowsRemoved: number;
    publicStatus:
      | 'approved'
      | 'draft-review';
    countingRule: string;
    integrityRules: string[];
  };
  domaine: {
    slug: string;
    titre: string;
    titreSource: string;
    description: string;
    iconKey:
      ProgrammeFrancaisIconKey;
  };
  niveaux:
    ProgrammeFrancaisGrade[];
}

export interface ProgrammeFrancaisDomainDefinition {
  subjectKey:
    ProgrammeFrancaisSubjectKey;
  slug: string;
  title: string;
  sourceTitle: string;
  description: string;
  iconKey:
    ProgrammeFrancaisIconKey;
}

export interface ProgrammeFrancaisSubjectDefinition {
  key:
    ProgrammeFrancaisSubjectKey;
  title: string;
  shortTitle: string;
  description: string;
  iconKey:
    ProgrammeFrancaisIconKey;
  domains:
    ProgrammeFrancaisDomainDefinition[];
}

export interface ProgrammeFrancaisDomainSummary {
  subjectKey:
    ProgrammeFrancaisSubjectKey;
  slug: string;
  title: string;
  sourceTitle: string;
  description: string;
  iconKey:
    ProgrammeFrancaisIconKey;
  gradeLevels: number[];
  mainTopicCount: number;
  subtopicCount: number;
  observedRecordCount: number;
  referenceRecordCount: number;
}

export interface ProgrammeFrancaisSubjectOverview {
  subject:
    ProgrammeFrancaisSubjectDefinition;
  totals: {
    gradeLevels: number[];
    domainCount: number;
    mainTopicCount: number;
    subtopicCount: number;
    observedRecordCount: number;
    referenceRecordCount: number;
  };
  domains:
    ProgrammeFrancaisDomainSummary[];
}

export interface ProgrammeFrancaisOverview {
  totals: {
    subjectCount: number;
    domainCount: number;
    gradeLevels: number[];
    mainTopicCount: number;
    subtopicCount: number;
  };
  subjects:
    ProgrammeFrancaisSubjectOverview[];
}

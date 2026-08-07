export interface FrenchProgrammeExternalResource {
  name: string;
  organization: string;
  description: string;
  url: string;
}

export const frenchProgrammeExternalResources: FrenchProgrammeExternalResource[] = [
  {
    name: 'Évaluation de la compétence en français',
    organization: 'Waterloo Catholic District School Board (WCDSB)',
    description:
      'Informations d’un conseil scolaire ontarien sur les évaluations de compétence en français et l’admissibilité des élèves.',
    url: 'https://www.wcdsb.ca/programs-and-services/fsl/french-proficiency-testing/',
  },
  {
    name: 'Examens du DELF',
    organization: 'District School Board of Niagara (DSBN)',
    description:
      'Présentation du Diplôme d’études en langue française, des niveaux évalués et du contexte offert aux élèves du secondaire.',
    url: 'https://www.dsbn.org/secondary/curriculum/delf-examinations',
  },
  {
    name: 'Diplôme d’études en langue française (DELF)',
    organization: 'Simcoe County District School Board (SCDSB)',
    description:
      'Renseignements sur les niveaux du CECR, les quatre compétences évaluées et la sélection du niveau DELF approprié.',
    url: 'https://www.scdsb.on.ca/secondary/program_options/french_as_a_second_language/delf',
  },
];

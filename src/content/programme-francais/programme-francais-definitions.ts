import type {
  ProgrammeFrancaisSubjectDefinition,
} from '@/types/programme-francais';

export const programmeFrancaisSubjects:
  ProgrammeFrancaisSubjectDefinition[] = [
    {
      key:
        'francais',
      title:
        "Français",
      shortTitle:
        "Français",
      description:
        "Un parcours complet de littératie couvrant la communication orale, les notions fondamentales de la langue, la compréhension et la rédaction.",
      iconKey:
        'francais',
      domains: [
        {
          subjectKey:
            'francais',
          slug:
            'liens-litteratie',
          title:
            "Liens et mise en application en littératie",
          sourceTitle:
            "A. Liens et mise en application en littératie",
          description:
            "Communication orale, pensée critique, médias, autorégulation et transfert des apprentissages en littératie.",
          iconKey:
            'litteratie',
        },
        {
          subjectKey:
            'francais',
          slug:
            'notions-fondamentales-langue',
          title:
            "Notions fondamentales de la langue",
          sourceTitle:
            "B. Notions fondamentales de la langue",
          description:
            "Conscience phonologique, vocabulaire, orthographe, grammaire, conjugaison et fonctionnement de la langue.",
          iconKey:
            'langue',
        },
        {
          subjectKey:
            'francais',
          slug:
            'comprehension-textes',
          title:
            "Compréhension des textes",
          sourceTitle:
            "C. Compréhension : comprendre des textes et y réagir",
          description:
            "Lecture, stratégies de compréhension, fluidité, analyse, interprétation et réaction aux textes.",
          iconKey:
            'lecture',
        },
        {
          subjectKey:
            'francais',
          slug:
            'redaction-creation-textes',
          title:
            "Rédaction et création de textes",
          sourceTitle:
            "D. Rédaction : expression d’idées et création de textes",
          description:
            "Planification, organisation, rédaction, révision, correction et création de différents genres de textes.",
          iconKey:
            'redaction',
        },
      ],
    },
    {
      key:
        'mathematiques-en-francais',
      title:
        "Mathématiques en français",
      shortTitle:
        "Mathématiques",
      description:
        "Un parcours de mathématiques enseigné entièrement en français, de la numération aux fonctions, aux données, à la géométrie et à la littératie financière.",
      iconKey:
        'mathematiques',
      domains: [
        {
          subjectKey:
            'mathematiques-en-francais',
          slug:
            'processus-mathematiques',
          title:
            "Processus mathématiques",
          sourceTitle:
            "A. Processus mathématiques",
          description:
            "Résolution de problèmes, raisonnement, communication, modélisation, codage et consolidation des stratégies.",
          iconKey:
            'processus',
        },
        {
          subjectKey:
            'mathematiques-en-francais',
          slug:
            'nombres',
          title:
            "Nombres",
          sourceTitle:
            "B. Nombres",
          description:
            "Sens du nombre, opérations, fractions, décimaux, pourcentages, rapports, proportions et estimation.",
          iconKey:
            'nombres',
        },
        {
          subjectKey:
            'mathematiques-en-francais',
          slug:
            'algebre',
          title:
            "Algèbre",
          sourceTitle:
            "C. Algèbre",
          description:
            "Régularités, expressions, équations, relations, fonctions, polynômes et raisonnement algébrique.",
          iconKey:
            'algebre',
        },
        {
          subjectKey:
            'mathematiques-en-francais',
          slug:
            'donnees',
          title:
            "Données",
          sourceTitle:
            "D. Données",
          description:
            "Collecte, représentation, analyse et interprétation des données, probabilités et statistiques.",
          iconKey:
            'donnees',
        },
        {
          subjectKey:
            'mathematiques-en-francais',
          slug:
            'sens-espace',
          title:
            "Sens de l’espace",
          sourceTitle:
            "E. Sens de l’espace",
          description:
            "Géométrie plane et dans l’espace, mesure, transformations, coordonnées, angles, aires et volumes.",
          iconKey:
            'espace',
        },
        {
          subjectKey:
            'mathematiques-en-francais',
          slug:
            'litteratie-financiere',
          title:
            "Littératie financière",
          sourceTitle:
            "F. Littératie financière",
          description:
            "Argent, budget, décisions financières, taux, intérêts, coûts, revenus et planification financière.",
          iconKey:
            'finance',
        },
      ],
    },
  ];

export function getProgrammeFrancaisSubjectDefinition(
  subjectKey: string
) {
  return programmeFrancaisSubjects.find(
    (subject) =>
      subject.key === subjectKey
  );
}

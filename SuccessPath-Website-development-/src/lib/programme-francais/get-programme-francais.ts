import 'server-only';

import francaisLiensLitteratieJson from '@/content/programme-francais/data/francais/liens-litteratie.json';
import francaisNotionsFondamentalesLangueJson from '@/content/programme-francais/data/francais/notions-fondamentales-langue.json';
import francaisComprehensionTextesJson from '@/content/programme-francais/data/francais/comprehension-textes.json';
import francaisRedactionCreationTextesJson from '@/content/programme-francais/data/francais/redaction-creation-textes.json';
import mathematiquesEnFrancaisProcessusMathematiquesJson from '@/content/programme-francais/data/mathematiques-en-francais/processus-mathematiques.json';
import mathematiquesEnFrancaisNombresJson from '@/content/programme-francais/data/mathematiques-en-francais/nombres.json';
import mathematiquesEnFrancaisAlgebreJson from '@/content/programme-francais/data/mathematiques-en-francais/algebre.json';
import mathematiquesEnFrancaisDonneesJson from '@/content/programme-francais/data/mathematiques-en-francais/donnees.json';
import mathematiquesEnFrancaisSensEspaceJson from '@/content/programme-francais/data/mathematiques-en-francais/sens-espace.json';
import mathematiquesEnFrancaisLitteratieFinanciereJson from '@/content/programme-francais/data/mathematiques-en-francais/litteratie-financiere.json';

import {
  getProgrammeFrancaisSubjectDefinition,
  programmeFrancaisSubjects,
} from '@/content/programme-francais/programme-francais-definitions';
import type {
  ProgrammeFrancaisDomainCurriculum,
  ProgrammeFrancaisDomainSummary,
  ProgrammeFrancaisOverview,
  ProgrammeFrancaisSubjectKey,
  ProgrammeFrancaisSubjectOverview,
} from '@/types/programme-francais';

const curriculumEntries: Array<
  [
    string,
    ProgrammeFrancaisDomainCurriculum,
  ]
> = [
  [
    'francais::liens-litteratie',
    francaisLiensLitteratieJson as ProgrammeFrancaisDomainCurriculum,
  ],
  [
    'francais::notions-fondamentales-langue',
    francaisNotionsFondamentalesLangueJson as ProgrammeFrancaisDomainCurriculum,
  ],
  [
    'francais::comprehension-textes',
    francaisComprehensionTextesJson as ProgrammeFrancaisDomainCurriculum,
  ],
  [
    'francais::redaction-creation-textes',
    francaisRedactionCreationTextesJson as ProgrammeFrancaisDomainCurriculum,
  ],
  [
    'mathematiques-en-francais::processus-mathematiques',
    mathematiquesEnFrancaisProcessusMathematiquesJson as ProgrammeFrancaisDomainCurriculum,
  ],
  [
    'mathematiques-en-francais::nombres',
    mathematiquesEnFrancaisNombresJson as ProgrammeFrancaisDomainCurriculum,
  ],
  [
    'mathematiques-en-francais::algebre',
    mathematiquesEnFrancaisAlgebreJson as ProgrammeFrancaisDomainCurriculum,
  ],
  [
    'mathematiques-en-francais::donnees',
    mathematiquesEnFrancaisDonneesJson as ProgrammeFrancaisDomainCurriculum,
  ],
  [
    'mathematiques-en-francais::sens-espace',
    mathematiquesEnFrancaisSensEspaceJson as ProgrammeFrancaisDomainCurriculum,
  ],
  [
    'mathematiques-en-francais::litteratie-financiere',
    mathematiquesEnFrancaisLitteratieFinanciereJson as ProgrammeFrancaisDomainCurriculum,
  ],
];

const curriculumByKey =
  new Map<
    string,
    ProgrammeFrancaisDomainCurriculum
  >(curriculumEntries);

function normalize(
  value: string
): string {
  return value
    .toLocaleLowerCase('fr')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildKey(
  subjectKey:
    ProgrammeFrancaisSubjectKey,
  domainSlug: string
): string {
  return `${subjectKey}::${domainSlug}`;
}

function validateCurriculum(
  curriculum:
    ProgrammeFrancaisDomainCurriculum
): void {
  const {
    metadata,
    niveaux,
  } = curriculum;

  if (
    metadata.publicStatus !==
    'approved'
  ) {
    throw new Error(
      `${metadata.domaine} n’est pas approuvé.`
    );
  }

  if (
    niveaux.length !== 12
  ) {
    throw new Error(
      `${metadata.domaine} doit contenir 12 niveaux.`
    );
  }

  let mainTopicCount = 0;
  let subtopicCount = 0;

  niveaux.forEach((niveau) => {
    if (
      niveau.nombreSujetsPrincipaux !==
      niveau.sujetsPrincipaux.length
    ) {
      throw new Error(
        `${metadata.domaine}: nombre de sujets invalide au niveau ${niveau.niveau}.`
      );
    }

    const calculatedSubtopics =
      niveau.sujetsPrincipaux.reduce(
        (total, topic) =>
          total +
          topic.sousSujets.length,
        0
      );

    if (
      calculatedSubtopics !==
      niveau.nombreSousSujets
    ) {
      throw new Error(
        `${metadata.domaine}: nombre de sous-sujets invalide au niveau ${niveau.niveau}.`
      );
    }

    const exactRecords =
      new Set<string>();

    niveau.sujetsPrincipaux.forEach(
      (topic) => {
        topic.sousSujets.forEach(
          (subtopic) => {
            const key = [
              niveau.niveau,
              normalize(topic.titre),
              normalize(subtopic.titre),
            ].join('::');

            if (
              exactRecords.has(key)
            ) {
              throw new Error(
                `Doublon public: ${metadata.domaine} ${key}`
              );
            }

            exactRecords.add(key);
          }
        );
      }
    );

    mainTopicCount +=
      niveau.nombreSujetsPrincipaux;

    subtopicCount +=
      niveau.nombreSousSujets;
  });

  if (
    mainTopicCount !==
    metadata.mainTopicPlacementCount
  ) {
    throw new Error(
      `${metadata.domaine}: total de sujets principaux invalide.`
    );
  }

  if (
    subtopicCount !==
    metadata.subtopicPlacementCount
  ) {
    throw new Error(
      `${metadata.domaine}: total de sous-sujets invalide.`
    );
  }
}

programmeFrancaisSubjects.forEach(
  (subject) => {
    subject.domains.forEach(
      (domain) => {
        const curriculum =
          curriculumByKey.get(
            buildKey(
              subject.key,
              domain.slug
            )
          );

        if (!curriculum) {
          throw new Error(
            `Curriculum manquant: ${subject.key}/${domain.slug}`
          );
        }

        if (
          curriculum.metadata
            .matiereSlug !==
            subject.key ||
          curriculum.metadata
            .domaineSlug !==
            domain.slug
        ) {
          throw new Error(
            `Métadonnées incohérentes: ${subject.key}/${domain.slug}`
          );
        }

        validateCurriculum(
          curriculum
        );
      }
    );
  }
);

export function getProgrammeFrancaisDomainCurriculum(
  subjectKey: string,
  domainSlug: string
): ProgrammeFrancaisDomainCurriculum | null {
  const subject =
    getProgrammeFrancaisSubjectDefinition(
      subjectKey
    );

  if (!subject) {
    return null;
  }

  const domain =
    subject.domains.find(
      (item) =>
        item.slug === domainSlug
    );

  if (!domain) {
    return null;
  }

  return (
    curriculumByKey.get(
      buildKey(
        subject.key,
        domain.slug
      )
    ) ??
    null
  );
}

export function getProgrammeFrancaisSubjectOverview(
  subjectKey: string
): ProgrammeFrancaisSubjectOverview | null {
  const subject =
    getProgrammeFrancaisSubjectDefinition(
      subjectKey
    );

  if (!subject) {
    return null;
  }

  const domains:
    ProgrammeFrancaisDomainSummary[] =
      subject.domains.map(
        (domain) => {
          const curriculum =
            curriculumByKey.get(
              buildKey(
                subject.key,
                domain.slug
              )
            );

          if (!curriculum) {
            throw new Error(
              `Curriculum manquant: ${subject.key}/${domain.slug}`
            );
          }

          return {
            subjectKey:
              subject.key,
            slug:
              domain.slug,
            title:
              domain.title,
            sourceTitle:
              domain.sourceTitle,
            description:
              domain.description,
            iconKey:
              domain.iconKey,
            gradeLevels:
              curriculum.metadata
                .niveaux,
            mainTopicCount:
              curriculum.metadata
                .mainTopicPlacementCount,
            subtopicCount:
              curriculum.metadata
                .subtopicPlacementCount,
            observedRecordCount:
              curriculum.metadata
                .observedRecordCount,
            referenceRecordCount:
              curriculum.metadata
                .referenceRecordCount,
          };
        }
      );

  const gradeLevels = Array.from(
    new Set(
      domains.flatMap(
        (domain) =>
          domain.gradeLevels
      )
    )
  ).sort(
    (first, second) =>
      first - second
  );

  return {
    subject,
    totals: {
      gradeLevels,
      domainCount:
        domains.length,
      mainTopicCount:
        domains.reduce(
          (total, domain) =>
            total +
            domain.mainTopicCount,
          0
        ),
      subtopicCount:
        domains.reduce(
          (total, domain) =>
            total +
            domain.subtopicCount,
          0
        ),
      observedRecordCount:
        domains.reduce(
          (total, domain) =>
            total +
            domain.observedRecordCount,
          0
        ),
      referenceRecordCount:
        domains.reduce(
          (total, domain) =>
            total +
            domain.referenceRecordCount,
          0
        ),
    },
    domains,
  };
}

export function getProgrammeFrancaisOverview():
  ProgrammeFrancaisOverview {
  const subjects =
    programmeFrancaisSubjects.map(
      (subject) => {
        const overview =
          getProgrammeFrancaisSubjectOverview(
            subject.key
          );

        if (!overview) {
          throw new Error(
            `Aperçu manquant: ${subject.key}`
          );
        }

        return overview;
      }
    );

  return {
    totals: {
      subjectCount:
        subjects.length,
      domainCount:
        subjects.reduce(
          (total, subject) =>
            total +
            subject.totals.domainCount,
          0
        ),
      gradeLevels:
        Array.from(
          new Set(
            subjects.flatMap(
              (subject) =>
                subject.totals
                  .gradeLevels
            )
          )
        ).sort(
          (first, second) =>
            first - second
        ),
      mainTopicCount:
        subjects.reduce(
          (total, subject) =>
            total +
            subject.totals
              .mainTopicCount,
          0
        ),
      subtopicCount:
        subjects.reduce(
          (total, subject) =>
            total +
            subject.totals
              .subtopicCount,
          0
        ),
    },
    subjects,
  };
}

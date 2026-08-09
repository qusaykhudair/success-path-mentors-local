import 'server-only';

import acidsBasesAqueousEquilibriaJson from '@/content/subjects/chemistry/data/acids-bases-aqueous-equilibria.json';
import atomicStructurePeriodicityJson from '@/content/subjects/chemistry/data/atomic-structure-periodicity.json';
import chemicalBondingMolecularStructureJson from '@/content/subjects/chemistry/data/chemical-bonding-molecular-structure.json';
import chemicalEquilibriumJson from '@/content/subjects/chemistry/data/chemical-equilibrium.json';
import chemicalKineticsJson from '@/content/subjects/chemistry/data/chemical-kinetics.json';
import chemicalNomenclatureFormulasJson from '@/content/subjects/chemistry/data/chemical-nomenclature-formulas.json';
import chemicalReactionsEquationsJson from '@/content/subjects/chemistry/data/chemical-reactions-equations.json';
import integratedChemistryJson from '@/content/subjects/chemistry/data/integrated-chemistry.json';
import matterChemicalPropertiesJson from '@/content/subjects/chemistry/data/matter-chemical-properties.json';
import nuclearChemistryJson from '@/content/subjects/chemistry/data/nuclear-chemistry.json';
import organicChemistryJson from '@/content/subjects/chemistry/data/organic-chemistry.json';
import redoxElectrochemistryJson from '@/content/subjects/chemistry/data/redox-electrochemistry.json';
import solutionsSolubilityJson from '@/content/subjects/chemistry/data/solutions-solubility.json';
import statesMatterGasesJson from '@/content/subjects/chemistry/data/states-matter-gases.json';
import stoichiometryQuantitativeChemistryJson from '@/content/subjects/chemistry/data/stoichiometry-quantitative-chemistry.json';
import thermochemistryJson from '@/content/subjects/chemistry/data/thermochemistry.json';

import {
  approvedChemistryStrands,
  chemistryStrands,
} from '@/content/subjects/chemistry/chemistry-strands';
import type {
  SiteLocale,
} from '@/config/site';
import type {
  ScienceGrade,
  ScienceStrandCurriculum,
} from '@/types/science-curriculum';
import type {
  ScienceGradePageData,
  ScienceStrandPageData,
  ScienceSubjectOverview,
} from '@/types/science-overview';

const gradeOrder: ScienceGrade[] = [
  'G1',
  'G2',
  'G3',
  'G4',
  'G5',
  'G6',
  'G7',
  'G8',
  'G9',
  'G10',
  'G11',
  'G12',
];

const arabicGradeLabels:
  Record<ScienceGrade, string> = {
    G1: 'الصف الأول',
    G2: 'الصف الثاني',
    G3: 'الصف الثالث',
    G4: 'الصف الرابع',
    G5: 'الصف الخامس',
    G6: 'الصف السادس',
    G7: 'الصف السابع',
    G8: 'الصف الثامن',
    G9: 'الصف التاسع',
    G10: 'الصف العاشر',
    G11: 'الصف الحادي عشر',
    G12: 'الصف الثاني عشر',
  };

const curriculumEntries: Array<
  [string, ScienceStrandCurriculum]
> = [
  [
    'acids-bases-aqueous-equilibria',
    acidsBasesAqueousEquilibriaJson as ScienceStrandCurriculum,
  ],
  [
    'atomic-structure-periodicity',
    atomicStructurePeriodicityJson as ScienceStrandCurriculum,
  ],
  [
    'chemical-bonding-molecular-structure',
    chemicalBondingMolecularStructureJson as ScienceStrandCurriculum,
  ],
  [
    'chemical-equilibrium',
    chemicalEquilibriumJson as ScienceStrandCurriculum,
  ],
  [
    'chemical-kinetics',
    chemicalKineticsJson as ScienceStrandCurriculum,
  ],
  [
    'chemical-nomenclature-formulas',
    chemicalNomenclatureFormulasJson as ScienceStrandCurriculum,
  ],
  [
    'chemical-reactions-equations',
    chemicalReactionsEquationsJson as ScienceStrandCurriculum,
  ],
  [
    'integrated-chemistry',
    integratedChemistryJson as ScienceStrandCurriculum,
  ],
  [
    'matter-chemical-properties',
    matterChemicalPropertiesJson as ScienceStrandCurriculum,
  ],
  [
    'nuclear-chemistry',
    nuclearChemistryJson as ScienceStrandCurriculum,
  ],
  [
    'organic-chemistry',
    organicChemistryJson as ScienceStrandCurriculum,
  ],
  [
    'redox-electrochemistry',
    redoxElectrochemistryJson as ScienceStrandCurriculum,
  ],
  [
    'solutions-solubility',
    solutionsSolubilityJson as ScienceStrandCurriculum,
  ],
  [
    'states-matter-gases',
    statesMatterGasesJson as ScienceStrandCurriculum,
  ],
  [
    'stoichiometry-quantitative-chemistry',
    stoichiometryQuantitativeChemistryJson as ScienceStrandCurriculum,
  ],
  [
    'thermochemistry',
    thermochemistryJson as ScienceStrandCurriculum,
  ],
];

const curriculumBySlug =
  new Map<
    string,
    ScienceStrandCurriculum
  >(curriculumEntries);

function normalize(
  value: string
): string {
  return value
    .toLocaleLowerCase('en')
    .replace(/\s+/g, ' ')
    .trim();
}

function validateCurriculum(
  curriculum:
    ScienceStrandCurriculum
): void {
  const {
    metadata,
    grades,
  } = curriculum;

  if (
    metadata.subject !==
      'Chemistry' ||
    metadata.subjectSlug !==
      'chemistry'
  ) {
    throw new Error(
      `${metadata.strand}: invalid Chemistry subject metadata.`
    );
  }

  if (
    metadata.publicStatus !==
    'approved'
  ) {
    throw new Error(
      `${metadata.strand} is not approved for public use.`
    );
  }

  if (
    grades.length !==
    gradeOrder.length
  ) {
    throw new Error(
      `${metadata.strand} must contain exactly 12 grade sections.`
    );
  }

  let mainTopicCount = 0;
  let subtopicCount = 0;

  gradeOrder.forEach((grade) => {
    const gradeData =
      grades.find(
        (item) =>
          item.grade === grade
      );

    if (!gradeData) {
      throw new Error(
        `${metadata.strand} is missing ${grade}.`
      );
    }

    if (
      gradeData.mainTopicCount !==
      gradeData.topics.length
    ) {
      throw new Error(
        `${metadata.strand}: invalid Main Topic count in ${grade}.`
      );
    }

    const calculatedSubtopics =
      gradeData.topics.reduce(
        (total, topic) =>
          total +
          topic.subtopics.length,
        0
      );

    if (
      gradeData.subtopicCount !==
      calculatedSubtopics
    ) {
      throw new Error(
        `${metadata.strand}: invalid Subtopic count in ${grade}.`
      );
    }

    const exactRecords =
      new Set<string>();

    gradeData.topics.forEach(
      (topic) => {
        topic.subtopics.forEach(
          (subtopic) => {
            const key = [
              grade,
              normalize(
                topic.title
              ),
              normalize(
                subtopic.title
              ),
            ].join('::');

            if (
              exactRecords.has(
                key
              )
            ) {
              throw new Error(
                `Duplicate Chemistry record: ${metadata.strand} ${key}`
              );
            }

            exactRecords.add(
              key
            );
          }
        );
      }
    );

    mainTopicCount +=
      gradeData.mainTopicCount;

    subtopicCount +=
      gradeData.subtopicCount;
  });

  if (
    mainTopicCount !==
    metadata.mainTopicCount
  ) {
    throw new Error(
      `${metadata.strand}: total Main Topic count is invalid.`
    );
  }

  if (
    subtopicCount !==
    metadata.subtopicCount
  ) {
    throw new Error(
      `${metadata.strand}: total Subtopic count is invalid.`
    );
  }
}

approvedChemistryStrands.forEach(
  (strand) => {
    const curriculum =
      curriculumBySlug.get(
        strand.slug
      );

    if (!curriculum) {
      throw new Error(
        `Approved Chemistry strand "${strand.slug}" has no curriculum JSON.`
      );
    }

    if (
      curriculum.metadata
        .strandSlug !==
      strand.slug
    ) {
      throw new Error(
        `Chemistry strand slug mismatch: ${strand.slug}`
      );
    }

    validateCurriculum(
      curriculum
    );
  }
);

export function getPublicChemistryOverview(
  locale: SiteLocale
): ScienceSubjectOverview {
  const summaries =
    chemistryStrands.map(
      (strand) => {
        const curriculum =
          curriculumBySlug.get(
            strand.slug
          );

        if (!curriculum) {
          throw new Error(
            `Chemistry curriculum is missing for ${strand.slug}.`
          );
        }

        return {
          subjectKey:
            'chemistry' as const,
          slug:
            strand.slug,
          title:
            strand.title[locale],
          description:
            strand.description[
              locale
            ],
          iconKey:
            strand.iconKey,
          status:
            strand.status,
          gradeLevels:
            curriculum.metadata
              .gradeLevels,
          mainTopicCount:
            curriculum.metadata
              .mainTopicCount,
          subtopicCount:
            curriculum.metadata
              .subtopicCount,
        };
      }
    );

  const gradeLevels = Array.from(
    new Set(
      summaries.flatMap(
        (strand) =>
          strand.gradeLevels
      )
    )
  ).sort(
    (first, second) =>
      first - second
  );

  return {
    subjectKey:
      'chemistry',
    subjectName:
      'Chemistry',
    totals: {
      gradeLevels,
      strandCount:
        summaries.length,
      approvedStrandCount:
        approvedChemistryStrands.length,
      mainTopicCount:
        summaries.reduce(
          (total, strand) =>
            total +
            strand.mainTopicCount,
          0
        ),
      subtopicCount:
        summaries.reduce(
          (total, strand) =>
            total +
            strand.subtopicCount,
          0
        ),
    },
    strands:
      summaries,
  };
}

export function getPublicChemistryStrand(
  slug: string,
  locale: SiteLocale
): ScienceStrandPageData | null {
  const definition =
    approvedChemistryStrands.find(
      (strand) =>
        strand.slug === slug
    );

  if (!definition) {
    return null;
  }

  const curriculum =
    curriculumBySlug.get(
      slug
    );

  if (!curriculum) {
    return null;
  }

  const grades:
    ScienceGradePageData[] =
      gradeOrder.map(
        (grade) => {
          const gradeData =
            curriculum.grades.find(
              (item) =>
                item.grade ===
                grade
            );

          if (!gradeData) {
            throw new Error(
              `${curriculum.metadata.strand} is missing ${grade}.`
            );
          }

          return {
            grade,
            label:
              locale === 'ar'
                ? arabicGradeLabels[
                    grade
                  ]
                : `Grade ${grade.slice(1)}`,
            shortLabel:
              locale === 'ar'
                ? `الصف ${grade.slice(1)}`
                : grade,
            topics:
              gradeData.topics,
          };
        }
      );

  return {
    subjectKey:
      'chemistry',
    subjectTitle:
      locale === 'ar'
        ? 'الكيمياء'
        : 'Chemistry',
    slug:
      definition.slug,
    title:
      definition.title[locale],
    description:
      definition.description[
        locale
      ],
    iconKey:
      definition.iconKey,
    gradeLevels:
      curriculum.metadata
        .gradeLevels,
    grades,
  };
}

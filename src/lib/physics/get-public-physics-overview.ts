import 'server-only';

import dynamicsForcesJson from '@/content/subjects/physics/data/dynamics-forces.json';
import electricityCircuitsJson from '@/content/subjects/physics/data/electricity-circuits.json';
import electrostaticsElectromagnetismJson from '@/content/subjects/physics/data/electrostatics-electromagnetism.json';
import integratedPhysicsJson from '@/content/subjects/physics/data/integrated-physics.json';
import kinematicsJson from '@/content/subjects/physics/data/kinematics.json';
import measurementVectorsModelingJson from '@/content/subjects/physics/data/measurement-vectors-modeling.json';
import modernPhysicsJson from '@/content/subjects/physics/data/modern-physics.json';
import momentumCollisionsJson from '@/content/subjects/physics/data/momentum-collisions.json';
import opticsJson from '@/content/subjects/physics/data/optics.json';
import oscillationsJson from '@/content/subjects/physics/data/oscillations.json';
import thermalPhysicsJson from '@/content/subjects/physics/data/thermal-physics.json';
import wavesSoundJson from '@/content/subjects/physics/data/waves-sound.json';
import workEnergyPowerJson from '@/content/subjects/physics/data/work-energy-power.json';

import {
  approvedPhysicsStrands,
  physicsStrands,
} from '@/content/subjects/physics/physics-strands';
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
    'dynamics-forces',
    dynamicsForcesJson as ScienceStrandCurriculum,
  ],
  [
    'electricity-circuits',
    electricityCircuitsJson as ScienceStrandCurriculum,
  ],
  [
    'electrostatics-electromagnetism',
    electrostaticsElectromagnetismJson as ScienceStrandCurriculum,
  ],
  [
    'integrated-physics',
    integratedPhysicsJson as ScienceStrandCurriculum,
  ],
  [
    'kinematics',
    kinematicsJson as ScienceStrandCurriculum,
  ],
  [
    'measurement-vectors-modeling',
    measurementVectorsModelingJson as ScienceStrandCurriculum,
  ],
  [
    'modern-physics',
    modernPhysicsJson as ScienceStrandCurriculum,
  ],
  [
    'momentum-collisions',
    momentumCollisionsJson as ScienceStrandCurriculum,
  ],
  [
    'optics',
    opticsJson as ScienceStrandCurriculum,
  ],
  [
    'oscillations',
    oscillationsJson as ScienceStrandCurriculum,
  ],
  [
    'thermal-physics',
    thermalPhysicsJson as ScienceStrandCurriculum,
  ],
  [
    'waves-sound',
    wavesSoundJson as ScienceStrandCurriculum,
  ],
  [
    'work-energy-power',
    workEnergyPowerJson as ScienceStrandCurriculum,
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
      'Physics' ||
    metadata.subjectSlug !==
      'physics'
  ) {
    throw new Error(
      `${metadata.strand}: invalid Physics subject metadata.`
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
                `Duplicate Physics record: ${metadata.strand} ${key}`
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

approvedPhysicsStrands.forEach(
  (strand) => {
    const curriculum =
      curriculumBySlug.get(
        strand.slug
      );

    if (!curriculum) {
      throw new Error(
        `Approved Physics strand "${strand.slug}" has no curriculum JSON.`
      );
    }

    if (
      curriculum.metadata
        .strandSlug !==
      strand.slug
    ) {
      throw new Error(
        `Physics strand slug mismatch: ${strand.slug}`
      );
    }

    validateCurriculum(
      curriculum
    );
  }
);

export function getPublicPhysicsOverview(
  locale: SiteLocale
): ScienceSubjectOverview {
  const summaries =
    physicsStrands.map(
      (strand) => {
        const curriculum =
          curriculumBySlug.get(
            strand.slug
          );

        if (!curriculum) {
          throw new Error(
            `Physics curriculum is missing for ${strand.slug}.`
          );
        }

        return {
          subjectKey:
            'physics' as const,
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
      'physics',
    subjectName:
      'Physics',
    totals: {
      gradeLevels,
      strandCount:
        summaries.length,
      approvedStrandCount:
        approvedPhysicsStrands.length,
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

export function getPublicPhysicsStrand(
  slug: string,
  locale: SiteLocale
): ScienceStrandPageData | null {
  const definition =
    approvedPhysicsStrands.find(
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
      'physics',
    subjectTitle:
      locale === 'ar'
        ? 'الفيزياء'
        : 'Physics',
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
    sourceNote:
      locale === 'ar'
        ? 'تظهر أسماء الموضوعات الرئيسية والفرعية بالإنجليزية كما وردت في مصدر المنهج. التكرار بين الصفوف محفوظ لأنه يمثل تدرجًا مقصودًا، بينما حُفظت سجلات Postsecondary وGrade not stated خارج صفحات الصفوف.'
        : 'Main Topic and Subtopic names are shown in English as supplied by the curriculum source. Repetition across grades is preserved as intentional progression, while Postsecondary and Grade-not-stated records are stored outside the grade pages.',
  };
}

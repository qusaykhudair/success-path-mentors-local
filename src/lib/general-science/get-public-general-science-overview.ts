import 'server-only';

import earthSpaceScienceJson from '@/content/subjects/general-science/data/earth-space-science.json';
import lifeScienceJson from '@/content/subjects/general-science/data/life-science.json';
import scientificInquiryLaboratorySkillsJson from '@/content/subjects/general-science/data/scientific-inquiry-laboratory-skills.json';
import structuresEngineeringJson from '@/content/subjects/general-science/data/structures-engineering.json';

import {
  approvedGeneralScienceStrands,
  generalScienceStrands,
} from '@/content/subjects/general-science/general-science-strands';
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
    'earth-space-science',
    earthSpaceScienceJson as ScienceStrandCurriculum,
  ],
  [
    'life-science',
    lifeScienceJson as ScienceStrandCurriculum,
  ],
  [
    'scientific-inquiry-laboratory-skills',
    scientificInquiryLaboratorySkillsJson as ScienceStrandCurriculum,
  ],
  [
    'structures-engineering',
    structuresEngineeringJson as ScienceStrandCurriculum,
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
      'General Science' ||
    metadata.subjectSlug !==
      'general-science'
  ) {
    throw new Error(
      `${metadata.strand}: invalid General Science metadata.`
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
              normalize(topic.title),
              normalize(subtopic.title),
            ].join('::');

            if (
              exactRecords.has(key)
            ) {
              throw new Error(
                `Duplicate General Science record: ${metadata.strand} ${key}`
              );
            }

            exactRecords.add(key);
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

approvedGeneralScienceStrands.forEach(
  (strand) => {
    const curriculum =
      curriculumBySlug.get(
        strand.slug
      );

    if (!curriculum) {
      throw new Error(
        `Approved General Science strand "${strand.slug}" has no curriculum JSON.`
      );
    }

    if (
      curriculum.metadata
        .strandSlug !==
      strand.slug
    ) {
      throw new Error(
        `General Science strand slug mismatch: ${strand.slug}`
      );
    }

    validateCurriculum(curriculum);
  }
);

export function getPublicGeneralScienceOverview(
  locale: SiteLocale
): ScienceSubjectOverview {
  const summaries =
    generalScienceStrands.map(
      (strand) => {
        const curriculum =
          curriculumBySlug.get(
            strand.slug
          );

        if (!curriculum) {
          throw new Error(
            `General Science curriculum is missing for ${strand.slug}.`
          );
        }

        return {
          subjectKey:
            'general-science' as const,
          slug:
            strand.slug,
          title:
            strand.title[locale],
          description:
            strand.description[locale],
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
      'general-science',
    subjectName:
      'General Science',
    totals: {
      gradeLevels,
      strandCount:
        summaries.length,
      approvedStrandCount:
        approvedGeneralScienceStrands.length,
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

export function getPublicGeneralScienceStrand(
  slug: string,
  locale: SiteLocale
): ScienceStrandPageData | null {
  const definition =
    approvedGeneralScienceStrands.find(
      (strand) =>
        strand.slug === slug
    );

  if (!definition) {
    return null;
  }

  const curriculum =
    curriculumBySlug.get(slug);

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
                item.grade === grade
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
      'general-science',
    subjectTitle:
      locale === 'ar'
        ? 'العلوم العامة'
        : 'General Science',
    slug:
      definition.slug,
    title:
      definition.title[locale],
    description:
      definition.description[locale],
    iconKey:
      definition.iconKey,
    gradeLevels:
      curriculum.metadata
        .gradeLevels,
    grades,
    sourceNote:
      locale === 'ar'
        ? 'تظهر أسماء الموضوعات الرئيسية والفرعية بالإنجليزية كما وردت في مصدر المنهج. التكرار بين الصفوف محفوظ كتدرج مقصود، بينما حُفظت سجلات Postsecondary وGrade not stated خارج صفحات الصفوف، وحُذف تكرار حرفي واحد من طبقة العرض.'
        : 'Main Topic and Subtopic names are shown in English as supplied by the curriculum source. Repetition across grades is preserved as intentional progression, while Postsecondary and Grade-not-stated records are stored outside the grade pages. One exact duplicate was removed from the public display layer.',
  };
}

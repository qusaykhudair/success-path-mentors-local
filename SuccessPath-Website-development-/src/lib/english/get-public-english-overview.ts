import 'server-only';

import academicSkillsJson from '@/content/subjects/english/data/academic-skills-assignments.json';
import assessmentPreparationJson from '@/content/subjects/english/data/assessment-test-preparation.json';
import crossCurricularJson from '@/content/subjects/english/data/cross-curricular-academic-support.json';
import foundationalReadingJson from '@/content/subjects/english/data/foundational-reading.json';
import grammarLanguageJson from '@/content/subjects/english/data/grammar-language-conventions.json';
import literatureAnalysisJson from '@/content/subjects/english/data/literature-literary-analysis.json';
import readingComprehensionJson from '@/content/subjects/english/data/reading-comprehension.json';
import readingFluencyJson from '@/content/subjects/english/data/reading-fluency.json';
import speakingListeningJson from '@/content/subjects/english/data/speaking-listening.json';
import vocabularyWordStudyJson from '@/content/subjects/english/data/vocabulary-word-study.json';
import writingJson from '@/content/subjects/english/data/writing.json';
import {
  approvedEnglishStrands,
  englishStrands,
} from '@/content/subjects/english/english-strands';
import type {
  SiteLocale,
} from '@/config/site';
import type {
  EnglishGrade,
  EnglishStrandCurriculum,
} from '@/types/english-curriculum';
import type {
  EnglishCurriculumOverview,
  EnglishGradePageData,
  EnglishStrandPageData,
} from '@/types/english-overview';

const gradeOrder: EnglishGrade[] = [
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
  Record<EnglishGrade, string> = {
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
  [string, EnglishStrandCurriculum]
> = [
  [
    'foundational-reading',
    foundationalReadingJson as EnglishStrandCurriculum,
  ],
  [
    'grammar-language-conventions',
    grammarLanguageJson as EnglishStrandCurriculum,
  ],
  [
    'academic-skills-assignments',
    academicSkillsJson as EnglishStrandCurriculum,
  ],
  [
    'assessment-test-preparation',
    assessmentPreparationJson as EnglishStrandCurriculum,
  ],
  [
    'cross-curricular-academic-support',
    crossCurricularJson as EnglishStrandCurriculum,
  ],
  [
    'literature-literary-analysis',
    literatureAnalysisJson as EnglishStrandCurriculum,
  ],
  [
    'reading-comprehension',
    readingComprehensionJson as EnglishStrandCurriculum,
  ],
  [
    'reading-fluency',
    readingFluencyJson as EnglishStrandCurriculum,
  ],
  [
    'speaking-listening',
    speakingListeningJson as EnglishStrandCurriculum,
  ],
  [
    'vocabulary-word-study',
    vocabularyWordStudyJson as EnglishStrandCurriculum,
  ],
  [
    'writing',
    writingJson as EnglishStrandCurriculum,
  ],
];

const curriculumBySlug =
  new Map<
    string,
    EnglishStrandCurriculum
  >(curriculumEntries);

function normalize(value: string): string {
  return value
    .toLocaleLowerCase('en')
    .replace(/\s+/g, ' ')
    .trim();
}

function validateCurriculum(
  curriculum:
    EnglishStrandCurriculum
): void {
  const {
    metadata,
    grades,
  } = curriculum;

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
        [
          `${metadata.strand}:`,
          `Main-topic count mismatch in ${grade}.`,
        ].join(' ')
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
        [
          `${metadata.strand}:`,
          `Subtopic count mismatch in ${grade}.`,
        ].join(' ')
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
              exactRecords.has(key)
            ) {
              throw new Error(
                [
                  'Duplicate English record:',
                  metadata.strand,
                  key,
                ].join(' ')
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

approvedEnglishStrands.forEach(
  (strand) => {
    const curriculum =
      curriculumBySlug.get(
        strand.slug
      );

    if (!curriculum) {
      throw new Error(
        [
          'Approved English strand',
          `"${strand.slug}"`,
          'does not have a curriculum JSON file.',
        ].join(' ')
      );
    }

    if (
      curriculum.metadata
        .strandSlug !==
      strand.slug
    ) {
      throw new Error(
        [
          'English strand slug mismatch:',
          strand.slug,
          curriculum.metadata
            .strandSlug,
        ].join(' ')
      );
    }

    validateCurriculum(
      curriculum
    );
  }
);

export function getPublicEnglishOverview(
  locale: SiteLocale
): EnglishCurriculumOverview {
  return {
    totals: {
      gradeMin: 1,
      gradeMax: 12,
      strandCount:
        englishStrands.length,
      approvedStrandCount:
        approvedEnglishStrands.length,
    },
    strands:
      englishStrands.map(
        (strand) => {
          const curriculum =
            curriculumBySlug.get(
              strand.slug
            );

          return {
            slug: strand.slug,
            title:
              strand.title[locale],
            description:
              strand.description[locale],
            iconKey:
              strand.iconKey,
            status:
              strand.status,
            gradeRange:
              strand.gradeRange,
            ...(curriculum
              ? {
                  mainTopicCount:
                    curriculum
                      .metadata
                      .mainTopicCount,
                  subtopicCount:
                    curriculum
                      .metadata
                      .subtopicCount,
                }
              : {}),
          };
        }
      ),
  };
}

export function getPublicEnglishStrand(
  slug: string,
  locale: SiteLocale
): EnglishStrandPageData | null {
  const definition =
    approvedEnglishStrands.find(
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
    EnglishGradePageData[] =
      gradeOrder.map((grade) => {
        const gradeData =
          curriculum.grades.find(
            (item) =>
              item.grade ===
              grade
          );

        if (!gradeData) {
          throw new Error(
            [
              curriculum.metadata
                .strand,
              `is missing ${grade}.`,
            ].join(' ')
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
      });

  return {
    slug,
    title:
      definition.title[locale],
    description:
      definition.description[locale],
    iconKey:
      definition.iconKey,
    gradeRange:
      definition.gradeRange,
    grades,
  };
}

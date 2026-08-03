import 'server-only';

import foundationalReadingJson from '@/content/subjects/english/data/foundational-reading.json';
import {
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

const foundationalReading =
  foundationalReadingJson as EnglishStrandCurriculum;

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

function normalize(value: string): string {
  return value
    .toLocaleLowerCase('en')
    .replace(/\s+/g, ' ')
    .trim();
}

function validateFoundationalReading(): void {
  if (
    foundationalReading.metadata
      .publicStatus !== 'approved'
  ) {
    throw new Error(
      'Foundational Reading is not approved for public use.'
    );
  }

  if (
    foundationalReading.grades.length !==
    gradeOrder.length
  ) {
    throw new Error(
      'Foundational Reading must contain exactly 12 grade sections.'
    );
  }

  let mainTopicCount = 0;
  let subtopicCount = 0;

  gradeOrder.forEach((grade) => {
    const gradeData =
      foundationalReading.grades.find(
        (item) => item.grade === grade
      );

    if (!gradeData) {
      throw new Error(
        `Foundational Reading is missing ${grade}.`
      );
    }

    if (
      gradeData.mainTopicCount !==
      gradeData.topics.length
    ) {
      throw new Error(
        `Main-topic count mismatch in ${grade}.`
      );
    }

    const calculatedSubtopics =
      gradeData.topics.reduce(
        (total, topic) =>
          total + topic.subtopics.length,
        0
      );

    if (
      gradeData.subtopicCount !==
      calculatedSubtopics
    ) {
      throw new Error(
        `Subtopic count mismatch in ${grade}.`
      );
    }

    const exactRecords = new Set<string>();

    gradeData.topics.forEach((topic) => {
      topic.subtopics.forEach((subtopic) => {
        const key = [
          grade,
          normalize(topic.title),
          normalize(subtopic.title),
        ].join('::');

        if (exactRecords.has(key)) {
          throw new Error(
            `Duplicate Foundational Reading record: ${key}`
          );
        }

        exactRecords.add(key);
      });
    });

    mainTopicCount +=
      gradeData.mainTopicCount;
    subtopicCount +=
      gradeData.subtopicCount;
  });

  if (
    mainTopicCount !==
    foundationalReading.metadata
      .mainTopicCount
  ) {
    throw new Error(
      'Foundational Reading total Main Topic count is invalid.'
    );
  }

  if (
    subtopicCount !==
    foundationalReading.metadata
      .subtopicCount
  ) {
    throw new Error(
      'Foundational Reading total Subtopic count is invalid.'
    );
  }
}

validateFoundationalReading();

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
        englishStrands.filter(
          (strand) =>
            strand.status === 'approved'
        ).length,
    },
    strands:
      englishStrands.map(
        (strand) => ({
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
          ...(strand.slug ===
          'foundational-reading'
            ? {
                mainTopicCount:
                  foundationalReading
                    .metadata
                    .mainTopicCount,
                subtopicCount:
                  foundationalReading
                    .metadata
                    .subtopicCount,
              }
            : {}),
        })
      ),
  };
}

export function getPublicEnglishStrand(
  slug: string,
  locale: SiteLocale
): EnglishStrandPageData | null {
  if (
    slug !== 'foundational-reading'
  ) {
    return null;
  }

  const definition =
    englishStrands.find(
      (strand) =>
        strand.slug === slug &&
        strand.status === 'approved'
    );

  if (!definition) {
    return null;
  }

  const grades: EnglishGradePageData[] =
    gradeOrder.map((grade) => {
      const gradeData =
        foundationalReading.grades.find(
          (item) =>
            item.grade === grade
        );

      if (!gradeData) {
        throw new Error(
          `Foundational Reading is missing ${grade}.`
        );
      }

      return {
        grade,
        label:
          locale === 'ar'
            ? arabicGradeLabels[grade]
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
    sourceNote:
      locale === 'ar'
        ? 'تُعرض أسماء الموضوعات والمهارات بالإنجليزية كما وردت في مصدر المنهج. تكرار المهارة في صفوف مختلفة يمثل تدرجًا مقصودًا في مستوى الصعوبة والتطبيق.'
        : 'Topic and skill names are shown in English as supplied by the curriculum source. Repetition across different grades represents intentional progression in difficulty and application.',
  };
}

import 'server-only';

import curriculumJson from '@/content/subjects/math/data/math-curriculum-full.json';
import reviewJson from '@/content/subjects/math/data/strand-pathway-review.json';
import {
  publicMathPathways,
} from '@/content/subjects/math/math-pathways';
import type {
  LocalizedText,
  MathCurriculumSource,
  MathGrade,
  MathLeafSourceStrategy,
  MathSourceStrategy,
  PublicMathPathway,
  StrandPathwayReviewSource,
} from '@/types/math-curriculum';
import type {
  MathCurriculumOverview,
  MathGradePathwaySummary,
  MathGradeSummary,
  MathGradeTopicGroup,
  MathPathwayStageSummary,
  MathTopicSummary,
  PublicMathPathwaySummary,
} from '@/types/math-overview';

interface TopicRecord {
  key: string;
  strand: string;
  grade: MathGrade;
  title: string;
  sourcePathway: string;
  subtopics: string[];
  publishable: boolean;
}

const curriculum =
  curriculumJson as MathCurriculumSource;

const review =
  reviewJson as StrandPathwayReviewSource;

const gradeOrder: MathGrade[] = [
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

const gradeBands: Array<{
  id:
    | 'grades-2-3'
    | 'grades-4-5'
    | 'grades-6-8'
    | 'grades-9-10'
    | 'grades-11-12';
  grades: MathGrade[];
  label: LocalizedText;
}> = [
  {
    id: 'grades-2-3',
    grades: ['G2', 'G3'],
    label: {
      en: 'Grades 2–3',
      ar: 'الصفان 2–3',
    },
  },
  {
    id: 'grades-4-5',
    grades: ['G4', 'G5'],
    label: {
      en: 'Grades 4–5',
      ar: 'الصفان 4–5',
    },
  },
  {
    id: 'grades-6-8',
    grades: ['G6', 'G7', 'G8'],
    label: {
      en: 'Grades 6–8',
      ar: 'الصفوف 6–8',
    },
  },
  {
    id: 'grades-9-10',
    grades: ['G9', 'G10'],
    label: {
      en: 'Grades 9–10',
      ar: 'الصفان 9–10',
    },
  },
  {
    id: 'grades-11-12',
    grades: ['G11', 'G12'],
    label: {
      en: 'Grades 11–12',
      ar: 'الصفان 11–12',
    },
  },
];

const arabicGradeNames:
  Record<MathGrade, string> = {
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

const invalidSubtopics =
  new Set(['Balanc', '\\']);

/**
 * These source cells were identified in the earlier
 * Excel/JSON audit as requiring a manual curriculum
 * review because the topic title and subtopic list do
 * not describe the same subject area.
 *
 * The source JSON remains unchanged. These records are
 * only withheld from the public page until reviewed.
 */
const reviewRequiredTopicKeys =
  new Set([
    'E::G2',
    'E::G3',
    'E::G5',
    'E::G6',
    'E::G9',
    'E::G10',
    'E::G12',
    'HH::G5',
  ]);

function isMathGrade(
  value: string
): value is MathGrade {
  return gradeOrder.includes(
    value as MathGrade
  );
}

function localize(
  value: LocalizedText,
  locale: 'en' | 'ar'
): string {
  return value[locale];
}

function normalizeSearchText(
  value: string
): string {
  return value
    .toLocaleLowerCase('en')
    .replace(/\s+/g, ' ')
    .trim();
}

function getGradeLabel(
  grade: MathGrade,
  locale: 'en' | 'ar'
): string {
  return locale === 'ar'
    ? arabicGradeNames[grade]
    : `Grade ${grade.slice(1)}`;
}

function getGradeShortLabel(
  grade: MathGrade,
  locale: 'en' | 'ar'
): string {
  return locale === 'ar'
    ? `الصف ${grade.slice(1)}`
    : grade;
}

function buildTopicRecords(): TopicRecord[] {
  const pathwayByStrand =
    new Map(
      review.strands.map(
        (item) => [
          item.strand,
          item.proposedPathway,
        ]
      )
    );

  const records: TopicRecord[] = [];

  Object.entries(curriculum).forEach(
    ([strand, grades]) => {
      const sourcePathway =
        pathwayByStrand.get(strand);

      if (!sourcePathway) {
        return;
      }

      Object.entries(grades).forEach(
        ([gradeKey, sourceTopic]) => {
          if (
            !isMathGrade(gradeKey) ||
            !sourceTopic?.topic
          ) {
            return;
          }

          const subtopics =
            sourceTopic.subtopics.filter(
              (subtopic) =>
                Boolean(
                  subtopic.trim()
                ) &&
                !invalidSubtopics.has(
                  subtopic
                )
            );

          records.push({
            key: [
              strand,
              gradeKey,
              sourceTopic.topic,
            ].join('::'),
            strand,
            grade: gradeKey,
            title: sourceTopic.topic,
            sourcePathway,
            subtopics,
            publishable:
              !reviewRequiredTopicKeys.has(
                `${strand}::${gradeKey}`
              ),
          });
        }
      );
    }
  );

  return records;
}

function filterByGrades(
  records: TopicRecord[],
  grades?: MathGrade[]
): TopicRecord[] {
  if (!grades?.length) {
    return records;
  }

  const accepted = new Set(grades);

  return records.filter(
    (record) =>
      accepted.has(record.grade)
  );
}

function applyLeafStrategy(
  strategy: MathLeafSourceStrategy,
  records: TopicRecord[]
): TopicRecord[] {
  if (
    strategy.type ===
    'source-pathways'
  ) {
    const accepted =
      new Set(strategy.sourceNames);

    return filterByGrades(
      records.filter(
        (record) =>
          accepted.has(
            record.sourcePathway
          )
      ),
      strategy.grades
    );
  }

  const includePatterns =
    strategy.includePatterns.map(
      normalizeSearchText
    );

  const excludePatterns =
    (
      strategy.excludePatterns ?? []
    ).map(normalizeSearchText);

  return filterByGrades(
    records.filter((record) => {
      const title =
        normalizeSearchText(
          record.title
        );

      const included =
        includePatterns.some(
          (pattern) =>
            title.includes(pattern)
        );

      const excluded =
        excludePatterns.some(
          (pattern) =>
            title.includes(pattern)
        );

      return included && !excluded;
    }),
    strategy.grades
  );
}

function applyStrategy(
  strategy: MathSourceStrategy,
  records: TopicRecord[]
): TopicRecord[] {
  if (
    strategy.type !== 'composite'
  ) {
    return applyLeafStrategy(
      strategy,
      records
    );
  }

  return deduplicateRecords(
    strategy.strategies.flatMap(
      (child) =>
        applyLeafStrategy(
          child,
          records
        )
    )
  );
}

function deduplicateRecords(
  records: TopicRecord[]
): TopicRecord[] {
  return [
    ...new Map(
      records.map((record) => [
        record.key,
        record,
      ])
    ).values(),
  ];
}

function buildTopicSummaries(
  records: TopicRecord[]
): MathTopicSummary[] {
  const grouped =
    new Map<
      string,
      TopicRecord[]
    >();

  records
    .filter(
      (record) =>
        record.publishable
    )
    .forEach((record) => {
      const groupKey = [
        record.grade,
        normalizeSearchText(
          record.title
        ),
      ].join('::');

      const current =
        grouped.get(groupKey) ?? [];

      current.push(record);
      grouped.set(
        groupKey,
        current
      );
    });

  return [
    ...grouped.entries(),
  ]
    .map(
      ([groupKey, group]) => {
        const first = group[0];

        if (!first) {
          return null;
        }

        const hasSubtopics =
          group.some(
            (record) =>
              record.subtopics.length > 0
          );

        return {
          id: groupKey,
          title: first.title,
          status: hasSubtopics
            ? 'available'
            : 'topic-only',
        } satisfies MathTopicSummary;
      }
    )
    .filter(
      (
        topic
      ): topic is MathTopicSummary =>
        Boolean(topic)
    )
    .sort((left, right) =>
      left.title.localeCompare(
        right.title,
        'en'
      )
    );
}

function buildGradeTopicGroup({
  grade,
  records,
  locale,
}: {
  grade: MathGrade;
  records: TopicRecord[];
  locale: 'en' | 'ar';
}): MathGradeTopicGroup | null {
  const topics =
    buildTopicSummaries(
      records.filter(
        (record) =>
          record.grade === grade
      )
    );

  if (!topics.length) {
    return null;
  }

  return {
    grade,
    label:
      getGradeLabel(
        grade,
        locale
      ),
    shortLabel:
      getGradeShortLabel(
        grade,
        locale
      ),
    topicCount:
      topics.length,
    topics,
  };
}

function buildStages({
  records,
  locale,
}: {
  records: TopicRecord[];
  locale: 'en' | 'ar';
}): MathPathwayStageSummary[] {
  return gradeBands.flatMap(
    (band) => {
      const grades =
        band.grades.flatMap(
          (grade) => {
            const group =
              buildGradeTopicGroup({
                grade,
                records,
                locale,
              });

            return group
              ? [group]
              : [];
          }
        );

      if (!grades.length) {
        return [];
      }

      return [
        {
          id: band.id,
          label: localize(
            band.label,
            locale
          ),
          grades,
          topicCount:
            grades.reduce(
              (total, grade) =>
                total +
                grade.topicCount,
              0
            ),
        },
      ];
    }
  );
}

function buildPathwaySummary({
  pathway,
  records,
  locale,
}: {
  pathway: PublicMathPathway;
  records: TopicRecord[];
  locale: 'en' | 'ar';
}): PublicMathPathwaySummary {
  const matched =
    deduplicateRecords(
      applyStrategy(
        pathway.sourceStrategy,
        records
      )
    ).filter(
      (record) =>
        record.publishable
    );

  const stages = buildStages({
    records: matched,
    locale,
  });

  const gradeNumbers =
    stages.flatMap(
      (stage) =>
        stage.grades.map(
          (grade) =>
            Number(
              grade.grade.slice(1)
            )
        )
    );

  return {
    slug: pathway.slug,
    title: localize(
      pathway.title,
      locale
    ),
    shortTitle: localize(
      pathway.shortTitle,
      locale
    ),
    description: localize(
      pathway.description,
      locale
    ),
    iconKey: pathway.iconKey,
    gradeRange: {
      min: gradeNumbers.length
        ? Math.min(...gradeNumbers)
        : 2,
      max: gradeNumbers.length
        ? Math.max(...gradeNumbers)
        : 12,
    },
    topicCount:
      stages.reduce(
        (total, stage) =>
          total +
          stage.topicCount,
        0
      ),
    stageCount: stages.length,
    stages,
  };
}

function buildGradeSummary({
  grade,
  records,
  pathways,
  locale,
}: {
  grade: MathGrade;
  records: TopicRecord[];
  pathways:
    PublicMathPathwaySummary[];
  locale: 'en' | 'ar';
}): MathGradeSummary {
  const publicGradeRecords =
    records.filter(
      (record) =>
        record.grade === grade &&
        record.publishable
    );

  const allTopics =
    buildTopicSummaries(
      publicGradeRecords
    );

  const pathwaySummaries:
    MathGradePathwaySummary[] =
      publicMathPathways.flatMap(
        (pathway) => {
          const pathwayRecords =
            deduplicateRecords(
              applyStrategy(
                pathway.sourceStrategy,
                records
              ).filter(
                (record) =>
                  record.grade ===
                    grade &&
                  record.publishable
              )
            );

          const topics =
            buildTopicSummaries(
              pathwayRecords
            );

          if (!topics.length) {
            return [];
          }

          const publicSummary =
            pathways.find(
              (summary) =>
                summary.slug ===
                pathway.slug
            );

          if (!publicSummary) {
            return [];
          }

          return [
            {
              slug: pathway.slug,
              title:
                publicSummary.shortTitle,
              iconKey:
                pathway.iconKey,
              topicCount:
                topics.length,
              topics,
            },
          ];
        }
      );

  return {
    grade,
    label: getGradeLabel(
      grade,
      locale
    ),
    shortLabel:
      getGradeShortLabel(
        grade,
        locale
      ),
    topicCount:
      allTopics.length,
    pathwayCount:
      pathwaySummaries.length,
    pathways:
      pathwaySummaries.sort(
        (left, right) =>
          right.topicCount -
          left.topicCount
      ),
  };
}

export function getPublicMathOverview(
  locale: 'en' | 'ar'
): MathCurriculumOverview {
  const records = buildTopicRecords();

  const pathways =
    publicMathPathways.map(
      (pathway) =>
        buildPathwaySummary({
          pathway,
          records,
          locale,
        })
    );

  const grades = gradeOrder.map(
    (grade) =>
      buildGradeSummary({
        grade,
        records,
        pathways,
        locale,
      })
  );

  return {
    totals: {
      gradeMin: 2,
      gradeMax: 12,
      strandCount:
        review.statistics.strandCount,
      topicCount:
        review.statistics
          .populatedTopicCells,
      publicPathwayCount:
        pathways.length,
    },
    pathways,
    grades,
  };
}

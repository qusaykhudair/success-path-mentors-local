import 'server-only';

import curriculumJson from '@/content/subjects/math/data/math-curriculum-full.json';
import distributionJson from '@/content/subjects/math/data/math-topic-distribution.json';
import {
  publicMathPathways,
} from '@/content/subjects/math/math-pathways';
import type {
  LocalizedText,
  MathCurriculumSource,
  MathGrade,
  MathPathwaySlug,
  MathTopicDistributionSource,
  PublicMathPathway,
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

interface SourceTopicRecord {
  key: string;
  sourceOrder: number;
  strand: string;
  grade: MathGrade;
  sourceTitle: string;
  displayTitle: string;
  pathwaySlug: MathPathwaySlug;
  subtopics: string[];
}

interface PageTopicRecord {
  id: string;
  sourceOrder: number;
  grade: MathGrade;
  title: string;
  sourceKeys: string[];
  subtopics: string[];
}

const curriculum =
  curriculumJson as MathCurriculumSource;

const distribution =
  distributionJson as MathTopicDistributionSource;

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

function normalizeTopicTitle(
  value: string
): string {
  return value
    .toLocaleLowerCase('en')
    .replace(/\s+/g, ' ')
    .trim();
}

function localize(
  value: LocalizedText,
  locale: 'en' | 'ar'
): string {
  return value[locale];
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

function buildSourceTopicRecords():
  SourceTopicRecord[] {
  const pathwaySlugs =
    new Set(
      publicMathPathways.map(
        (pathway) =>
          pathway.slug
      )
    );

  const records:
    SourceTopicRecord[] = [];

  Object.entries(
    curriculum
  ).forEach(
    (
      [strand, gradeMap],
      strandIndex
    ) => {
      gradeOrder.forEach(
        (grade, gradeIndex) => {
          const sourceTopic =
            gradeMap[grade];

          if (!sourceTopic) {
            return;
          }

          const key =
            `${strand}::${grade}`;

          const assignment =
            distribution.records[key];

          if (!assignment) {
            throw new Error(
              [
                'Math topic distribution is incomplete.',
                `Missing assignment for ${key}.`,
              ].join(' ')
            );
          }

          if (
            assignment.sourceTopic !==
            sourceTopic.topic
          ) {
            throw new Error(
              [
                'Math topic distribution title mismatch.',
                `${key}.`,
                `JSON: "${sourceTopic.topic}".`,
                `Distribution: "${assignment.sourceTopic}".`,
              ].join(' ')
            );
          }

          if (
            assignment.subtopicCount !==
            sourceTopic.subtopics.length
          ) {
            throw new Error(
              [
                'Math topic distribution count mismatch.',
                `${key}.`,
                `JSON: ${sourceTopic.subtopics.length}.`,
                `Distribution: ${assignment.subtopicCount}.`,
              ].join(' ')
            );
          }

          if (
            !pathwaySlugs.has(
              assignment.pathwaySlug
            )
          ) {
            throw new Error(
              [
                'Math topic distribution pathway mismatch.',
                `${key} uses "${assignment.pathwaySlug}".`,
              ].join(' ')
            );
          }

          records.push({
            key,
            sourceOrder:
              strandIndex *
                gradeOrder.length +
              gradeIndex,
            strand,
            grade,
            sourceTitle:
              sourceTopic.topic,
            displayTitle:
              assignment.displayTitle,
            pathwaySlug:
              assignment.pathwaySlug,
            subtopics:
              sourceTopic.subtopics,
          });
        }
      );
    }
  );

  const sourceKeys =
    new Set(
      records.map(
        (record) =>
          record.key
      )
    );

  const extraDistributionKeys =
    Object.keys(
      distribution.records
    ).filter(
      (key) =>
        !sourceKeys.has(key)
    );

  if (
    extraDistributionKeys.length > 0
  ) {
    throw new Error(
      [
        'Math topic distribution contains extra records.',
        extraDistributionKeys
          .slice(0, 5)
          .join(', '),
      ].join(' ')
    );
  }

  if (
    records.length !==
    distribution.metadata
      .sourceRecordCount
  ) {
    throw new Error(
      [
        'Math topic source-count mismatch.',
        `Expected ${distribution.metadata.sourceRecordCount}.`,
        `Received ${records.length}.`,
      ].join(' ')
    );
  }

  const subtopicCount =
    records.reduce(
      (total, record) =>
        total +
        record.subtopics.length,
      0
    );

  if (
    subtopicCount !==
    distribution.metadata
      .sourceSubtopicCount
  ) {
    throw new Error(
      [
        'Math subtopic source-count mismatch.',
        `Expected ${distribution.metadata.sourceSubtopicCount}.`,
        `Received ${subtopicCount}.`,
      ].join(' ')
    );
  }

  return records;
}

function deduplicatePageRecords({
  pathwaySlug,
  records,
}: {
  pathwaySlug: MathPathwaySlug;
  records: SourceTopicRecord[];
}): PageTopicRecord[] {
  const groups =
    new Map<
      string,
      SourceTopicRecord[]
    >();

  records
    .filter(
      (record) =>
        record.pathwaySlug ===
        pathwaySlug
    )
    .forEach(
      (record) => {
        const groupKey = [
          record.grade,
          normalizeTopicTitle(
            record.displayTitle
          ),
        ].join('::');

        const existing =
          groups.get(groupKey) ?? [];

        existing.push(record);
        groups.set(
          groupKey,
          existing
        );
      }
    );

  return [
    ...groups.entries(),
  ].map(
    ([groupKey, group]) => {
      const sortedGroup =
        [...group].sort(
          (left, right) =>
            left.sourceOrder -
            right.sourceOrder
        );

      const first =
        sortedGroup.at(0);

      if (!first) {
        throw new Error(
          [
            'Math pathway deduplication failed.',
            `The group "${groupKey}" contains no source records.`,
          ].join(' ')
        );
      }

      const uniqueSubtopics =
        new Map<
          string,
          string
        >();

      sortedGroup.forEach(
        (record) => {
          record.subtopics.forEach(
            (subtopic) => {
              const key =
                normalizeTopicTitle(
                  subtopic
                );

              if (
                !uniqueSubtopics.has(
                  key
                )
              ) {
                uniqueSubtopics.set(
                  key,
                  subtopic
                );
              }
            }
          );
        }
      );

      return {
        id:
          `${pathwaySlug}::${groupKey}`,
        sourceOrder:
          first.sourceOrder,
        grade:
          first.grade,
        title:
          first.displayTitle,
        sourceKeys:
          sortedGroup.map(
            (record) =>
              record.key
          ),
        subtopics: [
          ...uniqueSubtopics.values(),
        ],
      };
    }
  ).sort(
    (left, right) =>
      left.sourceOrder -
      right.sourceOrder
  );
}

function buildTopicSummaries(
  records:
    PageTopicRecord[]
): MathTopicSummary[] {
  return records.map(
    (record) => ({
      id:
        record.id,
      title:
        record.title,
      status:
        record.subtopics.length > 0
          ? 'available'
          : 'topic-only',
    })
  );
}

function buildGradeTopicGroup({
  grade,
  records,
  locale,
}: {
  grade: MathGrade;
  records:
    PageTopicRecord[];
  locale: 'en' | 'ar';
}): MathGradeTopicGroup {
  const topics =
    buildTopicSummaries(
      records.filter(
        (record) =>
          record.grade === grade
      )
    );

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

function buildCompleteStages({
  records,
  locale,
}: {
  records:
    PageTopicRecord[];
  locale: 'en' | 'ar';
}): MathPathwayStageSummary[] {
  return gradeBands.map(
    (band) => {
      const grades =
        band.grades.map(
          (grade) =>
            buildGradeTopicGroup({
              grade,
              records,
              locale,
            })
        );

      return {
        id:
          band.id,
        label:
          localize(
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
      };
    }
  );
}

function buildPathwaySummary({
  pathway,
  pageRecords,
  locale,
}: {
  pathway:
    PublicMathPathway;
  pageRecords:
    PageTopicRecord[];
  locale: 'en' | 'ar';
}): PublicMathPathwaySummary {
  const stages =
    buildCompleteStages({
      records:
        pageRecords,
      locale,
    });

  return {
    slug:
      pathway.slug,
    title:
      localize(
        pathway.title,
        locale
      ),
    shortTitle:
      localize(
        pathway.shortTitle,
        locale
      ),
    description:
      localize(
        pathway.description,
        locale
      ),
    iconKey:
      pathway.iconKey,
    gradeRange: {
      min: 2,
      max: 12,
    },
    topicCount:
      pageRecords.length,
    stageCount:
      stages.length,
    stages,
  };
}

function buildGradeSummary({
  grade,
  recordsByPathway,
  pathwaySummaries,
  locale,
}: {
  grade: MathGrade;
  recordsByPathway:
    Map<
      MathPathwaySlug,
      PageTopicRecord[]
    >;
  pathwaySummaries:
    PublicMathPathwaySummary[];
  locale: 'en' | 'ar';
}): MathGradeSummary {
  const pathways:
    MathGradePathwaySummary[] =
      publicMathPathways.flatMap(
        (pathway) => {
          const gradeRecords =
            (
              recordsByPathway.get(
                pathway.slug
              ) ?? []
            ).filter(
              (record) =>
                record.grade === grade
            );

          if (
            gradeRecords.length === 0
          ) {
            return [];
          }

          const summary =
            pathwaySummaries.find(
              (item) =>
                item.slug ===
                pathway.slug
            );

          if (!summary) {
            return [];
          }

          return [
            {
              slug:
                pathway.slug,
              title:
                summary.shortTitle,
              iconKey:
                pathway.iconKey,
              topicCount:
                gradeRecords.length,
              topics:
                buildTopicSummaries(
                  gradeRecords
                ),
            },
          ];
        }
      );

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
      pathways.reduce(
        (total, pathway) =>
          total +
          pathway.topicCount,
        0
      ),
    pathwayCount:
      pathways.length,
    pathways,
  };
}

export function getPublicMathOverview(
  locale: 'en' | 'ar'
): MathCurriculumOverview {
  const sourceRecords =
    buildSourceTopicRecords();

  const recordsByPathway =
    new Map<
      MathPathwaySlug,
      PageTopicRecord[]
    >(
      publicMathPathways.map(
        (pathway) => [
          pathway.slug,
          deduplicatePageRecords({
            pathwaySlug:
              pathway.slug,
            records:
              sourceRecords,
          }),
        ]
      )
    );

  const pathways =
    publicMathPathways.map(
      (pathway) =>
        buildPathwaySummary({
          pathway,
          pageRecords:
            recordsByPathway.get(
              pathway.slug
            ) ?? [],
          locale,
        })
    );

  const publicTopicCount =
    [
      ...recordsByPathway.values(),
    ].reduce(
      (total, pageRecords) =>
        total +
        pageRecords.length,
      0
    );

  if (
    publicTopicCount !==
    distribution.metadata
      .publicTopicCount
  ) {
    throw new Error(
      [
        'Math public-topic count mismatch.',
        `Expected ${distribution.metadata.publicTopicCount}.`,
        `Received ${publicTopicCount}.`,
      ].join(' ')
    );
  }

  const grades =
    gradeOrder.map(
      (grade) =>
        buildGradeSummary({
          grade,
          recordsByPathway,
          pathwaySummaries:
            pathways,
          locale,
        })
    );

  return {
    totals: {
      gradeMin: 2,
      gradeMax: 12,
      strandCount:
        Object.keys(
          curriculum
        ).length,
      topicCount:
        publicTopicCount,
      publicPathwayCount:
        pathways.length,
    },
    pathways,
    grades,
  };
}

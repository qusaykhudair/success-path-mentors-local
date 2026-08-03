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
  MathPathwayDataSource,
  MathPathwaySlug,
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

interface SourceTopicRecord {
  key: string;
  sourceOrder: number;
  strand: string;
  grade: MathGrade;
  title: string;
  sourcePathway: string;
  subtopics: string[];
}

interface PageTopicRecord {
  id: string;
  sourceOrder: number;
  grade: MathGrade;
  title: string;
  sourceKeys: string[];
  sourcePathways: string[];
  subtopics: string[];
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
  const records:
    SourceTopicRecord[] = [];

  review.strands.forEach(
    (strandRecord, strandIndex) => {
      gradeOrder.forEach(
        (grade, gradeIndex) => {
          const reviewCell =
            strandRecord.grades[grade];

          if (!reviewCell?.topic) {
            return;
          }

          const sourceTopic =
            curriculum[
              strandRecord.strand
            ]?.[grade];

          if (!sourceTopic) {
            throw new Error(
              [
                'Math curriculum source mismatch.',
                `Missing ${strandRecord.strand} ${grade}.`,
              ].join(' ')
            );
          }

          if (
            sourceTopic.topic !==
            reviewCell.topic
          ) {
            throw new Error(
              [
                'Math curriculum title mismatch.',
                `${strandRecord.strand} ${grade}.`,
                `Excel: "${reviewCell.topic}".`,
                `Detailed source: "${sourceTopic.topic}".`,
              ].join(' ')
            );
          }

          if (
            sourceTopic.subtopics.length !==
            reviewCell.subtopicCount
          ) {
            throw new Error(
              [
                'Math curriculum count mismatch.',
                `${strandRecord.strand} ${grade}.`,
                `Excel: ${reviewCell.subtopicCount}.`,
                `Detailed source: ${sourceTopic.subtopics.length}.`,
              ].join(' ')
            );
          }

          records.push({
            key:
              `${strandRecord.strand}::${grade}`,
            sourceOrder:
              strandIndex *
                gradeOrder.length +
              gradeIndex,
            strand:
              strandRecord.strand,
            grade,
            title:
              reviewCell.topic,
            sourcePathway:
              strandRecord.proposedPathway,
            subtopics:
              sourceTopic.subtopics,
          });
        }
      );
    }
  );

  if (
    records.length !==
    review.statistics
      .populatedTopicCells
  ) {
    throw new Error(
      [
        'Math curriculum record-count mismatch.',
        `Expected ${review.statistics.populatedTopicCells}.`,
        `Received ${records.length}.`,
      ].join(' ')
    );
  }

  return records;
}

function selectRecordsForDataSource({
  dataSource,
  records,
}: {
  dataSource: MathPathwayDataSource;
  records: SourceTopicRecord[];
}): SourceTopicRecord[] {
  if (
    dataSource.type ===
    'source-pathways'
  ) {
    const accepted =
      new Set(
        dataSource.sourceNames
      );

    return records.filter(
      (record) =>
        accepted.has(
          record.sourcePathway
        )
    );
  }

  const acceptedTitles =
    new Set(
      dataSource.titles.map(
        normalizeTopicTitle
      )
    );

  return records.filter(
    (record) =>
      acceptedTitles.has(
        normalizeTopicTitle(
          record.title
        )
      )
  );
}

/**
 * Removes repeated same-page, same-grade topic labels.
 *
 * Unique detailed subtopics are preserved for later topic
 * detail pages. The public topic appears once.
 */
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

  records.forEach(
    (record) => {
      const groupKey = [
        record.grade,
        normalizeTopicTitle(
          record.title
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
          first.title,
        sourceKeys:
          sortedGroup.map(
            (record) =>
              record.key
          ),
        sourcePathways: [
          ...new Set(
            sortedGroup.map(
              (record) =>
                record.sourcePathway
            )
          ),
        ],
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

/**
 * All five stages and all eleven grades are always returned.
 * Empty grades receive an empty topics array instead of
 * disappearing from the pathway page.
 */
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
  sourceRecords,
  locale,
}: {
  pathway:
    PublicMathPathway;
  sourceRecords:
    SourceTopicRecord[];
  locale: 'en' | 'ar';
}): PublicMathPathwaySummary {
  const pageRecords =
    deduplicatePageRecords({
      pathwaySlug:
        pathway.slug,
      records:
        selectRecordsForDataSource({
          dataSource:
            pathway.dataSource,
          records:
            sourceRecords,
        }),
    });

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

/**
 * Grade browsing is based only on the seven source-aligned
 * pages. Functions is an additional page and is not repeated
 * as another learning area in the grade browser.
 *
 * Repeated titles across source pages are merged once for the
 * grade summary and assigned to the first source-aligned page
 * in the configured order.
 */
function buildGradeSummary({
  grade,
  sourceRecords,
  pathwaySummaries,
  locale,
}: {
  grade: MathGrade;
  sourceRecords:
    SourceTopicRecord[];
  pathwaySummaries:
    PublicMathPathwaySummary[];
  locale: 'en' | 'ar';
}): MathGradeSummary {
  const sourceAligned =
    publicMathPathways.filter(
      (pathway) =>
        !pathway.additionalView
    );

  const ownership =
    new Map<
      string,
      {
        pathway:
          PublicMathPathway;
        records:
          SourceTopicRecord[];
      }
    >();

  sourceAligned.forEach(
    (pathway) => {
      const selected =
        selectRecordsForDataSource({
          dataSource:
            pathway.dataSource,
          records:
            sourceRecords,
        }).filter(
          (record) =>
            record.grade === grade
        );

      selected.forEach(
        (record) => {
          const key =
            normalizeTopicTitle(
              record.title
            );

          const existing =
            ownership.get(key);

          if (existing) {
            existing.records.push(
              record
            );
            return;
          }

          ownership.set(
            key,
            {
              pathway,
              records: [
                record,
              ],
            }
          );
        }
      );
    }
  );

  const pathwayGroups =
    new Map<
      MathPathwaySlug,
      SourceTopicRecord[]
    >();

  ownership.forEach(
    ({ pathway, records }) => {
      const current =
        pathwayGroups.get(
          pathway.slug
        ) ?? [];

      current.push(
        ...records
      );

      pathwayGroups.set(
        pathway.slug,
        current
      );
    }
  );

  const pathways:
    MathGradePathwaySummary[] =
      sourceAligned.flatMap(
        (pathway) => {
          const ownedRecords =
            pathwayGroups.get(
              pathway.slug
            ) ?? [];

          if (
            ownedRecords.length ===
            0
          ) {
            return [];
          }

          const pageRecords =
            deduplicatePageRecords({
              pathwaySlug:
                pathway.slug,
              records:
                ownedRecords,
            });

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
                pageRecords.length,
              topics:
                buildTopicSummaries(
                  pageRecords
                ),
            },
          ];
        }
      );

  const topicCount =
    pathways.reduce(
      (total, pathway) =>
        total +
        pathway.topicCount,
      0
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
    topicCount,
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

  const pathways =
    publicMathPathways.map(
      (pathway) =>
        buildPathwaySummary({
          pathway,
          sourceRecords,
          locale,
        })
    );

  const grades =
    gradeOrder.map(
      (grade) =>
        buildGradeSummary({
          grade,
          sourceRecords,
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
        review.statistics
          .strandCount,
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

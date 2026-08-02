import type {
  MathGrade,
  PublicMathPathway,
} from '@/types/math-curriculum';

const GRADES_2_TO_10: MathGrade[] = [
  'G2',
  'G3',
  'G4',
  'G5',
  'G6',
  'G7',
  'G8',
  'G9',
  'G10',
];

const GRADES_4_TO_12: MathGrade[] = [
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

const GRADES_7_TO_12: MathGrade[] = [
  'G7',
  'G8',
  'G9',
  'G10',
  'G11',
  'G12',
];

const GRADES_9_TO_12: MathGrade[] = [
  'G9',
  'G10',
  'G11',
  'G12',
];

/**
 * Public-facing curriculum taxonomy.
 *
 * The two source JSON files remain unchanged. This
 * configuration only controls how the source records
 * are summarized for families on the website.
 */
export const publicMathPathways:
  PublicMathPathway[] = [
    {
      slug: 'basics-operations',
      title: {
        en: 'Basics and Operations',
        ar: 'الأساسيات والعمليات الحسابية',
      },
      shortTitle: {
        en: 'Basics and Operations',
        ar: 'الأساسيات والعمليات',
      },
      description: {
        en:
          'Build number sense, place value, arithmetic fluency, integers, and numerical reasoning.',
        ar:
          'بناء الحس العددي والقيمة المكانية والطلاقة في العمليات والأعداد الصحيحة والاستدلال العددي.',
      },
      iconKey: 'calculator',
      status: 'confirmed',
      sourceStrategy: {
        type: 'source-pathways',
        sourceNames: [
          'Basics & Operations',
        ],
        grades: GRADES_2_TO_10,
      },
    },
    {
      slug: 'fractions-rational-numbers',
      title: {
        en: 'Fractions and Rational Numbers',
        ar: 'الكسور والأعداد النسبية',
      },
      shortTitle: {
        en: 'Fractions',
        ar: 'الكسور',
      },
      description: {
        en:
          'Progress from fraction models and decimals to rational-number operations and proportional reasoning.',
        ar:
          'التدرج من نماذج الكسور والأعداد العشرية إلى عمليات الأعداد النسبية والتناسب.',
      },
      iconKey: 'divide-circle',
      status: 'confirmed',
      sourceStrategy: {
        type: 'source-pathways',
        sourceNames: [
          'Fractions & Rational Numbers',
        ],
        grades: GRADES_2_TO_10,
      },
    },
    {
      slug: 'algebra-equations',
      title: {
        en: 'Algebra and Equations',
        ar: 'الجبر والمعادلات',
      },
      shortTitle: {
        en: 'Algebra',
        ar: 'الجبر',
      },
      description: {
        en:
          'Develop expressions, equations, inequalities, proportional relationships, and algebraic problem solving.',
        ar:
          'تطوير فهم العبارات والمعادلات والمتباينات والعلاقات التناسبية وحل المسائل الجبرية.',
      },
      iconKey: 'variable',
      status: 'confirmed',
      sourceStrategy: {
        type: 'source-pathways',
        sourceNames: [
          'Algebra & Equations',
        ],
        grades: GRADES_4_TO_12,
      },
    },
    {
      slug: 'functions',
      title: {
        en: 'Functions',
        ar: 'الدوال',
      },
      shortTitle: {
        en: 'Functions',
        ar: 'الدوال',
      },
      description: {
        en:
          'Connect relations, sequences, slope, variation, coordinate representations, and families of functions.',
        ar:
          'ربط العلاقات والمتتاليات والميل والتغير والتمثيل الإحداثي وعائلات الدوال.',
      },
      iconKey: 'chart-spline',
      status: 'curated',
      sourceStrategy: {
        type: 'topic-filter',
        includePatterns: [
          'function',
          'relation',
          'slope',
          'variation',
          'sequence',
        ],
        excludePatterns: [
          'probability distribution',
        ],
        grades: GRADES_7_TO_12,
      },
    },
    {
      slug: 'geometry-trigonometry',
      title: {
        en: 'Geometry and Trigonometry',
        ar: 'الهندسة وحساب المثلثات',
      },
      shortTitle: {
        en: 'Geometry',
        ar: 'الهندسة',
      },
      description: {
        en:
          'Explore shapes, measurement, transformations, coordinate geometry, triangles, and trigonometry.',
        ar:
          'استكشاف الأشكال والقياس والتحويلات والهندسة الإحداثية والمثلثات وحساب المثلثات.',
      },
      iconKey: 'shapes',
      status: 'confirmed',
      sourceStrategy: {
        type: 'source-pathways',
        sourceNames: [
          'Geometry & Trigonometry',
        ],
      },
    },
    {
      slug: 'statistics-probability',
      title: {
        en: 'Statistics and Probability',
        ar: 'الإحصاء والاحتمالات',
      },
      shortTitle: {
        en: 'Statistics',
        ar: 'الإحصاء',
      },
      description: {
        en:
          'Interpret data, build graphs, study probability, sampling, distributions, and statistical reasoning.',
        ar:
          'تفسير البيانات وبناء الرسوم ودراسة الاحتمالات والعينات والتوزيعات والاستدلال الإحصائي.',
      },
      iconKey: 'chart',
      status: 'confirmed',
      sourceStrategy: {
        type: 'source-pathways',
        sourceNames: [
          'Statistics & Probability',
        ],
      },
    },
    {
      slug: 'advanced-precalculus',
      title: {
        en: 'Advanced Mathematics and Pre-Calculus',
        ar: 'الرياضيات المتقدمة وما قبل التفاضل',
      },
      shortTitle: {
        en: 'Advanced Math',
        ar: 'الرياضيات المتقدمة',
      },
      description: {
        en:
          'Prepare for senior mathematics through advanced functions, vectors, logarithms, and pre-calculus concepts.',
        ar:
          'الاستعداد للرياضيات المتقدمة من خلال الدوال والمتجهات واللوغاريتمات ومفاهيم ما قبل التفاضل.',
      },
      iconKey: 'sigma',
      status: 'confirmed',
      sourceStrategy: {
        type: 'source-pathways',
        sourceNames: [
          'Advanced / Pre-Calculus',
        ],
        grades: GRADES_9_TO_12,
      },
    },
    {
      slug: 'financial-literacy',
      title: {
        en: 'Financial Literacy',
        ar: 'الثقافة المالية',
      },
      shortTitle: {
        en: 'Financial Literacy',
        ar: 'الثقافة المالية',
      },
      description: {
        en:
          'Apply mathematics to money, prices, percentages, interest, budgeting, and everyday financial decisions.',
        ar:
          'تطبيق الرياضيات على المال والأسعار والنسب والفائدة والميزانية والقرارات المالية اليومية.',
      },
      iconKey: 'coins',
      status: 'curated',
      sourceStrategy: {
        type: 'composite',
        strategies: [
          {
            type: 'source-pathways',
            sourceNames: [
              'Financial Literacy',
              'Statistics & Probability / Financial Literacy',
            ],
          },
          {
            type: 'topic-filter',
            includePatterns: [
              'financial literacy',
              'consumer math',
              'money',
              'interest',
              'price',
              'tax',
              'discount',
              'budget',
            ],
            grades: GRADES_2_TO_10,
          },
        ],
      },
    },
  ];

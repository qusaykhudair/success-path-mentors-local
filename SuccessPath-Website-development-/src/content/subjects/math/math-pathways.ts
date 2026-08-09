import type {
  PublicMathPathway,
} from '@/types/math-curriculum';

/**
 * Public mathematics sections.
 *
 * Topic assignment is stored separately in
 * data/math-topic-distribution.json. This keeps the current
 * route and component structure unchanged while allowing each
 * strand-grade JSON record to be reviewed independently.
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
          'Number sense, whole-number operations, integers, exponents, estimation, and mathematical reasoning from Grades 2–12.',
        ar:
          'الحس العددي والعمليات والأعداد الصحيحة والأسس والتقدير والاستدلال الرياضي من الصف الثاني حتى الثاني عشر.',
      },
      iconKey: 'calculator',
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
          'Fractions, decimals, rational numbers, ratios, proportions, and percents organized by grade.',
        ar:
          'الكسور والأعداد العشرية والنسبية والنسب والتناسبات والنسب المئوية منظمة حسب الصف.',
      },
      iconKey: 'divide-circle',
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
          'Expressions, equations, inequalities, systems, polynomials, factoring, and algebraic reasoning.',
        ar:
          'العبارات والمعادلات والمتباينات والأنظمة وكثيرات الحدود والتحليل والاستدلال الجبري.',
      },
      iconKey: 'variable',
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
          'Patterns, sequences, coordinate planes, relations, variation, linear functions, and function families.',
        ar:
          'الأنماط والمتتاليات والمستوى الإحداثي والعلاقات والتغير والدوال الخطية وعائلات الدوال.',
      },
      iconKey: 'chart-spline',
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
          'Measurement, shapes, transformations, triangles, circles, constructions, and trigonometry.',
        ar:
          'القياس والأشكال والتحويلات والمثلثات والدوائر والإنشاءات وحساب المثلثات.',
      },
      iconKey: 'shapes',
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
          'Data displays, statistics, probability, sampling, distributions, and statistical reasoning.',
        ar:
          'تمثيل البيانات والإحصاء والاحتمالات والعينات والتوزيعات والاستدلال الإحصائي.',
      },
      iconKey: 'chart',
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
          'Radicals, logarithms, rational functions, complex numbers, matrices, vectors, conic sections, and advanced series.',
        ar:
          'الجذور واللوغاريتمات والدوال النسبية والأعداد المركبة والمصفوفات والمتجهات والقطوع والمتسلسلات المتقدمة.',
      },
      iconKey: 'sigma',
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
          'Money, consumer mathematics, budgeting, prices, payments, interest, and everyday financial decisions.',
        ar:
          'المال ورياضيات المستهلك والميزانية والأسعار وطرق الدفع والفائدة والقرارات المالية اليومية.',
      },
      iconKey: 'coins',
    },
  ];

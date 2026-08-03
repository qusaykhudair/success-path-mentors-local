import type {
  PublicMathPathway,
} from '@/types/math-curriculum';

/**
 * Page-level curriculum sources.
 *
 * Source-aligned pages use the Proposed Pathway labels from
 * the Excel workbook. Together, those seven pages account for
 * every populated Excel cell exactly once.
 *
 * Functions is an additional discovery page. It overlaps the
 * source-aligned pages but never removes records from them.
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
          'The complete Basics & Operations pathway from the documented Excel roadmap, organized across Grades 2–12.',
        ar:
          'المسار الكامل للأساسيات والعمليات الحسابية من خارطة Excel الموثقة، منظمًا للصفوف 2–12.',
      },
      iconKey: 'calculator',
      dataSource: {
        type: 'source-pathways',
        sourceNames: [
          'Basics & Operations',
        ],
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
          'The complete Fractions & Rational Numbers pathway from the documented Excel roadmap, organized across Grades 2–12.',
        ar:
          'المسار الكامل للكسور والأعداد النسبية من خارطة Excel الموثقة، منظمًا للصفوف 2–12.',
      },
      iconKey: 'divide-circle',
      dataSource: {
        type: 'source-pathways',
        sourceNames: [
          'Fractions & Rational Numbers',
        ],
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
          'The complete Algebra & Equations pathway from the documented Excel roadmap, organized across Grades 2–12.',
        ar:
          'المسار الكامل للجبر والمعادلات من خارطة Excel الموثقة، منظمًا للصفوف 2–12.',
      },
      iconKey: 'variable',
      dataSource: {
        type: 'source-pathways',
        sourceNames: [
          'Algebra & Equations',
        ],
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
          'An additional cross-curriculum view of documented function, relation, sequence, slope, and coordinate-plane topics.',
        ar:
          'عرض إضافي لموضوعات الدوال والعلاقات والمتتاليات والميل والمستوى الإحداثي الموثقة عبر المنهج.',
      },
      iconKey: 'chart-spline',
      additionalView: true,
      dataSource: {
        type: 'topic-titles',
        titles: [
          'Coordinate plane',
          'Direct and inverse variation',
          'Direct variation',
          'Exponential functions',
          'Families of functions',
          'Functions',
          'Functions: linear, quadratic, exponential',
          'Linear functions',
          'Number sequences',
          'Parabolas',
          'Patterns',
          'Patterns and sequences',
          'Quadratic relations',
          'Relations and functions',
        ],
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
          'The complete Geometry & Trigonometry pathway from the documented Excel roadmap, organized across Grades 2–12.',
        ar:
          'المسار الكامل للهندسة وحساب المثلثات من خارطة Excel الموثقة، منظمًا للصفوف 2–12.',
      },
      iconKey: 'shapes',
      dataSource: {
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
          'The complete Statistics & Probability pathway from the documented Excel roadmap, organized across Grades 2–12.',
        ar:
          'المسار الكامل للإحصاء والاحتمالات من خارطة Excel الموثقة، منظمًا للصفوف 2–12.',
      },
      iconKey: 'chart',
      dataSource: {
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
          'The complete Advanced / Pre-Calculus pathway from the documented Excel roadmap, organized across Grades 2–12.',
        ar:
          'المسار الكامل للرياضيات المتقدمة وما قبل التفاضل من خارطة Excel الموثقة، منظمًا للصفوف 2–12.',
      },
      iconKey: 'sigma',
      dataSource: {
        type: 'source-pathways',
        sourceNames: [
          'Advanced / Pre-Calculus',
        ],
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
          'The documented Financial Literacy and mixed Statistics / Financial Literacy source pathways, shown across every grade.',
        ar:
          'مسارا الثقافة المالية والإحصاء/الثقافة المالية الموثقان في Excel، مع عرض جميع الصفوف.',
      },
      iconKey: 'coins',
      dataSource: {
        type: 'source-pathways',
        sourceNames: [
          'Statistics & Probability / Financial Literacy',
          'Financial Literacy',
        ],
      },
    },
  ];

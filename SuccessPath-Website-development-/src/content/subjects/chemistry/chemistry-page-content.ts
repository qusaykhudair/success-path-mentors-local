import type {
  SiteLocale,
} from '@/config/site';

const chemistryPageContent = {
  en: {
    seo: {
      title:
        'Online Chemistry Tutoring for Grades 5–12 | Success Path Mentors',
      description:
        'Personalized one-to-one chemistry tutoring organized by grade and curriculum strand, from matter and atomic structure to stoichiometry, equilibrium, organic chemistry, and thermochemistry.',
      pathname:
        '/subjects/chemistry',
    },
    hero: {
      eyebrow:
        'One-to-one chemistry tutoring',
      title:
        'Build chemistry understanding from particles to reactions',
      description:
        'Personalized chemistry support organized across matter, atomic structure, bonding, reactions, quantitative chemistry, equilibrium, organic chemistry, and advanced course topics.',
      primaryAction:
        'Explore chemistry strands',
      secondaryAction:
        'Book a free trial',
      breadcrumbLabel:
        'Chemistry tutoring breadcrumb',
      homeLabel:
        'Home',
      subjectsLabel:
        'Subjects',
      currentLabel:
        'Chemistry',
      highlights: [
        {
          value:
            'Grades 5, 8–12',
          label:
            'Source-aligned grade coverage',
        },
        {
          value:
            '16 strands',
          label:
            'A complete chemistry learning map',
        },
        {
          value:
            'One-to-one',
          label:
            'Support matched to each learner',
        },
      ],
      visual: {
        eyebrow:
          'Chemistry learning map',
        title:
          'Matter · Reactions · Energy',
        tiles: [
          {
            title:
              'Structure',
            text:
              'Atoms, periodicity, and bonding',
          },
          {
            title:
              'Change',
            text:
              'Reactions, equilibrium, and kinetics',
          },
          {
            title:
              'Quantity',
            text:
              'Moles, stoichiometry, and energy',
          },
        ],
      },
    },
    strands: {
      eyebrow:
        'Chemistry curriculum map',
      title:
        'Explore chemistry by curriculum strand',
      description:
        'Each approved strand has a dedicated page showing the available grades, Main Topics, and Subtopics from the supplied chemistry curriculum.',
      openAction:
        'Open strand',
      availableLabel:
        'Available',
      gradeRangeLabel:
        'Grades',
      topicsLabel:
        'Main Topics',
      skillsLabel:
        'Subtopics',
    },
    cta: {
      eyebrow:
        'Personalized chemistry support',
      title:
        'Match the student with the right chemistry tutor',
      description:
        'We align lessons with the student’s grade, current course, assignments, assessment needs, and learning goals.',
      primaryAction:
        'Book a free trial',
      secondaryAction:
        'Contact our team',
    },
    schema: {
      serviceName:
        'Online chemistry tutoring for Grades 5–12',
      serviceDescription:
        'Personalized one-to-one chemistry tutoring organized by grade and curriculum strand.',
    },
  },
  ar: {
    seo: {
      title:
        'تدريس الكيمياء أونلاين للصفوف 5–12 | Success Path Mentors',
      description:
        'دروس كيمياء فردية منظمة حسب الصف ومسار المنهج، من المادة والبنية الذرية إلى الحسابات والاتزان والكيمياء العضوية والحرارية.',
      pathname:
        '/subjects/chemistry',
    },
    hero: {
      eyebrow:
        'تدريس فردي للكيمياء',
      title:
        'بناء فهم الكيمياء من الجسيمات إلى التفاعلات',
      description:
        'دعم مخصص في الكيمياء يشمل المادة والبنية الذرية والروابط والتفاعلات والكيمياء الكمية والاتزان والكيمياء العضوية والموضوعات المتقدمة.',
      primaryAction:
        'استكشف مسارات الكيمياء',
      secondaryAction:
        'احجز حصة تجريبية',
      breadcrumbLabel:
        'مسار التنقل لصفحة الكيمياء',
      homeLabel:
        'الرئيسية',
      subjectsLabel:
        'المواد',
      currentLabel:
        'الكيمياء',
      highlights: [
        {
          value:
            'الصفوف 5 و8–12',
          label:
            'تغطية مطابقة لبيانات المصدر',
        },
        {
          value:
            '16 مسارًا',
          label:
            'خريطة متكاملة لمنهج الكيمياء',
        },
        {
          value:
            'فردي 1:1',
          label:
            'دعم مناسب لكل متعلم',
        },
      ],
      visual: {
        eyebrow:
          'خريطة تعلم الكيمياء',
        title:
          'المادة · التفاعلات · الطاقة',
        tiles: [
          {
            title:
              'البنية',
            text:
              'الذرات والدورية والروابط',
          },
          {
            title:
              'التغير',
            text:
              'التفاعلات والاتزان والحركية',
          },
          {
            title:
              'الكمية',
            text:
              'المول والحسابات والطاقة',
          },
        ],
      },
    },
    strands: {
      eyebrow:
        'خريطة منهج الكيمياء',
      title:
        'استكشف الكيمياء حسب مسار المنهج',
      description:
        'لكل مسار معتمد صفحة مستقلة تعرض الصفوف المتاحة والموضوعات الرئيسية والموضوعات الفرعية كما وردت في بيانات المنهج.',
      openAction:
        'فتح المسار',
      availableLabel:
        'متاح',
      gradeRangeLabel:
        'الصفوف',
      topicsLabel:
        'موضوعات رئيسية',
      skillsLabel:
        'موضوعات فرعية',
    },
    cta: {
      eyebrow:
        'دعم مخصص في الكيمياء',
      title:
        'اعثر على مدرس الكيمياء المناسب للطالب',
      description:
        'نربط الدروس بصف الطالب ومقرره الحالي وواجباته واحتياجاته في الاختبارات وأهدافه التعليمية.',
      primaryAction:
        'احجز حصة تجريبية',
      secondaryAction:
        'تواصل مع فريقنا',
    },
    schema: {
      serviceName:
        'تدريس الكيمياء أونلاين للصفوف 5–12',
      serviceDescription:
        'دروس كيمياء فردية مخصصة ومنظمة حسب الصف ومسار المنهج.',
    },
  },
} as const;

export function getChemistryPageContent(
  locale: SiteLocale
) {
  return chemistryPageContent[locale];
}

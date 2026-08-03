import type {
  SiteLocale,
} from '@/config/site';

const subjectsPageContent = {
  en: {
    seo: {
      title:
        'Online Tutoring Subjects | Mathematics and English | Mustafa Academy',
      description:
        'Explore Mustafa Academy mathematics and English tutoring curricula, organized by subject, learning pathway, strand, and grade level.',
      pathname: '/subjects',
    },
    breadcrumb: {
      ariaLabel: 'Subjects page breadcrumb',
      home: 'Home',
      current: 'Subjects',
    },
    hero: {
      eyebrow: 'Subjects and curriculum',
      title:
        'Explore mathematics and English tutoring',
      description:
        'Choose a subject, review its complete curriculum structure, and find the learning pathway that matches the student’s grade and goals.',
      mathAction: 'Explore mathematics',
      englishAction: 'Explore English',
      stats: {
        subjects: 'Core subjects',
        pathways: 'Curriculum pathways',
        grades: 'Grade coverage',
      },
    },
    directory: {
      eyebrow: 'Subject directory',
      title:
        'Clear curriculum paths for every learner',
      description:
        'Each subject has its own overview page and dedicated pages for every approved curriculum pathway or strand.',
      math: {
        title: 'Mathematics',
        description:
          'Structured mathematics support from number foundations and fractions through algebra, functions, geometry, statistics, financial literacy, and pre-calculus.',
        gradeRange: 'Grades 2–12',
        unitLabel: 'mathematics pathways',
        action: 'Open mathematics',
        branchesLabel:
          'Mathematics pathways',
      },
      english: {
        title: 'English',
        description:
          'A complete Grade 1–12 English curriculum covering foundational reading, grammar, comprehension, fluency, literature, vocabulary, communication, academic support, assessment, and writing.',
        gradeRange: 'Grades 1–12',
        unitLabel: 'English strands',
        action: 'Open English',
        branchesLabel:
          'English curriculum strands',
      },
    },
    cta: {
      eyebrow: 'Personalized guidance',
      title:
        'Not sure which subject pathway to choose?',
      description:
        'Tell us the student’s grade, current level, and learning goal. Our team will help identify the right starting point and tutor.',
      primary: 'Contact us',
      secondary: 'Learn about Mustafa Academy',
    },
  },
  ar: {
    seo: {
      title:
        'مواد التدريس أونلاين | الرياضيات واللغة الإنجليزية | أكاديمية مصطفى',
      description:
        'استكشف مناهج تدريس الرياضيات واللغة الإنجليزية في أكاديمية مصطفى، منظمة حسب المادة والمسار والصف الدراسي.',
      pathname: '/subjects',
    },
    breadcrumb: {
      ariaLabel: 'مسار التنقل لصفحة المواد',
      home: 'الرئيسية',
      current: 'المواد',
    },
    hero: {
      eyebrow: 'المواد والمناهج',
      title:
        'استكشف تدريس الرياضيات واللغة الإنجليزية',
      description:
        'اختر المادة، وراجع هيكل المنهج الكامل، وانتقل إلى المسار الذي يناسب صف الطالب وهدفه التعليمي.',
      mathAction: 'استكشف الرياضيات',
      englishAction:
        'استكشف اللغة الإنجليزية',
      stats: {
        subjects: 'مادتان أساسيتان',
        pathways: 'مسارات المنهج',
        grades: 'تغطية الصفوف',
      },
    },
    directory: {
      eyebrow: 'دليل المواد',
      title:
        'مسارات منهج واضحة لكل طالب',
      description:
        'لكل مادة صفحة رئيسية وصفحات مستقلة لكل مسار أو قسم معتمد في المنهج.',
      math: {
        title: 'الرياضيات',
        description:
          'دعم منظم في الرياضيات يبدأ من أساسيات الأعداد والكسور، ويمتد إلى الجبر والدوال والهندسة والإحصاء والثقافة المالية وما قبل التفاضل.',
        gradeRange:
          'الصفوف 2–12',
        unitLabel:
          'مسارات للرياضيات',
        action:
          'فتح صفحة الرياضيات',
        branchesLabel:
          'مسارات الرياضيات',
      },
      english: {
        title:
          'اللغة الإنجليزية',
        description:
          'منهج كامل للصفوف 1–12 يشمل القراءة التأسيسية والقواعد والفهم والطلاقة والأدب والمفردات والتواصل والدعم الأكاديمي والتقييم والكتابة.',
        gradeRange:
          'الصفوف 1–12',
        unitLabel:
          'قسمًا للغة الإنجليزية',
        action:
          'فتح صفحة الإنجليزية',
        branchesLabel:
          'أقسام منهج اللغة الإنجليزية',
      },
    },
    cta: {
      eyebrow: 'توجيه شخصي',
      title:
        'لست متأكدًا من المسار المناسب؟',
      description:
        'أخبرنا بصف الطالب ومستواه الحالي وهدفه التعليمي، وسيساعدك فريقنا في تحديد نقطة البداية والمدرس المناسب.',
      primary: 'تواصل معنا',
      secondary:
        'تعرّف إلى أكاديمية مصطفى',
    },
  },
} as const;

export function getSubjectsPageContent(
  locale: SiteLocale
) {
  return subjectsPageContent[locale];
}

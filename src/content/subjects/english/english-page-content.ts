import type {
  SiteLocale,
} from '@/config/site';

const englishPageContent = {
  en: {
    seo: {
      title:
        'Online English Tutoring in Canada | Grades 1–12 | Success Path Mentors',
      description:
        'One-to-one online English tutoring for Grades 1–12 in Canada, including Ontario curriculum support for reading, writing, grammar, comprehension, and school assignments.',
      pathname: '/subjects/english',
    },
    hero: {
      eyebrow:
        'One-to-one online English tutoring in Canada',
      title:
        'Online English Tutoring for Grades 1–12',
      description:
        'Personalized one-to-one English support for students in Canada, including Ontario curriculum needs, across reading comprehension, grammar, writing, communication, literature, and academic skills.',
      primaryAction:
        'Book a free trial',
      secondaryAction:
        'Explore English strands',
      breadcrumbLabel:
        'English tutoring breadcrumb',
      homeLabel: 'Home',
      subjectsLabel: 'Subjects',
      currentLabel: 'English',
      highlights: [
        {
          value: 'Grades 1–12',
          label:
            'Progressive curriculum coverage',
        },
        {
          value: 'One-to-one',
          label:
            'Support matched to each learner',
        },
        {
          value: '11 strands',
          label:
            'A complete English curriculum map',
        },
      ],
    },
    strands: {
      eyebrow:
        'English tutoring by skill and grade',
      title:
        'English Support by Grade and Learning Strand',
      description:
        'Explore eleven English learning strands with grade-level support for reading, language, literature, communication, writing, school assignments, and academic skill gaps.',
      openAction:
        'Open strand',
      pendingLabel:
        'Curriculum data pending',
      availableLabel:
        'Available now',
      gradeRangeLabel: 'Grades',
    },
    cta: {
      eyebrow:
        'Personalized English support',
      title:
        'Find the right English tutor for your learner',
      description:
        'Tell us the student’s grade, curriculum, current reading or writing challenges, school assignments, and learning goals. We’ll help match them with an appropriate one-to-one English tutor.',
      primaryAction:
        'Book a free trial',
      secondaryAction:
        'Contact our team',
    },
    schema: {
      serviceName:
        'One-to-one Online English Tutoring',
      serviceDescription:
        'Personalized one-to-one online English tutoring for Grades 1–12 in Canada, including Ontario curriculum support for reading, writing, grammar, comprehension, and academic skills.',
    },
  },
  ar: {
    seo: {
      title:
        'تدريس اللغة الإنجليزية أونلاين للصفوف 1–12 | Success Path Mentors',
      description:
        'دروس فردية مخصصة في اللغة الإنجليزية منظمة حسب الصف ومسار المنهج وواجبات المدرسة وأهداف الطالب.',
      pathname: '/subjects/english',
    },
    hero: {
      eyebrow:
        'تدريس فردي للغة الإنجليزية',
      title:
        'بناء مهارات إنجليزية قوية بالتدرج من صف إلى آخر',
      description:
        'دعم مخصص للصفوف 1–12 عبر القراءة واللغة والأدب والتواصل والكتابة والمهارات الأكاديمية.',
      primaryAction:
        'احجز حصة تجريبية',
      secondaryAction:
        'استكشف مسارات الإنجليزية',
      breadcrumbLabel:
        'مسار التنقل لصفحة الإنجليزية',
      homeLabel:
        'الرئيسية',
      subjectsLabel:
        'المواد الدراسية',
      currentLabel:
        'اللغة الإنجليزية',
      highlights: [
        {
          value: 'الصفوف 1–12',
          label:
            'تغطية منهجية متدرجة',
        },
        {
          value: 'فردي 1:1',
          label:
            'دعم مناسب لكل متعلم',
        },
        {
          value: '11 مسارًا',
          label:
            'خريطة متكاملة لمنهج الإنجليزية',
        },
      ],
    },
    strands: {
      eyebrow:
        'خريطة منهج الإنجليزية',
      title:
        'استكشف الإنجليزية حسب مسار التعلم',
      description:
        'أصبحت مسارات منهج الإنجليزية الأحد عشر متاحة في صفحات مستقلة منظمة حسب الصف، بدءًا من المهارات التأسيسية وصولًا إلى القراءة واللغة والتواصل والكتابة المتقدمة.',
      openAction:
        'فتح المسار',
      pendingLabel:
        'بيانات المنهج قيد الإضافة',
      availableLabel:
        'متاح الآن',
      gradeRangeLabel:
        'الصفوف',
    },
    cta: {
      eyebrow:
        'دعم مخصص في اللغة الإنجليزية',
      title:
        'اعثر على مدرس الإنجليزية المناسب للطالب',
      description:
        'نطابق خطة الدروس مع صف الطالب ومهاراته الحالية وواجباته المدرسية وأهدافه التعليمية.',
      primaryAction:
        'احجز حصة تجريبية',
      secondaryAction:
        'تواصل مع فريقنا',
    },
    schema: {
      serviceName:
        'تدريس اللغة الإنجليزية أونلاين للصفوف 1–12',
      serviceDescription:
        'دروس فردية مخصصة في اللغة الإنجليزية منظمة حسب الصف ومسار المنهج.',
    },
  },
} as const;

export function getEnglishPageContent(
  locale: SiteLocale
) {
  return englishPageContent[locale];
}

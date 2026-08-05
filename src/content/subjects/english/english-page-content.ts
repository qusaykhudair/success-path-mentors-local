import type {
  SiteLocale,
} from '@/config/site';

const englishPageContent = {
  en: {
    seo: {
      title:
        'Online English Tutoring for Grades 1–12 | Success Path Mentors',
      description:
        'Personalized one-to-one English tutoring organized by grade, curriculum strand, schoolwork, and student goals.',
      pathname: '/subjects/english',
    },
    hero: {
      eyebrow:
        'One-to-one English tutoring',
      title:
        'Build strong English skills, one grade at a time',
      description:
        'Personalized English support for Grades 1–12, organized across reading, language, literature, communication, writing, and academic skills.',
      primaryAction:
        'Explore English strands',
      secondaryAction:
        'Book a free trial',
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
        'English curriculum map',
      title:
        'Explore English by learning strand',
      description:
        'All eleven English curriculum strands now have dedicated grade-level pages, organized from foundational skills through advanced reading, language, communication, and writing.',
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
        'We match the lesson plan to the student’s grade, current skills, school assignments, and learning goals.',
      primaryAction:
        'Book a free trial',
      secondaryAction:
        'Contact our team',
    },
    schema: {
      serviceName:
        'Online English Tutoring for Grades 1–12',
      serviceDescription:
        'Personalized one-to-one online English tutoring organized by grade and curriculum strand.',
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
        'استكشف مسارات الإنجليزية',
      secondaryAction:
        'احجز حصة تجريبية',
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

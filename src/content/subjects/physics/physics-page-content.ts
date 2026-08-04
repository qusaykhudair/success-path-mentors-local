import type {
  SiteLocale,
} from '@/config/site';

const physicsPageContent = {
  en: {
    seo: {
      title:
        'Online Physics Tutoring for Grades 5–12 | Mustafa Academy',
      description:
        'Personalized one-to-one physics tutoring organized by grade and curriculum strand, from forces and motion to electricity, waves, optics, energy, and modern physics.',
      pathname:
        '/subjects/physics',
    },
    hero: {
      eyebrow:
        'One-to-one physics tutoring',
      title:
        'Understand how motion, forces, energy, and fields work',
      description:
        'Personalized physics support organized across mechanics, electricity, waves, optics, thermal physics, momentum, oscillations, vectors, and modern physics.',
      primaryAction:
        'Explore physics strands',
      secondaryAction:
        'Book a free trial',
      breadcrumbLabel:
        'Physics tutoring breadcrumb',
      homeLabel:
        'Home',
      subjectsLabel:
        'Subjects',
      currentLabel:
        'Physics',
      highlights: [
        {
          value:
            'Grades 5–12',
          label:
            'Source-aligned grade coverage',
        },
        {
          value:
            '13 strands',
          label:
            'A complete physics learning map',
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
          'Physics learning map',
        title:
          'Motion · Energy · Fields',
        tiles: [
          {
            title:
              'Mechanics',
            text:
              'Motion, forces, momentum, and energy',
          },
          {
            title:
              'Fields',
            text:
              'Electricity, magnetism, and circuits',
          },
          {
            title:
              'Waves',
            text:
              'Sound, light, optics, and modern physics',
          },
        ],
      },
    },
    strands: {
      eyebrow:
        'Physics curriculum map',
      title:
        'Explore physics by curriculum strand',
      description:
        'Each approved strand has a dedicated page showing the available grades, Main Topics, and Subtopics from the supplied physics curriculum.',
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
        'Personalized physics support',
      title:
        'Match the student with the right physics tutor',
      description:
        'We align lessons with the student’s grade, current course, problem-solving needs, assignments, assessments, and learning goals.',
      primaryAction:
        'Book a free trial',
      secondaryAction:
        'Contact our team',
    },
    schema: {
      serviceName:
        'Online physics tutoring for Grades 5–12',
      serviceDescription:
        'Personalized one-to-one physics tutoring organized by grade and curriculum strand.',
    },
  },
  ar: {
    seo: {
      title:
        'تدريس الفيزياء أونلاين للصفوف 5–12 | أكاديمية مصطفى',
      description:
        'دروس فيزياء فردية منظمة حسب الصف ومسار المنهج، من الحركة والقوى إلى الكهرباء والموجات والبصريات والطاقة والفيزياء الحديثة.',
      pathname:
        '/subjects/physics',
    },
    hero: {
      eyebrow:
        'تدريس فردي للفيزياء',
      title:
        'فهم الحركة والقوى والطاقة والمجالات بطريقة واضحة',
      description:
        'دعم مخصص في الفيزياء يشمل الميكانيكا والكهرباء والموجات والبصريات والفيزياء الحرارية والزخم والاهتزازات والمتجهات والفيزياء الحديثة.',
      primaryAction:
        'استكشف مسارات الفيزياء',
      secondaryAction:
        'احجز حصة تجريبية',
      breadcrumbLabel:
        'مسار التنقل لصفحة الفيزياء',
      homeLabel:
        'الرئيسية',
      subjectsLabel:
        'المواد',
      currentLabel:
        'الفيزياء',
      highlights: [
        {
          value:
            'الصفوف 5–12',
          label:
            'تغطية مطابقة لبيانات المصدر',
        },
        {
          value:
            '13 مسارًا',
          label:
            'خريطة متكاملة لمنهج الفيزياء',
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
          'خريطة تعلم الفيزياء',
        title:
          'الحركة · الطاقة · المجالات',
        tiles: [
          {
            title:
              'الميكانيكا',
            text:
              'الحركة والقوى والزخم والطاقة',
          },
          {
            title:
              'المجالات',
            text:
              'الكهرباء والمغناطيسية والدوائر',
          },
          {
            title:
              'الموجات',
            text:
              'الصوت والضوء والبصريات والفيزياء الحديثة',
          },
        ],
      },
    },
    strands: {
      eyebrow:
        'خريطة منهج الفيزياء',
      title:
        'استكشف الفيزياء حسب مسار المنهج',
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
        'دعم مخصص في الفيزياء',
      title:
        'اعثر على مدرس الفيزياء المناسب للطالب',
      description:
        'نربط الدروس بصف الطالب ومقرره الحالي واحتياجاته في حل المسائل والواجبات والاختبارات وأهدافه التعليمية.',
      primaryAction:
        'احجز حصة تجريبية',
      secondaryAction:
        'تواصل مع فريقنا',
    },
    schema: {
      serviceName:
        'تدريس الفيزياء أونلاين للصفوف 5–12',
      serviceDescription:
        'دروس فيزياء فردية مخصصة ومنظمة حسب الصف ومسار المنهج.',
    },
  },
} as const;

export function getPhysicsPageContent(
  locale: SiteLocale
) {
  return physicsPageContent[locale];
}

import type {
  SiteLocale,
} from '@/config/site';

const subjectsPageContent = {
  en: {
    seo: {
      title:
        'Online Tutoring Subjects | Math, English, Chemistry, Physics and General Science | Success Path Mentors',
      description:
        'Explore Success Path Mentors mathematics, English, chemistry, physics, and General Science curricula organized by subject, pathway, strand, and grade level.',
      pathname:
        '/subjects',
    },
    breadcrumb: {
      ariaLabel:
        'Subjects page breadcrumb',
      home:
        'Home',
      current:
        'Subjects',
    },
    hero: {
      eyebrow:
        'Subjects and curriculum',
      title:
        'Explore six structured tutoring subjects',
      description:
        'Choose a subject, review its complete curriculum structure, and find the learning pathway that matches the student’s grade and goals.',
      stats: {
        subjects:
          'Core subjects',
        pathways:
          'Curriculum pathways',
        grades:
          'Grade coverage',
      },
    },
    directory: {
      eyebrow:
        'Subject directory',
      title:
        'Clear curriculum paths for every learner',
      description:
        'Each subject has its own overview page and dedicated pages for every approved curriculum pathway or strand.',
      math: {
        title:
          'Mathematics',
        description:
          'Structured mathematics support from number foundations and fractions through algebra, functions, geometry, statistics, financial literacy, and pre-calculus.',
        gradeRange:
          'Grades 2–12',
        unitLabel:
          'mathematics pathways',
        action:
          'Open mathematics',
        branchesLabel:
          'Mathematics pathways',
      },
      english: {
        title:
          'English',
        description:
          'A complete Grade 1–12 English curriculum covering foundational reading, grammar, comprehension, fluency, literature, vocabulary, communication, academic support, assessment, and writing.',
        gradeRange:
          'Grades 1–12',
        unitLabel:
          'English strands',
        action:
          'Open English',
        branchesLabel:
          'English curriculum strands',
      },
      chemistry: {
        title:
          'Chemistry',
        description:
          'A structured chemistry curriculum covering matter, atoms, bonding, reactions, stoichiometry, solutions, equilibrium, kinetics, organic chemistry, nuclear chemistry, and energy.',
        gradeRange:
          'Grades 5, 8–12',
        unitLabel:
          'chemistry strands',
        action:
          'Open Chemistry',
        branchesLabel:
          'Chemistry curriculum strands',
      },
      physics: {
        title:
          'Physics',
        description:
          'A complete physics learning map covering motion, forces, energy, momentum, electricity, electromagnetism, waves, optics, thermal physics, vectors, oscillations, and modern physics.',
        gradeRange:
          'Grades 5–12',
        unitLabel:
          'physics strands',
        action:
          'Open Physics',
        branchesLabel:
          'Physics curriculum strands',
      },
      generalScience: {
        title:
          'General Science',
        description:
          'An integrated science curriculum connecting life science, Earth and space science, scientific inquiry, laboratory skills, measurement, ecology, genetics, human systems, and engineering structures.',
        gradeRange:
          'Grades 5–12',
        unitLabel:
          'General Science strands',
        action:
          'Open General Science',
        branchesLabel:
          'General Science curriculum strands',
      },
      frenchProgram: {
        title:
          'Programme français',
        description:
          'Un espace entièrement en français pour apprendre le français et les mathématiques, de la 1re à la 12e année.',
        gradeRange:
          '1re–12e année',
        unitLabel:
          'parcours',
        action:
          'Ouvrir le Programme français',
        branchesLabel:
          'Parcours du programme',
      },
    },
    cta: {
      eyebrow:
        'Personalized guidance',
      title:
        'Not sure which subject pathway to choose?',
      description:
        'Tell us the student’s grade, current level, and learning goal. Our team will help identify the right starting point and tutor.',
      primary:
        'Contact us',
      secondary:
        'Learn about Success Path Mentors',
    },
  },
  ar: {
    seo: {
      title:
        'مواد التدريس أونلاين | الرياضيات والإنجليزية والكيمياء والفيزياء والعلوم العامة | Success Path Mentors',
      description:
        'استكشف مناهج الرياضيات واللغة الإنجليزية والكيمياء والفيزياء والعلوم العامة في Success Path Mentors، منظمة حسب المادة والمسار والصف.',
      pathname:
        '/subjects',
    },
    breadcrumb: {
      ariaLabel:
        'مسار التنقل لصفحة المواد',
      home:
        'الرئيسية',
      current:
        'المواد',
    },
    hero: {
      eyebrow:
        'المواد والمناهج',
      title:
        'استكشف ست مواد تعليمية منظمة',
      description:
        'اختر المادة، وراجع هيكل المنهج الكامل، وانتقل إلى المسار الذي يناسب صف الطالب وهدفه التعليمي.',
      stats: {
        subjects:
          'المواد الأساسية',
        pathways:
          'مسارات المنهج',
        grades:
          'تغطية الصفوف',
      },
    },
    directory: {
      eyebrow:
        'دليل المواد',
      title:
        'مسارات منهج واضحة لكل طالب',
      description:
        'لكل مادة صفحة رئيسية وصفحات مستقلة لكل مسار أو قسم معتمد في المنهج.',
      math: {
        title:
          'الرياضيات',
        description:
          'دعم منظم يبدأ من أساسيات الأعداد والكسور، ويمتد إلى الجبر والدوال والهندسة والإحصاء والثقافة المالية وما قبل التفاضل.',
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
      chemistry: {
        title:
          'الكيمياء',
        description:
          'منهج منظم يشمل المادة والذرات والروابط والتفاعلات والحسابات الستوكيومترية والمحاليل والاتزان والحركية والكيمياء العضوية والنووية والطاقة.',
        gradeRange:
          'الصفوف 5 و8–12',
        unitLabel:
          'مسارًا للكيمياء',
        action:
          'فتح صفحة الكيمياء',
        branchesLabel:
          'مسارات منهج الكيمياء',
      },
      physics: {
        title:
          'الفيزياء',
        description:
          'خريطة متكاملة تشمل الحركة والقوى والطاقة والزخم والكهرباء والكهرومغناطيسية والموجات والبصريات والحرارة والمتجهات والاهتزازات والفيزياء الحديثة.',
        gradeRange:
          'الصفوف 5–12',
        unitLabel:
          'مسارًا للفيزياء',
        action:
          'فتح صفحة الفيزياء',
        branchesLabel:
          'مسارات منهج الفيزياء',
      },
      generalScience: {
        title:
          'العلوم العامة',
        description:
          'منهج متكامل يربط علوم الحياة وعلوم الأرض والفضاء والاستقصاء العلمي ومهارات المختبر والقياس والبيئة والوراثة وأجهزة الجسم والهياكل الهندسية.',
        gradeRange:
          'الصفوف 5–12',
        unitLabel:
          'مسارات للعلوم العامة',
        action:
          'فتح صفحة العلوم العامة',
        branchesLabel:
          'مسارات منهج العلوم العامة',
      },
      frenchProgram: {
        title:
          'Programme français',
        description:
          'Un espace entièrement en français pour apprendre le français et les mathématiques, de la 1re à la 12e année.',
        gradeRange:
          '1re–12e année',
        unitLabel:
          'parcours',
        action:
          'Ouvrir le Programme français',
        branchesLabel:
          'Parcours du programme',
      },
    },
    cta: {
      eyebrow:
        'توجيه شخصي',
      title:
        'لست متأكدًا من المسار المناسب؟',
      description:
        'أخبرنا بصف الطالب ومستواه الحالي وهدفه التعليمي، وسيساعدك فريقنا في تحديد نقطة البداية والمدرس المناسب.',
      primary:
        'تواصل معنا',
      secondary:
        'تعرّف إلى Success Path Mentors',
    },
  },
} as const;

export function getSubjectsPageContent(
  locale: SiteLocale
) {
  return subjectsPageContent[locale];
}

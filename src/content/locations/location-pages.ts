
import type {
  SiteLocale,
} from '@/config/site';
import type {
  LocalizedLocationPage,
  LocationFeature,
  LocationPageDefinition,
} from '@/types/location';

const commonServices: LocationFeature[] = [
  {
    title: { en: 'One-to-one online tutoring', ar: 'دروس فردية مباشرة أونلاين' },
    description: {
      en: 'Lessons are matched to the student’s city, grade, subject, curriculum, school context, current level, and learning goal.',
      ar: 'تُطابق الدروس مع مدينة الطالب وصفه ومادته ومنهاجه وسياق مدرسته ومستواه الحالي وهدفه التعليمي.',
    },
    icon: 'book',
  },
  {
    title: { en: 'Homework and curriculum support', ar: 'دعم الواجبات والمنهاج' },
    description: {
      en: 'Tutors reinforce current coursework, explain difficult concepts, and rebuild missing foundations.',
      ar: 'يساعد المدرس في المقررات الحالية وشرح المفاهيم الصعبة وبناء الأساسيات المفقودة.',
    },
    icon: 'check',
  },
  {
    title: { en: 'Assessment preparation', ar: 'التحضير للاختبارات' },
    description: {
      en: 'Preparation focuses on assessments relevant to the student’s province, state, grade, district, or course.',
      ar: 'يركز التحضير على الاختبارات المرتبطة بمقاطعة الطالب أو ولايته أو صفه أو منطقته التعليمية أو مقرره.',
    },
    icon: 'graduation',
  },
  {
    title: { en: 'Arabic family communication', ar: 'تواصل مع الأسرة بالعربية' },
    description: {
      en: 'Arabic communication may be available for parents while schoolwork remains aligned with the student’s official language of instruction.',
      ar: 'قد يتوفر التواصل بالعربية مع ولي الأمر مع بقاء العمل المدرسي متوافقًا مع لغة التدريس الرسمية للطالب.',
    },
    icon: 'message',
  },
];

const commonGrades: LocationFeature[] = [
  {
    title: { en: 'Elementary school', ar: 'المرحلة الابتدائية' },
    description: {
      en: 'Reading, writing, number sense, foundational science, study routines, and confidence.',
      ar: 'القراءة والكتابة ومفاهيم الأعداد والعلوم التأسيسية وعادات الدراسة وبناء الثقة.',
    },
    icon: 'book',
  },
  {
    title: { en: 'Middle years', ar: 'المرحلة المتوسطة' },
    description: {
      en: 'Stronger subject foundations, problem solving, academic vocabulary, and transition support.',
      ar: 'تقوية أساسيات المواد وحل المسائل والمفردات الأكاديمية ودعم الانتقال.',
    },
    icon: 'layers',
  },
  {
    title: { en: 'High school', ar: 'المرحلة الثانوية' },
    description: {
      en: 'Course-specific tutoring, credit support, assessment preparation, and postsecondary planning.',
      ar: 'دعم المقررات المعتمدة والاختبارات والتخطيط للكلية أو الجامعة.',
    },
    icon: 'graduation',
  },
];

const coreSubjects = [
  {
    label: { en: 'Mathematics', ar: 'الرياضيات' },
    description: {
      en: 'Number skills, algebra, functions, geometry, statistics, financial literacy, and advanced mathematics.',
      ar: 'الأعداد والجبر والدوال والهندسة والإحصاء والثقافة المالية والرياضيات المتقدمة.',
    },
    hrefType: 'localized-subject' as const,
    hrefValue: 'math',
  },
  {
    label: { en: 'English', ar: 'اللغة الإنجليزية' },
    description: {
      en: 'Reading, writing, grammar, comprehension, vocabulary, fluency, and academic assignments.',
      ar: 'القراءة والكتابة والقواعد والفهم والمفردات والطلاقة والواجبات الأكاديمية.',
    },
    hrefType: 'localized-subject' as const,
    hrefValue: 'english',
  },
  {
    label: { en: 'General Science', ar: 'العلوم العامة' },
    description: {
      en: 'Life science, Earth and space science, inquiry, laboratory concepts, and engineering.',
      ar: 'علوم الحياة والأرض والفضاء والاستقصاء ومفاهيم المختبر والهندسة.',
    },
    hrefType: 'localized-subject' as const,
    hrefValue: 'general-science',
  },
  {
    label: { en: 'Chemistry', ar: 'الكيمياء' },
    description: {
      en: 'Matter, bonding, reactions, stoichiometry, solutions, equilibrium, kinetics, organic chemistry, and energy.',
      ar: 'المادة والروابط والتفاعلات والحسابات الكيميائية والمحاليل والاتزان والحركية والكيمياء العضوية والطاقة.',
    },
    hrefType: 'localized-subject' as const,
    hrefValue: 'chemistry',
  },
  {
    label: { en: 'Physics', ar: 'الفيزياء' },
    description: {
      en: 'Motion, forces, energy, electricity, waves, optics, momentum, thermal physics, and modern physics.',
      ar: 'الحركة والقوى والطاقة والكهرباء والموجات والبصريات والزخم والفيزياء الحرارية والحديثة.',
    },
    hrefType: 'localized-subject' as const,
    hrefValue: 'physics',
  },
  {
    label: { en: 'French and mathematics in French', ar: 'الفرنسية والرياضيات بالفرنسية' },
    description: {
      en: 'A separate French-only curriculum area for French language learning and mathematics taught in French.',
      ar: 'قسم فرنسي مستقل لتعليم اللغة الفرنسية والرياضيات باللغة الفرنسية.',
    },
    hrefType: 'absolute' as const,
    hrefValue: '/fr/programme-francais',
  },
];

const commonFaqs = [
  {
    question: {
      en: 'Are tutors physically located in this city?',
      ar: 'هل يوجد المدرسون داخل هذه المدينة؟',
    },
    answer: {
      en: 'The service is online. The page describes students and curricula served in the location and does not claim a physical branch or locally resident tutor.',
      ar: 'الخدمة أونلاين. تصف الصفحة الطلاب والمناهج التي نخدمها في الموقع ولا تدعي وجود فرع أو مدرس مقيم محليًا.',
    },
  },
  {
    question: {
      en: 'Can the tutor follow the student’s exact curriculum?',
      ar: 'هل يستطيع المدرس اتباع منهاج الطالب بدقة؟',
    },
    answer: {
      en: 'Tutor matching considers the province or state, district or board, grade, course, assessment, and materials supplied by the family.',
      ar: 'تراعي المطابقة المقاطعة أو الولاية والمنطقة أو المجلس والصف والمقرر والاختبار والمواد التي تقدمها الأسرة.',
    },
  },
  {
    question: {
      en: 'Can parents communicate in Arabic?',
      ar: 'هل يمكن لولي الأمر التواصل بالعربية؟',
    },
    answer: {
      en: 'Arabic family communication may be available, depending on team and tutor availability. Academic work follows the student’s school language and curriculum.',
      ar: 'قد يتوفر التواصل بالعربية حسب توفر الفريق والمدرس، بينما يتبع العمل الأكاديمي لغة المدرسة والمنهاج.',
    },
  },
];

function resources(items: Array<[string,string,string,string]>) {
  return items.map(([name, en, url, type]) => ({
    name,
    description: { en, ar: en },
    url,
    type: type as any,
  }));
}

export const locationPages: LocationPageDefinition[] = [
  {
    "id": "locations",
    "level": "index",
    "segments": [],
    "childIds": [
      "canada",
      "united-states"
    ],
    "relatedIds": [
      "ontario-curriculum",
      "quebec-education-program",
      "michigan-academic-standards"
    ],
    "name": {
      "en": "Locations",
      "ar": "المواقع"
    },
    "shortName": {
      "en": "Locations",
      "ar": "المواقع"
    },
    "eyebrow": {
      "en": "Online tutoring in Locations",
      "ar": "دروس أونلاين في المواقع"
    },
    "seo": {
      "title": {
        "en": "Online Tutoring Locations | Mustafa Academy",
        "ar": "مواقع الدروس الخصوصية أونلاين | أكاديمية مصطفى"
      },
      "description": {
        "en": "Explore a structured location directory built around countries, provinces or states, local curricula, and city-specific student needs. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "استكشف دليل مواقع منظمًا حسب الدول والمقاطعات أو الولايات والمناهج المحلية واحتياجات الطلاب داخل المدن. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "online tutoring locations",
        "ar": "مواقع الدروس الخصوصية أونلاين"
      },
      "secondaryKeywords": {
        "en": [
          "online tutoring locations",
          "online tutors serving Locations",
          "Arabic-speaking tutor Locations",
          "math tutoring Locations"
        ],
        "ar": [
          "مواقع الدروس الخصوصية أونلاين",
          "مدرسون أونلاين يخدمون طلاب المواقع",
          "مدرس يتحدث العربية في المواقع",
          "دروس رياضيات في المواقع"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Locations",
        "ar": "دروس أونلاين للطلاب في المواقع"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Locations",
      "ar": "دروس خصوصية أونلاين للطلاب في المواقع"
    },
    "heroDescription": {
      "en": "Explore a structured location directory built around countries, provinces or states, local curricula, and city-specific student needs.",
      "ar": "استكشف دليل مواقع منظمًا حسب الدول والمقاطعات أو الولايات والمناهج المحلية واحتياجات الطلاب داخل المدن."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Locations",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في المواقع"
    },
    "introduction": {
      "en": "Explore a structured location directory built around countries, provinces or states, local curricula, and city-specific student needs. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "استكشف دليل مواقع منظمًا حسب الدول والمقاطعات أو الولايات والمناهج المحلية واحتياجات الطلاب داخل المدن. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Locations students",
      "ar": "خدمات التدريس لطلاب المواقع"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Locations",
      "ar": "المواد المتاحة لطلاب المواقع"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Locations",
      "ar": "دعم المنهاج والنظام المدرسي في المواقع"
    },
    "curriculumDescription": {
      "en": "Explore a structured location directory built around countries, provinces or states, local curricula, and city-specific student needs.",
      "ar": "استكشف دليل مواقع منظمًا حسب الدول والمقاطعات أو الولايات والمناهج المحلية واحتياجات الطلاب داخل المدن."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Locations",
      "ar": "دليل التعليم المحلي في المواقع"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "The hierarchy is country → province or state → curriculum → city.",
        "Each city page targets local search intent through useful educational content.",
        "Wave 1 publishes Ontario, Quebec, and Michigan.",
        "More areas remain unpublished until research and content quality are sufficient."
      ],
      "ar": [
        "المسار هو الدولة ← المقاطعة أو الولاية ← المنهاج ← المدينة.",
        "تستهدف كل صفحة مدينة نية البحث المحلي عبر محتوى تعليمي مفيد.",
        "تنشر الدفعة الأولى أونتاريو وكيبيك وميشيغان.",
        "تبقى المناطق الأخرى غير منشورة حتى اكتمال البحث وجودة المحتوى."
      ]
    },
    "resources": [
    {
      "name": "Statistics Canada — Arab populations in Canada",
      "description": {
        "en": "Official demographic context for Canadian metropolitan areas.",
        "ar": "Official demographic context for Canadian metropolitan areas."
      },
      "url": "https://www150.statcan.gc.ca/n1/pub/89-657-x/89-657-x2025005-eng.htm",
      "type": "municipal"
    },
    {
      "name": "Michigan Department of Education",
      "description": {
        "en": "Official Michigan standards and assessment information.",
        "ar": "Official Michigan standards and assessment information."
      },
      "url": "https://www.michigan.gov/mde",
      "type": "education-authority"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Locations",
      "ar": "أسئلة شائعة عن التدريس في المواقع"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "canada",
    "level": "country",
    "countryCode": "CA",
    "segments": [
      "canada"
    ],
    "parentId": "locations",
    "childIds": [
      "ontario",
      "quebec"
    ],
    "relatedIds": [],
    "name": {
      "en": "Canada",
      "ar": "كندا"
    },
    "shortName": {
      "en": "Canada",
      "ar": "كندا"
    },
    "eyebrow": {
      "en": "Online tutoring in Canada",
      "ar": "دروس أونلاين في كندا"
    },
    "seo": {
      "title": {
        "en": "Online Tutoring In Canada | Mustafa Academy",
        "ar": "دروس خصوصية أونلاين في كندا | أكاديمية مصطفى"
      },
      "description": {
        "en": "Canada’s school system is organized by province and territory, so tutoring must follow the student’s local curriculum, grade terminology, course sequence, and assessment requirements. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "يُنظَّم التعليم في كندا حسب المقاطعة أو الإقليم، لذلك يجب أن تراعي الدروس المنهاج المحلي ومسميات الصفوف وتسلسل المقررات والاختبارات. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "online tutoring in Canada",
        "ar": "دروس خصوصية أونلاين في كندا"
      },
      "secondaryKeywords": {
        "en": [
          "online tutoring in Canada",
          "online tutors serving Canada",
          "Arabic-speaking tutor Canada",
          "math tutoring Canada"
        ],
        "ar": [
          "دروس خصوصية أونلاين في كندا",
          "مدرسون أونلاين يخدمون طلاب كندا",
          "مدرس يتحدث العربية في كندا",
          "دروس رياضيات في كندا"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Canada",
        "ar": "دروس أونلاين للطلاب في كندا"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Canada",
      "ar": "دروس خصوصية أونلاين للطلاب في كندا"
    },
    "heroDescription": {
      "en": "Canada’s school system is organized by province and territory, so tutoring must follow the student’s local curriculum, grade terminology, course sequence, and assessment requirements.",
      "ar": "يُنظَّم التعليم في كندا حسب المقاطعة أو الإقليم، لذلك يجب أن تراعي الدروس المنهاج المحلي ومسميات الصفوف وتسلسل المقررات والاختبارات."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Canada",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في كندا"
    },
    "introduction": {
      "en": "Canada’s school system is organized by province and territory, so tutoring must follow the student’s local curriculum, grade terminology, course sequence, and assessment requirements. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "يُنظَّم التعليم في كندا حسب المقاطعة أو الإقليم، لذلك يجب أن تراعي الدروس المنهاج المحلي ومسميات الصفوف وتسلسل المقررات والاختبارات. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Canada students",
      "ar": "خدمات التدريس لطلاب كندا"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Canada",
      "ar": "المواد المتاحة لطلاب كندا"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Canada",
      "ar": "دعم المنهاج والنظام المدرسي في كندا"
    },
    "curriculumDescription": {
      "en": "Canada’s school system is organized by province and territory, so tutoring must follow the student’s local curriculum, grade terminology, course sequence, and assessment requirements.",
      "ar": "يُنظَّم التعليم في كندا حسب المقاطعة أو الإقليم، لذلك يجب أن تراعي الدروس المنهاج المحلي ومسميات الصفوف وتسلسل المقررات والاختبارات."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Canada",
      "ar": "دليل التعليم المحلي في كندا"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "The first published Canadian hubs focus on Ontario and Quebec.",
        "Ontario pages connect students to the Ontario Curriculum, EQAO Grade 9 Mathematics, and the OSSLT where relevant.",
        "Quebec pages connect students to the Québec Education Program and the province’s elementary and secondary pathways.",
        "Arabic family communication is available subject to tutor and team availability."
      ],
      "ar": [
        "تركز الدفعة الكندية الأولى على أونتاريو وكيبيك.",
        "تربط صفحات أونتاريو الطلاب بمنهاج أونتاريو واختبار رياضيات الصف التاسع EQAO وOSSLT عند الحاجة.",
        "تربط صفحات كيبيك الطلاب ببرنامج التعليم في كيبيك ومسارات المرحلتين الابتدائية والثانوية.",
        "يتوفر التواصل مع الأسر بالعربية حسب توفر الفريق والمدرس المناسب."
      ]
    },
    "resources": [
    {
      "name": "Statistics Canada — Arab populations in Canada",
      "description": {
        "en": "Official demographic context for Arab communities across major Canadian metropolitan areas.",
        "ar": "Official demographic context for Arab communities across major Canadian metropolitan areas."
      },
      "url": "https://www150.statcan.gc.ca/n1/pub/89-657-x/89-657-x2025005-eng.htm",
      "type": "municipal"
    },
    {
      "name": "Council of Ministers of Education, Canada",
      "description": {
        "en": "Overview of education systems across Canadian provinces and territories.",
        "ar": "Overview of education systems across Canadian provinces and territories."
      },
      "url": "https://www.cmec.ca/",
      "type": "education-authority"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Canada",
      "ar": "أسئلة شائعة عن التدريس في كندا"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "united-states",
    "level": "country",
    "countryCode": "US",
    "segments": [
      "united-states"
    ],
    "parentId": "locations",
    "childIds": [
      "michigan"
    ],
    "relatedIds": [],
    "name": {
      "en": "United States",
      "ar": "الولايات المتحدة"
    },
    "shortName": {
      "en": "United States",
      "ar": "الولايات المتحدة"
    },
    "eyebrow": {
      "en": "Online tutoring in United States",
      "ar": "دروس أونلاين في الولايات المتحدة"
    },
    "seo": {
      "title": {
        "en": "Online Tutoring In The United States | Mustafa Academy",
        "ar": "دروس خصوصية أونلاين في الولايات المتحدة | أكاديمية مصطفى"
      },
      "description": {
        "en": "Tutoring in the United States must account for state academic standards, district course structures, local graduation pathways, and state or college-readiness assessments. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "يجب أن تراعي الدروس في الولايات المتحدة معايير الولاية وبنية المقررات في المنطقة التعليمية ومتطلبات التخرج واختبارات الولاية والاستعداد للكلية. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "online tutoring in the United States",
        "ar": "دروس خصوصية أونلاين في الولايات المتحدة"
      },
      "secondaryKeywords": {
        "en": [
          "online tutoring in the United States",
          "online tutors serving United States",
          "Arabic-speaking tutor United States",
          "math tutoring United States"
        ],
        "ar": [
          "دروس خصوصية أونلاين في الولايات المتحدة",
          "مدرسون أونلاين يخدمون طلاب الولايات المتحدة",
          "مدرس يتحدث العربية في الولايات المتحدة",
          "دروس رياضيات في الولايات المتحدة"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in United States",
        "ar": "دروس أونلاين للطلاب في الولايات المتحدة"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in United States",
      "ar": "دروس خصوصية أونلاين للطلاب في الولايات المتحدة"
    },
    "heroDescription": {
      "en": "Tutoring in the United States must account for state academic standards, district course structures, local graduation pathways, and state or college-readiness assessments.",
      "ar": "يجب أن تراعي الدروس في الولايات المتحدة معايير الولاية وبنية المقررات في المنطقة التعليمية ومتطلبات التخرج واختبارات الولاية والاستعداد للكلية."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in United States",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في الولايات المتحدة"
    },
    "introduction": {
      "en": "Tutoring in the United States must account for state academic standards, district course structures, local graduation pathways, and state or college-readiness assessments. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "يجب أن تراعي الدروس في الولايات المتحدة معايير الولاية وبنية المقررات في المنطقة التعليمية ومتطلبات التخرج واختبارات الولاية والاستعداد للكلية. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for United States students",
      "ar": "خدمات التدريس لطلاب الولايات المتحدة"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in United States",
      "ar": "المواد المتاحة لطلاب الولايات المتحدة"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in United States",
      "ar": "دعم المنهاج والنظام المدرسي في الولايات المتحدة"
    },
    "curriculumDescription": {
      "en": "Tutoring in the United States must account for state academic standards, district course structures, local graduation pathways, and state or college-readiness assessments.",
      "ar": "يجب أن تراعي الدروس في الولايات المتحدة معايير الولاية وبنية المقررات في المنطقة التعليمية ومتطلبات التخرج واختبارات الولاية والاستعداد للكلية."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for United States",
      "ar": "دليل التعليم المحلي في الولايات المتحدة"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "The first United States hub focuses on Michigan and the Detroit–Dearborn area.",
        "Michigan pages connect students to Michigan Academic Standards, M-STEP, PSAT, SAT, and the Michigan Merit Examination where relevant.",
        "City pages identify the public school districts serving each community without implying partnership.",
        "Lessons remain fully online and may serve students across local district boundaries."
      ],
      "ar": [
        "تركز الدفعة الأمريكية الأولى على ميشيغان ومنطقة ديترويت–ديربورن.",
        "تربط صفحات ميشيغان الطلاب بمعايير الولاية واختبارات M-STEP وPSAT وSAT وMichigan Merit Examination عند الحاجة.",
        "توضح صفحات المدن المناطق التعليمية العامة ذات الصلة دون الإيحاء بوجود شراكة.",
        "تُقدَّم الدروس أونلاين ويمكنها خدمة الطلاب عبر حدود المناطق التعليمية المحلية."
      ]
    },
    "resources": [
    {
      "name": "U.S. Department of Education",
      "description": {
        "en": "Federal education information and resources for families and students.",
        "ar": "Federal education information and resources for families and students."
      },
      "url": "https://www.ed.gov/",
      "type": "education-authority"
    },
    {
      "name": "Michigan Department of Education",
      "description": {
        "en": "Official standards, assessment, and school-system information for Michigan.",
        "ar": "Official standards, assessment, and school-system information for Michigan."
      },
      "url": "https://www.michigan.gov/mde",
      "type": "education-authority"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in United States",
      "ar": "أسئلة شائعة عن التدريس في الولايات المتحدة"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "ontario",
    "level": "region",
    "countryCode": "CA",
    "segments": [
      "canada",
      "ontario"
    ],
    "parentId": "canada",
    "childIds": [
      "ontario-curriculum"
    ],
    "relatedIds": [],
    "name": {
      "en": "Ontario",
      "ar": "أونتاريو"
    },
    "shortName": {
      "en": "Ontario",
      "ar": "أونتاريو"
    },
    "eyebrow": {
      "en": "Online tutoring in Ontario",
      "ar": "دروس أونلاين في أونتاريو"
    },
    "seo": {
      "title": {
        "en": "Ontario Curriculum Tutoring | Mustafa Academy",
        "ar": "تدريس منهاج أونتاريو | أكاديمية مصطفى"
      },
      "description": {
        "en": "Ontario tutoring should align with the provincial curriculum, local course codes, graduation requirements, and province-wide assessments such as EQAO Grade 9 Mathematics and the OSSLT. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "يجب أن تتوافق الدروس في أونتاريو مع المنهاج الإقليمي ورموز المقررات ومتطلبات التخرج واختبارات المقاطعة مثل EQAO للصف التاسع وOSSLT. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "Ontario curriculum tutoring",
        "ar": "تدريس منهاج أونتاريو"
      },
      "secondaryKeywords": {
        "en": [
          "Ontario curriculum tutoring",
          "online tutors serving Ontario",
          "Arabic-speaking tutor Ontario",
          "math tutoring Ontario"
        ],
        "ar": [
          "تدريس منهاج أونتاريو",
          "مدرسون أونلاين يخدمون طلاب أونتاريو",
          "مدرس يتحدث العربية في أونتاريو",
          "دروس رياضيات في أونتاريو"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Ontario",
        "ar": "دروس أونلاين للطلاب في أونتاريو"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Ontario",
      "ar": "دروس خصوصية أونلاين للطلاب في أونتاريو"
    },
    "heroDescription": {
      "en": "Ontario tutoring should align with the provincial curriculum, local course codes, graduation requirements, and province-wide assessments such as EQAO Grade 9 Mathematics and the OSSLT.",
      "ar": "يجب أن تتوافق الدروس في أونتاريو مع المنهاج الإقليمي ورموز المقررات ومتطلبات التخرج واختبارات المقاطعة مثل EQAO للصف التاسع وOSSLT."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Ontario",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في أونتاريو"
    },
    "introduction": {
      "en": "Ontario tutoring should align with the provincial curriculum, local course codes, graduation requirements, and province-wide assessments such as EQAO Grade 9 Mathematics and the OSSLT. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "يجب أن تتوافق الدروس في أونتاريو مع المنهاج الإقليمي ورموز المقررات ومتطلبات التخرج واختبارات المقاطعة مثل EQAO للصف التاسع وOSSLT. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Ontario students",
      "ar": "خدمات التدريس لطلاب أونتاريو"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Ontario",
      "ar": "المواد المتاحة لطلاب أونتاريو"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Ontario",
      "ar": "دعم المنهاج والنظام المدرسي في أونتاريو"
    },
    "curriculumDescription": {
      "en": "Ontario tutoring should align with the provincial curriculum, local course codes, graduation requirements, and province-wide assessments such as EQAO Grade 9 Mathematics and the OSSLT.",
      "ar": "يجب أن تتوافق الدروس في أونتاريو مع المنهاج الإقليمي ورموز المقررات ومتطلبات التخرج واختبارات المقاطعة مثل EQAO للصف التاسع وOSSLT."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "EQAO Grade 9 Mathematics",
        "description": {
          "en": "Assessment connected to the Grade 9 de-streamed mathematics course and Ontario mathematics expectations.",
          "ar": "تقييم مرتبط بمقرر رياضيات الصف التاسع الموحد وتوقعات منهاج أونتاريو."
        }
      },
      {
        "name": "OSSLT",
        "description": {
          "en": "The Ontario Secondary School Literacy Test is relevant to the provincial secondary-school literacy requirement.",
          "ar": "اختبار محو الأمية للمرحلة الثانوية المرتبط بمتطلب القراءة والكتابة في أونتاريو."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Ontario",
      "ar": "دليل التعليم المحلي في أونتاريو"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Published Ontario cities in Wave 1: Toronto, Mississauga, Milton, Ottawa, Windsor, and London.",
        "Pages link to the Ontario Curriculum before moving into local city content.",
        "Elementary, middle-years, and secondary support use Ontario grade and course language.",
        "Local boards are listed only as public references; Mustafa Academy is not affiliated with them."
      ],
      "ar": [
        "مدن أونتاريو المنشورة في الدفعة الأولى: تورونتو وميسيساغا وميلتون وأوتاوا وويندسور ولندن.",
        "تمر الصفحات أولًا عبر منهاج أونتاريو قبل الوصول إلى محتوى المدينة المحلي.",
        "يستخدم دعم المراحل المختلفة مسميات الصفوف والمقررات المعتمدة في أونتاريو.",
        "تُذكر مجالس التعليم كمراجع عامة فقط ولا توجد شراكة بينها وبين الأكاديمية."
      ]
    },
    "resources": [
    {
      "name": "Ontario Curriculum",
      "description": {
        "en": "Official curriculum and learning expectations for Ontario schools.",
        "ar": "Official curriculum and learning expectations for Ontario schools."
      },
      "url": "https://www.dcp.edu.gov.on.ca/en/",
      "type": "education-authority"
    },
    {
      "name": "EQAO",
      "description": {
        "en": "Official Ontario assessment information for students, families, and educators.",
        "ar": "Official Ontario assessment information for students, families, and educators."
      },
      "url": "https://www.eqao.com/",
      "type": "assessment"
    },
    {
      "name": "Ontario school boards",
      "description": {
        "en": "Official provincial directory for school boards and authorities.",
        "ar": "Official provincial directory for school boards and authorities."
      },
      "url": "https://www.ontario.ca/page/find-school-board-or-school-authority",
      "type": "education-authority"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Ontario",
      "ar": "أسئلة شائعة عن التدريس في أونتاريو"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "quebec",
    "level": "region",
    "countryCode": "CA",
    "segments": [
      "canada",
      "quebec"
    ],
    "parentId": "canada",
    "childIds": [
      "quebec-education-program"
    ],
    "relatedIds": [],
    "name": {
      "en": "Quebec",
      "ar": "كيبيك"
    },
    "shortName": {
      "en": "Quebec",
      "ar": "كيبيك"
    },
    "eyebrow": {
      "en": "Online tutoring in Quebec",
      "ar": "دروس أونلاين في كيبيك"
    },
    "seo": {
      "title": {
        "en": "Quebec Curriculum Tutoring | Mustafa Academy",
        "ar": "تدريس منهاج كيبيك | أكاديمية مصطفى"
      },
      "description": {
        "en": "Quebec tutoring should follow the Québec Education Program, the elementary and secondary cycle structure, language-of-instruction rules, and relevant ministerial evaluation requirements. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "يجب أن تتبع الدروس في كيبيك برنامج التعليم في كيبيك وبنية المراحل الابتدائية والثانوية ولغة التدريس ومتطلبات التقييم الوزاري ذات الصلة. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "Quebec curriculum tutoring",
        "ar": "تدريس منهاج كيبيك"
      },
      "secondaryKeywords": {
        "en": [
          "Quebec curriculum tutoring",
          "online tutors serving Quebec",
          "Arabic-speaking tutor Quebec",
          "math tutoring Quebec"
        ],
        "ar": [
          "تدريس منهاج كيبيك",
          "مدرسون أونلاين يخدمون طلاب كيبيك",
          "مدرس يتحدث العربية في كيبيك",
          "دروس رياضيات في كيبيك"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Quebec",
        "ar": "دروس أونلاين للطلاب في كيبيك"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Quebec",
      "ar": "دروس خصوصية أونلاين للطلاب في كيبيك"
    },
    "heroDescription": {
      "en": "Quebec tutoring should follow the Québec Education Program, the elementary and secondary cycle structure, language-of-instruction rules, and relevant ministerial evaluation requirements.",
      "ar": "يجب أن تتبع الدروس في كيبيك برنامج التعليم في كيبيك وبنية المراحل الابتدائية والثانوية ولغة التدريس ومتطلبات التقييم الوزاري ذات الصلة."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Quebec",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في كيبيك"
    },
    "introduction": {
      "en": "Quebec tutoring should follow the Québec Education Program, the elementary and secondary cycle structure, language-of-instruction rules, and relevant ministerial evaluation requirements. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "يجب أن تتبع الدروس في كيبيك برنامج التعليم في كيبيك وبنية المراحل الابتدائية والثانوية ولغة التدريس ومتطلبات التقييم الوزاري ذات الصلة. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Quebec students",
      "ar": "خدمات التدريس لطلاب كيبيك"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Quebec",
      "ar": "المواد المتاحة لطلاب كيبيك"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Quebec",
      "ar": "دعم المنهاج والنظام المدرسي في كيبيك"
    },
    "curriculumDescription": {
      "en": "Quebec tutoring should follow the Québec Education Program, the elementary and secondary cycle structure, language-of-instruction rules, and relevant ministerial evaluation requirements.",
      "ar": "يجب أن تتبع الدروس في كيبيك برنامج التعليم في كيبيك وبنية المراحل الابتدائية والثانوية ولغة التدريس ومتطلبات التقييم الوزاري ذات الصلة."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "Secondary IV and V ministerial examinations",
        "description": {
          "en": "Support may focus on course-specific ministerial examinations and final secondary results where relevant.",
          "ar": "يمكن أن يركز الدعم على الامتحانات الوزارية الخاصة بالمقررات ونتائج المرحلتين الرابعة والخامسة الثانوية عند الحاجة."
        }
      },
      {
        "name": "School and centre service assessments",
        "description": {
          "en": "Tutoring can also support classroom assessments and locally assigned work.",
          "ar": "يمكن للدروس دعم تقييمات المدرسة والواجبات التي تحددها مراكز الخدمات المدرسية."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Quebec",
      "ar": "دليل التعليم المحلي في كيبيك"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Published Quebec cities in Wave 1: Montréal, Laval, Brossard, and Gatineau.",
        "The Quebec hub connects families to French-language and English-language learning pathways where eligibility applies.",
        "The separate French Program on the website supports French and mathematics taught in French.",
        "City pages reference centres de services scolaires and English school boards only as public information."
      ],
      "ar": [
        "مدن كيبيك المنشورة في الدفعة الأولى: مونتريال ولافال وبروسار وغاتينو.",
        "يربط قسم كيبيك الأسر بمسارات التعليم الفرنسية والإنجليزية عند انطباق شروط الأهلية.",
        "يدعم القسم الفرنسي المستقل في الموقع اللغة الفرنسية والرياضيات باللغة الفرنسية.",
        "تُذكر مراكز الخدمات المدرسية والمجالس الإنجليزية كمعلومات عامة فقط."
      ]
    },
    "resources": [
    {
      "name": "Québec Education Program",
      "description": {
        "en": "Official preschool, elementary, and secondary programs of study.",
        "ar": "Official preschool, elementary, and secondary programs of study."
      },
      "url": "https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/quebec-education-program",
      "type": "education-authority"
    },
    {
      "name": "Quebec education system",
      "description": {
        "en": "Official explanation of preschool, elementary, secondary, college, and university education in Quebec.",
        "ar": "Official explanation of preschool, elementary, secondary, college, and university education in Quebec."
      },
      "url": "https://www.quebec.ca/en/education/study-quebec/education-system",
      "type": "education-authority"
    },
    {
      "name": "Ministerial examinations",
      "description": {
        "en": "Official information for secondary-school examinations and final results.",
        "ar": "Official information for secondary-school examinations and final results."
      },
      "url": "https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools",
      "type": "assessment"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Quebec",
      "ar": "أسئلة شائعة عن التدريس في كيبيك"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "michigan",
    "level": "region",
    "countryCode": "US",
    "segments": [
      "united-states",
      "michigan"
    ],
    "parentId": "united-states",
    "childIds": [
      "michigan-academic-standards"
    ],
    "relatedIds": [],
    "name": {
      "en": "Michigan",
      "ar": "ميشيغان"
    },
    "shortName": {
      "en": "Michigan",
      "ar": "ميشيغان"
    },
    "eyebrow": {
      "en": "Online tutoring in Michigan",
      "ar": "دروس أونلاين في ميشيغان"
    },
    "seo": {
      "title": {
        "en": "Michigan Standards Tutoring | Mustafa Academy",
        "ar": "تدريس معايير ميشيغان | أكاديمية مصطفى"
      },
      "description": {
        "en": "Michigan tutoring should align with Michigan Academic Standards, local district courses, M-STEP, PSAT, SAT, and the Michigan Merit Examination as appropriate to the student’s grade. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "يجب أن تتوافق الدروس في ميشيغان مع معايير الولاية ومقررات المنطقة التعليمية واختبارات M-STEP وPSAT وSAT وMichigan Merit Examination حسب صف الطالب. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "Michigan standards tutoring",
        "ar": "تدريس معايير ميشيغان"
      },
      "secondaryKeywords": {
        "en": [
          "Michigan standards tutoring",
          "online tutors serving Michigan",
          "Arabic-speaking tutor Michigan",
          "math tutoring Michigan"
        ],
        "ar": [
          "تدريس معايير ميشيغان",
          "مدرسون أونلاين يخدمون طلاب ميشيغان",
          "مدرس يتحدث العربية في ميشيغان",
          "دروس رياضيات في ميشيغان"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Michigan",
        "ar": "دروس أونلاين للطلاب في ميشيغان"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Michigan",
      "ar": "دروس خصوصية أونلاين للطلاب في ميشيغان"
    },
    "heroDescription": {
      "en": "Michigan tutoring should align with Michigan Academic Standards, local district courses, M-STEP, PSAT, SAT, and the Michigan Merit Examination as appropriate to the student’s grade.",
      "ar": "يجب أن تتوافق الدروس في ميشيغان مع معايير الولاية ومقررات المنطقة التعليمية واختبارات M-STEP وPSAT وSAT وMichigan Merit Examination حسب صف الطالب."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Michigan",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في ميشيغان"
    },
    "introduction": {
      "en": "Michigan tutoring should align with Michigan Academic Standards, local district courses, M-STEP, PSAT, SAT, and the Michigan Merit Examination as appropriate to the student’s grade. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "يجب أن تتوافق الدروس في ميشيغان مع معايير الولاية ومقررات المنطقة التعليمية واختبارات M-STEP وPSAT وSAT وMichigan Merit Examination حسب صف الطالب. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Michigan students",
      "ar": "خدمات التدريس لطلاب ميشيغان"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Michigan",
      "ar": "المواد المتاحة لطلاب ميشيغان"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Michigan",
      "ar": "دعم المنهاج والنظام المدرسي في ميشيغان"
    },
    "curriculumDescription": {
      "en": "Michigan tutoring should align with Michigan Academic Standards, local district courses, M-STEP, PSAT, SAT, and the Michigan Merit Examination as appropriate to the student’s grade.",
      "ar": "يجب أن تتوافق الدروس في ميشيغان مع معايير الولاية ومقررات المنطقة التعليمية واختبارات M-STEP وPSAT وSAT وMichigan Merit Examination حسب صف الطالب."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "M-STEP",
        "description": {
          "en": "Michigan’s standards-based assessment used across designated elementary, middle, and high-school grades.",
          "ar": "اختبار ميشيغان القائم على المعايير والمستخدم في صفوف محددة من المراحل المختلفة."
        }
      },
      {
        "name": "PSAT and SAT",
        "description": {
          "en": "College Board assessments are part of Michigan’s secondary assessment sequence.",
          "ar": "تدخل اختبارات College Board ضمن تسلسل التقييم في المرحلة الثانوية بميشيغان."
        }
      },
      {
        "name": "Michigan Merit Examination",
        "description": {
          "en": "The MME assesses Grade 11 and eligible Grade 12 students using SAT, work-readiness, science, and social-studies components.",
          "ar": "يقيم MME طلاب الصف الحادي عشر وبعض طلاب الثاني عشر عبر مكونات SAT والاستعداد للعمل والعلوم والدراسات الاجتماعية."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Michigan",
      "ar": "دليل التعليم المحلي في ميشيغان"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Published Michigan cities in Wave 1: Dearborn, Dearborn Heights, Sterling Heights, Hamtramck, and Detroit.",
        "The city pages focus on the Detroit metropolitan area, where Arabic-speaking families form an important audience.",
        "District names and official assessment links are supplied for family reference only.",
        "Tutor availability in Arabic depends on subject, grade, schedule, and staffing."
      ],
      "ar": [
        "مدن ميشيغان المنشورة في الدفعة الأولى: ديربورن وديربورن هايتس وستيرلينغ هايتس وهامترامك وديترويت.",
        "تركز صفحات المدن على منطقة ديترويت الحضرية التي تمثل جمهورًا مهمًا للأسر الناطقة بالعربية.",
        "تُعرض أسماء المناطق التعليمية وروابط التقييم الرسمية كمرجع للأسرة فقط.",
        "يعتمد توفر مدرس يتحدث العربية على المادة والصف والجدول والتوفر."
      ]
    },
    "resources": [
    {
      "name": "Michigan Academic Standards",
      "description": {
        "en": "Official academic standards and instructional resources.",
        "ar": "Official academic standards and instructional resources."
      },
      "url": "https://www.michigan.gov/mde/services/academic-standards",
      "type": "education-authority"
    },
    {
      "name": "M-STEP",
      "description": {
        "en": "Official Michigan Student Test of Educational Progress information.",
        "ar": "Official Michigan Student Test of Educational Progress information."
      },
      "url": "https://www.michigan.gov/mde/services/student-assessment/m-step",
      "type": "assessment"
    },
    {
      "name": "Michigan Merit Examination",
      "description": {
        "en": "Official Grade 11 and eligible Grade 12 assessment information.",
        "ar": "Official Grade 11 and eligible Grade 12 assessment information."
      },
      "url": "https://www.michigan.gov/mde/services/student-assessment/michigan-merit-examination-mme",
      "type": "assessment"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Michigan",
      "ar": "أسئلة شائعة عن التدريس في ميشيغان"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "ontario-curriculum",
    "level": "curriculum",
    "countryCode": "CA",
    "segments": [
      "canada",
      "ontario",
      "ontario-curriculum"
    ],
    "parentId": "ontario",
    "childIds": [
      "toronto",
      "mississauga",
      "milton",
      "ottawa",
      "windsor",
      "london"
    ],
    "relatedIds": [],
    "name": {
      "en": "Ontario Curriculum",
      "ar": "منهاج أونتاريو"
    },
    "shortName": {
      "en": "Ontario Curriculum",
      "ar": "منهاج أونتاريو"
    },
    "eyebrow": {
      "en": "Online tutoring in Ontario Curriculum",
      "ar": "دروس أونلاين في منهاج أونتاريو"
    },
    "seo": {
      "title": {
        "en": "Ontario Curriculum Online Tutoring | Mustafa Academy",
        "ar": "دروس أونلاين لمنهاج أونتاريو | أكاديمية مصطفى"
      },
      "description": {
        "en": "This hub organizes Ontario tutoring by city while keeping lesson planning connected to provincial expectations, course pathways, EQAO Grade 9 Mathematics, the OSSLT, and secondary-school credit requirements. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "ينظم هذا القسم دروس أونتاريو حسب المدينة مع ربط التخطيط بتوقعات المنهاج ومسارات المقررات وEQAO للصف التاسع وOSSLT ومتطلبات المقررات الثانوية. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "Ontario Curriculum online tutoring",
        "ar": "دروس أونلاين لمنهاج أونتاريو"
      },
      "secondaryKeywords": {
        "en": [
          "Ontario Curriculum online tutoring",
          "online tutors serving Ontario Curriculum",
          "Arabic-speaking tutor Ontario Curriculum",
          "math tutoring Ontario Curriculum"
        ],
        "ar": [
          "دروس أونلاين لمنهاج أونتاريو",
          "مدرسون أونلاين يخدمون طلاب منهاج أونتاريو",
          "مدرس يتحدث العربية في منهاج أونتاريو",
          "دروس رياضيات في منهاج أونتاريو"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Ontario Curriculum",
        "ar": "دروس أونلاين للطلاب في منهاج أونتاريو"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Ontario Curriculum",
      "ar": "دروس خصوصية أونلاين للطلاب في منهاج أونتاريو"
    },
    "heroDescription": {
      "en": "This hub organizes Ontario tutoring by city while keeping lesson planning connected to provincial expectations, course pathways, EQAO Grade 9 Mathematics, the OSSLT, and secondary-school credit requirements.",
      "ar": "ينظم هذا القسم دروس أونتاريو حسب المدينة مع ربط التخطيط بتوقعات المنهاج ومسارات المقررات وEQAO للصف التاسع وOSSLT ومتطلبات المقررات الثانوية."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Ontario Curriculum",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في منهاج أونتاريو"
    },
    "introduction": {
      "en": "This hub organizes Ontario tutoring by city while keeping lesson planning connected to provincial expectations, course pathways, EQAO Grade 9 Mathematics, the OSSLT, and secondary-school credit requirements. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "ينظم هذا القسم دروس أونتاريو حسب المدينة مع ربط التخطيط بتوقعات المنهاج ومسارات المقررات وEQAO للصف التاسع وOSSLT ومتطلبات المقررات الثانوية. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Ontario Curriculum students",
      "ar": "خدمات التدريس لطلاب منهاج أونتاريو"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Ontario Curriculum",
      "ar": "المواد المتاحة لطلاب منهاج أونتاريو"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Ontario Curriculum",
      "ar": "دعم المنهاج والنظام المدرسي في منهاج أونتاريو"
    },
    "curriculumDescription": {
      "en": "This hub organizes Ontario tutoring by city while keeping lesson planning connected to provincial expectations, course pathways, EQAO Grade 9 Mathematics, the OSSLT, and secondary-school credit requirements.",
      "ar": "ينظم هذا القسم دروس أونتاريو حسب المدينة مع ربط التخطيط بتوقعات المنهاج ومسارات المقررات وEQAO للصف التاسع وOSSLT ومتطلبات المقررات الثانوية."
    },
    "curriculumPoints": {
      "en": [
        "Elementary mathematics, literacy, French, and science support",
        "Grade 9 de-streamed mathematics and EQAO preparation",
        "Secondary English, functions, chemistry, physics, and calculus",
        "OSSLT literacy preparation and newcomer transition support"
      ],
      "ar": [
        "دعم الرياضيات والقراءة والفرنسية والعلوم في المرحلة الابتدائية",
        "رياضيات الصف التاسع الموحدة والتحضير لاختبار EQAO",
        "الإنجليزية والدوال والكيمياء والفيزياء والتفاضل في الثانوية",
        "التحضير لـOSSLT ودعم انتقال الطلاب الجدد"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "EQAO Grade 9 Mathematics",
        "description": {
          "en": "Assessment connected to the Grade 9 de-streamed mathematics course and Ontario mathematics expectations.",
          "ar": "تقييم مرتبط بمقرر رياضيات الصف التاسع الموحد وتوقعات منهاج أونتاريو."
        }
      },
      {
        "name": "OSSLT",
        "description": {
          "en": "The Ontario Secondary School Literacy Test is relevant to the provincial secondary-school literacy requirement.",
          "ar": "اختبار محو الأمية للمرحلة الثانوية المرتبط بمتطلب القراءة والكتابة في أونتاريو."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Ontario Curriculum",
      "ar": "دليل التعليم المحلي في منهاج أونتاريو"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Elementary mathematics, literacy, French, and science support",
        "Grade 9 de-streamed mathematics and EQAO preparation",
        "Secondary English, functions, chemistry, physics, and calculus",
        "OSSLT literacy preparation and newcomer transition support"
      ],
      "ar": [
        "دعم الرياضيات والقراءة والفرنسية والعلوم في المرحلة الابتدائية",
        "رياضيات الصف التاسع الموحدة والتحضير لاختبار EQAO",
        "الإنجليزية والدوال والكيمياء والفيزياء والتفاضل في الثانوية",
        "التحضير لـOSSLT ودعم انتقال الطلاب الجدد"
      ]
    },
    "resources": [
    {
      "name": "Ontario Curriculum",
      "description": {
        "en": "Official curriculum and learning expectations for Ontario schools.",
        "ar": "Official curriculum and learning expectations for Ontario schools."
      },
      "url": "https://www.dcp.edu.gov.on.ca/en/",
      "type": "education-authority"
    },
    {
      "name": "EQAO",
      "description": {
        "en": "Official Ontario assessment information for students, families, and educators.",
        "ar": "Official Ontario assessment information for students, families, and educators."
      },
      "url": "https://www.eqao.com/",
      "type": "assessment"
    },
    {
      "name": "Ontario school boards",
      "description": {
        "en": "Official provincial directory for school boards and authorities.",
        "ar": "Official provincial directory for school boards and authorities."
      },
      "url": "https://www.ontario.ca/page/find-school-board-or-school-authority",
      "type": "education-authority"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Ontario Curriculum",
      "ar": "أسئلة شائعة عن التدريس في منهاج أونتاريو"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "quebec-education-program",
    "level": "curriculum",
    "countryCode": "CA",
    "segments": [
      "canada",
      "quebec",
      "quebec-education-program"
    ],
    "parentId": "quebec",
    "childIds": [
      "montreal",
      "laval",
      "brossard",
      "gatineau"
    ],
    "relatedIds": [],
    "name": {
      "en": "Québec Education Program",
      "ar": "برنامج التعليم في كيبيك"
    },
    "shortName": {
      "en": "Québec Education Program",
      "ar": "برنامج التعليم في كيبيك"
    },
    "eyebrow": {
      "en": "Online tutoring in Québec Education Program",
      "ar": "دروس أونلاين في برنامج التعليم في كيبيك"
    },
    "seo": {
      "title": {
        "en": "Quebec Education Program Tutoring | Mustafa Academy",
        "ar": "دروس برنامج التعليم في كيبيك | أكاديمية مصطفى"
      },
      "description": {
        "en": "This hub connects city pages to the Québec Education Program, including elementary and secondary competencies, French-language learning, mathematics, science and technology, chemistry, and physics. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "يربط هذا القسم صفحات المدن ببرنامج التعليم في كيبيك، بما يشمل كفاءات المرحلتين واللغة الفرنسية والرياضيات والعلوم والتكنولوجيا والكيمياء والفيزياء. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "Quebec Education Program tutoring",
        "ar": "دروس برنامج التعليم في كيبيك"
      },
      "secondaryKeywords": {
        "en": [
          "Quebec Education Program tutoring",
          "online tutors serving Québec Education Program",
          "Arabic-speaking tutor Québec Education Program",
          "math tutoring Québec Education Program"
        ],
        "ar": [
          "دروس برنامج التعليم في كيبيك",
          "مدرسون أونلاين يخدمون طلاب برنامج التعليم في كيبيك",
          "مدرس يتحدث العربية في برنامج التعليم في كيبيك",
          "دروس رياضيات في برنامج التعليم في كيبيك"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Québec Education Program",
        "ar": "دروس أونلاين للطلاب في برنامج التعليم في كيبيك"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Québec Education Program",
      "ar": "دروس خصوصية أونلاين للطلاب في برنامج التعليم في كيبيك"
    },
    "heroDescription": {
      "en": "This hub connects city pages to the Québec Education Program, including elementary and secondary competencies, French-language learning, mathematics, science and technology, chemistry, and physics.",
      "ar": "يربط هذا القسم صفحات المدن ببرنامج التعليم في كيبيك، بما يشمل كفاءات المرحلتين واللغة الفرنسية والرياضيات والعلوم والتكنولوجيا والكيمياء والفيزياء."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Québec Education Program",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في برنامج التعليم في كيبيك"
    },
    "introduction": {
      "en": "This hub connects city pages to the Québec Education Program, including elementary and secondary competencies, French-language learning, mathematics, science and technology, chemistry, and physics. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "يربط هذا القسم صفحات المدن ببرنامج التعليم في كيبيك، بما يشمل كفاءات المرحلتين واللغة الفرنسية والرياضيات والعلوم والتكنولوجيا والكيمياء والفيزياء. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Québec Education Program students",
      "ar": "خدمات التدريس لطلاب برنامج التعليم في كيبيك"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Québec Education Program",
      "ar": "المواد المتاحة لطلاب برنامج التعليم في كيبيك"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Québec Education Program",
      "ar": "دعم المنهاج والنظام المدرسي في برنامج التعليم في كيبيك"
    },
    "curriculumDescription": {
      "en": "This hub connects city pages to the Québec Education Program, including elementary and secondary competencies, French-language learning, mathematics, science and technology, chemistry, and physics.",
      "ar": "يربط هذا القسم صفحات المدن ببرنامج التعليم في كيبيك، بما يشمل كفاءات المرحلتين واللغة الفرنسية والرياضيات والعلوم والتكنولوجيا والكيمياء والفيزياء."
    },
    "curriculumPoints": {
      "en": [
        "Elementary cycles and Secondary I–V learning pathways",
        "French-language and eligible English-language school contexts",
        "Mathematics, science and technology, chemistry, and physics",
        "Coursework, ministerial examinations, and academic-language support"
      ],
      "ar": [
        "المراحل الابتدائية ومسارات Secondary I–V",
        "السياق التعليمي الفرنسي والإنجليزي عند انطباق الأهلية",
        "الرياضيات والعلوم والتكنولوجيا والكيمياء والفيزياء",
        "دعم المقررات والامتحانات الوزارية واللغة الأكاديمية"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "Secondary IV and V ministerial examinations",
        "description": {
          "en": "Support may focus on course-specific ministerial examinations and final secondary results where relevant.",
          "ar": "يمكن أن يركز الدعم على الامتحانات الوزارية الخاصة بالمقررات ونتائج المرحلتين الرابعة والخامسة الثانوية عند الحاجة."
        }
      },
      {
        "name": "School and centre service assessments",
        "description": {
          "en": "Tutoring can also support classroom assessments and locally assigned work.",
          "ar": "يمكن للدروس دعم تقييمات المدرسة والواجبات التي تحددها مراكز الخدمات المدرسية."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Québec Education Program",
      "ar": "دليل التعليم المحلي في برنامج التعليم في كيبيك"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Elementary cycles and Secondary I–V learning pathways",
        "French-language and eligible English-language school contexts",
        "Mathematics, science and technology, chemistry, and physics",
        "Coursework, ministerial examinations, and academic-language support"
      ],
      "ar": [
        "المراحل الابتدائية ومسارات Secondary I–V",
        "السياق التعليمي الفرنسي والإنجليزي عند انطباق الأهلية",
        "الرياضيات والعلوم والتكنولوجيا والكيمياء والفيزياء",
        "دعم المقررات والامتحانات الوزارية واللغة الأكاديمية"
      ]
    },
    "resources": [
    {
      "name": "Québec Education Program",
      "description": {
        "en": "Official preschool, elementary, and secondary programs of study.",
        "ar": "Official preschool, elementary, and secondary programs of study."
      },
      "url": "https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/quebec-education-program",
      "type": "education-authority"
    },
    {
      "name": "Quebec education system",
      "description": {
        "en": "Official explanation of preschool, elementary, secondary, college, and university education in Quebec.",
        "ar": "Official explanation of preschool, elementary, secondary, college, and university education in Quebec."
      },
      "url": "https://www.quebec.ca/en/education/study-quebec/education-system",
      "type": "education-authority"
    },
    {
      "name": "Ministerial examinations",
      "description": {
        "en": "Official information for secondary-school examinations and final results.",
        "ar": "Official information for secondary-school examinations and final results."
      },
      "url": "https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools",
      "type": "assessment"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Québec Education Program",
      "ar": "أسئلة شائعة عن التدريس في برنامج التعليم في كيبيك"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "michigan-academic-standards",
    "level": "curriculum",
    "countryCode": "US",
    "segments": [
      "united-states",
      "michigan",
      "michigan-academic-standards"
    ],
    "parentId": "michigan",
    "childIds": [
      "dearborn",
      "dearborn-heights",
      "sterling-heights",
      "hamtramck",
      "detroit"
    ],
    "relatedIds": [],
    "name": {
      "en": "Michigan Academic Standards",
      "ar": "معايير ميشيغان الأكاديمية"
    },
    "shortName": {
      "en": "Michigan Academic Standards",
      "ar": "معايير ميشيغان الأكاديمية"
    },
    "eyebrow": {
      "en": "Online tutoring in Michigan Academic Standards",
      "ar": "دروس أونلاين في معايير ميشيغان الأكاديمية"
    },
    "seo": {
      "title": {
        "en": "Michigan Academic Standards Online Tutoring | Mustafa Academy",
        "ar": "دروس أونلاين لمعايير ميشيغان | أكاديمية مصطفى"
      },
      "description": {
        "en": "This hub organizes tutoring around Michigan standards, local district coursework, M-STEP, PSAT, SAT, the MME, and college-readiness pathways. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "ينظم هذا القسم التدريس حول معايير ميشيغان ومقررات المناطق التعليمية وM-STEP وPSAT وSAT وMME ومسارات الاستعداد للكلية. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "Michigan Academic Standards online tutoring",
        "ar": "دروس أونلاين لمعايير ميشيغان"
      },
      "secondaryKeywords": {
        "en": [
          "Michigan Academic Standards online tutoring",
          "online tutors serving Michigan Academic Standards",
          "Arabic-speaking tutor Michigan Academic Standards",
          "math tutoring Michigan Academic Standards"
        ],
        "ar": [
          "دروس أونلاين لمعايير ميشيغان",
          "مدرسون أونلاين يخدمون طلاب معايير ميشيغان الأكاديمية",
          "مدرس يتحدث العربية في معايير ميشيغان الأكاديمية",
          "دروس رياضيات في معايير ميشيغان الأكاديمية"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Michigan Academic Standards",
        "ar": "دروس أونلاين للطلاب في معايير ميشيغان الأكاديمية"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Michigan Academic Standards",
      "ar": "دروس خصوصية أونلاين للطلاب في معايير ميشيغان الأكاديمية"
    },
    "heroDescription": {
      "en": "This hub organizes tutoring around Michigan standards, local district coursework, M-STEP, PSAT, SAT, the MME, and college-readiness pathways.",
      "ar": "ينظم هذا القسم التدريس حول معايير ميشيغان ومقررات المناطق التعليمية وM-STEP وPSAT وSAT وMME ومسارات الاستعداد للكلية."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Michigan Academic Standards",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في معايير ميشيغان الأكاديمية"
    },
    "introduction": {
      "en": "This hub organizes tutoring around Michigan standards, local district coursework, M-STEP, PSAT, SAT, the MME, and college-readiness pathways. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "ينظم هذا القسم التدريس حول معايير ميشيغان ومقررات المناطق التعليمية وM-STEP وPSAT وSAT وMME ومسارات الاستعداد للكلية. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Michigan Academic Standards students",
      "ar": "خدمات التدريس لطلاب معايير ميشيغان الأكاديمية"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Michigan Academic Standards",
      "ar": "المواد المتاحة لطلاب معايير ميشيغان الأكاديمية"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Michigan Academic Standards",
      "ar": "دعم المنهاج والنظام المدرسي في معايير ميشيغان الأكاديمية"
    },
    "curriculumDescription": {
      "en": "This hub organizes tutoring around Michigan standards, local district coursework, M-STEP, PSAT, SAT, the MME, and college-readiness pathways.",
      "ar": "ينظم هذا القسم التدريس حول معايير ميشيغان ومقررات المناطق التعليمية وM-STEP وPSAT وSAT وMME ومسارات الاستعداد للكلية."
    },
    "curriculumPoints": {
      "en": [
        "Standards-aligned mathematics, English language arts, and science",
        "M-STEP preparation in relevant grades",
        "PSAT, SAT, and Michigan Merit Examination support",
        "Homework, credit-course, AP, and newcomer academic support"
      ],
      "ar": [
        "الرياضيات واللغة الإنجليزية والعلوم وفق معايير الولاية",
        "التحضير لـM-STEP في الصفوف ذات الصلة",
        "دعم PSAT وSAT وMichigan Merit Examination",
        "الواجبات والمقررات المعتمدة وAP ودعم الطلاب الجدد"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "M-STEP",
        "description": {
          "en": "Michigan’s standards-based assessment used across designated elementary, middle, and high-school grades.",
          "ar": "اختبار ميشيغان القائم على المعايير والمستخدم في صفوف محددة من المراحل المختلفة."
        }
      },
      {
        "name": "PSAT and SAT",
        "description": {
          "en": "College Board assessments are part of Michigan’s secondary assessment sequence.",
          "ar": "تدخل اختبارات College Board ضمن تسلسل التقييم في المرحلة الثانوية بميشيغان."
        }
      },
      {
        "name": "Michigan Merit Examination",
        "description": {
          "en": "The MME assesses Grade 11 and eligible Grade 12 students using SAT, work-readiness, science, and social-studies components.",
          "ar": "يقيم MME طلاب الصف الحادي عشر وبعض طلاب الثاني عشر عبر مكونات SAT والاستعداد للعمل والعلوم والدراسات الاجتماعية."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Michigan Academic Standards",
      "ar": "دليل التعليم المحلي في معايير ميشيغان الأكاديمية"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Standards-aligned mathematics, English language arts, and science",
        "M-STEP preparation in relevant grades",
        "PSAT, SAT, and Michigan Merit Examination support",
        "Homework, credit-course, AP, and newcomer academic support"
      ],
      "ar": [
        "الرياضيات واللغة الإنجليزية والعلوم وفق معايير الولاية",
        "التحضير لـM-STEP في الصفوف ذات الصلة",
        "دعم PSAT وSAT وMichigan Merit Examination",
        "الواجبات والمقررات المعتمدة وAP ودعم الطلاب الجدد"
      ]
    },
    "resources": [
    {
      "name": "Michigan Academic Standards",
      "description": {
        "en": "Official academic standards and instructional resources.",
        "ar": "Official academic standards and instructional resources."
      },
      "url": "https://www.michigan.gov/mde/services/academic-standards",
      "type": "education-authority"
    },
    {
      "name": "M-STEP",
      "description": {
        "en": "Official Michigan Student Test of Educational Progress information.",
        "ar": "Official Michigan Student Test of Educational Progress information."
      },
      "url": "https://www.michigan.gov/mde/services/student-assessment/m-step",
      "type": "assessment"
    },
    {
      "name": "Michigan Merit Examination",
      "description": {
        "en": "Official Grade 11 and eligible Grade 12 assessment information.",
        "ar": "Official Grade 11 and eligible Grade 12 assessment information."
      },
      "url": "https://www.michigan.gov/mde/services/student-assessment/michigan-merit-examination-mme",
      "type": "assessment"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Michigan Academic Standards",
      "ar": "أسئلة شائعة عن التدريس في معايير ميشيغان الأكاديمية"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "toronto",
    "level": "city",
    "countryCode": "CA",
    "segments": [
      "canada",
      "ontario",
      "ontario-curriculum",
      "toronto"
    ],
    "parentId": "ontario-curriculum",
    "childIds": [],
    "relatedIds": [
      "mississauga",
      "milton",
      "ottawa",
      "windsor"
    ],
    "name": {
      "en": "Toronto",
      "ar": "تورونتو"
    },
    "shortName": {
      "en": "Toronto",
      "ar": "تورونتو"
    },
    "eyebrow": {
      "en": "Online tutoring in Toronto",
      "ar": "دروس أونلاين في تورونتو"
    },
    "seo": {
      "title": {
        "en": "Online Tutoring In Toronto | Mustafa Academy",
        "ar": "دروس خصوصية أونلاين في تورونتو | أكاديمية مصطفى"
      },
      "description": {
        "en": "Toronto students may study across large public and Catholic systems, French-language boards, private schools, and specialized secondary programs. The page therefore emphasizes exact grade, course code, board, and school-assessment context. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "يدرس طلاب تورونتو ضمن أنظمة عامة وكاثوليكية وفرنسية ومدارس خاصة وبرامج ثانوية متخصصة، لذلك تركز الصفحة على الصف ورمز المقرر ومجلس التعليم وسياق التقييم المدرسي. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "online tutoring in Toronto",
        "ar": "دروس خصوصية أونلاين في تورونتو"
      },
      "secondaryKeywords": {
        "en": [
          "online tutoring in Toronto",
          "online tutors serving Toronto",
          "Arabic-speaking tutor Toronto",
          "math tutoring Toronto"
        ],
        "ar": [
          "دروس خصوصية أونلاين في تورونتو",
          "مدرسون أونلاين يخدمون طلاب تورونتو",
          "مدرس يتحدث العربية في تورونتو",
          "دروس رياضيات في تورونتو"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Toronto",
        "ar": "دروس أونلاين للطلاب في تورونتو"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Toronto",
      "ar": "دروس خصوصية أونلاين للطلاب في تورونتو"
    },
    "heroDescription": {
      "en": "Toronto students may study across large public and Catholic systems, French-language boards, private schools, and specialized secondary programs. The page therefore emphasizes exact grade, course code, board, and school-assessment context.",
      "ar": "يدرس طلاب تورونتو ضمن أنظمة عامة وكاثوليكية وفرنسية ومدارس خاصة وبرامج ثانوية متخصصة، لذلك تركز الصفحة على الصف ورمز المقرر ومجلس التعليم وسياق التقييم المدرسي."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Toronto",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في تورونتو"
    },
    "introduction": {
      "en": "Toronto students may study across large public and Catholic systems, French-language boards, private schools, and specialized secondary programs. The page therefore emphasizes exact grade, course code, board, and school-assessment context. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "يدرس طلاب تورونتو ضمن أنظمة عامة وكاثوليكية وفرنسية ومدارس خاصة وبرامج ثانوية متخصصة، لذلك تركز الصفحة على الصف ورمز المقرر ومجلس التعليم وسياق التقييم المدرسي. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Toronto students",
      "ar": "خدمات التدريس لطلاب تورونتو"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Toronto",
      "ar": "المواد المتاحة لطلاب تورونتو"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Toronto",
      "ar": "دعم المنهاج والنظام المدرسي في تورونتو"
    },
    "curriculumDescription": {
      "en": "Toronto students may study across large public and Catholic systems, French-language boards, private schools, and specialized secondary programs. The page therefore emphasizes exact grade, course code, board, and school-assessment context.",
      "ar": "يدرس طلاب تورونتو ضمن أنظمة عامة وكاثوليكية وفرنسية ومدارس خاصة وبرامج ثانوية متخصصة، لذلك تركز الصفحة على الصف ورمز المقرر ومجلس التعليم وسياق التقييم المدرسي."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "EQAO Grade 9 Mathematics",
        "description": {
          "en": "Assessment connected to the Grade 9 de-streamed mathematics course and Ontario mathematics expectations.",
          "ar": "تقييم مرتبط بمقرر رياضيات الصف التاسع الموحد وتوقعات منهاج أونتاريو."
        }
      },
      {
        "name": "OSSLT",
        "description": {
          "en": "The Ontario Secondary School Literacy Test is relevant to the provincial secondary-school literacy requirement.",
          "ar": "اختبار محو الأمية للمرحلة الثانوية المرتبط بمتطلب القراءة والكتابة في أونتاريو."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Toronto",
      "ar": "دليل التعليم المحلي في تورونتو"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Relevant public school authorities: Toronto District School Board, Toronto Catholic District School Board.",
        "Toronto students may study across large public and Catholic systems, French-language boards, private schools, and specialized secondary programs. The page therefore emphasizes exact grade, course code, board, and school-assessment context.",
        "The page targets local search intent naturally through its title, headings, FAQs, curriculum sections, and internal links.",
        "No school, board, district, library, college, university, or government partnership is implied."
      ],
      "ar": [
        "الجهات التعليمية العامة ذات الصلة: Toronto District School Board، Toronto Catholic District School Board.",
        "يدرس طلاب تورونتو ضمن أنظمة عامة وكاثوليكية وفرنسية ومدارس خاصة وبرامج ثانوية متخصصة، لذلك تركز الصفحة على الصف ورمز المقرر ومجلس التعليم وسياق التقييم المدرسي.",
        "تُدمج كلمات البحث المحلية طبيعيًا في العنوان والعناوين الفرعية والأسئلة والمنهاج والروابط الداخلية.",
        "لا تُفهم الإشارة إلى أي مدرسة أو مجلس أو منطقة تعليمية أو مكتبة أو كلية أو جامعة أو جهة حكومية على أنها شراكة."
      ]
    },
    "resources": [
    {
      "name": "Toronto District School Board",
      "description": {
        "en": "Official public school board serving Toronto.",
        "ar": "Official public school board serving Toronto."
      },
      "url": "https://www.tdsb.on.ca/",
      "type": "education-authority"
    },
    {
      "name": "Toronto Catholic District School Board",
      "description": {
        "en": "Official English Catholic school board serving Toronto.",
        "ar": "Official English Catholic school board serving Toronto."
      },
      "url": "https://www.tcdsb.org/",
      "type": "education-authority"
    },
    {
      "name": "Toronto Public Library",
      "description": {
        "en": "Public library learning and literacy resources.",
        "ar": "Public library learning and literacy resources."
      },
      "url": "https://www.torontopubliclibrary.ca/",
      "type": "library"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Toronto",
      "ar": "أسئلة شائعة عن التدريس في تورونتو"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "mississauga",
    "level": "city",
    "countryCode": "CA",
    "segments": [
      "canada",
      "ontario",
      "ontario-curriculum",
      "mississauga"
    ],
    "parentId": "ontario-curriculum",
    "childIds": [],
    "relatedIds": [
      "toronto",
      "milton",
      "ottawa",
      "windsor"
    ],
    "name": {
      "en": "Mississauga",
      "ar": "ميسيساغا"
    },
    "shortName": {
      "en": "Mississauga",
      "ar": "ميسيساغا"
    },
    "eyebrow": {
      "en": "Online tutoring in Mississauga",
      "ar": "دروس أونلاين في ميسيساغا"
    },
    "seo": {
      "title": {
        "en": "Online Tutoring In Mississauga | Mustafa Academy",
        "ar": "دروس خصوصية أونلاين في ميسيساغا | أكاديمية مصطفى"
      },
      "description": {
        "en": "Mississauga families often need support that fits Peel-area school schedules, Ontario course expectations, French Immersion, newcomer transition, and secondary credit courses. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "تحتاج أسر ميسيساغا غالبًا إلى دعم يناسب جداول مدارس بيل وتوقعات منهاج أونتاريو والفرنش إمرجن وانتقال الطلاب الجدد والمقررات الثانوية. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "online tutoring in Mississauga",
        "ar": "دروس خصوصية أونلاين في ميسيساغا"
      },
      "secondaryKeywords": {
        "en": [
          "online tutoring in Mississauga",
          "online tutors serving Mississauga",
          "Arabic-speaking tutor Mississauga",
          "math tutoring Mississauga"
        ],
        "ar": [
          "دروس خصوصية أونلاين في ميسيساغا",
          "مدرسون أونلاين يخدمون طلاب ميسيساغا",
          "مدرس يتحدث العربية في ميسيساغا",
          "دروس رياضيات في ميسيساغا"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Mississauga",
        "ar": "دروس أونلاين للطلاب في ميسيساغا"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Mississauga",
      "ar": "دروس خصوصية أونلاين للطلاب في ميسيساغا"
    },
    "heroDescription": {
      "en": "Mississauga families often need support that fits Peel-area school schedules, Ontario course expectations, French Immersion, newcomer transition, and secondary credit courses.",
      "ar": "تحتاج أسر ميسيساغا غالبًا إلى دعم يناسب جداول مدارس بيل وتوقعات منهاج أونتاريو والفرنش إمرجن وانتقال الطلاب الجدد والمقررات الثانوية."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Mississauga",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في ميسيساغا"
    },
    "introduction": {
      "en": "Mississauga families often need support that fits Peel-area school schedules, Ontario course expectations, French Immersion, newcomer transition, and secondary credit courses. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "تحتاج أسر ميسيساغا غالبًا إلى دعم يناسب جداول مدارس بيل وتوقعات منهاج أونتاريو والفرنش إمرجن وانتقال الطلاب الجدد والمقررات الثانوية. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Mississauga students",
      "ar": "خدمات التدريس لطلاب ميسيساغا"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Mississauga",
      "ar": "المواد المتاحة لطلاب ميسيساغا"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Mississauga",
      "ar": "دعم المنهاج والنظام المدرسي في ميسيساغا"
    },
    "curriculumDescription": {
      "en": "Mississauga families often need support that fits Peel-area school schedules, Ontario course expectations, French Immersion, newcomer transition, and secondary credit courses.",
      "ar": "تحتاج أسر ميسيساغا غالبًا إلى دعم يناسب جداول مدارس بيل وتوقعات منهاج أونتاريو والفرنش إمرجن وانتقال الطلاب الجدد والمقررات الثانوية."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "EQAO Grade 9 Mathematics",
        "description": {
          "en": "Assessment connected to the Grade 9 de-streamed mathematics course and Ontario mathematics expectations.",
          "ar": "تقييم مرتبط بمقرر رياضيات الصف التاسع الموحد وتوقعات منهاج أونتاريو."
        }
      },
      {
        "name": "OSSLT",
        "description": {
          "en": "The Ontario Secondary School Literacy Test is relevant to the provincial secondary-school literacy requirement.",
          "ar": "اختبار محو الأمية للمرحلة الثانوية المرتبط بمتطلب القراءة والكتابة في أونتاريو."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Mississauga",
      "ar": "دليل التعليم المحلي في ميسيساغا"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Relevant public school authorities: Peel District School Board, Dufferin-Peel Catholic District School Board.",
        "Mississauga families often need support that fits Peel-area school schedules, Ontario course expectations, French Immersion, newcomer transition, and secondary credit courses.",
        "The page targets local search intent naturally through its title, headings, FAQs, curriculum sections, and internal links.",
        "No school, board, district, library, college, university, or government partnership is implied."
      ],
      "ar": [
        "الجهات التعليمية العامة ذات الصلة: Peel District School Board، Dufferin-Peel Catholic District School Board.",
        "تحتاج أسر ميسيساغا غالبًا إلى دعم يناسب جداول مدارس بيل وتوقعات منهاج أونتاريو والفرنش إمرجن وانتقال الطلاب الجدد والمقررات الثانوية.",
        "تُدمج كلمات البحث المحلية طبيعيًا في العنوان والعناوين الفرعية والأسئلة والمنهاج والروابط الداخلية.",
        "لا تُفهم الإشارة إلى أي مدرسة أو مجلس أو منطقة تعليمية أو مكتبة أو كلية أو جامعة أو جهة حكومية على أنها شراكة."
      ]
    },
    "resources": [
    {
      "name": "Peel District School Board",
      "description": {
        "en": "Official public school board serving Mississauga and Peel Region.",
        "ar": "Official public school board serving Mississauga and Peel Region."
      },
      "url": "https://www.peelschools.org/",
      "type": "education-authority"
    },
    {
      "name": "Dufferin-Peel Catholic District School Board",
      "description": {
        "en": "Official Catholic school board serving Mississauga and surrounding communities.",
        "ar": "Official Catholic school board serving Mississauga and surrounding communities."
      },
      "url": "https://www.dpcdsb.org/",
      "type": "education-authority"
    },
    {
      "name": "Mississauga Library",
      "description": {
        "en": "City library programs and study resources.",
        "ar": "City library programs and study resources."
      },
      "url": "https://www.mississauga.ca/library/",
      "type": "library"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Mississauga",
      "ar": "أسئلة شائعة عن التدريس في ميسيساغا"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "milton",
    "level": "city",
    "countryCode": "CA",
    "segments": [
      "canada",
      "ontario",
      "ontario-curriculum",
      "milton"
    ],
    "parentId": "ontario-curriculum",
    "childIds": [],
    "relatedIds": [
      "toronto",
      "mississauga",
      "ottawa",
      "windsor"
    ],
    "name": {
      "en": "Milton",
      "ar": "ميلتون"
    },
    "shortName": {
      "en": "Milton",
      "ar": "ميلتون"
    },
    "eyebrow": {
      "en": "Online tutoring in Milton",
      "ar": "دروس أونلاين في ميلتون"
    },
    "seo": {
      "title": {
        "en": "Online Tutoring In Milton Ontario | Mustafa Academy",
        "ar": "دروس خصوصية أونلاين في ميلتون | أكاديمية مصطفى"
      },
      "description": {
        "en": "Milton’s fast-growing family community includes students in Halton public and Catholic schools who may need help with foundational skills, French Immersion, Grade 9 mathematics, OSSLT, and senior secondary courses. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "تضم ميلتون مجتمعًا عائليًا متناميًا وطلابًا في مدارس هالتون العامة والكاثوليكية ممن قد يحتاجون إلى دعم الأساسيات والفرنش إمرجن ورياضيات الصف التاسع وOSSLT ومقررات الثانوية العليا. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "online tutoring in Milton Ontario",
        "ar": "دروس خصوصية أونلاين في ميلتون"
      },
      "secondaryKeywords": {
        "en": [
          "online tutoring in Milton Ontario",
          "online tutors serving Milton",
          "Arabic-speaking tutor Milton",
          "math tutoring Milton"
        ],
        "ar": [
          "دروس خصوصية أونلاين في ميلتون",
          "مدرسون أونلاين يخدمون طلاب ميلتون",
          "مدرس يتحدث العربية في ميلتون",
          "دروس رياضيات في ميلتون"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Milton",
        "ar": "دروس أونلاين للطلاب في ميلتون"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Milton",
      "ar": "دروس خصوصية أونلاين للطلاب في ميلتون"
    },
    "heroDescription": {
      "en": "Milton’s fast-growing family community includes students in Halton public and Catholic schools who may need help with foundational skills, French Immersion, Grade 9 mathematics, OSSLT, and senior secondary courses.",
      "ar": "تضم ميلتون مجتمعًا عائليًا متناميًا وطلابًا في مدارس هالتون العامة والكاثوليكية ممن قد يحتاجون إلى دعم الأساسيات والفرنش إمرجن ورياضيات الصف التاسع وOSSLT ومقررات الثانوية العليا."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Milton",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في ميلتون"
    },
    "introduction": {
      "en": "Milton’s fast-growing family community includes students in Halton public and Catholic schools who may need help with foundational skills, French Immersion, Grade 9 mathematics, OSSLT, and senior secondary courses. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "تضم ميلتون مجتمعًا عائليًا متناميًا وطلابًا في مدارس هالتون العامة والكاثوليكية ممن قد يحتاجون إلى دعم الأساسيات والفرنش إمرجن ورياضيات الصف التاسع وOSSLT ومقررات الثانوية العليا. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Milton students",
      "ar": "خدمات التدريس لطلاب ميلتون"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Milton",
      "ar": "المواد المتاحة لطلاب ميلتون"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Milton",
      "ar": "دعم المنهاج والنظام المدرسي في ميلتون"
    },
    "curriculumDescription": {
      "en": "Milton’s fast-growing family community includes students in Halton public and Catholic schools who may need help with foundational skills, French Immersion, Grade 9 mathematics, OSSLT, and senior secondary courses.",
      "ar": "تضم ميلتون مجتمعًا عائليًا متناميًا وطلابًا في مدارس هالتون العامة والكاثوليكية ممن قد يحتاجون إلى دعم الأساسيات والفرنش إمرجن ورياضيات الصف التاسع وOSSLT ومقررات الثانوية العليا."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "EQAO Grade 9 Mathematics",
        "description": {
          "en": "Assessment connected to the Grade 9 de-streamed mathematics course and Ontario mathematics expectations.",
          "ar": "تقييم مرتبط بمقرر رياضيات الصف التاسع الموحد وتوقعات منهاج أونتاريو."
        }
      },
      {
        "name": "OSSLT",
        "description": {
          "en": "The Ontario Secondary School Literacy Test is relevant to the provincial secondary-school literacy requirement.",
          "ar": "اختبار محو الأمية للمرحلة الثانوية المرتبط بمتطلب القراءة والكتابة في أونتاريو."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Milton",
      "ar": "دليل التعليم المحلي في ميلتون"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Relevant public school authorities: Halton District School Board, Halton Catholic District School Board.",
        "Milton’s fast-growing family community includes students in Halton public and Catholic schools who may need help with foundational skills, French Immersion, Grade 9 mathematics, OSSLT, and senior secondary courses.",
        "The page targets local search intent naturally through its title, headings, FAQs, curriculum sections, and internal links.",
        "No school, board, district, library, college, university, or government partnership is implied."
      ],
      "ar": [
        "الجهات التعليمية العامة ذات الصلة: Halton District School Board، Halton Catholic District School Board.",
        "تضم ميلتون مجتمعًا عائليًا متناميًا وطلابًا في مدارس هالتون العامة والكاثوليكية ممن قد يحتاجون إلى دعم الأساسيات والفرنش إمرجن ورياضيات الصف التاسع وOSSLT ومقررات الثانوية العليا.",
        "تُدمج كلمات البحث المحلية طبيعيًا في العنوان والعناوين الفرعية والأسئلة والمنهاج والروابط الداخلية.",
        "لا تُفهم الإشارة إلى أي مدرسة أو مجلس أو منطقة تعليمية أو مكتبة أو كلية أو جامعة أو جهة حكومية على أنها شراكة."
      ]
    },
    "resources": [
    {
      "name": "Halton District School Board",
      "description": {
        "en": "Official public school board serving Milton and Halton Region.",
        "ar": "Official public school board serving Milton and Halton Region."
      },
      "url": "https://www.hdsb.ca/",
      "type": "education-authority"
    },
    {
      "name": "Halton Catholic District School Board",
      "description": {
        "en": "Official Catholic school board serving Milton and Halton Region.",
        "ar": "Official Catholic school board serving Milton and Halton Region."
      },
      "url": "https://www.hcdsb.org/",
      "type": "education-authority"
    },
    {
      "name": "Milton Public Library",
      "description": {
        "en": "Local library learning, literacy, and study resources.",
        "ar": "Local library learning, literacy, and study resources."
      },
      "url": "https://www.mpl.on.ca/",
      "type": "library"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Milton",
      "ar": "أسئلة شائعة عن التدريس في ميلتون"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "ottawa",
    "level": "city",
    "countryCode": "CA",
    "segments": [
      "canada",
      "ontario",
      "ontario-curriculum",
      "ottawa"
    ],
    "parentId": "ontario-curriculum",
    "childIds": [],
    "relatedIds": [
      "toronto",
      "mississauga",
      "milton",
      "windsor"
    ],
    "name": {
      "en": "Ottawa",
      "ar": "أوتاوا"
    },
    "shortName": {
      "en": "Ottawa",
      "ar": "أوتاوا"
    },
    "eyebrow": {
      "en": "Online tutoring in Ottawa",
      "ar": "دروس أونلاين في أوتاوا"
    },
    "seo": {
      "title": {
        "en": "Online Tutoring In Ottawa | Mustafa Academy",
        "ar": "دروس خصوصية أونلاين في أوتاوا | أكاديمية مصطفى"
      },
      "description": {
        "en": "Ottawa’s English and French school-board landscape makes language of instruction, program type, and course pathway especially important when matching a tutor. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "يجعل وجود مجالس تعليم إنجليزية وفرنسية في أوتاوا لغة التدريس ونوع البرنامج ومسار المقرر عوامل أساسية عند مطابقة المدرس. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "online tutoring in Ottawa",
        "ar": "دروس خصوصية أونلاين في أوتاوا"
      },
      "secondaryKeywords": {
        "en": [
          "online tutoring in Ottawa",
          "online tutors serving Ottawa",
          "Arabic-speaking tutor Ottawa",
          "math tutoring Ottawa"
        ],
        "ar": [
          "دروس خصوصية أونلاين في أوتاوا",
          "مدرسون أونلاين يخدمون طلاب أوتاوا",
          "مدرس يتحدث العربية في أوتاوا",
          "دروس رياضيات في أوتاوا"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Ottawa",
        "ar": "دروس أونلاين للطلاب في أوتاوا"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Ottawa",
      "ar": "دروس خصوصية أونلاين للطلاب في أوتاوا"
    },
    "heroDescription": {
      "en": "Ottawa’s English and French school-board landscape makes language of instruction, program type, and course pathway especially important when matching a tutor.",
      "ar": "يجعل وجود مجالس تعليم إنجليزية وفرنسية في أوتاوا لغة التدريس ونوع البرنامج ومسار المقرر عوامل أساسية عند مطابقة المدرس."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Ottawa",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في أوتاوا"
    },
    "introduction": {
      "en": "Ottawa’s English and French school-board landscape makes language of instruction, program type, and course pathway especially important when matching a tutor. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "يجعل وجود مجالس تعليم إنجليزية وفرنسية في أوتاوا لغة التدريس ونوع البرنامج ومسار المقرر عوامل أساسية عند مطابقة المدرس. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Ottawa students",
      "ar": "خدمات التدريس لطلاب أوتاوا"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Ottawa",
      "ar": "المواد المتاحة لطلاب أوتاوا"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Ottawa",
      "ar": "دعم المنهاج والنظام المدرسي في أوتاوا"
    },
    "curriculumDescription": {
      "en": "Ottawa’s English and French school-board landscape makes language of instruction, program type, and course pathway especially important when matching a tutor.",
      "ar": "يجعل وجود مجالس تعليم إنجليزية وفرنسية في أوتاوا لغة التدريس ونوع البرنامج ومسار المقرر عوامل أساسية عند مطابقة المدرس."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "EQAO Grade 9 Mathematics",
        "description": {
          "en": "Assessment connected to the Grade 9 de-streamed mathematics course and Ontario mathematics expectations.",
          "ar": "تقييم مرتبط بمقرر رياضيات الصف التاسع الموحد وتوقعات منهاج أونتاريو."
        }
      },
      {
        "name": "OSSLT",
        "description": {
          "en": "The Ontario Secondary School Literacy Test is relevant to the provincial secondary-school literacy requirement.",
          "ar": "اختبار محو الأمية للمرحلة الثانوية المرتبط بمتطلب القراءة والكتابة في أونتاريو."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Ottawa",
      "ar": "دليل التعليم المحلي في أوتاوا"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Relevant public school authorities: Ottawa-Carleton District School Board, Ottawa Catholic School Board, Conseil des écoles publiques de l’Est de l’Ontario, Conseil des écoles catholiques du Centre-Est.",
        "Ottawa’s English and French school-board landscape makes language of instruction, program type, and course pathway especially important when matching a tutor.",
        "The page targets local search intent naturally through its title, headings, FAQs, curriculum sections, and internal links.",
        "No school, board, district, library, college, university, or government partnership is implied."
      ],
      "ar": [
        "الجهات التعليمية العامة ذات الصلة: Ottawa-Carleton District School Board، Ottawa Catholic School Board، Conseil des écoles publiques de l’Est de l’Ontario، Conseil des écoles catholiques du Centre-Est.",
        "يجعل وجود مجالس تعليم إنجليزية وفرنسية في أوتاوا لغة التدريس ونوع البرنامج ومسار المقرر عوامل أساسية عند مطابقة المدرس.",
        "تُدمج كلمات البحث المحلية طبيعيًا في العنوان والعناوين الفرعية والأسئلة والمنهاج والروابط الداخلية.",
        "لا تُفهم الإشارة إلى أي مدرسة أو مجلس أو منطقة تعليمية أو مكتبة أو كلية أو جامعة أو جهة حكومية على أنها شراكة."
      ]
    },
    "resources": [
    {
      "name": "Ottawa-Carleton District School Board",
      "description": {
        "en": "Official English public school board serving Ottawa.",
        "ar": "Official English public school board serving Ottawa."
      },
      "url": "https://www.ocdsb.ca/",
      "type": "education-authority"
    },
    {
      "name": "Ottawa Catholic School Board",
      "description": {
        "en": "Official English Catholic school board serving Ottawa.",
        "ar": "Official English Catholic school board serving Ottawa."
      },
      "url": "https://www.ocsb.ca/",
      "type": "education-authority"
    },
    {
      "name": "Ottawa Public Library",
      "description": {
        "en": "Public library learning and study resources.",
        "ar": "Public library learning and study resources."
      },
      "url": "https://biblioottawalibrary.ca/en",
      "type": "library"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Ottawa",
      "ar": "أسئلة شائعة عن التدريس في أوتاوا"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "windsor",
    "level": "city",
    "countryCode": "CA",
    "segments": [
      "canada",
      "ontario",
      "ontario-curriculum",
      "windsor"
    ],
    "parentId": "ontario-curriculum",
    "childIds": [],
    "relatedIds": [
      "toronto",
      "mississauga",
      "milton",
      "ottawa"
    ],
    "name": {
      "en": "Windsor",
      "ar": "ويندسور"
    },
    "shortName": {
      "en": "Windsor",
      "ar": "ويندسور"
    },
    "eyebrow": {
      "en": "Online tutoring in Windsor",
      "ar": "دروس أونلاين في ويندسور"
    },
    "seo": {
      "title": {
        "en": "Online Tutoring In Windsor Ontario | Mustafa Academy",
        "ar": "دروس خصوصية أونلاين في ويندسور | أكاديمية مصطفى"
      },
      "description": {
        "en": "Windsor has one of Canada’s highest Arab population shares among major metropolitan areas, making bilingual family communication and Ontario-curriculum support especially relevant. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "تُعد ويندسور من المناطق الحضرية ذات النسبة المرتفعة من السكان العرب في كندا، مما يجعل التواصل الثنائي ودعم منهاج أونتاريو مهمين بصورة خاصة. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "online tutoring in Windsor Ontario",
        "ar": "دروس خصوصية أونلاين في ويندسور"
      },
      "secondaryKeywords": {
        "en": [
          "online tutoring in Windsor Ontario",
          "online tutors serving Windsor",
          "Arabic-speaking tutor Windsor",
          "math tutoring Windsor"
        ],
        "ar": [
          "دروس خصوصية أونلاين في ويندسور",
          "مدرسون أونلاين يخدمون طلاب ويندسور",
          "مدرس يتحدث العربية في ويندسور",
          "دروس رياضيات في ويندسور"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Windsor",
        "ar": "دروس أونلاين للطلاب في ويندسور"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Windsor",
      "ar": "دروس خصوصية أونلاين للطلاب في ويندسور"
    },
    "heroDescription": {
      "en": "Windsor has one of Canada’s highest Arab population shares among major metropolitan areas, making bilingual family communication and Ontario-curriculum support especially relevant.",
      "ar": "تُعد ويندسور من المناطق الحضرية ذات النسبة المرتفعة من السكان العرب في كندا، مما يجعل التواصل الثنائي ودعم منهاج أونتاريو مهمين بصورة خاصة."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Windsor",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في ويندسور"
    },
    "introduction": {
      "en": "Windsor has one of Canada’s highest Arab population shares among major metropolitan areas, making bilingual family communication and Ontario-curriculum support especially relevant. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "تُعد ويندسور من المناطق الحضرية ذات النسبة المرتفعة من السكان العرب في كندا، مما يجعل التواصل الثنائي ودعم منهاج أونتاريو مهمين بصورة خاصة. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Windsor students",
      "ar": "خدمات التدريس لطلاب ويندسور"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Windsor",
      "ar": "المواد المتاحة لطلاب ويندسور"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Windsor",
      "ar": "دعم المنهاج والنظام المدرسي في ويندسور"
    },
    "curriculumDescription": {
      "en": "Windsor has one of Canada’s highest Arab population shares among major metropolitan areas, making bilingual family communication and Ontario-curriculum support especially relevant.",
      "ar": "تُعد ويندسور من المناطق الحضرية ذات النسبة المرتفعة من السكان العرب في كندا، مما يجعل التواصل الثنائي ودعم منهاج أونتاريو مهمين بصورة خاصة."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "EQAO Grade 9 Mathematics",
        "description": {
          "en": "Assessment connected to the Grade 9 de-streamed mathematics course and Ontario mathematics expectations.",
          "ar": "تقييم مرتبط بمقرر رياضيات الصف التاسع الموحد وتوقعات منهاج أونتاريو."
        }
      },
      {
        "name": "OSSLT",
        "description": {
          "en": "The Ontario Secondary School Literacy Test is relevant to the provincial secondary-school literacy requirement.",
          "ar": "اختبار محو الأمية للمرحلة الثانوية المرتبط بمتطلب القراءة والكتابة في أونتاريو."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Windsor",
      "ar": "دليل التعليم المحلي في ويندسور"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Relevant public school authorities: Greater Essex County District School Board, Windsor-Essex Catholic District School Board.",
        "Windsor has one of Canada’s highest Arab population shares among major metropolitan areas, making bilingual family communication and Ontario-curriculum support especially relevant.",
        "The page targets local search intent naturally through its title, headings, FAQs, curriculum sections, and internal links.",
        "No school, board, district, library, college, university, or government partnership is implied."
      ],
      "ar": [
        "الجهات التعليمية العامة ذات الصلة: Greater Essex County District School Board، Windsor-Essex Catholic District School Board.",
        "تُعد ويندسور من المناطق الحضرية ذات النسبة المرتفعة من السكان العرب في كندا، مما يجعل التواصل الثنائي ودعم منهاج أونتاريو مهمين بصورة خاصة.",
        "تُدمج كلمات البحث المحلية طبيعيًا في العنوان والعناوين الفرعية والأسئلة والمنهاج والروابط الداخلية.",
        "لا تُفهم الإشارة إلى أي مدرسة أو مجلس أو منطقة تعليمية أو مكتبة أو كلية أو جامعة أو جهة حكومية على أنها شراكة."
      ]
    },
    "resources": [
    {
      "name": "Greater Essex County District School Board",
      "description": {
        "en": "Official public school board serving Windsor and Essex County.",
        "ar": "Official public school board serving Windsor and Essex County."
      },
      "url": "https://www.publicboard.ca/",
      "type": "education-authority"
    },
    {
      "name": "Windsor-Essex Catholic District School Board",
      "description": {
        "en": "Official Catholic school board serving Windsor and Essex County.",
        "ar": "Official Catholic school board serving Windsor and Essex County."
      },
      "url": "https://www.wecdsb.on.ca/",
      "type": "education-authority"
    },
    {
      "name": "Windsor Public Library",
      "description": {
        "en": "Local literacy, homework, and study resources.",
        "ar": "Local literacy, homework, and study resources."
      },
      "url": "https://www.windsorpubliclibrary.com/",
      "type": "library"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Windsor",
      "ar": "أسئلة شائعة عن التدريس في ويندسور"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "london",
    "level": "city",
    "countryCode": "CA",
    "segments": [
      "canada",
      "ontario",
      "ontario-curriculum",
      "london"
    ],
    "parentId": "ontario-curriculum",
    "childIds": [],
    "relatedIds": [
      "toronto",
      "mississauga",
      "milton",
      "ottawa"
    ],
    "name": {
      "en": "London",
      "ar": "لندن أونتاريو"
    },
    "shortName": {
      "en": "London",
      "ar": "لندن أونتاريو"
    },
    "eyebrow": {
      "en": "Online tutoring in London",
      "ar": "دروس أونلاين في لندن أونتاريو"
    },
    "seo": {
      "title": {
        "en": "Online Tutoring In London Ontario | Mustafa Academy",
        "ar": "دروس خصوصية أونلاين في لندن أونتاريو | أكاديمية مصطفى"
      },
      "description": {
        "en": "London combines elementary and secondary needs with a sizable newcomer and Arab-family audience, creating demand for curriculum transition, literacy, mathematics, and senior science support. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "تجمع لندن بين احتياجات المراحل المختلفة وجمهور مهم من الأسر الجديدة والعربية، مما يزيد الحاجة إلى دعم الانتقال والقراءة والرياضيات وعلوم الثانوية. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "online tutoring in London Ontario",
        "ar": "دروس خصوصية أونلاين في لندن أونتاريو"
      },
      "secondaryKeywords": {
        "en": [
          "online tutoring in London Ontario",
          "online tutors serving London",
          "Arabic-speaking tutor London",
          "math tutoring London"
        ],
        "ar": [
          "دروس خصوصية أونلاين في لندن أونتاريو",
          "مدرسون أونلاين يخدمون طلاب لندن أونتاريو",
          "مدرس يتحدث العربية في لندن أونتاريو",
          "دروس رياضيات في لندن أونتاريو"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in London",
        "ar": "دروس أونلاين للطلاب في لندن أونتاريو"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in London",
      "ar": "دروس خصوصية أونلاين للطلاب في لندن أونتاريو"
    },
    "heroDescription": {
      "en": "London combines elementary and secondary needs with a sizable newcomer and Arab-family audience, creating demand for curriculum transition, literacy, mathematics, and senior science support.",
      "ar": "تجمع لندن بين احتياجات المراحل المختلفة وجمهور مهم من الأسر الجديدة والعربية، مما يزيد الحاجة إلى دعم الانتقال والقراءة والرياضيات وعلوم الثانوية."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in London",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في لندن أونتاريو"
    },
    "introduction": {
      "en": "London combines elementary and secondary needs with a sizable newcomer and Arab-family audience, creating demand for curriculum transition, literacy, mathematics, and senior science support. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "تجمع لندن بين احتياجات المراحل المختلفة وجمهور مهم من الأسر الجديدة والعربية، مما يزيد الحاجة إلى دعم الانتقال والقراءة والرياضيات وعلوم الثانوية. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for London students",
      "ar": "خدمات التدريس لطلاب لندن أونتاريو"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in London",
      "ar": "المواد المتاحة لطلاب لندن أونتاريو"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in London",
      "ar": "دعم المنهاج والنظام المدرسي في لندن أونتاريو"
    },
    "curriculumDescription": {
      "en": "London combines elementary and secondary needs with a sizable newcomer and Arab-family audience, creating demand for curriculum transition, literacy, mathematics, and senior science support.",
      "ar": "تجمع لندن بين احتياجات المراحل المختلفة وجمهور مهم من الأسر الجديدة والعربية، مما يزيد الحاجة إلى دعم الانتقال والقراءة والرياضيات وعلوم الثانوية."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "EQAO Grade 9 Mathematics",
        "description": {
          "en": "Assessment connected to the Grade 9 de-streamed mathematics course and Ontario mathematics expectations.",
          "ar": "تقييم مرتبط بمقرر رياضيات الصف التاسع الموحد وتوقعات منهاج أونتاريو."
        }
      },
      {
        "name": "OSSLT",
        "description": {
          "en": "The Ontario Secondary School Literacy Test is relevant to the provincial secondary-school literacy requirement.",
          "ar": "اختبار محو الأمية للمرحلة الثانوية المرتبط بمتطلب القراءة والكتابة في أونتاريو."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for London",
      "ar": "دليل التعليم المحلي في لندن أونتاريو"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Relevant public school authorities: Thames Valley District School Board, London District Catholic School Board.",
        "London combines elementary and secondary needs with a sizable newcomer and Arab-family audience, creating demand for curriculum transition, literacy, mathematics, and senior science support.",
        "The page targets local search intent naturally through its title, headings, FAQs, curriculum sections, and internal links.",
        "No school, board, district, library, college, university, or government partnership is implied."
      ],
      "ar": [
        "الجهات التعليمية العامة ذات الصلة: Thames Valley District School Board، London District Catholic School Board.",
        "تجمع لندن بين احتياجات المراحل المختلفة وجمهور مهم من الأسر الجديدة والعربية، مما يزيد الحاجة إلى دعم الانتقال والقراءة والرياضيات وعلوم الثانوية.",
        "تُدمج كلمات البحث المحلية طبيعيًا في العنوان والعناوين الفرعية والأسئلة والمنهاج والروابط الداخلية.",
        "لا تُفهم الإشارة إلى أي مدرسة أو مجلس أو منطقة تعليمية أو مكتبة أو كلية أو جامعة أو جهة حكومية على أنها شراكة."
      ]
    },
    "resources": [
    {
      "name": "Thames Valley District School Board",
      "description": {
        "en": "Official public school board serving London and surrounding communities.",
        "ar": "Official public school board serving London and surrounding communities."
      },
      "url": "https://www.tvdsb.ca/",
      "type": "education-authority"
    },
    {
      "name": "London District Catholic School Board",
      "description": {
        "en": "Official Catholic school board serving London and surrounding communities.",
        "ar": "Official Catholic school board serving London and surrounding communities."
      },
      "url": "https://www.ldcsb.ca/",
      "type": "education-authority"
    },
    {
      "name": "London Public Library",
      "description": {
        "en": "Public library learning and study resources.",
        "ar": "Public library learning and study resources."
      },
      "url": "https://www.londonpubliclibrary.ca/",
      "type": "library"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in London",
      "ar": "أسئلة شائعة عن التدريس في لندن أونتاريو"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "montreal",
    "level": "city",
    "countryCode": "CA",
    "segments": [
      "canada",
      "quebec",
      "quebec-education-program",
      "montreal"
    ],
    "parentId": "quebec-education-program",
    "childIds": [],
    "relatedIds": [
      "laval",
      "brossard",
      "gatineau"
    ],
    "name": {
      "en": "Montréal",
      "ar": "مونتريال"
    },
    "shortName": {
      "en": "Montréal",
      "ar": "مونتريال"
    },
    "eyebrow": {
      "en": "Online tutoring in Montréal",
      "ar": "دروس أونلاين في مونتريال"
    },
    "seo": {
      "title": {
        "en": "Online Tutoring In Montreal | Mustafa Academy",
        "ar": "دروس خصوصية أونلاين في مونتريال | أكاديمية مصطفى"
      },
      "description": {
        "en": "Montréal is Canada’s largest Arab metropolitan hub. Tutoring may need to support French-language schooling, eligible English-language pathways, mathematics in French, secondary science, and ministerial examinations. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "تُعد مونتريال أكبر تجمع حضري عربي في كندا، وقد يحتاج الطلاب إلى دعم التعليم الفرنسي أو المسار الإنجليزي المؤهل والرياضيات بالفرنسية وعلوم الثانوية والامتحانات الوزارية. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "online tutoring in Montreal",
        "ar": "دروس خصوصية أونلاين في مونتريال"
      },
      "secondaryKeywords": {
        "en": [
          "online tutoring in Montreal",
          "online tutors serving Montréal",
          "Arabic-speaking tutor Montréal",
          "math tutoring Montréal"
        ],
        "ar": [
          "دروس خصوصية أونلاين في مونتريال",
          "مدرسون أونلاين يخدمون طلاب مونتريال",
          "مدرس يتحدث العربية في مونتريال",
          "دروس رياضيات في مونتريال"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Montréal",
        "ar": "دروس أونلاين للطلاب في مونتريال"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Montréal",
      "ar": "دروس خصوصية أونلاين للطلاب في مونتريال"
    },
    "heroDescription": {
      "en": "Montréal is Canada’s largest Arab metropolitan hub. Tutoring may need to support French-language schooling, eligible English-language pathways, mathematics in French, secondary science, and ministerial examinations.",
      "ar": "تُعد مونتريال أكبر تجمع حضري عربي في كندا، وقد يحتاج الطلاب إلى دعم التعليم الفرنسي أو المسار الإنجليزي المؤهل والرياضيات بالفرنسية وعلوم الثانوية والامتحانات الوزارية."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Montréal",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في مونتريال"
    },
    "introduction": {
      "en": "Montréal is Canada’s largest Arab metropolitan hub. Tutoring may need to support French-language schooling, eligible English-language pathways, mathematics in French, secondary science, and ministerial examinations. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "تُعد مونتريال أكبر تجمع حضري عربي في كندا، وقد يحتاج الطلاب إلى دعم التعليم الفرنسي أو المسار الإنجليزي المؤهل والرياضيات بالفرنسية وعلوم الثانوية والامتحانات الوزارية. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Montréal students",
      "ar": "خدمات التدريس لطلاب مونتريال"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Montréal",
      "ar": "المواد المتاحة لطلاب مونتريال"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Montréal",
      "ar": "دعم المنهاج والنظام المدرسي في مونتريال"
    },
    "curriculumDescription": {
      "en": "Montréal is Canada’s largest Arab metropolitan hub. Tutoring may need to support French-language schooling, eligible English-language pathways, mathematics in French, secondary science, and ministerial examinations.",
      "ar": "تُعد مونتريال أكبر تجمع حضري عربي في كندا، وقد يحتاج الطلاب إلى دعم التعليم الفرنسي أو المسار الإنجليزي المؤهل والرياضيات بالفرنسية وعلوم الثانوية والامتحانات الوزارية."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "Secondary IV and V ministerial examinations",
        "description": {
          "en": "Support may focus on course-specific ministerial examinations and final secondary results where relevant.",
          "ar": "يمكن أن يركز الدعم على الامتحانات الوزارية الخاصة بالمقررات ونتائج المرحلتين الرابعة والخامسة الثانوية عند الحاجة."
        }
      },
      {
        "name": "School and centre service assessments",
        "description": {
          "en": "Tutoring can also support classroom assessments and locally assigned work.",
          "ar": "يمكن للدروس دعم تقييمات المدرسة والواجبات التي تحددها مراكز الخدمات المدرسية."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Montréal",
      "ar": "دليل التعليم المحلي في مونتريال"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Relevant public school authorities: Centre de services scolaire de Montréal, English Montreal School Board, Lester B. Pearson School Board.",
        "Montréal is Canada’s largest Arab metropolitan hub. Tutoring may need to support French-language schooling, eligible English-language pathways, mathematics in French, secondary science, and ministerial examinations.",
        "The page targets local search intent naturally through its title, headings, FAQs, curriculum sections, and internal links.",
        "No school, board, district, library, college, university, or government partnership is implied."
      ],
      "ar": [
        "الجهات التعليمية العامة ذات الصلة: Centre de services scolaire de Montréal، English Montreal School Board، Lester B. Pearson School Board.",
        "تُعد مونتريال أكبر تجمع حضري عربي في كندا، وقد يحتاج الطلاب إلى دعم التعليم الفرنسي أو المسار الإنجليزي المؤهل والرياضيات بالفرنسية وعلوم الثانوية والامتحانات الوزارية.",
        "تُدمج كلمات البحث المحلية طبيعيًا في العنوان والعناوين الفرعية والأسئلة والمنهاج والروابط الداخلية.",
        "لا تُفهم الإشارة إلى أي مدرسة أو مجلس أو منطقة تعليمية أو مكتبة أو كلية أو جامعة أو جهة حكومية على أنها شراكة."
      ]
    },
    "resources": [
    {
      "name": "Centre de services scolaire de Montréal",
      "description": {
        "en": "Official French-language school service centre for Montréal.",
        "ar": "Official French-language school service centre for Montréal."
      },
      "url": "https://www.cssdm.gouv.qc.ca/",
      "type": "education-authority"
    },
    {
      "name": "English Montreal School Board",
      "description": {
        "en": "Official English-language school board serving parts of Montréal.",
        "ar": "Official English-language school board serving parts of Montréal."
      },
      "url": "https://www.emsb.qc.ca/",
      "type": "education-authority"
    },
    {
      "name": "Bibliothèques de Montréal",
      "description": {
        "en": "Municipal library network and learning resources.",
        "ar": "Municipal library network and learning resources."
      },
      "url": "https://montreal.ca/sujets/bibliotheques",
      "type": "library"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Montréal",
      "ar": "أسئلة شائعة عن التدريس في مونتريال"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "laval",
    "level": "city",
    "countryCode": "CA",
    "segments": [
      "canada",
      "quebec",
      "quebec-education-program",
      "laval"
    ],
    "parentId": "quebec-education-program",
    "childIds": [],
    "relatedIds": [
      "montreal",
      "brossard",
      "gatineau"
    ],
    "name": {
      "en": "Laval",
      "ar": "لافال"
    },
    "shortName": {
      "en": "Laval",
      "ar": "لافال"
    },
    "eyebrow": {
      "en": "Online tutoring in Laval",
      "ar": "دروس أونلاين في لافال"
    },
    "seo": {
      "title": {
        "en": "Online Tutoring In Laval | Mustafa Academy",
        "ar": "دروس خصوصية أونلاين في لافال | أكاديمية مصطفى"
      },
      "description": {
        "en": "Laval students may study through French-language service centres or eligible English pathways, so tutor matching should confirm the student’s school language, cycle, subject, and examination needs. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "قد يدرس طلاب لافال ضمن مراكز الخدمات الفرنسية أو المسار الإنجليزي المؤهل، لذلك يجب تأكيد لغة المدرسة والمرحلة والمادة والامتحانات المطلوبة. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "online tutoring in Laval",
        "ar": "دروس خصوصية أونلاين في لافال"
      },
      "secondaryKeywords": {
        "en": [
          "online tutoring in Laval",
          "online tutors serving Laval",
          "Arabic-speaking tutor Laval",
          "math tutoring Laval"
        ],
        "ar": [
          "دروس خصوصية أونلاين في لافال",
          "مدرسون أونلاين يخدمون طلاب لافال",
          "مدرس يتحدث العربية في لافال",
          "دروس رياضيات في لافال"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Laval",
        "ar": "دروس أونلاين للطلاب في لافال"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Laval",
      "ar": "دروس خصوصية أونلاين للطلاب في لافال"
    },
    "heroDescription": {
      "en": "Laval students may study through French-language service centres or eligible English pathways, so tutor matching should confirm the student’s school language, cycle, subject, and examination needs.",
      "ar": "قد يدرس طلاب لافال ضمن مراكز الخدمات الفرنسية أو المسار الإنجليزي المؤهل، لذلك يجب تأكيد لغة المدرسة والمرحلة والمادة والامتحانات المطلوبة."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Laval",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في لافال"
    },
    "introduction": {
      "en": "Laval students may study through French-language service centres or eligible English pathways, so tutor matching should confirm the student’s school language, cycle, subject, and examination needs. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "قد يدرس طلاب لافال ضمن مراكز الخدمات الفرنسية أو المسار الإنجليزي المؤهل، لذلك يجب تأكيد لغة المدرسة والمرحلة والمادة والامتحانات المطلوبة. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Laval students",
      "ar": "خدمات التدريس لطلاب لافال"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Laval",
      "ar": "المواد المتاحة لطلاب لافال"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Laval",
      "ar": "دعم المنهاج والنظام المدرسي في لافال"
    },
    "curriculumDescription": {
      "en": "Laval students may study through French-language service centres or eligible English pathways, so tutor matching should confirm the student’s school language, cycle, subject, and examination needs.",
      "ar": "قد يدرس طلاب لافال ضمن مراكز الخدمات الفرنسية أو المسار الإنجليزي المؤهل، لذلك يجب تأكيد لغة المدرسة والمرحلة والمادة والامتحانات المطلوبة."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "Secondary IV and V ministerial examinations",
        "description": {
          "en": "Support may focus on course-specific ministerial examinations and final secondary results where relevant.",
          "ar": "يمكن أن يركز الدعم على الامتحانات الوزارية الخاصة بالمقررات ونتائج المرحلتين الرابعة والخامسة الثانوية عند الحاجة."
        }
      },
      {
        "name": "School and centre service assessments",
        "description": {
          "en": "Tutoring can also support classroom assessments and locally assigned work.",
          "ar": "يمكن للدروس دعم تقييمات المدرسة والواجبات التي تحددها مراكز الخدمات المدرسية."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Laval",
      "ar": "دليل التعليم المحلي في لافال"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Relevant public school authorities: Centre de services scolaire de Laval, Sir Wilfrid Laurier School Board.",
        "Laval students may study through French-language service centres or eligible English pathways, so tutor matching should confirm the student’s school language, cycle, subject, and examination needs.",
        "The page targets local search intent naturally through its title, headings, FAQs, curriculum sections, and internal links.",
        "No school, board, district, library, college, university, or government partnership is implied."
      ],
      "ar": [
        "الجهات التعليمية العامة ذات الصلة: Centre de services scolaire de Laval، Sir Wilfrid Laurier School Board.",
        "قد يدرس طلاب لافال ضمن مراكز الخدمات الفرنسية أو المسار الإنجليزي المؤهل، لذلك يجب تأكيد لغة المدرسة والمرحلة والمادة والامتحانات المطلوبة.",
        "تُدمج كلمات البحث المحلية طبيعيًا في العنوان والعناوين الفرعية والأسئلة والمنهاج والروابط الداخلية.",
        "لا تُفهم الإشارة إلى أي مدرسة أو مجلس أو منطقة تعليمية أو مكتبة أو كلية أو جامعة أو جهة حكومية على أنها شراكة."
      ]
    },
    "resources": [
    {
      "name": "Centre de services scolaire de Laval",
      "description": {
        "en": "Official French-language school service centre serving Laval.",
        "ar": "Official French-language school service centre serving Laval."
      },
      "url": "https://csslaval.gouv.qc.ca/",
      "type": "education-authority"
    },
    {
      "name": "Sir Wilfrid Laurier School Board",
      "description": {
        "en": "Official English-language school board serving Laval and surrounding regions.",
        "ar": "Official English-language school board serving Laval and surrounding regions."
      },
      "url": "https://www.swlsb.ca/",
      "type": "education-authority"
    },
    {
      "name": "Bibliothèques de Laval",
      "description": {
        "en": "Municipal library learning resources.",
        "ar": "Municipal library learning resources."
      },
      "url": "https://www.laval.ca/Pages/Fr/Activites/bibliotheques.aspx",
      "type": "library"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Laval",
      "ar": "أسئلة شائعة عن التدريس في لافال"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "brossard",
    "level": "city",
    "countryCode": "CA",
    "segments": [
      "canada",
      "quebec",
      "quebec-education-program",
      "brossard"
    ],
    "parentId": "quebec-education-program",
    "childIds": [],
    "relatedIds": [
      "montreal",
      "laval",
      "gatineau"
    ],
    "name": {
      "en": "Brossard",
      "ar": "بروسار"
    },
    "shortName": {
      "en": "Brossard",
      "ar": "بروسار"
    },
    "eyebrow": {
      "en": "Online tutoring in Brossard",
      "ar": "دروس أونلاين في بروسار"
    },
    "seo": {
      "title": {
        "en": "Online Tutoring In Brossard | Mustafa Academy",
        "ar": "دروس خصوصية أونلاين في بروسار | أكاديمية مصطفى"
      },
      "description": {
        "en": "Brossard’s South Shore location and multilingual family population make French academic language, mathematics, science, and transition between school systems important tutoring needs. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "يجعل موقع بروسار في الضفة الجنوبية وتنوع الأسر اللغوي دعم اللغة الأكاديمية الفرنسية والرياضيات والعلوم والانتقال بين الأنظمة احتياجات مهمة. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "online tutoring in Brossard",
        "ar": "دروس خصوصية أونلاين في بروسار"
      },
      "secondaryKeywords": {
        "en": [
          "online tutoring in Brossard",
          "online tutors serving Brossard",
          "Arabic-speaking tutor Brossard",
          "math tutoring Brossard"
        ],
        "ar": [
          "دروس خصوصية أونلاين في بروسار",
          "مدرسون أونلاين يخدمون طلاب بروسار",
          "مدرس يتحدث العربية في بروسار",
          "دروس رياضيات في بروسار"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Brossard",
        "ar": "دروس أونلاين للطلاب في بروسار"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Brossard",
      "ar": "دروس خصوصية أونلاين للطلاب في بروسار"
    },
    "heroDescription": {
      "en": "Brossard’s South Shore location and multilingual family population make French academic language, mathematics, science, and transition between school systems important tutoring needs.",
      "ar": "يجعل موقع بروسار في الضفة الجنوبية وتنوع الأسر اللغوي دعم اللغة الأكاديمية الفرنسية والرياضيات والعلوم والانتقال بين الأنظمة احتياجات مهمة."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Brossard",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في بروسار"
    },
    "introduction": {
      "en": "Brossard’s South Shore location and multilingual family population make French academic language, mathematics, science, and transition between school systems important tutoring needs. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "يجعل موقع بروسار في الضفة الجنوبية وتنوع الأسر اللغوي دعم اللغة الأكاديمية الفرنسية والرياضيات والعلوم والانتقال بين الأنظمة احتياجات مهمة. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Brossard students",
      "ar": "خدمات التدريس لطلاب بروسار"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Brossard",
      "ar": "المواد المتاحة لطلاب بروسار"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Brossard",
      "ar": "دعم المنهاج والنظام المدرسي في بروسار"
    },
    "curriculumDescription": {
      "en": "Brossard’s South Shore location and multilingual family population make French academic language, mathematics, science, and transition between school systems important tutoring needs.",
      "ar": "يجعل موقع بروسار في الضفة الجنوبية وتنوع الأسر اللغوي دعم اللغة الأكاديمية الفرنسية والرياضيات والعلوم والانتقال بين الأنظمة احتياجات مهمة."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "Secondary IV and V ministerial examinations",
        "description": {
          "en": "Support may focus on course-specific ministerial examinations and final secondary results where relevant.",
          "ar": "يمكن أن يركز الدعم على الامتحانات الوزارية الخاصة بالمقررات ونتائج المرحلتين الرابعة والخامسة الثانوية عند الحاجة."
        }
      },
      {
        "name": "School and centre service assessments",
        "description": {
          "en": "Tutoring can also support classroom assessments and locally assigned work.",
          "ar": "يمكن للدروس دعم تقييمات المدرسة والواجبات التي تحددها مراكز الخدمات المدرسية."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Brossard",
      "ar": "دليل التعليم المحلي في بروسار"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Relevant public school authorities: Centre de services scolaire Marie-Victorin, Riverside School Board.",
        "Brossard’s South Shore location and multilingual family population make French academic language, mathematics, science, and transition between school systems important tutoring needs.",
        "The page targets local search intent naturally through its title, headings, FAQs, curriculum sections, and internal links.",
        "No school, board, district, library, college, university, or government partnership is implied."
      ],
      "ar": [
        "الجهات التعليمية العامة ذات الصلة: Centre de services scolaire Marie-Victorin، Riverside School Board.",
        "يجعل موقع بروسار في الضفة الجنوبية وتنوع الأسر اللغوي دعم اللغة الأكاديمية الفرنسية والرياضيات والعلوم والانتقال بين الأنظمة احتياجات مهمة.",
        "تُدمج كلمات البحث المحلية طبيعيًا في العنوان والعناوين الفرعية والأسئلة والمنهاج والروابط الداخلية.",
        "لا تُفهم الإشارة إلى أي مدرسة أو مجلس أو منطقة تعليمية أو مكتبة أو كلية أو جامعة أو جهة حكومية على أنها شراكة."
      ]
    },
    "resources": [
    {
      "name": "Centre de services scolaire Marie-Victorin",
      "description": {
        "en": "Official French-language school service centre serving Brossard and the South Shore.",
        "ar": "Official French-language school service centre serving Brossard and the South Shore."
      },
      "url": "https://cssmv.gouv.qc.ca/",
      "type": "education-authority"
    },
    {
      "name": "Riverside School Board",
      "description": {
        "en": "Official English-language school board serving communities on Montréal’s South Shore.",
        "ar": "Official English-language school board serving communities on Montréal’s South Shore."
      },
      "url": "https://www.rsb.qc.ca/",
      "type": "education-authority"
    },
    {
      "name": "Bibliothèque de Brossard",
      "description": {
        "en": "Municipal library and learning resources.",
        "ar": "Municipal library and learning resources."
      },
      "url": "https://brossard.ca/loisirs-culture-et-vie-communautaire/bibliotheque/",
      "type": "library"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Brossard",
      "ar": "أسئلة شائعة عن التدريس في بروسار"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "gatineau",
    "level": "city",
    "countryCode": "CA",
    "segments": [
      "canada",
      "quebec",
      "quebec-education-program",
      "gatineau"
    ],
    "parentId": "quebec-education-program",
    "childIds": [],
    "relatedIds": [
      "montreal",
      "laval",
      "brossard"
    ],
    "name": {
      "en": "Gatineau",
      "ar": "غاتينو"
    },
    "shortName": {
      "en": "Gatineau",
      "ar": "غاتينو"
    },
    "eyebrow": {
      "en": "Online tutoring in Gatineau",
      "ar": "دروس أونلاين في غاتينو"
    },
    "seo": {
      "title": {
        "en": "Online Tutoring In Gatineau | Mustafa Academy",
        "ar": "دروس خصوصية أونلاين في غاتينو | أكاديمية مصطفى"
      },
      "description": {
        "en": "Gatineau sits within the Ottawa–Gatineau metropolitan area but follows Quebec’s education structure, making province, language of instruction, and cycle especially important. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "تقع غاتينو ضمن منطقة أوتاوا–غاتينو الحضرية لكنها تتبع نظام كيبيك، لذلك تُعد المقاطعة ولغة التدريس والمرحلة عوامل أساسية. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "online tutoring in Gatineau",
        "ar": "دروس خصوصية أونلاين في غاتينو"
      },
      "secondaryKeywords": {
        "en": [
          "online tutoring in Gatineau",
          "online tutors serving Gatineau",
          "Arabic-speaking tutor Gatineau",
          "math tutoring Gatineau"
        ],
        "ar": [
          "دروس خصوصية أونلاين في غاتينو",
          "مدرسون أونلاين يخدمون طلاب غاتينو",
          "مدرس يتحدث العربية في غاتينو",
          "دروس رياضيات في غاتينو"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Gatineau",
        "ar": "دروس أونلاين للطلاب في غاتينو"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Gatineau",
      "ar": "دروس خصوصية أونلاين للطلاب في غاتينو"
    },
    "heroDescription": {
      "en": "Gatineau sits within the Ottawa–Gatineau metropolitan area but follows Quebec’s education structure, making province, language of instruction, and cycle especially important.",
      "ar": "تقع غاتينو ضمن منطقة أوتاوا–غاتينو الحضرية لكنها تتبع نظام كيبيك، لذلك تُعد المقاطعة ولغة التدريس والمرحلة عوامل أساسية."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Gatineau",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في غاتينو"
    },
    "introduction": {
      "en": "Gatineau sits within the Ottawa–Gatineau metropolitan area but follows Quebec’s education structure, making province, language of instruction, and cycle especially important. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "تقع غاتينو ضمن منطقة أوتاوا–غاتينو الحضرية لكنها تتبع نظام كيبيك، لذلك تُعد المقاطعة ولغة التدريس والمرحلة عوامل أساسية. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Gatineau students",
      "ar": "خدمات التدريس لطلاب غاتينو"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Gatineau",
      "ar": "المواد المتاحة لطلاب غاتينو"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Gatineau",
      "ar": "دعم المنهاج والنظام المدرسي في غاتينو"
    },
    "curriculumDescription": {
      "en": "Gatineau sits within the Ottawa–Gatineau metropolitan area but follows Quebec’s education structure, making province, language of instruction, and cycle especially important.",
      "ar": "تقع غاتينو ضمن منطقة أوتاوا–غاتينو الحضرية لكنها تتبع نظام كيبيك، لذلك تُعد المقاطعة ولغة التدريس والمرحلة عوامل أساسية."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "Secondary IV and V ministerial examinations",
        "description": {
          "en": "Support may focus on course-specific ministerial examinations and final secondary results where relevant.",
          "ar": "يمكن أن يركز الدعم على الامتحانات الوزارية الخاصة بالمقررات ونتائج المرحلتين الرابعة والخامسة الثانوية عند الحاجة."
        }
      },
      {
        "name": "School and centre service assessments",
        "description": {
          "en": "Tutoring can also support classroom assessments and locally assigned work.",
          "ar": "يمكن للدروس دعم تقييمات المدرسة والواجبات التي تحددها مراكز الخدمات المدرسية."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Gatineau",
      "ar": "دليل التعليم المحلي في غاتينو"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Relevant public school authorities: Centre de services scolaire des Portages-de-l’Outaouais, Western Québec School Board.",
        "Gatineau sits within the Ottawa–Gatineau metropolitan area but follows Quebec’s education structure, making province, language of instruction, and cycle especially important.",
        "The page targets local search intent naturally through its title, headings, FAQs, curriculum sections, and internal links.",
        "No school, board, district, library, college, university, or government partnership is implied."
      ],
      "ar": [
        "الجهات التعليمية العامة ذات الصلة: Centre de services scolaire des Portages-de-l’Outaouais، Western Québec School Board.",
        "تقع غاتينو ضمن منطقة أوتاوا–غاتينو الحضرية لكنها تتبع نظام كيبيك، لذلك تُعد المقاطعة ولغة التدريس والمرحلة عوامل أساسية.",
        "تُدمج كلمات البحث المحلية طبيعيًا في العنوان والعناوين الفرعية والأسئلة والمنهاج والروابط الداخلية.",
        "لا تُفهم الإشارة إلى أي مدرسة أو مجلس أو منطقة تعليمية أو مكتبة أو كلية أو جامعة أو جهة حكومية على أنها شراكة."
      ]
    },
    "resources": [
    {
      "name": "Centre de services scolaire des Portages-de-l’Outaouais",
      "description": {
        "en": "Official French-language school service centre serving Gatineau.",
        "ar": "Official French-language school service centre serving Gatineau."
      },
      "url": "https://www.csspo.gouv.qc.ca/",
      "type": "education-authority"
    },
    {
      "name": "Western Québec School Board",
      "description": {
        "en": "Official English-language school board serving western Quebec.",
        "ar": "Official English-language school board serving western Quebec."
      },
      "url": "https://westernquebec.ca/",
      "type": "education-authority"
    },
    {
      "name": "Bibliothèque municipale de Gatineau",
      "description": {
        "en": "Municipal library and educational resources.",
        "ar": "Municipal library and educational resources."
      },
      "url": "https://www.gatineau.ca/portail/default.aspx?p=guichet_municipal/bibliotheque",
      "type": "library"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Gatineau",
      "ar": "أسئلة شائعة عن التدريس في غاتينو"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "dearborn",
    "level": "city",
    "countryCode": "US",
    "segments": [
      "united-states",
      "michigan",
      "michigan-academic-standards",
      "dearborn"
    ],
    "parentId": "michigan-academic-standards",
    "childIds": [],
    "relatedIds": [
      "dearborn-heights",
      "sterling-heights",
      "hamtramck",
      "detroit"
    ],
    "name": {
      "en": "Dearborn",
      "ar": "ديربورن"
    },
    "shortName": {
      "en": "Dearborn",
      "ar": "ديربورن"
    },
    "eyebrow": {
      "en": "Online tutoring in Dearborn",
      "ar": "دروس أونلاين في ديربورن"
    },
    "seo": {
      "title": {
        "en": "Online Tutoring In Dearborn | Mustafa Academy",
        "ar": "دروس خصوصية أونلاين في ديربورن | أكاديمية مصطفى"
      },
      "description": {
        "en": "Dearborn is one of the most important Arab-American education markets. Families may need bilingual communication, Michigan standards support, English academic development, M-STEP, PSAT, SAT, and high-school course tutoring. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "تُعد ديربورن من أهم أسواق التعليم العربية الأمريكية، وقد تحتاج الأسر إلى التواصل الثنائي ودعم معايير ميشيغان واللغة الأكاديمية وM-STEP وPSAT وSAT ومقررات الثانوية. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "online tutoring in Dearborn",
        "ar": "دروس خصوصية أونلاين في ديربورن"
      },
      "secondaryKeywords": {
        "en": [
          "online tutoring in Dearborn",
          "online tutors serving Dearborn",
          "Arabic-speaking tutor Dearborn",
          "math tutoring Dearborn"
        ],
        "ar": [
          "دروس خصوصية أونلاين في ديربورن",
          "مدرسون أونلاين يخدمون طلاب ديربورن",
          "مدرس يتحدث العربية في ديربورن",
          "دروس رياضيات في ديربورن"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Dearborn",
        "ar": "دروس أونلاين للطلاب في ديربورن"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Dearborn",
      "ar": "دروس خصوصية أونلاين للطلاب في ديربورن"
    },
    "heroDescription": {
      "en": "Dearborn is one of the most important Arab-American education markets. Families may need bilingual communication, Michigan standards support, English academic development, M-STEP, PSAT, SAT, and high-school course tutoring.",
      "ar": "تُعد ديربورن من أهم أسواق التعليم العربية الأمريكية، وقد تحتاج الأسر إلى التواصل الثنائي ودعم معايير ميشيغان واللغة الأكاديمية وM-STEP وPSAT وSAT ومقررات الثانوية."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Dearborn",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في ديربورن"
    },
    "introduction": {
      "en": "Dearborn is one of the most important Arab-American education markets. Families may need bilingual communication, Michigan standards support, English academic development, M-STEP, PSAT, SAT, and high-school course tutoring. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "تُعد ديربورن من أهم أسواق التعليم العربية الأمريكية، وقد تحتاج الأسر إلى التواصل الثنائي ودعم معايير ميشيغان واللغة الأكاديمية وM-STEP وPSAT وSAT ومقررات الثانوية. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Dearborn students",
      "ar": "خدمات التدريس لطلاب ديربورن"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Dearborn",
      "ar": "المواد المتاحة لطلاب ديربورن"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Dearborn",
      "ar": "دعم المنهاج والنظام المدرسي في ديربورن"
    },
    "curriculumDescription": {
      "en": "Dearborn is one of the most important Arab-American education markets. Families may need bilingual communication, Michigan standards support, English academic development, M-STEP, PSAT, SAT, and high-school course tutoring.",
      "ar": "تُعد ديربورن من أهم أسواق التعليم العربية الأمريكية، وقد تحتاج الأسر إلى التواصل الثنائي ودعم معايير ميشيغان واللغة الأكاديمية وM-STEP وPSAT وSAT ومقررات الثانوية."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "M-STEP",
        "description": {
          "en": "Michigan’s standards-based assessment used across designated elementary, middle, and high-school grades.",
          "ar": "اختبار ميشيغان القائم على المعايير والمستخدم في صفوف محددة من المراحل المختلفة."
        }
      },
      {
        "name": "PSAT and SAT",
        "description": {
          "en": "College Board assessments are part of Michigan’s secondary assessment sequence.",
          "ar": "تدخل اختبارات College Board ضمن تسلسل التقييم في المرحلة الثانوية بميشيغان."
        }
      },
      {
        "name": "Michigan Merit Examination",
        "description": {
          "en": "The MME assesses Grade 11 and eligible Grade 12 students using SAT, work-readiness, science, and social-studies components.",
          "ar": "يقيم MME طلاب الصف الحادي عشر وبعض طلاب الثاني عشر عبر مكونات SAT والاستعداد للعمل والعلوم والدراسات الاجتماعية."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Dearborn",
      "ar": "دليل التعليم المحلي في ديربورن"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Relevant public school authorities: Dearborn Public Schools.",
        "Dearborn is one of the most important Arab-American education markets. Families may need bilingual communication, Michigan standards support, English academic development, M-STEP, PSAT, SAT, and high-school course tutoring.",
        "The page targets local search intent naturally through its title, headings, FAQs, curriculum sections, and internal links.",
        "No school, board, district, library, college, university, or government partnership is implied."
      ],
      "ar": [
        "الجهات التعليمية العامة ذات الصلة: Dearborn Public Schools.",
        "تُعد ديربورن من أهم أسواق التعليم العربية الأمريكية، وقد تحتاج الأسر إلى التواصل الثنائي ودعم معايير ميشيغان واللغة الأكاديمية وM-STEP وPSAT وSAT ومقررات الثانوية.",
        "تُدمج كلمات البحث المحلية طبيعيًا في العنوان والعناوين الفرعية والأسئلة والمنهاج والروابط الداخلية.",
        "لا تُفهم الإشارة إلى أي مدرسة أو مجلس أو منطقة تعليمية أو مكتبة أو كلية أو جامعة أو جهة حكومية على أنها شراكة."
      ]
    },
    "resources": [
    {
      "name": "Dearborn Public Schools",
      "description": {
        "en": "Official public school district serving Dearborn.",
        "ar": "Official public school district serving Dearborn."
      },
      "url": "https://dearbornschools.org/",
      "type": "education-authority"
    },
    {
      "name": "Dearborn Public Library",
      "description": {
        "en": "Local library homework, literacy, and research resources.",
        "ar": "Local library homework, literacy, and research resources."
      },
      "url": "https://dearbornlibrary.org/",
      "type": "library"
    },
    {
      "name": "University of Michigan-Dearborn",
      "description": {
        "en": "Local postsecondary reference and academic pathway resource.",
        "ar": "Local postsecondary reference and academic pathway resource."
      },
      "url": "https://umdearborn.edu/",
      "type": "university"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Dearborn",
      "ar": "أسئلة شائعة عن التدريس في ديربورن"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "dearborn-heights",
    "level": "city",
    "countryCode": "US",
    "segments": [
      "united-states",
      "michigan",
      "michigan-academic-standards",
      "dearborn-heights"
    ],
    "parentId": "michigan-academic-standards",
    "childIds": [],
    "relatedIds": [
      "dearborn",
      "sterling-heights",
      "hamtramck",
      "detroit"
    ],
    "name": {
      "en": "Dearborn Heights",
      "ar": "ديربورن هايتس"
    },
    "shortName": {
      "en": "Dearborn Heights",
      "ar": "ديربورن هايتس"
    },
    "eyebrow": {
      "en": "Online tutoring in Dearborn Heights",
      "ar": "دروس أونلاين في ديربورن هايتس"
    },
    "seo": {
      "title": {
        "en": "Online Tutoring In Dearborn Heights | Mustafa Academy",
        "ar": "دروس خصوصية أونلاين في ديربورن هايتس | أكاديمية مصطفى"
      },
      "description": {
        "en": "Dearborn Heights is served by multiple school districts, so the tutoring intake must confirm the exact district, grade, course, and testing calendar before planning instruction. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "تخدم ديربورن هايتس عدة مناطق تعليمية، لذلك يجب تحديد المنطقة والصف والمقرر وجدول الاختبارات قبل إعداد خطة التدريس. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "online tutoring in Dearborn Heights",
        "ar": "دروس خصوصية أونلاين في ديربورن هايتس"
      },
      "secondaryKeywords": {
        "en": [
          "online tutoring in Dearborn Heights",
          "online tutors serving Dearborn Heights",
          "Arabic-speaking tutor Dearborn Heights",
          "math tutoring Dearborn Heights"
        ],
        "ar": [
          "دروس خصوصية أونلاين في ديربورن هايتس",
          "مدرسون أونلاين يخدمون طلاب ديربورن هايتس",
          "مدرس يتحدث العربية في ديربورن هايتس",
          "دروس رياضيات في ديربورن هايتس"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Dearborn Heights",
        "ar": "دروس أونلاين للطلاب في ديربورن هايتس"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Dearborn Heights",
      "ar": "دروس خصوصية أونلاين للطلاب في ديربورن هايتس"
    },
    "heroDescription": {
      "en": "Dearborn Heights is served by multiple school districts, so the tutoring intake must confirm the exact district, grade, course, and testing calendar before planning instruction.",
      "ar": "تخدم ديربورن هايتس عدة مناطق تعليمية، لذلك يجب تحديد المنطقة والصف والمقرر وجدول الاختبارات قبل إعداد خطة التدريس."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Dearborn Heights",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في ديربورن هايتس"
    },
    "introduction": {
      "en": "Dearborn Heights is served by multiple school districts, so the tutoring intake must confirm the exact district, grade, course, and testing calendar before planning instruction. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "تخدم ديربورن هايتس عدة مناطق تعليمية، لذلك يجب تحديد المنطقة والصف والمقرر وجدول الاختبارات قبل إعداد خطة التدريس. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Dearborn Heights students",
      "ar": "خدمات التدريس لطلاب ديربورن هايتس"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Dearborn Heights",
      "ar": "المواد المتاحة لطلاب ديربورن هايتس"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Dearborn Heights",
      "ar": "دعم المنهاج والنظام المدرسي في ديربورن هايتس"
    },
    "curriculumDescription": {
      "en": "Dearborn Heights is served by multiple school districts, so the tutoring intake must confirm the exact district, grade, course, and testing calendar before planning instruction.",
      "ar": "تخدم ديربورن هايتس عدة مناطق تعليمية، لذلك يجب تحديد المنطقة والصف والمقرر وجدول الاختبارات قبل إعداد خطة التدريس."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "M-STEP",
        "description": {
          "en": "Michigan’s standards-based assessment used across designated elementary, middle, and high-school grades.",
          "ar": "اختبار ميشيغان القائم على المعايير والمستخدم في صفوف محددة من المراحل المختلفة."
        }
      },
      {
        "name": "PSAT and SAT",
        "description": {
          "en": "College Board assessments are part of Michigan’s secondary assessment sequence.",
          "ar": "تدخل اختبارات College Board ضمن تسلسل التقييم في المرحلة الثانوية بميشيغان."
        }
      },
      {
        "name": "Michigan Merit Examination",
        "description": {
          "en": "The MME assesses Grade 11 and eligible Grade 12 students using SAT, work-readiness, science, and social-studies components.",
          "ar": "يقيم MME طلاب الصف الحادي عشر وبعض طلاب الثاني عشر عبر مكونات SAT والاستعداد للعمل والعلوم والدراسات الاجتماعية."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Dearborn Heights",
      "ar": "دليل التعليم المحلي في ديربورن هايتس"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Relevant public school authorities: Crestwood School District, Dearborn Heights School District 7, Westwood Community School District.",
        "Dearborn Heights is served by multiple school districts, so the tutoring intake must confirm the exact district, grade, course, and testing calendar before planning instruction.",
        "The page targets local search intent naturally through its title, headings, FAQs, curriculum sections, and internal links.",
        "No school, board, district, library, college, university, or government partnership is implied."
      ],
      "ar": [
        "الجهات التعليمية العامة ذات الصلة: Crestwood School District، Dearborn Heights School District 7، Westwood Community School District.",
        "تخدم ديربورن هايتس عدة مناطق تعليمية، لذلك يجب تحديد المنطقة والصف والمقرر وجدول الاختبارات قبل إعداد خطة التدريس.",
        "تُدمج كلمات البحث المحلية طبيعيًا في العنوان والعناوين الفرعية والأسئلة والمنهاج والروابط الداخلية.",
        "لا تُفهم الإشارة إلى أي مدرسة أو مجلس أو منطقة تعليمية أو مكتبة أو كلية أو جامعة أو جهة حكومية على أنها شراكة."
      ]
    },
    "resources": [
    {
      "name": "Crestwood School District",
      "description": {
        "en": "Official district serving part of Dearborn Heights.",
        "ar": "Official district serving part of Dearborn Heights."
      },
      "url": "https://www.crestwoodschools.org/",
      "type": "education-authority"
    },
    {
      "name": "Dearborn Heights School District 7",
      "description": {
        "en": "Official district serving part of Dearborn Heights.",
        "ar": "Official district serving part of Dearborn Heights."
      },
      "url": "https://www.district7.net/",
      "type": "education-authority"
    },
    {
      "name": "Caroline Kennedy Library",
      "description": {
        "en": "Dearborn Heights public library and learning resources.",
        "ar": "Dearborn Heights public library and learning resources."
      },
      "url": "https://www.dhcl.michlibrary.org/",
      "type": "library"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Dearborn Heights",
      "ar": "أسئلة شائعة عن التدريس في ديربورن هايتس"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "sterling-heights",
    "level": "city",
    "countryCode": "US",
    "segments": [
      "united-states",
      "michigan",
      "michigan-academic-standards",
      "sterling-heights"
    ],
    "parentId": "michigan-academic-standards",
    "childIds": [],
    "relatedIds": [
      "dearborn",
      "dearborn-heights",
      "hamtramck",
      "detroit"
    ],
    "name": {
      "en": "Sterling Heights",
      "ar": "ستيرلينغ هايتس"
    },
    "shortName": {
      "en": "Sterling Heights",
      "ar": "ستيرلينغ هايتس"
    },
    "eyebrow": {
      "en": "Online tutoring in Sterling Heights",
      "ar": "دروس أونلاين في ستيرلينغ هايتس"
    },
    "seo": {
      "title": {
        "en": "Online Tutoring In Sterling Heights | Mustafa Academy",
        "ar": "دروس خصوصية أونلاين في ستيرلينغ هايتس | أكاديمية مصطفى"
      },
      "description": {
        "en": "Sterling Heights students may be enrolled in different districts and course pathways, making exact school context important for mathematics, English, science, AP, and assessment support. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "قد يدرس طلاب ستيرلينغ هايتس في مناطق تعليمية ومسارات مختلفة، مما يجعل سياق المدرسة مهمًا لدعم الرياضيات والإنجليزية والعلوم وAP والاختبارات. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "online tutoring in Sterling Heights",
        "ar": "دروس خصوصية أونلاين في ستيرلينغ هايتس"
      },
      "secondaryKeywords": {
        "en": [
          "online tutoring in Sterling Heights",
          "online tutors serving Sterling Heights",
          "Arabic-speaking tutor Sterling Heights",
          "math tutoring Sterling Heights"
        ],
        "ar": [
          "دروس خصوصية أونلاين في ستيرلينغ هايتس",
          "مدرسون أونلاين يخدمون طلاب ستيرلينغ هايتس",
          "مدرس يتحدث العربية في ستيرلينغ هايتس",
          "دروس رياضيات في ستيرلينغ هايتس"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Sterling Heights",
        "ar": "دروس أونلاين للطلاب في ستيرلينغ هايتس"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Sterling Heights",
      "ar": "دروس خصوصية أونلاين للطلاب في ستيرلينغ هايتس"
    },
    "heroDescription": {
      "en": "Sterling Heights students may be enrolled in different districts and course pathways, making exact school context important for mathematics, English, science, AP, and assessment support.",
      "ar": "قد يدرس طلاب ستيرلينغ هايتس في مناطق تعليمية ومسارات مختلفة، مما يجعل سياق المدرسة مهمًا لدعم الرياضيات والإنجليزية والعلوم وAP والاختبارات."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Sterling Heights",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في ستيرلينغ هايتس"
    },
    "introduction": {
      "en": "Sterling Heights students may be enrolled in different districts and course pathways, making exact school context important for mathematics, English, science, AP, and assessment support. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "قد يدرس طلاب ستيرلينغ هايتس في مناطق تعليمية ومسارات مختلفة، مما يجعل سياق المدرسة مهمًا لدعم الرياضيات والإنجليزية والعلوم وAP والاختبارات. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Sterling Heights students",
      "ar": "خدمات التدريس لطلاب ستيرلينغ هايتس"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Sterling Heights",
      "ar": "المواد المتاحة لطلاب ستيرلينغ هايتس"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Sterling Heights",
      "ar": "دعم المنهاج والنظام المدرسي في ستيرلينغ هايتس"
    },
    "curriculumDescription": {
      "en": "Sterling Heights students may be enrolled in different districts and course pathways, making exact school context important for mathematics, English, science, AP, and assessment support.",
      "ar": "قد يدرس طلاب ستيرلينغ هايتس في مناطق تعليمية ومسارات مختلفة، مما يجعل سياق المدرسة مهمًا لدعم الرياضيات والإنجليزية والعلوم وAP والاختبارات."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "M-STEP",
        "description": {
          "en": "Michigan’s standards-based assessment used across designated elementary, middle, and high-school grades.",
          "ar": "اختبار ميشيغان القائم على المعايير والمستخدم في صفوف محددة من المراحل المختلفة."
        }
      },
      {
        "name": "PSAT and SAT",
        "description": {
          "en": "College Board assessments are part of Michigan’s secondary assessment sequence.",
          "ar": "تدخل اختبارات College Board ضمن تسلسل التقييم في المرحلة الثانوية بميشيغان."
        }
      },
      {
        "name": "Michigan Merit Examination",
        "description": {
          "en": "The MME assesses Grade 11 and eligible Grade 12 students using SAT, work-readiness, science, and social-studies components.",
          "ar": "يقيم MME طلاب الصف الحادي عشر وبعض طلاب الثاني عشر عبر مكونات SAT والاستعداد للعمل والعلوم والدراسات الاجتماعية."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Sterling Heights",
      "ar": "دليل التعليم المحلي في ستيرلينغ هايتس"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Relevant public school authorities: Utica Community Schools, Warren Consolidated Schools.",
        "Sterling Heights students may be enrolled in different districts and course pathways, making exact school context important for mathematics, English, science, AP, and assessment support.",
        "The page targets local search intent naturally through its title, headings, FAQs, curriculum sections, and internal links.",
        "No school, board, district, library, college, university, or government partnership is implied."
      ],
      "ar": [
        "الجهات التعليمية العامة ذات الصلة: Utica Community Schools، Warren Consolidated Schools.",
        "قد يدرس طلاب ستيرلينغ هايتس في مناطق تعليمية ومسارات مختلفة، مما يجعل سياق المدرسة مهمًا لدعم الرياضيات والإنجليزية والعلوم وAP والاختبارات.",
        "تُدمج كلمات البحث المحلية طبيعيًا في العنوان والعناوين الفرعية والأسئلة والمنهاج والروابط الداخلية.",
        "لا تُفهم الإشارة إلى أي مدرسة أو مجلس أو منطقة تعليمية أو مكتبة أو كلية أو جامعة أو جهة حكومية على أنها شراكة."
      ]
    },
    "resources": [
    {
      "name": "Utica Community Schools",
      "description": {
        "en": "Official school district serving much of Sterling Heights.",
        "ar": "Official school district serving much of Sterling Heights."
      },
      "url": "https://www.uticak12.org/",
      "type": "education-authority"
    },
    {
      "name": "Warren Consolidated Schools",
      "description": {
        "en": "Official district serving parts of Sterling Heights and neighboring communities.",
        "ar": "Official district serving parts of Sterling Heights and neighboring communities."
      },
      "url": "https://www.wcs.k12.mi.us/",
      "type": "education-authority"
    },
    {
      "name": "Sterling Heights Public Library",
      "description": {
        "en": "Local library and study resources.",
        "ar": "Local library and study resources."
      },
      "url": "https://www.sterlingheights.gov/590/Library",
      "type": "library"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Sterling Heights",
      "ar": "أسئلة شائعة عن التدريس في ستيرلينغ هايتس"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "hamtramck",
    "level": "city",
    "countryCode": "US",
    "segments": [
      "united-states",
      "michigan",
      "michigan-academic-standards",
      "hamtramck"
    ],
    "parentId": "michigan-academic-standards",
    "childIds": [],
    "relatedIds": [
      "dearborn",
      "dearborn-heights",
      "sterling-heights",
      "detroit"
    ],
    "name": {
      "en": "Hamtramck",
      "ar": "هامترامك"
    },
    "shortName": {
      "en": "Hamtramck",
      "ar": "هامترامك"
    },
    "eyebrow": {
      "en": "Online tutoring in Hamtramck",
      "ar": "دروس أونلاين في هامترامك"
    },
    "seo": {
      "title": {
        "en": "Online Tutoring In Hamtramck | Mustafa Academy",
        "ar": "دروس خصوصية أونلاين في هامترامك | أكاديمية مصطفى"
      },
      "description": {
        "en": "Hamtramck’s multilingual student population creates strong needs in academic English, foundational mathematics, science vocabulary, homework routines, and communication with families. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "يخلق التنوع اللغوي في هامترامك احتياجًا قويًا للغة الإنجليزية الأكاديمية والرياضيات التأسيسية ومفردات العلوم وروتين الواجبات والتواصل مع الأسر. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "online tutoring in Hamtramck",
        "ar": "دروس خصوصية أونلاين في هامترامك"
      },
      "secondaryKeywords": {
        "en": [
          "online tutoring in Hamtramck",
          "online tutors serving Hamtramck",
          "Arabic-speaking tutor Hamtramck",
          "math tutoring Hamtramck"
        ],
        "ar": [
          "دروس خصوصية أونلاين في هامترامك",
          "مدرسون أونلاين يخدمون طلاب هامترامك",
          "مدرس يتحدث العربية في هامترامك",
          "دروس رياضيات في هامترامك"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Hamtramck",
        "ar": "دروس أونلاين للطلاب في هامترامك"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Hamtramck",
      "ar": "دروس خصوصية أونلاين للطلاب في هامترامك"
    },
    "heroDescription": {
      "en": "Hamtramck’s multilingual student population creates strong needs in academic English, foundational mathematics, science vocabulary, homework routines, and communication with families.",
      "ar": "يخلق التنوع اللغوي في هامترامك احتياجًا قويًا للغة الإنجليزية الأكاديمية والرياضيات التأسيسية ومفردات العلوم وروتين الواجبات والتواصل مع الأسر."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Hamtramck",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في هامترامك"
    },
    "introduction": {
      "en": "Hamtramck’s multilingual student population creates strong needs in academic English, foundational mathematics, science vocabulary, homework routines, and communication with families. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "يخلق التنوع اللغوي في هامترامك احتياجًا قويًا للغة الإنجليزية الأكاديمية والرياضيات التأسيسية ومفردات العلوم وروتين الواجبات والتواصل مع الأسر. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Hamtramck students",
      "ar": "خدمات التدريس لطلاب هامترامك"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Hamtramck",
      "ar": "المواد المتاحة لطلاب هامترامك"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Hamtramck",
      "ar": "دعم المنهاج والنظام المدرسي في هامترامك"
    },
    "curriculumDescription": {
      "en": "Hamtramck’s multilingual student population creates strong needs in academic English, foundational mathematics, science vocabulary, homework routines, and communication with families.",
      "ar": "يخلق التنوع اللغوي في هامترامك احتياجًا قويًا للغة الإنجليزية الأكاديمية والرياضيات التأسيسية ومفردات العلوم وروتين الواجبات والتواصل مع الأسر."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "M-STEP",
        "description": {
          "en": "Michigan’s standards-based assessment used across designated elementary, middle, and high-school grades.",
          "ar": "اختبار ميشيغان القائم على المعايير والمستخدم في صفوف محددة من المراحل المختلفة."
        }
      },
      {
        "name": "PSAT and SAT",
        "description": {
          "en": "College Board assessments are part of Michigan’s secondary assessment sequence.",
          "ar": "تدخل اختبارات College Board ضمن تسلسل التقييم في المرحلة الثانوية بميشيغان."
        }
      },
      {
        "name": "Michigan Merit Examination",
        "description": {
          "en": "The MME assesses Grade 11 and eligible Grade 12 students using SAT, work-readiness, science, and social-studies components.",
          "ar": "يقيم MME طلاب الصف الحادي عشر وبعض طلاب الثاني عشر عبر مكونات SAT والاستعداد للعمل والعلوم والدراسات الاجتماعية."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Hamtramck",
      "ar": "دليل التعليم المحلي في هامترامك"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Relevant public school authorities: Hamtramck Public Schools.",
        "Hamtramck’s multilingual student population creates strong needs in academic English, foundational mathematics, science vocabulary, homework routines, and communication with families.",
        "The page targets local search intent naturally through its title, headings, FAQs, curriculum sections, and internal links.",
        "No school, board, district, library, college, university, or government partnership is implied."
      ],
      "ar": [
        "الجهات التعليمية العامة ذات الصلة: Hamtramck Public Schools.",
        "يخلق التنوع اللغوي في هامترامك احتياجًا قويًا للغة الإنجليزية الأكاديمية والرياضيات التأسيسية ومفردات العلوم وروتين الواجبات والتواصل مع الأسر.",
        "تُدمج كلمات البحث المحلية طبيعيًا في العنوان والعناوين الفرعية والأسئلة والمنهاج والروابط الداخلية.",
        "لا تُفهم الإشارة إلى أي مدرسة أو مجلس أو منطقة تعليمية أو مكتبة أو كلية أو جامعة أو جهة حكومية على أنها شراكة."
      ]
    },
    "resources": [
    {
      "name": "Hamtramck Public Schools",
      "description": {
        "en": "Official public school district serving Hamtramck.",
        "ar": "Official public school district serving Hamtramck."
      },
      "url": "https://www.hamtramckschools.org/",
      "type": "education-authority"
    },
    {
      "name": "Hamtramck Public Library",
      "description": {
        "en": "Local literacy, homework, and community learning resources.",
        "ar": "Local literacy, homework, and community learning resources."
      },
      "url": "https://hamtramck.lib.mi.us/",
      "type": "library"
    },
    {
      "name": "Michigan M-STEP",
      "description": {
        "en": "Official assessment information for Michigan students.",
        "ar": "Official assessment information for Michigan students."
      },
      "url": "https://www.michigan.gov/mde/services/student-assessment/m-step",
      "type": "assessment"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Hamtramck",
      "ar": "أسئلة شائعة عن التدريس في هامترامك"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  },
  {
    "id": "detroit",
    "level": "city",
    "countryCode": "US",
    "segments": [
      "united-states",
      "michigan",
      "michigan-academic-standards",
      "detroit"
    ],
    "parentId": "michigan-academic-standards",
    "childIds": [],
    "relatedIds": [
      "dearborn",
      "dearborn-heights",
      "sterling-heights",
      "hamtramck"
    ],
    "name": {
      "en": "Detroit",
      "ar": "ديترويت"
    },
    "shortName": {
      "en": "Detroit",
      "ar": "ديترويت"
    },
    "eyebrow": {
      "en": "Online tutoring in Detroit",
      "ar": "دروس أونلاين في ديترويت"
    },
    "seo": {
      "title": {
        "en": "Online Tutoring In Detroit | Mustafa Academy",
        "ar": "دروس خصوصية أونلاين في ديترويت | أكاديمية مصطفى"
      },
      "description": {
        "en": "Detroit tutoring needs vary widely by school, grade, credit pathway, and student goal. The page therefore prioritizes precise intake, standards alignment, homework support, and secondary assessment planning. Explore one-to-one online tutoring for Grades 1–12 with curriculum and assessment support.",
        "ar": "تختلف احتياجات طلاب ديترويت حسب المدرسة والصف ومسار المقررات وهدف الطالب، لذلك تركز الصفحة على جمع معلومات دقيقة وتوافق المعايير والواجبات والتقييمات الثانوية. استكشف دروسًا فردية أونلاين للصفوف 1–12 مع دعم المنهاج والاختبارات."
      },
      "primaryKeyword": {
        "en": "online tutoring in Detroit",
        "ar": "دروس خصوصية أونلاين في ديترويت"
      },
      "secondaryKeywords": {
        "en": [
          "online tutoring in Detroit",
          "online tutors serving Detroit",
          "Arabic-speaking tutor Detroit",
          "math tutoring Detroit"
        ],
        "ar": [
          "دروس خصوصية أونلاين في ديترويت",
          "مدرسون أونلاين يخدمون طلاب ديترويت",
          "مدرس يتحدث العربية في ديترويت",
          "دروس رياضيات في ديترويت"
        ]
      },
      "imageAlt": {
        "en": "Online tutoring for students in Detroit",
        "ar": "دروس أونلاين للطلاب في ديترويت"
      }
    },
    "heroTitle": {
      "en": "Online tutoring for students in Detroit",
      "ar": "دروس خصوصية أونلاين للطلاب في ديترويت"
    },
    "heroDescription": {
      "en": "Detroit tutoring needs vary widely by school, grade, credit pathway, and student goal. The page therefore prioritizes precise intake, standards alignment, homework support, and secondary assessment planning.",
      "ar": "تختلف احتياجات طلاب ديترويت حسب المدرسة والصف ومسار المقررات وهدف الطالب، لذلك تركز الصفحة على جمع معلومات دقيقة وتوافق المعايير والواجبات والتقييمات الثانوية."
    },
    "trustPoints": {
      "en": [
        "Grades 1–12",
        "One-to-one online lessons",
        "Curriculum-aware support",
        "Arabic family communication when available"
      ],
      "ar": [
        "الصفوف 1–12",
        "دروس فردية أونلاين",
        "دعم يراعي المنهاج",
        "تواصل عربي مع الأسرة عند التوفر"
      ]
    },
    "introductionTitle": {
      "en": "Education-focused tutoring support in Detroit",
      "ar": "دعم تعليمي يركز على احتياجات الطلاب في ديترويت"
    },
    "introduction": {
      "en": "Detroit tutoring needs vary widely by school, grade, credit pathway, and student goal. The page therefore prioritizes precise intake, standards alignment, homework support, and secondary assessment planning. The page uses local education references to help families choose the right subject, grade, curriculum, and tutor match.",
      "ar": "تختلف احتياجات طلاب ديترويت حسب المدرسة والصف ومسار المقررات وهدف الطالب، لذلك تركز الصفحة على جمع معلومات دقيقة وتوافق المعايير والواجبات والتقييمات الثانوية. تستخدم الصفحة مراجع تعليمية محلية لمساعدة الأسرة على اختيار المادة والصف والمنهاج والمدرس المناسب."
    },
    "servicesTitle": {
      "en": "Tutoring services for Detroit students",
      "ar": "خدمات التدريس لطلاب ديترويت"
    },
    "servicesDescription": {
      "en": "The service is online, while lesson content and tutor matching are adapted to the student’s exact school context.",
      "ar": "الخدمة أونلاين، بينما يتكيف محتوى الدرس ومطابقة المدرس مع سياق مدرسة الطالب بدقة."
    },
    "services": commonServices,
    "subjectsTitle": {
      "en": "Subjects available for students in Detroit",
      "ar": "المواد المتاحة لطلاب ديترويت"
    },
    "subjectsDescription": {
      "en": "Choose a subject page for its full Grade 1–12 curriculum map.",
      "ar": "اختر صفحة المادة للاطلاع على خريطة المنهاج الكاملة للصفوف 1–12."
    },
    "subjects": coreSubjects,
    "curriculumTitle": {
      "en": "Curriculum and school-system support in Detroit",
      "ar": "دعم المنهاج والنظام المدرسي في ديترويت"
    },
    "curriculumDescription": {
      "en": "Detroit tutoring needs vary widely by school, grade, credit pathway, and student goal. The page therefore prioritizes precise intake, standards alignment, homework support, and secondary assessment planning.",
      "ar": "تختلف احتياجات طلاب ديترويت حسب المدرسة والصف ومسار المقررات وهدف الطالب، لذلك تركز الصفحة على جمع معلومات دقيقة وتوافق المعايير والواجبات والتقييمات الثانوية."
    },
    "curriculumPoints": {
      "en": [
        "Curriculum-aware lesson planning",
        "Local grade and course terminology",
        "Assessment support where relevant",
        "Newcomer and transition support"
      ],
      "ar": [
        "تخطيط دروس يراعي المنهاج",
        "استخدام مسميات الصفوف والمقررات المحلية",
        "دعم الاختبارات عند الحاجة",
        "دعم الطلاب الجدد والانتقال بين الأنظمة"
      ]
    },
    "assessmentsTitle": {
      "en": "Relevant assessments and course milestones",
      "ar": "الاختبارات والمحطات الدراسية ذات الصلة"
    },
    "assessmentsDescription": {
      "en": "Assessment support is provided only when relevant to the student’s grade, course, province, state, or district.",
      "ar": "يُقدَّم دعم الاختبارات فقط عندما يكون مرتبطًا بصف الطالب أو مقرره أو مقاطعته أو ولايته أو منطقته التعليمية."
    },
    "assessments": [
      {
        "name": "M-STEP",
        "description": {
          "en": "Michigan’s standards-based assessment used across designated elementary, middle, and high-school grades.",
          "ar": "اختبار ميشيغان القائم على المعايير والمستخدم في صفوف محددة من المراحل المختلفة."
        }
      },
      {
        "name": "PSAT and SAT",
        "description": {
          "en": "College Board assessments are part of Michigan’s secondary assessment sequence.",
          "ar": "تدخل اختبارات College Board ضمن تسلسل التقييم في المرحلة الثانوية بميشيغان."
        }
      },
      {
        "name": "Michigan Merit Examination",
        "description": {
          "en": "The MME assesses Grade 11 and eligible Grade 12 students using SAT, work-readiness, science, and social-studies components.",
          "ar": "يقيم MME طلاب الصف الحادي عشر وبعض طلاب الثاني عشر عبر مكونات SAT والاستعداد للعمل والعلوم والدراسات الاجتماعية."
        }
      }
    ],
    "gradesTitle": {
      "en": "Support by school stage",
      "ar": "الدعم حسب المرحلة الدراسية"
    },
    "gradesDescription": {
      "en": "Tutoring priorities change from foundations to credit courses and graduation planning.",
      "ar": "تتغير أولويات التدريس من بناء الأساسيات إلى المقررات المعتمدة والتخطيط للتخرج."
    },
    "grades": commonGrades,
    "familyTitle": {
      "en": "Support for Arab and Arabic-speaking families",
      "ar": "دعم الأسر العربية والناطقة بالعربية"
    },
    "familyDescription": {
      "en": "Clear bilingual communication can help families explain academic concerns and understand unfamiliar school terminology.",
      "ar": "يساعد التواصل الثنائي الأسرة على شرح المخاوف الأكاديمية وفهم المصطلحات المدرسية غير المألوفة."
    },
    "familyPoints": {
      "en": [
        "Arabic parent communication when available",
        "Clear explanation of local school terminology",
        "Support for students moving from another curriculum",
        "Flexible online scheduling"
      ],
      "ar": [
        "تواصل عربي مع ولي الأمر عند التوفر",
        "شرح واضح للمصطلحات المدرسية المحلية",
        "دعم الانتقال من منهاج آخر",
        "جدولة مرنة أونلاين"
      ]
    },
    "localGuideTitle": {
      "en": "Local education guide for Detroit",
      "ar": "دليل التعليم المحلي في ديترويت"
    },
    "localGuideDescription": {
      "en": "The following points help families understand the local education context before requesting a tutor.",
      "ar": "تساعد النقاط التالية الأسرة على فهم السياق التعليمي المحلي قبل طلب المدرس."
    },
    "localContext": {
      "en": [
        "Relevant public school authorities: Detroit Public Schools Community District.",
        "Detroit tutoring needs vary widely by school, grade, credit pathway, and student goal. The page therefore prioritizes precise intake, standards alignment, homework support, and secondary assessment planning.",
        "The page targets local search intent naturally through its title, headings, FAQs, curriculum sections, and internal links.",
        "No school, board, district, library, college, university, or government partnership is implied."
      ],
      "ar": [
        "الجهات التعليمية العامة ذات الصلة: Detroit Public Schools Community District.",
        "تختلف احتياجات طلاب ديترويت حسب المدرسة والصف ومسار المقررات وهدف الطالب، لذلك تركز الصفحة على جمع معلومات دقيقة وتوافق المعايير والواجبات والتقييمات الثانوية.",
        "تُدمج كلمات البحث المحلية طبيعيًا في العنوان والعناوين الفرعية والأسئلة والمنهاج والروابط الداخلية.",
        "لا تُفهم الإشارة إلى أي مدرسة أو مجلس أو منطقة تعليمية أو مكتبة أو كلية أو جامعة أو جهة حكومية على أنها شراكة."
      ]
    },
    "resources": [
    {
      "name": "Detroit Public Schools Community District",
      "description": {
        "en": "Official public school district serving Detroit.",
        "ar": "Official public school district serving Detroit."
      },
      "url": "https://www.detroitk12.org/",
      "type": "education-authority"
    },
    {
      "name": "Detroit Public Library",
      "description": {
        "en": "City library learning, homework, and digital resources.",
        "ar": "City library learning, homework, and digital resources."
      },
      "url": "https://detroitpubliclibrary.org/",
      "type": "library"
    },
    {
      "name": "Michigan Merit Examination",
      "description": {
        "en": "Official Michigan high-school assessment information.",
        "ar": "Official Michigan high-school assessment information."
      },
      "url": "https://www.michigan.gov/mde/services/student-assessment/michigan-merit-examination-mme",
      "type": "assessment"
    }
  ],
    "faqTitle": {
      "en": "Frequently asked questions about tutoring in Detroit",
      "ar": "أسئلة شائعة عن التدريس في ديترويت"
    },
    "faqDescription": {
      "en": "Answers about online delivery, curriculum matching, assessments, and Arabic family communication.",
      "ar": "إجابات حول طريقة تقديم الدروس ومطابقة المنهاج والاختبارات والتواصل بالعربية."
    },
    "faqs": commonFaqs,
    "reviewedAt": "2026-08-04"
  }
];


const byId = new Map(
  locationPages.map(
    (page) => [
      page.id,
      page,
    ]
  )
);

const bySegments = new Map(
  locationPages.map(
    (page) => [
      page.segments.join('/'),
      page,
    ]
  )
);

export function getLocationDefinitionById(
  id: string
): LocationPageDefinition | null {
  return byId.get(id) ?? null;
}

export function getLocationDefinitionBySegments(
  segments: string[]
): LocationPageDefinition | null {
  return (
    bySegments.get(
      segments.join('/')
    ) ??
    null
  );
}

export function getLocationStaticSegments():
  string[][] {
  return locationPages
    .filter(
      (page) =>
        page.level !== 'index'
    )
    .map(
      (page) =>
        page.segments
    );
}

export function localizeLocationPage(
  page: LocationPageDefinition,
  locale: SiteLocale
): LocalizedLocationPage {
  return {
    id: page.id,
    level: page.level,
    countryCode: page.countryCode,
    segments: page.segments,
    parentId: page.parentId,
    childIds: page.childIds,
    relatedIds: page.relatedIds,
    name: page.name[locale],
    shortName: page.shortName[locale],
    eyebrow: page.eyebrow[locale],
    seo: {
      title: page.seo.title[locale],
      description: page.seo.description[locale],
      primaryKeyword:
        page.seo.primaryKeyword[locale],
      secondaryKeywords:
        page.seo.secondaryKeywords[locale],
      imageAlt:
        page.seo.imageAlt[locale],
    },
    heroTitle:
      page.heroTitle[locale],
    heroDescription:
      page.heroDescription[locale],
    trustPoints:
      page.trustPoints[locale],
    introductionTitle:
      page.introductionTitle[locale],
    introduction:
      page.introduction[locale],
    servicesTitle:
      page.servicesTitle[locale],
    servicesDescription:
      page.servicesDescription[locale],
    services:
      page.services.map(
        (service) => ({
          title:
            service.title[locale],
          description:
            service.description[locale],
          icon:
            service.icon,
        })
      ),
    subjectsTitle:
      page.subjectsTitle[locale],
    subjectsDescription:
      page.subjectsDescription[locale],
    subjects:
      page.subjects.map(
        (subject) => ({
          label:
            subject.label[locale],
          description:
            subject.description[locale],
          hrefType:
            subject.hrefType,
          hrefValue:
            subject.hrefValue,
        })
      ),
    curriculumTitle:
      page.curriculumTitle[locale],
    curriculumDescription:
      page.curriculumDescription[locale],
    curriculumPoints:
      page.curriculumPoints[locale],
    assessmentsTitle:
      page.assessmentsTitle[locale],
    assessmentsDescription:
      page.assessmentsDescription[locale],
    assessments:
      page.assessments.map(
        (assessment) => ({
          name:
            assessment.name,
          description:
            assessment.description[locale],
        })
      ),
    gradesTitle:
      page.gradesTitle[locale],
    gradesDescription:
      page.gradesDescription[locale],
    grades:
      page.grades.map(
        (grade) => ({
          title:
            grade.title[locale],
          description:
            grade.description[locale],
          icon:
            grade.icon,
        })
      ),
    familyTitle:
      page.familyTitle[locale],
    familyDescription:
      page.familyDescription[locale],
    familyPoints:
      page.familyPoints[locale],
    localGuideTitle:
      page.localGuideTitle[locale],
    localGuideDescription:
      page.localGuideDescription[locale],
    localContext:
      page.localContext[locale],
    resources:
      page.resources.map(
        (resource) => ({
          name:
            resource.name,
          description:
            resource.description[locale],
          url:
            resource.url,
          type:
            resource.type,
        })
      ),
    faqTitle:
      page.faqTitle[locale],
    faqDescription:
      page.faqDescription[locale],
    faqs:
      page.faqs.map(
        (faq) => ({
          question:
            faq.question[locale],
          answer:
            faq.answer[locale],
        })
      ),
    reviewedAt:
      page.reviewedAt,
  };
}

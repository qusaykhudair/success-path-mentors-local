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
    title: {
      en: 'One-to-one online tutoring',
      ar: 'دروس فردية مباشرة أونلاين',
    },
    description: {
      en: 'Lessons are matched to the student’s grade, subject, curriculum, current level, and learning goal.',
      ar: 'تُطابق الدروس مع صف الطالب ومادته ومنهاجه ومستواه الحالي وهدفه التعليمي.',
    },
    icon: 'book',
  },
  {
    title: {
      en: 'Homework and catch-up support',
      ar: 'دعم الواجبات ومعالجة الفجوات',
    },
    description: {
      en: 'Tutors can reinforce current schoolwork, rebuild missing foundations, and prepare students for upcoming units.',
      ar: 'يساعد المدرس في الواجبات الحالية وبناء الأساسيات المفقودة والاستعداد للوحدات القادمة.',
    },
    icon: 'check',
  },
  {
    title: {
      en: 'Assessment and test preparation',
      ar: 'التحضير للاختبارات والتقييمات',
    },
    description: {
      en: 'Preparation focuses only on assessments that are relevant to the student’s province, state, grade, or course.',
      ar: 'يركز التحضير على الاختبارات المرتبطة فعلًا بمقاطعة الطالب أو ولايته أو صفه أو مقرره.',
    },
    icon: 'graduation',
  },
  {
    title: {
      en: 'Flexible family communication',
      ar: 'تواصل مرن مع الأسرة',
    },
    description: {
      en: 'Families can discuss the student’s needs, scheduling, and tutor match in English or Arabic when available.',
      ar: 'يمكن للأسرة مناقشة احتياجات الطالب والجدول ومطابقة المدرس بالعربية أو الإنجليزية عند التوفر.',
    },
    icon: 'message',
  },
];

const commonGrades: LocationFeature[] = [
  {
    title: {
      en: 'Elementary support',
      ar: 'دعم المرحلة الابتدائية',
    },
    description: {
      en: 'Reading, writing, number sense, foundational science, homework routines, and confidence-building.',
      ar: 'القراءة والكتابة ومفاهيم الأعداد والعلوم التأسيسية وروتين الواجبات وبناء الثقة.',
    },
    icon: 'book',
  },
  {
    title: {
      en: 'Middle school support',
      ar: 'دعم المرحلة المتوسطة',
    },
    description: {
      en: 'Stronger subject foundations, study habits, problem solving, academic vocabulary, and transition support.',
      ar: 'تقوية أساسيات المواد وعادات الدراسة وحل المسائل والمفردات الأكاديمية ودعم الانتقال.',
    },
    icon: 'layers',
  },
  {
    title: {
      en: 'High school support',
      ar: 'دعم المرحلة الثانوية',
    },
    description: {
      en: 'Course-specific tutoring, credit-course support, exam preparation, and planning for postsecondary pathways.',
      ar: 'دعم المقررات المعتمدة والاختبارات والتخطيط لمسارات الكلية أو الجامعة.',
    },
    icon: 'graduation',
  },
];

const coreSubjects = [
  {
    label: { en: 'Mathematics', ar: 'الرياضيات' },
    description: {
      en: 'Number skills, algebra, functions, geometry, statistics, financial literacy, and advanced math.',
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
      en: 'Life science, Earth and space science, inquiry skills, laboratory concepts, and engineering structures.',
      ar: 'علوم الحياة والأرض والفضاء والاستقصاء العلمي ومفاهيم المختبر والهياكل الهندسية.',
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
];

const frenchSubject = {
  label: {
    en: 'French and math in French',
    ar: 'الفرنسية والرياضيات بالفرنسية',
  },
  description: {
    en: 'A separate French-only curriculum area for French language learning and mathematics taught in French.',
    ar: 'قسم فرنسي مستقل لتعليم اللغة الفرنسية والرياضيات باللغة الفرنسية.',
  },
  hrefType: 'absolute' as const,
  hrefValue: '/fr/programme-francais',
};

export const locationPages: LocationPageDefinition[] = [
  {
    id: 'locations',
    level: 'index',
    segments: [],
    childIds: ['canada', 'united-states'],
    relatedIds: ['milton', 'dearborn'],
    name: { en: 'Locations', ar: 'المواقع' },
    shortName: { en: 'Locations', ar: 'المواقع' },
    eyebrow: { en: 'Online tutoring by location', ar: 'التدريس أونلاين حسب الموقع' },
    seo: {
      title: {
        en: 'Online Tutoring Locations in Canada and the United States | Mustafa Academy',
        ar: 'مواقع التدريس الخصوصي أونلاين في كندا والولايات المتحدة | أكاديمية مصطفى',
      },
      description: {
        en: 'Explore curriculum-aware online tutoring locations across Canada and the United States, with English and Arabic family support for students in Grades 1–12.',
        ar: 'استكشف مواقع التدريس الخصوصي أونلاين في كندا والولايات المتحدة مع دعم المناهج والتواصل بالعربية والإنجليزية لطلاب الصفوف 1–12.',
      },
      primaryKeyword: {
        en: 'online tutoring locations',
        ar: 'مواقع التدريس الخصوصي أونلاين',
      },
      secondaryKeywords: {
        en: ['online tutors in Canada', 'online tutors in the United States', 'Arabic-speaking online tutors'],
        ar: ['مدرسون أونلاين في كندا', 'مدرسون أونلاين في أمريكا', 'مدرسون يتحدثون العربية'],
      },
      imageAlt: {
        en: 'Online tutoring locations across Canada and the United States',
        ar: 'مواقع التدريس أونلاين في كندا والولايات المتحدة',
      },
    },
    heroTitle: {
      en: 'Online tutoring that follows the student’s local curriculum',
      ar: 'دروس أونلاين تراعي المنهاج المحلي للطالب',
    },
    heroDescription: {
      en: 'Find curriculum-aware online tutoring for students in Canada and the United States. Location pages explain the local school system, relevant assessments, grade pathways, and the subjects families most often need.',
      ar: 'ابحث عن تدريس أونلاين يراعي المناهج المحلية في كندا والولايات المتحدة. تشرح صفحات المواقع النظام المدرسي والاختبارات والمسارات الدراسية والمواد الأكثر احتياجًا.',
    },
    trustPoints: {
      en: ['Grades 1–12', 'One-to-one online lessons', 'English and Arabic family communication', 'No physical-location claims'],
      ar: ['الصفوف 1–12', 'دروس فردية أونلاين', 'تواصل أسري بالعربية والإنجليزية', 'دون ادعاء وجود فروع محلية'],
    },
    introductionTitle: {
      en: 'A location strategy built around education—not city-name repetition',
      ar: 'استراتيجية مواقع مبنية على التعليم لا على تكرار أسماء المدن',
    },
    introduction: {
      en: 'Each published location page must provide useful local educational context. Pages are organized around curricula, school authorities, assessments, grade pathways, family needs, and real public resources. Mustafa Academy serves students online and does not imply a physical office or local partnership unless one is verified.',
      ar: 'يجب أن تقدم كل صفحة موقع منشورة معلومات تعليمية محلية مفيدة. تُبنى الصفحات حول المناهج والجهات التعليمية والاختبارات والمسارات الدراسية واحتياجات الأسر والموارد العامة الحقيقية. تخدم أكاديمية مصطفى الطلاب أونلاين ولا توحي بوجود مكتب أو شراكة محلية ما لم تكن موثقة.',
    },
    servicesTitle: { en: 'Tutoring services available across locations', ar: 'خدمات التدريس المتاحة عبر المواقع' },
    servicesDescription: {
      en: 'The tutoring model stays consistent while lesson content changes according to the student’s location, school system, course, and goal.',
      ar: 'يبقى نموذج التدريس ثابتًا بينما يتغير محتوى الدروس حسب موقع الطالب ونظامه المدرسي ومقرره وهدفه.',
    },
    services: commonServices,
    subjectsTitle: { en: 'Subjects available online', ar: 'المواد المتاحة أونلاين' },
    subjectsDescription: {
      en: 'Subject pages connect the location journey to detailed Grade 1–12 curriculum maps.',
      ar: 'تربط صفحات المواد رحلة الموقع بخرائط مناهج مفصلة للصفوف 1–12.',
    },
    subjects: [...coreSubjects, frenchSubject],
    curriculumTitle: { en: 'Curriculum support by province and state', ar: 'دعم المناهج حسب المقاطعة والولاية' },
    curriculumDescription: {
      en: 'Canada uses provincial and territorial curricula, while the United States combines state standards with district and school course structures. Tutor matching should therefore begin with the student’s exact location and school context.',
      ar: 'تعتمد كندا مناهج المقاطعات والأقاليم، بينما تجمع الولايات المتحدة بين معايير الولاية وبنية المقررات في المناطق والمدارس. لذلك تبدأ مطابقة المدرس من موقع الطالب ونظام مدرسته بدقة.',
    },
    curriculumPoints: {
      en: ['Province- or state-aligned lesson planning', 'Course and grade terminology used locally', 'Assessment preparation only where relevant', 'Newcomer transition support between school systems'],
      ar: ['تخطيط الدروس وفق المقاطعة أو الولاية', 'استخدام أسماء الصفوف والمقررات المحلية', 'تحضير للاختبارات ذات الصلة فقط', 'دعم انتقال الطلاب الجدد بين الأنظمة التعليمية'],
    },
    assessmentsTitle: { en: 'Assessment preparation stays location-specific', ar: 'التحضير للاختبارات يختلف حسب الموقع' },
    assessmentsDescription: {
      en: 'A city page should not list every possible test. It should explain only the provincial, state, district, course, or college-readiness assessments that matter to students there.',
      ar: 'لا ينبغي لصفحة المدينة أن تسرد جميع الاختبارات الممكنة، بل تشرح فقط اختبارات المقاطعة أو الولاية أو المقرر أو الاستعداد للكلية ذات الصلة بطلابها.',
    },
    assessments: [
      { name: 'Ontario EQAO and OSSLT', description: { en: 'Relevant for Ontario students when the grade, course, and graduation pathway apply.', ar: 'تُذكر لطلاب أونتاريو عندما ينطبق الصف والمقرر ومسار التخرج.' } },
      { name: 'Michigan M-STEP, PSAT, and MME', description: { en: 'Relevant for Michigan students according to grade and current state assessment rules.', ar: 'تُذكر لطلاب ميشيغان حسب الصف وقواعد التقييم الحالية في الولاية.' } },
      { name: 'SAT, ACT, and AP', description: { en: 'Included only where the student’s school pathway and goals make them relevant.', ar: 'تُضاف فقط عندما تكون مرتبطة بمسار الطالب المدرسي وأهدافه.' } },
    ],
    gradesTitle: { en: 'Support by school stage', ar: 'الدعم حسب المرحلة الدراسية' },
    gradesDescription: { en: 'Tutoring priorities change from foundational learning to course credits and graduation planning.', ar: 'تتغير أولويات التدريس من بناء الأساسيات إلى دعم المقررات والتخطيط للتخرج.' },
    grades: commonGrades,
    familyTitle: { en: 'Support for Arab and Arabic-speaking families', ar: 'دعم الأسر العربية والناطقة بالعربية' },
    familyDescription: {
      en: 'Bilingual communication can help families explain academic concerns, understand local terminology, and coordinate tutoring without changing the official language of the student’s schoolwork.',
      ar: 'يساعد التواصل الثنائي الأسرة في شرح المخاوف الأكاديمية وفهم المصطلحات المحلية وتنظيم الدروس مع الحفاظ على لغة العمل المدرسي الرسمية.',
    },
    familyPoints: {
      en: ['Arabic parent communication when available', 'Clear explanations of unfamiliar school terminology', 'Support for students moving from another curriculum', 'Flexible scheduling across North American time zones'],
      ar: ['تواصل عربي مع ولي الأمر عند التوفر', 'شرح واضح للمصطلحات المدرسية غير المألوفة', 'دعم الانتقال من منهاج آخر', 'جدولة مرنة عبر المناطق الزمنية في أمريكا الشمالية'],
    },
    localGuideTitle: { en: 'Published location guides', ar: 'أدلة المواقع المنشورة' },
    localGuideDescription: {
      en: 'The first pilot pages establish the research and quality standard for future cities.',
      ar: 'تضع الصفحات التجريبية الأولى معيار البحث والجودة للمدن القادمة.',
    },
    localContext: {
      en: ['Canada pilot: Milton, Ontario', 'United States pilot: Dearborn, Michigan', 'Country and province/state hubs connect the city pages', 'Future locations remain unpublished until sufficient unique evidence is available'],
      ar: ['المدينة التجريبية في كندا: ميلتون، أونتاريو', 'المدينة التجريبية في الولايات المتحدة: ديربورن، ميشيغان', 'صفحات الدول والمقاطعات والولايات تربط صفحات المدن', 'لا تُنشر مواقع مستقبلية قبل توفر معلومات فريدة كافية'],
    },
    resources: [],
    faqTitle: { en: 'Questions about location-based online tutoring', ar: 'أسئلة عن التدريس أونلاين حسب الموقع' },
    faqDescription: { en: 'Answers about curriculum alignment, tutor location, bilingual support, and online delivery.', ar: 'إجابات حول توافق المناهج وموقع المدرس والدعم الثنائي وطريقة تقديم الدروس.' },
    faqs: [
      { question: { en: 'Do tutors need to live in the student’s city?', ar: 'هل يجب أن يعيش المدرس في مدينة الطالب؟' }, answer: { en: 'No. Mustafa Academy provides online tutoring. Tutor matching focuses on subject expertise, grade, curriculum experience, language, availability, and student needs rather than physical proximity.', ar: 'لا. تقدم أكاديمية مصطفى دروسًا أونلاين. تركز المطابقة على خبرة المادة والصف والمنهاج واللغة والتوفر واحتياجات الطالب، لا على القرب الجغرافي.' } },
      { question: { en: 'Can lessons follow a provincial or state curriculum?', ar: 'هل يمكن للدروس اتباع منهاج المقاطعة أو الولاية؟' }, answer: { en: 'Yes, when the family provides the student’s grade, school system, course, and current material. The tutor can align explanations and practice with the relevant standards and course expectations.', ar: 'نعم، عندما تقدم الأسرة صف الطالب ونظامه المدرسي ومقرره والمواد الحالية. يمكن للمدرس مواءمة الشرح والتدريب مع المعايير ومتطلبات المقرر.' } },
      { question: { en: 'Are Arabic-speaking tutors available in every location?', ar: 'هل يتوفر مدرسون يتحدثون العربية في كل موقع؟' }, answer: { en: 'Availability depends on the subject, grade, schedule, and current tutor capacity. Families can request Arabic-speaking support during matching, but availability is confirmed individually.', ar: 'يعتمد التوفر على المادة والصف والجدول والطاقة الحالية للمدرسين. يمكن طلب الدعم بالعربية أثناء المطابقة، ويُؤكد التوفر لكل حالة.' } },
      { question: { en: 'Will you publish a page for every city?', ar: 'هل ستُنشر صفحة لكل مدينة؟' }, answer: { en: 'No. A city page is published only when it can include verified curriculum information, useful local education context, distinct search intent, and enough original content to help families.', ar: 'لا. تُنشر صفحة المدينة فقط عندما تتوفر معلومات موثقة عن المنهاج وسياق تعليمي محلي مفيد وهدف بحث مميز ومحتوى أصلي كافٍ للأسر.' } },
    ],
    reviewedAt: '2026-08-04',
  },
  {
    id: 'canada', level: 'country', countryCode: 'CA', segments: ['canada'], parentId: 'locations', childIds: ['ontario'], relatedIds: ['milton', 'united-states'],
    name: { en: 'Canada', ar: 'كندا' }, shortName: { en: 'Canada', ar: 'كندا' }, eyebrow: { en: 'Online tutoring in Canada', ar: 'التدريس أونلاين في كندا' },
    seo: { title: { en: 'Online Tutoring in Canada for Grades 1–12 | Mustafa Academy', ar: 'دروس خصوصية أونلاين في كندا للصفوف 1–12 | أكاديمية مصطفى' }, description: { en: 'Online tutoring for students across Canada with province-aware curriculum support, one-to-one lessons, and English or Arabic family communication.', ar: 'دروس فردية أونلاين للطلاب في كندا مع دعم مناهج المقاطعات والتواصل مع الأسر بالعربية أو الإنجليزية.' }, primaryKeyword: { en: 'online tutoring in Canada', ar: 'دروس خصوصية أونلاين في كندا' }, secondaryKeywords: { en: ['online tutors Canada', 'Canadian curriculum tutoring', 'Arabic-speaking tutors Canada'], ar: ['مدرسون أونلاين في كندا', 'تدريس المنهاج الكندي', 'مدرسون يتحدثون العربية في كندا'] }, imageAlt: { en: 'Online tutoring for students across Canada', ar: 'دروس أونلاين للطلاب في كندا' } },
    heroTitle: { en: 'Curriculum-aware online tutoring for students across Canada', ar: 'تدريس أونلاين يراعي مناهج المقاطعات الكندية' }, heroDescription: { en: 'Canada does not use one national K–12 curriculum. Lessons should be matched to the student’s province, grade, course, school program, and assessment pathway.', ar: 'لا تستخدم كندا منهاجًا وطنيًا واحدًا للصفوف المدرسية. يجب مطابقة الدروس مع المقاطعة والصف والمقرر والبرنامج المدرسي ومسار التقييم.' },
    trustPoints: { en: ['Province-aware support', 'Grades 1–12', 'English, French, math, and science pathways', 'Online service across time zones'], ar: ['دعم يراعي المقاطعة', 'الصفوف 1–12', 'مسارات الإنجليزية والفرنسية والرياضيات والعلوم', 'خدمة أونلاين عبر المناطق الزمنية'] },
    introductionTitle: { en: 'Tutoring starts with the province and school program', ar: 'يبدأ التدريس من المقاطعة والبرنامج المدرسي' }, introduction: { en: 'Provincial ministries and education authorities define curriculum expectations, graduation rules, and assessments. A responsible tutoring plan therefore identifies the province and the student’s exact course before selecting materials or test-preparation priorities.', ar: 'تحدد وزارات وهيئات التعليم في المقاطعات توقعات المناهج ومتطلبات التخرج والاختبارات. لذلك تحدد الخطة المسؤولة المقاطعة والمقرر الدقيق قبل اختيار المواد أو أولويات التحضير.' },
    servicesTitle: { en: 'Online tutoring services in Canada', ar: 'خدمات التدريس أونلاين في كندا' }, servicesDescription: { en: 'Support is delivered online and adapted to provincial curriculum expectations and family goals.', ar: 'تُقدم الخدمة أونلاين وتُكيّف مع توقعات منهاج المقاطعة وأهداف الأسرة.' }, services: commonServices,
    subjectsTitle: { en: 'Popular tutoring subjects in Canada', ar: 'مواد التدريس المطلوبة في كندا' }, subjectsDescription: { en: 'Students can move from foundational skills to senior secondary courses through structured subject pages.', ar: 'يمكن للطلاب الانتقال من المهارات التأسيسية إلى مقررات الثانوية العليا عبر صفحات مواد منظمة.' }, subjects: [...coreSubjects, frenchSubject],
    curriculumTitle: { en: 'Canadian curriculum support', ar: 'دعم المناهج الكندية' }, curriculumDescription: { en: 'The tutoring request should identify the province, language of instruction, grade, course code where applicable, and current school material.', ar: 'يجب أن يحدد طلب التدريس المقاطعة ولغة التعليم والصف ورمز المقرر عند وجوده والمواد المدرسية الحالية.' }, curriculumPoints: { en: ['Provincial curriculum expectations', 'English-language and French-language school contexts', 'Course pathways and prerequisites in secondary school', 'Newcomer transitions into Canadian schools'], ar: ['توقعات منهاج المقاطعة', 'سياق المدارس الإنجليزية والفرنسية', 'مسارات المقررات والمتطلبات السابقة في الثانوية', 'انتقال الطلاب الجدد إلى المدارس الكندية'] },
    assessmentsTitle: { en: 'Provincial assessment support', ar: 'دعم اختبارات المقاطعات' }, assessmentsDescription: { en: 'Assessment names and requirements vary across Canada, so preparation must be tied to the student’s province and grade.', ar: 'تختلف أسماء ومتطلبات الاختبارات بين المقاطعات، لذلك يجب ربط التحضير بمقاطعة الطالب وصفه.' }, assessments: [{ name: 'Ontario EQAO', description: { en: 'Ontario pages explain relevant EQAO assessments, including Grade 9 mathematics and the OSSLT.', ar: 'تشرح صفحات أونتاريو اختبارات EQAO ذات الصلة، ومنها رياضيات الصف التاسع وOSSLT.' } }, { name: 'Provincial graduation pathways', description: { en: 'Senior students may need course planning, prerequisites, literacy requirements, or exam preparation that differs by province.', ar: 'قد يحتاج طلاب الثانوية إلى تخطيط المقررات والمتطلبات السابقة ومتطلبات القراءة والكتابة أو اختبارات تختلف حسب المقاطعة.' } }],
    gradesTitle: { en: 'Support from elementary through secondary school', ar: 'دعم من الابتدائية حتى الثانوية' }, gradesDescription: { en: 'The student’s stage affects the balance between foundations, homework, course credit, and graduation planning.', ar: 'تؤثر مرحلة الطالب في التوازن بين الأساسيات والواجبات واعتمادات المقررات والتخطيط للتخرج.' }, grades: commonGrades,
    familyTitle: { en: 'Support for Arabic-speaking families in Canada', ar: 'دعم الأسر الناطقة بالعربية في كندا' }, familyDescription: { en: 'Families can request bilingual communication to discuss curriculum transitions, school terminology, subject priorities, and scheduling.', ar: 'يمكن للأسرة طلب تواصل ثنائي لمناقشة الانتقال بين المناهج والمصطلحات المدرسية وأولويات المواد والجدول.' }, familyPoints: { en: ['Explain province-specific terminology', 'Support students arriving from another country', 'Preserve English or French academic language in lessons', 'Coordinate sessions across Canadian time zones'], ar: ['شرح مصطلحات المقاطعة', 'دعم القادمين من دولة أخرى', 'الحفاظ على اللغة الأكاديمية الإنجليزية أو الفرنسية في الدروس', 'تنسيق الجلسات عبر مناطق كندا الزمنية'] },
    localGuideTitle: { en: 'Canada location directory', ar: 'دليل المواقع في كندا' }, localGuideDescription: { en: 'Ontario is the first province hub, with Milton as the first published city page.', ar: 'أونتاريو هي صفحة المقاطعة الأولى، وميلتون أول صفحة مدينة منشورة.' }, localContext: { en: ['Ontario curriculum and assessment guide', 'Milton city tutoring page', 'Future provinces remain in research until unique content is ready'], ar: ['دليل منهاج واختبارات أونتاريو', 'صفحة التدريس في ميلتون', 'تبقى المقاطعات المستقبلية قيد البحث حتى اكتمال المحتوى الفريد'] }, resources: [{ name: 'Ontario curriculum and policy requirements', description: { en: 'Official Ontario guidance used for the first Canadian province and city pages.', ar: 'إرشادات أونتاريو الرسمية المستخدمة في صفحات المقاطعة والمدينة الأولى.' }, url: 'https://www.ontario.ca/document/ontario-schools-kindergarten-grade-12-policy-and-program-requirements/learning-programs', type: 'education-authority' }],
    faqTitle: { en: 'Online tutoring in Canada: common questions', ar: 'أسئلة شائعة عن التدريس أونلاين في كندا' }, faqDescription: { en: 'Curriculum, language, location, and tutor matching questions for Canadian families.', ar: 'أسئلة الأسر في كندا حول المنهاج واللغة والموقع ومطابقة المدرس.' }, faqs: [
      { question: { en: 'Do you teach one Canadian national curriculum?', ar: 'هل تدرسون منهاجًا كنديًا وطنيًا واحدًا؟' }, answer: { en: 'No. Curriculum expectations are set provincially or territorially. The family should provide the province, grade, course, and school material so the tutoring plan can be aligned correctly.', ar: 'لا. تحدد المناهج على مستوى المقاطعة أو الإقليم. يجب تزويدنا بالمقاطعة والصف والمقرر والمواد المدرسية لمواءمة الخطة بدقة.' } },
      { question: { en: 'Can tutoring support French-language or French-immersion students?', ar: 'هل يوجد دعم لطلاب المدارس الفرنسية أو French Immersion؟' }, answer: { en: 'Support depends on the student’s grade, subject, program, and tutor availability. The French-only program includes French language and mathematics taught in French.', ar: 'يعتمد الدعم على الصف والمادة والبرنامج وتوفر المدرس. يتضمن القسم الفرنسي تعليم اللغة الفرنسية والرياضيات باللغة الفرنسية.' } },
      { question: { en: 'Can you support students who recently arrived in Canada?', ar: 'هل تدعمون الطلاب القادمين حديثًا إلى كندا؟' }, answer: { en: 'Tutoring can help identify differences in terminology, sequence, academic language, and prerequisite skills. It does not replace official school registration, guidance, or settlement services.', ar: 'يمكن للتدريس توضيح اختلاف المصطلحات والتسلسل واللغة الأكاديمية والمهارات السابقة، لكنه لا يستبدل التسجيل المدرسي أو الإرشاد أو خدمات الاستقرار الرسمية.' } },
    ], reviewedAt: '2026-08-04',
  },
  {
    id: 'ontario', level: 'region', countryCode: 'CA', segments: ['canada', 'ontario'], parentId: 'canada', childIds: ['milton'], relatedIds: ['locations'],
    name: { en: 'Ontario', ar: 'أونتاريو' }, shortName: { en: 'Ontario', ar: 'أونتاريو' }, eyebrow: { en: 'Ontario curriculum tutoring', ar: 'تدريس منهاج أونتاريو' },
    seo: { title: { en: 'Ontario Curriculum Online Tutoring for Grades 1–12 | Mustafa Academy', ar: 'تدريس منهاج أونتاريو أونلاين للصفوف 1–12 | أكاديمية مصطفى' }, description: { en: 'One-to-one Ontario curriculum tutoring for math, English, science, chemistry, physics, French, EQAO Grade 9 mathematics, and OSSLT support.', ar: 'تدريس فردي أونلاين لمنهاج أونتاريو في الرياضيات والإنجليزية والعلوم والكيمياء والفيزياء والفرنسية مع دعم EQAO وOSSLT.' }, primaryKeyword: { en: 'Ontario curriculum tutoring', ar: 'تدريس منهاج أونتاريو' }, secondaryKeywords: { en: ['online tutors Ontario', 'EQAO tutoring Ontario', 'OSSLT tutoring Ontario'], ar: ['مدرسون أونلاين في أونتاريو', 'تحضير EQAO', 'تحضير OSSLT'] }, imageAlt: { en: 'Ontario curriculum online tutoring for Grades 1 to 12', ar: 'تدريس منهاج أونتاريو أونلاين للصفوف 1–12' } },
    heroTitle: { en: 'Online tutoring aligned with Ontario courses and assessments', ar: 'دروس أونلاين متوافقة مع مقررات واختبارات أونتاريو' }, heroDescription: { en: 'Support for students in Ontario can connect daily schoolwork with provincial curriculum expectations, Grade 9 mathematics assessment preparation, literacy support, and secondary-school pathways.', ar: 'يربط دعم طلاب أونتاريو العمل المدرسي اليومي بتوقعات المنهاج واختبار رياضيات الصف التاسع ودعم القراءة والكتابة ومسارات الثانوية.' },
    trustPoints: { en: ['Ontario curriculum context', 'EQAO Grade 9 mathematics', 'OSSLT literacy support', 'Elementary and secondary pathways'], ar: ['سياق منهاج أونتاريو', 'رياضيات EQAO للصف التاسع', 'دعم اختبار OSSLT', 'مسارات الابتدائية والثانوية'] },
    introductionTitle: { en: 'Ontario tutoring should use the student’s exact grade and course', ar: 'يجب أن يعتمد التدريس في أونتاريو على الصف والمقرر الدقيق' }, introduction: { en: 'The Ontario Curriculum describes the knowledge and skills students are expected to develop from Grades 1–12. Secondary tutoring should also consider course selection, prerequisites, graduation requirements, and the student’s current school materials.', ar: 'يحدد منهاج أونتاريو المعارف والمهارات المتوقعة من الصفوف 1–12. ويجب أن يراعي دعم الثانوية اختيار المقررات والمتطلبات السابقة ومتطلبات التخرج والمواد المدرسية الحالية.' },
    servicesTitle: { en: 'Ontario tutoring services', ar: 'خدمات التدريس في أونتاريو' }, servicesDescription: { en: 'Lessons can address current coursework, missing foundations, assessment preparation, and academic-language development.', ar: 'يمكن للدروس دعم المقرر الحالي والأساسيات المفقودة والتحضير للاختبارات وتنمية اللغة الأكاديمية.' }, services: commonServices,
    subjectsTitle: { en: 'Ontario subjects and course support', ar: 'مواد ومقررات أونتاريو' }, subjectsDescription: { en: 'The public curriculum maps help families connect broad subjects with detailed topics and grade progression.', ar: 'تساعد خرائط المناهج الأسر على ربط المواد العامة بالموضوعات التفصيلية والتدرج حسب الصف.' }, subjects: [...coreSubjects, frenchSubject],
    curriculumTitle: { en: 'Understanding the Ontario curriculum', ar: 'فهم منهاج أونتاريو' }, curriculumDescription: { en: 'Ontario students are assessed against provincial curriculum expectations. High school support may also involve course codes, pathways, prerequisite planning, and the Ontario Secondary School Diploma.', ar: 'يُقيّم طلاب أونتاريو وفق توقعات المنهاج الإقليمي. وقد يشمل دعم الثانوية رموز المقررات والمسارات والتخطيط للمتطلبات السابقة ودبلوم OSSD.' }, curriculumPoints: { en: ['Grades 1–8 subject expectations', 'Grade 9–12 course-specific expectations', 'Course selection and prerequisite support', 'OSSD requirements vary by the year the student entered Grade 9'], ar: ['توقعات المواد للصفوف 1–8', 'توقعات المقررات للصفوف 9–12', 'دعم اختيار المقررات والمتطلبات السابقة', 'تختلف تفاصيل OSSD حسب سنة دخول الطالب الصف التاسع'] },
    assessmentsTitle: { en: 'Ontario assessments and graduation support', ar: 'اختبارات ومتطلبات التخرج في أونتاريو' }, assessmentsDescription: { en: 'Preparation should be based on the student’s current grade, course, official assessment format, and school guidance.', ar: 'يجب أن يعتمد التحضير على الصف والمقرر وصيغة الاختبار الرسمية وإرشادات المدرسة.' }, assessments: [{ name: 'EQAO Grade 9 Assessment of Mathematics', description: { en: 'The assessment measures the mathematics knowledge and skills expected by the end of the Grade 9 mathematics course.', ar: 'يقيس الاختبار معارف ومهارات الرياضيات المتوقعة بنهاية مقرر رياضيات الصف التاسع.' } }, { name: 'Ontario Secondary School Literacy Test (OSSLT)', description: { en: 'The OSSLT measures minimum literacy expectations across subjects up to the end of Grade 9 and is normally connected to the secondary-school literacy graduation requirement.', ar: 'يقيس OSSLT الحد الأدنى لمهارات القراءة والكتابة عبر المواد حتى نهاية الصف التاسع ويرتبط عادة بمتطلب التخرج في الثانوية.' } }, { name: 'Ontario Secondary School Diploma planning', description: { en: 'Students should verify current credit, literacy, online-learning, community-involvement, and financial-literacy requirements for their cohort.', ar: 'ينبغي للطلاب التحقق من متطلبات الاعتمادات والقراءة والكتابة والتعلم الإلكتروني وخدمة المجتمع والثقافة المالية الخاصة بدفعتهم.' } }],
    gradesTitle: { en: 'Ontario support by grade', ar: 'دعم أونتاريو حسب الصف' }, gradesDescription: { en: 'Elementary support focuses on foundations; secondary support becomes course- and pathway-specific.', ar: 'يركز دعم الابتدائية على الأساسيات، بينما يصبح دعم الثانوية مرتبطًا بالمقرر والمسار.' }, grades: commonGrades,
    familyTitle: { en: 'Helping families navigate Ontario schools', ar: 'مساعدة الأسر على فهم مدارس أونتاريو' }, familyDescription: { en: 'Arabic-speaking families can request explanations of course terminology, assessment names, school pathways, and newcomer transitions in clear language.', ar: 'يمكن للأسر الناطقة بالعربية طلب شرح واضح لمصطلحات المقررات وأسماء الاختبارات والمسارات المدرسية وانتقال الطلاب الجدد.' }, familyPoints: { en: ['Explain course and assessment terminology', 'Support English or French academic language', 'Review current school material before tutoring', 'Coordinate with family goals without claiming school affiliation'], ar: ['شرح مصطلحات المقررات والاختبارات', 'دعم اللغة الأكاديمية الإنجليزية أو الفرنسية', 'مراجعة المواد المدرسية الحالية قبل الدروس', 'تنسيق أهداف الأسرة دون ادعاء صلة بالمدرسة'] },
    localGuideTitle: { en: 'Ontario pilot city', ar: 'المدينة التجريبية في أونتاريو' }, localGuideDescription: { en: 'Milton is the first Ontario city page because it supports detailed coverage of local school boards, secondary pathways, newcomer resources, and assessment needs.', ar: 'ميلتون هي أول صفحة مدينة في أونتاريو لأنها تتيح تغطية مفصلة لمجالس المدارس ومسارات الثانوية وموارد القادمين الجدد والاختبارات.' }, localContext: { en: ['Halton District School Board serves Milton', 'Halton Catholic District School Board serves Milton', 'Milton page includes local schools and public education resources without implying affiliation'], ar: ['مجلس Halton District School Board يخدم ميلتون', 'مجلس Halton Catholic District School Board يخدم ميلتون', 'تتضمن صفحة ميلتون مدارس وموارد تعليمية عامة دون الإيحاء بشراكة'] },
    resources: [
      { name: 'Ontario Curriculum, Grades 1–12', description: { en: 'Official provincial guidance on learning programs and curriculum expectations.', ar: 'الإرشادات الرسمية للمقاطعة حول البرامج التعليمية وتوقعات المناهج.' }, url: 'https://www.ontario.ca/document/ontario-schools-kindergarten-grade-12-policy-and-program-requirements/learning-programs', type: 'education-authority' },
      { name: 'EQAO Grade 9 Mathematics', description: { en: 'Official information about the Grade 9 mathematics assessment.', ar: 'المعلومات الرسمية عن اختبار رياضيات الصف التاسع.' }, url: 'https://www.eqao.com/the-assessments/grade-9-math/', type: 'assessment' },
      { name: 'EQAO OSSLT', description: { en: 'Official information about the Ontario Secondary School Literacy Test.', ar: 'المعلومات الرسمية عن اختبار القراءة والكتابة للثانوية في أونتاريو.' }, url: 'https://www.eqao.com/the-assessments/osslt/', type: 'assessment' },
      { name: 'Ontario high school diploma requirements', description: { en: 'Official current guidance; requirements depend on the student’s Grade 9 entry year.', ar: 'الإرشادات الرسمية الحالية، وتختلف التفاصيل حسب سنة دخول الصف التاسع.' }, url: 'https://www.ontario.ca/page/earning-your-high-school-diploma', type: 'education-authority' },
    ],
    faqTitle: { en: 'Ontario tutoring questions', ar: 'أسئلة التدريس في أونتاريو' }, faqDescription: { en: 'Questions about Ontario curriculum, EQAO, OSSLT, and secondary pathways.', ar: 'أسئلة حول منهاج أونتاريو وEQAO وOSSLT ومسارات الثانوية.' }, faqs: [
      { question: { en: 'Can tutors follow the Ontario curriculum?', ar: 'هل يمكن للمدرس اتباع منهاج أونتاريو؟' }, answer: { en: 'Yes. The family should share the grade, course code where applicable, current unit, assignments, and teacher guidance. The tutor can then align practice with the relevant curriculum expectations.', ar: 'نعم. يجب مشاركة الصف ورمز المقرر عند وجوده والوحدة الحالية والواجبات وإرشادات المعلم، ثم ينسق المدرس التدريب مع توقعات المنهاج.' } },
      { question: { en: 'Can you help with EQAO Grade 9 mathematics?', ar: 'هل تقدمون دعمًا لرياضيات EQAO للصف التاسع؟' }, answer: { en: 'Tutoring can review the Grade 9 strands, strengthen weak skills, practise multi-step questions, and use official released resources where appropriate. It does not guarantee an assessment result.', ar: 'يمكن مراجعة مسارات الصف التاسع وتقوية المهارات الضعيفة والتدرب على الأسئلة متعددة الخطوات واستخدام الموارد الرسمية المناسبة، دون ضمان نتيجة معينة.' } },
      { question: { en: 'Can you help with the OSSLT?', ar: 'هل تقدمون دعمًا لاختبار OSSLT؟' }, answer: { en: 'Tutoring can support reading comprehension, written responses, organization, grammar, and familiarity with the official test format. Students should also follow their school’s current guidance.', ar: 'يمكن دعم فهم المقروء والإجابات الكتابية والتنظيم والقواعد والتعرف إلى صيغة الاختبار الرسمية، مع اتباع إرشادات المدرسة الحالية.' } },
      { question: { en: 'Do you advise on OSSD graduation requirements?', ar: 'هل تقدمون إرشادًا حول متطلبات OSSD؟' }, answer: { en: 'Tutors can support academic planning and course skills, but official graduation decisions should be confirmed with the school guidance department and current Ontario policy.', ar: 'يمكن للمدرس دعم التخطيط الأكاديمي ومهارات المقررات، لكن يجب تأكيد قرارات التخرج رسميًا مع قسم الإرشاد المدرسي وسياسة أونتاريو الحالية.' } },
    ], reviewedAt: '2026-08-04',
  },
  {
    id: 'milton', level: 'city', countryCode: 'CA', segments: ['canada', 'ontario', 'milton'], parentId: 'ontario', childIds: [], relatedIds: ['ontario', 'canada', 'dearborn'],
    name: { en: 'Milton, Ontario', ar: 'ميلتون، أونتاريو' }, shortName: { en: 'Milton', ar: 'ميلتون' }, eyebrow: { en: 'Online tutors serving Milton students', ar: 'مدرسون أونلاين يخدمون طلاب ميلتون' },
    seo: { title: { en: 'Online Tutoring in Milton, Ontario | Math, English & Science', ar: 'دروس خصوصية أونلاين في ميلتون، أونتاريو | أكاديمية مصطفى' }, description: { en: 'One-to-one online tutoring for Milton students in math, English, French, science, chemistry, and physics, aligned with Ontario curriculum and local school pathways.', ar: 'دروس فردية أونلاين لطلاب ميلتون في الرياضيات والإنجليزية والفرنسية والعلوم والكيمياء والفيزياء وفق منهاج أونتاريو ومسارات المدارس المحلية.' }, primaryKeyword: { en: 'online tutoring in Milton Ontario', ar: 'دروس خصوصية أونلاين في ميلتون' }, secondaryKeywords: { en: ['math tutoring Milton', 'Ontario curriculum tutor Milton', 'Arabic-speaking tutors Milton', 'EQAO tutoring Milton'], ar: ['مدرس رياضيات في ميلتون', 'تدريس منهاج أونتاريو في ميلتون', 'مدرس يتحدث العربية في ميلتون', 'تحضير EQAO في ميلتون'] }, imageAlt: { en: 'Online tutoring for students in Milton Ontario', ar: 'دروس أونلاين للطلاب في ميلتون أونتاريو' } },
    heroTitle: { en: 'One-to-one online tutoring for students in Milton', ar: 'دروس فردية أونلاين للطلاب في ميلتون' }, heroDescription: { en: 'Support for Milton students can be aligned with Ontario curriculum expectations, Halton school pathways, current assignments, EQAO Grade 9 mathematics, OSSLT literacy skills, and senior math and science courses.', ar: 'يمكن مواءمة دعم طلاب ميلتون مع منهاج أونتاريو ومسارات مدارس هالتون والواجبات الحالية ورياضيات EQAO للصف التاسع ومهارات OSSLT ومقررات الرياضيات والعلوم العليا.' },
    trustPoints: { en: ['Ontario curriculum context', 'HDSB and HCDSB school pathways', 'English or Arabic family communication', 'Online—not a physical Milton centre'], ar: ['سياق منهاج أونتاريو', 'مسارات HDSB وHCDSB', 'تواصل أسري بالعربية أو الإنجليزية', 'خدمة أونلاين وليست مركزًا فعليًا في ميلتون'] },
    introductionTitle: { en: 'Tutoring designed around the student’s Milton school context', ar: 'تدريس مبني على سياق مدرسة الطالب في ميلتون' }, introduction: { en: 'Milton families may attend schools within the Halton District School Board or the Halton Catholic District School Board. Tutor matching should identify the board, school program, grade, course, current unit, and learning concern before a lesson plan is prepared.', ar: 'قد يدرس طلاب ميلتون ضمن Halton District School Board أو Halton Catholic District School Board. يجب أن تحدد مطابقة المدرس المجلس والبرنامج المدرسي والصف والمقرر والوحدة الحالية والمشكلة التعليمية قبل إعداد الخطة.' },
    servicesTitle: { en: 'Online tutoring services for Milton families', ar: 'خدمات التدريس أونلاين لأسر ميلتون' }, servicesDescription: { en: 'Students can receive targeted support without travelling to a centre, with scheduling coordinated around school, family, and time-zone needs.', ar: 'يمكن للطلاب تلقي دعم مركز دون الانتقال إلى مركز، مع تنسيق الجدول حول المدرسة والأسرة والمنطقة الزمنية.' }, services: commonServices,
    subjectsTitle: { en: 'Popular subjects for Milton students', ar: 'المواد الشائعة لطلاب ميلتون' }, subjectsDescription: { en: 'Subject support can range from elementary foundations to Grade 11–12 functions, calculus, chemistry, physics, writing, and literacy.', ar: 'يمتد الدعم من أساسيات الابتدائية إلى دوال وحساب التفاضل والكيمياء والفيزياء والكتابة والقراءة في الصفوف العليا.' }, subjects: [...coreSubjects, frenchSubject],
    curriculumTitle: { en: 'Ontario curriculum and Halton school pathways', ar: 'منهاج أونتاريو ومسارات مدارس هالتون' }, curriculumDescription: { en: 'Tutoring should use the student’s board, grade, course code, current classroom material, and teacher expectations. School names are included only to help families recognize the local education context; Mustafa Academy is not affiliated with them.', ar: 'يجب أن يستخدم التدريس مجلس الطالب وصفه ورمز مقرره ومواد الصف الحالية وتوقعات المعلم. تُذكر أسماء المدارس فقط لمساعدة الأسر على فهم السياق المحلي، ولا توجد شراكة معها.' }, curriculumPoints: { en: ['HDSB public-school context', 'HCDSB Catholic-school context', 'Elementary and secondary Ontario curriculum expectations', 'Course selection, prerequisite, and graduation-pathway support'], ar: ['سياق المدارس العامة HDSB', 'سياق المدارس الكاثوليكية HCDSB', 'توقعات منهاج أونتاريو للابتدائية والثانوية', 'دعم اختيار المقررات والمتطلبات السابقة ومسار التخرج'] },
    assessmentsTitle: { en: 'Assessment support relevant to Milton students', ar: 'دعم الاختبارات ذات الصلة بطلاب ميلتون' }, assessmentsDescription: { en: 'The exact plan depends on the student’s grade, course schedule, and school guidance.', ar: 'تعتمد الخطة الدقيقة على صف الطالب وجدول المقرر وإرشادات المدرسة.' }, assessments: [{ name: 'EQAO Grade 9 Mathematics', description: { en: 'Review can cover number, algebra, data, geometry and measurement, financial literacy, and mathematical processes tied to the Grade 9 course.', ar: 'يمكن أن تشمل المراجعة الأعداد والجبر والبيانات والهندسة والقياس والثقافة المالية والعمليات الرياضية المرتبطة بمقرر الصف التاسع.' } }, { name: 'OSSLT literacy preparation', description: { en: 'Support can focus on reading comprehension, written responses, organization, grammar, and test-format familiarity.', ar: 'يمكن التركيز على فهم المقروء والإجابات الكتابية والتنظيم والقواعد والتعرف إلى صيغة الاختبار.' } }, { name: 'Senior course and prerequisite support', description: { en: 'Students may need targeted help in functions, calculus, chemistry, physics, English, or prerequisite skills for postsecondary plans.', ar: 'قد يحتاج الطالب إلى دعم موجه في الدوال والتفاضل والكيمياء والفيزياء والإنجليزية أو المهارات السابقة لخططه بعد الثانوية.' } }],
    gradesTitle: { en: 'Tutoring by grade level in Milton', ar: 'التدريس حسب الصف في ميلتون' }, gradesDescription: { en: 'The plan changes from foundational literacy and numeracy to course-specific secondary support.', ar: 'تتغير الخطة من القراءة والحساب التأسيسي إلى دعم مقررات الثانوية المحددة.' }, grades: commonGrades,
    familyTitle: { en: 'Support for Arab and newcomer families in Milton', ar: 'دعم الأسر العربية والقادمة حديثًا في ميلتون' }, familyDescription: { en: 'Bilingual communication can help parents explain concerns, understand Ontario terminology, and support students transitioning from another curriculum. Official registration, interpretation, and settlement services remain the responsibility of schools and public agencies.', ar: 'يساعد التواصل الثنائي ولي الأمر في شرح المخاوف وفهم مصطلحات أونتاريو ودعم الانتقال من منهاج آخر. تبقى خدمات التسجيل والترجمة والاستقرار الرسمية من مسؤولية المدارس والجهات العامة.' }, familyPoints: { en: ['Request Arabic-speaking tutor support when available', 'Explain course codes and assessment names', 'Review school assignments before the lesson', 'Coordinate Eastern Time after-school and weekend availability'], ar: ['طلب مدرس يتحدث العربية عند التوفر', 'شرح رموز المقررات وأسماء الاختبارات', 'مراجعة واجبات المدرسة قبل الدرس', 'تنسيق مواعيد ما بعد المدرسة وعطلة نهاية الأسبوع بتوقيت الشرق'] },
    localGuideTitle: { en: 'Milton education and community guide', ar: 'دليل التعليم والمجتمع في ميلتون' }, localGuideDescription: { en: 'These public institutions and recognizable schools help families verify local information. Their inclusion does not indicate endorsement or partnership.', ar: 'تساعد هذه المؤسسات العامة والمدارس المعروفة الأسر على التحقق من المعلومات المحلية، ولا يعني ذكرها تأييدًا أو شراكة.' },
    localContext: { en: ['HDSB schools in Milton include Milton District High School, Craig Kielburger Secondary School, and Elsie MacGill Secondary School.', 'HCDSB secondary schools in Milton include Bishop P. F. Reding Catholic Secondary School and St. Francis Xavier Catholic Secondary School.', 'The HDSB Welcome Centre has a Milton location for families entering the school system.', 'Town facilities include Milton Public Library and the Sherwood Community Centre, which includes a library.', 'Milton uses Eastern Time for online scheduling.'], ar: ['تشمل مدارس HDSB الثانوية في ميلتون Milton District High School وCraig Kielburger Secondary School وElsie MacGill Secondary School.', 'تشمل مدارس HCDSB الثانوية في ميلتون Bishop P. F. Reding Catholic Secondary School وSt. Francis Xavier Catholic Secondary School.', 'لدى HDSB Welcome Centre موقع في ميلتون للأسر التي تدخل النظام المدرسي.', 'تشمل مرافق البلدية Milton Public Library وSherwood Community Centre الذي يضم مكتبة.', 'تستخدم ميلتون التوقيت الشرقي لتنظيم الجلسات أونلاين.'] },
    resources: [
      { name: 'Halton District School Board', description: { en: 'Official board information, Milton school portfolios, and the Milton Welcome Centre.', ar: 'معلومات المجلس الرسمية وقوائم مدارس ميلتون وWelcome Centre في ميلتون.' }, url: 'https://www.hdsb.ca/our-board/contact-us/', type: 'education-authority' },
      { name: 'Halton Catholic District School Board', description: { en: 'Official board and school information for Catholic schools serving Milton.', ar: 'معلومات المجلس والمدارس الكاثوليكية التي تخدم ميلتون.' }, url: 'https://www.hcdsb.org/schools/', type: 'education-authority' },
      { name: 'EQAO Grade 9 Mathematics', description: { en: 'Official assessment description and student resources.', ar: 'وصف الاختبار الرسمي وموارد الطلاب.' }, url: 'https://www.eqao.com/the-assessments/grade-9-math/', type: 'assessment' },
      { name: 'EQAO OSSLT', description: { en: 'Official Ontario literacy-test information.', ar: 'المعلومات الرسمية لاختبار القراءة والكتابة في أونتاريو.' }, url: 'https://www.eqao.com/the-assessments/osslt/', type: 'assessment' },
      { name: 'Town of Milton facilities', description: { en: 'Official listing that includes Milton Public Library and community facilities.', ar: 'قائمة رسمية تشمل Milton Public Library ومرافق المجتمع.' }, url: 'https://www.milton.ca/en/arts-and-recreation/facility-hours.aspx', type: 'municipal' },
    ],
    faqTitle: { en: 'Milton online tutoring FAQs', ar: 'الأسئلة الشائعة عن التدريس أونلاين في ميلتون' }, faqDescription: { en: 'Practical answers for Milton parents about curriculum, boards, testing, Arabic support, and scheduling.', ar: 'إجابات عملية لأسر ميلتون حول المنهاج والمجالس والاختبارات والدعم بالعربية والجدولة.' }, faqs: [
      { question: { en: 'Do you provide online math tutoring for students in Milton?', ar: 'هل تقدمون تدريس رياضيات أونلاين للطلاب في ميلتون؟' }, answer: { en: 'Yes. Tutoring is available online for elementary and secondary mathematics, including foundations, algebra, functions, calculus, data, geometry, financial literacy, and Grade 9 assessment preparation, subject to tutor availability.', ar: 'نعم. يتوفر دعم أونلاين لرياضيات الابتدائية والثانوية، بما يشمل الأساسيات والجبر والدوال والتفاضل والبيانات والهندسة والثقافة المالية والتحضير للصف التاسع، حسب توفر المدرس.' } },
      { question: { en: 'Can tutors follow HDSB or HCDSB course material?', ar: 'هل يمكن للمدرس متابعة مواد HDSB أو HCDSB؟' }, answer: { en: 'Tutors can work from the student’s course code, unit, assignment, textbook, teacher notes, and Ontario curriculum expectations. Mustafa Academy is not affiliated with either school board.', ar: 'يمكن للمدرس العمل وفق رمز المقرر والوحدة والواجب والكتاب وملاحظات المعلم وتوقعات منهاج أونتاريو. لا ترتبط أكاديمية مصطفى بأي من المجلسين.' } },
      { question: { en: 'Are Arabic-speaking tutors available for Milton families?', ar: 'هل يتوفر مدرسون يتحدثون العربية لأسر ميلتون؟' }, answer: { en: 'Families can request Arabic-speaking support during matching. Availability depends on the subject, grade, schedule, and current tutor capacity.', ar: 'يمكن طلب الدعم بالعربية أثناء المطابقة. يعتمد التوفر على المادة والصف والجدول والطاقة الحالية للمدرسين.' } },
      { question: { en: 'Can you help newcomer students adjust to Ontario courses?', ar: 'هل تساعدون الطلاب الجدد على التأقلم مع مقررات أونتاريو؟' }, answer: { en: 'Tutoring can identify gaps in sequence, terminology, academic language, and prerequisite skills, then build a focused learning plan. Official enrollment and guidance decisions remain with the school board and school.', ar: 'يمكن تحديد الفجوات في التسلسل والمصطلحات واللغة الأكاديمية والمهارات السابقة وبناء خطة مركزة. تبقى قرارات التسجيل والإرشاد الرسمية لدى المجلس والمدرسة.' } },
      { question: { en: 'Are lessons available after school and on weekends?', ar: 'هل تتوفر الدروس بعد المدرسة وفي عطلة نهاية الأسبوع؟' }, answer: { en: 'Scheduling depends on tutor availability. The family can provide several preferred times in Eastern Time so the team can look for a suitable match.', ar: 'تعتمد المواعيد على توفر المدرس. يمكن للأسرة تقديم عدة أوقات مفضلة بالتوقيت الشرقي للبحث عن مطابقة مناسبة.' } },
    ], reviewedAt: '2026-08-04',
  },
  {
    id: 'united-states', level: 'country', countryCode: 'US', segments: ['united-states'], parentId: 'locations', childIds: ['michigan'], relatedIds: ['dearborn', 'canada'],
    name: { en: 'United States', ar: 'الولايات المتحدة' }, shortName: { en: 'United States', ar: 'الولايات المتحدة' }, eyebrow: { en: 'Online tutoring in the United States', ar: 'التدريس أونلاين في الولايات المتحدة' },
    seo: { title: { en: 'Online Tutoring in the United States for Grades 1–12 | Mustafa Academy', ar: 'دروس خصوصية أونلاين في الولايات المتحدة للصفوف 1–12 | أكاديمية مصطفى' }, description: { en: 'State- and district-aware online tutoring for U.S. students in math, English, science, chemistry, physics, homework support, and test preparation.', ar: 'دروس أونلاين تراعي معايير الولاية والمنطقة التعليمية لطلاب أمريكا في الرياضيات والإنجليزية والعلوم والاختبارات والواجبات.' }, primaryKeyword: { en: 'online tutoring in the United States', ar: 'دروس خصوصية أونلاين في الولايات المتحدة' }, secondaryKeywords: { en: ['online tutors USA', 'state curriculum tutoring', 'Arabic-speaking tutors USA'], ar: ['مدرسون أونلاين في أمريكا', 'تدريس مناهج الولايات', 'مدرسون يتحدثون العربية في أمريكا'] }, imageAlt: { en: 'Online tutoring for students in the United States', ar: 'دروس أونلاين للطلاب في الولايات المتحدة' } },
    heroTitle: { en: 'Online tutoring aligned with state standards and local courses', ar: 'دروس أونلاين متوافقة مع معايير الولاية والمقررات المحلية' }, heroDescription: { en: 'U.S. tutoring should identify the student’s state, district, grade, course, assessment pathway, and college-readiness goals before matching a tutor.', ar: 'يجب أن يحدد التدريس في أمريكا الولاية والمنطقة التعليمية والصف والمقرر ومسار الاختبارات وأهداف الاستعداد للكلية قبل مطابقة المدرس.' },
    trustPoints: { en: ['State-standard context', 'District and course awareness', 'Grades 1–12', 'Online tutoring across U.S. time zones'], ar: ['سياق معايير الولاية', 'مراعاة المنطقة والمقرر', 'الصفوف 1–12', 'تدريس أونلاين عبر مناطق أمريكا الزمنية'] },
    introductionTitle: { en: 'The state and district shape the tutoring plan', ar: 'تحدد الولاية والمنطقة التعليمية خطة التدريس' }, introduction: { en: 'States publish academic standards and assessment systems, while districts and schools organize courses, resources, graduation pathways, intervention programs, AP options, and local supports. Location pages connect these layers without claiming school partnership.', ar: 'تنشر الولايات المعايير والاختبارات، بينما تنظم المناطق والمدارس المقررات والموارد ومسارات التخرج وبرامج الدعم وAP. تربط صفحات المواقع هذه المستويات دون ادعاء شراكة مدرسية.' },
    servicesTitle: { en: 'Online tutoring services in the United States', ar: 'خدمات التدريس أونلاين في الولايات المتحدة' }, servicesDescription: { en: 'Tutoring can support current courses, intervention needs, homework, state assessments, PSAT/SAT pathways, and advanced classes where offered.', ar: 'يمكن دعم المقررات الحالية وبرامج التدخل والواجبات واختبارات الولاية ومسارات PSAT/SAT والمقررات المتقدمة عند توفرها.' }, services: commonServices,
    subjectsTitle: { en: 'Popular U.S. tutoring subjects', ar: 'مواد التدريس الشائعة في أمريكا' }, subjectsDescription: { en: 'Core subject pages provide detailed topic maps that can be adapted to the student’s state and course.', ar: 'توفر صفحات المواد خرائط موضوعات تفصيلية يمكن تكييفها مع ولاية الطالب ومقرره.' }, subjects: coreSubjects,
    curriculumTitle: { en: 'State standards and district curriculum', ar: 'معايير الولاية ومنهاج المنطقة التعليمية' }, curriculumDescription: { en: 'A strong tutoring request includes the state, district or school, grade, course title, current assignments, and assessment goals.', ar: 'يشمل طلب التدريس القوي الولاية والمنطقة أو المدرسة والصف واسم المقرر والواجبات الحالية وأهداف الاختبارات.' }, curriculumPoints: { en: ['State academic standards', 'District course and intervention structures', 'AP and college-readiness options where applicable', 'English-language development and newcomer support'], ar: ['معايير الولاية الأكاديمية', 'بنية المقررات والدعم في المنطقة التعليمية', 'خيارات AP والاستعداد للكلية عند الصلة', 'تنمية اللغة الإنجليزية ودعم القادمين الجدد'] },
    assessmentsTitle: { en: 'Assessment support varies by state', ar: 'يختلف دعم الاختبارات حسب الولاية' }, assessmentsDescription: { en: 'Pages should explain only the assessments used in the target state and the student’s grade.', ar: 'يجب أن تشرح الصفحات الاختبارات المستخدمة في الولاية المستهدفة وصف الطالب فقط.' }, assessments: [{ name: 'State summative assessments', description: { en: 'States use their own assessment systems to measure progress against state standards.', ar: 'تستخدم الولايات أنظمة تقييم خاصة لقياس التقدم وفق معاييرها.' } }, { name: 'PSAT and SAT pathways', description: { en: 'Some states and districts use College Board assessments within state testing or college-readiness programs.', ar: 'تستخدم بعض الولايات والمناطق اختبارات College Board ضمن تقييم الولاية أو الاستعداد للكلية.' } }, { name: 'Advanced Placement examinations', description: { en: 'AP tutoring is relevant only when the student is enrolled in or preparing for a specific AP course and exam.', ar: 'يكون دعم AP مناسبًا فقط عندما يدرس الطالب مقررًا محددًا أو يستعد لاختباره.' } }],
    gradesTitle: { en: 'Support across U.S. school stages', ar: 'الدعم عبر المراحل الدراسية في أمريكا' }, gradesDescription: { en: 'The plan can progress from foundations to credit-bearing high school courses and college-readiness preparation.', ar: 'يمكن أن تنتقل الخطة من الأساسيات إلى مقررات الثانوية المعتمدة والاستعداد للكلية.' }, grades: commonGrades,
    familyTitle: { en: 'Support for Arab and Arabic-speaking families in the U.S.', ar: 'دعم الأسر العربية والناطقة بالعربية في أمريكا' }, familyDescription: { en: 'Bilingual parent communication can make it easier to explain course placement, academic gaps, English-language needs, and scheduling while the student learns in the language required by school.', ar: 'يسهل التواصل الثنائي شرح توزيع المقررات والفجوات والحاجة للإنجليزية والجدولة، بينما يتعلم الطالب باللغة المطلوبة في المدرسة.' }, familyPoints: { en: ['Arabic parent communication when available', 'Support for English-language academic vocabulary', 'Clear explanation of state and district terminology', 'Scheduling across Eastern, Central, Mountain, and Pacific time zones'], ar: ['تواصل عربي مع ولي الأمر عند التوفر', 'دعم المفردات الأكاديمية الإنجليزية', 'شرح مصطلحات الولاية والمنطقة', 'جدولة عبر مناطق أمريكا الزمنية'] },
    localGuideTitle: { en: 'United States location directory', ar: 'دليل المواقع في الولايات المتحدة' }, localGuideDescription: { en: 'Michigan is the first state hub, with Dearborn as the first published city page.', ar: 'ميشيغان هي صفحة الولاية الأولى، وديربورن أول صفحة مدينة منشورة.' }, localContext: { en: ['Michigan standards and assessment guide', 'Dearborn city tutoring page', 'Additional states remain unpublished until research and unique content are complete'], ar: ['دليل معايير واختبارات ميشيغان', 'صفحة التدريس في ديربورن', 'تبقى الولايات الأخرى غير منشورة حتى اكتمال البحث والمحتوى الفريد'] }, resources: [{ name: 'Michigan Academic Standards', description: { en: 'Official state standards used for the first U.S. state and city pages.', ar: 'المعايير الرسمية المستخدمة في صفحات أول ولاية ومدينة أمريكية.' }, url: 'https://www.michigan.gov/mde/services/academic-standards', type: 'education-authority' }],
    faqTitle: { en: 'Online tutoring in the United States: common questions', ar: 'أسئلة شائعة عن التدريس أونلاين في أمريكا' }, faqDescription: { en: 'Answers about state standards, districts, tests, and bilingual support.', ar: 'إجابات حول معايير الولاية والمناطق والاختبارات والدعم الثنائي.' }, faqs: [
      { question: { en: 'Do all U.S. students follow the same curriculum?', ar: 'هل يتبع جميع الطلاب في أمريكا المنهاج نفسه؟' }, answer: { en: 'No. States publish standards and assessment requirements, while districts and schools organize courses and instructional resources. Tutor matching should identify the exact state, district, grade, and course.', ar: 'لا. تنشر الولايات المعايير ومتطلبات الاختبارات، بينما تنظم المناطق والمدارس المقررات والموارد. يجب تحديد الولاية والمنطقة والصف والمقرر بدقة.' } },
      { question: { en: 'Can tutoring help with state assessments?', ar: 'هل يساعد التدريس في اختبارات الولاية؟' }, answer: { en: 'Yes, when the assessment, grade, and official expectations are verified. Tutoring can strengthen the underlying skills and practise appropriate formats without guaranteeing a score.', ar: 'نعم، بعد التحقق من الاختبار والصف والتوقعات الرسمية. يمكن تقوية المهارات والتدرب على الصيغ المناسبة دون ضمان درجة.' } },
      { question: { en: 'Can tutors help English learners?', ar: 'هل يمكن دعم متعلمي اللغة الإنجليزية؟' }, answer: { en: 'Support can combine subject instruction with academic vocabulary, reading, writing, and explanation strategies. It does not replace the student’s official school ELL or language-development services.', ar: 'يمكن الجمع بين شرح المادة والمفردات الأكاديمية والقراءة والكتابة واستراتيجيات الفهم، دون استبدال خدمات ELL الرسمية في المدرسة.' } },
    ], reviewedAt: '2026-08-04',
  },
  {
    id: 'michigan', level: 'region', countryCode: 'US', segments: ['united-states', 'michigan'], parentId: 'united-states', childIds: ['dearborn'], relatedIds: ['locations'],
    name: { en: 'Michigan', ar: 'ميشيغان' }, shortName: { en: 'Michigan', ar: 'ميشيغان' }, eyebrow: { en: 'Michigan standards tutoring', ar: 'تدريس معايير ميشيغان' },
    seo: { title: { en: 'Michigan Online Tutoring for K–12 Standards and Assessments | Mustafa Academy', ar: 'دروس أونلاين وفق معايير واختبارات ميشيغان | أكاديمية مصطفى' }, description: { en: 'Online tutoring aligned with Michigan academic standards, M-STEP, PSAT, MME, SAT, district courses, and K–12 student needs.', ar: 'دروس أونلاين متوافقة مع معايير ميشيغان وM-STEP وPSAT وMME وSAT ومقررات المناطق التعليمية.' }, primaryKeyword: { en: 'Michigan online tutoring', ar: 'دروس أونلاين في ميشيغان' }, secondaryKeywords: { en: ['Michigan standards tutor', 'M-STEP tutoring', 'PSAT tutoring Michigan', 'SAT tutoring Michigan'], ar: ['مدرس منهاج ميشيغان', 'تحضير M-STEP', 'تحضير PSAT في ميشيغان', 'تحضير SAT في ميشيغان'] }, imageAlt: { en: 'Online tutoring aligned with Michigan standards', ar: 'دروس أونلاين متوافقة مع معايير ميشيغان' } },
    heroTitle: { en: 'Online tutoring for Michigan standards, courses, and assessments', ar: 'دروس أونلاين لمعايير ومقررات واختبارات ميشيغان' }, heroDescription: { en: 'Michigan academic standards guide local curriculum development and provide a foundation for state assessments. Tutoring should connect those standards with the student’s district course, current work, and grade-level testing.', ar: 'توجه معايير ميشيغان تطوير المناهج المحلية وتشكل أساس اختبارات الولاية. يجب أن يربط التدريس هذه المعايير بمقرر المنطقة والعمل الحالي واختبارات الصف.' },
    trustPoints: { en: ['Michigan Academic Standards', 'M-STEP and PSAT pathways', 'MME and SAT support', 'District-specific course context'], ar: ['معايير ميشيغان الأكاديمية', 'مسارات M-STEP وPSAT', 'دعم MME وSAT', 'سياق مقررات المنطقة التعليمية'] },
    introductionTitle: { en: 'Michigan standards guide—but districts organize learning', ar: 'توجه معايير ميشيغان التعلم وتُنظم المناطق المقررات' }, introduction: { en: 'The Michigan Department of Education publishes standards and assessment systems. Districts determine course sequencing, local resources, intervention options, early-college pathways, and other programs. The tutoring plan should use both levels of information.', ar: 'تنشر وزارة تعليم ميشيغان المعايير وأنظمة الاختبارات، بينما تحدد المناطق تسلسل المقررات والموارد وبرامج الدعم والمسارات المبكرة للكلية. يجب أن تستخدم الخطة المستويين.' },
    servicesTitle: { en: 'Michigan tutoring services', ar: 'خدمات التدريس في ميشيغان' }, servicesDescription: { en: 'Support can target current district coursework, foundational gaps, state-test skills, high school credit courses, and college readiness.', ar: 'يمكن استهداف مقررات المنطقة الحالية والفجوات التأسيسية ومهارات اختبارات الولاية ومقررات الثانوية والاستعداد للكلية.' }, services: commonServices,
    subjectsTitle: { en: 'Michigan subject support', ar: 'دعم المواد في ميشيغان' }, subjectsDescription: { en: 'Math, ELA, science, chemistry, and physics support can be connected to Michigan standards and district course materials.', ar: 'يمكن ربط دعم الرياضيات واللغة والعلوم والكيمياء والفيزياء بمعايير ميشيغان ومواد المنطقة التعليمية.' }, subjects: coreSubjects,
    curriculumTitle: { en: 'Michigan Academic Standards and Merit Curriculum context', ar: 'سياق معايير ميشيغان وMichigan Merit Curriculum' }, curriculumDescription: { en: 'Michigan standards outline statewide learning expectations and help guide local curriculum. High school tutoring may also need to consider course-credit requirements and district course catalogs.', ar: 'تحدد معايير ميشيغان توقعات التعلم على مستوى الولاية وتوجه المناهج المحلية. وقد يحتاج دعم الثانوية إلى مراعاة اعتمادات المقررات وكتالوج المنطقة.' }, curriculumPoints: { en: ['K–12 mathematics, ELA, science, and other state standards', 'Local district curriculum and course catalogs', 'English-language development standards and supports', 'High school and college-readiness pathways'], ar: ['معايير K–12 في الرياضيات واللغة والعلوم وغيرها', 'مناهج وكتالوجات المقررات المحلية', 'معايير ودعم تنمية اللغة الإنجليزية', 'مسارات الثانوية والاستعداد للكلية'] },
    assessmentsTitle: { en: 'Michigan assessment pathways', ar: 'مسارات الاختبارات في ميشيغان' }, assessmentsDescription: { en: 'Assessment support must match the student’s current grade and the state testing calendar.', ar: 'يجب أن يتوافق دعم الاختبارات مع صف الطالب وجدول الولاية الحالي.' }, assessments: [{ name: 'M-STEP', description: { en: 'Michigan’s standards-based summative assessment is used in specified grades and subjects.', ar: 'اختبار ميشيغان الختامي المبني على المعايير ويستخدم في صفوف ومواد محددة.' } }, { name: 'PSAT 8/9 and PSAT 10', description: { en: 'Michigan uses College Board PSAT assessments in Grades 8, 9, and 10 according to current state rules.', ar: 'تستخدم ميشيغان اختبارات PSAT التابعة لـCollege Board في الصفوف 8 و9 و10 وفق القواعد الحالية.' } }, { name: 'Michigan Merit Examination (MME)', description: { en: 'The Grade 11 pathway includes SAT with Essay, work-readiness assessments, and M-STEP science and social studies components.', ar: 'يتضمن مسار الصف 11 SAT with Essay واختبارات الاستعداد للعمل وأجزاء M-STEP للعلوم والدراسات الاجتماعية.' } }],
    gradesTitle: { en: 'Michigan tutoring by grade band', ar: 'التدريس في ميشيغان حسب المرحلة' }, gradesDescription: { en: 'The tutoring plan should match grade-level standards, district courses, and assessment timing.', ar: 'يجب أن تطابق الخطة معايير الصف ومقررات المنطقة وتوقيت الاختبارات.' }, grades: commonGrades,
    familyTitle: { en: 'Bilingual support for Michigan families', ar: 'دعم ثنائي للأسر في ميشيغان' }, familyDescription: { en: 'Arabic-speaking families can request clear explanations of standards, district terminology, PSAT/SAT pathways, and course support while lessons remain aligned with school expectations.', ar: 'يمكن للأسر طلب شرح واضح للمعايير ومصطلحات المنطقة ومسارات PSAT/SAT ودعم المقررات مع بقاء الدروس متوافقة مع المدرسة.' }, familyPoints: { en: ['Request Arabic parent communication', 'Support academic English inside math and science', 'Explain test names and grade timing', 'Use Eastern Time for most Michigan scheduling'], ar: ['طلب تواصل عربي مع ولي الأمر', 'دعم الإنجليزية الأكاديمية داخل الرياضيات والعلوم', 'شرح أسماء الاختبارات وتوقيتها حسب الصف', 'استخدام التوقيت الشرقي لمعظم مواعيد ميشيغان'] },
    localGuideTitle: { en: 'Michigan pilot city', ar: 'المدينة التجريبية في ميشيغان' }, localGuideDescription: { en: 'Dearborn is the first Michigan city page because official sources provide strong district, assessment, language-support, early-college, library, and higher-education context.', ar: 'ديربورن هي أول صفحة مدينة في ميشيغان لأن المصادر الرسمية توفر سياقًا قويًا للمنطقة والاختبارات ودعم اللغة والكلية المبكرة والمكتبة والتعليم العالي.' }, localContext: { en: ['Dearborn Public Schools curriculum and course catalog', 'M-STEP, PSAT, and MME assessment guidance', 'English learner and intervention options', 'Local colleges, university, and library resources'], ar: ['منهاج وكتالوج Dearborn Public Schools', 'إرشادات M-STEP وPSAT وMME', 'خيارات متعلمي الإنجليزية وبرامج الدعم', 'موارد الكليات والجامعة والمكتبة المحلية'] }, resources: [{ name: 'Michigan Academic Standards', description: { en: 'Official standards and course-credit guidance from the Michigan Department of Education.', ar: 'المعايير وإرشادات اعتمادات المقررات من وزارة تعليم ميشيغان.' }, url: 'https://www.michigan.gov/mde/services/academic-standards', type: 'education-authority' }, { name: 'Michigan Student Assessment', description: { en: 'Official overview of M-STEP, PSAT, MME, WIDA, and other assessment programs.', ar: 'نظرة رسمية على M-STEP وPSAT وMME وWIDA وغيرها.' }, url: 'https://www.michigan.gov/mde/services/student-assessment', type: 'assessment' }],
    faqTitle: { en: 'Michigan tutoring FAQs', ar: 'أسئلة التدريس في ميشيغان' }, faqDescription: { en: 'Questions about standards, M-STEP, PSAT, MME, and district alignment.', ar: 'أسئلة حول المعايير وM-STEP وPSAT وMME وتوافق المنطقة.' }, faqs: [
      { question: { en: 'Can tutoring follow Michigan Academic Standards?', ar: 'هل يمكن للدروس اتباع معايير ميشيغان الأكاديمية؟' }, answer: { en: 'Yes. The tutor can use the relevant standards together with the district course, unit, assignment, and school resources supplied by the family.', ar: 'نعم. يمكن استخدام المعايير ذات الصلة مع مقرر المنطقة والوحدة والواجب والموارد المدرسية التي تقدمها الأسرة.' } },
      { question: { en: 'Can you prepare students for M-STEP?', ar: 'هل تقدمون تحضيرًا لاختبار M-STEP؟' }, answer: { en: 'Tutoring can strengthen grade-level standards, review weak areas, and practise appropriate question types using official resources where available. It does not guarantee a score.', ar: 'يمكن تقوية معايير الصف ومراجعة نقاط الضعف والتدرب على أنواع الأسئلة المناسبة باستخدام موارد رسمية عند توفرها، دون ضمان درجة.' } },
      { question: { en: 'Do you support PSAT or SAT preparation?', ar: 'هل تدعمون التحضير لـPSAT أو SAT؟' }, answer: { en: 'Yes, subject to tutor availability and the student’s grade and goal. Michigan uses PSAT assessments in multiple grades and the MME includes an SAT component in Grade 11.', ar: 'نعم، حسب توفر المدرس وصف الطالب وهدفه. تستخدم ميشيغان PSAT في عدة صفوف، ويتضمن MME جزء SAT في الصف 11.' } },
    ], reviewedAt: '2026-08-04',
  },
  {
    id: 'dearborn', level: 'city', countryCode: 'US', segments: ['united-states', 'michigan', 'dearborn'], parentId: 'michigan', childIds: [], relatedIds: ['michigan', 'united-states', 'milton'],
    name: { en: 'Dearborn, Michigan', ar: 'ديربورن، ميشيغان' }, shortName: { en: 'Dearborn', ar: 'ديربورن' }, eyebrow: { en: 'Online tutors serving Dearborn students', ar: 'مدرسون أونلاين يخدمون طلاب ديربورن' },
    seo: { title: { en: 'Online Tutoring in Dearborn, Michigan | Math, English & Science', ar: 'دروس خصوصية أونلاين في ديربورن، ميشيغان | أكاديمية مصطفى' }, description: { en: 'One-to-one online tutoring for Dearborn students aligned with Michigan standards, Dearborn Public Schools courses, M-STEP, PSAT, SAT, and English learner needs.', ar: 'دروس فردية أونلاين لطلاب ديربورن وفق معايير ميشيغان ومقررات Dearborn Public Schools وM-STEP وPSAT وSAT واحتياجات متعلمي الإنجليزية.' }, primaryKeyword: { en: 'online tutoring in Dearborn Michigan', ar: 'دروس خصوصية أونلاين في ديربورن' }, secondaryKeywords: { en: ['math tutoring Dearborn', 'Arabic-speaking tutors Dearborn', 'M-STEP tutoring Dearborn', 'SAT tutoring Dearborn'], ar: ['مدرس رياضيات في ديربورن', 'مدرس يتحدث العربية في ديربورن', 'تحضير M-STEP في ديربورن', 'تحضير SAT في ديربورن'] }, imageAlt: { en: 'Online tutoring for students in Dearborn Michigan', ar: 'دروس أونلاين للطلاب في ديربورن ميشيغان' } },
    heroTitle: { en: 'One-to-one online tutoring for students in Dearborn', ar: 'دروس فردية أونلاين للطلاب في ديربورن' }, heroDescription: { en: 'Support can connect Michigan standards with Dearborn Public Schools coursework, English-language development, intervention needs, M-STEP, PSAT, SAT, AP courses, and early-college pathways.', ar: 'يمكن ربط معايير ميشيغان بمقررات Dearborn Public Schools وتنمية الإنجليزية وبرامج الدعم وM-STEP وPSAT وSAT ومقررات AP ومسارات الكلية المبكرة.' },
    trustPoints: { en: ['Michigan standards context', 'Dearborn Public Schools course awareness', 'English or Arabic family communication', 'Online—not a physical Dearborn centre'], ar: ['سياق معايير ميشيغان', 'مراعاة مقررات Dearborn Public Schools', 'تواصل أسري بالعربية أو الإنجليزية', 'خدمة أونلاين وليست مركزًا فعليًا في ديربورن'] },
    introductionTitle: { en: 'Tutoring connected to Dearborn district courses and student goals', ar: 'تدريس مرتبط بمقررات ديربورن وأهداف الطالب' }, introduction: { en: 'Dearborn Public Schools states that its courses follow Michigan Department of Education standards and offers multiple learning options, including English learner courses, advanced math and science, AP, intervention classes, and early-college programs. Tutor matching should use the student’s exact school course and goal.', ar: 'توضح Dearborn Public Schools أن مقرراتها تتبع معايير وزارة تعليم ميشيغان وتوفر خيارات تشمل متعلمي الإنجليزية والرياضيات والعلوم المتقدمة وAP وبرامج التدخل والكلية المبكرة. يجب أن تعتمد المطابقة على مقرر الطالب وهدفه الدقيق.' },
    servicesTitle: { en: 'Online tutoring services for Dearborn families', ar: 'خدمات التدريس أونلاين لأسر ديربورن' }, servicesDescription: { en: 'Students can receive focused help for current courses, academic English, intervention skills, state assessments, and college-readiness tests.', ar: 'يمكن للطلاب تلقي دعم مركز للمقررات الحالية والإنجليزية الأكاديمية ومهارات التدخل واختبارات الولاية والاستعداد للكلية.' }, services: commonServices,
    subjectsTitle: { en: 'Popular subjects for Dearborn students', ar: 'المواد الشائعة لطلاب ديربورن' }, subjectsDescription: { en: 'The strongest needs often connect to mathematics, English language arts, science, chemistry, physics, academic reading, writing, and test preparation.', ar: 'ترتبط الاحتياجات غالبًا بالرياضيات واللغة الإنجليزية والعلوم والكيمياء والفيزياء والقراءة والكتابة الأكاديمية والاختبارات.' }, subjects: coreSubjects,
    curriculumTitle: { en: 'Michigan standards and Dearborn Public Schools courses', ar: 'معايير ميشيغان ومقررات Dearborn Public Schools' }, curriculumDescription: { en: 'The tutoring plan should use the district course title, grade, current unit, assignments, school intervention plan where relevant, and the student’s language-development needs. School names are included only as local context; Mustafa Academy is not affiliated with the district or its schools.', ar: 'يجب أن تستخدم الخطة اسم مقرر المنطقة والصف والوحدة الحالية والواجبات وخطة التدخل عند الصلة واحتياجات اللغة. تُذكر أسماء المدارس للسياق فقط، ولا توجد شراكة مع المنطقة أو مدارسها.' }, curriculumPoints: { en: ['Michigan standards aligned district courses', 'English learner and academic-language support', 'High school AP, early-college, and intervention context', 'Course-specific math, ELA, and science tutoring'], ar: ['مقررات المنطقة المتوافقة مع معايير ميشيغان', 'دعم متعلمي الإنجليزية واللغة الأكاديمية', 'سياق AP والكلية المبكرة وبرامج التدخل', 'تدريس مخصص لمقررات الرياضيات واللغة والعلوم'] },
    assessmentsTitle: { en: 'Assessment support relevant to Dearborn students', ar: 'دعم الاختبارات ذات الصلة بطلاب ديربورن' }, assessmentsDescription: { en: 'The assessment plan should match the student’s grade and current Michigan testing requirements.', ar: 'يجب أن تتوافق خطة الاختبار مع صف الطالب ومتطلبات ميشيغان الحالية.' }, assessments: [{ name: 'M-STEP', description: { en: 'Standards-based preparation can reinforce grade-level math, ELA, science, or social-studies skills where the assessment applies.', ar: 'يمكن للتحضير المبني على المعايير تقوية مهارات الرياضيات واللغة والعلوم أو الدراسات الاجتماعية حسب الصف.' } }, { name: 'PSAT 8/9 and PSAT 10', description: { en: 'Support can strengthen reading, writing, and mathematics skills while familiarizing students with College Board-style questions.', ar: 'يمكن تقوية القراءة والكتابة والرياضيات والتعرف إلى أسئلة College Board.' } }, { name: 'MME and SAT', description: { en: 'Grade 11 preparation may include SAT reading, writing, and mathematics alongside the student’s broader Michigan Merit Examination pathway.', ar: 'قد يشمل تحضير الصف 11 قراءة وكتابة ورياضيات SAT ضمن مسار Michigan Merit Examination.' } }, { name: 'AP and course exams', description: { en: 'Students enrolled in AP or advanced district courses can request subject-specific support tied to their actual syllabus and exam goals.', ar: 'يمكن لطلاب AP أو المقررات المتقدمة طلب دعم مرتبط بالمنهج الفعلي وأهداف الاختبار.' } }],
    gradesTitle: { en: 'Tutoring by grade level in Dearborn', ar: 'التدريس حسب الصف في ديربورن' }, gradesDescription: { en: 'Support can progress from reading and number foundations to high school credits, intervention, AP, SAT, and early-college readiness.', ar: 'يمتد الدعم من أساسيات القراءة والأعداد إلى اعتمادات الثانوية وبرامج التدخل وAP وSAT والاستعداد للكلية المبكرة.' }, grades: commonGrades,
    familyTitle: { en: 'Support for Arabic-speaking and English learner families', ar: 'دعم الأسر الناطقة بالعربية ومتعلمي الإنجليزية' }, familyDescription: { en: 'Dearborn’s public sources provide education and municipal information in a multilingual community context. Mustafa Academy can offer Arabic parent communication when available while helping the student build the English academic language required for school.', ar: 'توفر مصادر ديربورن العامة معلومات تعليمية وبلدية في سياق متعدد اللغات. يمكن للأكاديمية تقديم تواصل عربي مع ولي الأمر عند التوفر مع بناء الإنجليزية الأكاديمية المطلوبة في المدرسة.' }, familyPoints: { en: ['Request Arabic-speaking tutor support', 'Combine subject tutoring with academic English', 'Explain district programs and test terminology', 'Coordinate Eastern Time scheduling after school or on weekends'], ar: ['طلب مدرس يتحدث العربية', 'دمج دعم المادة مع الإنجليزية الأكاديمية', 'شرح برامج المنطقة ومصطلحات الاختبارات', 'تنسيق مواعيد بالتوقيت الشرقي بعد المدرسة أو في العطلة'] },
    localGuideTitle: { en: 'Dearborn education and community guide', ar: 'دليل التعليم والمجتمع في ديربورن' }, localGuideDescription: { en: 'These official institutions and public resources support accurate local context. Their inclusion does not indicate endorsement or partnership.', ar: 'تدعم هذه المؤسسات والموارد العامة سياقًا محليًا دقيقًا، ولا يعني ذكرها تأييدًا أو شراكة.' },
    localContext: { en: ['Dearborn Public Schools organizes its traditional high schools around Dearborn High, Edsel Ford High, and Fordson High feeder tracks.', 'The district publishes ELL courses, intervention classes, AP options, career programs, and five-year high school plus college pathways.', 'University of Michigan-Dearborn and Henry Ford College are major local postsecondary institutions.', 'Dearborn Public Library lists homework-help and language-learning resources.', 'The City of Dearborn provides service information in English and Arabic.', 'Dearborn uses Eastern Time for online scheduling.'], ar: ['تنظم Dearborn Public Schools مدارسها الثانوية التقليدية حول Dearborn High وEdsel Ford High وFordson High.', 'تنشر المنطقة مقررات ELL وبرامج التدخل وخيارات AP والمسارات المهنية وبرامج خمس سنوات تجمع الثانوية والكلية.', 'تعد University of Michigan-Dearborn وHenry Ford College مؤسستين محليتين مهمتين بعد الثانوية.', 'توفر Dearborn Public Library موارد للمساعدة في الواجبات وتعلم اللغات.', 'تقدم مدينة ديربورن معلومات خدمات بالإنجليزية والعربية.', 'تستخدم ديربورن التوقيت الشرقي لتنظيم الجلسات أونلاين.'] },
    resources: [
      { name: 'Dearborn Public Schools Curriculum', description: { en: 'Official district curriculum, grade expectations, language arts, mathematics, and program information.', ar: 'معلومات المنطقة الرسمية عن المناهج وتوقعات الصفوف واللغة والرياضيات والبرامج.' }, url: 'https://dearbornschools.org/departments/curriculum-professional-development/', type: 'education-authority' },
      { name: 'Dearborn Public Schools High School Options', description: { en: 'Official information about traditional high schools, intervention, early college, AP, and career pathways.', ar: 'معلومات رسمية عن المدارس الثانوية والتدخل والكلية المبكرة وAP والمسارات المهنية.' }, url: 'https://dearbornschools.org/academic-programs/high-school-options/', type: 'education-authority' },
      { name: 'Michigan Academic Standards', description: { en: 'Official state standards and course-credit resources.', ar: 'المعايير الرسمية وموارد اعتمادات المقررات في الولاية.' }, url: 'https://www.michigan.gov/mde/services/academic-standards', type: 'education-authority' },
      { name: 'Michigan Student Assessment', description: { en: 'Official M-STEP, PSAT, MME, and assessment guidance.', ar: 'إرشادات رسمية عن M-STEP وPSAT وMME والاختبارات.' }, url: 'https://www.michigan.gov/mde/services/student-assessment', type: 'assessment' },
      { name: 'Dearborn Public Library Online Resources', description: { en: 'Public homework-help, research, and language-learning resources.', ar: 'موارد عامة للواجبات والبحث وتعلم اللغات.' }, url: 'https://dearbornlibrary.org/online-resources-main/', type: 'library' },
      { name: 'University of Michigan-Dearborn', description: { en: 'Official university information and local campus context.', ar: 'معلومات الجامعة الرسمية وسياق الحرم المحلي.' }, url: 'https://umdearborn.edu/about-um-dearborn', type: 'university' },
      { name: 'Henry Ford College', description: { en: 'Official college information and Dearborn-area academic pathways.', ar: 'معلومات الكلية الرسمية والمسارات الأكاديمية في منطقة ديربورن.' }, url: 'https://www.hfcc.edu/about', type: 'college' },
    ],
    faqTitle: { en: 'Dearborn online tutoring FAQs', ar: 'الأسئلة الشائعة عن التدريس أونلاين في ديربورن' }, faqDescription: { en: 'Answers for Dearborn families about Michigan standards, district courses, Arabic support, English learners, and testing.', ar: 'إجابات لأسر ديربورن حول معايير ميشيغان والمقررات والدعم بالعربية ومتعلمي الإنجليزية والاختبارات.' }, faqs: [
      { question: { en: 'Do you provide online math tutoring for Dearborn students?', ar: 'هل تقدمون تدريس رياضيات أونلاين لطلاب ديربورن؟' }, answer: { en: 'Yes. Support can cover foundational mathematics, algebra, geometry, functions, statistics, advanced courses, M-STEP skills, PSAT, and SAT mathematics, subject to tutor availability.', ar: 'نعم. يمكن دعم الرياضيات التأسيسية والجبر والهندسة والدوال والإحصاء والمقررات المتقدمة ومهارات M-STEP ورياضيات PSAT وSAT، حسب توفر المدرس.' } },
      { question: { en: 'Can tutors use Dearborn Public Schools course material?', ar: 'هل يمكن للمدرس استخدام مواد Dearborn Public Schools؟' }, answer: { en: 'Tutors can work from the student’s course title, syllabus, assignments, textbook, teacher notes, and Michigan standards. Mustafa Academy is not affiliated with Dearborn Public Schools.', ar: 'يمكن العمل وفق اسم المقرر والخطة والواجبات والكتاب وملاحظات المعلم ومعايير ميشيغان. لا ترتبط أكاديمية مصطفى بـDearborn Public Schools.' } },
      { question: { en: 'Can tutoring help an English learner with math or science?', ar: 'هل يساعد التدريس متعلم الإنجليزية في الرياضيات أو العلوم؟' }, answer: { en: 'Yes. A lesson can teach the subject while explicitly supporting vocabulary, reading directions, written explanations, and problem-solving language. It does not replace the district’s official ELL services.', ar: 'نعم. يمكن تدريس المادة مع دعم المفردات وقراءة التعليمات وكتابة التفسيرات ولغة حل المسائل، دون استبدال خدمات ELL الرسمية.' } },
      { question: { en: 'Are Arabic-speaking tutors available in Dearborn?', ar: 'هل يتوفر مدرسون يتحدثون العربية في ديربورن؟' }, answer: { en: 'Families can request Arabic-speaking support. Availability is confirmed individually based on subject, grade, schedule, and current tutor capacity.', ar: 'يمكن للأسرة طلب الدعم بالعربية. يُؤكد التوفر لكل حالة حسب المادة والصف والجدول والطاقة الحالية.' } },
      { question: { en: 'Can you help with PSAT, SAT, or AP courses?', ar: 'هل تقدمون دعمًا لـPSAT وSAT أو مقررات AP؟' }, answer: { en: 'Yes, when an appropriate tutor is available. The plan should be tied to the student’s test date, current score information where available, course syllabus, and specific skill gaps.', ar: 'نعم، عند توفر مدرس مناسب. يجب ربط الخطة بتاريخ الاختبار ومعلومات المستوى الحالية وخطة المقرر والفجوات المحددة.' } },
    ], reviewedAt: '2026-08-04',
  },
];

function localizeFeature(
  item: LocationFeature,
  locale: SiteLocale
) {
  return {
    title: item.title[locale],
    description:
      item.description[locale],
    icon: item.icon,
  };
}

export function getLocationDefinitionById(
  id: string
): LocationPageDefinition | undefined {
  return locationPages.find(
    (page) => page.id === id
  );
}

export function getLocationDefinitionBySegments(
  segments: string[]
): LocationPageDefinition | undefined {
  const key = segments.join('/');

  return locationPages.find(
    (page) =>
      page.segments.join('/') === key
  );
}

export function getLocationStaticSegments(): string[][] {
  return locationPages
    .filter((page) => page.segments.length > 0)
    .map((page) => page.segments);
}

export function localizeLocationPage(
  definition: LocationPageDefinition,
  locale: SiteLocale
): LocalizedLocationPage {
  return {
    id: definition.id,
    level: definition.level,
    countryCode:
      definition.countryCode,
    segments: definition.segments,
    parentId: definition.parentId,
    childIds: definition.childIds,
    relatedIds: definition.relatedIds,
    name: definition.name[locale],
    shortName:
      definition.shortName[locale],
    eyebrow:
      definition.eyebrow[locale],
    seo: {
      title:
        definition.seo.title[locale],
      description:
        definition.seo.description[locale],
      primaryKeyword:
        definition.seo
          .primaryKeyword[locale],
      secondaryKeywords:
        definition.seo
          .secondaryKeywords[locale],
      imageAlt:
        definition.seo.imageAlt[locale],
    },
    heroTitle:
      definition.heroTitle[locale],
    heroDescription:
      definition.heroDescription[locale],
    trustPoints:
      definition.trustPoints[locale],
    introductionTitle:
      definition
        .introductionTitle[locale],
    introduction:
      definition.introduction[locale],
    servicesTitle:
      definition.servicesTitle[locale],
    servicesDescription:
      definition
        .servicesDescription[locale],
    services:
      definition.services.map(
        (item) =>
          localizeFeature(
            item,
            locale
          )
      ),
    subjectsTitle:
      definition.subjectsTitle[locale],
    subjectsDescription:
      definition
        .subjectsDescription[locale],
    subjects:
      definition.subjects.map(
        (item) => ({
          label:
            item.label[locale],
          description:
            item.description[locale],
          hrefType:
            item.hrefType,
          hrefValue:
            item.hrefValue,
        })
      ),
    curriculumTitle:
      definition.curriculumTitle[locale],
    curriculumDescription:
      definition
        .curriculumDescription[locale],
    curriculumPoints:
      definition
        .curriculumPoints[locale],
    assessmentsTitle:
      definition.assessmentsTitle[locale],
    assessmentsDescription:
      definition
        .assessmentsDescription[locale],
    assessments:
      definition.assessments.map(
        (item) => ({
          name: item.name,
          description:
            item.description[locale],
        })
      ),
    gradesTitle:
      definition.gradesTitle[locale],
    gradesDescription:
      definition
        .gradesDescription[locale],
    grades:
      definition.grades.map(
        (item) =>
          localizeFeature(
            item,
            locale
          )
      ),
    familyTitle:
      definition.familyTitle[locale],
    familyDescription:
      definition
        .familyDescription[locale],
    familyPoints:
      definition.familyPoints[locale],
    localGuideTitle:
      definition.localGuideTitle[locale],
    localGuideDescription:
      definition
        .localGuideDescription[locale],
    localContext:
      definition.localContext[locale],
    resources:
      definition.resources.map(
        (item) => ({
          name: item.name,
          description:
            item.description[locale],
          url: item.url,
          type: item.type,
        })
      ),
    faqTitle:
      definition.faqTitle[locale],
    faqDescription:
      definition
        .faqDescription[locale],
    faqs:
      definition.faqs.map(
        (item) => ({
          question:
            item.question[locale],
          answer:
            item.answer[locale],
        })
      ),
    reviewedAt:
      definition.reviewedAt,
  };
}

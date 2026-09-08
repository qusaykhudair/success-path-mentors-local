import type { SiteLocale } from '@/config/site';
import type {
  LocalizedText,
  LocationEducationResource,
} from '@/types/location';

interface LocationEducationResourceDefinition {
  name: LocalizedText;
  description: LocalizedText;
  url: string;
  type: LocationEducationResource['type'];
}

const urls = {
  tdsbSpecialEducationGuides:
    'https://www.tdsb.on.ca/Learning-Equity-and-Well-Being/Special-Education-and-Inclusion/Parent-Guides-to-Special-Education-and-Inclusion',
  tdsbIepGuide:
    'https://www.tdsb.on.ca/Learning-Equity-and-Well-Being/Special-Education-and-Inclusion/Parent-Guides-to-Special-Education-and-Inclusion/Guide-to-Individual-Education-Plans-IEPs-',
  tdsbInternationalStudentHandbook:
    'https://www.tdsb.on.ca/Portals/0/docs/September%202024%20Student%20Handbook.pdf',
  hdsbSecondarySchoolGuide:
    'https://www.hdsb.ca/academics-resources/secondary-programs-pathways-tools/guide-to-secondary-school/',
  hdsbPostSecondaryGuide:
    'https://www.hdsb.ca/academics-resources/secondary-programs-pathways-tools/guide-to-post-secondary/',
  hdsbSecondarySchoolPdf:
    'https://www.hdsb.ca/media/swykhdfz/guide-to-secondary-school.pdf',
  hdsbCareerLifePlanning:
    'https://www.hdsb.ca/academics-resources/secondary-programs-pathways-tools/guide-to-post-secondary/education-and-career-life-planning/',
  peelSchoolSystem:
    'https://www.peelschools.org/understanding-the-school-system',
  hcdsbParentGuide:
    'https://www.hcdsb.org/parents/a-parent-guide-to-education/',
  hcdsbSpecialEducationGuide2021:
    'https://www.hcdsb.org/wp-content/uploads/2021/09/SpecEdParentGuide-Sept2021.pdf',
  hcdsbSpecialEducationProgramsGuide:
    'https://www.hcdsb.org/wp-content/uploads/2021/01/A-Parents-Guide-to-Special-Education-Programs-and-Services.pdf',
  ontarioCurriculumReview:
    'https://www.dcp.edu.gov.on.ca/en/curriculum-review',
  eqaoAssessments:
    'https://www.eqao.com/the-assessments/',
  thinkAcademyEqaoGuide:
    'https://www.thinkacademy.ca/blog/blog/2026/05/28/eqao-practice-test-complete-guide-ontario/',
  yrdsbSecondaryAssessmentGuide:
    'https://www2.yrdsb.ca/sites/default/files/migrate/files/guide-secondary-assessments-english.pdf',
  peelEqao:
    'https://www.peelschools.org/eqao',
  hdsbAssessmentPractices:
    'https://www.hdsb.ca/media/0gbpkn1v/assessment-and-evaluation-practices-grades-7-12.pdf',
  tdsbEqao:
    'https://schoolweb.tdsb.on.ca/lesterbpearsones/Parents/EQAO',
  wcdsbFrenchProficiency:
    'https://www.wcdsb.ca/programs-and-services/fsl/french-proficiency-testing/',
  dsbnDelfExaminations:
    'https://www.dsbn.org/secondary/curriculum/delf-examinations',
  scdsbDelf:
    'https://www.scdsb.on.ca/secondary/program_options/french_as_a_second_language/delf',
  albertaPatHomePrep:
    'https://alternativeeducation.ecsd.net/documents/f4e2cdeb-b77b-5829-b6b2-435dd2d4cb44/%20Provincial%20Achievement%20Tests.pdf',
  albertaMath9Released:
    'https://www.alberta.ca/system/files/custom_downloaded_images/ed-06-math9-part-a-%2520released-goa-signoff.pdf',
  albertaPatOfficial:
    'https://www.alberta.ca/provincial-achievement-tests',
  cbePatInformation:
    'https://homeeducation.cbe.ab.ca/news/grade-6-and-9-provincial-achievement-tests-20250318193557',
  bcExamBankGrade9:
    'https://bc.exambank.com/grade9.html',
  bcMathGrade3Curriculum:
    'https://curriculum.gov.bc.ca/curriculum/mathematics/3/core',
} as const;

const resources = {
  tdsbSpecialEducationGuides: {
    name: {
      en: 'TDSB guides for parents and caregivers — special education',
      ar: 'أدلة TDSB لأولياء الأمور — التربية الخاصة والدمج',
    },
    description: {
      en: 'Toronto District School Board guides covering special-education supports, identification, placement, referrals and parent participation.',
      ar: 'أدلة من مجلس مدارس تورونتو حول خدمات التربية الخاصة والتحديد والتسكين والإحالة ومشاركة ولي الأمر.',
    },
    url: urls.tdsbSpecialEducationGuides,
    type: 'education-authority',
  },
  tdsbIepGuide: {
    name: {
      en: 'TDSB guide to Individual Education Plans (IEPs)',
      ar: 'دليل TDSB لخطة التعليم الفردية (IEP)',
    },
    description: {
      en: 'Explains IEPs, parent rights and how families can participate in programming, assessment and instruction decisions.',
      ar: 'يشرح خطة التعليم الفردية وحقوق ولي الأمر وكيفية المشاركة في قرارات البرنامج والتقييم والتدريس.',
    },
    url: urls.tdsbIepGuide,
    type: 'education-authority',
  },
  tdsbInternationalStudentHandbook: {
    name: {
      en: 'TDSB international student handbook — 2024–2025 archive',
      ar: 'دليل الطالب الدولي في TDSB — نسخة أرشيفية 2024–2025',
    },
    description: {
      en: 'An archived handbook about registration, school routines, guidance and studying in Toronto. Confirm current dates and rules directly with TDSB.',
      ar: 'دليل أرشيفي عن التسجيل والحياة المدرسية والإرشاد والدراسة في تورونتو. يجب تأكيد المواعيد والقواعد الحالية مع TDSB.',
    },
    url: urls.tdsbInternationalStudentHandbook,
    type: 'school',
  },
  hdsbSecondarySchoolGuide: {
    name: {
      en: 'HDSB guide to secondary school',
      ar: 'دليل HDSB للمرحلة الثانوية',
    },
    description: {
      en: 'Halton District School Board information about secondary pathways, courses, credits and planning for high school.',
      ar: 'معلومات مجلس مدارس هالتون عن مسارات الثانوية والمقررات والاعتمادات والتخطيط للمرحلة الثانوية.',
    },
    url: urls.hdsbSecondarySchoolGuide,
    type: 'education-authority',
  },
  hdsbPostSecondaryGuide: {
    name: {
      en: 'HDSB guide to postsecondary pathways',
      ar: 'دليل HDSB لمسارات ما بعد الثانوية',
    },
    description: {
      en: 'Planning information for university, college, apprenticeship, work and other postsecondary pathways.',
      ar: 'معلومات للتخطيط للجامعة والكلية والتدريب المهني والعمل ومسارات ما بعد الثانوية الأخرى.',
    },
    url: urls.hdsbPostSecondaryGuide,
    type: 'education-authority',
  },
  hdsbSecondarySchoolPdf: {
    name: {
      en: 'HDSB secondary school guide — PDF',
      ar: 'دليل HDSB للمرحلة الثانوية — PDF',
    },
    description: {
      en: 'Downloadable reference covering secondary-school programs, course selection, credits and graduation planning.',
      ar: 'مرجع قابل للتنزيل عن برامج الثانوية واختيار المقررات والاعتمادات والتخطيط للتخرج.',
    },
    url: urls.hdsbSecondarySchoolPdf,
    type: 'education-authority',
  },
  hdsbCareerLifePlanning: {
    name: {
      en: 'HDSB education and career-life planning',
      ar: 'التخطيط التعليمي والمهني لدى HDSB',
    },
    description: {
      en: 'Resources that help students connect course choices, interests, skills and future education or career goals.',
      ar: 'موارد تساعد الطالب على ربط اختيار المقررات باهتماماته ومهاراته وأهدافه التعليمية والمهنية.',
    },
    url: urls.hdsbCareerLifePlanning,
    type: 'education-authority',
  },
  peelSchoolSystem: {
    name: {
      en: 'Peel District School Board — understanding the school system',
      ar: 'مجلس مدارس بيل — فهم النظام المدرسي',
    },
    description: {
      en: 'A family reference for understanding schools, programs and common processes in the Peel public school system.',
      ar: 'مرجع للعائلات لفهم المدارس والبرامج والإجراءات الشائعة في نظام المدارس العامة في بيل.',
    },
    url: urls.peelSchoolSystem,
    type: 'education-authority',
  },
  hcdsbParentGuide: {
    name: {
      en: 'HCDSB parent guide to education',
      ar: 'دليل HCDSB لأولياء الأمور حول التعليم',
    },
    description: {
      en: 'Parent information about Ontario schools, curriculum, progress, student supports and family involvement, with translated versions where available.',
      ar: 'معلومات لولي الأمر عن مدارس أونتاريو والمنهاج والتقدم ودعم الطالب ومشاركة الأسرة، مع نسخ مترجمة عند توفرها.',
    },
    url: urls.hcdsbParentGuide,
    type: 'education-authority',
  },
  hcdsbSpecialEducationGuide2021: {
    name: {
      en: 'HCDSB special education parent guide — 2021 archive',
      ar: 'دليل HCDSB للتربية الخاصة — نسخة أرشيفية 2021',
    },
    description: {
      en: 'Archived Halton Catholic guide for families navigating special-education processes and supports. Confirm current procedures with the school board.',
      ar: 'دليل أرشيفي للعائلات حول إجراءات وخدمات التربية الخاصة في هالتون الكاثوليكية. يجب تأكيد الإجراءات الحالية مع المجلس.',
    },
    url: urls.hcdsbSpecialEducationGuide2021,
    type: 'education-authority',
  },
  hcdsbSpecialEducationProgramsGuide: {
    name: {
      en: 'HCDSB guide to special education programs and services',
      ar: 'دليل HCDSB لبرامج وخدمات التربية الخاصة',
    },
    description: {
      en: 'Explains IPRC, IEPs, identification, placement, accommodations and family participation; the document is an older reference and should be verified.',
      ar: 'يشرح IPRC وIEP والتحديد والتسكين والتسهيلات ومشاركة الأسرة؛ وهو مرجع قديم يجب التحقق من تحديثاته.',
    },
    url: urls.hcdsbSpecialEducationProgramsGuide,
    type: 'education-authority',
  },
  ontarioCurriculumReview: {
    name: {
      en: 'Ontario curriculum review and revision guide',
      ar: 'دليل مراجعة وتحديث منهج أونتاريو',
    },
    description: {
      en: 'Ontario Ministry of Education information about how curriculum is reviewed and revised.',
      ar: 'معلومات وزارة التعليم في أونتاريو حول كيفية مراجعة المناهج وتحديثها.',
    },
    url: urls.ontarioCurriculumReview,
    type: 'education-authority',
  },
  eqaoAssessments: {
    name: {
      en: 'EQAO official assessments',
      ar: 'الاختبارات الرسمية لدى EQAO',
    },
    description: {
      en: 'Official information about Ontario provincial assessments, including the grades and subjects assessed.',
      ar: 'معلومات رسمية عن اختبارات أونتاريو الإقليمية والصفوف والمواد التي تشملها.',
    },
    url: urls.eqaoAssessments,
    type: 'assessment',
  },
  thinkAcademyEqaoGuide: {
    name: {
      en: 'Independent EQAO practice-test guide — Think Academy',
      ar: 'دليل مستقل للتدرب على EQAO — Think Academy',
    },
    description: {
      en: 'A third-party 2026 overview of EQAO practice and preparation. It is not an EQAO or school-board publication.',
      ar: 'شرح مستقل لعام 2026 حول التدريب والاستعداد لاختبارات EQAO، وليس منشورًا رسميًا من EQAO أو مجلس مدارس.',
    },
    url: urls.thinkAcademyEqaoGuide,
    type: 'assessment',
  },
  yrdsbSecondaryAssessmentGuide: {
    name: {
      en: 'YRDSB guide to secondary assessments — PDF',
      ar: 'دليل YRDSB لتقييمات المرحلة الثانوية — PDF',
    },
    description: {
      en: 'A York Region District School Board reference explaining common secondary assessment terms and practices.',
      ar: 'مرجع من مجلس مدارس يورك يشرح مصطلحات وممارسات التقييم الشائعة في المرحلة الثانوية.',
    },
    url: urls.yrdsbSecondaryAssessmentGuide,
    type: 'assessment',
  },
  peelEqao: {
    name: {
      en: 'Peel District School Board — EQAO information',
      ar: 'مجلس مدارس بيل — معلومات EQAO',
    },
    description: {
      en: 'Board-level information for Peel families about EQAO participation, preparation and results.',
      ar: 'معلومات من مجلس مدارس بيل للعائلات حول المشاركة في EQAO والاستعداد والنتائج.',
    },
    url: urls.peelEqao,
    type: 'assessment',
  },
  hdsbAssessmentPractices: {
    name: {
      en: 'HDSB assessment and evaluation practices — Grades 7–12',
      ar: 'ممارسات التقييم لدى HDSB — الصفوف 7–12',
    },
    description: {
      en: 'Halton District School Board guidance on assessment, evaluation, feedback, evidence of learning and reporting for Grades 7–12.',
      ar: 'إرشادات مجلس مدارس هالتون حول التقييم والتغذية الراجعة وأدلة التعلم والتقارير للصفوف 7–12.',
    },
    url: urls.hdsbAssessmentPractices,
    type: 'assessment',
  },
  tdsbEqao: {
    name: {
      en: 'TDSB school EQAO family information',
      ar: 'معلومات EQAO للعائلات من إحدى مدارس TDSB',
    },
    description: {
      en: 'A Toronto school’s family information page linking to EQAO preparation and assessment details.',
      ar: 'صفحة معلومات للعائلات من مدرسة في تورونتو تتضمن روابط للاستعداد لاختبارات EQAO وتفاصيلها.',
    },
    url: urls.tdsbEqao,
    type: 'assessment',
  },
  wcdsbFrenchProficiency: {
    name: {
      en: 'WCDSB French proficiency testing',
      ar: 'اختبارات الكفاءة باللغة الفرنسية لدى WCDSB',
    },
    description: {
      en: 'Waterloo Catholic District School Board information about French proficiency testing for eligible students.',
      ar: 'معلومات مجلس مدارس واترلو الكاثوليكية عن اختبار الكفاءة في اللغة الفرنسية للطلاب المؤهلين.',
    },
    url: urls.wcdsbFrenchProficiency,
    type: 'assessment',
  },
  dsbnDelfExaminations: {
    name: {
      en: 'DSBN DELF examinations',
      ar: 'اختبارات DELF لدى مجلس مدارس Niagara (DSBN)',
    },
    description: {
      en: 'District School Board of Niagara information about DELF examinations and French proficiency certification for secondary students.',
      ar: 'معلومات مجلس مدارس نياجرا عن اختبارات DELF وشهادة الكفاءة باللغة الفرنسية لطلاب المرحلة الثانوية.',
    },
    url: urls.dsbnDelfExaminations,
    type: 'assessment',
  },
  scdsbDelf: {
    name: {
      en: 'SCDSB DELF and CEFR level information',
      ar: 'معلومات DELF ومستويات CEFR لدى SCDSB',
    },
    description: {
      en: 'Simcoe County District School Board guidance on DELF levels and the listening, reading, speaking and writing skills assessed.',
      ar: 'إرشادات مجلس مدارس سيمكو حول مستويات DELF ومهارات الاستماع والقراءة والتحدث والكتابة التي يتم تقييمها.',
    },
    url: urls.scdsbDelf,
    type: 'assessment',
  },
  albertaPatHomePrep: {
    name: {
      en: 'Edmonton Catholic Schools — at-home PAT preparation PDF',
      ar: 'مدارس إدمونتون الكاثوليكية — دليل منزلي للاستعداد لاختبارات PAT',
    },
    description: {
      en: 'A board-provided PDF with at-home preparation references for Provincial Achievement Tests and diploma exams.',
      ar: 'ملف من مجلس المدارس يتضمن مراجع للاستعداد المنزلي لاختبارات التحصيل الإقليمية وامتحانات الدبلوم.',
    },
    url: urls.albertaPatHomePrep,
    type: 'assessment',
  },
  albertaMath9Released: {
    name: {
      en: 'Alberta Grade 9 Mathematics PAT — released 2019 Part A',
      ar: 'اختبار رياضيات الصف التاسع في ألبرتا — نموذج Part A منشور عام 2019',
    },
    description: {
      en: 'An official released Mathematics 9 assessment with blueprint and answer information. Use it as historical practice, not as a statement of current requirements.',
      ar: 'نموذج رسمي منشور لرياضيات الصف التاسع مع مخطط ومعلومات الإجابة. يُستخدم للتدريب التاريخي وليس لتحديد المتطلبات الحالية.',
    },
    url: urls.albertaMath9Released,
    type: 'assessment',
  },
  albertaPatOfficial: {
    name: {
      en: 'Alberta Provincial Achievement Tests — official information',
      ar: 'اختبارات التحصيل الإقليمية في ألبرتا — معلومات رسمية',
    },
    description: {
      en: 'Government of Alberta information about Provincial Achievement Tests, schedules, subjects and available resources.',
      ar: 'معلومات حكومة ألبرتا عن اختبارات التحصيل الإقليمية ومواعيدها وموادها والموارد المتاحة.',
    },
    url: urls.albertaPatOfficial,
    type: 'assessment',
  },
  cbePatInformation: {
    name: {
      en: 'Calgary Board of Education — Grade 6 and 9 PAT information',
      ar: 'مجلس تعليم كالغاري — معلومات اختبارات PAT للصفين السادس والتاسع',
    },
    description: {
      en: 'Local Calgary information for families about Grade 6 and Grade 9 Provincial Achievement Tests.',
      ar: 'معلومات محلية لعائلات كالغاري عن اختبارات التحصيل الإقليمية للصفين السادس والتاسع.',
    },
    url: urls.cbePatInformation,
    type: 'assessment',
  },
  bcExamBankGrade9: {
    name: {
      en: 'Independent B.C. Grade 9 practice bank — ExamBank',
      ar: 'بنك تدريب مستقل للصف التاسع في بريتش كولومبيا — ExamBank',
    },
    description: {
      en: 'A third-party collection of Grade 9 practice questions. It is not an official B.C. Ministry curriculum or assessment source.',
      ar: 'مجموعة مستقلة من أسئلة التدريب للصف التاسع، وليست مصدرًا رسميًا للمنهاج أو التقييم من وزارة بريتش كولومبيا.',
    },
    url: urls.bcExamBankGrade9,
    type: 'assessment',
  },
  bcMathGrade3Curriculum: {
    name: {
      en: 'B.C. Mathematics 3 curriculum — official',
      ar: 'منهج الرياضيات للصف الثالث في بريتش كولومبيا — رسمي',
    },
    description: {
      en: 'Official B.C. curriculum page listing Grade 3 mathematics curricular competencies and content.',
      ar: 'صفحة رسمية تعرض كفاءات ومحتوى منهج الرياضيات للصف الثالث في بريتش كولومبيا.',
    },
    url: urls.bcMathGrade3Curriculum,
    type: 'education-authority',
  },
} satisfies Record<string, LocationEducationResourceDefinition>;

type ResourceKey = keyof typeof resources;

const resourcesByLocationId: Record<string, ResourceKey[]> = {
  ontario: [
    'ontarioCurriculumReview',
    'eqaoAssessments',
    'hcdsbParentGuide',
  ],
  'ontario-curriculum': [
    'ontarioCurriculumReview',
    'eqaoAssessments',
    'yrdsbSecondaryAssessmentGuide',
    'hdsbAssessmentPractices',
    'wcdsbFrenchProficiency',
    'dsbnDelfExaminations',
    'scdsbDelf',
    'thinkAcademyEqaoGuide',
  ],
  'ontario-toronto': [
    'tdsbSpecialEducationGuides',
    'tdsbIepGuide',
    'tdsbInternationalStudentHandbook',
    'tdsbEqao',
    'eqaoAssessments',
  ],
  'ontario-mississauga': [
    'peelSchoolSystem',
    'peelEqao',
    'eqaoAssessments',
  ],
  'ontario-brampton': [
    'peelSchoolSystem',
    'peelEqao',
    'eqaoAssessments',
  ],
  'ontario-milton': [
    'hdsbSecondarySchoolGuide',
    'hdsbPostSecondaryGuide',
    'hdsbSecondarySchoolPdf',
    'hdsbCareerLifePlanning',
    'hdsbAssessmentPractices',
    'hcdsbParentGuide',
    'hcdsbSpecialEducationGuide2021',
    'hcdsbSpecialEducationProgramsGuide',
  ],
  'ontario-oakville': [
    'hdsbSecondarySchoolGuide',
    'hdsbPostSecondaryGuide',
    'hdsbSecondarySchoolPdf',
    'hdsbCareerLifePlanning',
    'hdsbAssessmentPractices',
    'hcdsbParentGuide',
    'hcdsbSpecialEducationGuide2021',
    'hcdsbSpecialEducationProgramsGuide',
  ],
  'ontario-kitchener': [
    'wcdsbFrenchProficiency',
    'eqaoAssessments',
  ],
  alberta: ['albertaPatOfficial'],
  'alberta-curriculum': [
    'albertaPatOfficial',
    'albertaMath9Released',
  ],
  'alberta-calgary': [
    'cbePatInformation',
    'albertaPatOfficial',
  ],
  'alberta-edmonton': [
    'albertaPatHomePrep',
    'albertaPatOfficial',
  ],
  'british-columbia': [
    'bcMathGrade3Curriculum',
  ],
  'british-columbia-curriculum': [
    'bcMathGrade3Curriculum',
    'bcExamBankGrade9',
  ],
};

export function getLocationEducationResources(
  locationId: string,
  locale: SiteLocale
): Array<{
  name: string;
  description: string;
  url: string;
  type: LocationEducationResource['type'];
}> {
  const keys =
    resourcesByLocationId[locationId] ?? [];

  return keys.map((key) => {
    const resource = resources[key];

    return {
      name: resource.name[locale],
      description:
        resource.description[locale],
      url: resource.url,
      type: resource.type,
    };
  });
}

import type {
  ScienceStrandDefinition,
} from '@/types/science-overview';

export const generalScienceStrands:
  ScienceStrandDefinition[] = [
    {
      subjectKey: 'general-science',
      slug: 'earth-space-science',
      title: {
        en: "Earth and Space Science",
        ar: "علوم الأرض والفضاء",
      },
      description: {
        en: "Earth systems, weathering and erosion, the solar system, astronomy, and the measurement of astronomical distances.",
        ar: "أنظمة الأرض والتجوية والتعرية والنظام الشمسي وعلم الفلك وقياس المسافات الفلكية.",
      },
      iconKey: 'earth',
      status: 'approved',
    },
    {
      subjectKey: 'general-science',
      slug: 'life-science',
      title: {
        en: "Life Science",
        ar: "علوم الحياة",
      },
      description: {
        en: "Cells, biochemistry, genetics, ecology, biodiversity, evolution, human body systems, health, and disease.",
        ar: "الخلايا والكيمياء الحيوية والوراثة والبيئة والتنوع الحيوي والتطور وأجهزة جسم الإنسان والصحة والمرض.",
      },
      iconKey: 'leaf',
      status: 'approved',
    },
    {
      subjectKey: 'general-science',
      slug: 'scientific-inquiry-laboratory-skills',
      title: {
        en: "Scientific Inquiry and Laboratory Skills",
        ar: "الاستقصاء العلمي ومهارات المختبر",
      },
      description: {
        en: "Scientific reasoning, experimental design, measurement, data, laboratory safety, microscopy, and integrated review.",
        ar: "الاستدلال العلمي وتصميم التجارب والقياس والبيانات والسلامة المختبرية والمجهر والمراجعة المتكاملة.",
      },
      iconKey: 'lab',
      status: 'approved',
    },
    {
      subjectKey: 'general-science',
      slug: 'structures-engineering',
      title: {
        en: "Structures and Engineering",
        ar: "الهياكل والهندسة",
      },
      description: {
        en: "The types, classification, design, function, and applications of structures and buildings.",
        ar: "أنواع الهياكل وتصنيفها وتصميمها ووظائفها وتطبيقاتها في المباني والهندسة.",
      },
      iconKey: 'structure',
      status: 'approved',
    },
  ];

export const approvedGeneralScienceStrands =
  generalScienceStrands.filter(
    (strand) =>
      strand.status === 'approved'
  );

import type {
  EnglishStrandDefinition,
} from '@/types/english-overview';

export const englishStrands:
  EnglishStrandDefinition[] = [
    {
      slug: 'foundational-reading',
      title: {
        en: 'Foundational Reading',
        ar: 'مهارات القراءة التأسيسية',
      },
      description: {
        en:
          'Decoding, phonics, phonological awareness, spelling, syllabication, and automatic word recognition.',
        ar:
          'فك الرموز والصوتيات والوعي الصوتي والتهجئة وتقسيم المقاطع والتعرف التلقائي على الكلمات.',
      },
      iconKey: 'book-open-check',
      status: 'approved',
      gradeRange: {
        min: 1,
        max: 12,
      },
    },
    {
      slug: 'grammar-language-conventions',
      title: {
        en: 'Grammar and Language Conventions',
        ar: 'القواعد والاتفاقيات اللغوية',
      },
      description: {
        en:
          'Sentence structure, grammar, punctuation, capitalization, usage, and language conventions.',
        ar:
          'بناء الجمل والقواعد وعلامات الترقيم والحروف الكبيرة والاستخدام والاتفاقيات اللغوية.',
      },
      iconKey: 'braces',
      status: 'pending-data',
      gradeRange: { min: 1, max: 12 },
    },
    {
      slug: 'literature-literary-analysis',
      title: {
        en: 'Literature and Literary Analysis',
        ar: 'الأدب والتحليل الأدبي',
      },
      description: {
        en:
          'Stories, poetry, drama, literary elements, interpretation, and evidence-based analysis.',
        ar:
          'القصص والشعر والمسرح والعناصر الأدبية والتفسير والتحليل القائم على الأدلة.',
      },
      iconKey: 'library',
      status: 'pending-data',
      gradeRange: { min: 1, max: 12 },
    },
    {
      slug: 'reading-comprehension',
      title: {
        en: 'Reading Comprehension',
        ar: 'الفهم القرائي',
      },
      description: {
        en:
          'Understanding, interpreting, summarizing, inferring, and evaluating informational and literary texts.',
        ar:
          'فهم النصوص المعلوماتية والأدبية وتفسيرها وتلخيصها والاستنتاج منها وتقييمها.',
      },
      iconKey: 'book-search',
      status: 'pending-data',
      gradeRange: { min: 1, max: 12 },
    },
    {
      slug: 'reading-fluency',
      title: {
        en: 'Reading Fluency',
        ar: 'الطلاقة القرائية',
      },
      description: {
        en:
          'Accuracy, pacing, phrasing, expression, automaticity, and confident oral reading.',
        ar:
          'الدقة والسرعة المناسبة وتقسيم العبارات والتعبير والتلقائية والقراءة الجهرية الواثقة.',
      },
      iconKey: 'audio-lines',
      status: 'pending-data',
      gradeRange: { min: 1, max: 12 },
    },
    {
      slug: 'speaking-listening',
      title: {
        en: 'Speaking and Listening',
        ar: 'التحدث والاستماع',
      },
      description: {
        en:
          'Conversation, presentation, discussion, active listening, and clear spoken communication.',
        ar:
          'المحادثة والعروض والمناقشة والاستماع النشط والتواصل الشفهي الواضح.',
      },
      iconKey: 'messages-square',
      status: 'pending-data',
      gradeRange: { min: 1, max: 12 },
    },
    {
      slug: 'vocabulary-word-study',
      title: {
        en: 'Vocabulary and Word Study',
        ar: 'المفردات ودراسة الكلمات',
      },
      description: {
        en:
          'Word meaning, morphology, context clues, roots, affixes, spelling patterns, and precise usage.',
        ar:
          'معاني الكلمات وبنيتها وقرائن السياق والجذور واللواحق وأنماط التهجئة والاستخدام الدقيق.',
      },
      iconKey: 'spell-check',
      status: 'pending-data',
      gradeRange: { min: 1, max: 12 },
    },
    {
      slug: 'academic-skills-assignments',
      title: {
        en: 'Academic Skills and Assignments',
        ar: 'المهارات والواجبات الأكاديمية',
      },
      description: {
        en:
          'Research, note-taking, planning, assignment organization, study strategies, and presentations.',
        ar:
          'البحث وتدوين الملاحظات والتخطيط وتنظيم الواجبات واستراتيجيات الدراسة والعروض.',
      },
      iconKey: 'clipboard-list',
      status: 'pending-data',
      gradeRange: { min: 1, max: 12 },
    },
    {
      slug: 'writing',
      title: {
        en: 'Writing',
        ar: 'الكتابة',
      },
      description: {
        en:
          'Writing processes, text types, organization, development, revision, editing, and publishing.',
        ar:
          'عمليات الكتابة وأنواع النصوص والتنظيم والتطوير والمراجعة والتحرير والنشر.',
      },
      iconKey: 'pen-line',
      status: 'pending-data',
      gradeRange: { min: 1, max: 12 },
    },
    {
      slug: 'assessment-test-preparation',
      title: {
        en: 'Assessment and Test Preparation',
        ar: 'التقييم والاستعداد للاختبارات',
      },
      description: {
        en:
          'Assessment practice, test strategies, response planning, review, and performance preparation.',
        ar:
          'التدرب على التقييم واستراتيجيات الاختبار وتخطيط الإجابات والمراجعة والاستعداد للأداء.',
      },
      iconKey: 'file-check',
      status: 'pending-data',
      gradeRange: { min: 1, max: 12 },
    },
    {
      slug: 'cross-curricular-academic-support',
      title: {
        en: 'Cross-Curricular Academic Support',
        ar: 'الدعم الأكاديمي عبر المواد',
      },
      description: {
        en:
          'English skills applied to science, social studies, mathematics, research sources, and subject assignments.',
        ar:
          'تطبيق مهارات الإنجليزية في العلوم والدراسات الاجتماعية والرياضيات ومصادر البحث وواجبات المواد.',
      },
      iconKey: 'panels-top-left',
      status: 'pending-data',
      gradeRange: { min: 1, max: 12 },
    },
  ];

export const approvedEnglishStrands =
  englishStrands.filter(
    (strand) =>
      strand.status === 'approved'
  );

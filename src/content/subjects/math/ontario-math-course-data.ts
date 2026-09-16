import type { SiteLocale } from '@/config/site';

export interface OntarioMathFaq {
  question: string;
  answer: string;
}

export interface OntarioMathChallenge {
  title: string;
  description: string;
}

export interface OntarioCourseData {
  courseCode: string;
  badge: string;
  heading: string;
  subheading: string;
  overview: string[];
  prerequisiteNote?: string;
  challengesHeading: string;
  challenges: OntarioMathChallenge[];
  tutoringSupportHeading: string;
  tutoringPoints: string[];
  progressionHeading: string;
  progressionText: string;
  relatedLinkText: string;
  relatedLinkHref: string;
  examLinkText: string;
  examLinkHref: string;
  faqsHeading: string;
  faqs: OntarioMathFaq[];
  ctaHeading: string;
  ctaText: string;
}

export const ontarioMathCourses: Record<
  string,
  Record<SiteLocale, OntarioCourseData>
> = {
  functions: {
    en: {
      courseCode: 'MCR3U',
      badge: 'Ontario Curriculum · Grade 11 University Preparation',
      heading: 'Ontario Grade 11 Functions (MCR3U) Tutoring',
      subheading:
        'Targeted one-to-one tutoring designed to build algebraic confidence, master abstract function concepts, and prepare for senior mathematics.',
      overview: [
        'Grade 11 Functions (MCR3U) is an essential university-preparation course in the Ontario secondary mathematics curriculum. It introduces formal function notation, delves into quadratic transformations, explores exponential models, and establishes foundational trigonometry concepts.',
        'This course is designed for students planning university pathways in STEM, business, finance, computer science, and health sciences. Because MCR3U introduces a higher degree of abstract mathematical reasoning, students often encounter a significant jump in expectations from Grade 10 Principles of Mathematics.',
      ],
      challengesHeading: 'Common Areas Where Students Need MCR3U Support',
      challenges: [
        {
          title: 'Function Notation & Transformations',
          description:
            'Navigating f(x) notation and mastering multi-step transformations (shifts, reflections, stretches, and compressions) applied to base function families.',
        },
        {
          title: 'Quadratic Relations & Factoring',
          description:
            'Extending quadratic problem solving through completing the square, vertex form analysis, radical simplification, and the discriminant.',
        },
        {
          title: 'Exponential Functions',
          description:
            'Differentiating exponential growth and decay from linear and quadratic patterns, solving exponential equations, and manipulating rational exponents.',
        },
        {
          title: 'Trigonometric Ratios & Laws',
          description:
            'Transitioning from standard right-triangle trigonometry to unit circle angles, periodic modeling, and applying sine and cosine laws in ambiguous cases.',
        },
      ],
      tutoringSupportHeading: 'How Our One-to-One Math Mentors Help You Succeed',
      tutoringPoints: [
        'Diagnostic assessment to identify and close algebra and arithmetic gaps from earlier grades.',
        'Structured step-by-step problem breakdowns that replace rote memorization with deep conceptual clarity.',
        'Direct homework help, guided quiz preparation, and targeted review before unit assessments.',
        'Confidence-building study techniques to overcome math anxiety and develop independent problem-solving skills.',
      ],
      progressionHeading: 'Connecting MCR3U to Senior Mathematics',
      progressionText:
        'Mastering Grade 11 Functions is the key stepping stone to success in Grade 12 Advanced Functions (MHF4U) and Calculus. When students build solid fluency in factoring, graphing, and function transformations now, they enter their graduating year with confidence and academic momentum.',
      relatedLinkText: 'Grade 12 Advanced Functions & Pre-Calculus',
      relatedLinkHref: '/en/subjects/math/advanced-precalculus',
      examLinkText: 'school exam preparation tutoring',
      examLinkHref: '/en/services/exam-preparation',
      faqsHeading: 'Frequently Asked Questions About MCR3U Tutoring',
      faqs: [
        {
          question: 'What is MCR3U in the Ontario curriculum?',
          answer:
            'MCR3U is Ontario’s Grade 11 Functions university-preparation course. It extends concepts from Grade 10 Principles of Mathematics, focusing on function notation, quadratic functions, rational and radical expressions, exponential equations, and trigonometry.',
        },
        {
          question: 'What topics can a tutor help with in Grade 11 Functions?',
          answer:
            'A tutor provides one-to-one guidance on simplifying rational expressions, graphing transformations, solving quadratic systems, mastering exponential laws, verifying trigonometric ratios, and tackling multi-step application word problems.',
        },
        {
          question: 'Can tutoring support daily homework, quizzes, and school exams?',
          answer:
            'Yes. Our tutoring sessions are tailored to your school pacing, providing targeted support for daily homework assignments, unit quizzes, midterms, and cumulative school exam preparation.',
        },
      ],
      ctaHeading: 'Ready to strengthen your Grade 11 Functions skills?',
      ctaText: 'Find an MCR3U Math Tutor',
    },
    ar: {
      courseCode: 'MCR3U',
      badge: 'منهج أونتاريو · الصف الحادي عشر للتحضير الجامعي',
      heading: 'دروس خصوصية في مادة الدوال للصف الحادي عشر في أونتاريو (MCR3U)',
      subheading:
        'تدريس فردي مخصص لبناء الثقة الجبرية، واستيعاب مفاهيم الدوال، والاستعداد للرياضيات المتقدمة في المرحلة الثانوية.',
      overview: [
        'يُعد مقرر دوال الصف الحادي عشر (MCR3U) أحد المقررات المحورية في منهج أونتاريو للتحضير للجامعة؛ حيث يُقدم رمزية الدوال الرسمية، ويتعمق في التحويلات الهندسية للدوال التربيعية، ويدرس الدوال الأسية، ويضع الأسس لحساب المثلثات الدوري.',
        'يستهدف هذا المقرر الطلاب المتجهين نحو التخصصات الجامعية في العلوم والتكنولوجيا والهندسة وإدارة الأعمال. ونظرًا لأنه يمثل انتقالًا نوعيًا من التفكير الحسابي المباشر إلى التجريد الرياضي، فإن الطلاب غالبًا ما يواجهون تحديات إضافية مقارنة بالصف العاشر.',
      ],
      challengesHeading: 'أبرز الصعوبات التي يواجهها الطلاب في مقرر MCR3U',
      challenges: [
        {
          title: 'رمزية الدوال والتحويلات الهندسية',
          description:
            'التعامل مع الرمز f(x)، وفهم التحويلات المركبة من إزاحات وانعكاسات وتمدد وتضييق على مختلف عائلات الدوال.',
        },
        {
          title: 'العلاقات التربيعية وإكمال المربع',
          description:
            'الانتقال من التحليل البسيط إلى صيغة الرأس، وتبسيط الجذور، واستخدام المميز لتحديد عدد ونوع حلول المعادلات التربيعية.',
        },
        {
          title: 'الدوال الأسية والأسس الكسرية',
          description:
            'التمييز بين النمو والاضمحلال الأسي والأنماط الخطية، وحل المعادلات الأسية، وتطبيق قوانين الأسس النسبية.',
        },
        {
          title: 'النسب المثلثية والنمذجة الدورية',
          description:
            'الانتقال من مثلثات الزوايا القائمة إلى دائرة الوحدة، وتطبيق قوانين الجيب وجيب التمام في الحالات المتعددة.',
        },
      ],
      tutoringSupportHeading: 'كيف يساعدك المعلم الخصوصي في النجاح بمقرر MCR3U؟',
      tutoringPoints: [
        'تشخيص دقيق لتحديد الفجوات التأسيسية في الجبر من السنوات السابقة وسدها بشكل منهجي.',
        'تفكيك المسائل المعقدة إلى خطوات واضحة تركز على الفهم والاستيعاب بدلاً من الحفظ السطحي.',
        'متابعة مستمرة للواجبات اليومية، والتحضير للاختبارات القصيرة، والمراجعة الشاملة لنهاية الوحدات.',
        'تطوير مهارات التفكير المنطقي الرياضي وتخفيف قلق الاختبارات لتعزيز استقلالية الطالب.',
      ],
      progressionHeading: 'الارتباط بمقررات الرياضيات اللاحقة',
      progressionText:
        'إن إتقان مفاهيم مقرر MCR3U هو الجسر الأساسي للتفوق في مقرر الدوال المتقدمة للصف الثاني عشر (MHF4U) ومقررات التفاضل والتكامل. عندما يكتسب الطالب مهارات قوية في التحليل والرسم البياني، فإنه يدخل عامه النهائي باستعداد وثقة.',
      relatedLinkText: 'الدوال المتقدمة والرياضيات ما قبل التفاضل والتكامل',
      relatedLinkHref: '/ar/subjects/math/advanced-precalculus',
      examLinkText: 'دروس الاستعداد للاختبارات المدرسية',
      examLinkHref: '/en/services/exam-preparation',
      faqsHeading: 'الأسئلة الشائعة حول دروس مقرر MCR3U',
      faqs: [
        {
          question: 'ما هو مقرر MCR3U في منهج أونتاريو؟',
          answer:
            'هو مقرر الدوال للصف الحادي عشر المخصص للمسار الجامعي في أونتاريو، ويركز على دراسة الدوال ورمزيتها، والعبارات الجذرية والنسبية، والدوال الأسية، وأسس حساب المثلثات.',
        },
        {
          question: 'ما هي الموضوعات التي يمكن للمعلم مساعدتي فيها؟',
          answer:
            'يقدم المعلم دعمًا مخصصًا في تبسيط المقادير النسبية، ورسم تحويلات الدوال، وحل المعادلات والأنظمة التربيعية، وقوانين الأسس، وتطبيقات النمذجة الرياضية.',
        },
        {
          question: 'هل يشمل التدريس دعم الواجبات والاختبارات المدرسية؟',
          answer:
            'نعم، تركز الجلسات الفردية على مواكبة خطة مدرستك وتدريبك على حل الواجبات اليومية والاختبارات الدورية والاستعداد للاختبار النهائي.',
        },
      ],
      ctaHeading: 'هل ترغب في تعزيز مستواك في مقرر دوال الصف الحادي عشر؟',
      ctaText: 'احجز معلمًا خصوصيًا لمقرر MCR3U',
    },
  },
  'advanced-precalculus': {
    en: {
      courseCode: 'MHF4U',
      badge: 'Ontario Curriculum · Grade 12 University Preparation',
      heading: 'Ontario Grade 12 Advanced Functions (MHF4U) Tutoring',
      subheading:
        'Rigorous one-to-one mentoring to master higher-degree polynomials, rational functions, logarithms, and trigonometry.',
      overview: [
        'Ontario Grade 12 Advanced Functions (MHF4U) extends students’ mathematical maturity by exploring the algebraic and geometric behavior of complex functions. The curriculum deepens understanding of polynomial, rational, logarithmic, and trigonometric functions, while introducing instantaneous and average rates of change.',
        'This course serves as the gateway to post-secondary quantitative fields, including engineering, physics, computer science, business, economics, and life sciences.',
      ],
      prerequisiteNote:
        'MHF4U is commonly required or recommended for a range of university programs, depending on the institution and program.',
      challengesHeading: 'Key Areas Where Students Benefit from MHF4U Tutoring',
      challenges: [
        {
          title: 'Polynomial & Rational Functions',
          description:
            'Applying the factor and remainder theorems, performing polynomial division, solving higher-order inequalities, and analyzing vertical, horizontal, and oblique asymptotes.',
        },
        {
          title: 'Exponential & Logarithmic Functions',
          description:
            'Mastering the laws of logarithms, switching fluently between exponential and logarithmic forms, and solving real-world growth and decay models.',
        },
        {
          title: 'Trigonometric Functions in Radians',
          description:
            'Transitioning to radian measure, sketching reciprocal and transformed trigonometric functions, and rigorously proving compound and double-angle identities.',
        },
        {
          title: 'Rates of Change & Analysis',
          description:
            'Calculating average and instantaneous rates of change using secant and tangent slopes, establishing the conceptual bridge directly into calculus.',
        },
      ],
      tutoringSupportHeading: 'How Our Expert Mentors Guide You Through MHF4U',
      tutoringPoints: [
        'Targeted review of prerequisite Grade 11 algebra to ensure a rock-solid foundation.',
        'Mastery of multi-step algebraic manipulation, inequality sign analysis, and graph behavior sketching.',
        'Assistance with complex assignments, unit tests, and comprehensive final exam review.',
        'Development of analytical problem-solving frameworks that prepare you for university-level coursework.',
      ],
      progressionHeading: 'Connecting MHF4U with Previous and Future Studies',
      progressionText:
        'Success in Advanced Functions is closely tied to earlier foundations developed in Grade 11 Functions (MCR3U). In turn, mastering MHF4U provides the essential tools needed for Calculus and university-level quantitative reasoning.',
      relatedLinkText: 'Grade 11 Functions (MCR3U) foundations',
      relatedLinkHref: '/en/subjects/math/functions',
      examLinkText: 'targeted school exam preparation',
      examLinkHref: '/en/services/exam-preparation',
      faqsHeading: 'Frequently Asked Questions About MHF4U Tutoring',
      faqs: [
        {
          question: 'What is the difference between Grade 11 Functions (MCR3U) and Grade 12 Advanced Functions (MHF4U)?',
          answer:
            'While MCR3U introduces fundamental concepts like quadratics, basic exponentials, and right-triangle trigonometry, MHF4U expands into higher-degree polynomials, rational functions with asymptotes, logarithms, radian trigonometry, and rates of change.',
        },
        {
          question: 'Is MHF4U required for university admission in Ontario?',
          answer:
            'MHF4U is commonly required or recommended for a range of university programs, depending on the institution and program, particularly in engineering, business, computer science, mathematics, and science pathways.',
        },
        {
          question: 'How does one-to-one tutoring help with Advanced Functions assignments and exam review?',
          answer:
            'One-to-one tutoring provides personalized walkthroughs of challenging proofs and applications, helps students avoid algebraic sign errors, and prepares them systematically for midterms and final exams.',
        },
      ],
      ctaHeading: 'Master Advanced Functions and achieve your academic goals',
      ctaText: 'Find an Advanced Functions Tutor',
    },
    ar: {
      courseCode: 'MHF4U',
      badge: 'منهج أونتاريو · الصف الثاني عشر للتحضير الجامعي',
      heading: 'دروس خصوصية في مادة الدوال المتقدمة للصف الثاني عشر في أونتاريو (MHF4U)',
      subheading:
        'تدريس خصوصي مركز لإتقان كثيرات الحدود من الدرجات العليا، والدوال النسبية، واللوغاريتمات، وحساب المثلثات المتقدم.',
      overview: [
        'يُعمّق مقرر الدوال المتقدمة للصف الثاني عشر (MHF4U) النضج الرياضي للطالب من خلال دراسة السلوك الجبري والبياني للدوال المعقدة، مثل كثيرات الحدود، والدوال النسبية، واللوغاريتمية، والمثلثية، إضافة إلى دراسة معدلات التغير اللحظية والمتوسطة.',
        'يمثل هذا المقرر المدخل الرئيسي للمسارات الأكاديمية الجامعية ذات الطابع الكمي والتحليلي كالهندسة والعلوم وإدارة الأعمال والاقتصاد.',
      ],
      prerequisiteNote:
        'يُعد مقرر MHF4U متطلبًا شائعًا أو موصى به للعديد من البرامج الجامعية، وتختلف المتطلبات المحددة باختلاف الجامعة والبرنامج الدراسي.',
      challengesHeading: 'أهم المجالات التي يحتاج فيها الطلاب لدعم في مقرر MHF4U',
      challenges: [
        {
          title: 'كثيرات الحدود والدوال النسبية',
          description:
            'تطبيق نظريتي الباقي والعوامل، والقسمة التركيبية والمطولة، وحل المتباينات، وتحليل خطوط التقارب الرأسية والأفقية والمائلة.',
        },
        {
          title: 'الدوال الأسية واللوغاريتمية',
          description:
            'إتقان قوانين اللوغاريتمات، والتحويل بين الصيغتين الأسية واللوغاريتمية، وحل المعادلات في المسائل التطبيقية الواقعية.',
        },
        {
          title: 'حساب المثلثات بالراديان والمتطابقات',
          description:
            'التحول إلى القياس الدائري (الراديان)، ورسم الدوال المثلثية ومقلوباتها، وإثبات متطابقات الزوايا المركبة ومضاعفات الزوايا بدقة.',
        },
        {
          title: 'معدلات التغير والتأسيس للتفاضل',
          description:
            'حساب معدلات التغير المتوسطة واللحظية عبر ميل القاطع والمماس، وتوفير الجسر المباشر للانتقال إلى حساب التفاضل.',
        },
      ],
      tutoringSupportHeading: 'كيف يساعدك مدرسونا المتميزون في اجتياز MHF4U؟',
      tutoringPoints: [
        'مراجعة مركزة للمهارات الجبرية الأساسية من الصف الحادي عشر لضمان متانة القاعدة الرياضية.',
        'تدريب مكثف على معالجة المسائل المعقدة متعدة الخطوات، وتحليل الإشارات، ورسم المنحنيات البيانية.',
        'مساعدة فعالة في حل الواجبات، والتحضير لاختبارات الوحدات، والمراجعة الشاملة للاختبار النهائي.',
        'بناء أساليب تفكير تحليلي تؤهل الطالب لمرحلة التعليم الجامعي بثقة.',
      ],
      progressionHeading: 'الربط بين MHF4U والدراسات السابقة واللاحقة',
      progressionText:
        'يرتبط النجاح في الدوال المتقدمة ارتباطًا وثيقًا بالأسس التي تم بناؤها في مقرر دوال الصف الحادي عشر (MCR3U). وبدوره، يُعد إتقان MHF4U متطلبًا رئيسيًا للتفوق في حساب التفاضل والتكامل في السنة النهائية والجامعة.',
      relatedLinkText: 'أسس دوال الصف الحادي عشر (MCR3U)',
      relatedLinkHref: '/ar/subjects/math/functions',
      examLinkText: 'دروس الاستعداد للاختبارات المدرسية',
      examLinkHref: '/en/services/exam-preparation',
      faqsHeading: 'الأسئلة الشائعة حول دروس مقرر MHF4U',
      faqs: [
        {
          question: 'ما الفرق بين دوال الصف الحادي عشر (MCR3U) والدوال المتقدمة (MHF4U)؟',
          answer:
            'يضع MCR3U الأسس العامة للدوال التربيعية والأسية وحساب المثلثات، بينما يتوسع MHF4U في دراسة كثيرات الحدود العليا، والدوال النسبية وخطوط التقارب، واللوغاريتمات، والقياس الدائري، ومعدلات التغير.',
        },
        {
          question: 'هل يُعد مقرر MHF4U إلزاميًا للقبول الجامعي في أونتاريو؟',
          answer:
            'يُعد مقرر MHF4U متطلبًا شائعًا أو موصى به للعديد من البرامج الجامعية، وتختلف المتطلبات باختلاف الجامعة والبرنامج، لا سيما في الهندسة وإدارة الأعمال والعلوم وعلوم الحاسوب.',
        },
        {
          question: 'كيف يساعد التدريس الخصوصي في تحسين الدرجات في الاختبارات والواجبات؟',
          answer:
            'يقدم التدريس الفردي شروحات تفصيلية للمسائل المعقدة، ويساعد الطالب على تجنب الأخطاء الحسابية المتكررة، ويوفر تدريبًا منهجيًا لاختبارات منتصف الفصل والاختبارات النهائية.',
        },
      ],
      ctaHeading: 'أتقن الدوال المتقدمة وحقق طموحك الدراسي',
      ctaText: 'احجز معلمًا خصوصيًا لمقرر MHF4U',
    },
  },
  'statistics-probability': {
    en: {
      courseCode: 'MDM4U',
      badge: 'Ontario Curriculum · Grade 12 University Preparation',
      heading: 'Ontario Grade 12 Mathematics of Data Management (MDM4U) Tutoring',
      subheading:
        'Comprehensive one-to-one mentoring in combinatorics, probability theory, statistical analysis, and culminating data projects.',
      overview: [
        'Ontario Grade 12 Mathematics of Data Management (MDM4U) applies mathematics to the collection, organization, and analysis of quantitative information. The course bridges theoretical probability with practical statistics, emphasizing counting techniques, distribution models, and critical evaluation of real-world datasets.',
        'MDM4U is highly valuable for students pursuing post-secondary studies in business, social sciences, economics, health disciplines, psychology, and data science.',
      ],
      challengesHeading: 'Core Topics Where MDM4U Students Seek Tutoring Support',
      challenges: [
        {
          title: 'Counting Principles & Combinatorics',
          description:
            'Discerning when order matters (permutations vs. combinations), working with Pascal’s triangle, Venn diagrams, and applying the binomial theorem to complex counting scenarios.',
        },
        {
          title: 'Probability & Discrete Distributions',
          description:
            'Calculating conditional probability, independent/dependent events, and modeling discrete random variables using uniform, binomial, and hypergeometric distributions.',
        },
        {
          title: 'Statistical Measures & Distributions',
          description:
            'Understanding standard deviation, z-scores, normal distributions, and interpreting two-variable scatter plots, regression lines, and correlation coefficients (r).',
        },
        {
          title: 'Culminating Data Investigation Projects',
          description:
            'Formulating research hypotheses, gathering unbiased survey data, utilizing spreadsheet tools for statistical calculation, and writing thorough analytical reports.',
        },
      ],
      tutoringSupportHeading: 'How Our Mentors Support Your Data Management Success',
      tutoringPoints: [
        'Clear explanations that demystify counting rules and probability formulas through practical examples.',
        'Guidance on interpreting correlation vs. causation, sampling bias, and misleading statistical presentations.',
        'Assistance with structuring, analyzing, and formatting your culminating data management project.',
        'Targeted unit test preparation and review sessions tailored to your school curriculum schedule.',
      ],
      progressionHeading: 'Connecting Data Literacy to Lifelong Skills',
      progressionText:
        'Data Management teaches analytical decision-making skills that extend far beyond high school. Students learn to critically evaluate headlines, understand research papers, and handle quantitative data with confidence.',
      relatedLinkText: 'explore all mathematics curriculum pathways',
      relatedLinkHref: '/en/subjects/math',
      examLinkText: 'school exam preparation tutoring',
      examLinkHref: '/en/services/exam-preparation',
      faqsHeading: 'Frequently Asked Questions About MDM4U Tutoring',
      faqs: [
        {
          question: 'What is MDM4U Mathematics of Data Management?',
          answer:
            'MDM4U is an Ontario Grade 12 university preparation course focusing on combinatorics, probability theory, discrete and continuous distributions, statistical analysis, and a culminating data investigation project.',
        },
        {
          question: 'Who typically takes Grade 12 Data Management in Ontario?',
          answer:
            'MDM4U is taken by students planning university pathways in business, finance, social sciences, psychology, nursing, kinesiology, and other fields requiring strong data literacy and statistical analysis skills.',
        },
        {
          question: 'How does a tutor help with MDM4U coursework and the culminating project?',
          answer:
            'A tutor helps students untangle permutation vs. combination problems, clarify distribution formulas, verify data project methodology and regression calculations, and prepare for unit assessments and exams.',
        },
      ],
      ctaHeading: 'Gain confidence in statistics, probability, and data analysis',
      ctaText: 'Find a Data Management Tutor',
    },
    ar: {
      courseCode: 'MDM4U',
      badge: 'منهج أونتاريو · الصف الثاني عشر للتحضير الجامعي',
      heading: 'دروس خصوصية في رياضيات إدارة البيانات للصف الثاني عشر في أونتاريو (MDM4U)',
      subheading:
        'إشراف فردي شامل في مبادئ العد والاحتمالات، والتحليل الإحصائي، ومشروع البحث وتحليل البيانات.',
      overview: [
        'يُعنى مقرر رياضيات إدارة البيانات للصف الثاني عشر في أونتاريو (MDM4U) بتطبيق الرياضيات في جمع البيانات وتنظيمها وتحليلها واستخلاص النتائج منها. ويربط المقرر بين نظرية الاحتمالات الرياضية والتطبيقات الإحصائية العملية.',
        'يُعد هذا المقرر ذا قيمة استثنائية للطلاب المتجهين نحو التخصصات الجامعية في إدارة الأعمال والعلوم الاجتماعية وعلم النفس والاقتصاد والعلوم الصحية والتمريض.',
      ],
      challengesHeading: 'الموضوعات الأساسية التي يحتاج فيها طلاب MDM4U إلى الدعم',
      challenges: [
        {
          title: 'مبادئ العد والتباديل والتوافيق',
          description:
            'التمييز بين الحالات التي يُشترط فيها الترتيب وتلك التي لا يُشترط فيها، وتطبيقات مثلث باسكال، ونظرية ذات الحدين، ومخططات فن.',
        },
        {
          title: 'الاحتمالات والتوزيعات المنفصلة',
          description:
            'حساب الاحتمال المشروط، والأحداث المستقلة والتابعة، ونمذجة المتغيرات العشوائية المنفصلة عبر التوزيع المنتظم وذات الحدين والهندسي الفوقي.',
        },
        {
          title: 'الإحصاء والتوزيع الطبيعي',
          description:
            'استيعاب الانحراف المعياري، والدرجات المعيارية (z-scores)، والتوزيع الطبيعي، وتحليل خطوط الانحدار ومعامل الارتباط (r).',
        },
        {
          title: 'مشروع البحث وتحليل البيانات النهائي',
          description:
            'صياغة الفرضيات البحثية، وتصميم الاستبيانات غير المنحازة، واستخدام الجداول الإلكترونية للتحليل وكتابة تقرير تحليلي متكامل.',
        },
      ],
      tutoringSupportHeading: 'كيف يدعمك مدرسونا في التفوق بمقرر MDM4U؟',
      tutoringPoints: [
        'تبسيط قواعد العد ونظريات الاحتمالات عبر أمثلة عملية واضحة تزيل اللبس والتعقيد.',
        'توضيح الفرق بين الارتباط والسببية وكيفية اكتشاف الانحياز الإحصائي في الدراسات.',
        'إرشاد منهجي في إعداد مشروع البيانات الختامي واختيار العينات والتحقق من صحة النتائج.',
        'تدريب مخصص للاختبارات الشهرية والاختبار النهائي وفق معايير التقييم لمدرستك.',
      ],
      progressionHeading: 'ربط الثقافة الإحصائية بالمهارات المستقبلية',
      progressionText:
        'يمنح مقرر إدارة البيانات الطالب مهارات التفكير النقدي وقراءة الأرقام والبيانات بدقة، وهي أدوات حيوية لا تقتصر على المرحلة الثانوية بل ترافق الطالب طوال دراسته الجامعية وحياته المهنية.',
      relatedLinkText: 'استكشاف جميع مسارات منهج الرياضيات',
      relatedLinkHref: '/ar/subjects/math',
      examLinkText: 'دروس الاستعداد للاختبارات المدرسية',
      examLinkHref: '/en/services/exam-preparation',
      faqsHeading: 'الأسئلة الشائعة حول دروس مقرر MDM4U',
      faqs: [
        {
          question: 'ما هو مقرر MDM4U في منهج أونتاريو؟',
          answer:
            'هو مقرر إدارة البيانات للصف الثاني عشر للتحضير الجامعي، ويشمل التباديل والتوافيق، ونظرية الاحتمالات، والتوزيعات المنفصلة والطبيعية، والإحصاء التطبيقي، ومشروع البحث الإحصائي.',
        },
        {
          question: 'من هم الطلاب الذين يختارون هذا المقرر عادةً؟',
          answer:
            'الطلاب الراغبون في الالتحاق بالجامعة في تخصصات إدارة الأعمال، والاقتصاد، وعلم النفس، والتمريض، والعلوم الاجتماعية، ومجالات الأبحاث.',
        },
        {
          question: 'كيف يساعد المعلم في الواجبات ومشروع المقرر النهائي؟',
          answer:
            'يقدم المعلم دعمًا في فهم مسائل العد والاحتمالات، وضبط منهجية مشروع البيانات، وتحليل المتغيرات، والاستعداد الشامل للاختبارات.',
        },
      ],
      ctaHeading: 'اكتسب الثقة في الإحصاء والاحتمالات وإدارة البيانات',
      ctaText: 'احجز معلمًا خصوصيًا لمقرر MDM4U',
    },
  },
};

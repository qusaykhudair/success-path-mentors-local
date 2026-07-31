import {
  BookOpenCheck,
  GraduationCap,
  HeartHandshake,
  MessagesSquare,
  ShieldCheck,
  Target,
  UserRoundCheck,
} from 'lucide-react';

import type {
  FaqItem,
  FeatureItem,
  PageHighlight,
  ProcessStep,
} from '@/types/internal-page';

interface AboutPageContent {
  seo: {
    title: string;
    description: string;
  };

  breadcrumbs: {
    home: string;
    current: string;
    ariaLabel: string;
  };

  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
    highlights: PageHighlight[];
  };

  story: {
    eyebrow: string;
    title: string;
    description: string;
    paragraphs: string[];
  };

  values: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
  };

  model: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
  };

  quality: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ProcessStep[];
  };

  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: FaqItem[];
  };

  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
  };
}

export const aboutPageContent = {
  en: {
    seo: {
      title:
        'About Mustafa Academy | Personalized Online Tutoring',
      description:
        'Learn how Mustafa Academy supports students in Grades 1–12 through personalized one-to-one online tutoring, thoughtful tutor matching, and consistent family communication.',
    },

    breadcrumbs: {
      home: 'Home',
      current: 'About',
      ariaLabel: 'Breadcrumb',
    },

    hero: {
      eyebrow: 'About Mustafa Academy',
      title:
        'Personalized tutoring built around each student',
      description:
        'Mustafa Academy, operated by Success Path Mentors, provides one-to-one online tutoring designed around the student’s subject, grade, learning goals, schoolwork, and preferred schedule.',
      primaryAction: 'Explore our tutoring approach',
      secondaryAction: 'Email our team',
      highlights: [
        {
          value: 'Grades 1–12',
          label:
            'Academic support across elementary, middle, and high school.',
        },
        {
          value: 'One-to-one lessons',
          label:
            'Individual attention rather than a large group format.',
        },
        {
          value: 'Family communication',
          label:
            'Clear coordination around schedules, needs, and progress.',
        },
      ],
    },

    story: {
      eyebrow: 'Our purpose',
      title:
        'Making high-quality academic support easier to access',
      description:
        'Students learn differently, and the support they need can change from one subject, grade, or school term to another.',
      paragraphs: [
        'Mustafa Academy was developed to give families a more flexible and personal alternative to one-size-fits-all tutoring. Our lessons take place online, allowing students to learn from home while receiving direct support from a tutor matched to the subject and learning need.',
        'The goal is not simply to complete a worksheet or provide an answer. Our approach focuses on explaining concepts, identifying gaps, practising skills, improving confidence, and helping the student become more independent over time.',
        'We also recognize the important role of parents and guardians. Clear scheduling, practical communication, and appropriate follow-up are part of creating a stable learning experience.',
      ],
    },

    values: {
      eyebrow: 'What guides us',
      title:
        'A student-centred approach supported by clear standards',
      description:
        'Our decisions are guided by educational value, professional communication, and a practical understanding of what families need from an online tutoring service.',
      items: [
        {
          title: 'Student first',
          description:
            'The lesson begins with the student’s current level, learning goal, and immediate academic need.',
          icon: HeartHandshake,
        },
        {
          title: 'Clear learning goals',
          description:
            'Tutoring should have a defined purpose, whether that is strengthening foundations, preparing for an assessment, or improving a specific skill.',
          icon: Target,
        },
        {
          title: 'Professional communication',
          description:
            'Families should receive respectful, understandable, and timely communication about scheduling and learning needs.',
          icon: MessagesSquare,
        },
        {
          title: 'Responsible academic support',
          description:
            'Tutors guide students through schoolwork and skill development without replacing the student’s own effort.',
          icon: BookOpenCheck,
        },
        {
          title: 'Thoughtful tutor matching',
          description:
            'Subject knowledge matters, but communication style, grade level, language, availability, and student fit matter as well.',
          icon: UserRoundCheck,
        },
        {
          title: 'Continuous improvement',
          description:
            'Feedback from students, families, tutors, and supervisors helps improve lesson quality and operations.',
          icon: ShieldCheck,
        },
      ],
    },

    model: {
      eyebrow: 'How learning works',
      title:
        'One-to-one support that adapts to the student',
      description:
        'Our model is designed to make the lesson relevant to the student’s real school experience rather than following a fixed script for every learner.',
      items: [
        {
          title: 'Individual attention',
          description:
            'The tutor can adjust the pace, explanations, examples, and practice to one student.',
          icon: UserRoundCheck,
        },
        {
          title: 'Curriculum-aware support',
          description:
            'Families can share the student’s grade, school material, assignments, and curriculum context so lessons stay relevant.',
          icon: GraduationCap,
        },
        {
          title: 'Skill building',
          description:
            'Lessons can address immediate work while also strengthening the underlying knowledge needed for future progress.',
          icon: BookOpenCheck,
        },
      ],
    },

    quality: {
      eyebrow: 'Tutor quality and fit',
      title:
        'A structured matching and follow-up process',
      description:
        'A successful tutoring relationship depends on both academic capability and the student’s ability to understand and communicate comfortably with the tutor.',
      steps: [
        {
          title: 'Understand the student',
          description:
            'We collect the grade, subject, learning goal, preferred language, schedule, and any relevant school information.',
        },
        {
          title: 'Select an appropriate tutor',
          description:
            'The matching decision considers subject knowledge, teaching experience, communication, availability, and the student’s needs.',
        },
        {
          title: 'Review and adjust',
          description:
            'Families can provide feedback after lessons. When a different approach or tutor is needed, the team reviews the situation and coordinates the next step.',
        },
      ],
    },

    faq: {
      eyebrow: 'Common questions',
      title:
        'About the academy',
      description:
        'Key information for families considering personalized online tutoring.',
      items: [
        {
          question:
            'What grades does Mustafa Academy support?',
          answer:
            'The academy provides tutoring support for students in Grades 1–12. Available subjects and tutors can vary by grade, curriculum, language, and schedule.',
        },
        {
          question:
            'Are lessons private or group-based?',
          answer:
            'The core service is one-to-one online tutoring, allowing the tutor to focus on one student’s academic needs and learning pace.',
        },
        {
          question:
            'Can lessons follow the student’s school curriculum?',
          answer:
            'Families can share the student’s grade, school material, assignments, and curriculum information. The tutor can then align explanations and practice with the material the student is currently studying.',
        },
        {
          question:
            'Can a family request a different tutor?',
          answer:
            'Yes. Tutor fit is important. A parent or guardian can contact the team to explain the concern, and the academy will review the request and coordinate an appropriate next step based on availability.',
        },
        {
          question:
            'Does the tutor complete homework for the student?',
          answer:
            'No. Tutors can explain concepts, demonstrate methods, review attempts, and guide the student through the work. The student remains responsible for completing and submitting their own assignments.',
        },
      ],
    },

    cta: {
      eyebrow: 'Start with a clear learning goal',
      title:
        'Tell us what your student needs help with',
      description:
        'Share the grade, subject, preferred schedule, and current learning challenge. Our team can use that information to guide the next step.',
      primaryAction: 'View tutoring options',
      secondaryAction: 'Email the academy',
    },
  },

  ar: {
    seo: {
      title:
        'من نحن | أكاديمية مصطفى للدروس الفردية أونلاين',
      description:
        'تعرّف على طريقة عمل أكاديمية مصطفى في دعم طلاب الصفوف من الأول إلى الثاني عشر من خلال حصص فردية أونلاين، واختيار المدرس المناسب، والتواصل الواضح مع الأسرة.',
    },

    breadcrumbs: {
      home: 'الرئيسية',
      current: 'من نحن',
      ariaLabel: 'مسار التنقل',
    },

    hero: {
      eyebrow: 'عن أكاديمية مصطفى',
      title:
        'تعليم فردي يُبنى حول احتياجات كل طالب',
      description:
        'تقدم أكاديمية مصطفى، التابعة لـ Success Path Mentors، حصصًا فردية أونلاين تراعي مادة الطالب وصفه الدراسي وأهدافه التعليمية وواجباته المدرسية والوقت المناسب للأسرة.',
      primaryAction: 'تعرّف على أسلوب التدريس',
      secondaryAction: 'راسل فريق الأكاديمية',
      highlights: [
        {
          value: 'الصفوف 1–12',
          label:
            'دعم أكاديمي لطلاب المرحلة الابتدائية والمتوسطة والثانوية.',
        },
        {
          value: 'حصص فردية',
          label:
            'اهتمام مباشر بالطالب بدل نموذج المجموعات الكبيرة.',
        },
        {
          value: 'تواصل مع الأسرة',
          label:
            'تنسيق واضح للمواعيد والاحتياجات والمتابعة.',
        },
      ],
    },

    story: {
      eyebrow: 'هدفنا',
      title:
        'تسهيل الوصول إلى دعم أكاديمي عالي الجودة',
      description:
        'يختلف الطلاب في طريقة تعلمهم، كما تتغير احتياجاتهم باختلاف المادة والصف والفصل الدراسي.',
      paragraphs: [
        'تم تطوير أكاديمية مصطفى لتمنح الأسر بديلًا أكثر مرونة وشخصية من خدمات التدريس الموحدة. تتم الحصص أونلاين، ليتمكن الطالب من التعلم من المنزل والحصول على دعم مباشر من مدرس يتم اختياره وفق المادة والاحتياج التعليمي.',
        'الهدف ليس إنهاء ورقة عمل أو إعطاء إجابة جاهزة. يركز أسلوبنا على شرح المفاهيم، وتحديد الفجوات، والتدرب على المهارات، وتحسين الثقة، ومساعدة الطالب على أن يصبح أكثر استقلالية مع الوقت.',
        'كما نقدر الدور المهم لولي الأمر. لذلك يعد تنظيم المواعيد والتواصل العملي والمتابعة المناسبة جزءًا من بناء تجربة تعليمية مستقرة.',
      ],
    },

    values: {
      eyebrow: 'مبادئنا',
      title:
        'نهج يضع الطالب في المركز وتدعمه معايير واضحة',
      description:
        'تقوم قراراتنا على القيمة التعليمية والتواصل المهني والفهم العملي لما تحتاجه الأسرة من خدمة تدريس أونلاين.',
      items: [
        {
          title: 'الطالب أولًا',
          description:
            'تبدأ الحصة من مستوى الطالب الحالي وهدفه التعليمي واحتياجه الأكاديمي المباشر.',
          icon: HeartHandshake,
        },
        {
          title: 'أهداف تعليمية واضحة',
          description:
            'يجب أن يكون للحصة هدف محدد، مثل تقوية الأساسيات أو الاستعداد لتقييم أو تحسين مهارة معينة.',
          icon: Target,
        },
        {
          title: 'تواصل مهني',
          description:
            'من حق الأسرة الحصول على تواصل محترم وواضح وفي الوقت المناسب حول المواعيد والاحتياجات التعليمية.',
          icon: MessagesSquare,
        },
        {
          title: 'دعم أكاديمي مسؤول',
          description:
            'يرشد المدرس الطالب في الواجبات وتطوير المهارات من دون أن يحل مكانه أو يلغي جهده الشخصي.',
          icon: BookOpenCheck,
        },
        {
          title: 'اختيار مدروس للمدرس',
          description:
            'المعرفة بالمادة مهمة، وكذلك طريقة التواصل والصف واللغة والتوفر ومدى ملاءمة المدرس للطالب.',
          icon: UserRoundCheck,
        },
        {
          title: 'تحسين مستمر',
          description:
            'تساعد ملاحظات الطلاب والأسر والمدرسين والمشرفين في تطوير جودة الحصص والعمل.',
          icon: ShieldCheck,
        },
      ],
    },

    model: {
      eyebrow: 'طريقة التعلم',
      title:
        'دعم فردي يتكيف مع مستوى الطالب',
      description:
        'تم تصميم نموذجنا لتكون الحصة مرتبطة بتجربة الطالب المدرسية الفعلية، بدل استخدام نص ثابت لجميع الطلاب.',
      items: [
        {
          title: 'اهتمام فردي',
          description:
            'يستطيع المدرس تعديل سرعة الحصة وطريقة الشرح والأمثلة والتدريبات بما يناسب طالبًا واحدًا.',
          icon: UserRoundCheck,
        },
        {
          title: 'مراعاة المنهج',
          description:
            'يمكن للأسرة مشاركة الصف والكتاب والواجبات ومعلومات المنهج حتى تبقى الحصة مرتبطة بما يدرسه الطالب.',
          icon: GraduationCap,
        },
        {
          title: 'بناء المهارات',
          description:
            'تعالج الحصة العمل الحالي، مع تقوية المعرفة الأساسية التي يحتاجها الطالب للتقدم لاحقًا.',
          icon: BookOpenCheck,
        },
      ],
    },

    quality: {
      eyebrow: 'جودة المدرس وملاءمته',
      title:
        'عملية منظمة للاختيار والمتابعة',
      description:
        'تنجح العلاقة التعليمية عندما يجتمع المستوى الأكاديمي الجيد مع قدرة الطالب على الفهم والتواصل براحة مع المدرس.',
      steps: [
        {
          title: 'فهم احتياج الطالب',
          description:
            'نجمع معلومات الصف والمادة والهدف التعليمي واللغة المفضلة والوقت المناسب وأي معلومات مدرسية مهمة.',
        },
        {
          title: 'اختيار مدرس مناسب',
          description:
            'يراعي الاختيار معرفة المادة والخبرة في التدريس وطريقة التواصل والتوفر واحتياجات الطالب.',
        },
        {
          title: 'المراجعة والتعديل',
          description:
            'يمكن للأسرة تقديم ملاحظاتها بعد الحصص. وعند الحاجة إلى أسلوب أو مدرس مختلف، يراجع الفريق الحالة وينسق الخطوة التالية.',
        },
      ],
    },

    faq: {
      eyebrow: 'أسئلة شائعة',
      title:
        'حول الأكاديمية',
      description:
        'معلومات أساسية للأسر التي تفكر في الاستفادة من الدروس الفردية أونلاين.',
      items: [
        {
          question:
            'ما الصفوف التي تدعمها أكاديمية مصطفى؟',
          answer:
            'تقدم الأكاديمية دعمًا لطلاب الصفوف من الأول إلى الثاني عشر. وقد تختلف المواد والمدرسون المتاحون وفق الصف والمنهج واللغة والوقت المطلوب.',
        },
        {
          question:
            'هل الحصص فردية أم جماعية؟',
          answer:
            'الخدمة الأساسية هي التدريس الفردي أونلاين، بحيث يركز المدرس على احتياجات طالب واحد وسرعة تعلمه.',
        },
        {
          question:
            'هل يمكن ربط الحصة بمنهج الطالب في المدرسة؟',
          answer:
            'يمكن للأسرة مشاركة الصف والكتاب والواجبات ومعلومات المنهج. وبذلك يستطيع المدرس ربط الشرح والتدريب بالمادة التي يدرسها الطالب حاليًا.',
        },
        {
          question:
            'هل يمكن للأسرة طلب تغيير المدرس؟',
          answer:
            'نعم. ملاءمة المدرس للطالب مهمة. يمكن لولي الأمر التواصل مع الفريق وشرح الملاحظة، ثم تراجع الأكاديمية الطلب وتنسق الخطوة المناسبة وفق التوفر.',
        },
        {
          question:
            'هل يقوم المدرس بحل الواجب بدل الطالب؟',
          answer:
            'لا. يستطيع المدرس شرح المفهوم وتوضيح الطريقة ومراجعة محاولة الطالب وإرشاده أثناء الحل، بينما يبقى الطالب مسؤولًا عن إكمال واجبه وتسليمه بنفسه.',
        },
      ],
    },

    cta: {
      eyebrow: 'ابدأ بهدف تعليمي واضح',
      title:
        'أخبرنا بما يحتاج الطالب إلى مساعدة فيه',
      description:
        'شارك الصف والمادة والوقت المناسب والتحدي التعليمي الحالي، حتى يتمكن الفريق من توجيهك إلى الخطوة التالية.',
      primaryAction: 'استعرض خيارات التدريس',
      secondaryAction: 'راسل الأكاديمية',
    },
  },
} satisfies Record<
  'en' | 'ar',
  AboutPageContent
>;
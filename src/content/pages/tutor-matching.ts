import {
  CalendarClock,
  ClipboardCheck,
  GraduationCap,
  Languages,
  MessageCirclePlus,
  RefreshCw,
  Target,
  UserRoundCheck,
} from 'lucide-react';

import type {
  FaqItem,
  FeatureItem,
  PageHighlight,
  ProcessStep,
  RelatedPage,
} from '@/types/internal-page';

interface TutorMatchingPageContent {
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

  importance: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
  };

  information: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
  };

  process: {
    eyebrow: string;
    title: string;
    description: string;
    items: ProcessStep[];
  };

  firstLesson: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
  };

  change: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
  };

  expectations: {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
  };

  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: FaqItem[];
  };

  related: {
    heading: string;
    items: RelatedPage[];
  };

  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
  };

  schema: {
    serviceName: string;
    serviceType: string;
  };
}

export const tutorMatchingPageContent = {
  en: {
    seo: {
      title:
        'Online Tutor Matching | Success Path Mentors',
      description:
        'Learn how Success Path Mentors matches students with online tutors according to subject, grade, curriculum, language, availability, communication style, and learning goals.',
    },

    breadcrumbs: {
      home: 'Home',
      current: 'Tutor Matching',
      ariaLabel: 'Breadcrumb',
    },

    hero: {
      eyebrow: 'Tutor matching',
      title:
        'The right tutor is more than a subject match',
      description:
        'We consider the student’s grade, curriculum, learning goal, preferred language, schedule, communication needs, and the tutor’s relevant experience before coordinating the first lesson.',
      primaryAction: 'See the matching criteria',
      secondaryAction: 'How tutoring works',
      highlights: [
        {
          value: 'Academic fit',
          label:
            'Subject knowledge, grade level, curriculum context, and the student’s current need.',
        },
        {
          value: 'Communication fit',
          label:
            'Language, explanation style, patience, pace, and student comfort.',
        },
        {
          value: 'Practical fit',
          label:
            'Time zone, tutor availability, lesson frequency, and continuity.',
        },
      ],
    },

    importance: {
      eyebrow: 'Why fit matters',
      title:
        'Knowing the subject is essential, but it is not the only factor',
      description:
        'A strong tutoring relationship also depends on whether the student can follow the explanation, ask questions comfortably, participate actively, and attend lessons consistently.',
      items: [
        {
          title: 'Academic understanding',
          description:
            'The tutor should understand the requested subject and be able to teach at the student’s grade and course level.',
          icon: GraduationCap,
        },
        {
          title: 'Clear communication',
          description:
            'The tutor should explain ideas in language and steps the student can understand and apply.',
          icon: MessageCirclePlus,
        },
        {
          title: 'Goal alignment',
          description:
            'The teaching approach should match the goal, whether it is foundational support, homework guidance, exam preparation, or skill development.',
          icon: Target,
        },
      ],
    },

    information: {
      eyebrow: 'What we learn first',
      title:
        'Useful information helps us make a more responsible match',
      description:
        'Families do not need to prepare a formal assessment. Clear practical details about the student are enough to begin the review.',
      items: [
        {
          title: 'Grade and subject',
          description:
            'The student’s current grade, requested subject, course name, and the exact topic when known.',
          icon: ClipboardCheck,
        },
        {
          title: 'Curriculum or school context',
          description:
            'The province, state, country, school program, course code, textbook, or current school material when relevant.',
          icon: GraduationCap,
        },
        {
          title: 'Language preference',
          description:
            'The preferred teaching language and whether bilingual explanation may support understanding.',
          icon: Languages,
        },
        {
          title: 'Learning goal',
          description:
            'The immediate challenge and the result the family hopes to achieve through tutoring.',
          icon: Target,
        },
        {
          title: 'Availability',
          description:
            'The family’s time zone, suitable days, preferred times, and expected lesson frequency.',
          icon: CalendarClock,
        },
        {
          title: 'Learning considerations',
          description:
            'Any communication preferences, school feedback, attention needs, or accommodations the family chooses to share.',
          icon: UserRoundCheck,
        },
      ],
    },

    process: {
      eyebrow: 'Our matching process',
      title:
        'From the student request to the first lesson',
      description:
        'The process is designed to balance timely coordination with a reasonable review of academic, communication, and scheduling fit.',
      items: [
        {
          title: 'Review the request',
          description:
            'The team checks the grade, subject, learning goal, curriculum, language, schedule, and any material shared by the family.',
        },
        {
          title: 'Identify available tutors',
          description:
            'The team reviews tutors who can support the subject and grade and whose availability is compatible with the family’s time zone.',
        },
        {
          title: 'Compare academic and practical fit',
          description:
            'Relevant teaching experience, communication, language, schedule, and the student’s stated needs are considered together.',
        },
        {
          title: 'Confirm the proposed match',
          description:
            'The family receives the proposed lesson arrangement and the information needed to confirm the first session.',
        },
        {
          title: 'Complete the first lesson',
          description:
            'The tutor begins teaching while observing the student’s level, pace, communication, and response to the lesson.',
        },
        {
          title: 'Continue or adjust',
          description:
            'When the match works, the schedule continues. When a reasonable change is needed, the team reviews available alternatives.',
        },
      ],
    },

    firstLesson: {
      eyebrow: 'The first lesson',
      title:
        'A real teaching session and an opportunity to review fit',
      description:
        'The first session helps turn the information provided by the family into a clearer understanding of the student’s academic level, communication needs, and next priority.',
      items: [
        {
          title: 'Observe the current level',
          description:
            'The tutor reviews how the student approaches the topic, responds to questions, and applies previous knowledge.',
          icon: ClipboardCheck,
        },
        {
          title: 'Review communication',
          description:
            'The lesson shows whether the explanation style, language, pace, and interaction are understandable and comfortable.',
          icon: MessageCirclePlus,
        },
        {
          title: 'Clarify the next priority',
          description:
            'The tutor and family gain a clearer view of the skill, topic, or study plan that should receive attention next.',
          icon: Target,
        },
      ],
    },

    change: {
      eyebrow: 'When a change is needed',
      title:
        'Tutor fit can be reviewed without blaming the student or tutor',
      description:
        'A tutor may be capable and professional but still not be the best fit for a particular student, schedule, language preference, or learning goal.',
      items: [
        {
          title: 'Share specific feedback',
          description:
            'Explain whether the concern relates to communication, pace, teaching style, schedule, subject coverage, or another practical issue.',
          icon: MessageCirclePlus,
        },
        {
          title: 'Allow the team to review',
          description:
            'The academy may clarify the concern, review lesson information, and determine whether an adjustment or different tutor is appropriate.',
          icon: ClipboardCheck,
        },
        {
          title: 'Coordinate an available alternative',
          description:
            'When a change is approved, the team searches for a suitable available tutor. A particular tutor or exact time cannot always be guaranteed.',
          icon: RefreshCw,
        },
      ],
    },

    expectations: {
      eyebrow: 'Important expectations',
      title:
        'What tutor matching does and does not guarantee',
      description:
        'The academy works to make a thoughtful match, but tutoring outcomes depend on several factors beyond tutor selection.',
      bullets: [
        'The academy does not guarantee a specific tutor, exact schedule, grade improvement, examination score, or academic result.',
        'Tutor availability can change because of time zones, school terms, illness, emergencies, or changes in the tutor’s schedule.',
        'Families should provide accurate information and timely feedback so the team can review the match responsibly.',
        'Students are expected to attend prepared, participate respectfully, and complete their own schoolwork.',
        'A tutor change request is reviewed in good faith and remains subject to availability and the applicable cancellation and scheduling rules.',
      ],
    },

    faq: {
      eyebrow: 'Common questions',
      title:
        'Questions about tutor matching',
      description:
        'Practical information about selection, the first lesson, preferences, and requesting a change.',
      items: [
        {
          question:
            'Can I choose a specific tutor?',
          answer:
            'You can share preferences or request a tutor you already know, but assignment depends on subject fit, availability, schedule, and the academy’s review. A specific tutor cannot be guaranteed.',
        },
        {
          question:
            'How quickly can a tutor be matched?',
          answer:
            'Timing depends on the subject, grade, language, time zone, requested schedule, and current tutor availability. Providing several suitable times can make coordination easier.',
        },
        {
          question:
            'Can I request a male or female tutor?',
          answer:
            'Families may share this preference. The academy will consider it together with subject requirements, schedule, and tutor availability, but cannot guarantee every preference.',
        },
        {
          question:
            'What if the student has an IEP or learning accommodation?',
          answer:
            'A parent or guardian may share relevant information that will help the tutor communicate and plan appropriately. Tutoring is educational support and is not a substitute for medical, psychological, diagnostic, or specialized therapeutic services.',
        },
        {
          question:
            'Can we change the tutor after the first lesson?',
          answer:
            'Yes. A parent or guardian can request a review. The team will consider the reason, the lesson experience, and available alternatives before coordinating the next step.',
        },
        {
          question:
            'Does tutor matching guarantee better grades?',
          answer:
            'No. The academy cannot guarantee a specific grade or result. Progress depends on attendance, participation, practice, school requirements, the student’s starting point, and other factors.',
        },
      ],
    },

    related: {
      heading: 'Explore related pages',
      items: [
        {
          title: 'About Success Path Mentors',
          description:
            'Learn about the academy’s purpose, values, tutoring model, and approach to quality.',
          href: '/en/about',
          label: 'Read about the academy',
        },
        {
          title: 'How tutoring works',
          description:
            'See the complete process from the first family request to ongoing online lessons.',
          href: '/en/how-it-works',
          label: 'View the process',
        },
      ],
    },

    cta: {
      eyebrow: 'Help us make a better match',
      title:
        'Share the student’s subject, goal, language, and schedule',
      description:
        'The more clearly the request describes the student’s current need, the easier it is to review academic, communication, and practical fit.',
      primaryAction: 'View tutoring options',
      secondaryAction: 'How tutoring works',
    },

    schema: {
      serviceName:
        'Online Tutor Matching',
      serviceType:
        'Online tutor matching and one-to-one tutoring coordination',
    },
  },

  ar: {
    seo: {
      title:
        'اختيار المدرس المناسب أونلاين | Success Path Mentors',
      description:
        'تعرّف على طريقة اختيار المدرس في Success Path Mentors وفق المادة والصف والمنهج واللغة والأوقات المتاحة وطريقة التواصل والهدف التعليمي.',
    },

    breadcrumbs: {
      home: 'الرئيسية',
      current: 'اختيار المدرس',
      ariaLabel: 'مسار التنقل',
    },

    hero: {
      eyebrow: 'اختيار المدرس',
      title:
        'المدرس المناسب ليس مجرد مدرس يعرف المادة',
      description:
        'نراعي صف الطالب ومنهجه وهدفه التعليمي واللغة المفضلة والوقت المناسب واحتياجات التواصل وخبرة المدرس المرتبطة بالطلب قبل تنسيق الحصة الأولى.',
      primaryAction: 'اطّلع على معايير الاختيار',
      secondaryAction: 'كيف تعمل الدروس؟',
      highlights: [
        {
          value: 'ملاءمة أكاديمية',
          label:
            'المادة والصف والمنهج والاحتياج الحالي للطالب.',
        },
        {
          value: 'ملاءمة في التواصل',
          label:
            'اللغة وطريقة الشرح والصبر والسرعة وراحة الطالب.',
        },
        {
          value: 'ملاءمة عملية',
          label:
            'المنطقة الزمنية والتوفر وعدد الحصص والاستمرارية.',
        },
      ],
    },

    importance: {
      eyebrow: 'لماذا الملاءمة مهمة؟',
      title:
        'معرفة المادة أساسية، لكنها ليست العامل الوحيد',
      description:
        'تعتمد العلاقة التعليمية الناجحة أيضًا على قدرة الطالب على فهم الشرح وطرح الأسئلة براحة والمشاركة والحضور باستمرار.',
      items: [
        {
          title: 'فهم أكاديمي',
          description:
            'يجب أن يفهم المدرس المادة المطلوبة وأن يستطيع تدريسها بمستوى الصف والمقرر المناسب.',
          icon: GraduationCap,
        },
        {
          title: 'تواصل واضح',
          description:
            'يجب أن يشرح المدرس الأفكار بلغة وخطوات يستطيع الطالب فهمها وتطبيقها.',
          icon: MessageCirclePlus,
        },
        {
          title: 'توافق مع الهدف',
          description:
            'يجب أن يناسب أسلوب التدريس الهدف، سواء كان تقوية الأساسيات أو الواجبات أو الاختبارات أو تطوير مهارة.',
          icon: Target,
        },
      ],
    },

    information: {
      eyebrow: 'ما الذي نحتاج إلى معرفته؟',
      title:
        'المعلومات المفيدة تساعدنا على اتخاذ قرار أكثر مسؤولية',
      description:
        'لا تحتاج الأسرة إلى إعداد تقييم رسمي. تكفي تفاصيل عملية وواضحة عن وضع الطالب لبدء المراجعة.',
      items: [
        {
          title: 'الصف والمادة',
          description:
            'الصف الحالي والمادة المطلوبة واسم المقرر والموضوع المحدد عند معرفته.',
          icon: ClipboardCheck,
        },
        {
          title: 'المنهج أو السياق المدرسي',
          description:
            'المقاطعة أو الولاية أو الدولة أو البرنامج المدرسي أو رمز المقرر أو الكتاب أو المادة الحالية عند الحاجة.',
          icon: GraduationCap,
        },
        {
          title: 'اللغة المفضلة',
          description:
            'لغة التدريس المفضلة، وما إذا كان الشرح بلغتين قد يساعد الطالب على الفهم.',
          icon: Languages,
        },
        {
          title: 'الهدف التعليمي',
          description:
            'التحدي الحالي والنتيجة التي تأمل الأسرة تحقيقها من خلال الدروس.',
          icon: Target,
        },
        {
          title: 'الأوقات المتاحة',
          description:
            'المنطقة الزمنية والأيام والأوقات المناسبة وعدد الحصص المتوقع.',
          icon: CalendarClock,
        },
        {
          title: 'اعتبارات التعلم',
          description:
            'أي تفضيلات في التواصل أو ملاحظات مدرسية أو احتياجات انتباه أو تسهيلات تختار الأسرة مشاركتها.',
          icon: UserRoundCheck,
        },
      ],
    },

    process: {
      eyebrow: 'عملية الاختيار',
      title:
        'من طلب الأسرة إلى الحصة الأولى',
      description:
        'تم تصميم العملية لتحقيق توازن بين سرعة التنسيق والمراجعة المعقولة للملاءمة الأكاديمية والتواصلية والعملية.',
      items: [
        {
          title: 'مراجعة الطلب',
          description:
            'يتحقق الفريق من الصف والمادة والهدف والمنهج واللغة والوقت وأي مادة أرسلتها الأسرة.',
        },
        {
          title: 'تحديد المدرسين المتاحين',
          description:
            'يراجع الفريق المدرسين القادرين على دعم المادة والصف، والذين تتوافق أوقاتهم مع المنطقة الزمنية للأسرة.',
        },
        {
          title: 'مقارنة الملاءمة الأكاديمية والعملية',
          description:
            'تُراعى الخبرة ذات الصلة وطريقة التواصل واللغة والوقت واحتياجات الطالب معًا.',
        },
        {
          title: 'تأكيد الاختيار المقترح',
          description:
            'تتلقى الأسرة ترتيب الحصة المقترح والمعلومات اللازمة لتأكيد الجلسة الأولى.',
        },
        {
          title: 'تنفيذ الحصة الأولى',
          description:
            'يبدأ المدرس بالتدريس مع ملاحظة مستوى الطالب وطريقة التواصل والسرعة واستجابته للحصة.',
        },
        {
          title: 'الاستمرار أو التعديل',
          description:
            'عند نجاح الاختيار يستمر الجدول. وعند الحاجة المعقولة إلى تغيير، يراجع الفريق البدائل المتوفرة.',
        },
      ],
    },

    firstLesson: {
      eyebrow: 'الحصة الأولى',
      title:
        'حصة تعليمية حقيقية وفرصة لمراجعة الملاءمة',
      description:
        'تساعد الحصة الأولى على تحويل المعلومات التي قدمتها الأسرة إلى فهم أوضح لمستوى الطالب واحتياجات التواصل والأولوية التعليمية التالية.',
      items: [
        {
          title: 'ملاحظة المستوى الحالي',
          description:
            'يراجع المدرس طريقة تعامل الطالب مع الموضوع واستجابته للأسئلة واستخدامه للمعرفة السابقة.',
          icon: ClipboardCheck,
        },
        {
          title: 'مراجعة التواصل',
          description:
            'توضح الجلسة مدى مناسبة طريقة الشرح واللغة والسرعة والتفاعل للطالب.',
          icon:   MessageCirclePlus,
        },
        {
          title: 'تحديد الأولوية التالية',
          description:
            'يحصل المدرس والأسرة على تصور أوضح للمهارة أو الموضوع أو الخطة التي تحتاج إلى التركيز لاحقًا.',
          icon: Target,
        },
      ],
    },

    change: {
      eyebrow: 'عند الحاجة إلى تغيير',
      title:
        'يمكن مراجعة الملاءمة دون لوم الطالب أو المدرس',
      description:
        'قد يكون المدرس كفؤًا ومهنيًا، لكنه لا يكون الاختيار الأفضل لطالب معين أو وقت أو لغة أو هدف تعليمي محدد.',
      items: [
        {
          title: 'شارك ملاحظات محددة',
          description:
            'وضح ما إذا كانت الملاحظة مرتبطة بالتواصل أو السرعة أو أسلوب التدريس أو الوقت أو تغطية المادة أو سبب عملي آخر.',
          icon:   MessageCirclePlus,
        },
        {
          title: 'امنح الفريق فرصة للمراجعة',
          description:
            'قد يطلب الفريق توضيح الملاحظة ويراجع معلومات الحصة ويحدد ما إذا كان التعديل أو تغيير المدرس مناسبًا.',
          icon: ClipboardCheck,
        },
        {
          title: 'تنسيق بديل متوفر',
          description:
            'عند الموافقة على التغيير، يبحث الفريق عن مدرس مناسب ومتاح. ولا يمكن دائمًا ضمان مدرس أو وقت معين.',
          icon: RefreshCw,
        },
      ],
    },

    expectations: {
      eyebrow: 'توقعات مهمة',
      title:
        'ما الذي تضمنه عملية الاختيار وما الذي لا تضمنه؟',
      description:
        'تسعى الأكاديمية إلى اختيار مدروس، لكن نتائج التدريس تعتمد على عوامل متعددة تتجاوز اختيار المدرس.',
      bullets: [
        'لا تضمن الأكاديمية مدرسًا معينًا أو وقتًا دقيقًا أو تحسنًا محددًا في الدرجات أو نتيجة اختبار أو نتيجة أكاديمية بعينها.',
        'قد يتغير توفر المدرس بسبب المناطق الزمنية أو الفصول الدراسية أو المرض أو الطوارئ أو تغيير جدوله.',
        'ينبغي للأسرة تقديم معلومات دقيقة وملاحظات في الوقت المناسب حتى يتمكن الفريق من مراجعة الملاءمة بصورة مسؤولة.',
        'يُتوقع من الطالب الحضور مستعدًا والمشاركة باحترام وإنجاز عمله المدرسي بنفسه.',
        'تتم مراجعة طلب تغيير المدرس بحسن نية، ويبقى خاضعًا للتوفر وقواعد الإلغاء والمواعيد المطبقة.',
      ],
    },

    faq: {
      eyebrow: 'أسئلة شائعة',
      title:
        'أسئلة حول اختيار المدرس',
      description:
        'معلومات عملية حول الاختيار والحصة الأولى والتفضيلات وطلب التغيير.',
      items: [
        {
          question:
            'هل يمكنني اختيار مدرس معين؟',
          answer:
            'يمكنك مشاركة تفضيلاتك أو طلب مدرس تعرفه، لكن التعيين يعتمد على المادة والملاءمة والتوفر والوقت ومراجعة الأكاديمية. ولا يمكن ضمان مدرس معين.',
        },
        {
          question:
            'كم يستغرق اختيار مدرس؟',
          answer:
            'يعتمد الوقت على المادة والصف واللغة والمنطقة الزمنية والجدول المطلوب وتوفر المدرسين. يساعد تقديم أكثر من وقت مناسب على تسهيل التنسيق.',
        },
        {
          question:
            'هل يمكن طلب مدرس أو مدرسة؟',
          answer:
            'يمكن للأسرة مشاركة هذا التفضيل. وستراعيه الأكاديمية مع متطلبات المادة والوقت والتوفر، لكن لا يمكن ضمان جميع التفضيلات.',
        },
        {
          question:
            'ماذا لو كان لدى الطالب IEP أو تسهيلات تعليمية؟',
          answer:
            'يمكن لولي الأمر مشاركة المعلومات التي تساعد المدرس على التواصل والتخطيط المناسب. التدريس دعم تعليمي، وليس بديلًا عن الخدمات الطبية أو النفسية أو التشخيصية أو العلاجية المتخصصة.',
        },
        {
          question:
            'هل يمكن تغيير المدرس بعد الحصة الأولى؟',
          answer:
            'نعم. يمكن لولي الأمر طلب مراجعة. يراعي الفريق السبب وتجربة الحصة والبدائل المتاحة قبل تنسيق الخطوة التالية.',
        },
        {
          question:
            'هل يضمن اختيار المدرس تحسن الدرجات؟',
          answer:
            'لا. لا تستطيع الأكاديمية ضمان درجة أو نتيجة محددة. يعتمد التقدم على الحضور والمشاركة والتدريب ومتطلبات المدرسة ومستوى الطالب الأولي وعوامل أخرى.',
        },
      ],
    },

    related: {
      heading: 'صفحات مرتبطة',
      items: [
        {
          title: 'عن Success Path Mentors',
          description:
            'تعرّف على هدف الأكاديمية وقيمها ونموذج التدريس وطريقة العمل على الجودة.',
          href: '/ar/about',
          label: 'تعرّف على الأكاديمية',
        },
        {
          title: 'كيف تعمل الدروس؟',
          description:
            'شاهد العملية الكاملة من طلب الأسرة الأول إلى الحصص المستمرة أونلاين.',
          href: '/ar/how-it-works',
          label: 'شاهد خطوات العمل',
        },
      ],
    },

    cta: {
      eyebrow: 'ساعدنا على اختيار أفضل',
      title:
        'شارك مادة الطالب وهدفه ولغته والوقت المناسب',
      description:
        'كلما وصف الطلب احتياج الطالب الحالي بوضوح، أصبح من الأسهل مراجعة الملاءمة الأكاديمية والتواصلية والعملية.',
      primaryAction: 'استعرض خيارات التدريس',
      secondaryAction: 'كيف تعمل الدروس؟',
    },

    schema: {
      serviceName:
        'اختيار المدرس المناسب أونلاين',
      serviceType:
        'اختيار المدرس وتنسيق الدروس الفردية أونلاين',
    },
  },
} satisfies Record<
  'en' | 'ar',
  TutorMatchingPageContent
>;
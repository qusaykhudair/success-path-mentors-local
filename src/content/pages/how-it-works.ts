import {
  BookOpenCheck,
  CalendarClock,
  ClipboardList,
  FileCheck2,
  MessageSquarePlus,
  RefreshCw,
  UserRoundCheck,
  Video,
} from 'lucide-react';

import type {
  FaqItem,
  FeatureItem,
  PageHighlight,
  ProcessStep,
} from '@/types/internal-page';

interface HowItWorksPageContent {
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

  introduction: {
    eyebrow: string;
    title: string;
    description: string;
  };

  process: {
    eyebrow: string;
    title: string;
    description: string;
    items: ProcessStep[];
  };

  preparation: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
  };

  lesson: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
  };

  followUp: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
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

export const howItWorksPageContent = {
  en: {
    seo: {
      title:
        'How Online Tutoring Works | Mustafa Academy',
      description:
        'See how Mustafa Academy learns about the student, matches an appropriate tutor, coordinates the schedule, and supports ongoing one-to-one online learning.',
    },

    breadcrumbs: {
      home: 'Home',
      current: 'How It Works',
      ariaLabel: 'Breadcrumb',
    },

    hero: {
      eyebrow: 'How it works',
      title:
        'A clear path from the first request to ongoing tutoring',
      description:
        'We begin by understanding the student’s grade, subject, curriculum, learning goal, preferred language, and availability. The team then coordinates an appropriate tutor and a suitable lesson time.',
      primaryAction: 'View the six-step process',
      secondaryAction: 'Learn about the academy',
      highlights: [
        {
          value: 'Student information first',
          label:
            'The matching process begins with the student’s real academic need.',
        },
        {
          value: 'Thoughtful tutor matching',
          label:
            'Subject knowledge, grade, communication, language, and availability are considered.',
        },
        {
          value: 'Review and adjustment',
          label:
            'Families can share feedback and request a review when the fit needs to change.',
        },
      ],
    },

    introduction: {
      eyebrow: 'Simple and guided',
      title:
        'The family does not have to navigate the process alone',
      description:
        'Our team coordinates the main steps: collecting the student’s information, reviewing the request, selecting an available tutor, confirming the schedule, and following up after the first lesson.',
    },

    process: {
      eyebrow: 'Step by step',
      title:
        'How a student begins with Mustafa Academy',
      description:
        'The process is designed to stay practical and transparent while giving the team enough information to make a responsible tutoring match.',
      items: [
        {
          title: 'Share the student’s details',
          description:
            'Provide the grade, subject, curriculum or school system, preferred language, learning goal, and available times.',
        },
        {
          title: 'Clarify the learning need',
          description:
            'The team reviews whether the student needs foundational support, homework guidance, exam preparation, skill development, or help with a specific topic.',
        },
        {
          title: 'Match an appropriate tutor',
          description:
            'The tutor is considered according to subject knowledge, experience with the grade level, communication style, language, and schedule.',
        },
        {
          title: 'Confirm the lesson time',
          description:
            'The family and the academy agree on a suitable time and receive the information needed to join the online lesson.',
        },
        {
          title: 'Complete the first lesson',
          description:
            'The tutor begins by understanding the student’s current level, explaining the target concept, and observing how the student responds to the teaching approach.',
        },
        {
          title: 'Review and continue',
          description:
            'The family can provide feedback. When the fit is suitable, the team coordinates the ongoing schedule and package. When changes are needed, the request is reviewed.',
        },
      ],
    },

    preparation: {
      eyebrow: 'Before the first lesson',
      title:
        'A few details help make the first session more useful',
      description:
        'The more accurately the family describes the student’s current situation, the easier it is to prepare a relevant lesson and choose an appropriate tutor.',
      items: [
        {
          title: 'Grade, subject, and curriculum',
          description:
            'Share the student’s current grade and the curriculum, province, state, country, or school program when known.',
          icon: ClipboardList,
        },
        {
          title: 'Current material',
          description:
            'When helpful, send the topic, textbook pages, assignment, teacher notes, or upcoming assessment information before the lesson.',
          icon: FileCheck2,
        },
        {
          title: 'Availability and time zone',
          description:
            'Provide more than one suitable time when possible and confirm the family’s time zone to avoid scheduling confusion.',
          icon: CalendarClock,
        },
      ],
    },

    lesson: {
      eyebrow: 'During the lesson',
      title:
        'The tutor teaches, guides, and checks understanding',
      description:
        'A one-to-one lesson allows the tutor to adjust explanations and practice to the student rather than delivering the same lesson to a large group.',
      items: [
        {
          title: 'Explain the concept',
          description:
            'The tutor breaks the topic into understandable steps and uses examples suited to the student’s level.',
          icon: BookOpenCheck,
        },
        {
          title: 'Guide active practice',
          description:
            'The student is encouraged to think, answer, solve, read, write, or explain rather than only watch the tutor.',
          icon: Video,
        },
        {
          title: 'Check understanding',
          description:
            'The tutor asks questions, reviews attempts, identifies errors, and adjusts the pace when the student needs more support.',
          icon: UserRoundCheck,
        },
      ],
    },

    followUp: {
      eyebrow: 'After the lesson',
      title:
        'The plan can continue, improve, or change',
      description:
        'The first lesson is also an opportunity to review tutor fit, communication, pace, and the student’s response before confirming the next stage.',
      items: [
        {
          title: 'Family feedback',
          description:
            'A parent or guardian can share comments about the lesson, scheduling, communication, or the student’s experience.',
          icon: MessageSquarePlus,
        },
        {
          title: 'Ongoing schedule',
          description:
            'When the fit is suitable, the academy coordinates the agreed lesson frequency and confirms the applicable package or payment arrangement.',
          icon: CalendarClock,
        },
        {
          title: 'Tutor or plan adjustment',
          description:
            'When the approach, time, or tutor is not suitable, the team reviews the request and coordinates an available alternative where possible.',
          icon: RefreshCw,
        },
      ],
    },

    faq: {
      eyebrow: 'Common questions',
      title:
        'Starting and continuing lessons',
      description:
        'Answers to practical questions families often ask before beginning online tutoring.',
      items: [
        {
          question:
            'What information should I provide before the first lesson?',
          answer:
            'Please provide the student’s grade, subject, curriculum or school system, learning goal, preferred language, time zone, and suitable times. Relevant assignments, textbook pages, or assessment information can also help the tutor prepare.',
        },
        {
          question:
            'How is the tutor selected?',
          answer:
            'The team considers the requested subject, grade level, curriculum context, language, teaching experience, communication style, availability, and the information provided about the student.',
        },
        {
          question:
            'Is the first lesson an assessment?',
          answer:
            'The first lesson can include informal observation of the student’s level and needs, but it is also a real teaching session. The exact format depends on the subject, grade, and goal.',
        },
        {
          question:
            'What happens if the tutor is not a good fit?',
          answer:
            'A parent or guardian can contact the academy and explain the concern. The team will review the feedback and coordinate a reasonable next step based on tutor availability and the circumstances.',
        },
        {
          question:
            'How often should the student attend?',
          answer:
            'The suitable frequency depends on the student’s goal, current level, school workload, and available schedule. Consistent attendance generally supports continuity, but the final schedule is agreed with the family.',
        },
        {
          question:
            'Can the tutor help with homework and exams?',
          answer:
            'Yes. The tutor can explain concepts, guide practice, review the student’s work, and support preparation. The tutor does not complete graded work or take an assessment on behalf of the student.',
        },
      ],
    },

    cta: {
      eyebrow: 'Begin with the right information',
      title:
        'Share the student’s needs and preferred schedule',
      description:
        'Tell the team the grade, subject, learning goal, language, time zone, and available times. This gives us a clear starting point for the tutoring request.',
      primaryAction: 'View tutoring options',
      secondaryAction: 'About Mustafa Academy',
    },
  },

  ar: {
    seo: {
      title:
        'كيف تعمل الدروس أونلاين | أكاديمية مصطفى',
      description:
        'تعرّف على خطوات بدء الدروس في أكاديمية مصطفى، من فهم احتياج الطالب واختيار المدرس المناسب إلى تنسيق الموعد والمتابعة بعد الحصة الأولى.',
    },

    breadcrumbs: {
      home: 'الرئيسية',
      current: 'كيف تعمل الأكاديمية',
      ariaLabel: 'مسار التنقل',
    },

    hero: {
      eyebrow: 'كيف تعمل الأكاديمية',
      title:
        'مسار واضح من الطلب الأول إلى الدروس المستمرة',
      description:
        'نبدأ بفهم صف الطالب ومادته ومنهجه وهدفه التعليمي واللغة المفضلة والأوقات المناسبة. بعد ذلك ينسق الفريق مدرسًا ملائمًا وموعدًا مناسبًا للحصة.',
      primaryAction: 'شاهد الخطوات الست',
      secondaryAction: 'تعرّف على الأكاديمية',
      highlights: [
        {
          value: 'معلومات الطالب أولًا',
          label:
            'تبدأ عملية الاختيار من الاحتياج الأكاديمي الحقيقي للطالب.',
        },
        {
          value: 'اختيار مدروس للمدرس',
          label:
            'تُراعى المادة والصف والتواصل واللغة والتوفر.',
        },
        {
          value: 'مراجعة وتعديل',
          label:
            'يمكن للأسرة مشاركة ملاحظاتها وطلب مراجعة الملاءمة عند الحاجة.',
        },
      ],
    },

    introduction: {
      eyebrow: 'عملية بسيطة وموجّهة',
      title:
        'لا تحتاج الأسرة إلى إدارة جميع الخطوات وحدها',
      description:
        'ينسق فريقنا المراحل الرئيسية: جمع معلومات الطالب، ومراجعة الطلب، واختيار مدرس متوفر، وتأكيد الموعد، والمتابعة بعد الحصة الأولى.',
    },

    process: {
      eyebrow: 'خطوة بخطوة',
      title:
        'كيف يبدأ الطالب مع أكاديمية مصطفى؟',
      description:
        'تم تصميم العملية لتكون عملية وواضحة، مع توفير معلومات كافية تساعد الفريق على اتخاذ قرار مسؤول في اختيار المدرس.',
      items: [
        {
          title: 'شارك معلومات الطالب',
          description:
            'أرسل الصف والمادة والمنهج أو النظام المدرسي واللغة المفضلة والهدف التعليمي والأوقات المتاحة.',
        },
        {
          title: 'وضّح الاحتياج التعليمي',
          description:
            'يراجع الفريق ما إذا كان الطالب يحتاج إلى تقوية الأساسيات أو مساعدة في الواجبات أو استعداد للاختبار أو تطوير مهارة أو شرح موضوع محدد.',
        },
        {
          title: 'اختيار مدرس مناسب',
          description:
            'تُراعى معرفة المدرس بالمادة وخبرته مع الصف وطريقة تواصله واللغة والأوقات المتاحة.',
        },
        {
          title: 'تأكيد موعد الحصة',
          description:
            'تتفق الأسرة مع الأكاديمية على وقت مناسب، وتتلقى المعلومات اللازمة للدخول إلى الحصة أونلاين.',
        },
        {
          title: 'تنفيذ الحصة الأولى',
          description:
            'يبدأ المدرس بفهم المستوى الحالي للطالب وشرح المفهوم المستهدف وملاحظة استجابة الطالب لطريقة التدريس.',
        },
        {
          title: 'المراجعة والاستمرار',
          description:
            'يمكن للأسرة مشاركة ملاحظاتها. وعند ملاءمة المدرس، ينسق الفريق الجدول المستمر والباقـة. وعند الحاجة إلى تعديل، تتم مراجعة الطلب.',
        },
      ],
    },

    preparation: {
      eyebrow: 'قبل الحصة الأولى',
      title:
        'بعض التفاصيل تجعل الجلسة الأولى أكثر فائدة',
      description:
        'كلما وصفت الأسرة وضع الطالب بدقة، أصبح من الأسهل تجهيز حصة مرتبطة باحتياجه واختيار مدرس مناسب.',
      items: [
        {
          title: 'الصف والمادة والمنهج',
          description:
            'شارك الصف الحالي للطالب والمنهج أو المقاطعة أو الولاية أو الدولة أو البرنامج المدرسي عندما تكون هذه المعلومات متوفرة.',
          icon: ClipboardList,
        },
        {
          title: 'المادة الدراسية الحالية',
          description:
            'عند الحاجة، أرسل الموضوع أو صفحات الكتاب أو الواجب أو ملاحظات المعلم أو معلومات الاختبار القادم قبل الحصة.',
          icon: FileCheck2,
        },
        {
          title: 'الأوقات والمنطقة الزمنية',
          description:
            'يفضل تقديم أكثر من وقت مناسب وتأكيد المنطقة الزمنية للأسرة لتجنب أي التباس في المواعيد.',
          icon: CalendarClock,
        },
      ],
    },

    lesson: {
      eyebrow: 'أثناء الحصة',
      title:
        'يشرح المدرس ويوجّه ويتحقق من الفهم',
      description:
        'تسمح الحصة الفردية للمدرس بتعديل الشرح والتدريب وفق الطالب، بدل تقديم الدرس نفسه لمجموعة كبيرة.',
      items: [
        {
          title: 'شرح المفهوم',
          description:
            'يقسم المدرس الموضوع إلى خطوات واضحة، ويستخدم أمثلة مناسبة لمستوى الطالب.',
          icon: BookOpenCheck,
        },
        {
          title: 'تدريب نشط وموجّه',
          description:
            'يتم تشجيع الطالب على التفكير والإجابة والحل والقراءة والكتابة والشرح، بدل الاكتفاء بمشاهدة المدرس.',
          icon: Video,
        },
        {
          title: 'التحقق من الفهم',
          description:
            'يطرح المدرس أسئلة ويراجع المحاولات ويحدد الأخطاء ويعدل سرعة الحصة عندما يحتاج الطالب إلى دعم إضافي.',
          icon: UserRoundCheck,
        },
      ],
    },

    followUp: {
      eyebrow: 'بعد الحصة',
      title:
        'يمكن للخطة أن تستمر أو تتحسن أو تتغير',
      description:
        'تمنح الحصة الأولى فرصة لمراجعة ملاءمة المدرس وطريقة التواصل وسرعة الشرح واستجابة الطالب قبل تأكيد المرحلة التالية.',
      items: [
        {
          title: 'ملاحظات الأسرة',
          description:
            'يمكن لولي الأمر مشاركة الملاحظات حول الحصة أو الموعد أو التواصل أو تجربة الطالب.',
          icon: MessageSquarePlus,
        },
        {
          title: 'الجدول المستمر',
          description:
            'عند ملاءمة المدرس، تنسق الأكاديمية عدد الحصص المتفق عليه وتؤكد الباقة أو ترتيب الدفع المطبق.',
          icon: CalendarClock,
        },
        {
          title: 'تعديل المدرس أو الخطة',
          description:
            'عندما لا يكون الأسلوب أو الوقت أو المدرس مناسبًا، يراجع الفريق الطلب وينسق بديلًا متوفرًا عندما يكون ذلك ممكنًا.',
          icon: RefreshCw,
        },
      ],
    },

    faq: {
      eyebrow: 'أسئلة شائعة',
      title:
        'بدء الحصص والاستمرار فيها',
      description:
        'إجابات عن الأسئلة العملية التي تطرحها الأسر عادة قبل بدء التدريس أونلاين.',
      items: [
        {
          question:
            'ما المعلومات التي يجب إرسالها قبل الحصة الأولى؟',
          answer:
            'يرجى إرسال صف الطالب ومادته ومنهجه أو نظامه المدرسي وهدفه التعليمي واللغة المفضلة والمنطقة الزمنية والأوقات المناسبة. كما تساعد الواجبات أو صفحات الكتاب أو معلومات الاختبار في تجهيز الحصة.',
        },
        {
          question:
            'كيف يتم اختيار المدرس؟',
          answer:
            'يراعي الفريق المادة المطلوبة والصف والمنهج واللغة وخبرة التدريس وطريقة التواصل والتوفر والمعلومات المقدمة عن الطالب.',
        },
        {
          question:
            'هل الحصة الأولى عبارة عن تقييم؟',
          answer:
            'قد تتضمن الحصة الأولى ملاحظة غير رسمية لمستوى الطالب واحتياجاته، لكنها تكون أيضًا حصة تعليمية حقيقية. ويعتمد شكلها على المادة والصف والهدف.',
        },
        {
          question:
            'ماذا يحدث إذا لم يكن المدرس مناسبًا؟',
          answer:
            'يمكن لولي الأمر التواصل مع الأكاديمية وشرح الملاحظة. يراجع الفريق التغذية الراجعة وينسق خطوة معقولة وفق توفر المدرسين وظروف الحالة.',
        },
        {
          question:
            'كم مرة يجب أن يحضر الطالب؟',
          answer:
            'يعتمد العدد المناسب على هدف الطالب ومستواه الحالي وواجباته المدرسية والجدول المتاح. يساعد الحضور المنتظم عادة على الاستمرارية، لكن الجدول النهائي يتم الاتفاق عليه مع الأسرة.',
        },
        {
          question:
            'هل يمكن للمدرس المساعدة في الواجبات والاختبارات؟',
          answer:
            'نعم. يستطيع المدرس شرح المفاهيم وتوجيه التدريب ومراجعة عمل الطالب ودعم الاستعداد. ولا يقوم المدرس بإنجاز العمل المقيم أو تقديم الاختبار بدل الطالب.',
        },
      ],
    },

    cta: {
      eyebrow: 'ابدأ بالمعلومات الصحيحة',
      title:
        'شارك احتياج الطالب والوقت المناسب',
      description:
        'أرسل الصف والمادة والهدف التعليمي واللغة والمنطقة الزمنية والأوقات المتاحة. تمنح هذه التفاصيل الفريق نقطة بداية واضحة لمراجعة الطلب.',
      primaryAction: 'استعرض خيارات التدريس',
      secondaryAction: 'عن أكاديمية مصطفى',
    },
  },
} satisfies Record<
  'en' | 'ar',
  HowItWorksPageContent
>;
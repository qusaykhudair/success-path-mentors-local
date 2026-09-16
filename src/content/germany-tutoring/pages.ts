import type { TutoringLocale, TutoringPageContent } from './types';

export const CEFR_DISCLAIMER: Record<TutoringLocale, string> = {
  en: 'Success Path Mentors uses CEFR levels as a reference to help identify a learner’s current language ability and organize appropriate tutoring support. We do not issue official CEFR certificates or accredited language qualifications.',
  de: 'Success Path Mentors nutzt den GER (Gemeinsamen Europäischen Referenzrahmen) ausschließlich als Orientierungsmaßstab zur Feststellung des aktuellen Leistungsstands und für die zielgerichtete Nachhilfeplanung. Wir stellen keine offiziellen GER-Zertifikate oder staatlich akkreditierten Sprachabschlüsse aus.',
  ar: 'تستخدم Success Path Mentors مستويات الإطار الأوروبي المشترك (CEFR) كمرجع تقريبي لتحديد المستوى الحالي للمتعلم وتنظيم خطة التدريس المناسبة. نحن لا نصدر شهادات لغة رسمية أو مؤهلات أكاديمية معتمدة.',
};

export const TUTORING_PAGES: Record<string, Record<TutoringLocale, TutoringPageContent>> = {
  // ==========================================
  // FORMAT 1: ONE-TO-ONE
  // ==========================================
  'tutoring/one-to-one': {
    en: {
      slug: 'tutoring/one-to-one',
      category: 'format',
      serviceId: 'one-to-one',
      seo: {
        title: 'Personal One-to-One Tutoring | Success Path Mentors Europe',
        description: 'Private 1-to-1 online tutoring tailored to your pace, level, and goals. Individualized lesson plans and dedicated tutor matching across Europe and Germany.',
        keywords: ['private tutoring', 'one-to-one tutoring', 'online tutor Germany', 'individual learning support', 'personal tutor'],
      },
      hero: {
        badge: 'Maximum Personalization',
        title: 'Personal One-to-One Tutoring',
        headline: 'One Student. One Teacher. One Plan Built Around You.',
        subheadline: 'Private online tutoring designed specifically around the learner’s exact level, learning style, and school curriculum. Focused attention, rapid progress, and flexible scheduling.',
        primaryCta: 'Book a Free Trial',
        secondaryCta: 'Find My Teacher',
      },
      highlightsTitle: 'Why Choose One-to-One Tutoring?',
      highlightsSubheadline: 'Every lesson is 100% focused on one student’s immediate questions and long-term academic goals.',
      highlights: [
        {
          title: 'Dedicated Tutor Matching',
          description: 'We match the learner with a qualified, screened tutor suited to their personality, subject need, and pace.',
          iconName: 'user',
        },
        {
          title: 'Customized Tutoring Plan',
          description: 'Diagnostic assessment identifies exact knowledge gaps, creating a clear step-by-step roadmap.',
          iconName: 'target',
        },
        {
          title: 'Learner-Specific Pace',
          description: 'No rushing or waiting. Difficult concepts are reinforced until fully understood and mastered.',
          iconName: 'clock',
        },
        {
          title: 'Direct Feedback & Follow-up',
          description: 'Regular progress summaries keep parents and adult learners informed after every milestone.',
          iconName: 'book',
        },
        {
          title: 'School & Homework Support',
          description: 'Assistance with current school assignments, upcoming classroom exams, and confidence-building.',
          iconName: 'sparkles',
        },
        {
          title: 'Flexible Scheduling',
          description: 'Lessons fit family schedules, with simple rescheduling coordination through our support team.',
          iconName: 'calendar',
        },
      ],
      curriculumTitle: 'Areas Covered in 1-to-1 Tutoring',
      curriculumSubheadline: 'Available for school subjects, language reinforcement, and targeted exam preparation.',
      curriculumPillars: [
        {
          title: 'School Subjects',
          badge: 'Grades 1–12',
          items: ['Mathematics & Science', 'School German & English', 'Homework completion & check', 'Exam preparation & test strategy'],
        },
        {
          title: 'Language Development',
          badge: 'All Levels',
          items: ['German, English, French & Arabic', 'Speaking fluency & pronunciation', 'Grammar recovery & sentence structure', 'Academic writing & vocabulary expansion'],
        },
        {
          title: 'Skill Recovery',
          badge: 'Targeted',
          items: ['Bridging school learning gaps', 'Study skills & note-taking habits', 'Overcoming test anxiety', 'Confidence in classroom participation'],
        },
      ],
      faqs: [
        {
          question: 'How does 1-to-1 tutor matching work?',
          answer: 'We review the learner’s grade, subject, current challenges, and goals during the initial consultation. We then match them with a vetted tutor specialized in that area.',
        },
        {
          question: 'Can we switch tutors if the chemistry is not ideal?',
          answer: 'Yes. Our managed service ensures that if for any reason the match is not a perfect fit, our team coordinates a smooth tutor replacement at no extra charge.',
        },
        {
          question: 'What platform is used for lessons?',
          answer: 'Lessons take place online via modern interactive video platforms with virtual whiteboards, screen-sharing, and interactive exercise sheets.',
        },
      ],
    },
    de: {
      slug: 'tutoring/one-to-one',
      category: 'format',
      serviceId: 'one-to-one',
      seo: {
        title: 'Individuelle Einzelnachhilfe | Success Path Mentors Europe',
        description: 'Private 1-zu-1 Online-Nachhilfe, exakt abgestimmt auf Ihr Tempo, Niveau und Ihre Ziele. Gezielte Lehrerauswahl und persönliche Betreuung in Deutschland und Europa.',
        keywords: ['Einzelnachhilfe', '1 zu 1 Nachhilfe', 'Online Nachhilfe Deutschland', 'Privatunterricht', 'Schulnachhilfe'],
      },
      hero: {
        badge: 'Höchste Individualität',
        title: 'Individuelle Einzelnachhilfe',
        headline: 'Ein Schüler. Ein Lehrer. Ein individueller Plan.',
        subheadline: 'Private Online-Nachhilfe, maßgeschneidert auf das konkrete Leistungsniveau, den Lerntyp und den Lehrplan. Ungeteilte Aufmerksamkeit für schnelle Lernerfolge.',
        primaryCta: 'Kostenlose Probestunde buchen',
        secondaryCta: 'Passenden Lehrer finden',
      },
      highlightsTitle: 'Vorteile der 1-zu-1 Nachhilfe',
      highlightsSubheadline: 'Jede Unterrichtsstunde konzentriert sich zu 100 % auf die individuellen Fragen und schulischen Ziele des Schülers.',
      highlights: [
        {
          title: 'Persönliche Lehrerauswahl',
          description: 'Sorgfältige Zuteilung einer qualifizierten Lehrkraft, die optimal zum Lernprofil und Fachbedarf passt.',
          iconName: 'user',
        },
        {
          title: 'Maßgeschneiderter Förderplan',
          description: 'Gezielte Diagnose identifiziert Wissenslücken und bildet die Grundlage für einen klaren Lernplan.',
          iconName: 'target',
        },
        {
          title: 'Individuelles Lerntempo',
          description: 'Kein Zeitdruck: Schwierige Themen werden wiederholt und vertieft, bis sie sicher beherrscht werden.',
          iconName: 'clock',
        },
        {
          title: 'Regelmäßiges Feedback',
          description: 'Transparente Rückmeldungen und Berichte halten Eltern und Lernende stets über Fortschritte auf dem Laufenden.',
          iconName: 'book',
        },
        {
          title: 'Hausaufgaben- & Prüfungshilfe',
          description: 'Konkrete Unterstützung bei aktuellen Schulaufgaben, Referaten und bevorstehenden Klassenarbeiten.',
          iconName: 'sparkles',
        },
        {
          title: 'Flexible Unterrichtszeiten',
          description: 'Unterrichtstermine lassen sich unkompliziert in den Familienalltag integrieren und abstimmen.',
          iconName: 'calendar',
        },
      ],
      curriculumTitle: 'Schwerpunkte der Einzelnachhilfe',
      curriculumSubheadline: 'Verfügbar für Schulfächer, Sprachförderung und gezielte Prüfungsvorbereitung.',
      curriculumPillars: [
        {
          title: 'Schulfächer',
          badge: 'Klassen 1–12',
          items: ['Mathematik & Naturwissenschaften', 'Deutsch & Englisch für die Schule', 'Hausaufgabenkontrolle & Vertiefung', 'Vorbereitung auf Klassenarbeiten'],
        },
        {
          title: 'Sprachförderung',
          badge: 'Alle Stufen',
          items: ['Deutsch, Englisch, Französisch & Arabisch', 'Sprechflüssigkeit & Aussprache', 'Grammatikverständnis & Textarbeit', 'Wortschatzaufbau für Schule & Alltag'],
        },
        {
          title: 'Lücken schließen',
          badge: 'Gezielt',
          items: ['Aufholen verpasster Unterrichtsinhalte', 'Lerntechniken & Arbeitsorganisation', 'Abbau von Prüfungsängsten', 'Stärkung der mündlichen Beteiligung'],
        },
      ],
      faqs: [
        {
          question: 'Wie funktioniert die Lehrerauswahl für 1-zu-1?',
          answer: 'Im Erstgespräch erfassen wir Klasse, Fach, Schwachstellen und Lernziele. Daraufhin wählen wir eine passende, überprüfte Lehrkraft aus.',
        },
        {
          question: 'Kann die Lehrkraft gewechselt werden, falls es nicht harmoniert?',
          answer: 'Selbstverständlich. Unser Betreuungsteam koordiniert bei Bedarf einen reibungslosen und kostenfreien Wechsel.',
        },
        {
          question: 'Über welches Tool findet der Unterricht statt?',
          answer: 'Der Unterricht findet online über moderne Videoplattformen mit digitalem Whiteboard, Bildschirmfreigabe und interaktiven Arbeitsblättern statt.',
        },
      ],
    },
    ar: {
      slug: 'tutoring/one-to-one',
      category: 'format',
      serviceId: 'one-to-one',
      seo: {
        title: 'دروس فردية خاصة (واحد لواحد) | Success Path Mentors Europe',
        description: 'دروس خصوصية فردية عبر الإنترنت مخصصة بالكامل لمستوى الطالب وسرعته وأهدافه. معلم مخصص ومتابعة دورية في ألمانيا وأوروبا.',
        keywords: ['دروس خصوصية فردية', 'معلم خاص أونلاين', 'دروس تقوية ألمانيا', 'دعم دراسي فردي', 'تعليم شخصي'],
      },
      hero: {
        badge: 'أعلى درجات التخصيص والاهتمام',
        title: 'دروس فردية خاصة (واحد لواحد)',
        headline: 'طالب واحد. معلم واحد. خطة تعليمية مخصصة بالكامل.',
        subheadline: 'تعليم تفاعلي مباشر مصمم خصيصاً ليناسب مستوى الطالب وسرعته ومنهجه المدرسي. تركيز مطلق وتقدم ملحوظ وجداول مرنة تلائم عائلتك.',
        primaryCta: 'احجز حصة تجريبية مجانية',
        secondaryCta: 'اختر معلمك المناسب',
      },
      highlightsTitle: 'لماذا تختار التدريس الفردي الخاص؟',
      highlightsSubheadline: 'كل دقيقة في الحصة مكرسة بالكامل للإجابة عن تساؤلات الطالب وسد ثغراته الدراسية.',
      highlights: [
        {
          title: 'مطابقة دقيقة للمعلم',
          description: 'نختار معلماً متخصصاً ومعتمداً يتوافق مع شخصية الطالب واحتياجاته المحددة.',
          iconName: 'user',
        },
        {
          title: 'خطة دعم شخصية',
          description: 'تحديد دقيق للفجوات التعليمية من خلال تقييم مبدئي لرسم خارطة طريق واضحة.',
          iconName: 'target',
        },
        {
          title: 'سرعة تلائم الطالب',
          description: 'لا تسرع ولا إبطاء؛ يعاد شرح المفاهيم المعقدة حتى يتأكد المعلم من استيعابها التام.',
          iconName: 'clock',
        },
        {
          title: 'متابعة دورية وتقارير مستمرة',
          description: 'نشارك أولياء الأمور تقارير تقدم دورية لاطلاعهم على التطور الدراسي أولاً بأول.',
          iconName: 'book',
        },
        {
          title: 'دعم الواجبات والامتحانات',
          description: 'مساعدة يومية في إنجاز الواجبات المنزلية والاستعداد المنهجي للاختبارات الصفية.',
          iconName: 'sparkles',
        },
        {
          title: 'مرونة كاملة في المواعيد',
          description: 'أوقات دروس مرنة تلائم جدول الأسرة، مع سهولة إعادة الجدولة عبر فريق التنسيق.',
          iconName: 'calendar',
        },
      ],
      curriculumTitle: 'مجالات التدريس في الحصص الفردية',
      curriculumSubheadline: 'متاحة لجميع المواد الدراسية، وتقوية اللغات، والاستعداد المكثف للامتحانات.',
      curriculumPillars: [
        {
          title: 'المناهج المدرسية',
          badge: 'الصفوف 1–12',
          items: ['الرياضيات والعلوم', 'اللغة الألمانية والإنجليزية للمدارس', 'متابعة وحل الواجبات المدرسية', 'التحضير للاختبارات الفصلية'],
        },
        {
          title: 'تطوير اللغات',
          badge: 'كافة المستويات',
          items: ['الألمانية والإنجليزية والفرنسية والعربية', 'الطلاقة الشفوية والنطق السليم', 'قواعد اللغة وبناء الجمل الصحيحة', 'تنمية المفردات والكتابة السليمة'],
        },
        {
          title: 'سد الفجوات التعليمية',
          badge: 'دعم نوعي',
          items: ['تعويض ما فات الطالب من موضوعات', 'اكتساب عادات دراسية وتنظيمية فعالة', 'التغلب على قلق الامتحانات', 'تعزيز الثقة بالنفس والمشاركة الصفية'],
        },
      ],
      faqs: [
        {
          question: 'كيف تتم عملية اختيار وتعيين المعلم المناسب؟',
          answer: 'نقوم في الاستشارة الأولية بدراسة صف الطالب، والتحديات التي يواجهها، وأهدافه. بناءً على ذلك نحدد المعلم الأكثر كفاءة وخبرة.',
        },
        {
          question: 'هل يمكن استبدال المعلم إذا لم يكن التوافق مناسباً؟',
          answer: 'نعم بالتأكيد. يضمن فريق التنسيق لدينا استبدال المعلم بكل سلاسة وبدون أي تكاليف إضافية لضمان راحة الطالب.',
        },
        {
          question: 'ما هي المنصة المستخدمة في تقديم الحصص؟',
          answer: 'تتم الدروس عبر منصات فيديو تفاعلية حديثة ومزودة بسبورة رقمية ومشاركة للشاشة وتطبيقات تفاعلية تسهل الفهم والتطبيق.',
        },
      ],
    },
  },

  // ==========================================
  // FORMAT 2: SMALL GROUPS (UP TO 3)
  // ==========================================
  'tutoring/small-groups': {
    en: {
      slug: 'tutoring/small-groups',
      category: 'format',
      serviceId: 'small-group',
      seo: {
        title: 'Smart Small Groups (Up to 3) | Success Path Mentors Europe',
        description: 'Interactive online tutoring in smart micro-groups of up to 3 learners. Matched by level and goal. High teacher interaction, peer motivation, and smarter value.',
        keywords: ['small group tutoring', 'group lessons online', 'tutoring 3 students', 'collaborative learning', 'affordable tutoring Europe'],
      },
      hero: {
        badge: 'Max 3 Learners per Group',
        title: 'Smart Small Groups — Up to 3 Learners',
        headline: 'Learn Together. Pay Less. Still Get Personal Attention.',
        subheadline: 'Live interactive tutoring with carefully matched peers. A maximum of three students per group ensures strong teacher interaction, active participation, and smarter value.',
        primaryCta: 'Join a Small Group',
        secondaryCta: 'Create a Group of 3',
      },
      highlightsTitle: 'The Power of Smart Micro-Groups',
      highlightsSubheadline: 'Unlike large online classrooms, our cap of 3 students preserves deep individual teacher attention.',
      highlights: [
        {
          title: 'Strictly Maximum 3 Learners',
          description: 'Every student speaks, solves problems, and receives direct teacher coaching in every session.',
          iconName: 'users',
        },
        {
          title: 'Matched by Level & Goal',
          description: 'Students are grouped with peers of similar current ability and identical curriculum focus.',
          iconName: 'target',
        },
        {
          title: 'Smarter Value per Learner',
          description: 'Premium quality instruction at a more accessible rate compared to private one-to-one lessons.',
          iconName: 'award',
        },
        {
          title: 'Peer Motivation & Discussion',
          description: 'Students learn from each other’s questions, participate in collaborative exercises, and build confidence.',
          iconName: 'sparkles',
        },
        {
          title: 'Ideal for Friends & Siblings',
          description: 'Form a dedicated group of 3 with classmates or family members on a customized schedule.',
          iconName: 'compass',
        },
        {
          title: 'Individual Progress Checks',
          description: 'Tutors monitor individual comprehension so no single learner is ever left behind.',
          iconName: 'book',
        },
      ],
      curriculumTitle: 'Subjects Available in Micro-Groups',
      curriculumSubheadline: 'Available for core school subjects and conversational language development.',
      curriculumPillars: [
        {
          title: 'Language Practice',
          badge: 'Up to 3',
          items: ['German conversation & grammar practice', 'English fluency & school reinforcement', 'French speaking & exercise drills', 'Arabic conversation & reading groups'],
        },
        {
          title: 'School Subjects',
          badge: 'Up to 3',
          items: ['Mathematics problem solving & exercises', 'Science concepts & homework support', 'Exam preparation & question reviews', 'Collaborative revision sessions'],
        },
      ],
      faqs: [
        {
          question: 'What is the maximum number of students in a small group?',
          answer: 'Strictly 3 students. We believe larger groups compromise personal attention and speaking time. With 3 learners, the tutor engages each student directly.',
        },
        {
          question: 'Can I create a group with friends or siblings?',
          answer: 'Yes! You can register together as a group of 2 or 3 learners with similar goals and schedule preferences.',
        },
        {
          question: 'What happens if learners in a group have different skill levels?',
          answer: 'Before assigning learners to a group, we assess their level to ensure everyone has a compatible baseline and target curriculum.',
        },
      ],
    },
    de: {
      slug: 'tutoring/small-groups',
      category: 'format',
      serviceId: 'small-group',
      seo: {
        title: 'Smarte Kleingruppen (bis zu 3) | Success Path Mentors Europe',
        description: 'Interaktive Online-Nachhilfe in Minigruppen von maximal 3 Lernenden. Hohe Lehrerinteraktion, gegenseitige Motivation und faires Preis-Leistungs-Verhältnis.',
        keywords: ['Kleingruppennachhilfe', 'Minigruppen Unterricht', 'Nachhilfe bis zu 3 Schüler', 'Gruppenunterricht online'],
      },
      hero: {
        badge: 'Maximal 3 Lernende',
        title: 'Smarte Kleingruppen — Bis zu 3 Lernende',
        headline: 'Gemeinsam lernen. Weniger zahlen. Persönliche Betreuung genießen.',
        subheadline: 'Live-Online-Unterricht in sorgfältig zusammengestellten Minigruppen von höchstens drei Schülern. Hohe Interaktion, lebendige Motivation und beste Betreuung.',
        primaryCta: 'Kleingruppe beitreten',
        secondaryCta: 'Eigene 3er-Gruppe gründen',
      },
      highlightsTitle: 'Die Vorteile unserer Minigruppen',
      highlightsSubheadline: 'Keine anonymen Großklassen: Maximal 3 Schüler garantieren kontinuierliche individuelle Ansprache.',
      highlights: [
        {
          title: 'Strikte Obergrenze von 3 Schülern',
          description: 'Jeder Lernende kommt aktiv zu Wort, stellt Fragen und erhält direktes Feedback der Lehrkraft.',
          iconName: 'users',
        },
        {
          title: 'Homogene Gruppenbildung',
          description: 'Teilnehmer werden nach gleichem Leistungsstand und identischen Lernzielen zugeteilt.',
          iconName: 'target',
        },
        {
          title: 'Spürbarer Preisvorteil',
          description: 'Günstiger pro Schüler als Einzelunterricht bei gleichbleibend hoher didaktischer Qualität.',
          iconName: 'award',
        },
        {
          title: 'Gegenseitige Motivation',
          description: 'Schüler lernen durch gemeinsame Übungen, regen sich gegenseitig an und überwinden Hemmungen.',
          iconName: 'sparkles',
        },
        {
          title: 'Ideal für Geschwister & Freunde',
          description: 'Schließen Sie sich mit Mitschülern zu einer festen 3er-Gruppe mit eigenem Zeitplan zusammen.',
          iconName: 'compass',
        },
        {
          title: 'Persönliche Lernerfolgskontrolle',
          description: 'Der Lehrer behält das Verständnis jedes einzelnen Schülers stets aufmerksam im Blick.',
          iconName: 'book',
        },
      ],
      curriculumTitle: 'Fächer in unseren Kleingruppen',
      curriculumSubheadline: 'Ideal für Sprachtraining und schulische Kernfächer.',
      curriculumPillars: [
        {
          title: 'Sprachförderung',
          badge: 'Bis zu 3',
          items: ['Deutscher Wortschatz & Konversation', 'Englisch Grammatik & Sprechübungen', 'Französisch Dialoge & Textverständnis', 'Arabisch Lese- & Sprechgruppen'],
        },
        {
          title: 'Schulfächer',
          badge: 'Bis zu 3',
          items: ['Mathematik Übungsgruppen & Aufgaben', 'Naturwissenschaften & Hausaufgabenhilfe', 'Gezielte Prüfungsvorbereitung', 'Strukturierte Stoffwiederholung'],
        },
      ],
      faqs: [
        {
          question: 'Wie viele Schüler sind maximal in einer Gruppe?',
          answer: 'Streng limitiert auf maximal 3 Schüler. Wir verzichten bewusst auf Großgruppen, damit die Lehrkraft auf jeden Schüler persönlich eingehen kann.',
        },
        {
          question: 'Kann ich eine Gruppe mit Freunden oder Geschwistern bilden?',
          answer: 'Ja, sehr gerne! Sie können sich direkt als 2er- oder 3er-Gruppe mit gemeinsamen Zielen und Wunschterminen anmelden.',
        },
        {
          question: 'Wie wird sichergestellt, dass die Schüler zusammenpassen?',
          answer: 'Vor Beginn führen wir eine kurze Einstufung durch, um sicherzustellen, dass alle Gruppenmitglieder ein ähnliches Niveau haben.',
        },
      ],
    },
    ar: {
      slug: 'tutoring/small-groups',
      category: 'format',
      serviceId: 'small-group',
      seo: {
        title: 'مجموعات صغيرة ذكية (حتى 3 طلاب) | Success Path Mentors Europe',
        description: 'دروس تفاعلية عبر الإنترنت في مجموعات مصغرة لا تتجاوز 3 طلاب. تفاعل قوي مع المعلم، تحفيز متبادل، وتكلفة اقتصادية ذكية.',
        keywords: ['مجموعات دراسية صغيرة', 'دروس تقوية جماعية', 'تعليم 3 طلاب فقط', 'مجموعات لغات أونلاين'],
      },
      hero: {
        badge: 'حد أقصى 3 طلاب فقط',
        title: 'مجموعات صغيرة ذكية — حتى 3 طلاب',
        headline: 'تعلّم مع أقرانك بتكلفة أقل مع الحفاظ على الاهتمام الفردي الكامل.',
        subheadline: 'دروس حية مباشرة في مجموعات مصغرة لا تتعدى 3 طلاب متقاربين في المستوى والهدف. تفاعل مباشر ونشاط متواصل وقيمة تعليمية استثنائية.',
        primaryCta: 'انضم إلى مجموعة صغيرة',
        secondaryCta: 'أنشئ مجموعة خاصة من 3 طلاب',
      },
      highlightsTitle: 'مزايا المجموعات المصغرة الذكية',
      highlightsSubheadline: 'نبتعد تماماً عن الفصول الكبيرة؛ الالتزام بـ 3 طلاب كحد أقصى يضمن بقاء اهتمام المعلم بكل طالب.',
      highlights: [
        {
          title: '3 طلاب كحد أقصى',
          description: 'يشارك كل طالب بفعالية ويتحدث ويحل التمارين مع إشراف وتوجيه مباشر ومستمر من المعلم.',
          iconName: 'users',
        },
        {
          title: 'تجانس المستويات والأهداف',
          description: 'يتم توزيع الطلاب وفق تقييم مبدئي لضمان تقارب المستوى الأكاديمي وسرعة الاستيعاب.',
          iconName: 'target',
        },
        {
          title: 'تكلفة اقتصادية ذكية',
          description: 'قيمة تعليمية عالية برسوم أقل لكل طالب مقارنة بالدروس الفردية الخاصة.',
          iconName: 'award',
        },
        {
          title: 'تحفيز جماعي وحوار ثري',
          description: 'يتعلم الطلاب من أسئلة بعضهم البعض، وتزداد الثقة بالنفس من خلال التطبيق التفاعلي.',
          iconName: 'sparkles',
        },
        {
          title: 'مثالية للأصدقاء والإخوة',
          description: 'يمكنك تكوين مجموعة مغلقة مكونة من 3 من أصدقاء الصف أو الأقارب وفق جدولكم المفضل.',
          iconName: 'compass',
        },
        {
          title: 'متابعة الفهم الفردي',
          description: 'يحرص المعلم على التحقق من استيعاب كل طالب على حدة في كل خطوة ومفهوم جديد.',
          iconName: 'book',
        },
      ],
      curriculumTitle: 'المواد والمجالات المتاحة في المجموعات',
      curriculumSubheadline: 'متاحة لتقوية اللغات والمواد الدراسية الأساسية.',
      curriculumPillars: [
        {
          title: 'ممارسة اللغات',
          badge: 'حتى 3 طلاب',
          items: ['محادثة وتطبيقات اللغة الألمانية', 'قواعد وتمارين اللغة الإنجليزية', 'حوارات ونصوص اللغة الفرنسية', 'جلسات القراءة والمحادثة باللغة العربية'],
        },
        {
          title: 'المواد المدرسية',
          badge: 'حتى 3 طلاب',
          items: ['حل مسائل وتدريبات الرياضيات', 'مفاهيم العلوم ومراجعة الواجبات', 'المراجعة المشتركة للاختبارات', 'تثبيت المفاهيم العلمية الأساسية'],
        },
      ],
      faqs: [
        {
          question: 'كم عدد الطلاب الفعلي في المجموعة الواحدة؟',
          answer: 'الحد الأقصى هو 3 طلاب بدقة وبدون أي استثناء. لا نؤمن بالفصول المزدحمة؛ 3 طلاب تمنح المعلم الوقت الكافي للتفاعل الفردي مع كل طالب.',
        },
        {
          question: 'هل يمكنني تسجيل مجموعة خاصة من أطفالي أو مع أصدقائهم؟',
          answer: 'نعم بالتأكيد! يمكنكم تشكيل مجموعة مخصصة من طالبين أو ثلاثة بجدول دراسي مرن يناسبكم.',
        },
        {
          question: 'كيف تتأكدون من ملاءمة مستوى الطلاب لبعضهم؟',
          answer: 'نجري تقييماً سريعاً لتحديد المستوى ونوع المنهج المدرسي لضمان انسجام المجموعة وسيرها بنفس الوتيرة.',
        },
      ],
    },
  },

  // ==========================================
  // FORMAT 3: LANGUAGE SUPPORT BY LEVEL
  // ==========================================
  'tutoring/language-levels': {
    en: {
      slug: 'tutoring/language-levels',
      category: 'format',
      serviceId: 'language-levels',
      showCefrDisclaimer: true,
      showPlacementCta: true,
      seo: {
        title: 'Language Support by Level | Success Path Mentors Europe',
        description: 'Level-based language tutoring across German, English, French, and Arabic. Diagnostic placement, CEFR reference levels (A1 to C2), and personalized progression plans.',
        keywords: ['language tutoring levels', 'CEFR language levels', 'A1 to C2 tutoring', 'placement assessment', 'language support Europe'],
      },
      hero: {
        badge: 'Diagnostic Progression',
        title: 'Language Support by Level',
        headline: 'Start at Your Level. Strengthen Your Language Step by Step.',
        subheadline: 'Structured language tutoring organized around your current proficiency and communicative goals. From foundational basics to advanced fluency, with clear milestones at every step.',
        primaryCta: 'Get My Level Recommendation',
        secondaryCta: 'Explore Language Options',
      },
      highlightsTitle: 'How Level-Based Tutoring Works',
      highlightsSubheadline: 'A 7-step pedagogical journey ensuring measurable confidence and language growth.',
      highlights: [
        {
          title: '1. Placement & Assessment',
          description: 'A brief, friendly diagnostic evaluation identifies speaking, listening, reading, and grammar ability.',
          iconName: 'compass',
        },
        {
          title: '2. Level Recommendation',
          description: 'Clear guidance on where to begin using reference framework levels (A1 to C2).',
          iconName: 'target',
        },
        {
          title: '3. Tutoring Support Plan',
          description: 'A custom curriculum prioritizing your individual objectives: conversation, school, or work.',
          iconName: 'book',
        },
        {
          title: '4. Live Interactive Tutoring',
          description: 'Engaging real-time sessions with qualified tutors focused on active communication.',
          iconName: 'sparkles',
        },
        {
          title: '5. Practice & Targeted Feedback',
          description: 'Practical exercises, pronunciation correction, and continuous feedback.',
          iconName: 'clock',
        },
        {
          title: '6. Regular Progress Checks',
          description: 'Periodic reviews to measure fluency development and celebrate learning milestones.',
          iconName: 'award',
        },
        {
          title: '7. Reassessment & Next Stage',
          description: 'Seamless progression into higher-level language topics as skills strengthen.',
          iconName: 'shield',
        },
      ],
      curriculumTitle: 'CEFR Reference Framework for Tutoring',
      curriculumSubheadline: 'We use international reference levels purely to organize your tutoring progression and target suitable materials.',
      curriculumPillars: [
        {
          title: 'A1 — Starter',
          badge: 'Beginner',
          items: ['Everyday greetings & introductions', 'Basic sentence structures', 'Essential everyday vocabulary', 'Listening to slow, clear speech'],
        },
        {
          title: 'A2 — Foundation',
          badge: 'Elementary',
          items: ['Routine conversation & daily routines', 'Past and future simple tenses', 'Describing surroundings & background', 'Basic reading comprehension'],
        },
        {
          title: 'B1 — Intermediate',
          badge: 'Independent',
          items: ['Expressing opinions & experiences', 'School discussions & topic handling', 'Complex grammar structures', 'Writing structured paragraphs'],
        },
        {
          title: 'B2 — Upper Intermediate',
          badge: 'Fluency',
          items: ['Spontaneous, fluent conversation', 'Academic & professional terminology', 'Reading authentic articles & texts', 'Nuanced argumentation in speaking & writing'],
        },
        {
          title: 'C1/C2 — Advanced to Proficiency',
          badge: 'Mastery',
          items: ['Subtle idioms & stylistic precision', 'Complex academic analysis', 'High-level presentations & writing', 'Professional & university communication'],
        },
      ],
      faqs: [
        {
          question: 'Does Success Path Mentors issue official CEFR certificates?',
          answer: 'No. Success Path Mentors is an educational tutoring and learning support service. We use CEFR levels solely as a reference framework to identify starting points and organize effective tutoring. We do not issue official language certificates.',
        },
        {
          question: 'How do I know my current level?',
          answer: 'You can book a free trial session where our coordination team and tutor evaluate your current skills and recommend the most suitable starting level.',
        },
        {
          question: 'Can I prepare for external exams like Goethe or telc?',
          answer: 'Yes! Our tutors provide targeted exam preparation tutoring to help you understand question formats and build exam confidence, though external certification is conducted independently by accredited examination centers.',
        },
      ],
    },
    de: {
      slug: 'tutoring/language-levels',
      category: 'format',
      serviceId: 'language-levels',
      showCefrDisclaimer: true,
      showPlacementCta: true,
      seo: {
        title: 'Sprachförderung nach Stufen | Success Path Mentors Europe',
        description: 'Stufenbasierte Sprachnachhilfe in Deutsch, Englisch, Französisch und Arabisch. Orientierung an den GER-Stufen A1 bis C2 mit individuellem Einstufungsgespräch.',
        keywords: ['Sprachstufen Nachhilfe', 'GER Sprachniveaus', 'A1 bis C2 Nachhilfe', 'Spracheinstufung', 'Sprachförderung'],
      },
      hero: {
        badge: 'Schrittweise Progression',
        title: 'Sprachförderung nach Stufen',
        headline: 'Starten Sie auf Ihrem Sprachniveau. Schritt für Schritt sicherer sprechen.',
        subheadline: 'Strukturierte Sprachnachhilfe, ausgerichtet an Ihren aktuellen Vorkenntnissen und persönlichen Zielen. Vom ersten Grundwortschatz bis zur souveränen Sprachbeherrschung.',
        primaryCta: 'Einstufungsempfehlung anfordern',
        secondaryCta: 'Sprachangebote entdecken',
      },
      highlightsTitle: 'Unser didaktischer Ablauf nach Stufen',
      highlightsSubheadline: 'Ein bewährter 7-Stufen-Weg für sichtbare sprachliche Fortschritte.',
      highlights: [
        {
          title: '1. Einstufung & Bedarfsanalyse',
          description: 'Ein entspanntes Kennenlerngespräch klärt Sprechvermögen, Hörverständnis und Grammatikstand.',
          iconName: 'compass',
        },
        {
          title: '2. Stufenempfehlung',
          description: 'Klare Empfehlung zur Einordnung anhand der Orientierungsstufen (A1 bis C2).',
          iconName: 'target',
        },
        {
          title: '3. Individueller Förderplan',
          description: 'Zielgerichteter Unterrichtsplan abgestimmt auf Schule, Beruf oder Alltagskommunikation.',
          iconName: 'book',
        },
        {
          title: '4. Interaktiver Live-Unterricht',
          description: 'Motivierende Live-Einheiten mit erfahrenen Sprachlehrkräften mit Fokus auf aktives Sprechen.',
          iconName: 'sparkles',
        },
        {
          title: '5. Gezieltes Üben & Korrektur',
          description: 'Praxisnahe Dialoge, Aussprachetraining und konstruktives Feedback.',
          iconName: 'clock',
        },
        {
          title: '6. Regelmäßige Lernchecks',
          description: 'Kontinuierliche Überprüfung des Gelernten zur Festigung des Erreichten.',
          iconName: 'award',
        },
        {
          title: '7. Nächste Stufe erreichen',
          description: 'Reibungsloser Übergang zu anspruchsvolleren Themen und komplexerem Wortschatz.',
          iconName: 'shield',
        },
      ],
      curriculumTitle: 'GER-Referenzstufen im Überblick',
      curriculumSubheadline: 'Wir nutzen diese Niveaustufen rein als Orientierungsmaßstab zur zielgerichteten Organisation des Förderunterrichts.',
      curriculumPillars: [
        {
          title: 'A1 — Starter',
          badge: 'Anfänger',
          items: ['Einfache Begrüßungen & Vorstellungen', 'Grundlegende Satzstrukturen', 'Wichtiger Alltagswortschatz', 'Verstehen langsamer, deutlicher Sprache'],
        },
        {
          title: 'A2 — Foundation',
          badge: 'Grundlegend',
          items: ['Alltägliche Gesprächssituationen', 'Einfache Vergangenheits- und Zukunftsformen', 'Beschreibungen von Personen & Alltag', 'Einfache Lesetexte verstehen'],
        },
        {
          title: 'B1 — Intermediate',
          badge: 'Mittelstufe',
          items: ['Eigene Meinungen & Erfahrungen äußern', 'Schulische & berufliche Themen behandeln', 'Erweiterte Grammatikstrukturen', 'Verfassen strukturierter kurzer Texte'],
        },
        {
          title: 'B2 — Upper Intermediate',
          badge: 'Fortgeschritten',
          items: ['Fließende und spontane Verständigung', 'Gehobener Wortschatz für Schule & Beruf', 'Verstehen anspruchsvoller Fachtexte', 'Differenzierte Argumentation'],
        },
        {
          title: 'C1/C2 — Advanced / Fachkompetenz',
          badge: 'Exzellenz',
          items: ['Nuancierte Ausdrucksweise & Redewendungen', 'Akademische Textanalysen & Referate', 'Souveräne Verhandlungen & Vorträge', 'Verhandlungssichere Sprachkompetenz'],
        },
      ],
      faqs: [
        {
          question: 'Stellt Success Path Mentors offizielle GER-Sprachzertifikate aus?',
          answer: 'Nein. Success Path Mentors ist ein Nachhilfe- und Bildungsförderungsdienst. Wir nutzen die GER-Stufen rein als didaktischen Referenzrahmen zur Organisation des Förderunterrichts und stellen keine akkreditierten Zertifikate aus.',
        },
        {
          question: 'Wie finde ich mein passendes Sprachniveau?',
          answer: 'Buchen Sie einfach eine kostenlose Probestunde. Unsere Lehrkraft ermittelt Ihren aktuellen Stand und empfiehlt die passende Stufe.',
        },
        {
          question: 'Kann ich mich auf externe Prüfungen (z.B. Goethe oder telc) vorbereiten?',
          answer: 'Ja. Unsere Lehrkräfte bieten gezielte Prüfungsvorbereitungsnachhilfe an, um Prüfungsformate einzuüben. Die eigentliche Prüfung erfolgt unabhängig bei lizenzierten Prüfungszentren.',
        },
      ],
    },
    ar: {
      slug: 'tutoring/language-levels',
      category: 'format',
      serviceId: 'language-levels',
      showCefrDisclaimer: true,
      showPlacementCta: true,
      seo: {
        title: 'دعم لغوي منظم حسب المستوى | Success Path Mentors Europe',
        description: 'دروس تقوية لغوية منظمة حسب المستويات في اللغات الألمانية والإنجليزية والفرنسية والعربية وفق معايير الإطار الأوروبي (A1 إلى C2). تقييم مبدئي وخطط تقدم مخصصة.',
        keywords: ['مستويات اللغات الأوروبية', 'مستويات CEFR', 'تقوية اللغات حسب المستوى', 'تحديد مستوى اللغة', 'تعليم لغات أونلاين'],
      },
      hero: {
        badge: 'تدرج تعليمي مدروس',
        title: 'دعم لغوي منظم حسب المستوى',
        headline: 'ابدأ من مستواك الفعلي وعزز مهاراتك اللغوية خطوة بخطوة.',
        subheadline: 'تعليم لغوي تفاعلي منظم بدقة وفق مستواك الحالي وأهدافك الشخصية. من بناء الكلمات والجمل الأساسية إلى الطلاقة التامة، مع محطات تقييم واضحة.',
        primaryCta: 'احصل على توصية بمستواك',
        secondaryCta: 'استكشف اللغات المتاحة',
      },
      highlightsTitle: 'آلية التدريس حسب المستويات اللغوية',
      highlightsSubheadline: 'مسار تعليمي من 7 خطوات يضمن التطور الحقيقي في مهارات المحادثة والاستيعاب.',
      highlights: [
        {
          title: '1. تحديد المستوى والتقييم',
          description: 'جلسة أولية ودية لتحديد مهارات المحادثة والاستماع والقراءة والقواعد.',
          iconName: 'compass',
        },
        {
          title: '2. توصية المستوى المناسب',
          description: 'توجيه دقيق للبدء من المستوى الملائم وفق الإطار المرجعي (A1 إلى C2).',
          iconName: 'target',
        },
        {
          title: '3. خطة الدعم التعليمية',
          description: 'منهج مخصص يركز على أولوياتك: المحادثة اليومية، أو المدرسة، أو العمل.',
          iconName: 'book',
        },
        {
          title: '4. دروس تفاعلية مباشرة',
          description: 'حصص حية مع معلمين متخصصين بالتركيز على التحدث النشط والممارسة.',
          iconName: 'sparkles',
        },
        {
          title: '5. تدريب عملي وملاحظات فورية',
          description: 'تمارين تفاعلية وتصحيح مباشر للنطق وتطوير بنية الجمل.',
          iconName: 'clock',
        },
        {
          title: '6. مراجعة وتقييم دوري',
          description: 'قياس التطور اللغوي والتحقق من تمكن الطالب من المفاهيم السابقة.',
          iconName: 'award',
        },
        {
          title: '7. الانتقال للمستوى التالي',
          description: 'الارتقاء بسلاسة نحو مستويات أعلى ومفردات أكثر تخصصاً وثراءً.',
          iconName: 'shield',
        },
      ],
      curriculumTitle: 'المستويات المرجعية المستخدمة في التدريس',
      curriculumSubheadline: 'نستخدم المستويات المرجعية المعتمدة دولياً حصرياً كمعيار استرشادي لتنظيم دروسك واختيار المواد التدريسية المناسبة.',
      curriculumPillars: [
        {
          title: 'A1 — المبتدئ',
          badge: 'الأساسيات',
          items: ['التحية والتعريف بالنفس', 'تراكيب الجمل البسيطة', 'المفردات اليومية الأساسية', 'فهم الكلام البطيء والواضح'],
        },
        {
          title: 'A2 — التأسيس',
          badge: 'المستوى الأولي',
          items: ['المحادثات في المواقف اليومية', 'صيغ الماضي والمستقبل البسيطة', 'وصف البيئة المحيطة والاهتمامات', 'فهم النصوص البسيطة'],
        },
        {
          title: 'B1 — المتوسط',
          badge: 'الاستقلالية',
          items: ['التعبير عن الآراء والتجارب', 'التعامل مع المواضيع المدرسية والعملية', 'تراكيب القواعد الأكثر تعقيداً', 'كتابة نصوص مترابطة'],
        },
        {
          title: 'B2 — فوق المتوسط',
          badge: 'الطلاقة',
          items: ['المحادثة العفوية بطلاقة', 'المصطلحات الأكاديمية والمهنية', 'قراءة وفهم المقالات التخصصية', 'النقاش وبناء الحجج بوضوح'],
        },
        {
          title: 'C1/C2 — المتقدم والإتقان',
          badge: 'الاحتراف',
          items: ['استخدام التعابير اللغوية الدقيقة', 'التحليل الأكاديمي المتقدم والنصوص المعقدة', 'العروض التقديمية واللغة المهنية', 'الكفاءة اللغوية التامة للدراسة الجامعية'],
        },
      ],
      faqs: [
        {
          question: 'هل تصدر Success Path Mentors شهادات لغة رسمية؟',
          answer: 'لا. Success Path Mentors هي خدمة دعم تدريسي وتعليمي خاص. نستخدم مستويات الإطار الأوروبي (CEFR) كمرجع لتنظيم المحتوى الدراسي وتحديد مستوى البدء، ولا نصدر شهادات لغة رسمية أو مؤهلات معتمدة.',
        },
        {
          question: 'كيف يمكنني معرفة مستواي الحالي في اللغة؟',
          answer: 'يمكنك ببساطة حجز حصة تجريبية مجانية حيث يقوم منسقنا ومعلمنا المعتمد بتقييم مهاراتك والتوصية بالمستوى والمنهج الأنسب لك.',
        },
        {
          question: 'هل يمكنكم مساعدتي في التحضير لامتحانات مثل Goethe أو telc؟',
          answer: 'نعم بالتأكيد. نقدم دروساً تدريبية مكثفة للتحضير لاختبارات اللغة لتدريبك على أنماط الأسئلة وتطوير مهارات الإجابة، بينما يتم الاختبار الرسمي لدى المراكز المعتمدة بشكل مستقل.',
        },
      ],
    },
  },

  // ==========================================
  // LANGUAGE 1: ENGLISH TUTORING
  // ==========================================
  'languages/english': {
    en: {
      slug: 'languages/english',
      category: 'language',
      serviceId: 'english',
      showCefrDisclaimer: true,
      seo: {
        title: 'English Tutoring & Language Support | Success Path Mentors Europe',
        description: 'Comprehensive English tutoring across Germany and Europe. School support, conversation fluency, homework help, grammar, and exam preparation tutoring.',
        keywords: ['English tutoring Germany', 'English lessons online', 'school English tutor', 'English conversation classes', 'English exam prep'],
      },
      hero: {
        badge: 'All Levels (A1–C2 Reference)',
        title: 'English Tutoring & Language Support',
        headline: 'Build English Confidence for School, Exams, and Life.',
        subheadline: 'Personalized English tutoring focusing on spoken fluency, classroom success, reading, grammar, and academic writing. Private 1-to-1 or smart small groups.',
        primaryCta: 'Book a Free Trial',
        secondaryCta: 'Chat on WhatsApp',
      },
      highlightsTitle: 'Complete English Tutoring Areas',
      highlightsSubheadline: 'From elementary school foundations to advanced academic communication.',
      highlights: [
        {
          title: 'School Curriculum Support',
          description: 'Helping students excel in their European or international school English classes and homework.',
          iconName: 'book',
        },
        {
          title: 'Spoken Fluency & Conversation',
          description: 'Overcoming hesitations with real-time dialogue, pronunciation coaching, and active listening.',
          iconName: 'sparkles',
        },
        {
          title: 'Grammar & Writing Mastery',
          description: 'Structured clarity on tenses, sentence mechanics, essays, and text analysis.',
          iconName: 'target',
        },
        {
          title: 'Exam-Preparation Tutoring',
          description: 'Targeted support for school finals, Abitur English, Cambridge, or IELTS preparation.',
          iconName: 'award',
        },
        {
          title: 'Adult & Workplace English',
          description: 'Professional communication, email writing, meeting participation, and interview coaching.',
          iconName: 'user',
        },
        {
          title: 'Reading & Vocabulary Expansion',
          description: 'Engaging with diverse texts to naturally enrich vocabulary and comprehension speed.',
          iconName: 'compass',
        },
      ],
      curriculumTitle: 'Structured English Focus Areas',
      curriculumSubheadline: 'Curricula tailored around the student’s specific age group and objectives.',
      curriculumPillars: [
        {
          title: 'School English (Grades 1–12)',
          badge: 'Academic',
          items: ['Grammar reinforcement & vocabulary lists', 'Text comprehension & summary writing', 'Classroom participation & oral exams', 'Abitur / Secondary school exam prep'],
        },
        {
          title: 'Practical Fluency (All Ages)',
          badge: 'Communicative',
          items: ['Everyday conversational skills', 'British & American pronunciation practice', 'Overcoming language barrier & fear of speaking', 'Idiomatic expressions & natural phrasing'],
        },
        {
          title: 'Academic & Professional English',
          badge: 'Advanced',
          items: ['Essay writing & stylistic refinement', 'Business English & email etiquette', 'Presentation skills & academic discourse', 'Preparation tutoring for standardized tests'],
        },
      ],
      faqs: [
        {
          question: 'Do you provide English tutoring for both school pupils and adults?',
          answer: 'Yes. We provide tailored English tutoring for children (Grades 1–12) aligned with school curricula, as well as specialized English tutoring for adult learners and professionals.',
        },
        {
          question: 'Can lessons focus specifically on conversation?',
          answer: 'Absolutely. If your goal is speaking fluency, your tutor will dedicate sessions to discussion, vocabulary building, and pronunciation without heavy grammar lecturing.',
        },
      ],
    },
    de: {
      slug: 'languages/english',
      category: 'language',
      serviceId: 'english',
      showCefrDisclaimer: true,
      seo: {
        title: 'Englischnachhilfe & Sprachförderung | Success Path Mentors Europe',
        description: 'Gezielte Englischnachhilfe in Deutschland und Europa. Schulbegleitung, Konversation, Grammatikfestigung, Hausaufgabenhilfe und Abiturvorbereitung.',
        keywords: ['Englischnachhilfe', 'Englisch Nachhilfe online', 'Englisch Abitur Vorbereitung', 'Englisch Konversation', 'Schulenglisch'],
      },
      hero: {
        badge: 'Alle Stufen (A1–C2 Orientierung)',
        title: 'Englischnachhilfe & Sprachförderung',
        headline: 'Souveränes Englisch für Schule, Prüfungen und Beruf.',
        subheadline: 'Individuelle Englischnachhilfe für bessere Schulnoten, flüssige Konversation, sichere Grammatik und überzeugende Aufsätze. Als 1-zu-1 Einzelunterricht oder in Minigruppen.',
        primaryCta: 'Kostenlose Probestunde buchen',
        secondaryCta: 'Per WhatsApp beraten lassen',
      },
      highlightsTitle: 'Unsere Schwerpunkte in Englisch',
      highlightsSubheadline: 'Vom Grundschulenglisch über die Mittelstufe bis zur anspruchsvollen Oberstufe und Erwachsenenbildung.',
      highlights: [
        {
          title: 'Begleitung des Schulunterrichts',
          description: 'Gezielte Unterstützung für den Englischunterricht an Grundschule, Gymnasium, Realschule und Gesamtschule.',
          iconName: 'book',
        },
        {
          title: 'Sprechflüssigkeit & Aussprache',
          description: 'Sprechhemmungen abbauen durch kontinuierlichen Dialog und aktives Training.',
          iconName: 'sparkles',
        },
        {
          title: 'Grammatik & Textproduktion',
          description: 'Sichere Beherrschung der Zeiten, Passivformen, indirekten Rede und strukturierter Textanalysen.',
          iconName: 'target',
        },
        {
          title: 'Prüfungsvorbereitung & Abitur',
          description: 'Gezieltes Training für Klassenarbeiten, mündliche Prüfungen, Mittlere Reife und das Englisch-Abitur.',
          iconName: 'award',
        },
        {
          title: 'Englisch für Erwachsene & Beruf',
          description: 'Business English, Verhandlungssicherheit, E-Mail-Kommunikation und Vorbereitung auf Vorstellungsgespräche.',
          iconName: 'user',
        },
        {
          title: 'Leseverständnis & Wortschatz',
          description: 'Erweiterung des aktiven Wortschatzes und schnelles Erfassen englischsprachiger Texte.',
          iconName: 'compass',
        },
      ],
      curriculumTitle: 'Themenbereiche im Englischunterricht',
      curriculumSubheadline: 'Abgestimmt auf die jeweilige Altersgruppe und das persönliche Lernziel.',
      curriculumPillars: [
        {
          title: 'Schulenglisch (Klassen 1–12)',
          badge: 'Schulisch',
          items: ['Grammatikwiederholung & Vokabeltraining', 'Textanalysen, Mediation & Summaries', 'Mündliche Mitarbeit & Aussprache', 'Vorbereitung auf MSA & Abitur'],
        },
        {
          title: 'Konversation & Alltag',
          badge: 'Kommunikativ',
          items: ['Flüssiges Sprechen in Alltagssituationen', 'Aussprachetraining (UK/US)', 'Sprechangst abbauen', 'Idiomatische Wendungen'],
        },
        {
          title: 'Akademisches & Business Englisch',
          badge: 'Fortgeschritten',
          items: ['Aufsatzgestaltung & akademischer Stil', 'Berufliche Korrespondenz & Meetings', 'Präsentationstraining auf Englisch', 'Vorbereitungsnachhilfe für Sprachtests'],
        },
      ],
      faqs: [
        {
          question: 'Bieten Sie Englischnachhilfe sowohl für Schüler als auch für Erwachsene an?',
          answer: 'Ja, wir unterstützen Schüler aller Klassenstufen abgestimmt auf den Lehrplan sowie Erwachsene im Berufs- und Alltagsenglisch.',
        },
        {
          question: 'Kann der Unterricht rein auf Konversation ausgerichtet werden?',
          answer: 'Auf jeden Fall. Wenn Ihr Schwerpunkt auf flüssigem Sprechen liegt, gestaltet die Lehrkraft den Unterricht dialogorientiert und interaktiv.',
        },
      ],
    },
    ar: {
      slug: 'languages/english',
      category: 'language',
      serviceId: 'english',
      showCefrDisclaimer: true,
      seo: {
        title: 'دروس تقوية ودعم اللغة الإنجليزية | Success Path Mentors Europe',
        description: 'دروس تقوية شاملة في اللغة الإنجليزية للمناهج المدرسية والمحادثة وقواعد اللغة والتحضير للاختبارات في ألمانيا وأوروبا.',
        keywords: ['تقوية لغة إنجليزية ألمانيا', 'دروس إنجليزي أونلاين', 'محادثة إنجليزي', 'تحضير امتحانات إنجليزي', 'معلم إنجليزي خاص'],
      },
      hero: {
        badge: 'كافة المستويات (مرجع A1–C2)',
        title: 'دروس تقوية ودعم اللغة الإنجليزية',
        headline: 'اكتسب طلاقة وثقة في اللغة الإنجليزية للمدرسة والعمل والحياة.',
        subheadline: 'تعليم تفاعلي مخصص يركز على الطلاقة الشفوية، والتفوق في المنهج المدرسي، وقواعد اللغة، وكتابة المقالات. دروس فردية خاصة أو في مجموعات مصغرة.',
        primaryCta: 'احجز حصة تجريبية مجانية',
        secondaryCta: 'تواصل عبر واتساب',
      },
      highlightsTitle: 'أهم محاور تدريس اللغة الإنجليزية',
      highlightsSubheadline: 'من تأسيس المرحلة الابتدائية وحتى المهارات الأكاديمية والمهنية المتقدمة.',
      highlights: [
        {
          title: 'دعم المناهج المدرسية',
          description: 'مساعدة الطلاب في المدارس الأوروبية والدولية على التفوق في واجباتهم واختباراتهم.',
          iconName: 'book',
        },
        {
          title: 'الطلاقة الشفوية والمحادثة',
          description: 'كسر حاجز الخوف والتردد من خلال الحوار التفاعلي اليومي وتحسين مخارج الحروف.',
          iconName: 'sparkles',
        },
        {
          title: 'إتقان القواعد والكتابة',
          description: 'شرح مبسط للأزمنة وتراكيب الجمل وكيفية كتابة فقرات ومقالات متناسقة.',
          iconName: 'target',
        },
        {
          title: 'التحضير للاختبارات والشهادات',
          description: 'تدريب منهجي للامتحانات المدرسية النهائية واختبارات القبول واللغة.',
          iconName: 'award',
        },
        {
          title: 'الإنجليزية للبالغين وميدان العمل',
          description: 'الإنجليزية للأعمال، وكتابة المراسلات الرسمية، واجتياز مقابلات العمل بنجاح.',
          iconName: 'user',
        },
        {
          title: 'تنمية القراءة والمفردات',
          description: 'قراءة نصوص متنوعة تثري المعجم اللغوي للطالب وتعزز سرعة الاستيعاب.',
          iconName: 'compass',
        },
      ],
      curriculumTitle: 'المسارات التعليمية في اللغة الإنجليزية',
      curriculumSubheadline: 'مناهج مصممة خصيصاً لتناسب الفئة العمرية والهدف الدراسي.',
      curriculumPillars: [
        {
          title: 'الإنجليزية المدرسية (الصفوف 1–12)',
          badge: 'أكاديمي',
          items: ['تثبيت القواعد والمفردات المنهجية', 'فهم النصوص والتلخيص والتحليل', 'المشاركة الصفية والتعبير الشفوي', 'التحضير لامتحانات المراحل الانتقالية والنهائية'],
        },
        {
          title: 'المحادثة والطلاقة العملية',
          badge: 'تواصلي',
          items: ['المحادثة اليومية في مختلف المواقف', 'تصحيح النطق والتحدث بسلاسة', 'إزالة الرهبة وبناء الثقة بالنفس', 'استخدام التعبيرات الشائعة بشكل سليم'],
        },
        {
          title: 'الإنجليزية المهنية والأكاديمية',
          badge: 'متقدم',
          items: ['كتابة المقالات والأسلوب الأكاديمي', 'المراسلات الإدارية واجتماعات العمل', 'مهارات الإلقاء وتقديم العروض', 'دروس تدريبية مكثفة لاختبارات اللغة'],
        },
      ],
      faqs: [
        {
          question: 'هل تقدمون دروساً للطلاب المدارس وللبالغين معاً؟',
          answer: 'نعم. لدينا مسارات مخصصة لطلاب المدارس تتوافق مع مناهجهم، ومسارات منفصلة للبالغين تركز على متطلبات العمل والحياة اليومية.',
        },
        {
          question: 'هل يمكن حجز حصص تركز فقط على المحادثة؟',
          answer: 'بالتأكيد. إذا كان هدفك هو طلاقة التحدث، يركز المعلم الحصص على الحوار المفتوح وتصحيح النطق وإثراء المفردات.',
        },
      ],
    },
  },

  // ==========================================
  // LANGUAGE 2: GERMAN TUTORING
  // ==========================================
  'languages/german': {
    en: {
      slug: 'languages/german',
      category: 'language',
      serviceId: 'german',
      showCefrDisclaimer: true,
      seo: {
        title: 'German Tutoring & Language Support | Success Path Mentors Europe',
        description: 'Expert German tutoring across Germany and Europe. School support, conversation, grammar, integration language, and Goethe/telc exam preparation tutoring.',
        keywords: ['German tutoring Germany', 'German tutor online', 'school German support', 'Goethe exam prep tutoring', 'telc preparation tutor'],
      },
      hero: {
        badge: 'All Levels (A1–C2 Reference)',
        title: 'German Tutoring & Language Support',
        headline: 'Master German for School, Everyday Life, and Exam Prep.',
        subheadline: 'Structured German tutoring for children and adults. From foundational grammar and homework help to conversational fluency and Goethe/telc exam-preparation tutoring.',
        primaryCta: 'Book a Free Trial',
        secondaryCta: 'Chat on WhatsApp',
      },
      highlightsTitle: 'Comprehensive German Tutoring Support',
      highlightsSubheadline: 'Tailored for students in German schools, relocation families, and adult learners.',
      highlights: [
        {
          title: 'German School Curriculum Support',
          description: 'Support for Grundschule, Gymnasium, Realschule, and Gesamtschule: grammar, essays, and text analysis.',
          iconName: 'book',
        },
        {
          title: 'Daily Speaking & Fluency',
          description: 'Overcoming spoken hurdles in German for confident interactions at school, work, and community.',
          iconName: 'sparkles',
        },
        {
          title: 'Grammar Recovery & Sentence Construction',
          description: 'Systematic mastering of articles, cases (Dativ/Akkusativ), adjective endings, and verb conjugations.',
          iconName: 'target',
        },
        {
          title: 'Exam-Preparation Tutoring (Goethe & telc)',
          description: 'Focused practice on question formats, reading tasks, listening drills, and oral test simulations.',
          iconName: 'award',
        },
        {
          title: 'Homework & Assignment Coaching',
          description: 'Weekly guidance to ensure homework is understood, completed, and reinforced.',
          iconName: 'user',
        },
        {
          title: 'German for Adults & Work',
          description: 'Vocational German, professional emails, official appointments, and natural workplace communication.',
          iconName: 'compass',
        },
      ],
      curriculumTitle: 'German Focus Areas',
      curriculumSubheadline: 'Instruction customized to the learner’s specific school grade or professional requirement.',
      curriculumPillars: [
        {
          title: 'School Support (Grades 1–12)',
          badge: 'Curriculum',
          items: ['Grammar & spelling (Rechtschreibung)', 'Reading comprehension (Leseverstehen)', 'Essay writing (Aufsatz & Erörterung)', 'Abitur / MSA preparation support'],
        },
        {
          title: 'Conversation & Integration',
          badge: 'Communicative',
          items: ['Everyday conversational confidence', 'Listening comprehension & pronunciation', 'Living & studying in Germany', 'Relocation language reinforcement'],
        },
        {
          title: 'Goethe & telc Exam Prep Tutoring',
          badge: 'Test Strategy',
          items: ['Familiarization with test structures', 'Time management & exam strategy drills', 'Sample question practice & feedback', 'Oral examination simulation'],
        },
      ],
      faqs: [
        {
          question: 'Do you issue official Goethe or telc certificates?',
          answer: 'No. We provide exam preparation tutoring to train and support learners for these tests. The official examinations and certificates are administered exclusively by authorized testing centers.',
        },
        {
          question: 'Can you help a child who recently moved to Germany and attends a local school?',
          answer: 'Yes, this is one of our primary specialties. We help international and multilingual children catch up with German school terminology, grammar, and reading speed.',
        },
      ],
    },
    de: {
      slug: 'languages/german',
      category: 'language',
      serviceId: 'german',
      showCefrDisclaimer: true,
      seo: {
        title: 'Deutschnachhilfe & Sprachförderung | Success Path Mentors Europe',
        description: 'Qualifizierte Deutschnachhilfe in Deutschland. Schulunterstützung, Rechtschreibung, Grammatik, Aufsatztraining und Goethe/telc Prüfungsvorbereitung.',
        keywords: ['Deutschnachhilfe', 'Deutsch Nachhilfe online', 'Deutsch Schulhilfe', 'Goethe Prüfungsvorbereitung Nachhilfe', 'telc Nachhilfe'],
      },
      hero: {
        badge: 'Alle Niveaustufen (A1–C2 Orientierung)',
        title: 'Deutschnachhilfe & Sprachförderung',
        headline: 'Deutsch meistern für Schule, Alltag und gezielte Prüfungsvorbereitung.',
        subheadline: 'Strukturierte Deutschnachhilfe für Schüler und Erwachsene. Von Grammatikgrundlagen und Hausaufgabenhilfe bis hin zu mündlicher Sprachkompetenz und Prüfungstraining.',
        primaryCta: 'Kostenlose Probestunde buchen',
        secondaryCta: 'Per WhatsApp beraten lassen',
      },
      highlightsTitle: 'Unsere Förderbereiche in Deutsch',
      highlightsSubheadline: 'Individuell angepasst für Schüler im deutschen Schulsystem sowie für erwachsene Zuwanderer.',
      highlights: [
        {
          title: 'Begleitung des Deutsch-Schulunterrichts',
          description: 'Unterstützung für Grundschule, Gymnasium, Realschule und Gesamtschule bei Texten, Diktaten und Grammatik.',
          iconName: 'book',
        },
        {
          title: 'Mündliche Ausdruckskraft & Konversation',
          description: 'Sprechhemmungen überwinden und sich im Unterricht, Beruf und Alltag sicher auf Deutsch ausdrücken.',
          iconName: 'sparkles',
        },
        {
          title: 'Grammatik, Fälle & Rechtschreibung',
          description: 'Systematisches Verstehen von Artikeln, Kasus (Dativ/Akkusativ), Satzbau und Zeichensetzung.',
          iconName: 'target',
        },
        {
          title: 'Prüfungsvorbereitungsnachhilfe (Goethe / telc)',
          description: 'Gezieltes Durcharbeiten von Prüfungsformaten, Hör- und Leseverstehen sowie Simulation von Sprechprüfungen.',
          iconName: 'award',
        },
        {
          title: 'Hausaufgaben- & Aufsatzbegleitung',
          description: 'Schrittweise Anleitung zum Schreiben von Inhaltsangaben, Personenbeschreibungen und Erörterungen.',
          iconName: 'user',
        },
        {
          title: 'Deutsch für Beruf & Alltag',
          description: 'Fachsprachliches Deutsch, Korrespondenz mit Behörden und souveränes Auftreten am Arbeitsplatz.',
          iconName: 'compass',
        },
      ],
      curriculumTitle: 'Unterrichtsschwerpunkte Deutsch',
      curriculumSubheadline: 'Exakt ausgerichtet auf Klassenstufe, Bundesland-Lehrplan oder beruflichen Bedarf.',
      curriculumPillars: [
        {
          title: 'Schulunterricht Deutsch (Klassen 1–12)',
          badge: 'Lehrplan',
          items: ['Grammatik & Rechtschreibstrategien', 'Lesekompetenz & Textverständnis', 'Aufsatzformen (Bericht, Erörterung, Analyse)', 'Abitur- & MSA-Vorbereitungsunterricht'],
        },
        {
          title: 'Konversation & DaZ / DaF',
          badge: 'Kommunikation',
          items: ['Aktiver Wortschatzaufbau für den Alltag', 'Aussprache & Redewendungen', 'Deutsch als Zweitsprache (DaZ) Förderung', 'Sicherheit im Sprechen und Präsentieren'],
        },
        {
          title: 'Goethe & telc Prüfungsvorbereitung',
          badge: 'Prüfungstraining',
          items: ['Kennenlernen typischer Aufgabenmuster', 'Zeitmanagement in den Prüfungsteilen', 'Gezieltes Training des mündlichen Teils', 'Umfassendes Üben von Modellprüfungen'],
        },
      ],
      faqs: [
        {
          question: 'Stellt Success Path Mentors Goethe- oder telc-Zertifikate aus?',
          answer: 'Nein. Wir bieten gezielte Prüfungsvorbereitungsnachhilfe an. Die offiziellen Zertifikate werden ausschließlich von lizenzierten Goethe- oder telc-Prüfungszentren ausgestellt.',
        },
        {
          question: 'Können Sie Kindern helfen, die neu nach Deutschland gezogen sind?',
          answer: 'Ja, das ist einer unserer Kernschwerpunkte. Wir unterstützen mehrsprachige Schüler gezielt dabei, dem deutschen Schulunterricht rasch sprachlich zu folgen.',
        },
      ],
    },
    ar: {
      slug: 'languages/german',
      category: 'language',
      serviceId: 'german',
      showCefrDisclaimer: true,
      seo: {
        title: 'دروس تقوية ودعم اللغة الألمانية | Success Path Mentors Europe',
        description: 'دروس تقوية متخصصة في اللغة الألمانية للطلاب والبالغين في ألمانيا وأوروبا. دعم المناهج المدرسية، القواعد، المحادثة، والتحضير لاختبارات Goethe و telc.',
        keywords: ['تقوية لغة ألمانية', 'دروس ألماني للمدارس ألمانيا', 'تحضير امتحان جوته', 'تحضير امتحان تيلك', 'معلم ألماني أونلاين'],
      },
      hero: {
        badge: 'كافة المستويات (مرجع A1–C2)',
        title: 'دروس تقوية ودعم اللغة الألمانية',
        headline: 'تمكن من اللغة الألمانية للمدارس والاندماج والتحضير لامتحانات Goethe و telc.',
        subheadline: 'تعليم منظم للغة الألمانية للأطفال والبالغين. من سد الثغرات المدرسية والقواعد الصعبة إلى التحدث بطلاقة والتدريب المكثف على اختبارات Goethe و telc.',
        primaryCta: 'احجز حصة تجريبية مجانية',
        secondaryCta: 'تواصل عبر واتساب',
      },
      highlightsTitle: 'أهم مجالات تدريس اللغة الألمانية',
      highlightsSubheadline: 'مخصصة لطلاب المدارس الألمانية، والعائلات المقيمة، والدارسين البالغين.',
      highlights: [
        {
          title: 'دعم المناهج المدرسية الألمانية',
          description: 'مساعدة طلاب المدارس (Grundschule، Gymnasium وغيرها) في القراءة والإملاء والتعبير الكتابي.',
          iconName: 'book',
        },
        {
          title: 'الحديث والطلاقة الشفوية',
          description: 'إزالة الخوف والتردد من التحدث بالألمانية في الصف والمواقف اليومية والعمل.',
          iconName: 'sparkles',
        },
        {
          title: 'إتقان القواعد وأدوات التعريف',
          description: 'شرح منهجي مبسط لحالات الإعراب (Dativ / Akkusativ) ونهايات الصفات وتركيب الجمل.',
          iconName: 'target',
        },
        {
          title: 'التدريب على امتحانات Goethe و telc',
          description: 'حل نماذج امتحانات سابقة، وتدريب مكثف على أقسام الاستماع والقراءة والمحادثة.',
          iconName: 'award',
        },
        {
          title: 'متابعة الواجبات وكتابة النصوص',
          description: 'تدريب خطوة بخطوة على كتابة التقارير والموضوعات الإنشائية (Aufsatz).',
          iconName: 'user',
        },
        {
          title: 'الألمانية للبالغين ومجال العمل',
          description: 'الألمانية المهنية، وصياغة الرسائل الرسمية، والتواصل مع الدوائر الحكومية والشركات.',
          iconName: 'compass',
        },
      ],
      curriculumTitle: 'المسارات التدريسية في اللغة الألمانية',
      curriculumSubheadline: 'محتوى تعليمي دقيق يتوافق مع الصف الدراسي أو الهدف المهني.',
      curriculumPillars: [
        {
          title: 'اللغة الألمانية المدرسية (الصفوف 1–12)',
          badge: 'المنهج الألماني',
          items: ['القواعد وقواعد الإملاء (Rechtschreibung)', 'فهم النصوص الأدبية وتحليلها', 'كتابة المقالات الإنشائية والتقارير', 'التحضير لاختبارات الشهادة الثانوية (Abitur / MSA)'],
        },
        {
          title: 'المحادثة واللغة الألمانية كلغة ثانية (DaZ)',
          badge: 'التواصل والاندماج',
          items: ['تنمية المفردات اليومية والمدرسية', 'تصحيح مخارج الحروف والنطق', 'دعم الطلاب المنتقلين حديثاً لألمانيا', 'الثقة الكاملة في التعبير والمشاركة'],
        },
        {
          title: 'التدريب لامتحانات Goethe و telc',
          badge: 'استراتيجيات الامتحان',
          items: ['التعرف على تقسيم الوقت وهيكل الأسئلة', 'تمارين مكثفة على نصوص القراءة والاستماع', 'محاكاة كاملة للجزء الشفوي في الامتحان', 'مراجعة أخطاء النماذج التجريبية'],
        },
      ],
      faqs: [
        {
          question: 'هل تمنح Success Path Mentors شهادات Goethe أو telc الرسمية؟',
          answer: 'لا. نحن نقدم دروس تقوية وتدريب تحضيري مكثف للاستعداد لهذه الاختبارات. تمنح الشهادات الرسمية حصرياً من مراكز الاختبارات المرخصة التابعة لمعهد غوته أو telc.',
        },
        {
          question: 'هل يمكنكم مساعدة طفل انتقل حديثاً إلى ألمانيا ويعاني في المدرسة؟',
          answer: 'نعم بالتأكيد! هذا أحد تخصصاتنا الأساسية. نساعد الطلاب متعددي اللغات على فهم مصطلحات المناهج الألمانية بسرعة ومجاراة زملائهم في الصف.',
        },
      ],
    },
  },

  // ==========================================
  // LANGUAGE 3: FRENCH TUTORING
  // ==========================================
  'languages/french': {
    en: {
      slug: 'languages/french',
      category: 'language',
      serviceId: 'french',
      showCefrDisclaimer: true,
      seo: {
        title: 'French Tutoring & Language Support | Success Path Mentors Europe',
        description: 'Comprehensive French tutoring for school, conversation, and DELF/DALF exam preparation tutoring across Germany and Europe.',
        keywords: ['French tutoring Germany', 'French tutor online', 'school French help', 'DELF preparation tutor', 'French language classes'],
      },
      hero: {
        badge: 'All Levels (A1–C2 Reference)',
        title: 'French Tutoring & Language Support',
        headline: 'Strengthen French Skills for School Success and Fluency.',
        subheadline: 'Engaging French tutoring designed to support school language requirements, conversational ability, and DELF/DALF exam-preparation tutoring.',
        primaryCta: 'Book a Free Trial',
        secondaryCta: 'Chat on WhatsApp',
      },
      highlightsTitle: 'Core Areas of French Tutoring',
      highlightsSubheadline: 'Structured learning for second-language learners and heritage speakers.',
      highlights: [
        {
          title: 'School French Support',
          description: 'Supporting middle and high school students with grammar, vocab, and exam preparations.',
          iconName: 'book',
        },
        {
          title: 'Spoken Fluency & Pronunciation',
          description: 'Practicing natural French pronunciation, rhythm, and everyday conversational dialogue.',
          iconName: 'sparkles',
        },
        {
          title: 'Conjugations & Grammar Mechanics',
          description: 'Demystifying French verb tenses, agreements, pronouns, and subjunctive forms.',
          iconName: 'target',
        },
        {
          title: 'DELF / DALF Exam-Prep Tutoring',
          description: 'Targeted preparation tutoring for students sitting standardized DELF/DALF exams.',
          iconName: 'award',
        },
        {
          title: 'Adult French for Travel & Work',
          description: 'Practical French for adult learners seeking language proficiency for career or travel.',
          iconName: 'user',
        },
        {
          title: 'Reading Comprehension',
          description: 'Analyzing French texts, articles, and short literature with confidence.',
          iconName: 'compass',
        },
      ],
      curriculumTitle: 'French Tutoring Curriculum',
      curriculumSubheadline: 'Personalized for academic, conversational, and exam goals.',
      curriculumPillars: [
        {
          title: 'Secondary School French',
          badge: 'School',
          items: ['Verb conjugations (passé composé, imparfait, etc.)', 'Vocabulary lists & sentence structure', 'School test preparation & oral exams', 'Abitur / Baccalaureate support'],
        },
        {
          title: 'Conversation & Fluency',
          badge: 'Speaking',
          items: ['Pronunciation & accent refinement', 'Active dialogue & roleplay', 'Listening comprehension of native speakers', 'Everyday communication skills'],
        },
        {
          title: 'DELF / DALF Exam Prep Tutoring',
          badge: 'Prep',
          items: ['Compréhension orale & écrite training', 'Production écrite essay strategies', 'Production orale interview coaching', 'Practice drills with sample papers'],
        },
      ],
      faqs: [
        {
          question: 'Do you issue official DELF or DALF diplomas?',
          answer: 'No. SPM provides exam-preparation tutoring only. Official diplomas are issued exclusively by the French Ministry of National Education through accredited testing centers.',
        },
        {
          question: 'Can absolute beginners join French lessons?',
          answer: 'Yes! We guide learners from the very first greeting and phonetics through structured introductory lessons.',
        },
      ],
    },
    de: {
      slug: 'languages/french',
      category: 'language',
      serviceId: 'french',
      showCefrDisclaimer: true,
      seo: {
        title: 'Französischnachhilfe & Sprachförderung | Success Path Mentors Europe',
        description: 'Qualifizierte Französischnachhilfe für Schule und Alltag in Deutschland. Grammatik, Konversation, Vokabeltraining und DELF Prüfungsvorbereitungsnachhilfe.',
        keywords: ['Französischnachhilfe', 'Französisch Nachhilfe online', 'Französisch 2. Fremdsprache', 'DELF Nachhilfe'],
      },
      hero: {
        badge: 'Alle Niveaustufen (A1–C2 Orientierung)',
        title: 'Französischnachhilfe & Sprachförderung',
        headline: 'Französischkompetenz gezielt stärken für Schule und Prüfungen.',
        subheadline: 'Motivierende Französischnachhilfe als 2. oder 3. Fremdsprache in der Schule sowie für Erwachsene. Sichere Konjugationen, flüssige Aussprache und gezieltes Prüfungstraining.',
        primaryCta: 'Kostenlose Probestunde buchen',
        secondaryCta: 'Per WhatsApp beraten lassen',
      },
      highlightsTitle: 'Unsere Schwerpunkte in Französisch',
      highlightsSubheadline: 'Unterstützung für Gymnasium, Realschule und individuelle Sprachlerner.',
      highlights: [
        {
          title: 'Schulfranzösisch (2. & 3. Fremdsprache)',
          badge: 'Schule',
          description: 'Sicherheit gewinnen bei Schulaufgaben, Vokabeltests und mündlicher Beteiligung.',
          iconName: 'book',
        },
        {
          title: 'Aussprache & flüssiges Sprechen',
          description: 'Klare französische Aussprache und natürlicher Sprachfluss ohne Hemmungen.',
          iconName: 'sparkles',
        },
        {
          title: 'Verbkonjugationen & Grammatik',
          description: 'Systematisches Beherrschen von Passé composé, Imparfait, Subjonctif und Pronomen.',
          iconName: 'target',
        },
        {
          title: 'DELF-Prüfungsvorbereitungsnachhilfe',
          description: 'Intensives Training der Prüfungsbereiche Hören, Lesen, Schreiben und Sprechen.',
          iconName: 'award',
        },
        {
          title: 'Französisch für Erwachsene',
          description: 'Praxisnaher Sprachunterricht für Reisen, Beruf und private Interessen.',
          iconName: 'user',
        },
        {
          title: 'Leseverständnis & Textarbeit',
          description: 'Verstehen und Zusammenfassen französischer Texte und Kurzgeschichten.',
          iconName: 'compass',
        },
      ],
      curriculumTitle: 'Unterrichtsbereiche Französisch',
      curriculumSubheadline: 'Abgestimmt auf die Anforderungen des jeweiligen Bundesland-Lehrplans.',
      curriculumPillars: [
        {
          title: 'Schulunterricht Französisch',
          badge: 'Klassen 6–12',
          items: ['Zeitenfolge & unregelmäßige Verben', 'Objektpronomen & Satzbauregeln', 'Textproduktionen & Zusammenfassungen', 'Abiturvorbereitung Französisch'],
        },
        {
          title: 'Sprechpraxis & Konversation',
          badge: 'Kommunikativ',
          items: ['Lautbildung & französische Phonetik', 'Dialoge in realen Alltagssituationen', 'Hörverständnis authentischer Sprecher', 'Aktive Wortschatzerweiterung'],
        },
        {
          title: 'DELF Vorbereitungstraining',
          badge: 'Zertifikatstraining',
          items: ['Modellaufgaben für DELF A1–B2', 'Strategien für schriftliche Aufsätze', 'Simulation der mündlichen Prüfungsstationen', 'Korrektur und gezielte Fehleranalyse'],
        },
      ],
      faqs: [
        {
          question: 'Stellt Success Path Mentors offizielle DELF-Diplome aus?',
          answer: 'Nein. Wir bieten Vorbereitungsnachhilfe an. Die offiziellen Diplome werden ausschließlich von den autorisierten Zentren des Institut français vergeben.',
        },
        {
          question: 'Mein Kind hat große Schwierigkeiten mit den französischen Zeiten. Können Sie helfen?',
          answer: 'Ja, das Verwechseln von Imparfait und Passé composé ist eine der häufigsten Hürden. Unsere Lehrkräfte erklären diese Unterschiede anschaulich mit praxisnahen Beispielen.',
        },
      ],
    },
    ar: {
      slug: 'languages/french',
      category: 'language',
      serviceId: 'french',
      showCefrDisclaimer: true,
      seo: {
        title: 'دروس تقوية ودعم اللغة الفرنسية | Success Path Mentors Europe',
        description: 'دروس تقوية متميزة في اللغة الفرنسية للمناهج المدرسية والمحادثة والتحضير لاختبارات DELF/DALF في ألمانيا وأوروبا.',
        keywords: ['تقوية لغة فرنسية', 'دروس فرنسي أونلاين', 'تحضير دلف فرنسي', 'معلم فرنسي خاص', 'محادثة فرنسية'],
      },
      hero: {
        badge: 'كافة المستويات (مرجع A1–C2)',
        title: 'دروس تقوية ودعم اللغة الفرنسية',
        headline: 'طوّر مستواك في الفرنسية للمدرسة والمحادثة والتحضير لاختبارات DELF/DALF.',
        subheadline: 'تعليم تفاعلي مبسط للغة الفرنسية للمدارس الأوروبية، والمحادثة اليومية، والتدريب على شهادات DELF و DALF مع معلمين متمرسين.',
        primaryCta: 'احجز حصة تجريبية مجانية',
        secondaryCta: 'تواصل عبر واتساب',
      },
      highlightsTitle: 'أهم محاور تدريس اللغة الفرنسية',
      highlightsSubheadline: 'مساعدة الطلاب والدارسين على إتقان النطق والقواعد بسهولة ويسر.',
      highlights: [
        {
          title: 'دعم المناهج المدرسية',
          description: 'مساعدة طلاب المدارس في اجتياز الامتحانات والواجبات وإتقان اللغة الأجنبية الثانية.',
          iconName: 'book',
        },
        {
          title: 'النطق والطلاقة الشفوية',
          description: 'التدريب على مخارج الحروف الصوتية الفرنسية والتحدث بسلاسة دون تردد.',
          iconName: 'sparkles',
        },
        {
          title: 'تصريف الأفعال والقواعد',
          description: 'شرح مبسط للأزمنة وتصريف الأفعال الشاذة وقواعد الضمائر وتركيب الجمل.',
          iconName: 'target',
        },
        {
          title: 'التدريب لامتحانات DELF و DALF',
          description: 'دروس تحضيرية مكثفة للتدرب على نماذج أسئلة الاختبارات الدولية المعتمدة.',
          iconName: 'award',
        },
        {
          title: 'الفرنسية للبالغين ولأغراض السفر',
          description: 'لغة عملية للمحادثات اليومية والسياحة والتواصل المهني والثقافي.',
          iconName: 'user',
        },
        {
          title: 'فهم النصوص والتحليل الأدبي',
          description: 'قراءة واستيعاب النصوص والقصص القصيرة وتلخيصها بأسلوب لغوي سليم.',
          iconName: 'compass',
        },
      ],
      curriculumTitle: 'المسارات التعليمية في اللغة الفرنسية',
      curriculumSubheadline: 'برامج مصممة وفق أهداف الطالب والمستوى الدراسي.',
      curriculumPillars: [
        {
          title: 'الفرنسية لطلاب المدارس',
          badge: 'المنهج المدرسي',
          items: ['أزمنة الماضي والمستقبل وتوافق الأفعال', 'قواعد أدوات الوصل والضمائر', 'كتابة المقالات والفقرات الوصفية', 'التحضير للامتحانات المدرسية والنهائية'],
        },
        {
          title: 'المحادثة والنطق السليم',
          badge: 'تطبيقي',
          items: ['مخارج الأصوات والحركات الفرنسية', 'حوارات تطبيقية من واقع الحياة', 'الاستماع لمقاطع صوتية واضحة', 'بناء الجمل التلقائية'],
        },
        {
          title: 'التدريب لاختبارات DELF/DALF',
          badge: 'تدريب الامتحانات',
          items: ['التدرب على قسم الاستماع والفهم', 'استراتيجيات التعبير الكتابي', 'محاكاة المقابلة الشفوية الرسمية', 'تقييم تجريبي لمعرفة نقاط القوة والضعف'],
        },
      ],
      faqs: [
        {
          question: 'هل تمنح Success Path Mentors شهادات DELF أو DALF الرسمية؟',
          answer: 'لا. نقدم حصص تدريب تحضيرية للاختبارات فقط. تُمنح الدبلومات والشهادات الرسمية حصرياً من قِبل المراكز المعتمدة التابعة لوزارة التربية الفرنسية والمراكز الثقافية الفرنسية.',
        },
        {
          question: 'هل يمكن البدء من الصفر تماماً للمبتدئين؟',
          answer: 'نعم بكل تأكيد، نبدأ مع المبتدئ من الحروف والأصوات الفرنسية والكلمات التمهيدية الأولى.',
        },
      ],
    },
  },

  // ==========================================
  // LANGUAGE 4: ARABIC TUTORING
  // ==========================================
  'languages/arabic': {
    en: {
      slug: 'languages/arabic',
      category: 'language',
      serviceId: 'arabic',
      showCefrDisclaimer: true,
      seo: {
        title: 'Arabic Tutoring & Language Support | Success Path Mentors Europe',
        description: 'Comprehensive Arabic tutoring across Germany and Europe. Heritage language learning, literacy, grammar, conversation, and Arabic for non-native speakers.',
        keywords: ['Arabic tutoring Germany', 'Arabic tutor Europe', 'heritage Arabic lessons', 'Arabic for children online', 'learn Arabic online'],
      },
      hero: {
        badge: 'Beginner to Advanced',
        title: 'Arabic Tutoring & Language Support',
        headline: 'Arabic for Heritage Learners and New Speakers.',
        subheadline: 'Structured, culturally engaging Arabic tutoring. From reading, writing, and phonetics for children of European expatriates to spoken conversation and formal Arabic for adults.',
        primaryCta: 'Book a Free Trial',
        secondaryCta: 'Chat on WhatsApp',
      },
      highlightsTitle: 'Our Arabic Tutoring Pathways',
      highlightsSubheadline: 'Bridging cultural connection and linguistic competence for all ages.',
      highlights: [
        {
          title: 'Arabic for Heritage Learners',
          description: 'Helping children of Arab families in Europe read, write, and speak Arabic with confidence.',
          iconName: 'book',
        },
        {
          title: 'Phonics, Alphabet & Literacy',
          description: 'Step-by-step mastery of Arabic script, letters, vowel markings (Harakat), and reading fluency.',
          iconName: 'sparkles',
        },
        {
          title: 'Modern Standard Arabic (Fusha)',
          description: 'Clear grammar (Nahw & Sarf), structured vocabulary, and formal written expression.',
          iconName: 'target',
        },
        {
          title: 'Spoken Dialects & Conversation',
          description: 'Practical communication skills in major regional dialects alongside Standard Arabic.',
          iconName: 'compass',
        },
        {
          title: 'Arabic for Non-Native Speakers',
          description: 'Gentle, modern communicative methodology tailored for learners with no previous Arabic background.',
          iconName: 'user',
        },
        {
          title: 'Cultural & Community Connection',
          description: 'Connecting language to literature, stories, and cultural understanding.',
          iconName: 'award',
        },
      ],
      curriculumTitle: 'Curriculum & Focus Areas',
      curriculumSubheadline: 'Tailored for children, teenagers, and adult learners.',
      curriculumPillars: [
        {
          title: 'Foundation & Literacy (Ages 5+)',
          badge: 'Literacy',
          items: ['Arabic letters & connecting forms', 'Short and long vowels (Harakat)', 'Word decoding & pronunciation', 'Guided reading of short stories'],
        },
        {
          title: 'Language Skills & Grammar',
          badge: 'Intermediate',
          items: ['Sentence construction & vocabulary building', 'Essential grammar principles (Nahw)', 'Reading comprehension & writing paragraphs', 'Dialogue and oral presentation'],
        },
        {
          title: 'Adults & Non-Native Learners',
          badge: 'Fluency',
          items: ['Conversational Arabic basics', 'Media & professional Arabic', 'Customized travel or business focus', 'Cultural context and idiomatic expressions'],
        },
      ],
      faqs: [
        {
          question: 'Are lessons suitable for children born in Germany who only speak German or English at school?',
          answer: 'Yes, this is our primary focus for heritage Arabic. Our tutors use encouraging, bilingual methods so children feel engaged without stress.',
        },
        {
          question: 'Do you teach Modern Standard Arabic or dialects?',
          answer: 'We teach Modern Standard Arabic (Fusha) for reading, writing, and academic literacy, and can integrate spoken conversational practice based on your family’s preference.',
        },
      ],
    },
    de: {
      slug: 'languages/arabic',
      category: 'language',
      serviceId: 'arabic',
      showCefrDisclaimer: true,
      seo: {
        title: 'Arabischnachhilfe & Sprachförderung | Success Path Mentors Europe',
        description: 'Qualifizierter Arabischunterricht in Deutschland und Europa. Herkunftssprachlicher Unterricht, Lesen & Schreiben, Grammatik und Arabisch für Nicht-Muttersprachler.',
        keywords: ['Arabischnachhilfe', 'Arabisch lernen online', 'Arabischunterricht Kinder', 'Arabisch Herkunftssprache', 'Arabischlehrer'],
      },
      hero: {
        badge: 'Vom Anfänger bis zum Fortgeschrittenen',
        title: 'Arabischnachhilfe & Sprachförderung',
        headline: 'Arabisch für Muttersprachler, Herkunftssprachler und Neueinsteiger.',
        subheadline: 'Strukturierter, kulturnaher Arabischunterricht. Vom Erlernen des Alphabets und der Schrift für in Europa aufwachsende Kinder bis hin zur gehobenen Schriftsprache (Fusha).',
        primaryCta: 'Kostenlose Probestunde buchen',
        secondaryCta: 'Per WhatsApp beraten lassen',
      },
      highlightsTitle: 'Unsere Schwerpunkte in Arabisch',
      highlightsSubheadline: 'Förderung der sprachlichen Identität und fundierte Sprachvermittlung für jedes Alter.',
      highlights: [
        {
          title: 'Arabisch als Herkunftssprache',
          description: 'Kinder arabischstämmiger Familien in Europa lernen sicher lesen, schreiben und flüssig sprechen.',
          iconName: 'book',
        },
        {
          title: 'Schrift, Alphabet & Phonetik',
          description: 'Schrittweises Erlernen der arabischen Buchstaben, Vokalisierung (Harakat) und Schreibregeln.',
          iconName: 'sparkles',
        },
        {
          title: 'Hocharabisch (Fusha)',
          description: 'Grammatiklehre (Nahw & Sarf), Textverständnis und gehobener schriftlicher Ausdruck.',
          iconName: 'target',
        },
        {
          title: 'Konversation & Dialekte',
          description: 'Praktische Sprachpraxis im Alltag und Verständnis gängiger regionaler Dialekte.',
          iconName: 'compass',
        },
        {
          title: 'Arabisch für Nicht-Muttersprachler',
          description: 'Moderner, didaktisch aufbereiteter Unterricht für Erwachsene und Schüler ohne Vorkenntnisse.',
          iconName: 'user',
        },
        {
          title: 'Kulturelle Bildung & Geschichten',
          description: 'Altersgerechte arabische Literatur, Fabeln und kulturelles Hintergrundwissen.',
          iconName: 'award',
        },
      ],
      curriculumTitle: 'Unterrichtsbereiche Arabisch',
      curriculumSubheadline: 'Passgenau abgestimmt auf Kinder, Jugendliche und Erwachsene.',
      curriculumPillars: [
        {
          title: 'Alphabetisierung & Grundlagen',
          badge: 'Ab 5 Jahren',
          items: ['Buchstabenformen am Wortanfang, -mitte & -ende', 'Kurze & lange Vokale (Harakat)', 'Silbenlesen & fehlerfreie Aussprache', 'Lesen erster kurzer Kindergeschichten'],
        },
        {
          title: 'Sprachaufbau & Grammatik',
          badge: 'Aufbau',
          items: ['Satzbildung & aktiver Wortschatzaufbau', 'Wichtige Grammatikregeln (Nahw & Sarf)', 'Kreatives Schreiben & Diktate', 'Freies Sprechen & Präsentieren'],
        },
        {
          title: 'Arabisch für Erwachsene',
          badge: 'Praxis',
          items: ['Alltagskonversation & Redewendungen', 'Medien- & Wirtschaftsarabisch', 'Reise- und Berufsbezogenes Vokabular', 'Kulturelle Feinheiten verstehen'],
        },
      ],
      faqs: [
        {
          question: 'Ist der Unterricht für Kinder geeignet, die in Deutschland aufwachsen und vor allem Deutsch sprechen?',
          answer: 'Ja, genau darauf sind unsere Lehrkräfte spezialisiert. Mit viel Geduld und zweisprachiger Unterstützung lernen Kinder spielerisch und ohne Druck.',
        },
        {
          question: 'Unterrichten Sie Hocharabisch oder Dialekt?',
          answer: 'Wir unterrichten standardmäßig Hocharabisch (Fusha) für das Lesen und Schreiben und binden nach Wunsch Alltagskonversation ein.',
        },
      ],
    },
    ar: {
      slug: 'languages/arabic',
      category: 'language',
      serviceId: 'arabic',
      showCefrDisclaimer: true,
      seo: {
        title: 'دروس تقوية وتعليم اللغة العربية | Success Path Mentors Europe',
        description: 'تعليم اللغة العربية لأبناء الجاليات والمتعلمين الجدد في ألمانيا وأوروبا. القراءة والكتابة، النحو، المحادثة، واللغة العربية الفصحى مع معلمين متخصصين.',
        keywords: ['تعليم لغة عربية في ألمانيا', 'لغة عربية لأبناء المهجر', 'دروس عربي أونلاين', 'معلم لغة عربية خاص', 'تعلم القراءة والكتابة بالعربية'],
      },
      hero: {
        badge: 'من الحروف الأولى حتى الإتقان',
        title: 'دروس تقوية وتعليم اللغة العربية',
        headline: 'لغة عربية متقنة لأبناء الجاليات والمتعلمين الجدد من الأساسيات حتى الإتقان.',
        subheadline: 'تعليم منظم ومشوق للغة العربية الفصحى والقراءة والكتابة. نربط أبناءنا في أوروبا بلغتهم الأم وهويتهم الثقافية بأساليب تعليمية حديثة وممتعة.',
        primaryCta: 'احجز حصة تجريبية مجانية',
        secondaryCta: 'تواصل عبر واتساب',
      },
      highlightsTitle: 'أهم مسارات تعليم اللغة العربية',
      highlightsSubheadline: 'تعليم يبني حب اللغة ويرسخ قواعد القراءة السليمة والتعبير الفصيح.',
      highlights: [
        {
          title: 'العربية لأبناء الجاليات في المهجر',
          description: 'مساعدة الأطفال المولودين في أوروبا على إتقان التحدث والقراءة والكتابة بطلاقة.',
          iconName: 'book',
        },
        {
          title: 'الحروف الهجائية والتأسيس القرائي',
          description: 'تعليم الحروف بأشكالها المختلفة، والحركات القصيرة والطويلة، والمدود والشدة والتنوين.',
          iconName: 'sparkles',
        },
        {
          title: 'اللغة العربية الفصحى وقواعد النحو',
          description: 'تبسيط قواعد النحو والصرف وتدريب الطلاب على صياغة الجمل العربية الفصيحة.',
          iconName: 'target',
        },
        {
          title: 'المحادثة والتعبير الشفوي',
          description: 'تشجيع الطالب على التحدث باللغة العربية بثقة في محيط الأسرة والمناسبات.',
          iconName: 'compass',
        },
        {
          title: 'العربية لغير الناطقين بها',
          description: 'مناهج عصرية وتدريجية للمتعلمين الجدد والبالغين الراغبين في تعلم لغة الضاد.',
          iconName: 'user',
        },
        {
          title: 'القصص والارتباط الثقافي',
          description: 'استخدام القصص المصورة والأناشيد التربوية لربط الطالب بالثقافة العربية الأصيلة.',
          iconName: 'award',
        },
      ],
      curriculumTitle: 'المستويات التعليمية في اللغة العربية',
      curriculumSubheadline: 'محتوى متدرج يناسب كل فئة عمرية ومستوى معرفي.',
      curriculumPillars: [
        {
          title: 'التأسيس القرائي والكتابي (من سن 5 سنوات)',
          badge: 'تأسيس',
          items: ['رسم الحروف الهجائية في بداية ووسط ونهاية الكلمة', 'الحركات (فتحة، ضمة، كسرة، سكون)', 'تهجئة الكلمات وقراءتها بطلاقة', 'قراءة نصوص وقصص مبسطة'],
        },
        {
          title: 'بناء الجمل وقواعد اللغة',
          badge: 'متوسط',
          items: ['تركيب الجمل الاسمية والفعلية', 'أساسيات النحو وتطبيقات الإعراب', 'التعبير الإنشائي وكتابة اليوميات', 'الإملاء الصحيح والتمييز بين التاء والهاء'],
        },
        {
          title: 'المحادثة واللغة الفصحى المتقدمة',
          badge: 'متقدم',
          items: ['الحوار والمناقشة باللغة الفصحى', 'قراءة النصوص الأدبية والتحليل الفكري', 'توسيع المفردات والمصطلحات التعبيرية', 'اللغة العربية لغير الناطقين بها'],
        },
      ],
      faqs: [
        {
          question: 'هل تناسب الدروس أطفالاً لا يعرفون الحروف العربية إطلاقاً؟',
          answer: 'نعم بكل تأكيد. نبدأ مع الطفل من الصفر بالصوت والصورة ونستخدم وسائل تفاعلية تحببه في تعلم لغته خطوة بخطوة.',
        },
        {
          question: 'هل المعلمون قادرون على التحدث بالألمانية أو الإنجليزية مع الأطفال إذا لزم الأمر؟',
          answer: 'نعم، يمتلك معلمونا كفاءة لغوية تمكنهم من توجيه الأطفال باللغة الألمانية أو الإنجليزية عند الحاجة لضمان فهم التوجيهات دون توتر.',
        },
      ],
    },
  },

  // ==========================================
  // SCHOOL 1: GRADES 1–6 (FOUNDATION)
  // ==========================================
  'school/grades-1-6': {
    en: {
      slug: 'school/grades-1-6',
      category: 'school',
      serviceId: 'grades-1-6',
      seo: {
        title: 'Foundation Years Tutoring (Grades 1–6) | Success Path Mentors Europe',
        description: 'Online tutoring for primary school students in Grades 1 to 6. Early literacy, math foundations, homework habits, and learning gap recovery.',
        keywords: ['primary school tutoring', 'Grades 1 to 6 tutoring', 'elementary math tutor', 'reading support children', 'school tutoring Europe'],
      },
      hero: {
        badge: 'Foundation Years — Grades 1–6',
        title: 'Foundation Years Tutoring — Grades 1–6',
        headline: 'Strong Foundations Start Early.',
        subheadline: 'Patient, encouraging online tutoring for primary and transition years. We build mathematics confidence, reading fluency, structured homework routines, and self-belief.',
        primaryCta: 'Book a Free Trial',
        secondaryCta: 'Chat on WhatsApp',
      },
      highlightsTitle: 'Why Foundation Years Matter Most',
      highlightsSubheadline: 'Addressing misunderstandings early prevents compounding difficulties in secondary school.',
      highlights: [
        {
          title: 'Mathematics Foundations',
          description: 'Multiplication tables, fractions, word problems, and mental math explained step-by-step.',
          iconName: 'target',
        },
        {
          title: 'Reading & Literacy Confidence',
          description: 'Phonics, reading comprehension speed, sentence writing, and vocabulary building.',
          iconName: 'book',
        },
        {
          title: 'Stress-Free Homework Habits',
          description: 'Guiding learners to organize, focus, and complete daily school assignments independently.',
          iconName: 'clock',
        },
        {
          title: 'Closing Early Learning Gaps',
          description: 'Identifying and resolving topics missed during previous school terms.',
          iconName: 'sparkles',
        },
        {
          title: 'Bilingual & Relocation Support',
          description: 'Helping children transitioning into German or English school systems catch up quickly.',
          iconName: 'compass',
        },
        {
          title: 'Confidence & Joy of Learning',
          description: 'Positive reinforcement that transforms school anxiety into genuine curiosity and pride.',
          iconName: 'award',
        },
      ],
      curriculumTitle: 'Key Focus Areas for Grades 1–6',
      curriculumSubheadline: 'Carefully aligned with European primary school learning stages.',
      curriculumPillars: [
        {
          title: 'Primary Mathematics',
          badge: 'Grades 1–6',
          items: ['Basic arithmetic & number sense', 'Fractions, decimals & percentages', 'Word problems (Sachaufgaben)', 'Measurement, geometry & time'],
        },
        {
          title: 'Language & Literacy',
          badge: 'Grades 1–6',
          items: ['Reading comprehension & storytelling', 'Spelling rules & grammar fundamentals', 'Creative writing & short reports', 'German, English, or French school support'],
        },
        {
          title: 'Study Skills & Routine',
          badge: 'Habits',
          items: ['Daily homework checklist & review', 'Organizing school binders & materials', 'Concentration techniques & pacing', 'Preparation for secondary school transition'],
        },
      ],
      faqs: [
        {
          question: 'Are online lessons effective for young children in grades 1 to 3?',
          answer: 'Yes! Our tutors use highly visual, engaging interactive tools, digital whiteboards, and short activities designed specifically to maintain young learners’ focus.',
        },
        {
          question: 'Do parents need to sit through every lesson?',
          answer: 'Parents of very young children often help them set up their device for the first 5 minutes. Afterwards, our tutors guide the child through the session, providing a summary at the end.',
        },
      ],
    },
    de: {
      slug: 'school/grades-1-6',
      category: 'school',
      serviceId: 'grades-1-6',
      seo: {
        title: 'Grundschul- & Orientierungsnachhilfe (Klassen 1–6) | Success Path Mentors Europe',
        description: 'Einfühlsame Online-Nachhilfe für die Grundschule und Orientierungsstufe (Klassen 1 bis 6). Mathematik-Grundlagen, Lesen, Rechtschreibung und Hausaufgabenbegleitung.',
        keywords: ['Grundschulnachhilfe', 'Nachhilfe Klasse 1 bis 6', 'Mathe Grundschule', 'Deutsch Grundschule', 'Übertritt Gymnasium'],
      },
      hero: {
        badge: 'Klassen 1–6 (Grundschule & Orientierungsstufe)',
        title: 'Grundschul- und Orientierungsnachhilfe — Klassen 1–6',
        headline: 'Ein starkes Fundament beginnt früh.',
        subheadline: 'Geduldige und motivierende Online-Nachhilfe für die Klassen 1 bis 6. Wir vermitteln sichere Grundlagen in Mathe und Deutsch, etablieren feste Hausaufgabenroutinen und stärken das Selbstvertrauen.',
        primaryCta: 'Kostenlose Probestunde buchen',
        secondaryCta: 'Per WhatsApp beraten lassen',
      },
      highlightsTitle: 'Warum die Klassen 1–6 entscheidend sind',
      highlightsSubheadline: 'Wer Lücken frühzeitig schließt, vermeidet spätere Überforderung auf der weiterführenden Schule.',
      highlights: [
        {
          title: 'Mathematische Grundfertigkeiten',
          description: 'Zahlenraum, Einmaleins, Grundrechenarten, Bruchrechnen und Sachaufgaben verständlich erklärt.',
          iconName: 'target',
        },
        {
          title: 'Lesen, Rechtschreibung & Deutsch',
          description: 'Lesefluss, Textverständnis, Wortarten und sichere Rechtschreibstrategien.',
          iconName: 'book',
        },
        {
          title: 'Entspannte Hausaufgabenroutine',
          description: 'Strukturierter Ablauf, der Kindern hilft, ihre Schulaufgaben konzentriert und selbstständig zu erledigen.',
          iconName: 'clock',
        },
        {
          title: 'Lernlücken schließen',
          description: 'Gezieltes Nachholen von verpasstem Stoff, bevor neue Themen darauf aufbauen.',
          iconName: 'sparkles',
        },
        {
          title: 'Unterstützung beim Schulwechsel / Übertritt',
          description: 'Gezielte Vorbereitung auf den Übergang zum Gymnasium, zur Realschule oder Gesamtschule.',
          iconName: 'compass',
        },
        {
          title: 'Freude am Lernen wecken',
          description: 'Lob, Motivation und Erfolgserlebnisse verwandeln Schulfrust in neues Selbstbewusstsein.',
          iconName: 'award',
        },
      ],
      curriculumTitle: 'Unterrichtsbereiche Klassen 1–6',
      curriculumSubheadline: 'Exakt orientiert an den Rahmenlehrplänen der Grund- und Orientierungsstufen.',
      curriculumPillars: [
        {
          title: 'Mathematik (Klassen 1–6)',
          badge: 'Grundschule',
          items: ['Zahlenverständnis & Grundrechenarten', 'Geometrie, Maßeinheiten & Uhrzeiten', 'Text- & Sachaufgaben systematisch lösen', 'Einführung in Brüche & Dezimalzahlen'],
        },
        {
          title: 'Deutsch & Sprache',
          badge: 'Grundschule',
          items: ['Lesetraining & Leseverständnis', 'Rechtschreibung (Groß-/Kleinschreibung, Dehnung)', 'Aufsatztraining (Bildergeschichten, Nacherzählungen)', 'Grammatik (Nomen, Verben, Adjektive)'],
        },
        {
          title: 'Lernorganisation & Arbeitsverhalten',
          badge: 'Kompetenz',
          items: ['Konzentrationsübungen', 'Schulmappen & Arbeitsplatz organisieren', 'Selbstständiges Lernen fördern', 'Vorbereitung auf Klassenarbeiten'],
        },
      ],
      faqs: [
        {
          question: 'Funktioniert Online-Unterricht auch bei jüngeren Grundschulkindern?',
          answer: 'Ja, absolut. Unsere Lehrkräfte nutzen bunte, interaktive Tafeln, kindgerechte Übungen und kurze Einheiten, die Kinder aktiv einbinden und Spaß machen.',
        },
        {
          question: 'Müssen Eltern während der gesamten Unterrichtsstunde anwesend sein?',
          answer: 'Es reicht völlig aus, dem Kind kurz beim Starten der Session zu helfen. Den eigentlichen Unterricht gestaltet die Lehrkraft eigenständig.',
        },
      ],
    },
    ar: {
      slug: 'school/grades-1-6',
      category: 'school',
      serviceId: 'grades-1-6',
      seo: {
        title: 'دروس المرحلة الابتدائية والتأسيس (الصفوف 1–6) | Success Path Mentors Europe',
        description: 'دروس تقوية عبر الإنترنت لطلاب المرحلة الابتدائية (الصفوف 1 إلى 6). تأسيس الرياضيات، القراءة، المتابعة اليومية للواجبات، وبناء الثقة بالنفس.',
        keywords: ['تقوية المرحلة الابتدائية', 'دروس الصفوف 1 إلى 6', 'تأسيس رياضيات أطفال', 'متابعة واجبات مدرسية', 'معلم ابتدائي خاص'],
      },
      hero: {
        badge: 'المرحلة الابتدائية — الصفوف 1–6',
        title: 'دروس المرحلة الابتدائية والتأسيس — الصفوف 1–6',
        headline: 'التأسيس القوي يصنع فارقاً مستداماً منذ البداية.',
        subheadline: 'تعليم تفاعلي مفعم بالصبر والتشجيع لطلاب المرحلة الابتدائية. نرسخ أساسيات الرياضيات، وطلاقة القراءة والكتابة، وننظم حل الواجبات اليومية لنبني ثقة دائمة في نفس الطالب.',
        primaryCta: 'احجز حصة تجريبية مجانية',
        secondaryCta: 'تواصل عبر واتساب',
      },
      highlightsTitle: 'أهمية مرحلة التأسيس الأولى',
      highlightsSubheadline: 'معالجة الصعوبات في سن مبكرة تمنع تراكم الفجوات التعليمية في المراحل اللاحقة.',
      highlights: [
        {
          title: 'أساسيات الرياضيات والحساب',
          description: 'جداول الضرب، والكسور، والعمليات الحسابية، والمسائل اللفظية مشروحة خطوة بخطوة.',
          iconName: 'target',
        },
        {
          title: 'القراءة والكتابة السليمة',
          description: 'تطوير سرعة القراءة والاستيعاب والإملاء السليم والتعبير الكتابي المنسق.',
          iconName: 'book',
        },
        {
          title: 'تنظيم إنجاز الواجبات اليومية',
          description: 'تدريب الطالب على التركيز وإنهاء واجباته المدرسية دون ضغوط أو مماطلة.',
          iconName: 'clock',
        },
        {
          title: 'سد الفجوات التعليمية المبكرة',
          description: 'تشخيص وتدارك المفاهيم التي لم يفهمها الطالب جيداً في الفصل الدراسي.',
          iconName: 'sparkles',
        },
        {
          title: 'دعم الطلاب في بيئة لغوية جديدة',
          description: 'مساعدة الأطفال في المدارس الأوروبية على فهم مصطلحات المناهج باللغة الألمانية أو الإنجليزية.',
          iconName: 'compass',
        },
        {
          title: 'غرس حب التعلم والثقة',
          description: 'التحفيز الإيجابي المستمر الذي يحول مشاعر القلق المدرسي إلى دافعية وفخر بالنجاح.',
          iconName: 'award',
        },
      ],
      curriculumTitle: 'المجالات التدريسية للصفوف 1–6',
      curriculumSubheadline: 'متوافقة مع المناهج المعتمدة للمرحلة الابتدائية في المدارس الأوروبية.',
      curriculumPillars: [
        {
          title: 'الرياضيات التأسيسية',
          badge: 'الصفوف 1–6',
          items: ['الحساب والعمليات الأربع', 'الكسور والأعداد العشرية والنسب', 'المسائل الحياتية واللفظية (Sachaufgaben)', 'الهندسة والقياس والوحدات'],
        },
        {
          title: 'اللغات والقراءة',
          badge: 'الصفوف 1–6',
          items: ['فهم المقروء وسرعة الاستيعاب', 'القواعد اللغوية الأساسية والإملاء', 'كتابة الموضوعات التعبيرية البسيطة', 'دعم مناهج الألمانية أو الإنجليزية المدرسية'],
        },
        {
          title: 'مهارات المذاكرة والنظام',
          badge: 'مهارات',
          items: ['جدول إنجاز الواجبات المنزلية', 'تنظيم الدفاتر والأدوات المدرسية', 'تمارين زيادة التركيز والانتباه', 'الاستعداد للانتقال للمرحلة المتوسطة'],
        },
      ],
      faqs: [
        {
          question: 'هل تناسب الدروس عبر الإنترنت الأطفال الصغار في الصفوف 1 إلى 3؟',
          answer: 'نعم بالتأكيد! يستخدم معلمونا أساليب بصرية وتفاعلية وألعاباً تعليمية قصيرة تبقي الطفل متحمساً ومتفاعلاً طوال الجلسة.',
        },
        {
          question: 'هل يتوجب على ولي الأمر الجلوس طوال الحصة مع الطفل؟',
          answer: 'يحتاج الطفل فقط للمساعدة في تشغيل الجهاز في أول 5 دقائق، ثم يتولى المعلم قيادة الحصة بالكامل بأسلوب مريح ومحبب.',
        },
      ],
    },
  },

  // ==========================================
  // SCHOOL 2: GRADES 7–9 (MIDDLE YEARS)
  // ==========================================
  'school/grades-7-9': {
    en: {
      slug: 'school/grades-7-9',
      category: 'school',
      serviceId: 'grades-7-9',
      seo: {
        title: 'Middle Years Tutoring (Grades 7–9) | Success Path Mentors Europe',
        description: 'Targeted tutoring for students in Grades 7 to 9. Math, science, languages, homework support, and closing learning gaps before secondary school finals.',
        keywords: ['middle school tutoring', 'Grades 7 to 9 tutoring', 'middle school math tutor', 'science tutoring online', 'academic support teens'],
      },
      hero: {
        badge: 'Middle Years — Grades 7–9',
        title: 'Middle Years Tutoring — Grades 7–9',
        headline: 'Close Gaps Before They Become Bigger Problems.',
        subheadline: 'Proactive academic support for middle school students navigating increasingly demanding coursework. We strengthen mathematics, sciences, and languages while reinforcing independent study skills.',
        primaryCta: 'Book a Free Trial',
        secondaryCta: 'Chat on WhatsApp',
      },
      highlightsTitle: 'Why Grades 7–9 Are Academic Turning Points',
      highlightsSubheadline: 'Academic demands spike in middle school. We help teenagers stay ahead and build lasting confidence.',
      highlights: [
        {
          title: 'Mathematics & Algebra Transitions',
          description: 'Algebraic equations, geometry, graphs, functions, and word problem strategies.',
          iconName: 'target',
        },
        {
          title: 'Core Science Mastery',
          description: 'Physics, chemistry, and biology fundamentals explained with clear everyday analogies.',
          iconName: 'book',
        },
        {
          title: 'Language Strengthening',
          description: 'Grammar, text analysis, and essay writing in German, English, and French.',
          iconName: 'sparkles',
        },
        {
          title: 'Learning-Gap Recovery',
          description: 'Catching up on essential concepts before high school grades impact final transcripts.',
          iconName: 'compass',
        },
        {
          title: 'Independent Study & Exam Skills',
          description: 'Time management, summary note-taking, revision plans, and test-taking composure.',
          iconName: 'clock',
        },
        {
          title: 'Mentorship & Motivation',
          description: 'Relatable tutors who know how to engage teenagers and rekindle their motivation.',
          iconName: 'award',
        },
      ],
      curriculumTitle: 'Subjects Supported in Grades 7–9',
      curriculumSubheadline: 'Matched to your state or national secondary curriculum.',
      curriculumPillars: [
        {
          title: 'Mathematics',
          badge: 'Grades 7–9',
          items: ['Linear equations & inequalities', 'Geometry, Pythagoras & trigonometry basics', 'Functions, proportions & percentages', 'Probability, statistics & data charts'],
        },
        {
          title: 'Sciences',
          badge: 'Grades 7–9',
          items: ['Physics: forces, energy, motion & electricity', 'Chemistry: atoms, periodic table, reactions', 'Biology: cells, genetics & human systems', 'Scientific problem solving & lab reports'],
        },
        {
          title: 'Languages & Humanities',
          badge: 'Grades 7–9',
          items: ['German grammar, interpretation & essays', 'English reading, essays & oral presentations', 'French 2nd language support & grammar drills', 'History & geography assignment review'],
        },
      ],
      faqs: [
        {
          question: 'Can my teenager combine math and a language in their tutoring plan?',
          answer: 'Yes. Our flexible tutoring programs allow families to balance sessions between mathematics, science, and languages according to upcoming exam schedules.',
        },
        {
          question: 'How do tutors handle reluctant or unmotivated teenagers?',
          answer: 'Our tutors are supportive mentors who explain topics without condescension. When students see real understanding click, motivation naturally follows.',
        },
      ],
    },
    de: {
      slug: 'school/grades-7-9',
      category: 'school',
      serviceId: 'grades-7-9',
      seo: {
        title: 'Mittelstufennachhilfe (Klassen 7–9) | Success Path Mentors Europe',
        description: 'Gezielte Nachhilfe für Schüler der Klassen 7 bis 9. Mathematik, Naturwissenschaften, Sprachen und Schließen von Lernlücken vor den Abschlussprüfungen.',
        keywords: ['Mittelstufennachhilfe', 'Nachhilfe Klasse 7 bis 9', 'Mathe Mittelstufe', 'Physik Nachhilfe', 'Gymnasium Nachhilfe'],
      },
      hero: {
        badge: 'Klassen 7–9 (Mittelstufe / Sekundarstufe I)',
        title: 'Mittelstufennachhilfe — Klassen 7–9',
        headline: 'Lernlücken schließen, bevor sie zu großen Hürden werden.',
        subheadline: 'Gezielte Unterstützung für die anspruchsvolle Mittelstufe am Gymnasium, an der Realschule und Gesamtschule. Wir stärken Mathematik, Naturwissenschaften und Sprachen und vermitteln selbstständige Lernmethoden.',
        primaryCta: 'Kostenlose Probestunde buchen',
        secondaryCta: 'Per WhatsApp beraten lassen',
      },
      highlightsTitle: 'Warum die Klassen 7–9 entscheidend sind',
      highlightsSubheadline: 'Der Stoff zieht spürbar an. Wir helfen Schülern, den Anschluss zu halten und gute Noten zu sichern.',
      highlights: [
        {
          title: 'Mathematik & Algebra meistern',
          description: 'Gleichungssysteme, Geometrie, Satz des Pythagoras, Prozentrechnen und Funktionen.',
          iconName: 'target',
        },
        {
          title: 'Naturwissenschaften verstehen',
          description: 'Physik, Chemie und Biologie greifbar und verständlich aufbereitet.',
          iconName: 'book',
        },
        {
          title: 'Sprachkompetenz festigen',
          description: 'Sicherheit in Deutsch, Englisch und Französisch bei Textanalysen und Grammatik.',
          iconName: 'sparkles',
        },
        {
          title: 'Lernlücken nachhaltig schließen',
          description: 'Verpassten Stoff aufarbeiten, bevor er den späteren Schulabschluss gefährdet.',
          iconName: 'compass',
        },
        {
          title: 'Selbstständige Lernstrategien',
          description: 'Zeitmanagement, strukturierte Lernzettel, Klausurvorbereitung und Stressabbau.',
          iconName: 'clock',
        },
        {
          title: 'Motivierende Mentoren',
          description: 'Lehrkräfte auf Augenhöhe, die Teenager verstehen und neu für Fächer begeistern.',
          iconName: 'award',
        },
      ],
      curriculumTitle: 'Fächerangebot Klassen 7–9',
      curriculumSubheadline: 'Exakt abgestimmt auf die Lehrpläne der Bundesländer.',
      curriculumPillars: [
        {
          title: 'Mathematik',
          badge: 'Klassen 7–9',
          items: ['Lineare Gleichungen & Ungleichungen', 'Satz des Pythagoras & Dreieckslehre', 'Lineare & quadratische Funktionen', 'Wahrscheinlichkeitsrechnung & Statistik'],
        },
        {
          title: 'Naturwissenschaften',
          badge: 'Klassen 7–9',
          items: ['Physik: Mechanik, Elektrizitätslehre, Optik', 'Chemie: Atombau, Periodensystem, Reaktionen', 'Biologie: Zellbiologie, Genetik, Ökologie', 'Aufgabenverständnis & Formelanwendung'],
        },
        {
          title: 'Sprachen',
          badge: 'Klassen 7–9',
          items: ['Deutsch: Textanalyse, Erörterung & Grammatik', 'Englisch: Textverständnis, Mediation & Vokabular', 'Französisch: Zeiten, Pronomen & Konversation', 'Vorbereitung auf Zwischenprüfungen'],
        },
      ],
      faqs: [
        {
          question: 'Kann mein Kind Nachhilfe in Mathe und einer Sprache kombinieren?',
          answer: 'Ja, absolut. Unsere flexiblen Unterrichtsmodelle erlauben es, Stunden je nach aktuellem Bedarf auf verschiedene Fächer aufzuteilen.',
        },
        {
          question: 'Wie motivieren die Lehrkräfte unentschlossene Teenager?',
          answer: 'Unsere Lehrkräfte begegnen Jugendlichen auf Augenhöhe, erklären geduldig ohne Vorwürfe und sorgen für schnelle Erfolgserlebnisse, die die Motivation zurückbringen.',
        },
      ],
    },
    ar: {
      slug: 'school/grades-7-9',
      category: 'school',
      serviceId: 'grades-7-9',
      seo: {
        title: 'دروس المرحلة المتوسطة (الصفوف 7–9) | Success Path Mentors Europe',
        description: 'دروس تقوية منهجية لطلاب المرحلة المتوسطة (الصفوف 7 إلى 9). الرياضيات، العلوم، اللغات، وسد الفجوات التعليمية قبل مرحلة الشهادات النهائية.',
        keywords: ['تقوية المرحلة المتوسطة', 'دروس الصفوف 7 إلى 9', 'رياضيات متوسط', 'فيزياء وكيمياء أونلاين', 'معلم خاص للمراهقين'],
      },
      hero: {
        badge: 'المرحلة المتوسطة — الصفوف 7–9',
        title: 'دروس المرحلة المتوسطة — الصفوف 7–9',
        headline: 'سد الفجوات التعليمية قبل أن تصبح عوائق في مسار الطالب.',
        subheadline: 'دعم دراسي استباقي لطلاب المرحلة المتوسطة في مواجهة المناهج المتزايدة صعوبة. نرسخ مفاهيم الرياضيات والعلوم واللغات، وننمي مهارات الدراسة الذاتية والتنظيم.',
        primaryCta: 'احجز حصة تجريبية مجانية',
        secondaryCta: 'تواصل عبر واتساب',
      },
      highlightsTitle: 'أهمية مرحلة الصفوف 7–9 الأكاديمية',
      highlightsSubheadline: 'تزداد متطلبات الدراسة في هذه المرحلة؛ نساعد الطلاب على التميز والتفوق بثقة واستقرار.',
      highlights: [
        {
          title: 'تمكن كامل من الجبر والهندسة',
          description: 'المعادلات الخطية، ونظرية فيثاغورس، والدوال، واستراتيجيات حل المسائل المعقدة.',
          iconName: 'target',
        },
        {
          title: 'تبسيط مفاهيم العلوم',
          description: 'شرح مبسط لقوانين الفيزياء والكيمياء والأحياء بأمثلة تطبيقية واضحة.',
          iconName: 'book',
        },
        {
          title: 'تعزيز المهارات اللغوية',
          description: 'تحليل النصوص وكتابة المقالات في اللغات الألمانية والإنجليزية والفرنسية.',
          iconName: 'sparkles',
        },
        {
          title: 'سد الفجوات المتراكمة',
          description: 'تدارك ما فات الطالب قبل أن يؤثر على معدلاته المؤهلة للمرحلة الثانوية.',
          iconName: 'compass',
        },
        {
          title: 'مهارات الدراسة والاستعداد للاختبارات',
          description: 'إدارة الوقت، وكتابة الملخصات المركزة، والتغلب على التوتر أثناء الاختبارات.',
          iconName: 'clock',
        },
        {
          title: 'إرشاد تربوي وتحفيز مستمر',
          description: 'معلمون قادرون على كسب ثقة المراهقين وتحفيزهم على الإنجاز والمسؤولية.',
          iconName: 'award',
        },
      ],
      curriculumTitle: 'المواد المدعومة في الصفوف 7–9',
      curriculumSubheadline: 'متوافقة مع المناهج المدرسية للمدارس الثانوية والمتوسطة الأوروبية.',
      curriculumPillars: [
        {
          title: 'الرياضيات',
          badge: 'الصفوف 7–9',
          items: ['المعادلات والمتباينات الخطية', 'الهندسة ونظرية فيثاغورس والزوايا', 'الدوال والتناسب والنسب المئوية', 'الإحصاء ونظرية الاحتمالات'],
        },
        {
          title: 'العلوم الطبيعية',
          badge: 'الصفوف 7–9',
          items: ['الفيزياء: القوى والطاقة والحركة والكهرباء', 'الكيمياء: الذرة والجدول الدوري والمعادلات', 'الأحياء: الخلية والوراثة والأنظمة الحيوية', 'حل المسائل العلمية وتفسير التجارب'],
        },
        {
          title: 'اللغات والمواد المدرسية',
          badge: 'الصفوف 7–9',
          items: ['الألمانية: تحليل النصوص وقواعد التعبير', 'الإنجليزية: فهم المقروء والمحادثة والمقالات', 'الفرنسية: قواعد الأفعال والتمارين المدرسية', 'المراجعة المنتظمة للاختبارات الفصلية'],
        },
      ],
      faqs: [
        {
          question: 'هل يمكن للطالب الجمع بين مادة علمية وأخرى لغوية؟',
          answer: 'نعم بكل تأكيد، تتيح برامجنا المرنة توزيع الحصص بين الرياضيات واللغات والعلوم وفق حاجة الطالب وجدول اختباراته.',
        },
        {
          question: 'كيف يتعامل المعلمون مع الطلاب المترددين في هذا العمر؟',
          answer: 'يتعامل معلمونا بأسلوب راقٍ يحترم شخصية الطالب المراهق، ويشرح بدون إصدار أحكام، مما يبني الثقة ويحفز الرغبة الحقيقية في التحسن.',
        },
      ],
    },
  },

  // ==========================================
  // SCHOOL 3: GRADES 10–12 (SENIOR SCHOOL)
  // ==========================================
  'school/grades-10-12': {
    en: {
      slug: 'school/grades-10-12',
      category: 'school',
      serviceId: 'grades-10-12',
      seo: {
        title: 'Senior School Tutoring & Exam Support (Grades 10–12) | Success Path Mentors Europe',
        description: 'Advanced tutoring for Grades 10 to 12. Advanced calculus, physics, chemistry, biology, English, German, French, and graduation exam preparation.',
        keywords: ['senior school tutoring', 'Grades 10 to 12 tutoring', 'Abitur tutoring Germany', 'calculus tutor online', 'exam preparation tutoring'],
      },
      hero: {
        badge: 'Senior School — Grades 10–12',
        title: 'Senior School Tutoring & Exam Support — Grades 10–12',
        headline: 'Higher Grades Need a Smarter Plan.',
        subheadline: 'Rigorous, exam-focused tutoring for senior students. Advanced calculus, sciences, essay masterclasses, and university-readiness support designed to maximize final transcripts.',
        primaryCta: 'Book a Free Trial',
        secondaryCta: 'Chat on WhatsApp',
      },
      highlightsTitle: 'Strategic Support for Final School Years',
      highlightsSubheadline: 'When every decimal point counts toward university admission, our specialized tutors deliver precision.',
      highlights: [
        {
          title: 'Advanced Mathematics & Calculus',
          description: 'Differential calculus, integrals, analytic geometry, vector mathematics, and probability matrices.',
          iconName: 'target',
        },
        {
          title: 'Rigorous Sciences (Physics, Chem, Bio)',
          description: 'Thermodynamics, organic chemistry, electrochemistry, genetics, and molecular biology.',
          iconName: 'book',
        },
        {
          title: 'Exam Preparation & Past Papers',
          description: 'Abitur, Matura, IB, or A-Level preparation tutoring with real past exam question walkthroughs.',
          iconName: 'award',
        },
        {
          title: 'Academic Writing & Essay Polish',
          description: 'In-depth literary analysis, argumentative structuring, source citation, and thesis development.',
          iconName: 'sparkles',
        },
        {
          title: 'Study Strategy & Time Optimization',
          description: 'Balancing coursework demands, avoiding burnout, and maximizing revision efficiency.',
          iconName: 'clock',
        },
        {
          title: 'University-Readiness Coaching',
          description: 'Building the independent analytical thinking required for STEM and humanities degree programs.',
          iconName: 'compass',
        },
      ],
      curriculumTitle: 'Senior School Disciplines',
      curriculumSubheadline: 'In-depth tutoring across advanced academic subjects.',
      curriculumPillars: [
        {
          title: 'Advanced Mathematics',
          badge: 'Grades 10–12',
          items: ['Analysis: limits, derivatives & integration', 'Linear algebra & vector geometry in 3D', 'Stochastics, distributions & hypothesis tests', 'Calculus exam problem walkthroughs'],
        },
        {
          title: 'Advanced Sciences',
          badge: 'Grades 10–12',
          items: ['Physics: mechanics, wave optics, quantum physics', 'Chemistry: organic reactions, kinetics & equilibria', 'Biology: neurobiology, ecology & evolution', 'Exam calculation drills & essay explanations'],
        },
        {
          title: 'Senior Languages & Humanities',
          badge: 'Grades 10–12',
          items: ['German: advanced literary analysis & argumentation', 'English: rhetorical devices, commentary & essays', 'French: complex text analysis & synthesis', 'Graduation exam strategy & simulation'],
        },
      ],
      faqs: [
        {
          question: 'Do tutors specialize in the specific Abitur requirements of my German federal state?',
          answer: 'Yes. Our senior tutors are familiar with federal state curricula (such as Bavaria, NRW, Baden-Württemberg, etc.) and train students directly on regional exam requirements.',
        },
        {
          question: 'Can you help with preparation for international programs like IB or A-Levels?',
          answer: 'Yes, we have tutors specialized in both German national systems and international baccalaureate/English curriculum streams.',
        },
      ],
    },
    de: {
      slug: 'school/grades-10-12',
      category: 'school',
      serviceId: 'grades-10-12',
      seo: {
        title: 'Oberstufennachhilfe & Abiturvorbereitung (Klassen 10–12) | Success Path Mentors Europe',
        description: 'Spezialisierte Nachhilfe für die Oberstufe (Klassen 10 bis 12) und gezielte Abiturvorbereitung. Mathe-Leistungskurs, Physik, Chemie, Deutsch und Fremdsprachen.',
        keywords: ['Oberstufennachhilfe', 'Abitur Nachhilfe', 'Klasse 10 bis 12 Nachhilfe', 'Mathe Oberstufe', 'Abiturvorbereitung online'],
      },
      hero: {
        badge: 'Klassen 10–12 (Oberstufe & Abiturvorbereitung)',
        title: 'Senior School Tutoring & Exam Support — Grades 10–12',
        headline: 'Higher Grades Need a Smarter Plan.',
        subheadline: 'Präzise, leistungsorientierte Nachhilfe für die Oberstufe und das Abitur. Analysis, Vektorgeometrie, Naturwissenschaften und anspruchsvolle Sprachanalysen für Ihren Wunsch-Notendurchschnitt.',
        primaryCta: 'Kostenlose Probestunde buchen',
        secondaryCta: 'Per WhatsApp beraten lassen',
      },
      highlightsTitle: 'Gezielte Unterstützung für die Oberstufe',
      highlightsSubheadline: 'Wenn jeder Notenpunkt für den Numerus Clausus (NC) und das Wunschstudium zählt.',
      highlights: [
        {
          title: 'Oberstufenmathematik & Analysis',
          description: 'Kurvendiskussion, Differential- und Integralrechnung, analytische Geometrie und Stochastik.',
          iconName: 'target',
        },
        {
          title: 'Naturwissenschaften auf Kursniveau',
          description: 'Physik, Chemie und Biologie verständlich und prüfungssicher aufbereitet.',
          iconName: 'book',
        },
        {
          title: 'Abitur-Prüfungstraining',
          description: 'Gezieltes Lösen von Original-Abituraufgaben und Simulation mündlicher Prüfungen.',
          iconName: 'award',
        },
        {
          title: 'Aufsatztraining & Textanalyse',
          description: 'Souveräne Beherrschung literarischer Erörterungen, Sachtextanalysen und Essays.',
          iconName: 'sparkles',
        },
        {
          title: 'Effizientes Zeit- & Lernmanagement',
          description: 'Strukturierte Lernpläne, um den hohen Stoffumfang der Oberstufe gelassen zu bewältigen.',
          iconName: 'clock',
        },
        {
          title: 'Vorbereitung auf das Hochschulstudium',
          description: 'Vermittlung des wissenschaftlichen Arbeitens und analytischen Denkens.',
          iconName: 'compass',
        },
      ],
      curriculumTitle: 'Fächerangebot Oberstufe',
      curriculumSubheadline: 'Für Grundkurse (GK) und Leistungskurse (LK) aller Bundesländer.',
      curriculumPillars: [
        {
          title: 'Mathematik Oberstufe',
          badge: 'GK & LK',
          items: ['Analysis: Ableitungsregeln, Integrale, e-Funktionen', 'Lineare Algebra & Analytische Geometrie im Raum', 'Stochastik: Binomialverteilung & Hypothesentests', 'Intensives Klausur- & Abiturtraining'],
        },
        {
          title: 'Naturwissenschaften',
          badge: 'Oberstufe',
          items: ['Physik: Quantenphysik, Felder, Relativitätstheorie', 'Chemie: Energetik, Gleichgewichte, Organik', 'Biologie: Genetik, Neurobiologie, Evolution', 'Lösen komplexer Transferaufgaben'],
        },
        {
          title: 'Sprachen & Geisteswissenschaften',
          badge: 'Abiturniveau',
          items: ['Deutsch: Dramenanalyse, Epochen & Erörterung', 'Englisch: Landeskunde, Comment, Essay & Textanalyse', 'Französisch: Anspruchsvolle Texte & Abiturvorbereitung', 'Mündliche Prüfungssimulation (Kolloquium)'],
        },
      ],
      faqs: [
        {
          question: 'Berücksichtigen die Lehrkräfte die Lehrpläne der einzelnen Bundesländer?',
          answer: 'Ja, unsere Oberstufenlehrkräfte kennen die länderspezifischen Abiturvorgaben (z.B. Bayern, NRW, Baden-Württemberg etc.) genau und bereiten zielgerichtet darauf vor.',
        },
        {
          question: 'Unterstützen Sie auch bei internationalen Abschlüssen wie dem IB (International Baccalaureate)?',
          answer: 'Ja, wir verfügen über Lehrkräfte mit Erfahrung im IB-Curriculum (Mathematics HL/SL, Physics, Chemistry etc.).',
        },
      ],
    },
    ar: {
      slug: 'school/grades-10-12',
      category: 'school',
      serviceId: 'grades-10-12',
      seo: {
        title: 'دروس المرحلة الثانوية والتحضير للاختبارات (الصفوف 10–12) | Success Path Mentors Europe',
        description: 'دروس تقوية متقدمة للمرحلة الثانوية واختبارات القبول والشهادة النهائية (الصفوف 10 إلى 12). التفاضل والتكامل، الفيزياء، الكيمياء، واللغات للوصول لأعلى معدل.',
        keywords: ['تقوية المرحلة الثانوية', 'دروس الصفوف 10 إلى 12', 'تحضير امتحان الأبيتور', 'تفاضل وتكامل أونلاين', 'معلم فيزياء وكيمياء ثانوي'],
      },
      hero: {
        badge: 'المرحلة الثانوية والشهادة النهائية — الصفوف 10–12',
        title: 'دروس المرحلة الثانوية والتحضير للاختبارات — الصفوف 10–12',
        headline: 'الدرجات العالية والتحضير للجامعة يتطلبان خطة عمل ذكية ومدروسة.',
        subheadline: 'تعليم دقيق ومكثف يركز على الامتحانات النهائية لطلاب المرحلة الثانوية. التفاضل والتكامل، والعلوم المتقدمة، وتحليل النصوص الأدبية لبلوغ أعلى المعدلات المؤهلة للجامعة.',
        primaryCta: 'احجز حصة تجريبية مجانية',
        secondaryCta: 'تواصل عبر واتساب',
      },
      highlightsTitle: 'دعم استراتيجي لسنوات التخرج الحاسمة',
      highlightsSubheadline: 'حيث كل درجة تصنع فارقاً في القبول الجامعي للتخصص الذي تطمح إليه.',
      highlights: [
        {
          title: 'الرياضيات المتقدمة والتفاضل والتكامل',
          description: 'دراسة الدوال، والتفاضل والتكامل، والهندسة الفراغية ثلاثية الأبعاد، ونظريات الاحتمال.',
          iconName: 'target',
        },
        {
          title: 'المسارات العلمية المتقدمة',
          description: 'الفيزياء الحديثة، والكيمياء العضوية، وعلم الوراثة والأحياء الدقيقة.',
          iconName: 'book',
        },
        {
          title: 'التدريب على نماذج الامتحانات النهائية',
          description: 'حل ومناقشة امتحانات الشهادات السابقة (Abitur / IB) ومحاكاة ظروف الاختبار الواقعية.',
          iconName: 'award',
        },
        {
          title: 'إتقان الكتابة الأكاديمية والتحليل الأدبي',
          description: 'صياغة المقالات النقدية، وبناء الحجج المقنعة، والتحليل العميق للنصوص الأدبية.',
          iconName: 'sparkles',
        },
        {
          title: 'تنظيم المذاكرة المكثفة وإدارة الوقت',
          description: 'جداول دراسية مدروسة توازن بين ضغط المناهج وتجنب الإرهاق قبل الامتحانات.',
          iconName: 'clock',
        },
        {
          title: 'الاستعداد للمرحلة الجامعية',
          description: 'اكتساب مهارات التفكير التحليلي والبحث المستقل التي تضمن التفوق في التخصصات الجامعية.',
          iconName: 'compass',
        },
      ],
      curriculumTitle: 'المواد المدعومة في المرحلة الثانوية',
      curriculumSubheadline: 'محتوى عميق وشامل يغطي المقررات التخصصية المتقدمة.',
      curriculumPillars: [
        {
          title: 'الرياضيات المتقدمة',
          badge: 'الصفوف 10–12',
          items: ['التفاضل والتكامل ودراسة سلوك الدوال المعقدة', 'الهندسة التحليلية والمتجهات في الفضاء', 'الإحصاء المتقدم والاحتمالات الشرطية', 'حل وتفكيك نماذج مسائل الامتحانات النهائية'],
        },
        {
          title: 'العلوم المتقدمة',
          badge: 'الصفوف 10–12',
          items: ['الفيزياء: الميكانيكا، الكهرومغناطيسية، فيزياء الكم', 'الكيمياء: التفاعلات العضوية، الاتزان، الديناميكا الحرارية', 'الأحياء: الوراثة، علم الأعصاب، الأنظمة الحيوية', 'تدريب مكثف على المسائل المركبة'],
        },
        {
          title: 'اللغات والعلوم الإنسانية',
          badge: 'مستوى التخرج',
          items: ['الألمانية: التحليل الأدبي المتقدم والمقالات النقدية', 'الإنجليزية: البلاغة والمقالات الأكاديمية والمقارنات', 'الفرنسية: تحليل النصوص الفلسفية والأدبية', 'محاكاة الاختبارات الشفوية النهائية'],
        },
      ],
      faqs: [
        {
          question: 'هل يراعي المعلمون متطلبات امتحان الثانوية (Abitur) للولاية التي يقيم فيها الطالب؟',
          answer: 'نعم. معلمونا على دراية تامة بمناهج واشتراطات كل ولاية ألمانية، ويدربون الطالب مباشرة على طبيعة الأسئلة المطلوبة في ولايته.',
        },
        {
          question: 'هل تقدمون دعماً للبرامج الدولية مثل البكالوريا الدولية (IB)؟',
          answer: 'نعم، لدينا معلمون ذوو خبرة واسعة في مناهج البكالوريا الدولية بمستوياتها العادية والمتقدمة (HL / SL).',
        },
      ],
    },
  },

  // ==========================================
  // ADULTS: ADULT LANGUAGE TUTORING
  // ==========================================
  adults: {
    en: {
      slug: 'adults',
      category: 'adults',
      serviceId: 'adults',
      showCefrDisclaimer: true,
      seo: {
        title: 'Adult Language Tutoring | Success Path Mentors Europe',
        description: 'Flexible online language tutoring for adults in German, English, French, and Arabic. Workplace communication, everyday conversation, interview prep, and relocation support.',
        keywords: ['adult language tutoring', 'German for adults', 'English for professionals', 'business language tutor Europe', 'adult tutoring online'],
      },
      hero: {
        badge: 'Tutoring for Life & Career',
        title: 'Adult Language Tutoring',
        headline: 'Learn for Life. Learn for Work. Learn for Your Next Opportunity.',
        subheadline: 'Focused, flexible online language tutoring designed specifically for adults. Master practical conversation, workplace communication, relocation language, or interview preparation with a dedicated tutor.',
        primaryCta: 'Book a Free Trial',
        secondaryCta: 'Chat on WhatsApp',
      },
      highlightsTitle: 'Tailored to Adult Learners',
      highlightsSubheadline: 'We respect your busy schedule and design lessons around your real-world priorities.',
      highlights: [
        {
          title: 'Flexible Evening & Weekend Hours',
          description: 'Lessons easily arranged around work commitments, family life, and travel schedules.',
          iconName: 'calendar',
        },
        {
          title: 'Workplace & Career Language',
          description: 'Professional terminology, emails, meeting participation, and industry-specific conversation.',
          iconName: 'target',
        },
        {
          title: 'Relocation & Everyday Integration',
          description: 'Practical German or English for bureaucracy, doctor visits, housing, and social life in Europe.',
          iconName: 'compass',
        },
        {
          title: 'Interview Preparation Coaching',
          description: 'Simulating job interviews, refining CV presentation, and practicing high-stakes conversations.',
          iconName: 'award',
        },
        {
          title: 'Active Spoken Dialogue',
          description: 'No passive lectures. Sessions are conversational, communicative, and immediately useful.',
          iconName: 'sparkles',
        },
        {
          title: 'Private 1-to-1 or Micro-Groups of 3',
          description: 'Choose between exclusive 1-to-1 attention or shared motivation in a small group of up to 3.',
          iconName: 'users',
        },
      ],
      curriculumTitle: 'Adult Language Focus Disciplines',
      curriculumSubheadline: 'Available in German, English, French, and Arabic.',
      curriculumPillars: [
        {
          title: 'Adult German (Deutsch)',
          badge: 'Focus',
          items: ['Everyday living & bureaucracy in Germany', 'Vocational German (Berufssprachkurs support)', 'Professional emails & office communication', 'Goethe / telc exam-preparation tutoring'],
        },
        {
          title: 'Adult English',
          badge: 'Focus',
          items: ['Business English & international meetings', 'Presentation skills & public speaking', 'Written correspondence & report refinement', 'General conversational fluency & travel'],
        },
        {
          title: 'Adult French & Arabic',
          badge: 'Focus',
          items: ['French for diplomacy, career, or personal passion', 'Arabic for heritage connection or business in MENA', 'Cultural immersion & nuanced conversation', 'Customized goal-oriented learning track'],
        },
      ],
      faqs: [
        {
          question: 'Do you provide accredited university degrees or diplomas for adult courses?',
          answer: 'No. Success Path Mentors is a private tutoring and educational support service. We focus on real communicative competence and practical skills. We do not issue accredited diplomas or degrees.',
        },
        {
          question: 'I haven’t studied a language in many years. Is that an issue?',
          answer: 'Not at all. Our adult tutors specialize in building confidence from any starting point without embarrassment, proceeding at whatever pace feels comfortable for you.',
        },
      ],
    },
    de: {
      slug: 'adults',
      category: 'adults',
      serviceId: 'adults',
      showCefrDisclaimer: true,
      seo: {
        title: 'Sprachunterricht für Erwachsene | Success Path Mentors Europe',
        description: 'Flexibler Online-Sprachunterricht für Erwachsene in Deutsch, Englisch, Französisch und Arabisch. Berufssprache, Alltagskonversation, Bewerbungstraining und Sprachtests.',
        keywords: ['Sprachkurs Erwachsene', 'Deutsch für Erwachsene', 'Business English Nachhilfe', 'Sprachunterricht online', 'Konversationstraining'],
      },
      hero: {
        badge: 'Sprachförderung für Beruf & Alltag',
        title: 'Sprachunterricht für Erwachsene',
        headline: 'Lernen fürs Leben, den Beruf und Ihren nächsten Karriereschritt.',
        subheadline: 'Zielgerichteter, flexibler Online-Sprachunterricht speziell für Erwachsene. Meistern Sie sichere Konversation, Berufssprache, Behördengänge oder Vorstellungsgespräche mit einer persönlichen Lehrkraft.',
        primaryCta: 'Kostenlose Probestunde buchen',
        secondaryCta: 'Per WhatsApp beraten lassen',
      },
      highlightsTitle: 'Maßgeschneidert für erwachsene Lernende',
      highlightsSubheadline: 'Wir passen uns Ihrem Berufsalltag an und konzentrieren uns auf Ihre tatsächlichen Ziele.',
      highlights: [
        {
          title: 'Flexible Termine am Abend & Wochenende',
          description: 'Unterrichtsstunden lassen sich unkompliziert vor oder nach der Arbeit und am Wochenende einplanen.',
          iconName: 'calendar',
        },
        {
          title: 'Berufssprache & Karriereförderung',
          description: 'Fachbegriffe, E-Mail-Korrespondenz, Verhandlungssicherheit und souveräne Meeting-Teilnahme.',
          iconName: 'target',
        },
        {
          title: 'Alltag & Integration in Deutschland',
          description: 'Praxisnahes Deutsch für Behördentermine, Arztbesuche, Wohnungssuche und das gesellschaftliche Leben.',
          iconName: 'compass',
        },
        {
          title: 'Vorbereitung auf Vorstellungsgespräche',
          description: 'Simulation typischer Bewerbungsgespräche, Präsentation des eigenen Lebenslaufs und sicheres Auftreten.',
          iconName: 'award',
        },
        {
          title: 'Aktiver Dialog statt trockener Theorie',
          description: 'Keine Frontalvorträge: Sie sprechen aktiv ab der ersten Stunde und wenden das Gelernte sofort an.',
          iconName: 'sparkles',
        },
        {
          title: 'Einzelunterricht oder Minigruppe (bis zu 3)',
          description: 'Wählen Sie zwischen voller Exklusivität im 1-zu-1 oder geteilten Kosten in einer 3er-Gruppe.',
          iconName: 'users',
        },
      ],
      curriculumTitle: 'Sprachschwerpunkte für Erwachsene',
      curriculumSubheadline: 'Verfügbar in Deutsch, Englisch, Französisch und Arabisch.',
      curriculumPillars: [
        {
          title: 'Deutsch für Erwachsene',
          badge: 'Schwerpunkt',
          items: ['Alltagskommunikation & Behördengänge', 'Deutsch im Beruf & Fachsprache', 'E-Mails & Geschäftskorrespondenz', 'Prüfungsvorbereitungsnachhilfe (telc / Goethe)'],
        },
        {
          title: 'Englisch für Erwachsene',
          badge: 'Schwerpunkt',
          items: ['Business English & internationale Meetings', 'Präsentationstraining & Rhetorik', 'Verhandlungssicherheit auf Englisch', 'Konversation für Reisen & Netzwerk'],
        },
        {
          title: 'Französisch & Arabisch',
          badge: 'Schwerpunkt',
          items: ['Französisch für Beruf, Kultur oder Reisen', 'Arabisch für den Beruf oder familiäre Wurzeln', 'Interkulturelle Sprachkompetenz', 'Individuell abgestimmter Lehrplan'],
        },
      ],
      faqs: [
        {
          question: 'Stellen Sie staatliche Abschlüsse oder Universitätszertifikate für Erwachsene aus?',
          answer: 'Nein. Success Path Mentors ist ein privater Nachhilfe- und Bildungsförderungsdienst. Wir vermitteln praktische, anwendbare Sprachkompetenz, stellen jedoch keine akkreditierten Hochschuldiplome aus.',
        },
        {
          question: 'Ich habe seit Jahren keine Sprache mehr gelernt. Ist das ein Problem?',
          answer: 'Überhaupt nicht! Unsere Lehrkräfte gehen verständnisvoll auf Ihren aktuellen Stand ein und bauen Ihre Sprachfähigkeiten in Ihrem individuellen Tempo auf.',
        },
      ],
    },
    ar: {
      slug: 'adults',
      category: 'adults',
      serviceId: 'adults',
      showCefrDisclaimer: true,
      seo: {
        title: 'تعليم اللغات وتطوير المهارات للبالغين | Success Path Mentors Europe',
        description: 'دروس لغات مرنة عبر الإنترنت للبالغين في الألمانية والإنجليزية والفرنسية والعربية. لغة العمل، المحادثة اليومية، التحضير لمقابلات التوظيف والاندماج في أوروبا.',
        keywords: ['تعليم لغات للبالغين', 'ألماني للعمل والاندماج', 'إنجليزي أعمال أونلاين', 'دروس خاصة للبالغين', 'محادثة لغات أونلاين'],
      },
      hero: {
        badge: 'تعليم مخصص للحياة والمسار المهني',
        title: 'تعليم اللغات وتطوير المهارات للبالغين',
        headline: 'تعلّم للحياة، وللعمل، ولفُرصتك القادمة بثقة واقتدار.',
        subheadline: 'تعليم لغوي تفاعلي ومرن مصمم خصيصاً للبالغين. أتقن المحادثة العملية، ولغة العمل، وتواصل بثقة مع المؤسسات والشركات، واستعد لمقابلات التوظيف مع معلمك الخاص.',
        primaryCta: 'احجز حصة تجريبية مجانية',
        secondaryCta: 'تواصل عبر واتساب',
      },
      highlightsTitle: 'مصمم خصيصاً ليناسب حياة البالغين',
      highlightsSubheadline: 'نحترم وقتك وجدولك المهني المزدحم، ونبني خطة الدرس حول أولوياتك الواقعية.',
      highlights: [
        {
          title: 'مواعيد مرنة مساءً وعطلات نهاية الأسبوع',
          description: 'جلسات تندمج بسهولة مع مواعيد عملك والتزاماتك العائلية.',
          iconName: 'calendar',
        },
        {
          title: 'لغة العمل والتواصل المهني',
          description: 'المصطلحات التخصصية، وكتابة المراسلات الرسمية، والمشاركة في الاجتماعات بطلاقة.',
          iconName: 'target',
        },
        {
          title: 'الاندماج والحياة اليومية في أوروبا',
          description: 'لغة عملية لمراجعة الدوائر الرسمية، ومواعيد الأطباء، والبحث عن سكن، والتعاملات الحياتية.',
          iconName: 'compass',
        },
        {
          title: 'التدريب على مقابلات العمل',
          description: 'محاكاة واقعية لمقابلات التوظيف، وشرح الخبرات والمهارات بثقة ودون ارتباك.',
          iconName: 'award',
        },
        {
          title: 'تطبيق عملي ومحادثة تفاعلية',
          description: 'بعيداً عن التلقين النظري؛ نركز على المحادثة المستمرة والتطبيق الفعلي من أول جلسة.',
          iconName: 'sparkles',
        },
        {
          title: 'دروس فردية أو مجموعات حتى 3 فقط',
          description: 'اختر بين الخصوصية التامة في الدروس الفردية أو المجموعات المصغرة الاقتصادية.',
          iconName: 'users',
        },
      ],
      curriculumTitle: 'المسارات اللغوية المتاحة للبالغين',
      curriculumSubheadline: 'متاحة باللغات الألمانية، والإنجليزية، والفرنسية، والعربية.',
      curriculumPillars: [
        {
          title: 'اللغة الألمانية للبالغين',
          badge: 'مسار عملي',
          items: ['الحياة اليومية والتعامل مع المؤسسات الألمانية', 'الألمانية المهنية وسوق العمل', 'صياغة الرسائل الإلكترونية الرسمية', 'التدريب لاختبارات اللغة (telc / Goethe)'],
        },
        {
          title: 'اللغة الإنجليزية للبالغين',
          badge: 'مسار مهني',
          items: ['الإنجليزية للأعمال والاجتماعات الدولية', 'مهارات الإلقاء وتقديم العروض التقديمية', 'المحادثة الحرة والسفر والشبكات المهنية', 'تطوير الكتابة المهنية والتقارير'],
        },
        {
          title: 'الفرنسية والعربية للبالغين',
          badge: 'مسار تخصصي',
          items: ['الفرنسية للأغراض الدبلوماسية والمهنية والثقافية', 'العربية لأسباب العمل أو التواصل مع الجذور', 'فهم الفروق الثقافية والتواصل الدقيق', 'خطة مرنة مبنية بالكامل على احتياجاتك'],
        },
      ],
      faqs: [
        {
          question: 'هل تمنح Success Path Mentors شهادات جامعية أو دبلومات أكاديمية معتمدة؟',
          answer: 'لا. Success Path Mentors هي خدمة دعم تعليمي وتدريسي خاص. نركز على تمكينك من المهارات اللغوية الحقيقية والتحدث بطلاقة، ولا نصدر شهادات أكاديمية أو درجات جامعية معتمدة.',
        },
        {
          question: 'لم أتعلم لغة جديدة منذ سنوات طويلة، هل يشكل ذلك عائقاً؟',
          answer: 'أبداً، معلمونا يتمتعون بصبر عالٍ وخبرة كبيرة في تشجيع المتعلمين البالغين وإعادة بناء ثقتهم وسرعتهم خطوة بخطوة.',
        },
      ],
    },
  },
};

export function getTutoringPage(slug: string, locale: TutoringLocale): TutoringPageContent | undefined {
  const pageMap = TUTORING_PAGES[slug];
  if (!pageMap) return undefined;
  return pageMap[locale] || pageMap.en;
}

export function getAllTutoringSlugs(): string[] {
  return Object.keys(TUTORING_PAGES);
}

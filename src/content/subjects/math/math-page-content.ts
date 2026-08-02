import type {
  SiteLocale,
} from '@/config/site';
import type {
  MathPageCopy,
} from '@/types/math-overview';

const mathPageContent: Record<
  SiteLocale,
  MathPageCopy
> = {
  en: {
    seo: {
      title:
        'Online Math Tutoring for Grades 2–12 | Mustafa Academy',
      description:
        'Explore one-to-one online math tutoring across number sense, fractions, algebra, functions, geometry, statistics, financial literacy, and advanced mathematics.',
      pathname: '/subjects/math',
    },

    hero: {
      eyebrow:
        'One-to-one online mathematics',
      title:
        'Online Math Tutoring for Grades 2–12',
      description:
        'Explore a structured mathematics roadmap that grows from foundational number concepts to algebra, functions, geometry, statistics, financial literacy, and senior secondary mathematics.',
      primaryAction:
        'Explore the curriculum',
      secondaryAction:
        'Book a free trial',
      breadcrumbLabel:
        'Math page breadcrumb',
      homeLabel: 'Home',
      subjectsLabel: 'Subjects',
      currentLabel: 'Mathematics',
      highlights: [
        {
          value: 'Grades 2–12',
          label:
            'Elementary, middle, and secondary support',
        },
        {
          value: 'One-to-one',
          label:
            'Lessons matched to the student and curriculum',
        },
        {
          value: 'Bilingual support',
          label:
            'Clear communication for multilingual families',
        },
      ],
      visualLabel:
        'Curriculum roadmap',
      visualTitle:
        'From foundations to advanced mathematics',
      visualDescription:
        'Browse by learning pathway or select the student’s grade to understand the areas covered.',
      visualStats: {
        grades: 'Grades',
        topics: 'Topics',
        pathways: 'Pathways',
      },
      visualTiles: {
        functions: 'Functions',
        advancedMath: 'Advanced math',
      },
    },

    explorer: {
      sectionEyebrow:
        'Math curriculum roadmap',
      sectionTitle:
        'Explore what we support',
      sectionDescription:
        'Choose a learning pathway to see how mathematics topics progress, or browse by grade to review the curriculum areas relevant to the student.',
      pathwaysTab:
        'Browse by pathway',
      gradesTab:
        'Browse by grade',
      pathwaysAriaLabel:
        'Browse mathematics curriculum by learning pathway',
      gradesAriaLabel:
        'Browse mathematics curriculum by grade',
      pathwayCardAction:
        'View topics and stages',
      gradeRangeLabel:
        'Grade range',
      topicsLabel: 'Topics',
      stagesLabel: 'Stages',
      selectedPathwayLabel:
        'Selected pathway',
      gradeStageDescription:
        'The stages below organize the curriculum topics by learning phase and grade.',
      selectedGradeLabel:
        'Selected grade',
      gradeOverviewDescription:
        'This summary shows the mathematics learning areas represented for the selected grade.',
      overlapNote:
        'Learning areas may overlap because a topic can support more than one pathway.',
      bookTrialLabel:
        'Find a math tutor',
      detailsHeading:
        'Learning stages',
      gradesIncludedLabel:
        'Grades included',
      stageTopicsLabel:
        'topics',
      gradeTopicsLabel:
        'curriculum topics',
      learningAreasLabel:
        'learning areas',
      topicOnlyNote:
        'Grade 11 source data contains topic names without detailed subtopic lists.',
      topicsHeading:
        'Curriculum topics by stage and grade',
      topicsDescription:
        'Every topic below comes from the stored mathematics curriculum data. Select a pathway above, then review the documented topics for each grade.',
      topicsInGradeLabel:
        'topics',
      topicOverviewLabel:
        'Overview',
      sourceTopicNamesNote:
        'Curriculum topic names are shown in English as documented in the source data so that the academic terminology is preserved.',
      gradeNames: {
        G2: 'Grade 2',
        G3: 'Grade 3',
        G4: 'Grade 4',
        G5: 'Grade 5',
        G6: 'Grade 6',
        G7: 'Grade 7',
        G8: 'Grade 8',
        G9: 'Grade 9',
        G10: 'Grade 10',
        G11: 'Grade 11',
        G12: 'Grade 12',
      },
      gradeShortNames: {
        G2: 'G2',
        G3: 'G3',
        G4: 'G4',
        G5: 'G5',
        G6: 'G6',
        G7: 'G7',
        G8: 'G8',
        G9: 'G9',
        G10: 'G10',
        G11: 'G11',
        G12: 'G12',
      },
    },

    cta: {
      eyebrow:
        'Personalized math support',
      title:
        'Not sure where the student should begin?',
      description:
        'Share the grade, curriculum, and learning goals. Our team can help match the student with an appropriate mathematics tutor and starting point.',
      primaryAction:
        'Book a free trial',
      secondaryAction:
        'Contact our team',
    },

    schema: {
      serviceName:
        'One-to-one Online Math Tutoring',
      serviceDescription:
        'Personalized online mathematics tutoring for students in Grades 2–12.',
    },
  },

  ar: {
    seo: {
      title:
        'دروس رياضيات أونلاين للصفوف 2–12 | أكاديمية مصطفى',
      description:
        'استكشف دروس الرياضيات الفردية أونلاين في الحس العددي والكسور والجبر والدوال والهندسة والإحصاء والثقافة المالية والرياضيات المتقدمة.',
      pathname: '/subjects/math',
    },

    hero: {
      eyebrow:
        'رياضيات فردية أونلاين',
      title:
        'دروس رياضيات أونلاين للصفوف من 2 إلى 12',
      description:
        'استكشف خارطة رياضيات منظمة تتدرج من المفاهيم العددية الأساسية إلى الجبر والدوال والهندسة والإحصاء والثقافة المالية ورياضيات المرحلة الثانوية المتقدمة.',
      primaryAction:
        'استكشف المنهج',
      secondaryAction:
        'احجز حصة تجريبية',
      breadcrumbLabel:
        'مسار صفحة الرياضيات',
      homeLabel:
        'الرئيسية',
      subjectsLabel:
        'المواد',
      currentLabel:
        'الرياضيات',
      highlights: [
        {
          value:
            'الصفوف 2–12',
          label:
            'دعم للمرحلة الابتدائية والمتوسطة والثانوية',
        },
        {
          value:
            'تعليم فردي',
          label:
            'حصص تناسب الطالب والمنهج الدراسي',
        },
        {
          value:
            'دعم ثنائي اللغة',
          label:
            'تواصل واضح مع الأسر متعددة اللغات',
        },
      ],
      visualLabel:
        'خارطة المنهج',
      visualTitle:
        'من الأساسيات إلى الرياضيات المتقدمة',
      visualDescription:
        'تصفح حسب المسار التعليمي أو اختر صف الطالب للتعرف إلى مجالات المنهج.',
      visualStats: {
        grades: 'الصفوف',
        topics: 'الموضوعات',
        pathways: 'المسارات',
      },
      visualTiles: {
        functions: 'الدوال',
        advancedMath: 'الرياضيات المتقدمة',
      },
    },

    explorer: {
      sectionEyebrow:
        'خارطة منهج الرياضيات',
      sectionTitle:
        'استكشف ما تغطيه الأكاديمية',
      sectionDescription:
        'اختر مسارًا تعليميًا لمتابعة تدرج موضوعات الرياضيات، أو تصفح حسب الصف للاطلاع على مجالات المنهج المناسبة للطالب.',
      pathwaysTab:
        'التصفح حسب المسار',
      gradesTab:
        'التصفح حسب الصف',
      pathwaysAriaLabel:
        'تصفح منهج الرياضيات حسب المسار التعليمي',
      gradesAriaLabel:
        'تصفح منهج الرياضيات حسب الصف',
      pathwayCardAction:
        'عرض الموضوعات والمراحل',
      gradeRangeLabel:
        'نطاق الصفوف',
      topicsLabel:
        'الموضوعات',
      stagesLabel:
        'المراحل',
      selectedPathwayLabel:
        'المسار المختار',
      gradeStageDescription:
        'تنظم المراحل أدناه موضوعات المنهج حسب المرحلة التعليمية والصف.',
      selectedGradeLabel:
        'الصف المختار',
      gradeOverviewDescription:
        'يوضح هذا الملخص مجالات تعلم الرياضيات الممثلة في الصف المختار.',
      overlapNote:
        'قد تتداخل مجالات التعلم لأن الموضوع الواحد يمكن أن يدعم أكثر من مسار.',
      bookTrialLabel:
        'ابحث عن مدرس رياضيات',
      detailsHeading:
        'المراحل التعليمية',
      gradesIncludedLabel:
        'الصفوف المشمولة',
      stageTopicsLabel:
        'موضوعًا',
      gradeTopicsLabel:
        'موضوعًا في المنهج',
      learningAreasLabel:
        'مجالات تعليمية',
      topicOnlyNote:
        'تحتوي بيانات الصف الحادي عشر على أسماء الموضوعات دون قوائم موضوعات فرعية تفصيلية.',
      topicsHeading:
        'موضوعات المنهج حسب المرحلة والصف',
      topicsDescription:
        'جميع الموضوعات أدناه مأخوذة مباشرة من بيانات منهج الرياضيات المخزنة. اختر المسار ثم راجع الموضوعات الموثقة لكل صف.',
      topicsInGradeLabel:
        'موضوعًا',
      topicOverviewLabel:
        'نظرة عامة',
      sourceTopicNamesNote:
        'تُعرض أسماء موضوعات المنهج بالإنجليزية كما وردت في المصدر للمحافظة على المصطلحات الأكاديمية الأصلية.',
      gradeNames: {
        G2: 'الصف الثاني',
        G3: 'الصف الثالث',
        G4: 'الصف الرابع',
        G5: 'الصف الخامس',
        G6: 'الصف السادس',
        G7: 'الصف السابع',
        G8: 'الصف الثامن',
        G9: 'الصف التاسع',
        G10: 'الصف العاشر',
        G11: 'الصف الحادي عشر',
        G12: 'الصف الثاني عشر',
      },
      gradeShortNames: {
        G2: 'الصف 2',
        G3: 'الصف 3',
        G4: 'الصف 4',
        G5: 'الصف 5',
        G6: 'الصف 6',
        G7: 'الصف 7',
        G8: 'الصف 8',
        G9: 'الصف 9',
        G10: 'الصف 10',
        G11: 'الصف 11',
        G12: 'الصف 12',
      },
    },

    cta: {
      eyebrow:
        'دعم رياضيات مخصص',
      title:
        'غير متأكد من نقطة البداية المناسبة للطالب؟',
      description:
        'شاركنا الصف والمنهج والأهداف التعليمية، وسيساعدك فريقنا في مطابقة الطالب مع مدرس رياضيات ونقطة بداية مناسبة.',
      primaryAction:
        'احجز حصة تجريبية',
      secondaryAction:
        'تواصل مع فريقنا',
    },

    schema: {
      serviceName:
        'دروس رياضيات فردية أونلاين',
      serviceDescription:
        'دروس رياضيات فردية ومخصصة أونلاين للطلاب من الصف الثاني حتى الصف الثاني عشر.',
    },
  },
};

export function getMathPageContent(
  locale: SiteLocale
): MathPageCopy {
  return mathPageContent[locale];
}
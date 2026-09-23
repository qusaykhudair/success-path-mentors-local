import type { SiteLocale } from '@/config/site';

interface TrustTransparencyContent {
  eyebrow: string;
  title: string;
  description: string;
  legalLabel: string;
  legalDescription: string;
  links: {
    process: {
      title: string;
      description: string;
      action: string;
    };
    contact: {
      title: string;
      description: string;
      action: string;
    };
    terms: {
      title: string;
      description: string;
      action: string;
    };
    privacy: {
      title: string;
      description: string;
      action: string;
    };
  };
}

export const trustTransparencyContent: Record<
  SiteLocale,
  TrustTransparencyContent
> = {
  en: {
    eyebrow: 'Trust and transparency',
    title: 'Information families can verify before starting',
    description:
      'Clear service information is part of responsible tutoring. These pages explain how tutoring is coordinated, how to contact the team, and which service and privacy terms apply.',
    legalLabel: 'North America legal organization',
    legalDescription:
      'The legal organization name shown here comes from the same market configuration used by the site-wide organization data.',
    links: {
      process: {
        title: 'How tutoring works',
        description:
          'Review the student-information, tutor-matching, first-lesson, feedback, and adjustment process.',
        action: 'Review the tutoring process',
      },
      contact: {
        title: 'Official contact channel',
        description:
          'Use the contact page for tutoring, scheduling, payment, privacy, or existing-student support requests.',
        action: 'Contact Success Path Mentors',
      },
      terms: {
        title: 'Service terms and cancellation rules',
        description:
          'Review the terms that govern tutoring services and the separate cancellation and rescheduling policy.',
        action: 'Read the service terms',
      },
      privacy: {
        title: 'Privacy and data requests',
        description:
          'Review how inquiry and student information is handled and how a data-deletion request can be submitted.',
        action: 'Read the privacy policy',
      },
    },
  },
  ar: {
    eyebrow: 'الثقة والشفافية',
    title: 'معلومات يمكن للأسرة التحقق منها قبل البدء',
    description:
      'وضوح معلومات الخدمة جزء من التدريس المسؤول. توضح هذه الصفحات طريقة تنسيق الدروس، وقنوات التواصل مع الفريق، والشروط وسياسات الخصوصية المطبقة.',
    legalLabel: 'الجهة القانونية لخدمات أمريكا الشمالية',
    legalDescription:
      'اسم الجهة القانونية الظاهر هنا مأخوذ من نفس إعدادات السوق المستخدمة في بيانات المؤسسة على الموقع.',
    links: {
      process: {
        title: 'كيف تعمل الدروس',
        description:
          'راجع خطوات جمع معلومات الطالب واختيار المدرس والحصة الأولى والملاحظات والتعديل عند الحاجة.',
        action: 'راجع آلية الدروس',
      },
      contact: {
        title: 'قناة التواصل الرسمية',
        description:
          'استخدم صفحة التواصل لطلبات التدريس أو المواعيد أو الدفع أو الخصوصية أو دعم الطلاب الحاليين.',
        action: 'تواصل مع Success Path Mentors',
      },
      terms: {
        title: 'شروط الخدمة وسياسة الإلغاء',
        description:
          'راجع الشروط التي تنظم خدمات التدريس وسياسة الإلغاء وإعادة الجدولة المرتبطة بها.',
        action: 'اقرأ شروط الخدمة',
      },
      privacy: {
        title: 'الخصوصية وطلبات البيانات',
        description:
          'راجع كيفية التعامل مع بيانات الاستفسار والطالب وكيفية تقديم طلب حذف البيانات.',
        action: 'اقرأ سياسة الخصوصية',
      },
    },
  },
};

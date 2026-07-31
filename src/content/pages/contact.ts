import type {
  PageHighlight,
} from '@/types/internal-page';

export interface ContactSelectOption {
  value: string;
  label: string;
}

export interface ContactSelectGroup {
  label: string;
  options: ContactSelectOption[];
}

export interface ContactFormCopy {
  title: string;
  description: string;
  privacyNotice: string;
  scheduleNote: string;

  fields: {
    contactName: string;
    email: string;
    phone: string;
    whatsapp: string;
    studentFirstName: string;
    studentAge: string;
    grade: string;
    subject: string;
    curriculum: string;
    preferredLanguage: string;
    country: string;
    timeZone: string;
    preferredDay: string;
    preferredTime: string;
    preferredSchedule: string;
    inquiryType: string;
    message: string;
    consent: string;
    website: string;
  };

  placeholders: {
    contactName: string;
    email: string;
    phone: string;
    whatsapp: string;
    studentFirstName: string;
    studentAge: string;
    grade: string;
    subject: string;
    curriculum: string;
    country: string;
    timeZone: string;
    preferredSchedule: string;
    message: string;
  };

  options: {
    select: string;
    inquiryTypes: Array<{
      value: string;
      label: string;
    }>;
    studentAges: Array<{
      value: string;
      label: string;
    }>;
    grades: Array<{
      value: string;
      label: string;
    }>;
    curricula: Array<{
      value: string;
      label: string;
    }>;
    countries: Array<{
      value: string;
      label: string;
    }>;
    subjects: ContactSelectGroup[];
    timeZones: ContactSelectGroup[];
    preferredDays: ContactSelectOption[];
    preferredTimes: ContactSelectOption[];
    languages: Array<{
      value: string;
      label: string;
    }>;
  };

  required: string;
  optional: string;
  submit: string;
  submitting: string;
  success: string;
  error: string;
  whatsappNotice: string;
  whatsappAction: string;
  privacyLink: string;
  termsLink: string;
}

interface ContactPageContent {
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

  form: ContactFormCopy;

  directContact: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    emailValue: string;
    replyLabel: string;
    replyValue: string;
    privacyLabel: string;
    privacyValue: string;
  };
}

export const contactPageContent = {
  en: {
    seo: {
      title:
        'Contact Mustafa Academy | Online Tutoring Inquiry',
      description:
        'Contact Mustafa Academy about one-to-one online tutoring, tutor matching, scheduling, lessons, payments, or support for an existing student.',
    },

    breadcrumbs: {
      home: 'Home',
      current: 'Contact',
      ariaLabel: 'Breadcrumb',
    },

    hero: {
      eyebrow: 'Contact the academy',
      title:
        'Tell us how we can support the student',
      description:
        'Send the student’s grade, subject, curriculum, preferred language, time zone, schedule, and learning goal. Your message is delivered directly to the official Success Path Mentors Gmail inbox.',
      primaryAction: 'Open the contact form',
      secondaryAction: 'Email the academy',
      highlights: [
        {
          value: 'Direct delivery',
          label:
            'The form sends the inquiry to the official platform Gmail inbox.',
        },
        {
          value: 'Useful student details',
          label:
            'Grade, subject, curriculum, language, and availability help the team respond accurately.',
        },
        {
          value: 'Secure server route',
          label:
            'Gmail credentials remain on the server and are never exposed in the browser.',
        },
      ],
    },

    introduction: {
      eyebrow: 'Send an inquiry',
      title:
        'Provide the information needed for a clear response',
      description:
        'Required fields must be completed. Student information is optional, but it can help with tutor matching and scheduling. Do not submit passwords, card numbers, government identification, medical records, or unrelated sensitive information.',
    },

    form: {
      title: 'Contact form',
      description:
        'Messages are sent directly to successpathmentors@gmail.com. Replies are sent to the email or telephone details entered below.',
      privacyNotice:
        'By submitting this form, you confirm that the information is accurate, that you are authorized to provide any student information, and that the academy may use it to respond to and administer the inquiry.',
      scheduleNote:
        'The selected day and time are interpreted in the student time zone chosen above. The academy will confirm the final recurring schedule based on tutor availability.',

      fields: {
        contactName:
          'Parent, guardian, or contact name',
        email: 'Email address',
        phone: 'Telephone number',
        whatsapp: 'WhatsApp number',
        studentFirstName:
          'Student first name',
        studentAge: 'Student age',
        grade: 'Grade',
        subject:
          'Subject or tutoring area',
        curriculum:
          'Curriculum or school system',
        preferredLanguage:
          'Preferred teaching language',
        country: 'Country',
        timeZone:
          'Student time zone',
        preferredDay:
          'Preferred day',
        preferredTime:
          'Preferred time',
        preferredSchedule:
          'Preferred schedule',
        inquiryType: 'Inquiry type',
        message: 'How can we help?',
        consent:
          'I confirm that I am authorized to submit this information and agree to the Privacy Policy and Terms and Conditions.',
        website:
          'Leave this field empty',
      },

      placeholders: {
        contactName: 'Full contact name',
        email: 'name@example.com',
        phone: '+1 000 000 0000',
        whatsapp:
          'Include the country code',
        studentFirstName:
          'First name only',
        studentAge: 'Example: 12',
        grade: 'Example: Grade 7',
        subject:
          'Example: Mathematics',
        curriculum:
          'Example: Ontario curriculum',
        country:
          'Example: Toronto, Canada',
        timeZone:
          'Example: Eastern Time',
        preferredSchedule:
          'Example: Monday and Wednesday after 5 PM',
        message:
          'Describe the learning goal, current topic, scheduling question, payment issue, tutor feedback, or other request.',
      },

      options: {
        select: 'Select an option',

        inquiryTypes: [
          {
            value: 'new-tutoring',
            label:
              'New tutoring inquiry',
          },
          {
            value: 'tutor-matching',
            label:
              'Tutor matching or tutor change',
          },
          {
            value: 'schedule',
            label:
              'Scheduling, cancellation, or attendance',
          },
          {
            value: 'payment',
            label:
              'Payment, package, invoice, or balance',
          },
          {
            value: 'existing-student',
            label:
              'Existing student support',
          },
          {
            value: 'privacy',
            label:
              'Privacy or data request',
          },
          {
            value: 'other',
            label: 'Other',
          },
        ],

        studentAges: [
          {
            value: 'Under 5',
            label: 'Under 5 years',
          },
          {
            value: '5',
            label: '5 years',
          },
          {
            value: '6',
            label: '6 years',
          },
          {
            value: '7',
            label: '7 years',
          },
          {
            value: '8',
            label: '8 years',
          },
          {
            value: '9',
            label: '9 years',
          },
          {
            value: '10',
            label: '10 years',
          },
          {
            value: '11',
            label: '11 years',
          },
          {
            value: '12',
            label: '12 years',
          },
          {
            value: '13',
            label: '13 years',
          },
          {
            value: '14',
            label: '14 years',
          },
          {
            value: '15',
            label: '15 years',
          },
          {
            value: '16',
            label: '16 years',
          },
          {
            value: '17',
            label: '17 years',
          },
          {
            value: '18',
            label: '18 years',
          },
          {
            value: '19+ / Adult',
            label: '19+ / Adult learner',
          },
        ],

        grades: [
          {
            value: 'Kindergarten',
            label: 'Kindergarten',
          },
          {
            value: 'Grade 1',
            label: 'Grade 1',
          },
          {
            value: 'Grade 2',
            label: 'Grade 2',
          },
          {
            value: 'Grade 3',
            label: 'Grade 3',
          },
          {
            value: 'Grade 4',
            label: 'Grade 4',
          },
          {
            value: 'Grade 5',
            label: 'Grade 5',
          },
          {
            value: 'Grade 6',
            label: 'Grade 6',
          },
          {
            value: 'Grade 7',
            label: 'Grade 7',
          },
          {
            value: 'Grade 8',
            label: 'Grade 8',
          },
          {
            value: 'Grade 9',
            label: 'Grade 9',
          },
          {
            value: 'Grade 10',
            label: 'Grade 10',
          },
          {
            value: 'Grade 11',
            label: 'Grade 11',
          },
          {
            value: 'Grade 12',
            label: 'Grade 12',
          },
          {
            value: 'College / University',
            label: 'College / University',
          },
          {
            value: 'Adult Learner',
            label: 'Adult learner',
          },
          {
            value: 'Other / Not sure',
            label: 'Other / Not sure',
          },
        ],

        curricula: [
          {
            value: 'Ontario Curriculum',
            label: 'Ontario curriculum',
          },
          {
            value: 'Quebec Curriculum',
            label: 'Quebec curriculum',
          },
          {
            value: 'Canadian Curriculum - Other Province',
            label:
              'Canadian curriculum — another province or territory',
          },
          {
            value: 'United States / Common Core',
            label:
              'United States / Common Core',
          },
          {
            value: 'Advanced Placement (AP)',
            label:
              'Advanced Placement (AP)',
          },
          {
            value: 'United Kingdom National Curriculum',
            label:
              'United Kingdom National Curriculum',
          },
          {
            value: 'GCSE / IGCSE',
            label: 'GCSE / IGCSE',
          },
          {
            value: 'A-Level',
            label: 'A-Level',
          },
          {
            value: 'International Baccalaureate (IB)',
            label:
              'International Baccalaureate (IB)',
          },
          {
            value: 'Cambridge International',
            label:
              'Cambridge International',
          },
          {
            value: 'French Curriculum',
            label: 'French curriculum',
          },
          {
            value: 'Arabic National Curriculum',
            label:
              'Arabic national curriculum',
          },
          {
            value: 'Homeschool / Custom Curriculum',
            label:
              'Homeschool / custom curriculum',
          },
          {
            value: 'Other / Not sure',
            label: 'Other / Not sure',
          },
        ],

        countries: [
          {
            value: 'Canada',
            label: 'Canada',
          },
          {
            value: 'United States',
            label: 'United States',
          },
          {
            value: 'United Kingdom',
            label: 'United Kingdom',
          },
          {
            value: 'United Arab Emirates',
            label: 'United Arab Emirates',
          },
          {
            value: 'Saudi Arabia',
            label: 'Saudi Arabia',
          },
          {
            value: 'Qatar',
            label: 'Qatar',
          },
          {
            value: 'Kuwait',
            label: 'Kuwait',
          },
          {
            value: 'Bahrain',
            label: 'Bahrain',
          },
          {
            value: 'Oman',
            label: 'Oman',
          },
          {
            value: 'Egypt',
            label: 'Egypt',
          },
          {
            value: 'Jordan',
            label: 'Jordan',
          },
          {
            value: 'Lebanon',
            label: 'Lebanon',
          },
          {
            value: 'Palestine',
            label: 'Palestine',
          },
          {
            value: 'Germany',
            label: 'Germany',
          },
          {
            value: 'Poland',
            label: 'Poland',
          },
          {
            value: 'Czech Republic',
            label: 'Czech Republic',
          },
          {
            value: 'Norway',
            label: 'Norway',
          },
          {
            value: 'Other / Not listed',
            label: 'Other / Not listed',
          },
        ],

        subjects: [
          {
            label:
              'Core academic subjects',
            options: [
              {
                value: 'Mathematics',
                label: 'Mathematics',
              },
              {
                value:
                  'English Language Arts',
                label:
                  'English Language Arts',
              },
              {
                value:
                  'Reading and Phonics',
                label:
                  'Reading and Phonics',
              },
              {
                value: 'Science',
                label: 'Science',
              },
            ],
          },
          {
            label:
              'High school STEM',
            options: [
              {
                value: 'Biology',
                label: 'Biology',
              },
              {
                value: 'Chemistry',
                label: 'Chemistry',
              },
              {
                value: 'Physics',
                label: 'Physics',
              },
              {
                value: 'Functions',
                label: 'Functions',
              },
              {
                value:
                  'Advanced Functions',
                label:
                  'Advanced Functions',
              },
              {
                value:
                  'Calculus and Vectors',
                label:
                  'Calculus and Vectors',
              },
            ],
          },
          {
            label: 'Languages',
            options: [
              {
                value:
                  'English Language Learning (ESL)',
                label:
                  'English Language Learning (ESL)',
              },
              {
                value: 'French',
                label: 'French',
              },
              {
                value: 'Arabic',
                label: 'Arabic',
              },
            ],
          },
          {
            label:
              'Quran and Islamic studies',
            options: [
              {
                value: 'Quran',
                label: 'Quran',
              },
              {
                value:
                  'Islamic Studies',
                label:
                  'Islamic Studies',
              },
            ],
          },
          {
            label:
              'Academic support',
            options: [
              {
                value:
                  'Homework Support and Study Skills',
                label:
                  'Homework Support and Study Skills',
              },
              {
                value:
                  'Exam Preparation',
                label:
                  'Exam Preparation',
              },
              {
                value:
                  'Other / Not sure',
                label:
                  'Other / Not sure',
              },
            ],
          },
        ],

        timeZones: [
          {
            label: 'Canada',
            options: [
              {
                value:
                  'America/St_Johns',
                label:
                  'Newfoundland Time — St. John’s (America/St_Johns)',
              },
              {
                value:
                  'America/Halifax',
                label:
                  'Atlantic Time — Halifax (America/Halifax)',
              },
              {
                value:
                  'America/Toronto',
                label:
                  'Eastern Time — Toronto (America/Toronto)',
              },
              {
                value:
                  'America/Winnipeg',
                label:
                  'Central Time — Winnipeg (America/Winnipeg)',
              },
              {
                value:
                  'America/Edmonton',
                label:
                  'Mountain Time — Edmonton (America/Edmonton)',
              },
              {
                value:
                  'America/Vancouver',
                label:
                  'Pacific Time — Vancouver (America/Vancouver)',
              },
            ],
          },
          {
            label:
              'United States',
            options: [
              {
                value:
                  'America/New_York',
                label:
                  'Eastern Time — New York (America/New_York)',
              },
              {
                value:
                  'America/Chicago',
                label:
                  'Central Time — Chicago (America/Chicago)',
              },
              {
                value:
                  'America/Denver',
                label:
                  'Mountain Time — Denver (America/Denver)',
              },
              {
                value:
                  'America/Phoenix',
                label:
                  'Arizona Time — Phoenix (America/Phoenix)',
              },
              {
                value:
                  'America/Los_Angeles',
                label:
                  'Pacific Time — Los Angeles (America/Los_Angeles)',
              },
            ],
          },
          {
            label: 'Europe',
            options: [
              {
                value:
                  'Europe/London',
                label:
                  'United Kingdom — London (Europe/London)',
              },
              {
                value:
                  'Europe/Paris',
                label:
                  'France — Paris (Europe/Paris)',
              },
              {
                value:
                  'Europe/Berlin',
                label:
                  'Germany — Berlin (Europe/Berlin)',
              },
              {
                value:
                  'Europe/Warsaw',
                label:
                  'Poland — Warsaw (Europe/Warsaw)',
              },
              {
                value:
                  'Europe/Prague',
                label:
                  'Czech Republic — Prague (Europe/Prague)',
              },
              {
                value:
                  'Europe/Oslo',
                label:
                  'Norway — Oslo (Europe/Oslo)',
              },
            ],
          },
          {
            label:
              'Middle East and North Africa',
            options: [
              {
                value:
                  'Africa/Cairo',
                label:
                  'Egypt — Cairo (Africa/Cairo)',
              },
              {
                value:
                  'Asia/Beirut',
                label:
                  'Lebanon — Beirut (Asia/Beirut)',
              },
              {
                value:
                  'Asia/Amman',
                label:
                  'Jordan — Amman (Asia/Amman)',
              },
              {
                value:
                  'Asia/Jerusalem',
                label:
                  'Jerusalem (Asia/Jerusalem)',
              },
              {
                value: 'Asia/Gaza',
                label:
                  'Palestine — Gaza (Asia/Gaza)',
              },
              {
                value:
                  'Asia/Hebron',
                label:
                  'Palestine — West Bank (Asia/Hebron)',
              },
              {
                value:
                  'Asia/Riyadh',
                label:
                  'Saudi Arabia — Riyadh (Asia/Riyadh)',
              },
              {
                value:
                  'Asia/Qatar',
                label:
                  'Qatar — Doha (Asia/Qatar)',
              },
              {
                value:
                  'Asia/Kuwait',
                label:
                  'Kuwait (Asia/Kuwait)',
              },
              {
                value:
                  'Asia/Bahrain',
                label:
                  'Bahrain (Asia/Bahrain)',
              },
              {
                value:
                  'Asia/Dubai',
                label:
                  'United Arab Emirates — Dubai (Asia/Dubai)',
              },
              {
                value:
                  'Asia/Muscat',
                label:
                  'Oman — Muscat (Asia/Muscat)',
              },
            ],
          },
          {
            label: 'Universal',
            options: [
              {
                value: 'UTC',
                label:
                  'Coordinated Universal Time (UTC)',
              },
            ],
          },
        ],

        preferredDays: [
          {
            value: 'Monday',
            label: 'Monday',
          },
          {
            value: 'Tuesday',
            label: 'Tuesday',
          },
          {
            value: 'Wednesday',
            label: 'Wednesday',
          },
          {
            value: 'Thursday',
            label: 'Thursday',
          },
          {
            value: 'Friday',
            label: 'Friday',
          },
          {
            value: 'Saturday',
            label: 'Saturday',
          },
          {
            value: 'Sunday',
            label: 'Sunday',
          },
          {
            value: 'Weekdays',
            label:
              'Weekdays — Monday to Friday',
          },
          {
            value: 'Weekend',
            label:
              'Weekend — Saturday or Sunday',
          },
          {
            value:
              'Multiple days / To be coordinated',
            label:
              'Multiple days — coordinate with the family',
          },
          {
            value: 'Flexible / Any day',
            label:
              'Flexible / Any day',
          },
        ],

        preferredTimes: [
          {
            value:
              'Before school (06:00-08:00)',
            label:
              'Before school — 6:00 AM to 8:00 AM',
          },
          {
            value:
              'Morning (08:00-12:00)',
            label:
              'Morning — 8:00 AM to 12:00 PM',
          },
          {
            value:
              'Early afternoon (12:00-16:00)',
            label:
              'Early afternoon — 12:00 PM to 4:00 PM',
          },
          {
            value:
              'Late afternoon (16:00-18:00)',
            label:
              'Late afternoon — 4:00 PM to 6:00 PM',
          },
          {
            value:
              'Evening (18:00-21:00)',
            label:
              'Evening — 6:00 PM to 9:00 PM',
          },
          {
            value:
              'Late evening (21:00-23:00)',
            label:
              'Late evening — 9:00 PM to 11:00 PM',
          },
          {
            value:
              'Flexible / To be coordinated',
            label:
              'Flexible / To be coordinated',
          },
        ],

        languages: [
          {
            value: 'english',
            label: 'English',
          },
          {
            value: 'arabic',
            label: 'Arabic',
          },
          {
            value: 'french',
            label: 'French',
          },
          {
            value: 'bilingual',
            label:
              'Bilingual or flexible',
          },
        ],
      },

      required: 'Required',
      optional: 'Optional',
      submit: 'Send message',
      submitting: 'Sending…',
      success:
        'Your request was saved successfully. WhatsApp will open with a prepared copy of the information.',
      error:
        'The message could not be sent. Check the required fields and try again, or email the academy directly.',
      whatsappNotice:
        'For the free WhatsApp method, review the prepared message and press Send in WhatsApp. The Google Sheet record is already saved before WhatsApp opens.',
      whatsappAction:
        'Open the prepared WhatsApp message',
      privacyLink: 'Privacy Policy',
      termsLink:
        'Terms and Conditions',
    },

    directContact: {
      eyebrow: 'Direct contact',
      title:
        'Your message reaches the platform inbox',
      description:
        'The website sends the complete inquiry to the official Success Path Mentors Gmail account. The sender’s email is set as the reply address, so the academy can respond directly from Gmail.',
      emailLabel: 'Official email',
      emailValue:
        'successpathmentors@gmail.com',
      replyLabel: 'Reply method',
      replyValue:
        'Email or telephone details provided in the form',
      privacyLabel: 'Please avoid sending',
      privacyValue:
        'Passwords, card numbers, identity documents, and unnecessary sensitive information',
    },
  },

  ar: {
    seo: {
      title:
        'تواصل مع أكاديمية مصطفى | استفسار عن التدريس أونلاين',
      description:
        'تواصل مع أكاديمية مصطفى بخصوص الدروس الفردية واختيار المدرس والمواعيد والحصص والدفع أو دعم طالب حالي.',
    },

    breadcrumbs: {
      home: 'الرئيسية',
      current: 'تواصل معنا',
      ariaLabel: 'مسار التنقل',
    },

    hero: {
      eyebrow: 'تواصل مع الأكاديمية',
      title:
        'أخبرنا كيف يمكننا مساعدة الطالب',
      description:
        'أرسل صف الطالب ومادته ومنهجه ولغته المفضلة ومنطقته الزمنية وموعده وهدفه التعليمي. تصل الرسالة مباشرة إلى بريد Success Path Mentors الرسمي على Gmail.',
      primaryAction: 'افتح نموذج التواصل',
      secondaryAction: 'راسل الأكاديمية',
      highlights: [
        {
          value: 'إرسال مباشر',
          label:
            'يرسل النموذج الاستفسار إلى بريد المنصة الرسمي على Gmail.',
        },
        {
          value: 'تفاصيل تعليمية مفيدة',
          label:
            'يساعد الصف والمادة والمنهج واللغة والوقت الفريق على الرد بدقة.',
        },
        {
          value: 'مسار آمن على الخادم',
          label:
            'تبقى بيانات Gmail على الخادم ولا تظهر داخل متصفح المستخدم.',
        },
      ],
    },

    introduction: {
      eyebrow: 'أرسل استفسارًا',
      title:
        'قدم المعلومات اللازمة للحصول على رد واضح',
      description:
        'يجب تعبئة الحقول المطلوبة. معلومات الطالب اختيارية، لكنها قد تساعد في اختيار المدرس وتنسيق الموعد. لا ترسل كلمات مرور أو أرقام بطاقات أو هوية حكومية أو سجلات طبية أو معلومات حساسة غير مرتبطة بالطلب.',
    },

    form: {
      title: 'نموذج التواصل',
      description:
        'تصل الرسائل مباشرة إلى successpathmentors@gmail.com، ويتم الرد على البريد أو رقم التواصل الذي تدخله.',
      privacyNotice:
        'بإرسال النموذج، تؤكد دقة المعلومات وصلاحيتك في تقديم أي معلومات تخص الطالب، وتوافق على استخدام الأكاديمية لها للرد على الاستفسار وإدارته.',
      scheduleNote:
        'يتم احتساب اليوم والوقت المختارين وفق المنطقة الزمنية الخاصة بالطالب المحددة أعلاه، ثم تؤكد الأكاديمية الموعد المتكرر النهائي حسب توفر المدرس.',

      fields: {
        contactName:
          'اسم ولي الأمر أو الشخص المتواصل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        whatsapp: 'رقم واتساب',
        studentFirstName:
          'الاسم الأول للطالب',
        studentAge: 'عمر الطالب',
        grade: 'الصف',
        subject:
          'المادة أو مجال التدريس',
        curriculum:
          'المنهج أو النظام المدرسي',
        preferredLanguage:
          'لغة التدريس المفضلة',
        country: 'الدولة',
        timeZone:
          'المنطقة الزمنية للطالب',
        preferredDay:
          'اليوم المفضل',
        preferredTime:
          'الوقت المفضل',
        preferredSchedule:
          'الموعد المفضل',
        inquiryType: 'نوع الاستفسار',
        message:
          'كيف يمكننا مساعدتك؟',
        consent:
          'أؤكد أنني مخول بتقديم هذه المعلومات، وأوافق على سياسة الخصوصية والشروط والأحكام.',
        website:
          'اترك هذا الحقل فارغًا',
      },

      placeholders: {
        contactName:
          'الاسم الكامل للشخص المتواصل',
        email: 'name@example.com',
        phone: '+1 000 000 0000',
        whatsapp: 'أضف رمز الدولة',
        studentFirstName:
          'الاسم الأول فقط',
        studentAge: 'مثال: 12',
        grade: 'مثال: الصف السابع',
        subject: 'مثال: الرياضيات',
        curriculum:
          'مثال: منهج أونتاريو',
        country:
          'مثال: تورونتو، كندا',
        timeZone:
          'مثال: التوقيت الشرقي',
        preferredSchedule:
          'مثال: الاثنين والأربعاء بعد الخامسة',
        message:
          'اشرح الهدف التعليمي أو الموضوع الحالي أو استفسار الموعد أو الدفع أو ملاحظة المدرس أو الطلب الآخر.',
      },

      options: {
        select: 'اختر',

        inquiryTypes: [
          {
            value: 'new-tutoring',
            label:
              'استفسار عن تدريس جديد',
          },
          {
            value: 'tutor-matching',
            label:
              'اختيار المدرس أو تغييره',
          },
          {
            value: 'schedule',
            label:
              'المواعيد أو الإلغاء أو الحضور',
          },
          {
            value: 'payment',
            label:
              'الدفع أو الباقة أو الفاتورة أو الرصيد',
          },
          {
            value: 'existing-student',
            label:
              'دعم طالب حالي',
          },
          {
            value: 'privacy',
            label:
              'طلب خصوصية أو بيانات',
          },
          {
            value: 'other',
            label: 'أخرى',
          },
        ],

        studentAges: [
          {
            value: 'Under 5',
            label: 'أقل من 5 سنوات',
          },
          {
            value: '5',
            label: '5 سنوات',
          },
          {
            value: '6',
            label: '6 سنوات',
          },
          {
            value: '7',
            label: '7 سنوات',
          },
          {
            value: '8',
            label: '8 سنوات',
          },
          {
            value: '9',
            label: '9 سنوات',
          },
          {
            value: '10',
            label: '10 سنوات',
          },
          {
            value: '11',
            label: '11 سنة',
          },
          {
            value: '12',
            label: '12 سنة',
          },
          {
            value: '13',
            label: '13 سنة',
          },
          {
            value: '14',
            label: '14 سنة',
          },
          {
            value: '15',
            label: '15 سنة',
          },
          {
            value: '16',
            label: '16 سنة',
          },
          {
            value: '17',
            label: '17 سنة',
          },
          {
            value: '18',
            label: '18 سنة',
          },
          {
            value: '19+ / Adult',
            label:
              '19 سنة فأكثر / متعلم بالغ',
          },
        ],

        grades: [
          {
            value: 'Kindergarten',
            label: 'روضة / تمهيدي',
          },
          {
            value: 'Grade 1',
            label: 'الصف الأول',
          },
          {
            value: 'Grade 2',
            label: 'الصف الثاني',
          },
          {
            value: 'Grade 3',
            label: 'الصف الثالث',
          },
          {
            value: 'Grade 4',
            label: 'الصف الرابع',
          },
          {
            value: 'Grade 5',
            label: 'الصف الخامس',
          },
          {
            value: 'Grade 6',
            label: 'الصف السادس',
          },
          {
            value: 'Grade 7',
            label: 'الصف السابع',
          },
          {
            value: 'Grade 8',
            label: 'الصف الثامن',
          },
          {
            value: 'Grade 9',
            label: 'الصف التاسع',
          },
          {
            value: 'Grade 10',
            label: 'الصف العاشر',
          },
          {
            value: 'Grade 11',
            label: 'الصف الحادي عشر',
          },
          {
            value: 'Grade 12',
            label: 'الصف الثاني عشر',
          },
          {
            value: 'College / University',
            label: 'كلية / جامعة',
          },
          {
            value: 'Adult Learner',
            label: 'متعلم بالغ',
          },
          {
            value: 'Other / Not sure',
            label: 'أخرى / غير متأكد',
          },
        ],

        curricula: [
          {
            value: 'Ontario Curriculum',
            label: 'منهج أونتاريو',
          },
          {
            value: 'Quebec Curriculum',
            label: 'منهج كيبيك',
          },
          {
            value: 'Canadian Curriculum - Other Province',
            label:
              'منهج كندي — مقاطعة أو إقليم آخر',
          },
          {
            value: 'United States / Common Core',
            label:
              'المنهج الأمريكي / Common Core',
          },
          {
            value: 'Advanced Placement (AP)',
            label:
              'المسار الأمريكي المتقدم AP',
          },
          {
            value: 'United Kingdom National Curriculum',
            label:
              'المنهج الوطني البريطاني',
          },
          {
            value: 'GCSE / IGCSE',
            label: 'GCSE / IGCSE',
          },
          {
            value: 'A-Level',
            label: 'A-Level',
          },
          {
            value: 'International Baccalaureate (IB)',
            label:
              'البكالوريا الدولية IB',
          },
          {
            value: 'Cambridge International',
            label:
              'كامبردج الدولي',
          },
          {
            value: 'French Curriculum',
            label: 'المنهج الفرنسي',
          },
          {
            value: 'Arabic National Curriculum',
            label:
              'منهج وطني عربي',
          },
          {
            value: 'Homeschool / Custom Curriculum',
            label:
              'تعليم منزلي / منهج مخصص',
          },
          {
            value: 'Other / Not sure',
            label: 'أخرى / غير متأكد',
          },
        ],

        countries: [
          {
            value: 'Canada',
            label: 'كندا',
          },
          {
            value: 'United States',
            label: 'الولايات المتحدة',
          },
          {
            value: 'United Kingdom',
            label: 'المملكة المتحدة',
          },
          {
            value: 'United Arab Emirates',
            label:
              'الإمارات العربية المتحدة',
          },
          {
            value: 'Saudi Arabia',
            label: 'السعودية',
          },
          {
            value: 'Qatar',
            label: 'قطر',
          },
          {
            value: 'Kuwait',
            label: 'الكويت',
          },
          {
            value: 'Bahrain',
            label: 'البحرين',
          },
          {
            value: 'Oman',
            label: 'عُمان',
          },
          {
            value: 'Egypt',
            label: 'مصر',
          },
          {
            value: 'Jordan',
            label: 'الأردن',
          },
          {
            value: 'Lebanon',
            label: 'لبنان',
          },
          {
            value: 'Palestine',
            label: 'فلسطين',
          },
          {
            value: 'Germany',
            label: 'ألمانيا',
          },
          {
            value: 'Poland',
            label: 'بولندا',
          },
          {
            value: 'Czech Republic',
            label: 'التشيك',
          },
          {
            value: 'Norway',
            label: 'النرويج',
          },
          {
            value: 'Other / Not listed',
            label:
              'دولة أخرى / غير موجودة',
          },
        ],

        subjects: [
          {
            label:
              'المواد الأكاديمية الأساسية',
            options: [
              {
                value: 'Mathematics',
                label: 'الرياضيات',
              },
              {
                value:
                  'English Language Arts',
                label:
                  'اللغة الإنجليزية',
              },
              {
                value:
                  'Reading and Phonics',
                label:
                  'القراءة والصوتيات Phonics',
              },
              {
                value: 'Science',
                label: 'العلوم',
              },
            ],
          },
          {
            label:
              'مواد العلوم والرياضيات للثانوي',
            options: [
              {
                value: 'Biology',
                label: 'الأحياء',
              },
              {
                value: 'Chemistry',
                label: 'الكيمياء',
              },
              {
                value: 'Physics',
                label: 'الفيزياء',
              },
              {
                value: 'Functions',
                label: 'الدوال Functions',
              },
              {
                value:
                  'Advanced Functions',
                label:
                  'الدوال المتقدمة',
              },
              {
                value:
                  'Calculus and Vectors',
                label:
                  'التفاضل والمتجهات',
              },
            ],
          },
          {
            label: 'اللغات',
            options: [
              {
                value:
                  'English Language Learning (ESL)',
                label:
                  'تعلم الإنجليزية ESL',
              },
              {
                value: 'French',
                label: 'اللغة الفرنسية',
              },
              {
                value: 'Arabic',
                label: 'اللغة العربية',
              },
            ],
          },
          {
            label:
              'القرآن والدراسات الإسلامية',
            options: [
              {
                value: 'Quran',
                label: 'القرآن الكريم',
              },
              {
                value:
                  'Islamic Studies',
                label:
                  'الدراسات الإسلامية',
              },
            ],
          },
          {
            label:
              'الدعم الأكاديمي',
            options: [
              {
                value:
                  'Homework Support and Study Skills',
                label:
                  'دعم الواجبات ومهارات الدراسة',
              },
              {
                value:
                  'Exam Preparation',
                label:
                  'الاستعداد للاختبارات',
              },
              {
                value:
                  'Other / Not sure',
                label:
                  'مادة أخرى / غير متأكد',
              },
            ],
          },
        ],

        timeZones: [
          {
            label: 'كندا',
            options: [
              {
                value:
                  'America/St_Johns',
                label:
                  'توقيت نيوفاوندلاند — سانت جونز (America/St_Johns)',
              },
              {
                value:
                  'America/Halifax',
                label:
                  'توقيت الأطلسي — هاليفاكس (America/Halifax)',
              },
              {
                value:
                  'America/Toronto',
                label:
                  'التوقيت الشرقي — تورونتو (America/Toronto)',
              },
              {
                value:
                  'America/Winnipeg',
                label:
                  'التوقيت المركزي — وينيبيغ (America/Winnipeg)',
              },
              {
                value:
                  'America/Edmonton',
                label:
                  'توقيت الجبال — إدمونتون (America/Edmonton)',
              },
              {
                value:
                  'America/Vancouver',
                label:
                  'توقيت المحيط الهادئ — فانكوفر (America/Vancouver)',
              },
            ],
          },
          {
            label:
              'الولايات المتحدة',
            options: [
              {
                value:
                  'America/New_York',
                label:
                  'التوقيت الشرقي — نيويورك (America/New_York)',
              },
              {
                value:
                  'America/Chicago',
                label:
                  'التوقيت المركزي — شيكاغو (America/Chicago)',
              },
              {
                value:
                  'America/Denver',
                label:
                  'توقيت الجبال — دنفر (America/Denver)',
              },
              {
                value:
                  'America/Phoenix',
                label:
                  'توقيت أريزونا — فينيكس (America/Phoenix)',
              },
              {
                value:
                  'America/Los_Angeles',
                label:
                  'توقيت المحيط الهادئ — لوس أنجلوس (America/Los_Angeles)',
              },
            ],
          },
          {
            label: 'أوروبا',
            options: [
              {
                value:
                  'Europe/London',
                label:
                  'المملكة المتحدة — لندن (Europe/London)',
              },
              {
                value:
                  'Europe/Paris',
                label:
                  'فرنسا — باريس (Europe/Paris)',
              },
              {
                value:
                  'Europe/Berlin',
                label:
                  'ألمانيا — برلين (Europe/Berlin)',
              },
              {
                value:
                  'Europe/Warsaw',
                label:
                  'بولندا — وارسو (Europe/Warsaw)',
              },
              {
                value:
                  'Europe/Prague',
                label:
                  'التشيك — براغ (Europe/Prague)',
              },
              {
                value:
                  'Europe/Oslo',
                label:
                  'النرويج — أوسلو (Europe/Oslo)',
              },
            ],
          },
          {
            label:
              'الشرق الأوسط وشمال أفريقيا',
            options: [
              {
                value:
                  'Africa/Cairo',
                label:
                  'مصر — القاهرة (Africa/Cairo)',
              },
              {
                value:
                  'Asia/Beirut',
                label:
                  'لبنان — بيروت (Asia/Beirut)',
              },
              {
                value:
                  'Asia/Amman',
                label:
                  'الأردن — عمّان (Asia/Amman)',
              },
              {
                value:
                  'Asia/Jerusalem',
                label:
                  'القدس (Asia/Jerusalem)',
              },
              {
                value: 'Asia/Gaza',
                label:
                  'فلسطين — غزة (Asia/Gaza)',
              },
              {
                value:
                  'Asia/Hebron',
                label:
                  'فلسطين — الضفة الغربية (Asia/Hebron)',
              },
              {
                value:
                  'Asia/Riyadh',
                label:
                  'السعودية — الرياض (Asia/Riyadh)',
              },
              {
                value:
                  'Asia/Qatar',
                label:
                  'قطر — الدوحة (Asia/Qatar)',
              },
              {
                value:
                  'Asia/Kuwait',
                label:
                  'الكويت (Asia/Kuwait)',
              },
              {
                value:
                  'Asia/Bahrain',
                label:
                  'البحرين (Asia/Bahrain)',
              },
              {
                value:
                  'Asia/Dubai',
                label:
                  'الإمارات — دبي (Asia/Dubai)',
              },
              {
                value:
                  'Asia/Muscat',
                label:
                  'عُمان — مسقط (Asia/Muscat)',
              },
            ],
          },
          {
            label:
              'التوقيت العالمي',
            options: [
              {
                value: 'UTC',
                label:
                  'التوقيت العالمي المنسق UTC',
              },
            ],
          },
        ],

        preferredDays: [
          {
            value: 'Monday',
            label: 'الاثنين',
          },
          {
            value: 'Tuesday',
            label: 'الثلاثاء',
          },
          {
            value: 'Wednesday',
            label: 'الأربعاء',
          },
          {
            value: 'Thursday',
            label: 'الخميس',
          },
          {
            value: 'Friday',
            label: 'الجمعة',
          },
          {
            value: 'Saturday',
            label: 'السبت',
          },
          {
            value: 'Sunday',
            label: 'الأحد',
          },
          {
            value: 'Weekdays',
            label:
              'أيام الأسبوع — من الاثنين إلى الجمعة',
          },
          {
            value: 'Weekend',
            label:
              'عطلة نهاية الأسبوع — السبت أو الأحد',
          },
          {
            value:
              'Multiple days / To be coordinated',
            label:
              'عدة أيام — يتم التنسيق مع الأسرة',
          },
          {
            value: 'Flexible / Any day',
            label:
              'مرن / أي يوم',
          },
        ],

        preferredTimes: [
          {
            value:
              'Before school (06:00-08:00)',
            label:
              'قبل المدرسة — من 6:00 إلى 8:00 صباحًا',
          },
          {
            value:
              'Morning (08:00-12:00)',
            label:
              'صباحًا — من 8:00 إلى 12:00',
          },
          {
            value:
              'Early afternoon (12:00-16:00)',
            label:
              'بعد الظهر المبكر — من 12:00 إلى 4:00',
          },
          {
            value:
              'Late afternoon (16:00-18:00)',
            label:
              'بعد الظهر المتأخر — من 4:00 إلى 6:00',
          },
          {
            value:
              'Evening (18:00-21:00)',
            label:
              'مساءً — من 6:00 إلى 9:00',
          },
          {
            value:
              'Late evening (21:00-23:00)',
            label:
              'المساء المتأخر — من 9:00 إلى 11:00',
          },
          {
            value:
              'Flexible / To be coordinated',
            label:
              'مرن / يتم التنسيق',
          },
        ],

        languages: [
          {
            value: 'english',
            label: 'الإنجليزية',
          },
          {
            value: 'arabic',
            label: 'العربية',
          },
          {
            value: 'french',
            label: 'الفرنسية',
          },
          {
            value: 'bilingual',
            label:
              'ثنائي اللغة أو مرن',
          },
        ],
      },

      required: 'مطلوب',
      optional: 'اختياري',
      submit: 'إرسال الرسالة',
      submitting: 'جارٍ الإرسال…',
      success:
        'تم حفظ طلبك بنجاح. سيتم فتح واتساب مع نسخة جاهزة من المعلومات.',
      error:
        'تعذر إرسال الرسالة. راجع الحقول المطلوبة وحاول مجددًا، أو أرسل بريدًا مباشرًا إلى الأكاديمية.',
      whatsappNotice:
        'في الطريقة المجانية، راجع الرسالة الجاهزة ثم اضغط إرسال داخل واتساب. يكون الطلب قد حُفظ في Google Sheet قبل فتح واتساب.',
      whatsappAction:
        'فتح الرسالة الجاهزة في واتساب',
      privacyLink: 'سياسة الخصوصية',
      termsLink:
        'الشروط والأحكام',
    },

    directContact: {
      eyebrow: 'تواصل مباشر',
      title:
        'تصل رسالتك إلى بريد المنصة',
      description:
        'يرسل الموقع الاستفسار كاملًا إلى حساب Success Path Mentors الرسمي على Gmail، ويضع بريد المرسل كعنوان للرد حتى تستطيع الأكاديمية الرد مباشرة من Gmail.',
      emailLabel: 'البريد الرسمي',
      emailValue:
        'successpathmentors@gmail.com',
      replyLabel: 'طريقة الرد',
      replyValue:
        'البريد أو رقم التواصل الذي يتم إدخاله في النموذج',
      privacyLabel: 'يرجى عدم إرسال',
      privacyValue:
        'كلمات المرور وأرقام البطاقات ومستندات الهوية والمعلومات الحساسة غير اللازمة',
    },
  },
} satisfies Record<
  'en' | 'ar',
  ContactPageContent
>;
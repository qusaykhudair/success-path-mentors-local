import { legalConfig } from '@/config/legal';
import type { LegalPageContent } from '@/types/legal-page';

export const dataDeletionContent = {
  en: {
    seo: {
      title: 'Data Deletion Instructions | Success Path Mentors',
      description: 'Learn how to request deletion of personal information connected with Success Path Mentors, Success Path Mentors, website forms, tutoring services, or Meta products.',
    },
    breadcrumbs: {
      home: 'Home',
      current: 'Data Deletion Instructions',
      ariaLabel: 'Breadcrumb',
    },
    hero: {
      eyebrow: 'Privacy request',
      title: 'Data Deletion Instructions',
      description: 'This page explains how a parent, guardian, student, tutor, website visitor, or Meta user can request deletion of personal information held by Success Path Mentors.',
      lastUpdatedLabel: 'Last updated',
      lastUpdated: legalConfig.effectiveDate,
      appliesToLabel: 'Applies to',
      appliesTo: 'Website, tutoring, account, inquiry, communication, payment-administration, and Meta-connected data',
      contactLabel: legalConfig.contactEmail,
    },
    tableOfContentsLabel: 'Deletion request sections',
    sections: [
      {
        id: 'how-to-request',
        title: '1. How to request deletion',
        paragraphs: [
          `Send an email to ${legalConfig.contactEmail} with the subject line “Data Deletion Request.”`,
          'Use the email address or telephone number previously used with the service when reasonably possible. This helps us locate the correct records and protect information from unauthorized deletion requests.',
        ],
        bullets: [
          'State your full name and your relationship to the student or account.',
          'Identify the student, account, inquiry, telephone number, email address, or Meta profile connected with the request.',
          'Describe whether you want all eligible data deleted or only specific records.',
          'Do not send passwords, full payment-card numbers, government identification, or unnecessary sensitive documents by ordinary email.',
        ],
      },
      {
        id: 'meta',
        title: '2. Requests connected with Facebook, Instagram, or Meta',
        paragraphs: [
          'If you used a Meta product to contact us, log in, submit a lead form, or connect with an app, you may request deletion using the same email process above. Include the relevant Meta profile name or app interaction and the approximate date.',
          'Where Meta sends us a platform data-deletion request or signed request through an enabled callback, we will process the request using the identifiers supplied by Meta and provide the confirmation information required by the platform.',
          'Deleting information held by us does not automatically delete information held independently by Meta. You may also need to use the privacy and account controls offered by Facebook, Instagram, WhatsApp, or another Meta service.',
        ],
      },
      {
        id: 'verification',
        title: '3. Identity and authority verification',
        paragraphs: [
          'Before deleting information, we may take reasonable steps to confirm the requester’s identity and authority. For a student who is a minor, the request should normally come from the parent, guardian, or authorized adult who arranged the service.',
          'Verification is limited to what is reasonably necessary. We may ask for confirmation from an existing contact channel or for non-sensitive details already associated with the account.',
        ],
      },
      {
        id: 'what-deleted',
        title: '4. What we will delete or de-identify',
        bullets: [
          'Eligible contact, inquiry, profile, scheduling, communication, educational, lesson-support, and Meta-connected records under our control.',
          'Files or materials supplied for tutoring when they are no longer required for an active service, legal obligation, safety matter, complaint, or dispute.',
          'Information in active systems, followed by removal from backups according to normal backup rotation where immediate deletion is not technically practical.',
          'Aggregated or de-identified information may be retained when it no longer identifies the person.',
        ],
      },
      {
        id: 'exceptions',
        title: '5. Information we may need to retain',
        paragraphs: [
          'Deletion is subject to applicable law and legitimate recordkeeping needs. We may retain limited information where reasonably necessary to:',
        ],
        bullets: [
          'Complete an active transaction, refund, chargeback, accounting, tax, or payment obligation.',
          'Maintain invoices, financial records, consent records, safeguarding records, or proof that a request was completed.',
          'Investigate fraud, security, abuse, safety concerns, complaints, or legal claims.',
          'Establish, exercise, or defend legal rights, comply with a court order, or meet another legal obligation.',
          'Maintain a minimal suppression record when needed to honour a do-not-contact or deletion preference.',
        ],
      },
      {
        id: 'timing',
        title: '6. Timing and confirmation',
        paragraphs: [
          'We will acknowledge a reasonably complete request and aim to complete eligible deletion without undue delay. Timing may vary where identity must be verified, records must be located across service providers, or law requires retention.',
          'When the request is completed, we will provide confirmation or explain any limited information that must be retained and the reason for retention.',
        ],
      },
      {
        id: 'children',
        title: '7. Requests concerning children and students',
        paragraphs: [
          'We treat student information as sensitive. A parent or guardian may request access, correction, or deletion of a minor student’s information, subject to identity verification, the student’s evolving capacity where applicable, and legal recordkeeping requirements.',
          'Children under 13 should not independently submit website forms or deletion requests. A parent, guardian, or authorized adult should contact us on their behalf.',
        ],
      },
      {
        id: 'complaints',
        title: '8. Questions or complaints',
        paragraphs: [
          `Questions, complaints, or concerns about a deletion request may be sent to ${legalConfig.contactEmail}. Please include “Privacy Complaint” in the subject line.`,
          'You may also have the right to contact the privacy or consumer-protection authority that applies in your jurisdiction.',
        ],
      },
    ],
    closing: {
      title: 'Submit a data deletion request',
      description: 'Email us with the subject “Data Deletion Request” and enough information to locate the relevant records. We will verify the request before deleting eligible data.',
      contactLabel: legalConfig.contactEmail,
    },
  },
  ar: {
    seo: {
      title: 'تعليمات حذف البيانات | Success Path Mentors',
      description: 'تعرف على طريقة طلب حذف البيانات الشخصية المرتبطة بموقع Success Path Mentors أو خدمات التدريس أو نماذج التواصل أو خدمات Meta.',
    },
    breadcrumbs: {
      home: 'الرئيسية',
      current: 'تعليمات حذف البيانات',
      ariaLabel: 'مسار التنقل',
    },
    hero: {
      eyebrow: 'طلب متعلق بالخصوصية',
      title: 'تعليمات حذف البيانات',
      description: 'توضح هذه الصفحة كيف يمكن لولي الأمر أو الوصي أو الطالب أو المدرس أو زائر الموقع أو مستخدم خدمات Meta طلب حذف البيانات الشخصية التي تحتفظ بها Success Path Mentors.',
      lastUpdatedLabel: 'آخر تحديث',
      lastUpdated: legalConfig.effectiveDateArabic,
      appliesToLabel: 'تنطبق على',
      appliesTo: 'بيانات الموقع والتدريس والحسابات والاستفسارات والتواصل وإدارة الدفعات والبيانات المرتبطة بخدمات Meta',
      contactLabel: legalConfig.contactEmail,
    },
    tableOfContentsLabel: 'أقسام طلب حذف البيانات',
    sections: [
      {
        id: 'how-to-request',
        title: '1. كيفية تقديم طلب الحذف',
        paragraphs: [
          `أرسل رسالة إلى ${legalConfig.contactEmail} واكتب في عنوان الرسالة: «طلب حذف البيانات».`,
          'استخدم قدر الإمكان البريد الإلكتروني أو رقم الهاتف الذي سبق استخدامه مع الخدمة، حتى نتمكن من تحديد السجلات الصحيحة وحمايتها من طلبات الحذف غير المصرح بها.',
        ],
        bullets: [
          'اكتب اسمك الكامل وعلاقتك بالطالب أو الحساب.',
          'حدد اسم الطالب أو الحساب أو الاستفسار أو رقم الهاتف أو البريد الإلكتروني أو حساب Meta المرتبط بالطلب.',
          'وضح ما إذا كنت تطلب حذف جميع البيانات المؤهلة أو سجلات محددة فقط.',
          'لا ترسل كلمات المرور أو رقم البطاقة الكامل أو وثائق الهوية الحكومية أو مستندات حساسة غير ضرورية عبر البريد الإلكتروني العادي.',
        ],
      },
      {
        id: 'meta',
        title: '2. الطلبات المرتبطة بفيسبوك أو إنستغرام أو Meta',
        paragraphs: [
          'إذا استخدمت إحدى خدمات Meta للتواصل معنا أو تسجيل الدخول أو إرسال نموذج عميل محتمل أو ربط تطبيق، فيمكنك طلب الحذف بالطريقة نفسها المذكورة أعلاه. اذكر اسم الحساب المعني وطبيعة التفاعل والتاريخ التقريبي.',
          'إذا أرسلت Meta إلينا طلب حذف عبر المنصة أو من خلال نقطة رد تقني مفعلة، فسنعالج الطلب باستخدام المعرّفات التي ترسلها Meta ونقدم معلومات التأكيد التي تتطلبها المنصة.',
          'حذف البيانات الموجودة لدينا لا يؤدي تلقائيًا إلى حذف البيانات التي تحتفظ بها Meta بشكل مستقل. قد تحتاج أيضًا إلى استخدام إعدادات الخصوصية والحساب داخل فيسبوك أو إنستغرام أو واتساب أو أي خدمة أخرى من Meta.',
        ],
      },
      {
        id: 'verification',
        title: '3. التحقق من الهوية والصلاحية',
        paragraphs: [
          'قبل حذف البيانات قد نتخذ خطوات معقولة للتحقق من هوية مقدم الطلب وصلاحيته. وإذا كان الطالب قاصرًا، فينبغي أن يقدم الطلب عادة ولي الأمر أو الوصي أو الشخص البالغ المخول الذي رتب الخدمة.',
          'نقصر التحقق على المعلومات الضرورية بصورة معقولة، وقد نطلب تأكيدًا عبر قناة تواصل سابقة أو بعض البيانات غير الحساسة الموجودة أصلًا في الحساب.',
        ],
      },
      {
        id: 'what-deleted',
        title: '4. البيانات التي سنحذفها أو نزيل هويتها',
        bullets: [
          'السجلات المؤهلة المتعلقة بالتواصل والاستفسارات والحسابات والمواعيد والرسائل والمعلومات التعليمية ودعم الحصص والبيانات المرتبطة بخدمات Meta والخاضعة لسيطرتنا.',
          'الملفات والمواد المرسلة للتدريس عندما لا تعود مطلوبة لخدمة قائمة أو التزام قانوني أو مسألة سلامة أو شكوى أو نزاع.',
          'البيانات الموجودة في الأنظمة النشطة، ثم إزالتها من النسخ الاحتياطية وفق دورة النسخ المعتادة عندما لا يكون الحذف الفوري ممكنًا تقنيًا.',
          'قد نحتفظ بمعلومات مجمعة أو منزوعة الهوية عندما لا تعود قابلة لربطها بالشخص.',
        ],
      },
      {
        id: 'exceptions',
        title: '5. بيانات قد يلزم الاحتفاظ بها',
        paragraphs: ['يخضع الحذف للقانون وللاحتياجات المشروعة لحفظ السجلات. وقد نحتفظ بقدر محدود من المعلومات عند الحاجة المعقولة إلى:'],
        bullets: [
          'إكمال معاملة أو استرداد أو اعتراض على دفعة أو التزام محاسبي أو ضريبي أو مالي.',
          'الاحتفاظ بالفواتير والسجلات المالية وسجلات الموافقة والحماية أو إثبات إتمام طلب الحذف.',
          'التحقيق في الاحتيال أو الأمن أو إساءة الاستخدام أو مخاوف السلامة أو الشكاوى أو المطالبات القانونية.',
          'إثبات الحقوق القانونية أو ممارستها أو الدفاع عنها، أو تنفيذ أمر قضائي أو التزام قانوني آخر.',
          'الاحتفاظ بسجل محدود لمنع التواصل عندما يكون ذلك ضروريًا لاحترام طلب عدم الاتصال أو الحذف.',
        ],
      },
      {
        id: 'timing',
        title: '6. المدة والتأكيد',
        paragraphs: [
          'سنؤكد استلام الطلب المكتمل بصورة معقولة ونسعى إلى حذف البيانات المؤهلة دون تأخير غير مبرر. قد تختلف المدة عندما يلزم التحقق من الهوية أو البحث في أنظمة ومزودي خدمة متعددين أو الاحتفاظ ببعض السجلات بحكم القانون.',
          'بعد إتمام الطلب سنرسل تأكيدًا، أو نوضح البيانات المحدودة التي يجب الاحتفاظ بها وسبب ذلك.',
        ],
      },
      {
        id: 'children',
        title: '7. الطلبات المتعلقة بالأطفال والطلاب',
        paragraphs: [
          'نتعامل مع معلومات الطلاب باعتبارها معلومات حساسة. ويمكن لولي الأمر أو الوصي طلب الوصول إلى معلومات الطالب القاصر أو تصحيحها أو حذفها، مع مراعاة التحقق من الهوية وقدرة الطالب المتطورة عندما ينطبق ذلك ومتطلبات حفظ السجلات القانونية.',
          'ينبغي ألا يقدم الطفل دون سن الثالثة عشرة نماذج الموقع أو طلبات الحذف بشكل مستقل، بل يتواصل ولي الأمر أو الوصي أو الشخص البالغ المخول نيابة عنه.',
        ],
      },
      {
        id: 'complaints',
        title: '8. الأسئلة والشكاوى',
        paragraphs: [
          `يمكن إرسال الأسئلة أو الشكاوى المتعلقة بطلب الحذف إلى ${legalConfig.contactEmail} مع كتابة «شكوى خصوصية» في عنوان الرسالة.`,
          'قد يكون لك أيضًا حق التواصل مع جهة حماية الخصوصية أو حماية المستهلك المختصة في منطقتك.',
        ],
      },
    ],
    closing: {
      title: 'قدّم طلب حذف البيانات',
      description: 'أرسل إلينا رسالة بعنوان «طلب حذف البيانات» مع معلومات كافية لتحديد السجلات المعنية. سنتحقق من الطلب قبل حذف البيانات المؤهلة.',
      contactLabel: legalConfig.contactEmail,
    },
  },
} satisfies Record<'en' | 'ar', LegalPageContent>;

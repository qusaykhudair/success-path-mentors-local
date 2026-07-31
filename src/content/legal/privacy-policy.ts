import { legalConfig } from '@/config/legal';
import type { LegalPageContent } from '@/types/legal-page';

export const privacyPolicyContent = {
  en: {
    seo: {
      title:
        'Privacy Policy | Mustafa Academy',
      description:
        'Learn how Mustafa Academy and Success Path Mentors collect, use, protect, retain, and share information relating to families, students, tutors, and website visitors.',
    },

    breadcrumbs: {
      home: 'Home',
      current: 'Privacy Policy',
      ariaLabel: 'Breadcrumb',
    },

    hero: {
      eyebrow: 'Privacy and data',
      title: 'Privacy Policy',
      description:
        'This policy explains how Mustafa Academy, operated by Success Path Mentors, handles information connected with the website, tutoring inquiries, lesson coordination, payments, communication, and educational services.',
      lastUpdatedLabel: 'Last updated',
      lastUpdated:
        legalConfig.effectiveDate,
      appliesToLabel: 'Applies to',
      appliesTo:
        'Website visitors, parents, guardians, students, tutors, and service contacts',
      contactLabel:
        legalConfig.contactEmail,
    },

    tableOfContentsLabel:
      'Privacy policy sections',

    sections: [
      {
        id: 'who-we-are',
        title: '1. Who we are',
        paragraphs: [
          `${legalConfig.brandName} is an online tutoring service operated under ${legalConfig.operatingName}. In this policy, “we,” “us,” and “our” refer to the organization responsible for the relevant website or tutoring service.`,
          `Privacy questions and requests can be sent to ${legalConfig.contactEmail}.`,
        ],
      },
      {
        id: 'scope',
        title: '2. Scope of this policy',
        paragraphs: [
          'This policy applies to information collected through our website, inquiry and contact forms, email, messaging, scheduling, online tutoring, lesson records, payment administration, support, and related operations.',
          'External classroom, video, payment, email, cloud, scheduling, analytics, and communication providers may have their own privacy policies. Families should review the terms of services they use.',
        ],
      },
      {
        id: 'information-collected',
        title:
          '3. Information we may collect',
        subsections: [
          {
            title:
              'Parent, guardian, and contact information',
            bullets: [
              'Name, email address, telephone number, WhatsApp number, country, city, time zone, and preferred communication method.',
              'Relationship to the student and authority to arrange tutoring or provide consent.',
              'Messages, inquiries, complaints, feedback, and customer-support records.',
            ],
          },
          {
            title:
              'Student and educational information',
            bullets: [
              'Student name or first name provided by the family, age or age range, grade, school year, curriculum, subject, course, language preference, availability, and learning goals.',
              'Assignments, worksheets, textbook pages, school comments, assessment dates, academic concerns, and work shared for tutoring.',
              'Lesson attendance, scheduling history, tutor notes, progress observations, recommendations, and family feedback.',
              'Information about accommodations, learning preferences, or an individual education plan when a parent or guardian chooses to share it.',
            ],
          },
          {
            title:
              'Payment and transaction information',
            bullets: [
              'Package selected, amount, currency, payment status, invoice information, credits, adjustments, refunds, and transaction references.',
              'Payment-card details are normally handled by the payment provider rather than stored directly by us, except for limited information required for administration and accounting.',
            ],
          },
          {
            title:
              'Website and technical information',
            bullets: [
              'IP address, browser, device, operating system, referring page, pages visited, approximate location, date and time, cookie identifiers, and security logs.',
              'Information submitted through website forms, including submission time and anti-spam information.',
            ],
          },
          {
            title:
              'Audio, video, and lesson recordings',
            paragraphs: [
              'Online lessons may involve live audio, video, chat, screen sharing, whiteboards, and uploaded files. We do not treat recording as a standard lesson requirement. When recording is proposed for a stated purpose, appropriate notice or consent will be requested where required. Third-party classroom platforms may process technical session information under their own terms.',
            ],
          },
        ],
      },
      {
        id: 'uses',
        title:
          '4. How we use information',
        bullets: [
          'Respond to inquiries and recommend an appropriate next step.',
          'Match students with tutors according to subject, grade, curriculum, language, availability, and learning needs.',
          'Schedule, deliver, administer, and support online tutoring lessons.',
          'Communicate with parents, guardians, students where appropriate, tutors, administrators, and supervisors.',
          'Process payments, issue invoices, maintain balances, and respond to financial questions.',
          'Review lesson quality, tutor fit, attendance, complaints, safety concerns, and service performance.',
          'Protect accounts, investigate misuse, prevent spam and fraud, and maintain website and system security.',
          'Comply with legal, accounting, tax, insurance, contractual, safeguarding, and dispute-resolution obligations.',
          'Improve services, website content, and operations using information that is aggregated, de-identified, or otherwise permitted by law.',
        ],
      },
      {
        id: 'children-consent',
        title:
          '5. Children, consent, and parental authority',
        paragraphs: [
          'Our services are frequently arranged for children and teenagers. Website inquiry and payment forms are intended to be completed by a parent, guardian, or authorized adult rather than independently by a child.',
          'A parent, guardian, or authorized adult should approve service terms, arrange payment, and provide required consent when the student cannot provide meaningful consent independently.',
          'We do not knowingly collect personal information online directly from a child under 13 without the involvement or authorization required from a parent or guardian. A child under 13 should not submit a website form or create a service request independently.',
          'The adult arranging tutoring confirms that they have authority to provide the student information and permissions required for the service.',
          'Families should not submit unnecessary identity documents, card numbers, passwords, immigration records, medical records, or other highly sensitive information through the website or ordinary email.',
        ],
      },
      {
        id: 'sharing',
        title:
          '6. When information may be shared',
        paragraphs: [
          'We do not knowingly sell personal information. We may share information only when reasonably needed for the purposes described in this policy.',
        ],
        bullets: [
          'With the tutor, supervisor, administrator, or staff member who needs it to coordinate or deliver the service.',
          'With providers supporting hosting, classrooms, video, email, cloud storage, scheduling, analytics, customer support, payments, accounting, and security.',
          'With professional advisers, insurers, accountants, payment providers, or legal representatives where reasonably necessary.',
          'With a school, agency, or other person when the parent or guardian authorizes the disclosure or law permits or requires it.',
          'With regulators, courts, law enforcement, or other authorities when legally required or reasonably necessary to protect rights, safety, students, staff, systems, or the public.',
          'In connection with a lawful merger, financing, reorganization, sale, or transfer of the business, subject to confidentiality and legal requirements.',
        ],
      },
      {
        id: 'international',
        title:
          '7. International processing',
        paragraphs: [
          'Because tutoring is delivered online and families, tutors, and providers may be located in different countries, information may be processed or stored outside the person’s province, state, or country.',
          'Information processed in another jurisdiction may be subject to the laws and lawful-access rules of that jurisdiction. We take reasonable steps to select and manage providers appropriate to the service and information involved.',
        ],
      },
      {
        id: 'retention',
        title:
          '8. Retention and deletion',
        paragraphs: [
          'We retain information only as long as reasonably necessary for the purpose for which it was collected and for legitimate legal, tax, accounting, payment, quality, safety, complaint, and dispute-resolution needs.',
          'Retention periods vary by record type. Inquiry messages may be retained for follow-up, while transaction and invoice records may need to be kept longer.',
          'When information is no longer required, we take reasonable steps to delete, anonymize, or securely dispose of it, subject to backup cycles and legal restrictions.',
        ],
      },
      {
        id: 'security',
        title: '9. Security safeguards',
        paragraphs: [
          'We use administrative, technical, and organizational safeguards intended to protect information against loss, theft, unauthorized access, disclosure, copying, use, or modification.',
          'No internet, email, video, or storage system is completely secure. Families should protect devices and login information, avoid publishing lesson links, and report suspected unauthorized access promptly.',
        ],
      },
      {
        id: 'cookies',
        title:
          '10. Cookies, analytics, and embedded content',
        paragraphs: [
          'The website may use essential cookies and similar technologies for language selection, security, forms, performance, and basic functionality. Analytics or marketing technologies should be used only with the notice or choice required by applicable law.',
          'Embedded content, including video providers, may receive technical information when content loads or is played. Browser settings and available consent controls can be used to manage certain cookies.',
        ],
      },
      {
        id: 'rights',
        title:
          '11. Access, correction, deletion, and privacy choices',
        paragraphs: [
          'Depending on applicable law, an individual or authorized parent or guardian may request access to information, ask for inaccurate information to be corrected, withdraw consent, object to certain uses, or request deletion.',
          'We may need to verify identity and authority before responding. Some records may be retained or withheld when permitted or required by law, including information related to payments, legal claims, safety, another person’s privacy, or confidential business information.',
          `Requests may be submitted to ${legalConfig.contactEmail}. Please describe the person involved, the type of record, and the requested action without sending unnecessary sensitive identification documents.`,
        ],
      },
      {
        id: 'communications',
        title:
          '12. Service and promotional communications',
        paragraphs: [
          'We may send communications needed to respond to an inquiry, coordinate lessons, confirm schedules, administer payments, provide support, or communicate a policy or service change.',
          'Promotional electronic messages will be sent only as permitted by applicable law. They should identify the sender and provide an appropriate unsubscribe method. Necessary service communications may continue while tutoring is active.',
        ],
      },
      {
        id: 'incidents',
        title:
          '13. Privacy incidents and complaints',
        paragraphs: [
          'We review suspected privacy or security incidents and take steps appropriate to the circumstances. Where required, we may notify affected individuals, providers, regulators, or authorities.',
          `A privacy concern or complaint can be sent to ${legalConfig.contactEmail}. We may request information needed to verify identity, understand the issue, and respond.`,
        ],
      },
      {
        id: 'changes',
        title:
          '14. Changes to this policy',
        paragraphs: [
          'We may update this policy when services, technology, providers, business practices, or legal requirements change. The revised version will show a new last-updated date.',
          'When a change is significant, we may provide additional notice or request new consent where required.',
        ],
      },
    ],

    closing: {
      title: 'Privacy questions',
      description:
        'Contact the academy to ask about information, request access or correction, or report a privacy concern.',
      contactLabel:
        legalConfig.contactEmail,
    },
  },

  ar: {
    seo: {
      title:
        'سياسة الخصوصية | أكاديمية مصطفى',
      description:
        'تعرّف على كيفية جمع أكاديمية مصطفى وSuccess Path Mentors للمعلومات المتعلقة بالأسر والطلاب والمدرسين وزوار الموقع واستخدامها وحمايتها والاحتفاظ بها.',
    },

    breadcrumbs: {
      home: 'الرئيسية',
      current: 'سياسة الخصوصية',
      ariaLabel: 'مسار التنقل',
    },

    hero: {
      eyebrow: 'الخصوصية والبيانات',
      title: 'سياسة الخصوصية',
      description:
        'توضح هذه السياسة كيفية تعامل أكاديمية مصطفى، التابعة لـ Success Path Mentors، مع المعلومات المرتبطة بالموقع وطلبات التدريس وتنظيم الحصص والدفع والتواصل والخدمات التعليمية.',
      lastUpdatedLabel: 'آخر تحديث',
      lastUpdated:
        legalConfig.effectiveDateArabic,
      appliesToLabel: 'تنطبق على',
      appliesTo:
        'زوار الموقع وأولياء الأمور والطلاب والمدرسين والمتواصلين مع الخدمة',
      contactLabel:
        legalConfig.contactEmail,
    },

    tableOfContentsLabel:
      'أقسام سياسة الخصوصية',

    sections: [
      {
        id: 'who-we-are',
        title: '1. من نحن',
        paragraphs: [
          `${legalConfig.brandName} خدمة تدريس أونلاين تعمل تحت اسم ${legalConfig.operatingName}. تشير كلمات «نحن» و«لنا» في هذه السياسة إلى الجهة المسؤولة عن خدمة الموقع أو التدريس ذات الصلة.`,
          `يمكن إرسال أسئلة وطلبات الخصوصية إلى ${legalConfig.contactEmail}.`,
        ],
      },
      {
        id: 'scope',
        title: '2. نطاق السياسة',
        paragraphs: [
          'تنطبق هذه السياسة على المعلومات التي يتم جمعها من خلال الموقع ونماذج الاستفسار والتواصل والبريد والمراسلات والمواعيد والتدريس أونلاين وسجلات الحصص وإدارة الدفع والدعم والعمليات المرتبطة بالخدمة.',
          'قد تكون لمنصات الفصول والفيديو والدفع والبريد والتخزين والمواعيد والتحليلات والتواصل سياسات مستقلة. ينبغي للأسرة مراجعة شروط الخدمات التي تستخدمها.',
        ],
      },
      {
        id: 'information-collected',
        title:
          '3. المعلومات التي قد نجمعها',
        subsections: [
          {
            title:
              'معلومات ولي الأمر والتواصل',
            bullets: [
              'الاسم والبريد الإلكتروني ورقم الهاتف ورقم واتساب والدولة والمدينة والمنطقة الزمنية وطريقة التواصل المفضلة.',
              'صلة الشخص بالطالب وصلاحيته في ترتيب التدريس أو تقديم الموافقة.',
              'الرسائل والاستفسارات والشكاوى والملاحظات وسجلات الدعم.',
            ],
          },
          {
            title:
              'معلومات الطالب والمعلومات التعليمية',
            bullets: [
              'اسم الطالب أو اسمه الأول الذي تقدمه الأسرة، والعمر أو الفئة العمرية، والصف، والسنة الدراسية، والمنهج، والمادة، والمقرر، واللغة، والأوقات، والأهداف.',
              'الواجبات وأوراق العمل وصفحات الكتب وملاحظات المدرسة ومواعيد الاختبارات والمخاوف الأكاديمية والأعمال المشاركة للتدريس.',
              'الحضور وسجل المواعيد وملاحظات المدرس ومتابعة التقدم والتوصيات وملاحظات الأسرة.',
              'معلومات عن التسهيلات أو تفضيلات التعلم أو الخطة التعليمية الفردية عندما يختار ولي الأمر مشاركتها.',
            ],
          },
          {
            title:
              'معلومات الدفع والمعاملات',
            bullets: [
              'الباقة والمبلغ والعملة وحالة الدفع والفاتورة والرصيد والتعديلات والاسترداد ومراجع المعاملات.',
              'تعالج بيانات بطاقة الدفع عادة لدى مزود الدفع ولا نخزنها مباشرة، باستثناء معلومات محدودة لازمة للإدارة والمحاسبة.',
            ],
          },
          {
            title:
              'معلومات الموقع والتقنية',
            bullets: [
              'عنوان IP والمتصفح والجهاز ونظام التشغيل والصفحة المحيلة والصفحات التي تمت زيارتها والموقع التقريبي والتاريخ والوقت ومعرفات ملفات الارتباط وسجلات الأمان.',
              'المعلومات المرسلة عبر نماذج الموقع، بما في ذلك وقت الإرسال ومعلومات مكافحة الرسائل المزعجة.',
            ],
          },
          {
            title:
              'الصوت والفيديو وتسجيل الحصص',
            paragraphs: [
              'قد تتضمن الحصص الصوت والفيديو والدردشة ومشاركة الشاشة والسبورة والملفات. لا نعتبر التسجيل متطلبًا اعتياديًا للحصة. وعند اقتراح تسجيل لغرض معلن، يتم تقديم الإشعار أو طلب الموافقة المطلوبة. وقد تعالج منصة الفصل معلومات تقنية وفق شروطها.',
            ],
          },
        ],
      },
      {
        id: 'uses',
        title:
          '4. كيف نستخدم المعلومات؟',
        bullets: [
          'الرد على الاستفسارات واقتراح الخطوة المناسبة.',
          'اختيار مدرس وفق المادة والصف والمنهج واللغة والتوفر والاحتياج.',
          'تنظيم الحصص وتقديمها وإدارتها ودعمها.',
          'التواصل مع ولي الأمر والطالب عند الاقتضاء والمدرس والإدارة والإشراف.',
          'معالجة الدفع وإصدار الفواتير وإدارة الرصيد والاستفسارات المالية.',
          'مراجعة الجودة وملاءمة المدرس والحضور والشكاوى والسلامة وأداء الخدمة.',
          'حماية الحسابات والتحقيق في إساءة الاستخدام ومنع الرسائل المزعجة والاحتيال.',
          'الالتزام بالمتطلبات القانونية والمحاسبية والضريبية والتأمينية والتعاقدية وحماية الطفل وحل النزاعات.',
          'تحسين الخدمة والموقع والعمليات باستخدام معلومات مجمعة أو منزوعة الهوية أو مسموح بها قانونًا.',
        ],
      },
      {
        id: 'children-consent',
        title:
          '5. الأطفال والموافقة وصلاحية ولي الأمر',
        paragraphs: [
          'يتم ترتيب خدماتنا كثيرًا للأطفال والمراهقين. صممت نماذج الاستفسار والدفع ليكملها ولي الأمر أو الوصي أو شخص بالغ مخول، وليس الطفل بصورة مستقلة.',
          'ينبغي لولي الأمر أو الوصي أو الشخص البالغ المخول الموافقة على شروط الخدمة وتنظيم الدفع وتقديم الموافقات اللازمة عندما لا يستطيع الطالب تقديم موافقة واعية مستقلة.',
          'لا نجمع عن علم معلومات مباشرة أونلاين من طفل دون 13 عامًا من دون مشاركة أو موافقة ولي الأمر المطلوبة. ولا ينبغي لطفل دون 13 عامًا إرسال نموذج الموقع أو إنشاء طلب خدمة بنفسه.',
          'يؤكد الشخص البالغ الذي يرتب التدريس أن لديه صلاحية تقديم معلومات الطالب والموافقات اللازمة للخدمة.',
          'لا ينبغي إرسال مستندات هوية أو أرقام بطاقات أو كلمات مرور أو سجلات هجرة أو سجلات طبية أو معلومات شديدة الحساسية لا تحتاجها الخدمة عبر الموقع أو البريد العادي.',
        ],
      },
      {
        id: 'sharing',
        title:
          '6. متى قد نشارك المعلومات؟',
        paragraphs: [
          'لا نبيع المعلومات الشخصية عن علم. ولا نشارك إلا ما يلزم بصورة معقولة للأغراض الموضحة في السياسة.',
        ],
        bullets: [
          'مع المدرس أو المشرف أو الإداري أو الموظف الذي يحتاجها لتنظيم الخدمة أو تقديمها.',
          'مع مزودي الاستضافة والفصول والفيديو والبريد والتخزين والمواعيد والتحليلات والدعم والدفع والمحاسبة والأمان.',
          'مع المستشارين المهنيين وشركات التأمين والمحاسبين ومزودي الدفع والممثلين القانونيين عند الحاجة.',
          'مع مدرسة أو جهة أو شخص آخر عندما يأذن ولي الأمر أو يسمح القانون أو يطلب ذلك.',
          'مع الجهات التنظيمية والمحاكم والشرطة والسلطات عند الطلب القانوني أو لحماية الحقوق أو السلامة أو الطلاب أو الموظفين أو الأنظمة أو الجمهور.',
          'ضمن اندماج أو تمويل أو إعادة تنظيم أو بيع أو نقل قانوني للعمل، مع مراعاة السرية والمتطلبات القانونية.',
        ],
      },
      {
        id: 'international',
        title:
          '7. المعالجة الدولية',
        paragraphs: [
          'لأن الخدمة تقدم أونلاين وقد توجد الأسر والمدرسون والمزودون في دول مختلفة، فقد تتم معالجة المعلومات أو تخزينها خارج المقاطعة أو الولاية أو الدولة.',
          'قد تخضع المعلومات الموجودة في دولة أخرى لقوانينها وقواعد الوصول القانوني فيها. ونتخذ خطوات معقولة لاختيار وإدارة مزودين مناسبين.',
        ],
      },
      {
        id: 'retention',
        title:
          '8. الاحتفاظ والحذف',
        paragraphs: [
          'نحتفظ بالمعلومات للمدة اللازمة بصورة معقولة للغرض الذي جمعت من أجله وللاحتياجات القانونية والضريبية والمحاسبية والمالية والمتعلقة بالجودة والسلامة والشكاوى وحل النزاعات.',
          'تختلف المدة حسب نوع السجل. فقد يحتفظ برسائل الاستفسار للمتابعة، بينما قد تحتاج الفواتير والمعاملات إلى مدة أطول.',
          'عندما لا تعود المعلومات مطلوبة، نتخذ خطوات معقولة لحذفها أو إخفاء هويتها أو التخلص منها بأمان، مع مراعاة النسخ الاحتياطية والقيود القانونية.',
        ],
      },
      {
        id: 'security',
        title: '9. إجراءات الحماية',
        paragraphs: [
          'نستخدم إجراءات إدارية وتقنية وتنظيمية تهدف إلى حماية المعلومات من الفقد والسرقة والوصول أو الإفصاح أو النسخ أو الاستخدام أو التعديل غير المصرح به.',
          'لا توجد وسيلة إنترنت أو بريد أو فيديو أو تخزين آمنة بصورة مطلقة. ينبغي للأسرة حماية الأجهزة وبيانات الدخول وعدم نشر روابط الحصص والإبلاغ عن الوصول المشتبه به بسرعة.',
        ],
      },
      {
        id: 'cookies',
        title:
          '10. ملفات الارتباط والتحليلات والمحتوى المضمن',
        paragraphs: [
          'قد يستخدم الموقع ملفات ارتباط أساسية لاختيار اللغة والأمان والنماذج والأداء والوظائف. وينبغي استخدام تقنيات التحليل أو التسويق مع الإشعار أو الاختيار الذي يطلبه القانون.',
          'قد يستلم مزود المحتوى المضمن، بما في ذلك الفيديو، معلومات تقنية عند تحميل المحتوى أو تشغيله. ويمكن استخدام إعدادات المتصفح وأدوات الموافقة لإدارة بعض الملفات.',
        ],
      },
      {
        id: 'rights',
        title:
          '11. الوصول والتصحيح والحذف وخيارات الخصوصية',
        paragraphs: [
          'بحسب القانون المطبق، يمكن للشخص أو ولي الأمر المخول طلب الوصول أو تصحيح المعلومات غير الدقيقة أو سحب الموافقة أو الاعتراض على استخدامات معينة أو طلب الحذف.',
          'قد نحتاج إلى التحقق من الهوية والصلاحية. وقد نحتفظ بسجلات أو نمتنع عن تقديمها عندما يسمح القانون أو يطلب ذلك، بما في ذلك سجلات الدفع والمطالبات والسلامة وخصوصية شخص آخر والمعلومات التجارية السرية.',
          `يمكن إرسال الطلب إلى ${legalConfig.contactEmail}. يرجى وصف الشخص ونوع السجل والإجراء المطلوب دون إرسال مستندات تعريف حساسة لا داعي لها.`,
        ],
      },
      {
        id: 'communications',
        title:
          '12. رسائل الخدمة والرسائل الترويجية',
        paragraphs: [
          'قد نرسل رسائل لازمة للرد على الطلب أو تنظيم الحصة أو تأكيد الموعد أو إدارة الدفع أو تقديم الدعم أو إبلاغ تغيير في السياسة أو الخدمة.',
          'ترسل الرسائل الإلكترونية الترويجية بما يسمح به القانون، وينبغي أن توضح المرسل وتوفر وسيلة مناسبة لإلغاء الاشتراك. وقد تستمر رسائل الخدمة اللازمة أثناء نشاط التدريس.',
        ],
      },
      {
        id: 'incidents',
        title:
          '13. حوادث الخصوصية والشكاوى',
        paragraphs: [
          'نراجع الحوادث المشتبه بها ونتخذ الخطوات المناسبة. وعندما يطلب القانون قد نبلغ الأشخاص المتأثرين أو المزودين أو الجهات التنظيمية أو السلطات.',
          `يمكن إرسال الملاحظة أو الشكوى إلى ${legalConfig.contactEmail}. وقد نطلب معلومات للتحقق من الهوية وفهم المشكلة والرد.`,
        ],
      },
      {
        id: 'changes',
        title:
          '14. تعديل السياسة',
        paragraphs: [
          'قد نحدث السياسة عند تغير الخدمة أو التقنية أو المزودين أو الممارسات أو المتطلبات القانونية، وستظهر النسخة الجديدة تاريخ تحديث جديدًا.',
          'عندما يكون التغيير جوهريًا، قد نقدم إشعارًا إضافيًا أو نطلب موافقة جديدة عند الحاجة.',
        ],
      },
    ],

    closing: {
      title: 'أسئلة الخصوصية',
      description:
        'تواصل مع الأكاديمية للسؤال عن المعلومات أو طلب الوصول أو التصحيح أو الإبلاغ عن ملاحظة خصوصية.',
      contactLabel:
        legalConfig.contactEmail,
    },
  },
} satisfies Record<
  'en' | 'ar',
  LegalPageContent
>;
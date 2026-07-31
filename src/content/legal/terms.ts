import { legalConfig } from '@/config/legal';
import type { LegalPageContent } from '@/types/legal-page';

export const termsContent = {
  en: {
    seo: {
      title:
        'Terms and Conditions | Mustafa Academy',
      description:
        'Read the terms governing the Mustafa Academy website and one-to-one online tutoring services, including bookings, lessons, payments, conduct, privacy, technology, and service limitations.',
    },

    breadcrumbs: {
      home: 'Home',
      current: 'Terms and Conditions',
      ariaLabel: 'Breadcrumb',
    },

    hero: {
      eyebrow: 'Service terms',
      title: 'Terms and Conditions',
      description:
        'These Terms govern use of the Mustafa Academy website and online tutoring services operated by Success Path Mentors. Please read them before booking, purchasing a package, or allowing a student to participate.',
      lastUpdatedLabel: 'Last updated',
      lastUpdated:
        legalConfig.effectiveDate,
      appliesToLabel: 'Applies to',
      appliesTo:
        'Website use, inquiries, trial lessons, packages, tutoring lessons, payments, and related communication',
      contactLabel:
        legalConfig.contactEmail,
    },

    tableOfContentsLabel:
      'Terms and conditions sections',

    sections: [
      {
        id: 'acceptance',
        title:
          '1. Acceptance of these Terms',
        paragraphs: [
          `These Terms are an agreement between the person purchasing, arranging, accessing, or using the service and ${legalConfig.legalEntityName}, which operates the ${legalConfig.brandName} service under ${legalConfig.operatingName}.`,
          'By submitting an inquiry, confirming a lesson, purchasing or using a package, entering an online classroom, or continuing to use the service after receiving these Terms, you confirm that you have read and agree to them.',
          'When a parent or guardian arranges tutoring for a student, the parent or guardian accepts these Terms for themselves and, to the extent legally permitted, on behalf of the student.',
          'If you do not agree, do not purchase or use the service. Rights that cannot legally be waived remain in effect.',
        ],
      },
      {
        id: 'online-agreements',
        title:
          '2. Online agreements and written confirmation',
        paragraphs: [
          'Before an online purchase or package confirmation, the academy should provide the service description, lesson quantity or duration where applicable, total price and currency, payment terms, material restrictions, and the applicable cancellation or refund terms.',
          'The customer should have an opportunity to review the information, correct material errors, and accept or decline before completing the agreement where required by applicable law.',
          'After an agreement is completed, the academy may provide an electronic copy through an invoice, receipt, confirmation email, account record, or another format that the customer can retain.',
          'If a specific invoice, checkout page, package confirmation, or written offer conflicts with a general statement on the website, the more specific written term normally governs the affected transaction, subject to mandatory law.',
        ],
      },
      {
        id: 'minors',
        title:
          '3. Parents, guardians, and students under 18',
        paragraphs: [
          'Tutoring for a minor must be arranged or approved by a parent, guardian, or authorized adult who can provide required information, consent to these Terms, and accept payment responsibility.',
          'The adult arranging the service confirms that they have authority to act for the student and to share the educational and contact information provided.',
          'Website inquiry and payment forms are intended to be completed by an adult rather than independently by a child.',
          'Students must follow age-appropriate conduct, safety, academic-integrity, and platform rules. A parent or guardian remains responsible for reasonable supervision of the student’s device, online environment, and participation.',
        ],
      },
      {
        id: 'services',
        title: '4. Tutoring services',
        paragraphs: [
          'The academy provides online educational support that may include one-to-one lessons, homework guidance, concept explanation, reading or language practice, examination preparation, skill development, and related academic coordination.',
          'The exact subject, grade, tutor, schedule, platform, lesson length, package, and price are determined by the booking confirmation, invoice, offer, or other written communication.',
          'Tutoring is not a school, accredited diploma program, childcare service, medical service, psychological service, special-education diagnosis, legal advice, or guarantee of admission, grades, or examination results.',
          'The academy may decline a request that is outside tutor expertise, unavailable in the requested schedule, unsafe, unlawful, dishonest, or unsuitable for online tutoring.',
        ],
      },
      {
        id: 'accurate-information',
        title:
          '5. Accurate information and communication',
        bullets: [
          'The family must provide accurate contact, grade, subject, curriculum, time-zone, scheduling, and payment information.',
          'Relevant educational material should be shared early enough for reasonable tutor preparation.',
          'The academy should be informed promptly about material changes, including schedule, contact details, learning goal, school course, or a safety concern.',
          'The family is responsible for monitoring the communication channel used for confirmations, changes, invoices, and urgent notices.',
          'The academy may rely on information provided by the parent, guardian, or student unless it has a reasonable reason to question its accuracy.',
        ],
      },
      {
        id: 'matching',
        title:
          '6. Tutor matching and tutor changes',
        paragraphs: [
          'The academy considers subject, grade, curriculum, language, communication, availability, and information provided about the student when coordinating a tutor.',
          'The academy does not guarantee a particular tutor, teaching style, personality, schedule, gender preference, or long-term tutor availability.',
          'A parent or guardian may request a tutor review or change. The academy will consider the reason and available alternatives. A requested tutor or exact time may not be available.',
          'A tutor may also be changed because of availability, illness, emergency, performance review, safeguarding concerns, operational needs, or the end of the tutor’s relationship with the academy.',
        ],
      },
      {
        id: 'scheduling',
        title:
          '7. Scheduling, attendance, cancellation, and late arrival',
        paragraphs: [
          'Lessons are delivered at the confirmed date and time. The family must verify the time zone and joining instructions.',
          'Cancellation, rescheduling, absence, late arrival, technical problems, tutor cancellation, weekly attendance, and recurring schedule changes are governed by the current Cancellation and Rescheduling Policy and any more specific written arrangement.',
          'A student who arrives late is not entitled to an extension beyond the scheduled ending time. A missed lesson may be deducted according to the applicable policy.',
          'The academy may release a recurring time when attendance is inconsistent, payment is overdue, communication is not maintained, or the schedule is repeatedly changed.',
        ],
      },
      {
        id: 'payments',
        title:
          '8. Prices, packages, payments, and taxes',
        bullets: [
          'Prices, currency, number and length of lessons, discounts, validity, taxes, and payment schedule are stated in the applicable invoice, checkout, offer, or written confirmation.',
          'Payment is due according to the stated schedule. The academy may delay, pause, or cancel future lessons when an amount is overdue.',
          'Bank, card, payment-provider, currency-conversion, or international-transfer charges may be the customer’s responsibility unless stated otherwise.',
          'A package is personal to the identified student or family and may not be sold, transferred, or shared without written approval.',
          'Lesson balances are based on academy attendance and payment records, subject to correction of verified errors.',
          'Prices for future purchases may change. A price change does not normally alter a fully paid existing package unless the written package terms allow it or the customer agrees.',
        ],
      },
      {
        id: 'trials',
        title:
          '9. Trial lessons, complimentary lessons, discounts, and promotions',
        paragraphs: [
          'A trial, complimentary lesson, coupon, discount, or promotion may have eligibility, expiry, subject, tutor, schedule, and one-per-family or one-per-student restrictions.',
          'Promotional value has no cash value unless required by law. The academy may refuse or reverse misuse, duplication, false registration, or unauthorized combination of offers.',
          'A free or discounted lesson does not guarantee future tutor availability, a specific package price, or acceptance into every requested schedule.',
          'A missed trial or complimentary lesson may be treated as used when a tutor reserved the time and the academy did not confirm a timely cancellation.',
        ],
      },
      {
        id: 'refunds',
        title:
          '10. Refunds, credits, lesson balances, and payment disputes',
        paragraphs: [
          'Refund eligibility depends on the applicable package, payment record, lesson use, cancellation rules, written offer, and mandatory consumer rights.',
          'Used, missed, expired, promotional, complimentary, or discounted lessons may be non-refundable to the extent permitted by law and the applicable written terms.',
          'When the academy verifies a billing, attendance, or lesson-balance error, it may correct the record through a refund, credit, restored lesson, rescheduling, or another reasonable adjustment.',
          'The customer should contact the academy and allow a reasonable opportunity to review the records before starting a chargeback or payment dispute, except where urgent legal action is reasonably required.',
          'Nothing in these Terms removes a refund, cancellation, disclosure, or other consumer right that cannot legally be waived.',
        ],
      },
      {
        id: 'integrity',
        title:
          '11. Academic integrity and student responsibility',
        paragraphs: [
          'Tutors explain, demonstrate, question, review, and guide. They do not impersonate students, take tests for them, complete graded assessments dishonestly, or produce work that the student is expected to submit as their own.',
          'The student remains responsible for understanding, completing, checking, and submitting schoolwork in accordance with school rules.',
          'The academy may refuse a request that appears dishonest, unsafe, unlawful, or inconsistent with academic integrity.',
          'The academy does not guarantee that a school, teacher, examiner, or institution will accept the student’s work or tutoring method.',
        ],
      },
      {
        id: 'conduct-safety',
        title:
          '12. Conduct, communication, and child safety',
        bullets: [
          'Students, parents, tutors, and staff must communicate respectfully and avoid harassment, discrimination, threats, abuse, sexual content, bullying, or unsafe conduct.',
          'Lesson links, tutor contact details, student information, screenshots, recordings, and private messages must not be posted publicly or shared without authorization.',
          'A tutor should not be asked to meet a minor privately outside approved academy arrangements.',
          'A parent or guardian should report a safeguarding, conduct, privacy, or professional concern promptly through an approved academy channel.',
          'The academy may review, pause, restrict, or end service when conduct creates a safeguarding, fraud, privacy, security, or serious professional concern.',
          'An immediate danger should be reported to the appropriate local emergency or safeguarding authority; the academy email is not an emergency service.',
        ],
      },
      {
        id: 'technology',
        title:
          '13. Devices, internet, and third-party platforms',
        paragraphs: [
          'The family is responsible for compatible equipment, internet access, audio, camera where required, an updated browser or application, a safe learning space, and the correct lesson link.',
          'The service may depend on third-party classroom, video, cloud, scheduling, email, hosting, analytics, and payment providers. Their availability, security, and terms are outside the academy’s full control.',
          'The academy may change a platform or joining method for security, performance, availability, accessibility, or operational reasons.',
          'A technical problem is handled according to the Cancellation and Rescheduling Policy and the facts reasonably available to the academy.',
        ],
      },
      {
        id: 'privacy-recording',
        title:
          '14. Privacy, lesson information, and recordings',
        paragraphs: [
          'Information is handled according to the Privacy Policy and applicable law.',
          'Families should share only information reasonably necessary for tutoring and remove unrelated sensitive details from documents.',
          'A participant may not record, photograph, transcribe, publish, stream, or distribute a lesson or private communication without prior authorization and any consent required by law.',
          'If the academy proposes recording for a stated quality, training, safety, or service purpose, it will provide appropriate notice or seek consent where required.',
          'The family should not share account passwords, payment-card numbers, government identification, or unnecessary medical records through ordinary lesson communication.',
        ],
      },
      {
        id: 'intellectual-property',
        title:
          '15. Intellectual property and permitted use',
        paragraphs: [
          'The website design, academy materials, original worksheets, branding, lesson resources, internal processes, and content may be protected by copyright, trademark, or other rights.',
          'A family may use materials provided to the student for personal educational use. Materials may not be sold, publicly posted, copied in bulk, redistributed, used to train an automated system, or used commercially without permission.',
          'School materials and third-party resources remain owned by their respective rights holders and must be used according to applicable permission and copyright rules.',
          'The student retains ownership of original student work, subject to the school’s rules and any rights in third-party materials.',
        ],
      },
      {
        id: 'communications-marketing',
        title:
          '16. Service messages, email, text messages, and marketing',
        paragraphs: [
          'The academy may send communications necessary to respond to a request, coordinate lessons, administer a package, collect payment, provide support, or communicate service changes.',
          'Promotional electronic messages will be sent only as permitted by applicable law. They should identify the sender and provide an appropriate unsubscribe method.',
          'Unsubscribing from marketing does not prevent messages that are reasonably necessary to administer an active service, respond to a request, protect an account, or address payment or safety matters.',
        ],
      },
      {
        id: 'availability',
        title:
          '17. Service availability and changes',
        paragraphs: [
          'The academy may change tutors, schedules, platforms, lesson formats, prices for future purchases, policies, or available subjects when reasonably required.',
          'Temporary interruption may result from maintenance, provider outages, emergencies, illness, time-zone changes, legal restrictions, or events beyond reasonable control.',
          'The academy will make reasonable efforts to communicate material changes affecting confirmed services.',
          'The academy may update website descriptions and features. A website description does not override a more specific written package or booking confirmation.',
        ],
      },
      {
        id: 'termination',
        title:
          '18. Suspension or termination',
        paragraphs: [
          'The academy may pause, restrict, or end service for overdue payment, repeated absence, abuse, harassment, fraud, unsafe conduct, academic dishonesty, privacy or security risk, platform misuse, or serious breach of these Terms.',
          'A family may stop future services subject to package, cancellation, expiry, payment, and refund terms.',
          'Ending service does not remove payment obligations, confidentiality duties, intellectual-property restrictions, dispute rights, or other provisions that reasonably continue after termination.',
        ],
      },
      {
        id: 'results',
        title:
          '19. Educational results and disclaimers',
        paragraphs: [
          'Tutoring aims to support understanding, skills, confidence, and preparation. Results depend on attendance, participation, prior knowledge, independent practice, school requirements, health, language, motivation, and other factors.',
          'The academy does not guarantee a grade, score, admission, scholarship, teacher approval, school outcome, or completion of a particular amount of work.',
          'To the extent permitted by law, the service is provided using reasonable care but without a warranty that every platform, tutor, schedule, lesson, or result will be uninterrupted, error-free, or suitable for every purpose.',
          'Educational observations made during tutoring are not medical, psychological, diagnostic, or formal special-education assessments.',
        ],
      },
      {
        id: 'liability',
        title:
          '20. Limitation of liability',
        paragraphs: [
          'Nothing in these Terms excludes liability or consumer rights that cannot legally be excluded or limited.',
          'To the extent permitted by law, the academy is not responsible for indirect, incidental, special, punitive, or consequential loss, loss of marks, lost opportunity, data loss, third-party platform failure, or costs arising from reliance on an expected academic result.',
          'Where liability may legally be limited, total liability connected with a claim will not exceed the amount paid for the affected tutoring service during the reasonable period connected with the claim.',
          'This section applies only to the extent permitted by the law that governs the transaction.',
        ],
      },
      {
        id: 'complaints-disputes',
        title:
          '21. Complaints, payment disputes, and applicable law',
        paragraphs: [
          `A concern should first be sent to ${legalConfig.contactEmail} with the student, date, lesson, payment, or communication details reasonably needed for review.`,
          'The parties should make a reasonable good-faith effort to resolve the issue through records, communication, correction of verified errors, and an appropriate operational response.',
          'These Terms are governed by the laws that legally apply to the operating entity and transaction, without removing mandatory consumer protections that apply in the customer’s location.',
          'The academy may request that a complaint be submitted by the parent, guardian, payer, or account holder whose identity and authority can reasonably be verified.',
        ],
      },
      {
        id: 'general',
        title: '22. General terms',
        bullets: [
          'If part of these Terms is unenforceable, the remaining provisions continue to the extent permitted by law.',
          'A delay in enforcing a term is not a permanent waiver.',
          'The academy may assign the agreement as part of a lawful business reorganization or transfer. The customer may not transfer a package or agreement without written approval.',
          'Electronic communications, confirmations, invoices, and acceptances may be used as records of the agreement.',
          'Section headings are for convenience and do not limit the meaning of a provision.',
          'These Terms, the booking or invoice, the Privacy Policy, the Cancellation and Rescheduling Policy, and any specific written terms form the agreement for the relevant service.',
        ],
      },
      {
        id: 'changes',
        title:
          '23. Changes to the Terms',
        paragraphs: [
          'The academy may update these Terms for future website or service use. The current version will show the last-updated date.',
          'Material changes affecting an active paid service will be communicated when reasonably required. Changes do not remove rights that cannot legally be waived.',
        ],
      },
    ],

    closing: {
      title:
        'Questions about the Terms?',
      description:
        'Contact the academy before purchasing or using a service when a term, package, schedule, payment condition, or policy is unclear.',
      contactLabel:
        legalConfig.contactEmail,
    },
  },

  ar: {
    seo: {
      title:
        'الشروط والأحكام | أكاديمية مصطفى',
      description:
        'اقرأ الشروط التي تنظم موقع أكاديمية مصطفى وخدمات التدريس الفردي أونلاين، بما في ذلك الحجز والحصص والدفع والسلوك والخصوصية والتقنية وحدود الخدمة.',
    },

    breadcrumbs: {
      home: 'الرئيسية',
      current: 'الشروط والأحكام',
      ariaLabel: 'مسار التنقل',
    },

    hero: {
      eyebrow: 'شروط الخدمة',
      title: 'الشروط والأحكام',
      description:
        'تنظم هذه الشروط استخدام موقع أكاديمية مصطفى وخدمات التدريس أونلاين التي تديرها Success Path Mentors. يرجى قراءتها قبل الحجز أو شراء باقة أو مشاركة الطالب.',
      lastUpdatedLabel: 'آخر تحديث',
      lastUpdated:
        legalConfig.effectiveDateArabic,
      appliesToLabel: 'تنطبق على',
      appliesTo:
        'استخدام الموقع والاستفسارات والحصص التجريبية والباقات والدروس والدفع والمراسلات المرتبطة بها',
      contactLabel:
        legalConfig.contactEmail,
    },

    tableOfContentsLabel:
      'أقسام الشروط والأحكام',

    sections: [
      {
        id: 'acceptance',
        title: '1. قبول هذه الشروط',
        paragraphs: [
          `تمثل هذه الشروط اتفاقًا بين الشخص الذي يشتري أو يرتب أو يدخل أو يستخدم الخدمة وبين ${legalConfig.legalEntityName}، التي تقدم خدمة ${legalConfig.brandName} تحت اسم ${legalConfig.operatingName}.`,
          'من خلال إرسال طلب أو تأكيد حصة أو شراء أو استخدام باقة أو دخول فصل أونلاين أو الاستمرار في استخدام الخدمة بعد استلام الشروط، فإنك تؤكد قراءتها والموافقة عليها.',
          'عندما يرتب ولي الأمر التدريس لطالب، فإنه يقبل الشروط لنفسه، وبالقدر الذي يسمح به القانون، نيابة عن الطالب.',
          'عند عدم الموافقة، لا تشتر الخدمة ولا تستخدمها. وتبقى الحقوق التي لا يجوز التنازل عنها قانونًا نافذة.',
        ],
      },
      {
        id: 'online-agreements',
        title:
          '2. الاتفاقات أونلاين والتأكيد المكتوب',
        paragraphs: [
          'قبل إتمام شراء أونلاين أو تأكيد باقة، ينبغي أن توضح الأكاديمية وصف الخدمة وعدد الحصص أو مدتها عند الاقتضاء والسعر الإجمالي والعملة وشروط الدفع والقيود الجوهرية وشروط الإلغاء أو الاسترداد المطبقة.',
          'ينبغي منح العميل فرصة لمراجعة المعلومات وتصحيح الأخطاء الجوهرية وقبول الاتفاق أو رفضه قبل إتمامه عندما يطلب القانون ذلك.',
          'بعد إتمام الاتفاق، يمكن للأكاديمية تقديم نسخة إلكترونية من خلال فاتورة أو إيصال أو بريد تأكيد أو سجل حساب أو صيغة أخرى يستطيع العميل الاحتفاظ بها.',
          'عندما يتعارض شرط عام في الموقع مع فاتورة أو صفحة دفع أو تأكيد باقة أو عرض مكتوب أكثر تحديدًا، يطبق الشرط المكتوب الأكثر تحديدًا على المعاملة، مع مراعاة القانون الإلزامي.',
        ],
      },
      {
        id: 'minors',
        title:
          '3. أولياء الأمور والطلاب دون 18 عامًا',
        paragraphs: [
          'يجب أن يرتب تدريس القاصر أو يوافق عليه ولي أمر أو وصي أو شخص بالغ مخول يستطيع تقديم المعلومات والموافقة على الشروط وتحمل مسؤولية الدفع.',
          'يؤكد الشخص البالغ الذي يرتب الخدمة أن لديه صلاحية التصرف للطالب ومشاركة المعلومات التعليمية ومعلومات التواصل المقدمة.',
          'صممت نماذج الاستفسار والدفع في الموقع ليكملها شخص بالغ، وليس الطفل بصورة مستقلة.',
          'يجب على الطالب اتباع قواعد السلوك والسلامة والنزاهة الأكاديمية والمنصة المناسبة لعمره. ويبقى ولي الأمر مسؤولًا عن الإشراف المعقول على جهاز الطالب وبيئته ومشاركته.',
        ],
      },
      {
        id: 'services',
        title: '4. خدمات التدريس',
        paragraphs: [
          'تقدم الأكاديمية دعمًا تعليميًا أونلاين قد يشمل الحصص الفردية وتوجيه الواجبات وشرح المفاهيم والقراءة أو اللغة والاستعداد للاختبارات وتطوير المهارات والتنسيق الأكاديمي.',
          'تحدد المادة والصف والمدرس والوقت والمنصة ومدة الحصة والباقة والسعر وفق تأكيد الحجز أو الفاتورة أو العرض أو المراسلة المكتوبة.',
          'التدريس ليس مدرسة أو برنامج شهادة معتمدًا أو حضانة أو خدمة طبية أو نفسية أو تشخيصًا للتربية الخاصة أو استشارة قانونية أو ضمانًا للقبول أو الدرجات أو نتائج الاختبارات.',
          'يجوز للأكاديمية رفض طلب خارج خبرة المدرسين أو غير متوفر في الوقت المطلوب أو غير آمن أو غير قانوني أو غير نزيه أو غير مناسب للتدريس أونلاين.',
        ],
      },
      {
        id: 'accurate-information',
        title:
          '5. دقة المعلومات والتواصل',
        bullets: [
          'يجب تقديم معلومات صحيحة عن التواصل والصف والمادة والمنهج والمنطقة الزمنية والوقت والدفع.',
          'ينبغي مشاركة المادة التعليمية ذات الصلة في وقت يسمح باستعداد معقول للمدرس.',
          'ينبغي إبلاغ الأكاديمية سريعًا بأي تغيير جوهري في الوقت أو التواصل أو الهدف أو المقرر أو السلامة.',
          'تتحمل الأسرة مسؤولية متابعة قناة التواصل المستخدمة للتأكيد والتغيير والفواتير والإشعارات العاجلة.',
          'يجوز للأكاديمية الاعتماد على المعلومات المقدمة من ولي الأمر أو الطالب ما لم يوجد سبب معقول للتشكيك في دقتها.',
        ],
      },
      {
        id: 'matching',
        title:
          '6. اختيار المدرس وتغييره',
        paragraphs: [
          'تراعي الأكاديمية المادة والصف والمنهج واللغة والتواصل والتوفر والمعلومات المقدمة عن الطالب.',
          'لا تضمن الأكاديمية مدرسًا أو أسلوبًا أو شخصية أو وقتًا أو تفضيلًا متعلقًا بجنس المدرس أو توفرًا طويل المدى بعينه.',
          'يمكن لولي الأمر طلب مراجعة أو تغيير. تراجع الأكاديمية السبب والبدائل المتاحة، وقد لا يتوفر المدرس أو الوقت المطلوب.',
          'قد يتغير المدرس أيضًا بسبب التوفر أو المرض أو الطوارئ أو مراجعة الأداء أو حماية الطفل أو الحاجة التشغيلية أو انتهاء علاقة المدرس بالأكاديمية.',
        ],
      },
      {
        id: 'scheduling',
        title:
          '7. المواعيد والحضور والإلغاء والتأخير',
        paragraphs: [
          'تقدم الحصص في التاريخ والوقت المؤكدين، وعلى الأسرة التحقق من المنطقة الزمنية ومعلومات الدخول.',
          'تخضع الإلغاءات وإعادة الجدولة والغياب والتأخير والمشكلات التقنية وإلغاء المدرس والحضور الأسبوعي وتغيير الجدول لسياسة الإلغاء وإعادة الجدولة وأي ترتيب مكتوب أكثر تحديدًا.',
          'لا يحق للطالب المتأخر تمديد الحصة بعد نهايتها المقررة. وقد تخصم الحصة الفائتة وفق السياسة.',
          'يجوز للأكاديمية إلغاء حجز وقت متكرر عند عدم انتظام الحضور أو تأخر الدفع أو انقطاع التواصل أو تكرار تغيير الجدول.',
        ],
      },
      {
        id: 'payments',
        title:
          '8. الأسعار والباقات والدفع والضرائب',
        bullets: [
          'يظهر السعر والعملة وعدد ومدة الحصص والخصم والصلاحية والضرائب وجدول الدفع في الفاتورة أو صفحة الدفع أو العرض أو التأكيد.',
          'يستحق الدفع وفق الجدول المحدد، ويمكن للأكاديمية تأخير أو إيقاف أو إلغاء الحصص المستقبلية عند التأخر.',
          'قد يتحمل العميل رسوم البنك أو البطاقة أو مزود الدفع أو تحويل العملة أو التحويل الدولي ما لم يذكر خلاف ذلك.',
          'الباقة شخصية للطالب أو الأسرة المحددة ولا يجوز بيعها أو نقلها أو مشاركتها دون موافقة مكتوبة.',
          'يعتمد الرصيد على سجلات الحضور والدفع لدى الأكاديمية، مع تصحيح الأخطاء المثبتة.',
          'قد تتغير أسعار المشتريات المستقبلية. ولا يغير السعر الجديد عادة باقة قائمة مدفوعة بالكامل ما لم تسمح شروطها أو يوافق العميل.',
        ],
      },
      {
        id: 'trials',
        title:
          '9. الحصص التجريبية والمجانية والخصومات والعروض',
        paragraphs: [
          'قد تخضع الحصة التجريبية أو المجانية أو القسيمة أو الخصم لشروط الأهلية والانتهاء والمادة والمدرس والوقت ومرة واحدة للأسرة أو الطالب.',
          'لا قيمة نقدية للعرض إلا إذا طلب القانون. ويمكن رفض أو عكس إساءة الاستخدام أو التسجيل المكرر أو الخاطئ أو الجمع غير المصرح به.',
          'لا تضمن الحصة المجانية أو المخفضة توفر المدرس مستقبلًا أو سعر باقة معينًا أو القبول في كل جدول مطلوب.',
          'قد تعتبر الحصة التجريبية أو المجانية الفائتة مستخدمة عندما يكون المدرس قد حجز الوقت ولم تؤكد الأكاديمية إلغاءً في الوقت المناسب.',
        ],
      },
      {
        id: 'refunds',
        title:
          '10. الاسترداد والرصيد ونزاعات الدفع',
        paragraphs: [
          'تعتمد أهلية الاسترداد على الباقة وسجل الدفع واستخدام الحصص وقواعد الإلغاء والعرض المكتوب وحقوق المستهلك الإلزامية.',
          'قد تكون الحصص المستخدمة أو الفائتة أو المنتهية أو المجانية أو الترويجية أو المخفضة غير قابلة للاسترداد بالقدر الذي يسمح به القانون والشروط المكتوبة.',
          'عند إثبات خطأ في الفاتورة أو الحضور أو الرصيد، يمكن للأكاديمية تصحيحه باسترداد أو رصيد أو إعادة حصة أو إعادة جدولة أو تعديل معقول آخر.',
          'ينبغي التواصل مع الأكاديمية ومنحها فرصة معقولة للمراجعة قبل بدء اعتراض بنكي، إلا عندما يكون الإجراء القانوني العاجل ضروريًا.',
          'لا تلغي هذه الشروط أي حق في الاسترداد أو الإلغاء أو الإفصاح أو أي حق مستهلك لا يجوز التنازل عنه قانونًا.',
        ],
      },
      {
        id: 'integrity',
        title:
          '11. النزاهة الأكاديمية ومسؤولية الطالب',
        paragraphs: [
          'يشرح المدرس ويوضح ويسأل ويراجع ويوجه. ولا ينتحل شخصية الطالب أو يقدم الاختبار عنه أو ينجز تقييمًا بطريقة غير نزيهة أو ينتج عملًا يجب أن يقدمه الطالب باسمه.',
          'يبقى الطالب مسؤولًا عن فهم العمل وإكماله ومراجعته وتسليمه وفق قواعد المدرسة.',
          'يجوز للأكاديمية رفض طلب غير نزيه أو غير آمن أو مخالف للقانون أو النزاهة الأكاديمية.',
          'لا تضمن الأكاديمية قبول المدرسة أو المعلم أو جهة الاختبار لعمل الطالب أو طريقة التدريس.',
        ],
      },
      {
        id: 'conduct-safety',
        title:
          '12. السلوك والتواصل وسلامة الطفل',
        bullets: [
          'يجب على الطلاب والأسر والمدرسين والموظفين التواصل باحترام وتجنب التحرش والتمييز والتهديد والإساءة والمحتوى الجنسي والتنمر والسلوك غير الآمن.',
          'لا يجوز نشر روابط الحصص أو معلومات المدرس أو الطالب أو الصور أو التسجيلات أو الرسائل الخاصة دون إذن.',
          'لا ينبغي طلب لقاء مدرس بقاصر بصورة خاصة خارج ترتيبات الأكاديمية المعتمدة.',
          'ينبغي لولي الأمر الإبلاغ سريعًا عن أي ملاحظة تتعلق بحماية الطفل أو السلوك أو الخصوصية أو المهنية عبر قناة معتمدة.',
          'يجوز للأكاديمية مراجعة أو إيقاف أو تقييد أو إنهاء الخدمة عند وجود مشكلة حماية طفل أو احتيال أو خصوصية أو أمن أو سلوك مهني خطير.',
          'يجب الإبلاغ عن الخطر الفوري للجهة المحلية المختصة؛ بريد الأكاديمية ليس خدمة طوارئ.',
        ],
      },
      {
        id: 'technology',
        title:
          '13. الأجهزة والإنترنت والمنصات الخارجية',
        paragraphs: [
          'تتحمل الأسرة مسؤولية الجهاز المناسب والإنترنت والصوت والكاميرا عند الحاجة والمتصفح أو التطبيق المحدث وبيئة التعلم الآمنة والرابط الصحيح.',
          'قد تعتمد الخدمة على مزودي فصول وفيديو وتخزين ومواعيد وبريد واستضافة وتحليلات ودفع، ويخرج توفرهم وأمنهم وشروطهم عن السيطرة الكاملة للأكاديمية.',
          'يجوز للأكاديمية تغيير المنصة أو طريقة الدخول لأسباب الأمن أو الأداء أو التوفر أو سهولة الوصول أو التشغيل.',
          'تعالج المشكلة التقنية وفق سياسة الإلغاء وإعادة الجدولة والوقائع المتاحة بصورة معقولة للأكاديمية.',
        ],
      },
      {
        id: 'privacy-recording',
        title:
          '14. الخصوصية ومعلومات الحصة والتسجيل',
        paragraphs: [
          'تتم معالجة المعلومات وفق سياسة الخصوصية والقانون.',
          'ينبغي مشاركة المعلومات اللازمة فقط وإزالة التفاصيل الحساسة غير المتعلقة بالتدريس.',
          'لا يجوز تسجيل الحصة أو تصويرها أو نسخها أو بثها أو نشرها أو توزيعها دون موافقة مسبقة وأي موافقة يطلبها القانون.',
          'إذا اقترحت الأكاديمية التسجيل لغرض معلن يتعلق بالجودة أو التدريب أو السلامة أو الخدمة، فستقدم الإشعار أو تطلب الموافقة عند الحاجة.',
          'لا ينبغي مشاركة كلمات المرور أو أرقام بطاقات الدفع أو الهوية الحكومية أو السجلات الطبية غير اللازمة في مراسلات الحصة العادية.',
        ],
      },
      {
        id: 'intellectual-property',
        title:
          '15. الملكية الفكرية والاستخدام المسموح',
        paragraphs: [
          'قد يكون تصميم الموقع ومواد الأكاديمية وأوراقها الأصلية وعلامتها ومواردها وعملياتها ومحتواها محميًا بحقوق النشر أو العلامة أو حقوق أخرى.',
          'يجوز للأسرة استخدام المواد المقدمة للطالب لأغراض تعليمية شخصية، ولا يجوز بيعها أو نشرها أو نسخها بكميات أو إعادة توزيعها أو استخدامها لتدريب نظام آلي أو تجاريًا دون إذن.',
          'تبقى مواد المدرسة والجهات الأخرى ملكًا لأصحابها وتستخدم وفق الإذن وقواعد حقوق النشر.',
          'يبقى العمل الأصلي للطالب ملكًا له، مع مراعاة قواعد المدرسة والحقوق الموجودة في المواد الخارجية.',
        ],
      },
      {
        id: 'communications-marketing',
        title:
          '16. رسائل الخدمة والبريد والنصوص والتسويق',
        paragraphs: [
          'قد ترسل الأكاديمية رسائل لازمة للرد على الطلب أو تنظيم الحصص أو إدارة الباقة أو تحصيل الدفع أو تقديم الدعم أو إبلاغ تغييرات الخدمة.',
          'ترسل الرسائل الإلكترونية الترويجية بما يسمح به القانون، وينبغي أن توضح المرسل وتوفر وسيلة مناسبة لإلغاء الاشتراك.',
          'لا يمنع إلغاء الاشتراك التسويقي الرسائل اللازمة بصورة معقولة لإدارة خدمة نشطة أو الرد على طلب أو حماية حساب أو معالجة الدفع أو السلامة.',
        ],
      },
      {
        id: 'availability',
        title:
          '17. توفر الخدمة والتغييرات',
        paragraphs: [
          'يجوز للأكاديمية تغيير المدرس والوقت والمنصة وصيغة الحصة وأسعار المشتريات المستقبلية والسياسات والمواد المتاحة عند الحاجة المعقولة.',
          'قد يحدث انقطاع بسبب الصيانة أو المزود أو الطوارئ أو المرض أو المنطقة الزمنية أو القيود القانونية أو أحداث خارجة عن السيطرة المعقولة.',
          'تبذل الأكاديمية جهودًا معقولة لإبلاغ التغييرات الجوهرية التي تؤثر في خدمة مؤكدة.',
          'يجوز تحديث أوصاف الموقع وخصائصه، ولا يتغلب الوصف العام في الموقع على تأكيد باقة أو حجز مكتوب أكثر تحديدًا.',
        ],
      },
      {
        id: 'termination',
        title:
          '18. إيقاف الخدمة أو إنهاؤها',
        paragraphs: [
          'يجوز إيقاف أو تقييد أو إنهاء الخدمة بسبب تأخر الدفع أو الغياب المتكرر أو الإساءة أو التحرش أو الاحتيال أو السلوك غير الآمن أو الغش الأكاديمي أو خطر الخصوصية أو الأمن أو إساءة استخدام المنصة أو الخرق الجسيم.',
          'يمكن للأسرة إيقاف الخدمات المستقبلية وفق شروط الباقة والإلغاء والانتهاء والدفع والاسترداد.',
          'لا يلغي إنهاء الخدمة التزامات الدفع أو السرية أو قيود الملكية الفكرية أو حقوق النزاع أو الأحكام التي يستمر تطبيقها بصورة معقولة بعد الإنهاء.',
        ],
      },
      {
        id: 'results',
        title:
          '19. النتائج التعليمية وإخلاء المسؤولية',
        paragraphs: [
          'يهدف التدريس إلى دعم الفهم والمهارات والثقة والاستعداد. وتعتمد النتائج على الحضور والمشاركة والمعرفة السابقة والتدريب ومتطلبات المدرسة والصحة واللغة والدافعية وعوامل أخرى.',
          'لا تضمن الأكاديمية درجة أو نتيجة أو قبولًا أو منحة أو موافقة مدرس المدرسة أو نتيجة مدرسية أو كمية عمل محددة.',
          'بالقدر الذي يسمح به القانون، تقدم الخدمة بعناية معقولة من دون ضمان أن كل منصة أو مدرس أو وقت أو حصة أو نتيجة ستكون دون انقطاع أو خطأ أو مناسبة لكل غرض.',
          'الملاحظات التعليمية أثناء التدريس ليست تقييمًا طبيًا أو نفسيًا أو تشخيصيًا أو تقييمًا رسميًا للتربية الخاصة.',
        ],
      },
      {
        id: 'liability',
        title:
          '20. حدود المسؤولية',
        paragraphs: [
          'لا تستبعد هذه الشروط المسؤولية أو حقوق المستهلك التي لا يجوز استبعادها أو تقييدها قانونًا.',
          'بالقدر الذي يسمح به القانون، لا تتحمل الأكاديمية خسارة غير مباشرة أو عرضية أو خاصة أو عقابية أو تبعية أو خسارة درجات أو فرصة أو بيانات أو فشل منصة خارجية أو تكاليف ناتجة عن الاعتماد على نتيجة أكاديمية متوقعة.',
          'عندما يجوز تقييد المسؤولية، لا تتجاوز المسؤولية الإجمالية المبلغ المدفوع عن الخدمة المتأثرة خلال الفترة المعقولة المرتبطة بالمطالبة.',
          'يطبق هذا البند فقط بالقدر الذي يسمح به القانون الذي يحكم المعاملة.',
        ],
      },
      {
        id: 'complaints-disputes',
        title:
          '21. الشكاوى ونزاعات الدفع والقانون المطبق',
        paragraphs: [
          `ينبغي إرسال الملاحظة أولًا إلى ${legalConfig.contactEmail} مع بيانات الطالب أو التاريخ أو الحصة أو الدفع أو المراسلة اللازمة بصورة معقولة للمراجعة.`,
          'ينبغي للطرفين بذل جهد معقول وحسن النية لحل المشكلة من خلال السجلات والتواصل وتصحيح الأخطاء المثبتة والاستجابة المناسبة.',
          'تخضع الشروط للقوانين التي تنطبق قانونًا على الجهة المشغلة والمعاملة، دون إزالة حماية المستهلك الإلزامية التي تنطبق في مكان العميل.',
          'يجوز للأكاديمية طلب تقديم الشكوى من ولي الأمر أو الدافع أو صاحب الحساب الذي يمكن التحقق بصورة معقولة من هويته وصلاحيته.',
        ],
      },
      {
        id: 'general',
        title: '22. أحكام عامة',
        bullets: [
          'إذا تعذر تنفيذ جزء من الشروط، تستمر الأجزاء الأخرى بالقدر الذي يسمح به القانون.',
          'لا يعني التأخر في تطبيق شرط التنازل عنه دائمًا.',
          'يجوز للأكاديمية نقل الاتفاق ضمن إعادة تنظيم أو نقل قانوني للعمل، ولا يجوز للعميل نقل الباقة أو الاتفاق دون موافقة مكتوبة.',
          'يمكن استخدام المراسلات والتأكيدات والفواتير والموافقات الإلكترونية كسجلات للاتفاق.',
          'وضعت عناوين الأقسام للتسهيل ولا تحد من معنى الأحكام.',
          'تشكل هذه الشروط والحجز أو الفاتورة وسياسة الخصوصية وسياسة الإلغاء وأي شروط مكتوبة محددة اتفاق الخدمة.',
        ],
      },
      {
        id: 'changes',
        title:
          '23. تعديل الشروط',
        paragraphs: [
          'يجوز تحديث الشروط للاستخدام المستقبلي للموقع أو الخدمة، وستظهر النسخة الحالية تاريخ آخر تحديث.',
          'يتم إبلاغ التغييرات الجوهرية التي تؤثر في خدمة مدفوعة نشطة عند الحاجة المعقولة، ولا تزيل التغييرات حقوقًا لا يجوز التنازل عنها.',
        ],
      },
    ],

    closing: {
      title:
        'هل لديك سؤال عن الشروط؟',
      description:
        'تواصل مع الأكاديمية قبل الشراء أو الاستخدام عندما يكون شرط أو باقة أو موعد أو ترتيب دفع أو سياسة غير واضحة.',
      contactLabel:
        legalConfig.contactEmail,
    },
  },
} satisfies Record<
  'en' | 'ar',
  LegalPageContent
>;
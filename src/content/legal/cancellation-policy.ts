import { legalConfig } from '@/config/legal';
import type { LegalPageContent } from '@/types/legal-page';

export const cancellationPolicyContent = {
  en: {
    seo: {
      title:
        'Cancellation and Rescheduling Policy | Mustafa Academy',
      description:
        'Read the Mustafa Academy rules for lesson cancellation, rescheduling, absence, late arrival, tutor cancellation, technical problems, and exceptional circumstances.',
    },

    breadcrumbs: {
      home: 'Home',
      current:
        'Cancellation and Rescheduling Policy',
      ariaLabel: 'Breadcrumb',
    },

    hero: {
      eyebrow: 'Scheduling policy',
      title:
        'Cancellation and Rescheduling Policy',
      description:
        'This policy explains how cancellations, absences, rescheduling requests, late arrival, tutor cancellations, and technical problems affect lesson balances and recurring schedules.',
      lastUpdatedLabel: 'Last updated',
      lastUpdated:
        legalConfig.effectiveDate,
      appliesToLabel: 'Applies to',
      appliesTo:
        'Trial lessons, package lessons, and recurring online tutoring schedules unless a specific written exception applies',
      contactLabel:
        legalConfig.contactEmail,
    },

    tableOfContentsLabel:
      'Cancellation policy sections',

    sections: [
      {
        id: 'purpose',
        title: '1. Purpose of this policy',
        paragraphs: [
          'Tutors reserve lesson times and prepare in advance. This policy is intended to support continuity for students, respect tutor time, and give families a clear and consistent process for schedule changes.',
          'A booking confirmation, invoice, package description, promotion, or written agreement may contain additional terms. A more specific written term applies when it addresses the same issue, subject to mandatory consumer rights.',
        ],
      },
      {
        id: 'calendar-week',
        title:
          '2. Meaning of a calendar week',
        paragraphs: [
          'For this policy, a calendar week normally runs from Monday through Sunday using the time zone recorded for the student, unless the academy confirms a different arrangement in writing.',
        ],
      },
      {
        id: 'approved-request',
        title:
          '3. How to request a cancellation or schedule change',
        paragraphs: [
          'A parent or guardian should send the request through an approved academy communication channel before the scheduled lesson begins. Telling the tutor alone may not complete the request unless the academy or an authorized scheduling administrator confirms it.',
          'The request should identify the student, tutor, lesson date and time, and the requested action. A schedule change is not final until the academy confirms it.',
          'A package, booking, or written offer may establish a longer advance-notice period. That requirement applies when it was clearly communicated before the lesson or package was confirmed.',
        ],
      },
      {
        id: 'one-reschedule',
        title:
          '4. One eligible cancellation and reschedule per week',
        paragraphs: [
          'Unless a different written arrangement applies, one lesson for the same student may be cancelled and requested for rescheduling during a calendar week.',
          'The replacement lesson should normally be completed during the same calendar week. It remains subject to tutor, classroom, and schedule availability, and a requested replacement time is not guaranteed.',
          'A rescheduling request does not extend a package expiry date unless the academy confirms an extension in writing.',
        ],
      },
      {
        id: 'second-cancellation',
        title:
          '5. Second cancellation or absence during the same week',
        paragraphs: [
          'A second cancellation, missed lesson, or student absence during the same calendar week will normally be counted as a used lesson and deducted from the student’s balance.',
          'This rule normally applies even when the family asks to move the lesson to a later week, unless the academy approves an exception based on the circumstances.',
        ],
      },
      {
        id: 'weekly-attendance',
        title:
          '6. Minimum weekly attendance and continuity',
        paragraphs: [
          'A student with an active recurring schedule is expected to attend at least one lesson during each calendar week unless the academy has approved a pause, holiday arrangement, or exceptional absence.',
          'Repeated interruption may affect tutor availability, the reserved recurring time, learning continuity, package administration, or the ability to maintain the same schedule.',
        ],
      },
      {
        id: 'no-show',
        title:
          '7. No-shows and late arrival',
        bullets: [
          'A lesson is considered missed when the student does not join and the academy has not confirmed a cancellation or reschedule.',
          'The tutor is not required to extend the lesson beyond the scheduled ending time when the student joins late.',
          'The tutor may wait for a reasonable period while the team attempts contact. The lesson may still be counted from the scheduled start time.',
          'Repeated late arrival or absence may result in a schedule review or release of a reserved recurring time.',
        ],
      },
      {
        id: 'academy-cancellation',
        title:
          '8. Cancellation by the tutor or academy',
        paragraphs: [
          'When the tutor or academy cancels a lesson, the lesson will not be deducted as a completed student lesson.',
          'The academy will normally offer a replacement time, restore the lesson to the balance, coordinate an available substitute where appropriate, or apply another reasonable correction.',
          'The academy will make reasonable efforts to communicate the change. To the extent permitted by law, it is not responsible for indirect costs resulting from a scheduling change.',
        ],
      },
      {
        id: 'technical-problems',
        title: '9. Technical problems',
        subsections: [
          {
            title:
              'Problem on the student’s side',
            paragraphs: [
              'The family is responsible for a functioning device, stable internet connection, audio, browser or application, platform access, and joining information. A problem limited to the student’s device, connection, login, or local environment does not automatically create a free replacement lesson.',
            ],
          },
          {
            title:
              'Problem on the tutor or academy side',
            paragraphs: [
              'When a material technical failure controlled by the tutor or academy prevents the lesson from being delivered, the academy will review the circumstances and may reschedule, restore time or credit, or otherwise adjust the lesson.',
            ],
          },
          {
            title:
              'Reporting a technical problem',
            paragraphs: [
              'The family should notify the team as soon as the problem occurs and provide a brief description or screenshot when practical. Delayed reports may be harder to verify.',
            ],
          },
        ],
      },
      {
        id: 'emergencies',
        title:
          '10. Emergencies and exceptional circumstances',
        paragraphs: [
          'The academy may consider a documented emergency, serious illness, bereavement, widespread outage, severe weather event, displacement, or another exceptional circumstance on a case-by-case basis.',
          'An exception is not automatic and does not create a permanent waiver of this policy. The academy may request reasonable supporting information while avoiding unnecessary sensitive details.',
        ],
      },
      {
        id: 'planned-pauses',
        title:
          '11. Planned holidays and temporary pauses',
        paragraphs: [
          'Families should provide advance notice for known travel, examinations, school holidays, or temporary pauses.',
          'A pause may affect the recurring time and tutor assignment. Holding a tutor’s time during an extended pause is not guaranteed unless confirmed in writing.',
          'Package validity and payment obligations continue according to the applicable package terms unless the academy confirms otherwise.',
        ],
      },
      {
        id: 'schedule-changes',
        title:
          '12. Changes to a recurring schedule',
        paragraphs: [
          'Requests to change a recurring day or time are subject to tutor availability. The academy cannot guarantee that the original tutor will be available at the new time.',
          'The academy may review or release a recurring time when attendance is inconsistent, payment is overdue, communication is not maintained, or the schedule is repeatedly changed.',
        ],
      },
      {
        id: 'balances-refunds',
        title:
          '13. Lesson balances, packages, credits, and refunds',
        paragraphs: [
          'A cancellation or rescheduling request does not automatically create a cash refund. Lessons are administered according to this policy, the package terms, the payment record, and any specific written refund arrangement.',
          'Used, missed, expired, promotional, complimentary, or discounted lessons may be non-refundable to the extent permitted by applicable law and the written terms accepted by the customer.',
          'When the academy verifies an attendance or lesson-balance error, it may correct the record by restoring a lesson, applying credit, rescheduling, issuing an eligible refund, or making another reasonable adjustment.',
          'The family should contact the academy and allow a reasonable opportunity to review attendance, balances, and communications before initiating a payment dispute, except where urgent legal action is reasonably necessary.',
        ],
      },
      {
        id: 'trials',
        title:
          '14. Trial and complimentary lessons',
        paragraphs: [
          'Trial, complimentary, promotional, and discounted lessons may be subject to separate eligibility, expiry, rescheduling, and one-per-student or one-per-family conditions.',
          'A missed trial or complimentary lesson may be considered used and may not be replaceable when a tutor reserved the time and the academy did not confirm a timely cancellation.',
        ],
      },
      {
        id: 'review',
        title:
          '15. Review and decisions',
        paragraphs: [
          'The scheduling or administration team may review attendance records, messages, platform information, payment records, and the circumstances reported by the family and tutor.',
          'A one-time exception does not require the academy to make the same exception again. Decisions remain subject to applicable consumer law and any written agreement.',
          `Questions or review requests can be sent to ${legalConfig.contactEmail}.`,
        ],
      },
      {
        id: 'consumer-rights',
        title:
          '16. Mandatory consumer rights',
        paragraphs: [
          'Nothing in this policy removes a cancellation, refund, disclosure, or other consumer right that cannot legally be waived.',
          'Where the law gives a customer a right that is more favourable than this policy, the mandatory legal right applies.',
        ],
      },
      {
        id: 'changes',
        title:
          '17. Changes to this policy',
        paragraphs: [
          'The academy may update this policy to reflect scheduling practices, service changes, package structures, or legal requirements. The revised version will show an updated date.',
          'Changes do not retroactively remove rights that cannot legally be waived.',
        ],
      },
    ],

    closing: {
      title:
        'Need help with a schedule change?',
      description:
        'Send the student name, tutor, lesson date and time, and the requested change. A request is complete only after the academy confirms it.',
      contactLabel:
        legalConfig.contactEmail,
    },
  },

  ar: {
    seo: {
      title:
        'سياسة الإلغاء وإعادة الجدولة | أكاديمية مصطفى',
      description:
        'اقرأ قواعد أكاديمية مصطفى المتعلقة بإلغاء الحصص وإعادة جدولتها والغياب والتأخير وإلغاء المدرس والمشكلات التقنية والظروف الاستثنائية.',
    },

    breadcrumbs: {
      home: 'الرئيسية',
      current:
        'سياسة الإلغاء وإعادة الجدولة',
      ariaLabel: 'مسار التنقل',
    },

    hero: {
      eyebrow: 'سياسة المواعيد',
      title:
        'سياسة الإلغاء وإعادة الجدولة',
      description:
        'توضح هذه السياسة تأثير الإلغاء والغياب وطلب تغيير الموعد والتأخير وإلغاء المدرس والمشكلات التقنية على رصيد الحصص والجدول المتكرر.',
      lastUpdatedLabel: 'آخر تحديث',
      lastUpdated:
        legalConfig.effectiveDateArabic,
      appliesToLabel: 'تنطبق على',
      appliesTo:
        'الحصص التجريبية وحصص الباقات والجداول المتكررة، ما لم يوجد استثناء مكتوب أكثر تحديدًا',
      contactLabel:
        legalConfig.contactEmail,
    },

    tableOfContentsLabel:
      'أقسام سياسة الإلغاء',

    sections: [
      {
        id: 'purpose',
        title: '1. هدف السياسة',
        paragraphs: [
          'يحجز المدرس وقت الحصة ويستعد مسبقًا. تهدف هذه السياسة إلى دعم استمرارية الطالب واحترام وقت المدرس ومنح الأسرة عملية واضحة ومتسقة لتغيير المواعيد.',
          'قد يتضمن تأكيد الحجز أو الفاتورة أو وصف الباقة أو العرض أو الاتفاق المكتوب شروطًا إضافية. ويطبق الشرط المكتوب الأكثر تحديدًا عندما يعالج المسألة نفسها، مع مراعاة حقوق المستهلك الإلزامية.',
        ],
      },
      {
        id: 'calendar-week',
        title:
          '2. المقصود بالأسبوع الميلادي',
        paragraphs: [
          'لأغراض هذه السياسة، يبدأ الأسبوع عادة يوم الاثنين وينتهي يوم الأحد وفق المنطقة الزمنية المسجلة للطالب، ما لم تؤكد الأكاديمية ترتيبًا مختلفًا كتابة.',
        ],
      },
      {
        id: 'approved-request',
        title:
          '3. طريقة طلب الإلغاء أو تغيير الموعد',
        paragraphs: [
          'ينبغي لولي الأمر إرسال الطلب عبر قناة تواصل معتمدة لدى الأكاديمية قبل بدء الحصة. وقد لا يكون إبلاغ المدرس وحده كافيًا ما لم تؤكد الأكاديمية أو جهة المواعيد المخولة الطلب.',
          'يجب أن يوضح الطلب اسم الطالب والمدرس وتاريخ ووقت الحصة والإجراء المطلوب. ولا يصبح تغيير الموعد نهائيًا قبل تأكيد الأكاديمية.',
          'قد تحدد الباقة أو الحجز أو العرض المكتوب مدة إشعار أطول. ويطبق ذلك الشرط عندما يكون قد تم توضيحه بوضوح قبل تأكيد الحصة أو الباقة.',
        ],
      },
      {
        id: 'one-reschedule',
        title:
          '4. إلغاء مؤهل واحد وإعادة جدولة واحدة أسبوعيًا',
        paragraphs: [
          'ما لم يوجد ترتيب مكتوب مختلف، يمكن إلغاء حصة واحدة للطالب نفسه وطلب إعادة جدولتها خلال الأسبوع الميلادي.',
          'ينبغي عادة تنفيذ الحصة البديلة خلال الأسبوع نفسه. وتبقى خاضعة لتوفر المدرس والفصل والوقت، ولا يمكن ضمان الموعد البديل المطلوب.',
          'لا يؤدي طلب إعادة الجدولة إلى تمديد صلاحية الباقة ما لم تؤكد الأكاديمية التمديد كتابة.',
        ],
      },
      {
        id: 'second-cancellation',
        title:
          '5. الإلغاء الثاني أو الغياب في الأسبوع نفسه',
        paragraphs: [
          'يتم عادة احتساب الإلغاء الثاني أو الحصة الفائتة أو غياب الطالب خلال الأسبوع الميلادي نفسه كحصة مستخدمة وخصمها من الرصيد.',
          'تطبق القاعدة عادة حتى عندما تطلب الأسرة نقل الحصة إلى أسبوع لاحق، ما لم توافق الأكاديمية على استثناء بناءً على الظروف.',
        ],
      },
      {
        id: 'weekly-attendance',
        title:
          '6. الحد الأدنى للحضور والاستمرارية',
        paragraphs: [
          'يُتوقع من الطالب الذي لديه جدول متكرر نشط حضور حصة واحدة على الأقل في كل أسبوع ميلادي، ما لم توافق الأكاديمية على توقف أو إجازة أو غياب استثنائي.',
          'قد يؤثر الانقطاع المتكرر في توفر المدرس والوقت المحجوز والاستمرارية وإدارة الباقة والقدرة على الاحتفاظ بالجدول نفسه.',
        ],
      },
      {
        id: 'no-show',
        title:
          '7. الغياب دون إشعار والتأخير',
        bullets: [
          'تعتبر الحصة فائتة عندما لا يدخل الطالب ولم تؤكد الأكاديمية إلغاءها أو إعادة جدولتها.',
          'لا يلتزم المدرس بتمديد الحصة بعد نهايتها المقررة عندما يدخل الطالب متأخرًا.',
          'قد ينتظر المدرس مدة معقولة ويحاول الفريق التواصل، لكن الحصة قد تبقى محسوبة من وقت بدايتها المقرر.',
          'قد يؤدي التأخير أو الغياب المتكرر إلى مراجعة الجدول أو إلغاء حجز الوقت المتكرر.',
        ],
      },
      {
        id: 'academy-cancellation',
        title:
          '8. إلغاء المدرس أو الأكاديمية',
        paragraphs: [
          'عندما يلغي المدرس أو الأكاديمية الحصة، لا تخصم كحصة مكتملة للطالب.',
          'تقدم الأكاديمية عادة وقتًا بديلًا أو تعيد الحصة إلى الرصيد أو تنسق مدرسًا بديلًا متوفرًا عند الاقتضاء أو تطبق تصحيحًا معقولًا.',
          'تبذل الأكاديمية جهودًا معقولة لإبلاغ التغيير. وبالقدر الذي يسمح به القانون، لا تتحمل التكاليف غير المباشرة الناتجة عن تغيير الموعد.',
        ],
      },
      {
        id: 'technical-problems',
        title: '9. المشكلات التقنية',
        subsections: [
          {
            title:
              'المشكلة من جهة الطالب',
            paragraphs: [
              'تتحمل الأسرة مسؤولية الجهاز والإنترنت والصوت والمتصفح أو التطبيق والدخول إلى المنصة ومعلومات الالتحاق. ولا تؤدي مشكلة محدودة بجهاز الطالب أو الاتصال أو الدخول إلى حصة بديلة مجانية تلقائيًا.',
            ],
          },
          {
            title:
              'المشكلة من جهة المدرس أو الأكاديمية',
            paragraphs: [
              'إذا منع عطل جوهري تتحكم فيه جهة المدرس أو الأكاديمية تقديم الحصة، تراجع الأكاديمية الظروف وقد تعيد الجدولة أو الوقت أو الرصيد أو تطبق تعديلًا آخر.',
            ],
          },
          {
            title:
              'الإبلاغ عن المشكلة التقنية',
            paragraphs: [
              'ينبغي إبلاغ الفريق فور حدوث المشكلة مع وصف مختصر أو صورة شاشة عندما يكون ذلك عمليًا. وقد يصعب التحقق من البلاغ المتأخر.',
            ],
          },
        ],
      },
      {
        id: 'emergencies',
        title:
          '10. الطوارئ والظروف الاستثنائية',
        paragraphs: [
          'قد تنظر الأكاديمية بصورة فردية في طوارئ موثقة أو مرض خطير أو وفاة أو انقطاع واسع أو طقس شديد أو نزوح أو ظرف استثنائي آخر.',
          'الاستثناء غير تلقائي ولا يمثل تنازلًا دائمًا عن السياسة. وقد تطلب الأكاديمية معلومات داعمة معقولة دون طلب تفاصيل حساسة لا داعي لها.',
        ],
      },
      {
        id: 'planned-pauses',
        title:
          '11. الإجازات والتوقف المؤقت المخطط',
        paragraphs: [
          'ينبغي تقديم إشعار مسبق للسفر أو الاختبارات أو العطل المدرسية أو التوقف المعروف.',
          'قد يؤثر التوقف في الوقت المتكرر والمدرس. ولا يمكن ضمان الاحتفاظ بوقت المدرس خلال توقف طويل ما لم يؤكد ذلك كتابة.',
          'تستمر صلاحية الباقة والتزامات الدفع وفق شروطها ما لم تؤكد الأكاديمية خلاف ذلك.',
        ],
      },
      {
        id: 'schedule-changes',
        title:
          '12. تغيير الجدول المتكرر',
        paragraphs: [
          'يخضع تغيير اليوم أو الوقت المتكرر لتوفر المدرس. ولا تضمن الأكاديمية بقاء المدرس الأصلي في الوقت الجديد.',
          'قد تراجع الأكاديمية الوقت المتكرر أو تفرج عنه عند عدم انتظام الحضور أو تأخر الدفع أو انقطاع التواصل أو تكرار تغيير الجدول.',
        ],
      },
      {
        id: 'balances-refunds',
        title:
          '13. رصيد الحصص والباقات والائتمان والاسترداد',
        paragraphs: [
          'لا ينشئ طلب الإلغاء أو إعادة الجدولة استردادًا نقديًا تلقائيًا. تتم إدارة الحصص وفق هذه السياسة وشروط الباقة وسجل الدفع وأي ترتيب استرداد مكتوب أكثر تحديدًا.',
          'قد تكون الحصص المستخدمة أو الفائتة أو المنتهية أو المجانية أو الترويجية أو المخفضة غير قابلة للاسترداد بالقدر الذي يسمح به القانون والشروط المكتوبة التي وافق عليها العميل.',
          'عند إثبات خطأ في الحضور أو الرصيد، يمكن للأكاديمية تصحيح السجل بإعادة الحصة أو إضافة رصيد أو إعادة الجدولة أو إصدار استرداد مؤهل أو تطبيق تعديل معقول آخر.',
          'ينبغي التواصل مع الأكاديمية ومنحها فرصة معقولة لمراجعة الحضور والرصيد والمراسلات قبل بدء اعتراض على الدفع، إلا عندما يكون الإجراء القانوني العاجل ضروريًا بصورة معقولة.',
        ],
      },
      {
        id: 'trials',
        title:
          '14. الحصص التجريبية والمجانية',
        paragraphs: [
          'قد تخضع الحصص التجريبية والمجانية والترويجية والمخفضة لشروط منفصلة تتعلق بالأهلية والانتهاء وإعادة الجدولة ومرة واحدة للطالب أو الأسرة.',
          'قد تعتبر الحصة التجريبية أو المجانية الفائتة مستخدمة وغير قابلة للاستبدال عندما يكون المدرس قد حجز الوقت ولم تؤكد الأكاديمية إلغاءً في الوقت المناسب.',
        ],
      },
      {
        id: 'review',
        title:
          '15. المراجعة والقرارات',
        paragraphs: [
          'يجوز لفريق المواعيد أو الإدارة مراجعة سجلات الحضور والرسائل ومعلومات المنصة وسجلات الدفع والظروف التي أبلغت بها الأسرة والمدرس.',
          'لا يلزم الاستثناء لمرة واحدة الأكاديمية بتكراره. وتبقى القرارات خاضعة لقانون المستهلك المطبق وأي اتفاق مكتوب.',
          `يمكن إرسال الأسئلة وطلبات المراجعة إلى ${legalConfig.contactEmail}.`,
        ],
      },
      {
        id: 'consumer-rights',
        title:
          '16. حقوق المستهلك الإلزامية',
        paragraphs: [
          'لا تلغي هذه السياسة أي حق في الإلغاء أو الاسترداد أو الإفصاح أو أي حق آخر لا يجوز التنازل عنه قانونًا.',
          'عندما يمنح القانون العميل حقًا أكثر فائدة من هذه السياسة، يطبق الحق القانوني الإلزامي.',
        ],
      },
      {
        id: 'changes',
        title:
          '17. تعديل السياسة',
        paragraphs: [
          'قد تحدث الأكاديمية هذه السياسة لتعكس ممارسات المواعيد أو تغير الخدمة أو هيكل الباقات أو المتطلبات القانونية. وستظهر النسخة المعدلة تاريخًا جديدًا.',
          'لا تسلب التعديلات بأثر رجعي حقوقًا لا يجوز التنازل عنها قانونًا.',
        ],
      },
    ],

    closing: {
      title:
        'هل تحتاج إلى تغيير موعد؟',
      description:
        'أرسل اسم الطالب والمدرس وتاريخ ووقت الحصة والتغيير المطلوب. ولا يكتمل الطلب إلا بعد تأكيد الأكاديمية.',
      contactLabel:
        legalConfig.contactEmail,
    },
  },
} satisfies Record<
  'en' | 'ar',
  LegalPageContent
>;
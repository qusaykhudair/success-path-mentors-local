import { germanyLegalConfig } from '@/config/germany-legal';
import type { LegalPageContent } from '@/types/legal-page';

export const germanyPrivacyPolicyContent: Record<'de' | 'en' | 'ar', LegalPageContent> = {
  de: {
    seo: {
      title: 'Datenschutzerklärung | Success Path Mentors Germany',
      description:
        'Datenschutzerklärung für Success Path Mentors in Deutschland und Europa. Informationen zur Verarbeitung personenbezogener Daten, Rechtsgrundlagen gemäß DSGVO und Ihren Rechten.',
    },
    breadcrumbs: {
      home: 'Startseite',
      current: 'Datenschutzerklärung',
      ariaLabel: 'Brotkrumen-Navigation',
    },
    hero: {
      eyebrow: 'Datenschutz & Transparenz',
      title: 'Datenschutzerklärung',
      description:
        'Der Schutz Ihrer persönlichen Daten und die Privatsphäre von Lernenden und Familien stehen bei Success Path Mentors an erster Stelle. Diese Erklärung erläutert transparent die Datenverarbeitung gemäß der EU-Datenschutz-Grundverordnung (DSGVO).',
      lastUpdatedLabel: 'Stand',
      lastUpdated: germanyLegalConfig.effectiveDateGerman,
      appliesToLabel: 'Geltungsbereich',
      appliesTo: 'Deutschland & Europa (/de/*), Registrierung, Probestunden und Unterrichtskoordination',
      contactLabel: germanyLegalConfig.contactEmail,
    },
    tableOfContentsLabel: 'Inhaltsübersicht',
    sections: [
      {
        id: 'controller',
        title: '1. Verantwortliche Stelle und Kontakt',
        paragraphs: [
          `Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze für die Angebote unter /de/de, /de/en und /de/ar ist:`,
          `${germanyLegalConfig.legalEntityName}`,
          `Geschäftsbezeichnung: ${germanyLegalConfig.brandName}`,
          `Anschrift: ${germanyLegalConfig.registeredAddress}`,
          `Handelsregister / Registernummer: ${germanyLegalConfig.registrationNumber}`,
          `Umsatzsteuer-Identifikationsnummer: ${germanyLegalConfig.vatId}`,
          `E-Mail: ${germanyLegalConfig.contactEmail} | WhatsApp: ${germanyLegalConfig.whatsappDisplay}`,
          `Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Betroffenenrechte können Sie sich jederzeit direkt per E-Mail an ${germanyLegalConfig.contactEmail} wenden.`,
        ],
      },
      {
        id: 'scope',
        title: '2. Geltungsbereich',
        paragraphs: [
          'Diese Datenschutzerklärung gilt speziell für den deutschen und europäischen Bereich von Success Path Mentors, einschließlich der Seiten unter /de/de, /de/en, /de/ar, der Buchung von kostenlosen Probestunden, der Registrierung und Anmeldung, des Zugangs zum Portal/LMS sowie der damit verbundenen Unterrichtskoordination.',
          'Sie gilt ausdrücklich nicht für die separaten Angebote von Success Path Mentors für den nordamerikanischen Markt, für welche eigenständige rechtliche Bestimmungen gelten.',
        ],
      },
      {
        id: 'collected-data',
        title: '3. Erfasste Datenkategorien',
        paragraphs: [
          'Wir verarbeiten personenbezogene Daten, die uns von Eltern, Erziehungsberechtigten, Schülern oder erwachsenen Lernenden bereitgestellt werden. Hierzu gehören:',
        ],
        bullets: [
          'Stammdaten von Eltern/Erziehungsberechtigten: Vollständiger Name, E-Mail-Adresse, Telefon- und WhatsApp-Nummer, Verhältnis zum Schüler.',
          'Angaben zum Lernenden: Name, Klassenstufe, Lernstand, gewünschtes Schulfach, Lehrplan, bevorzugte Unterrichtssprache und Lernziele.',
          'Organisatorische Präferenzen: Wohnsitzland, Zeitzone, bevorzugte Unterrichtstage und Uhrzeiten.',
          'Konto- und Authentifizierungsdaten: Verifizierungsstatus, Kontokennungen und Identitätsbestätigungen über E-Mail-OTP, WhatsApp-OTP oder verknüpfte Drittanbieter (Google, Facebook), sofern aktiviert.',
          'Technische Nutzungsdaten: IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp, Betriebssystem, Gerätekennungen und Sicherheitsereignisse zur Abwehr von Missbrauch.',
        ],
      },
      {
        id: 'legal-bases',
        title: '4. Zwecke der Datenverarbeitung und Rechtsgrundlagen',
        paragraphs: [
          'Wir verarbeiten Ihre personenbezogenen Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen der DSGVO:',
        ],
        bullets: [
          'Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung und vorvertragliche Maßnahmen): Zur Bearbeitung von Probestunden-Anfragen, zur individuellen Auswahl und Vermittlung geeigneter Lehrkräfte, zur Erstellung und Verwaltung Ihres Kundenkontos sowie zur Durchführung des Nachhilfeunterrichts.',
          'Art. 6 Abs. 1 lit. c DSGVO (Rechtliche Verpflichtung): Zur Erfüllung gesetzlicher Aufbewahrungsfristen (z. B. nach Handels- und Steuerrecht).',
          'Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen): Zur Gewährleistung der IT-Sicherheit, Betrugsprävention, Missbrauchserkennung und zur Sicherstellung einer effizienten Koordination unseres Nachhilfeangebots.',
          'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung): Sofern Sie uns eine ausdrückliche Einwilligung erteilt haben (z. B. für optionale Informationszusendungen oder einwilligungspflichtige Technologien). Eine erteilte Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden.',
        ],
      },
      {
        id: 'children-minors',
        title: '5. Daten von Kindern und Minderjährigen',
        paragraphs: [
          'Unsere Nachhilfeleistungen richten sich häufig an Kinder und Jugendliche. Die Registrierung und Buchung für Minderjährige erfolgt ausschließlich durch deren Eltern oder gesetzliche Vertreter.',
          'Wir verarbeiten Angaben zu minderjährigen Schülern streng zweckgebunden im Rahmen der erzieherischen und unterrichtsbezogenen Koordination. Daten von Kindern werden niemals für verhaltensbezogene Werbung (Profiling) genutzt oder an unbefugte Dritte weitergegeben.',
        ],
      },
      {
        id: 'auth-verification',
        title: '6. Anmeldung und Identitätsverifizierung',
        paragraphs: [
          'Um die Sicherheit der Konten zu gewährleisten, setzen wir moderne Authentifizierungsverfahren ein:',
          'Bei der Verifizierung via E-Mail- oder WhatsApp-Einmalcode (OTP) wird ein zeitlich befristeter Sicherheitscode versendet, um die Inhaberschaft der Kontaktdaten zu bestätigen.',
          'Sofern Sie die Registrierung oder Anmeldung über Google oder Facebook wählen, erhalten wir von dem jeweiligen Anbieter ausschließlich die zur Authentifizierung und Kontoverknüpfung zwingend erforderlichen Identitätsdaten. Die Nutzung der Drittanbieter unterliegt deren eigenen Datenschutzbestimmungen.',
        ],
      },
      {
        id: 'lms-portal',
        title: '7. Unterrichtsplattform und Lernmanagementsystem (LMS)',
        paragraphs: [
          'Die Koordination von Unterrichtseinheiten, die Bereitstellung von Lehrmaterialien und die Dokumentation von Lernfortschritten erfolgen über das SPM Portal und angebundene Administrationssysteme.',
          'Der Zugriff auf diese Daten ist streng auf autorisierte Koordinatoren und die jeweils zugewiesenen Lehrkräfte beschränkt, die der Verschwiegenheit verpflichtet sind.',
        ],
      },
      {
        id: 'recipients',
        title: '8. Empfänger und Auftragsverarbeiter',
        paragraphs: [
          'Zur Erbringung unserer Online-Dienste setzen wir sorgfältig ausgewählte Dienstleister ein (z. B. Hosting-Provider wie Vercel, E-Mail-Zustelldienste, Kommunikationsdienste wie WhatsApp und Authentifizierungsdienste).',
          'Alle Auftragsverarbeiter sind vertraglich gemäß Art. 28 DSGVO verpflichtet, personenbezogene Daten nur nach unseren Weisungen und unter Einhaltung angemessener technischer und organisatorischer Maßnahmen zu verarbeiten.',
        ],
      },
      {
        id: 'international-transfers',
        title: '9. Internationale Datenübermittlungen',
        paragraphs: [
          'Einige unserer technischen Dienstleister haben ihren Sitz oder verarbeiten Daten außerhalb der Europäischen Union bzw. des Europäischen Wirtschaftsraums.',
          'In diesen Fällen stellen wir sicher, dass ein angemessenes Datenschutzniveau gewährleistet ist – sei es durch einen Angemessenheitsbeschluss der Europäischen Kommission (wie dem EU-US Data Privacy Framework) oder durch den Abschluss von Standardvertragsklauseln (SCC) der EU-Kommission.',
        ],
      },
      {
        id: 'cookies',
        title: '10. Cookies und Endgeräte-Technologien (TDDDG / DSGVO)',
        paragraphs: [
          'Auf unserer Website verwenden wir technisch notwendige Technologien und Cookies, die erforderlich sind, um grundlegende Funktionen (wie Seitennavigation, Spracheinstellungen, Authentifizierung und Sicherheit) bereitzustellen. Diese dürfen gemäß § 25 Abs. 2 TDDDG ohne vorherige Einwilligung eingesetzt werden.',
          'Nicht-notwendige Technologien (z. B. für erweiterte Webanalyse oder Marketing) werden nur nach Ihrer vorherigen, ausdrücklichen Einwilligung aktiviert. Sie können eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.',
        ],
      },
      {
        id: 'retention',
        title: '11. Speicherdauer',
        paragraphs: [
          'Wir speichern personenbezogene Daten nur so lange, wie es für die Erfüllung der jeweiligen Zwecke erforderlich ist:',
          'Vertrags- und Abrechnungsdaten werden entsprechend den gesetzlichen handels- und steuerrechtlichen Aufbewahrungsfristen (in der Regel bis zu 6 bzw. 10 Jahre) aufbewahrt.',
          'Verifizierungs- und OTP-Transaktionsdaten werden nach kurzer Zeit automatisch gelöscht.',
          'Entfällt der Speicherungszweck und bestehen keine gesetzlichen Aufbewahrungspflichten mehr, werden die Daten gelöscht oder anonymisiert.',
        ],
      },
      {
        id: 'rights',
        title: '12. Ihre Rechte als betroffene Person',
        paragraphs: [
          'Nach den Bestimmungen der DSGVO stehen Ihnen umfassende Rechte zu:',
        ],
        bullets: [
          'Recht auf Auskunft (Art. 15 DSGVO) über Ihre von uns verarbeiteten personenbezogenen Daten.',
          'Recht auf Berichtigung (Art. 16 DSGVO) unrichtiger oder unvollständiger Daten.',
          'Recht auf Löschung (Art. 17 DSGVO), sofern keine gesetzlichen Aufbewahrungsfristen entgegenstehen.',
          'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO).',
          'Recht auf Datenübertragbarkeit (Art. 20 DSGVO) in einem strukturierten, gängigen Format.',
          'Widerspruchsrecht (Art. 21 DSGVO) gegen die Verarbeitung, die auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgt.',
          'Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO) jederzeit und formlos.',
          'Beschwerderecht bei einer zuständigen Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO), wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen Datenschutzrecht verstößt.',
        ],
      },
      {
        id: 'automated-decision',
        title: '13. Keine automatisierte Entscheidungsfindung',
        paragraphs: [
          'Success Path Mentors führt keine rein automatisierte Entscheidungsfindung oder Profiling im Sinne von Art. 22 DSGVO durch, die Ihnen gegenüber rechtliche Wirkungen entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt. Die Zuweisung von Lehrkräften erfolgt stets unter menschlicher Begleitung und individueller Prüfung durch unser Koordinationsteam.',
        ],
      },
      {
        id: 'security',
        title: '14. Datensicherheit',
        paragraphs: [
          'Wir setzen moderne technische und organisatorische Sicherheitsmaßnahmen (TOM) ein, um Ihre Daten vor zufälliger oder vorsätzlicher Manipulation, Verlust, Zerstörung oder dem unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.',
        ],
      },
      {
        id: 'changes',
        title: '15. Aktualität und Änderungen dieser Datenschutzerklärung',
        paragraphs: [
          'Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen. Die jeweils aktuelle Version kann jederzeit auf dieser Seite abgerufen werden.',
        ],
      },
    ],
    closing: {
      title: 'Haben Sie Fragen zum Datenschutz?',
      description:
        'Unser Koordinationsteam steht Ihnen bei allen Anliegen rund um Ihre Daten und Ihre Privatsphäre gerne zur Verfügung.',
      contactLabel: germanyLegalConfig.contactEmail,
    },
  },

  en: {
    seo: {
      title: 'Privacy Policy | Success Path Mentors Germany',
      description:
        'Privacy Policy for Success Path Mentors in Germany and Europe. Learn how we process personal data, GDPR legal bases, and your rights under European data protection law.',
    },
    breadcrumbs: {
      home: 'Home',
      current: 'Privacy Policy',
      ariaLabel: 'Breadcrumb',
    },
    hero: {
      eyebrow: 'Privacy & Transparency',
      title: 'Privacy Policy',
      description:
        'At Success Path Mentors, safeguarding the personal data of learners and families is our top priority. This policy clearly outlines our data processing practices under the European General Data Protection Regulation (GDPR).',
      lastUpdatedLabel: 'Last updated',
      lastUpdated: germanyLegalConfig.effectiveDate,
      appliesToLabel: 'Applies to',
      appliesTo: 'Germany & Europe (/de/*), trial requests, accounts, and tutoring coordination',
      contactLabel: germanyLegalConfig.contactEmail,
    },
    tableOfContentsLabel: 'Table of Contents',
    sections: [
      {
        id: 'controller',
        title: '1. Data Controller and Contact Information',
        paragraphs: [
          `The data controller responsible for personal data processing on the Germany/Europe website (/de/de, /de/en, /de/ar) pursuant to the GDPR is:`,
          `${germanyLegalConfig.legalEntityName}`,
          `Trading as: ${germanyLegalConfig.brandName}`,
          `Registered Address: ${germanyLegalConfig.registeredAddress}`,
          `Commercial Registration Number: ${germanyLegalConfig.registrationNumber}`,
          `VAT Identification Number: ${germanyLegalConfig.vatId}`,
          `Email: ${germanyLegalConfig.contactEmail} | WhatsApp: ${germanyLegalConfig.whatsappDisplay}`,
          `For any privacy inquiries or to exercise your GDPR rights, please contact our European coordination team directly at ${germanyLegalConfig.contactEmail}.`,
        ],
      },
      {
        id: 'scope',
        title: '2. Scope',
        paragraphs: [
          'This Privacy Policy applies specifically to the Germany and Europe section of Success Path Mentors, including pages under /de/de, /de/en, and /de/ar, free trial requests, registration and authentication, SPM Portal/LMS access, and associated tutoring coordination.',
          'It does not govern the separate North American Success Path Mentors market pages, which operate under distinct legal terms.',
        ],
      },
      {
        id: 'collected-data',
        title: '3. Categories of Information We Collect',
        paragraphs: [
          'We collect and process personal data directly provided by parents, legal guardians, students, and adult learners, including:',
        ],
        bullets: [
          'Parent/Guardian Details: Full name, email address, telephone and WhatsApp number, relationship to the learner.',
          'Student Information: Name, educational level/grade, current academic status, requested subject, curriculum, preferred teaching language, and goals.',
          'Scheduling and Coordination Preferences: Country of residence, time zone, preferred lesson days, and preferred times.',
          'Account & Authentication Data: Verification status, account credentials, and authentication records received via Email OTP, WhatsApp OTP, or integrated providers (Google, Facebook) where enabled.',
          'Technical Information: IP address, browser type, device information, operating system, timestamp, server logs, and security events necessary for service integrity and protection.',
        ],
      },
      {
        id: 'legal-bases',
        title: '4. Purposes and Legal Bases for Processing',
        paragraphs: [
          'We process your personal data in strict adherence to the GDPR under the following legal bases:',
        ],
        bullets: [
          'Article 6(1)(b) GDPR (Contractual Necessity & Pre-contractual Steps): To respond to trial lesson inquiries, evaluate learner requirements, coordinate and match qualified tutors, manage user accounts, and provide agreed tutoring services.',
          'Article 6(1)(c) GDPR (Legal Obligations): To comply with statutory legal, commercial, tax, and accounting retention obligations.',
          'Article 6(1)(f) GDPR (Legitimate Interests): To safeguard IT security, prevent fraud, verify contact authenticity, and maintain smooth, high-quality tutoring coordination.',
          'Article 6(1)(a) GDPR (Consent): Where you have provided voluntary consent (e.g., for optional marketing or non-essential cookies). You may withdraw consent at any time with future effect.',
        ],
      },
      {
        id: 'children-minors',
        title: '5. Children and Minor Learner Information',
        paragraphs: [
          'Many of our tutoring services involve learners who are minors. Registration, lesson booking, and account creation for minors must be performed by a parent or legal guardian.',
          'We process minor learner information strictly for educational, lesson planning, and tutoring purposes. We do not use children’s information for behavioral advertising or profiling, nor do we disclose it to unauthorized third parties.',
        ],
      },
      {
        id: 'auth-verification',
        title: '6. Authentication and Identity Verification',
        paragraphs: [
          'To ensure account security, we support secure authentication workflows:',
          'When verifying via Email or WhatsApp OTP (One-Time Password), a short-lived verification code is transmitted to confirm ownership of the provided contact channel.',
          'Where Google or Facebook social login is selected, the external identity provider processes data under its own privacy policy. Success Path Mentors receives only the data necessary to authenticate, create, or link your account. Third-party logins are enabled conditionally based on configuration.',
        ],
      },
      {
        id: 'lms-portal',
        title: '7. Tutoring Platform and LMS',
        paragraphs: [
          'Tutoring coordination, lesson schedules, educational records, and study materials are managed via the Success Path Mentors Portal and associated administrative systems.',
          'Access to learner records is strictly limited to authorized coordinators and the designated tutor assigned to the learner, all of whom are bound by confidentiality obligations.',
        ],
      },
      {
        id: 'recipients',
        title: '8. Service Providers and Data Recipients',
        paragraphs: [
          'We utilize trusted service providers for web hosting, cloud infrastructure, authentication, customer communication, and security (such as Vercel, Google, Meta/Facebook, and WhatsApp where enabled).',
          'All processors are bound by Data Processing Agreements pursuant to Article 28 GDPR, ensuring data is processed only under our explicit instructions and with adequate security safeguards.',
        ],
      },
      {
        id: 'international-transfers',
        title: '9. International Data Transfers',
        paragraphs: [
          'Certain technical service providers may process personal data in countries outside Germany and the European Economic Area (EEA).',
          'Where international transfers take place, we ensure appropriate safeguards are established, such as European Commission Adequacy Decisions (including the EU-U.S. Data Privacy Framework) or Standard Contractual Clauses (SCCs).',
        ],
      },
      {
        id: 'cookies',
        title: '10. Cookies and Terminal Device Technologies (TDDDG / GDPR)',
        paragraphs: [
          'We use strictly necessary technologies and session cookies essential for core website operations, language selection, navigation, authentication, and security. Under § 25(2) TDDDG, these do not require prior consent.',
          'Non-essential tracking, analytics, or marketing technologies are not activated without your prior express consent. Users may withdraw or modify optional consent settings at any time with future effect.',
        ],
      },
      {
        id: 'retention',
        title: '11. Data Retention',
        paragraphs: [
          'We retain personal data only for as long as necessary to achieve the intended purpose:',
          'Contractual, invoicing, and billing records are stored in compliance with statutory commercial and tax retention mandates (typically up to 6 or 10 years).',
          'Temporary verification transactions and OTP records are deleted automatically after short validity periods.',
          'When data is no longer required and statutory retention requirements have lapsed, records are securely deleted or irreversibly anonymized.',
        ],
      },
      {
        id: 'rights',
        title: '12. Your Rights Under the GDPR',
        paragraphs: [
          'Under the GDPR, individuals located in the EU/EEA enjoy specific enforceable rights:',
        ],
        bullets: [
          'Right of Access (Article 15 GDPR) regarding your personal data processed by us.',
          'Right to Rectification (Article 16 GDPR) of inaccurate or incomplete data.',
          'Right to Erasure / Right to be Forgotten (Article 17 GDPR), subject to statutory exceptions.',
          'Right to Restriction of Processing (Article 18 GDPR).',
          'Right to Data Portability (Article 20 GDPR) in a structured, machine-readable format.',
          'Right to Object (Article 21 GDPR) against processing grounded on legitimate interests under Art. 6(1)(f) GDPR.',
          'Right to Withdraw Consent (Article 7(3) GDPR) at any time without affecting prior lawful processing.',
          'Right to Lodge a Complaint (Article 77 GDPR) with a competent data protection supervisory authority.',
        ],
      },
      {
        id: 'automated-decision',
        title: '13. Automated Decision-Making and Profiling',
        paragraphs: [
          'Success Path Mentors does not utilize solely automated decision-making or profiling mechanisms under Article 22 GDPR that produce legal or similarly significant effects. Tutor selection and lesson coordination always involve human evaluation by our coordination team.',
        ],
      },
      {
        id: 'security',
        title: '14. Data Security',
        paragraphs: [
          'We maintain robust technical and organizational security measures (TOMs) to safeguard personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. Security measures are continuously evaluated and updated.',
        ],
      },
      {
        id: 'changes',
        title: '15. Updates to this Privacy Policy',
        paragraphs: [
          'We may update this Privacy Policy periodically to reflect technological advancements, service updates, or evolving legal frameworks. The current version and effective date will always remain accessible on this page.',
        ],
      },
    ],
    closing: {
      title: 'Questions about our privacy practices?',
      description:
        'Our European coordination team is here to assist you with any questions regarding data protection or your rights.',
      contactLabel: germanyLegalConfig.contactEmail,
    },
  },

  ar: {
    seo: {
      title: 'سياسة الخصوصية | Success Path Mentors Germany',
      description:
        'سياسة الخصوصية لـ Success Path Mentors في ألمانيا وأوروبا. تعرف على كيفية معالجة البيانات الشخصية، والأسس القانونية للائحة العامة لحماية البيانات (GDPR)، وحقوقك القانونية.',
    },
    breadcrumbs: {
      home: 'الرئيسية',
      current: 'سياسة الخصوصية',
      ariaLabel: 'مسار التصفح',
    },
    hero: {
      eyebrow: 'الخصوصية والشفافية',
      title: 'سياسة الخصوصية',
      description:
        'تعد حماية بياناتكم وخصوصية الطلاب وأولياء الأمور أولويتنا القصوى في Success Path Mentors. توضح هذه السياسة بشفافية تامة كيفية معالجة البيانات وفقاً للائحة العامة لحماية البيانات الأوروبية (GDPR).',
      lastUpdatedLabel: 'آخر تحديث',
      lastUpdated: germanyLegalConfig.effectiveDateArabic,
      appliesToLabel: 'نطاق التطبيق',
      appliesTo: 'خدمات ألمانيا وأوروبا (/de/*)، طلبات الحصص التجريبية، والتنسيق التعليمي',
      contactLabel: germanyLegalConfig.contactEmail,
    },
    tableOfContentsLabel: 'أقسام سياسة الخصوصية',
    sections: [
      {
        id: 'controller',
        title: '1. الجهة المسؤولة عن معالجة البيانات ومعلومات الاتصال',
        paragraphs: [
          `الجهة المسؤولة عن معالجة البيانات الشخصية لخدمات ألمانيا وأوروبا (/de/de, /de/en, /de/ar) بموجب اللائحة الأوروبية لحماية البيانات (GDPR) هي:`,
          `${germanyLegalConfig.legalEntityName}`,
          `الاسم التجاري: ${germanyLegalConfig.brandName}`,
          `العنوان المسجل: ${germanyLegalConfig.registeredAddress}`,
          `رقم السجل التجاري: ${germanyLegalConfig.registrationNumber}`,
          `الرقم الضريبي (VAT): ${germanyLegalConfig.vatId}`,
          `البريد الإلكتروني: ${germanyLegalConfig.contactEmail} | واتساب: ${germanyLegalConfig.whatsappDisplay}`,
          `لأية استفسارات تتعلق بالخصوصية أو لممارسة حقوقكم بموجب الـ GDPR، يرجى التواصل مباشرة مع فريق التنسيق الأوروبي عبر: ${germanyLegalConfig.contactEmail}.`,
        ],
      },
      {
        id: 'scope',
        title: '2. نطاق التطبيق',
        paragraphs: [
          'تنطبق سياسة الخصوصية هذه تحديداً على قسم ألمانيا وأوروبا في Success Path Mentors، بما في ذلك الصفحات المتاحة عبر /de/de و /de/en و /de/ar، وطلبات الحصص التجريبية المجانية، والتسجيل والدخول، والوصول إلى البوابة التعليمية (LMS)، وتنسيق الدروس المرتبط بها.',
          'ولا تسري هذه السياسة على صفحات منصة أمريكا الشمالية المستقلة، والتي تخضع لشروط قانونية وسياسات خصوصية منفصلة.',
        ],
      },
      {
        id: 'collected-data',
        title: '3. فئات البيانات التي نجمعها',
        paragraphs: [
          'نقوم بمعالجة البيانات الشخصية المقدمة إلينا مباشرة من أولياء الأمور أو الطلاب أو المتعلمين البالغين، وتشمل:',
        ],
        bullets: [
          'بيانات أولياء الأمور: الاسم الكامل، البريد الإلكتروني، رقم الهاتف والواتساب، وصلة القرابة بالمتعلم.',
          'بيانات الطالب المتعلم: الاسم، المرحلة الدراسية، المستوى الأكاديمي، المادة المطلوبة، المنهج الدراسي، اللغة المفضلة للتدريس، والأهداف التعليمية.',
          'التفضيلات التنظيمية: بلد الإقامة، المنطقة الزمنية، الأيام والأوقات المفضلة لتقديم الحصص.',
          'بيانات الحساب والتحقق: حالة التحقق من الهوية وسجلات تسجيل الدخول عبر رمز التحقق لمرة واحدة (OTP) بالبريد أو الواتساب، أو عبر الحسابات المرتبطة (Google أو Facebook) عند تفعيلها.',
          'البيانات التقنية: عنوان الـ IP، ونوع المتصفح والجهاز، وتاريخ ووقت الطلب، وسجلات الخادم لحماية أمن المنصة ومكافحة الاحتيال.',
        ],
      },
      {
        id: 'legal-bases',
        title: '4. أغراض المعالجة والأسس القانونية (GDPR)',
        paragraphs: [
          'تتم معالجة بياناتكم الشخصية فقط وفقاً للأسس القانونية المحددة في الـ GDPR:',
        ],
        bullets: [
          'المادة 6(1)(b) من الـ GDPR (الضرورة التعاقدية والإجراءات السابقة للتعاقد): للرد على طلبات الحصص التجريبية، واختيار ومواءمة المعلم الأنسب، وإدارة الحسابات، وتقديم الخدمات التعليمية المتفق عليها.',
          'المادة 6(1)(c) من الـ GDPR (الالتزام القانوني): للامتثال للمتطلبات القانونية والتنظيمية وحفظ السجلات المحاسبية والضريبية.',
          'المادة 6(1)(f) من الـ GDPR (المصالح المشروعة): لحماية أمان الأنظمة، ومنع الاحتيال، والتحقق من صحة التواصل، وضمان جودة واستمرارية التنسيق التعليمي.',
          'المادة 6(1)(a) من الـ GDPR (الموافقة الصريحة): عند تقديم موافقة طوعية (مثل استلام رسائل تسويقية اختيارية أو ملفات تعريف غير ضرورية)، مع إمكانية سحب الموافقة في أي وقت.',
        ],
      },
      {
        id: 'children-minors',
        title: '5. بيانات الأطفال والطلاب القُصّر',
        paragraphs: [
          'تستهدف خدماتنا التعليمية في كثير من الأحيان الطلاب القُصّر. ولا يتم التسجيل وحجز الدروس لهؤلاء الطلاب إلا من قبل الوالدين أو الأوصياء القانونيين.',
          'تُستخدم بيانات الطلاب القُصّر حصرياً في إطار التنسيق التعليمي والتربوي. ولا تُستخدم بيانات الأطفال إطلاقاً لأغراض الإعلانات السلوكية أو التنميط التجاري، ولا تتم مشاركتها مع أطراف غير مصرح لها.',
        ],
      },
      {
        id: 'auth-verification',
        title: '6. التحقق من الهوية وتسجيل الدخول',
        paragraphs: [
          'لضمان أمان الحسابات وسلامة التواصل، نوفر آليات تحقق آمنة:',
          'عند التحقق عبر رمز OTP من خلال البريد الإلكتروني أو الواتساب، يُرسل رمز مؤقت للتأكد من ملكية وسيلة التواصل المسجلة.',
          'في حال اختيار تسجيل الدخول عبر Google أو Facebook، يخضع استخدام تلك الخدمات لسياسات الخصوصية الخاصة بمزود الخدمة، ولا نتلقى سوى البيانات الضرورية للتحقق من هويتكم وربط الحساب.',
        ],
      },
      {
        id: 'lms-portal',
        title: '7. المنصة التعليمية ونظام إدارة التعلم (LMS)',
        paragraphs: [
          'تتم إدارة جداول الحصص والملفات التعليمية والمتابعة عبر بوابة Success Path Mentors والأنظمة الإدارية المرتبطة بها.',
          'يقتصر حق الوصول إلى هذه البيانات على فريق التنسيق المصرح له والمعلمين المعينين للطالب، والملتزمين جميعاً بسرية البيانات.',
        ],
      },
      {
        id: 'recipients',
        title: '8. مستلمو البيانات والتعاقد مع معالجي البيانات',
        paragraphs: [
          'نستعين بمزودي خدمات موثوقين للبنية التحتية والاستضافة (مثل Vercel)، وخدمات التواصل (مثل WhatsApp)، والبريد الإلكتروني، والأمن السيبراني.',
          'يلتزم جميع معالجي البيانات باتفاقيات معالجة بيانات (DPA) مطابقة للمادة 28 من الـ GDPR لضمان حماية بياناتكم والتعامل معها وفقاً لتوجيهاتنا فقط.',
        ],
      },
      {
        id: 'international-transfers',
        title: '9. نقل البيانات دولياً خارج الاتحاد الأوروبي',
        paragraphs: [
          'قد تتم معالجة بعض البيانات من قبل مزودي خدمات تقنيين يقع مقرهم خارج المنطقة الاقتصادية الأوروبية (EEA).',
          'في هذه الحالات، نحرص على تطبيق الضمانات القانونية المناسبة لحماية البيانات، مثل قرارات الكفاية الصادرة عن المفوضية الأوروبية أو البنود التعاقدية القياسية (SCCs).',
        ],
      },
      {
        id: 'cookies',
        title: '10. ملفات تعريف الارتباط والتقنيات المشابهة (TDDDG / GDPR)',
        paragraphs: [
          'نستخدم في موقعنا ملفات تعريف الارتباط الضرورية تقنياً لتمكين الوظائف الأساسية مثل التنقل واللغة وتسجيل الدخول والأمان، والتي لا تتطلب موافقة مسبقة وفقاً للقوانين المعمول بها.',
          'لا يتم تشغيل أية ملفات تعريف ارتباط غير ضرورية لأغراض التتبع أو التسويق إلا بعد الحصول على موافقتكم الصريحة، ويمكنكم سحب هذه الموافقة في أي وقت بسهولة.',
        ],
      },
      {
        id: 'retention',
        title: '11. مدة الاحتفاظ بالبيانات',
        paragraphs: [
          'نحتفظ بالبيانات الشخصية فقط للمدة اللازمة لتحقيق الأغراض التي جُمعت من أجلها:',
          'تُحفظ السجلات التعاقدية والمحاسبية للمدد القانونية الملزمة (تصل عادة إلى 6 أو 10 سنوات وفقاً للقوانين التجارية والضريبية).',
          'تُحذف سجلات التحقق المؤقتة ورموز OTP تلقائياً بعد انتهاء صلاحيتها القصيرة.',
          'عند انتهاء الغرض من الحفظ وعدم وجود التزامات قانونية، يتم حذف البيانات بشكل آمن أو إخفاء هويتها تماماً.',
        ],
      },
      {
        id: 'rights',
        title: '12. حقوقكم القانونية بموجب الـ GDPR',
        paragraphs: [
          'يمنحكم القانون الأوروبي لحماية البيانات حقوقاً أساسية ومباشرة تشمل:',
        ],
        bullets: [
          'حق الوصول والاطلاع (المادة 15) على بياناتكم المعالجة لدينا.',
          'حق التصحيح (المادة 16) لأية بيانات غير دقيقة أو غير مكتملة.',
          'حق المسح / الحذف (المادة 17) ما لم توجد التزامات قانونية تمنع ذلك.',
          'حق تقييد المعالجة (المادة 18).',
          'حق نقل البيانات (المادة 20) في نسق منظم ومقروء آلياً.',
          'حق الاعتراض (المادة 21) على المعالجة القائمة على المصالح المشروعة.',
          'حق سحب الموافقة (المادة 7(3)) في أي وقت دون المساس بمشروعية المعالجة السابقة.',
          'حق تقديم شكوى لدى هيئة حماية بيانات رقابية مختصة في الاتحاد الأوروبي (المادة 77).',
        ],
      },
      {
        id: 'automated-decision',
        title: '13. القرارات الآلية والتنميط',
        paragraphs: [
          'لا نعتمد في Success Path Mentors على أية قرارات مؤتمتة كلياً أو تنميط آلي وفق المادة 22 من الـ GDPR يترتب عليه آثار قانونية للمتعلمين. اختيار المعلمين وتنسيق الحصص يتم دائماً بإشراف ودراسة بشرية مباشرة من فريق التنسيق.',
        ],
      },
      {
        id: 'security',
        title: '14. أمان وسرية البيانات',
        paragraphs: [
          'نطبق تدابير فنية وتنظيمية مشددة لحماية البيانات من الوصول غير المصرح به أو الفقدان أو التعديل أو الإتلاف. وتخضع هذه التدابير للمراجعة والتطوير المستمر.',
        ],
      },
      {
        id: 'changes',
        title: '15. التعديلات على سياسة الخصوصية',
        paragraphs: [
          'قد نقوم بتحديث هذه السياسة من حين لآخر وفقاً لتطور خدماتنا والتشريعات المعمول بها. وستكون النسخة السارية دائماً منشورة ومتاحة على هذه الصفحة مع تاريخ النفاذ.',
        ],
      },
    ],
    closing: {
      title: 'هل لديكم أية استفسارات بشأن الخصوصية؟',
      description:
        'يسعد فريق التنسيق الأوروبي لدينا بالإجابة على استفساراتكم ومساعدتكم في كل ما يخص حماية بياناتكم.',
      contactLabel: germanyLegalConfig.contactEmail,
    },
  },
};

export function getGermanyPrivacyPolicy(locale: 'de' | 'en' | 'ar'): LegalPageContent {
  return germanyPrivacyPolicyContent[locale] || germanyPrivacyPolicyContent.de;
}


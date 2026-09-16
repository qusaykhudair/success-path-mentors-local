import { germanyLegalConfig } from '@/config/germany-legal';
import type { LegalPageContent } from '@/types/legal-page';

export interface ModelWithdrawalFormData {
  title: string;
  intro: string;
  recipientLabel: string;
  recipientText: string[];
  noticeStatement: string;
  orderedOnLabel: string;
  receivedOnLabel: string;
  serviceDescriptionLabel: string;
  consumerNameLabel: string;
  consumerAddressLabel: string;
  signatureNotice: string;
  dateLabel: string;
}

export interface GermanyTermsContent extends LegalPageContent {
  modelWithdrawalForm: ModelWithdrawalFormData;
}

export const germanyTermsContent: Record<'de' | 'en' | 'ar', GermanyTermsContent> = {
  de: {
    seo: {
      title: 'Allgemeine Geschäftsbedingungen (AGB) | Success Path Mentors Germany',
      description:
        'Allgemeine Geschäftsbedingungen und Verbraucherinformationen für Nachhilfe- und Bildungsangebote von Success Path Mentors in Deutschland und Europa, inklusive gesetzlicher Widerrufsbelehrung und Muster-Widerrufsformular.',
    },
    breadcrumbs: {
      home: 'Startseite',
      current: 'AGB & Nutzungsbedingungen',
      ariaLabel: 'Brotkrumen-Navigation',
    },
    hero: {
      eyebrow: 'Rechtliche Rahmenbedingungen',
      title: 'Allgemeine Geschäftsbedingungen',
      description:
        'Transparente und verlässliche Bedingungen für unsere Nachhilfe- und Bildungsangebote in Deutschland und Europa. Bitte lesen Sie diese Bedingungen vor der Buchung von Unterrichtspaketen aufmerksam durch.',
      lastUpdatedLabel: 'Stand',
      lastUpdated: germanyLegalConfig.effectiveDateGerman,
      appliesToLabel: 'Geltungsbereich',
      appliesTo: 'Deutschland & Europa (/de/*), Unterrichtsvereinbarungen, Probestunden und Koordination',
      contactLabel: germanyLegalConfig.contactEmail,
    },
    tableOfContentsLabel: 'Inhaltsübersicht',
    sections: [
      {
        id: 'provider',
        title: '1. Anbieter und Geltungsbereich',
        paragraphs: [
          'Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Erbringung von Nachhilfe-, Sprach- und Bildungsdienstleistungen über die Website von Success Path Mentors für Deutschland und Europa (/de/*).',
          `Vertragspartner und Dienstanbieter ist:`,
          `${germanyLegalConfig.legalEntityName}`,
          `Geschäftsbezeichnung: ${germanyLegalConfig.brandName}`,
          `Anschrift: ${germanyLegalConfig.registeredAddress}`,
          `Handelsregister / Registernummer: ${germanyLegalConfig.registrationNumber}`,
          `Umsatzsteuer-Identifikationsnummer: ${germanyLegalConfig.vatId}`,
          `E-Mail: ${germanyLegalConfig.contactEmail} | WhatsApp: ${germanyLegalConfig.whatsappDisplay}`,
          'Diese Bestimmungen gelten ausschließlich für das Angebot in Deutschland und Europa und nicht für die eigenständigen Angebote von Success Path Mentors in Nordamerika.',
        ],
      },
      {
        id: 'services',
        title: '2. Leistungsgegenstand',
        paragraphs: [
          'Success Path Mentors erbringt Online-Bildungsdienstleistungen, insbesondere individuellen 1-zu-1 Einzelunterricht, Lehrkräfteauswahl und -vermittlung, pädagogische Koordination, kostenlose Probestunden sowie ergänzende Lernbegleitung.',
          'Das Angebot umfasst gegenwärtig insbesondere die Fächer Deutsch, Englisch, Arabisch und Französisch. Der Unterricht findet interaktiv online über gängige digitale Plattformen statt.',
        ],
      },
      {
        id: 'contracting-parties',
        title: '3. Vertragspartner und Minderjährige',
        paragraphs: [
          'Vertragspartner können sowohl volljährige Personen sein, die Unterricht für sich selbst buchen, als auch Eltern oder gesetzliche Vertreter, die den Unterricht für minderjährige Kinder vereinbaren.',
          'Bei Minderjährigen ist der Abschluss eines kostenpflichtigen Unterrichtsvertrags ausschließlich durch die sorgeberechtigten Eltern oder gesetzlichen Vertreter zulässig. Nutzer verpflichten sich zu wahrheitsgemäßen und vollständigen Angaben.',
        ],
      },
      {
        id: 'free-trial',
        title: '4. Kostenlose Probestunde',
        paragraphs: [
          'Sofern wir eine kostenlose Probestunde anbieten, dient diese dem unverbindlichen gegenseitigen Kennenlernen, der Einschätzung des Lernstands und der Prüfung der Passgenauigkeit der Lehrkraft.',
          'Die Vereinbarung einer Probestunde begründet weder für den Kunden noch für Success Path Mentors eine Verpflichtung zum Abschluss eines nachfolgenden kostenpflichtigen Unterrichtspakets.',
        ],
      },
      {
        id: 'contract-formation',
        title: '5. Vertragsschluss',
        paragraphs: [
          'Die unverbindliche Präsentation von Leistungen auf unserer Website stellt noch kein verbindliches Vertragsangebot dar.',
          'Ein verbindlicher Vertrag über kostenpflichtige Unterrichtspakete kommt erst zustande, wenn die wesentlichen Vertragsinhalte (insbesondere Fach, Stundenumfang, Laufzeit und Gesamtpreis) individuell abgestimmt und durch eine ausdrückliche Bestätigung (z. B. schriftlich, per E-Mail oder über einen autorisierten Buchungs- und Zahlungsprozess) von beiden Seiten angenommen werden.',
        ],
      },
      {
        id: 'fees-payment',
        title: '6. Preise und Zahlungsbedingungen',
        paragraphs: [
          'Alle für den deutschen und europäischen Markt geltenden Preise verstehen sich in Euro (€) inklusive der jeweils geltenden gesetzlichen Umsatzsteuer, sofern diese anfällt.',
          'Die Preise für Unterrichtspakete werden dem Kunden vor dem verbindlichen Vertragsschluss transparent und vollständig mitgeteilt. Deutsche Preise sind unabhängig von Preisangaben der nordamerikanischen Plattform.',
          'Zahlungen können über die jeweils vereinbarten und freigegebenen Zahlungsverfahren abgewickelt werden.',
        ],
      },
      {
        id: 'tutor-matching',
        title: '7. Lehrerauswahl und -zuweisung',
        paragraphs: [
          'Wir wählen Lehrkräfte sorgfältig auf Basis des Lernziels, der Klassenstufe, der Sprache und der zeitlichen Verfügbarkeit des Schülers aus.',
          'Ein Anspruch auf Unterricht durch eine ganz bestimmte Lehrkraft besteht nicht. Success Path Mentors ist berechtigt, bei Verhinderung (z. B. durch Krankheit oder Beendigung der Zusammenarbeit) eine fachlich gleichwertige Ersatzlehrkraft bereitzustellen oder ausgefallene Einheiten nachzuholen.',
        ],
      },
      {
        id: 'scheduling-cancellation',
        title: '8. Terminplanung, Umbuchung und Unterrichtsausfall',
        paragraphs: [
          'Unterrichtstermine werden individuell zwischen dem Schüler/den Eltern, der Lehrkraft und unserem Koordinationsteam abgestimmt.',
          'Die spezifischen Bedingungen für Terminabsagen, Umbuchungen und Stornierungen werden dem Kunden vor Vertragsschluss klar mitgeteilt. Zwingende gesetzliche Verbraucherrechte bleiben hiervon unberührt.',
        ],
      },
      {
        id: 'withdrawal',
        title: '9. Gesetzliches Widerrufsrecht für Verbraucher (Widerrufsbelehrung)',
        paragraphs: [
          'Verbrauchern steht bei Fernabsatzverträgen über Dienstleistungen grundsätzlich ein 14-tägiges gesetzliches Widerrufsrecht zu.',
        ],
        subsections: [
          {
            title: 'Widerrufsbelehrung',
            paragraphs: [
              'Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.',
              'Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.',
              `Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (${germanyLegalConfig.legalEntityName}, ${germanyLegalConfig.registeredAddress}, E-Mail: ${germanyLegalConfig.contactEmail}, WhatsApp: ${germanyLegalConfig.whatsappDisplay}) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.`,
              'Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.',
            ],
          },
          {
            title: 'Folgen des Widerrufs',
            paragraphs: [
              'Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.',
              'Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.',
            ],
          },
          {
            title: 'Vorzeitiges Erlöschen des Widerrufsrechts',
            paragraphs: [
              'Das Widerrufsrecht erlischt bei einem Vertrag zur Erbringung von Dienstleistungen vorzeitig, wenn die Dienstleistung vollständig erbracht wurde und mit der Ausführung der Dienstleistung erst begonnen wurde, nachdem der Verbraucher dazu seine ausdrückliche Zustimmung gegeben und gleichzeitig seine Kenntnis davon bestätigt hat, dass er sein Widerrufsrecht bei vollständiger Vertragserfüllung durch den Unternehmer verliert.',
            ],
          },
        ],
      },
      {
        id: 'satisfaction-complaints',
        title: '10. Ihre Zufriedenheit, Beschwerden und Kulanzlösungen',
        paragraphs: [
          'Die Zufriedenheit unserer Lernenden und ihrer Familien ist unser zentrales Anliegen ("Your Satisfaction Matters").',
          'Sollte eine Unterrichtseinheit oder die Zusammenarbeit mit einer Lehrkraft nicht Ihren berechtigten Erwartungen entsprechen, bitten wir Sie, unser Koordinationsteam unverzüglich zu kontaktieren. Wir prüfen jedes Anliegen gewissenhaft und finden in der Regel eine einvernehmliche Lösung – beispielsweise durch einen Lehrerwechsel, die Gutschrift oder das kostenfreie Nachholen einer Unterrichtseinheit.',
          'Ein pauschales oder bedingungsloses "Geld-zurück-Versprechen" wird hierdurch nicht begründet. Gesetzliche Gewährleistungs- und Verbraucherrechte bleiben stets in vollem Umfang unberührt.',
        ],
      },
      {
        id: 'user-responsibilities',
        title: '11. Mitwirkungspflichten der Lernenden und Erziehungsberechtigten',
        paragraphs: [
          'Der Kunde stellt sicher, dass für die Durchführung des Online-Unterrichts ein geeignetes Endgerät (PC, Laptop oder Tablet mit Kamera und Mikrofon), eine stabile Internetverbindung sowie eine ruhige Lernumgebung zur Verfügung stehen.',
          'Im Unterricht ist ein respektvoller, wertschätzender und diskriminierungsfreier Umgangston selbstverständlich. Bei schwerwiegenden Verstößen oder wiederholter Störung behalten wir uns vor, den Unterricht abzubrechen oder den Zugang vorübergehend zu sperren.',
        ],
      },
      {
        id: 'educational-outcomes',
        title: '12. Pädagogische Zielsetzung und kein Erfolgsversprechen',
        paragraphs: [
          'Der Unterricht dient der individuellen schulischen und sprachlichen Förderung sowie der Vermittlung von Fachwissen und Lernstrategien.',
          'Ein bestimmter schulischer oder akademischer Erfolg (z. B. das Erreichen bestimmter Schulnoten, das Bestehen von Prüfungen oder die Zusage für bestimmte Studiengänge) kann verständlicherweise nicht garantiert werden, da der Lernerfolg maßgeblich von der persönlichen Mitarbeit, dem Lernaufwand und individuellen Voraussetzungen des Schülers abhängt.',
        ],
      },
      {
        id: 'intellectual-property',
        title: '13. Urheberrechte und Lehrmaterialien',
        paragraphs: [
          'Die im Unterricht bereitgestellten Lehrmaterialien, Übungsaufgaben und Inhalte sind urheberrechtlich geschützt. Sie werden den Lernenden ausschließlich zur persönlichen Nachbereitung zur Verfügung gestellt.',
          'Eine Weitergabe an Dritte, die Veröffentlichung im Internet oder eine sonstige kommerzielle Verwertung ohne vorherige schriftliche Zustimmung ist unzulässig.',
        ],
      },
      {
        id: 'recording',
        title: '14. Unterrichtsaufzeichnungen',
        paragraphs: [
          'Unterrichtseinheiten werden grundsätzlich nicht aufgezeichnet.',
          'Sollte in Ausnahmefällen zu pädagogischen Zwecken oder zur Qualitätssicherung eine Aufzeichnung gewünscht sein, erfolgt dies ausschließlich nach vorheriger umfassender Information und mit ausdrücklicher, freiwilliger Einwilligung aller Beteiligten (bei Minderjährigen durch die Erziehungsberechtigten).',
        ],
      },
      {
        id: 'liability',
        title: '15. Haftung',
        paragraphs: [
          'Success Path Mentors haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung beruhen, sowie für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen.',
          'Bei einfacher Fahrlässigkeit haftet Success Path Mentors nur bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht). In diesem Fall ist die Haftung der Höhe nach auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt.',
          'Zwingende gesetzliche Haftungsbestimmungen (insbesondere nach dem Produkthaftungsgesetz) bleiben unberührt.',
        ],
      },
      {
        id: 'availability',
        title: '16. Verfügbarkeit und technische Störungen',
        paragraphs: [
          'Wir bemühen uns um eine möglichst unterbrechungsfreie Verfügbarkeit unserer digitalen Dienste. Gleichwohl können vorübergehende technische Wartungsarbeiten oder Störungen bei Internet- und Telekommunikationsanbietern nicht gänzlich ausgeschlossen werden.',
          'Kann eine Unterrichtseinheit aus von uns oder der Lehrkraft zu vertretenden technischen Gründen nicht durchgeführt werden, wird die Stunde selbstverständlich zu einem Ersatztermin kostenfrei nachgeholt.',
        ],
      },
      {
        id: 'privacy-reference',
        title: '17. Datenschutz',
        paragraphs: [
          'Informationen zur Verarbeitung personenbezogener Daten und zu Ihren Rechten nach der DSGVO finden Sie in unserer separaten Datenschutzerklärung für Deutschland und Europa unter /de/privacy.',
        ],
      },
      {
        id: 'applicable-law',
        title: '18. Anwendbares Recht und Gerichtsstand',
        paragraphs: [
          'Für sämtliche Rechtsbeziehungen zwischen den Parteien gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.',
          'Bei Verbrauchern gilt diese Rechtswahl nur insoweit, als nicht der gewährte Schutz durch zwingende Bestimmungen des Rechts des Staates, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat, entzogen wird.',
        ],
      },
      {
        id: 'dispute-resolution',
        title: '19. Verbraucherstreitbeilegung (VSBG § 36)',
        paragraphs: [
          'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter https://ec.europa.eu/consumers/odr/ finden.',
          'Hinweis gemäß § 36 VSBG: Success Path Mentors ist grundsätzlich nicht verpflichtet und derzeit nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Wir sind stets bemüht, eventuelle Meinungsverschiedenheiten direkt und einvernehmlich mit unseren Kunden über unser Koordinationsteam zu klären.',
        ],
      },
      {
        id: 'changes-contact',
        title: '20. Änderungen der AGB und Kontakt',
        paragraphs: [
          'Änderungen dieser AGB erfolgen stets zukunftsorientiert und werden auf unserer Website veröffentlicht. Bereits geschlossene Verträge bleiben hiervon unberührt, es sei denn, eine Anpassung ist gesetzlich zwingend vorgeschrieben.',
          `Bei Fragen zu diesen Bedingungen erreichen Sie uns unter: ${germanyLegalConfig.contactEmail}.`,
        ],
      },
    ],
    modelWithdrawalForm: {
      title: 'Muster-Widerrufsformular',
      intro:
        'Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es an uns zurück:',
      recipientLabel: 'An:',
      recipientText: [
        germanyLegalConfig.legalEntityName,
        germanyLegalConfig.registeredAddress,
        `E-Mail: ${germanyLegalConfig.contactEmail}`,
        `WhatsApp: ${germanyLegalConfig.whatsappDisplay}`,
      ],
      noticeStatement:
        'Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung:',
      serviceDescriptionLabel: 'Bezeichnung der Dienstleistung / Unterrichtspaket:',
      orderedOnLabel: 'Bestellt am (*):',
      receivedOnLabel: 'Erhalten am (*):',
      consumerNameLabel: 'Name des/der Verbraucher(s):',
      consumerAddressLabel: 'Anschrift des/der Verbraucher(s):',
      signatureNotice: 'Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):',
      dateLabel: 'Datum:',
    },
    closing: {
      title: 'Fragen zu unseren Geschäftsbedingungen?',
      description:
        'Unser deutsches Koordinationsteam hilft Ihnen bei allen vertraglichen oder organisatorischen Fragen gerne weiter.',
      contactLabel: germanyLegalConfig.contactEmail,
    },
  },

  en: {
    seo: {
      title: 'Terms and Conditions | Success Path Mentors Germany',
      description:
        'Terms and conditions and statutory consumer information for Success Path Mentors tutoring services in Germany and Europe, including right of withdrawal and model withdrawal form.',
    },
    breadcrumbs: {
      home: 'Home',
      current: 'Terms & Conditions',
      ariaLabel: 'Breadcrumb',
    },
    hero: {
      eyebrow: 'Legal & Service Terms',
      title: 'Terms and Conditions',
      description:
        'Clear, transparent terms governing our educational and tutoring services in Germany and Europe. Please review these terms prior to purchasing packages or booking lessons.',
      lastUpdatedLabel: 'Last updated',
      lastUpdated: germanyLegalConfig.effectiveDate,
      appliesToLabel: 'Applies to',
      appliesTo: 'Germany & Europe (/de/*), trial sessions, lesson packages, and tutoring coordination',
      contactLabel: germanyLegalConfig.contactEmail,
    },
    tableOfContentsLabel: 'Table of Contents',
    sections: [
      {
        id: 'provider',
        title: '1. Service Provider and Scope',
        paragraphs: [
          'These Terms and Conditions govern the provision of tutoring, language, and educational services via the Success Path Mentors Germany and Europe platform (/de/*).',
          `The contracting service provider is:`,
          `${germanyLegalConfig.legalEntityName}`,
          `Trading as: ${germanyLegalConfig.brandName}`,
          `Registered Address: ${germanyLegalConfig.registeredAddress}`,
          `Registration Number: ${germanyLegalConfig.registrationNumber}`,
          `VAT Identification Number: ${germanyLegalConfig.vatId}`,
          `Email: ${germanyLegalConfig.contactEmail} | WhatsApp: ${germanyLegalConfig.whatsappDisplay}`,
          'These Terms apply strictly to Germany and Europe operations and are independent of North American terms.',
        ],
      },
      {
        id: 'services',
        title: '2. Services Provided',
        paragraphs: [
          'Success Path Mentors provides online educational services, including individual 1-to-1 tutoring, tutor matching, educational coordination, trial lessons, and continuous academic guidance.',
          'Core subjects currently include German, English, Arabic, and French. Lessons are delivered live online via established digital interactive tools.',
        ],
      },
      {
        id: 'contracting-parties',
        title: '3. Contracting Parties and Minor Learners',
        paragraphs: [
          'Customers may be adult learners contracting for themselves, or parents and legal guardians contracting on behalf of minor students.',
          'For minor learners, paid tutoring agreements must be entered into by a parent or legal guardian. Users must provide accurate, complete, and updated information.',
        ],
      },
      {
        id: 'free-trial',
        title: '4. Free Trial Sessions',
        paragraphs: [
          'Where free trial lessons are offered, they provide an opportunity to evaluate learning goals, assess academic level, and determine tutor suitability.',
          'A trial lesson does not obligate either party to enter into a subsequent paid tutoring contract, nor does it guarantee the perpetual availability of a particular tutor or time slot.',
        ],
      },
      {
        id: 'contract-formation',
        title: '5. Contract Formation',
        paragraphs: [
          'The presentation of services on our website constitutes an invitation to inquire rather than a legally binding offer.',
          'A binding paid service contract is established when package parameters (subject, hours, schedule, and total price) are agreed upon and formally confirmed through written agreement, electronic confirmation, or an approved payment transaction.',
        ],
      },
      {
        id: 'fees-payment',
        title: '6. Fees, Currencies, and Payment',
        paragraphs: [
          'All fees for Germany and Europe are quoted in Euros (€) inclusive of applicable statutory taxes.',
          'Pricing is disclosed fully and transparently prior to contract confirmation. European pricing operates independently from North American rates.',
          'Payments may be processed using approved payment gateways and methods agreed upon during booking.',
        ],
      },
      {
        id: 'tutor-matching',
        title: '7. Tutor Matching and Substitution',
        paragraphs: [
          'We match tutors carefully based on the student’s goals, grade, language requirements, and preferred availability.',
          'While we strive for consistency, customers are not entitled to a specific individual tutor. If a tutor is unavailable due to illness or scheduling conflicts, we will provide a qualified replacement or arrange a makeup lesson.',
        ],
      },
      {
        id: 'scheduling-cancellation',
        title: '8. Scheduling, Rescheduling, and Missed Lessons',
        paragraphs: [
          'Lesson schedules are coordinated collaboratively between the family, the tutor, and our administrative coordination team.',
          'Applicable rescheduling and notice policies are communicated clearly prior to contracting. Mandatory statutory consumer rights remain unaffected.',
        ],
      },
      {
        id: 'withdrawal',
        title: '9. Consumer Statutory Right of Withdrawal',
        paragraphs: [
          'Consumers entering into distance contracts for educational services possess a statutory 14-day right of withdrawal under European consumer protection law.',
        ],
        subsections: [
          {
            title: 'Instructions on Withdrawal',
            paragraphs: [
              'You have the right to withdraw from this contract within 14 days without giving any reason.',
              'The withdrawal period will expire after 14 days from the day of the conclusion of the contract.',
              `To exercise the right of withdrawal, you must inform us (${germanyLegalConfig.legalEntityName}, ${germanyLegalConfig.registeredAddress}, Email: ${germanyLegalConfig.contactEmail}, WhatsApp: ${germanyLegalConfig.whatsappDisplay}) of your decision to withdraw from this contract by an unequivocal statement (e.g. a letter sent by post or email). You may use the attached model withdrawal form, but it is not obligatory.`,
              'To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of the right of withdrawal before the withdrawal period has expired.',
            ],
          },
          {
            title: 'Effects of Withdrawal',
            paragraphs: [
              'If you withdraw from this contract, we shall reimburse to you all payments received from you without undue delay and in any event not later than 14 days from the day on which we are informed about your decision to withdraw from this contract. We will carry out such reimbursement using the same means of payment as you used for the initial transaction, unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of such reimbursement.',
              'If you requested to begin the performance of services during the withdrawal period, you shall pay us an amount which is in proportion to what has been provided until you have communicated us your withdrawal from this contract, in comparison with the full coverage of the contract.',
            ],
          },
          {
            title: 'Premature Expiry of the Right of Withdrawal',
            paragraphs: [
              'The right of withdrawal expires prematurely if the service has been fully performed and performance only began after the consumer gave express prior consent and acknowledged that they would lose their right of withdrawal once the contract had been fully performed.',
            ],
          },
        ],
      },
      {
        id: 'satisfaction-complaints',
        title: '10. Satisfaction, Inquiries, and Remedies',
        paragraphs: [
          'Student and family satisfaction is central to our mission ("Your Satisfaction Matters").',
          'If a lesson or tutoring match does not meet your expectations, we encourage you to inform our coordination team promptly. We review issues conscientiously and typically offer collaborative remedies, such as tutor re-matching, rescheduling, or lesson credits.',
          'This does not establish an unconditional money-back guarantee. Statutory consumer rights remain unaffected.',
        ],
      },
      {
        id: 'user-responsibilities',
        title: '11. Customer Responsibilities and Conduct',
        paragraphs: [
          'Customers are responsible for providing functional hardware (computer/tablet, camera, microphone), a reliable internet connection, and a quiet learning environment.',
          'All participants must maintain respectful, constructive, and polite conduct during lessons. Harassment or platform abuse may result in lesson suspension or access restriction.',
        ],
      },
      {
        id: 'educational-outcomes',
        title: '12. Educational Outcomes and Performance',
        paragraphs: [
          'Our tutoring is designed to provide comprehensive, individualized academic support and learning confidence.',
          'However, Success Path Mentors cannot guarantee specific grades, examination outcomes, or school admissions, as educational outcomes depend heavily on personal effort, consistent attendance, and learner circumstances.',
        ],
      },
      {
        id: 'intellectual-property',
        title: '13. Intellectual Property and Course Materials',
        paragraphs: [
          'Educational materials, assignments, and curriculum resources provided during lessons are protected by intellectual property laws and are for the student’s personal educational use only.',
          'Commercial distribution, public uploading, or reproduction without written permission is prohibited.',
        ],
      },
      {
        id: 'recording',
        title: '14. Recording of Lessons',
        paragraphs: [
          'Online lessons are not recorded as a matter of standard practice.',
          'If recording is ever proposed for specialized pedagogical review, it requires explicit advance disclosure and voluntary written consent from all participants (including guardians for minors).',
        ],
      },
      {
        id: 'liability',
        title: '15. Limitation of Liability',
        paragraphs: [
          'Success Path Mentors is liable without limitation for damages resulting from injury to life, body, or health, as well as for damages caused by intent or gross negligence.',
          'In cases of ordinary negligence, liability is limited to the breach of material contractual obligations (cardinal obligations) and restricted to typical, foreseeable damages at the time of contracting.',
          'Mandatory statutory liability under consumer protection laws remains unaffected.',
        ],
      },
      {
        id: 'availability',
        title: '16. Technical Availability and Interruptions',
        paragraphs: [
          'We endeavor to ensure stable technical availability. However, occasional interruptions caused by maintenance or external telecommunications networks cannot be entirely precluded.',
          'If a lesson cannot take place due to technical failure on the part of our team or the tutor, the lesson will be rescheduled at no additional charge.',
        ],
      },
      {
        id: 'privacy-reference',
        title: '17. Privacy and Data Protection',
        paragraphs: [
          'Personal data is handled in strict compliance with the GDPR as set forth in our Germany Privacy Policy at /de/en/privacy.',
        ],
      },
      {
        id: 'applicable-law',
        title: '18. Governing Law and Jurisdiction',
        paragraphs: [
          'These Terms and all related contracts are governed by the laws of the Federal Republic of Germany, excluding the UN Convention on Contracts for the International Sale of Goods (CISG).',
          'For consumers, this choice of law applies only to the extent that it does not deprive the consumer of mandatory protection under the law of their habitual residence.',
        ],
      },
      {
        id: 'dispute-resolution',
        title: '19. Consumer Dispute Resolution (VSBG § 36)',
        paragraphs: [
          'The European Commission provides an Online Dispute Resolution (ODR) platform at: https://ec.europa.eu/consumers/odr/',
          'Notice pursuant to § 36 VSBG: Success Path Mentors is not obligated and does not currently participate in dispute resolution proceedings before a consumer arbitration board. We are committed to resolving customer concerns directly and amiably through our coordination team.',
        ],
      },
      {
        id: 'changes-contact',
        title: '20. Changes to Terms and Contact',
        paragraphs: [
          'We may update these Terms prospectively. Updates will be published on this website with their effective date.',
          `For inquiries regarding these Terms, contact: ${germanyLegalConfig.contactEmail}.`,
        ],
      },
    ],
    modelWithdrawalForm: {
      title: 'Model Withdrawal Form',
      intro:
        'If you wish to withdraw from the contract, please complete and return this form:',
      recipientLabel: 'To:',
      recipientText: [
        germanyLegalConfig.legalEntityName,
        germanyLegalConfig.registeredAddress,
        `Email: ${germanyLegalConfig.contactEmail}`,
        `WhatsApp: ${germanyLegalConfig.whatsappDisplay}`,
      ],
      noticeStatement:
        'I/We (*) hereby give notice that I/We (*) withdraw from my/our (*) contract for the provision of the following service:',
      serviceDescriptionLabel: 'Service description / Tutoring package:',
      orderedOnLabel: 'Ordered on (*):',
      receivedOnLabel: 'Received on (*):',
      consumerNameLabel: 'Name of consumer(s):',
      consumerAddressLabel: 'Address of consumer(s):',
      signatureNotice: 'Signature of consumer(s) (only if this form is notified on paper):',
      dateLabel: 'Date:',
    },
    closing: {
      title: 'Questions about our Terms?',
      description:
        'Our European coordination team is ready to answer any questions regarding our service agreements.',
      contactLabel: germanyLegalConfig.contactEmail,
    },
  },

  ar: {
    seo: {
      title: 'الشروط والأحكام | Success Path Mentors Germany',
      description:
        'الشروط والأحكام الرسمية ومعلومات حماية المستهلك لخدمات Success Path Mentors في ألمانيا وأوروبا، بما في ذلك حق الانسحاب القانوني ونموذج الانسحاب القياسي.',
    },
    breadcrumbs: {
      home: 'الرئيسية',
      current: 'الشروط والأحكام',
      ariaLabel: 'مسار التصفح',
    },
    hero: {
      eyebrow: 'الأطر القانونية والتعاقدية',
      title: 'الشروط والأحكام',
      description:
        'شروط واضحة وموثوقة تنظم تقديم خدمات الدروس الخصوصية والتعليم الفردي في ألمانيا وأوروبا. يرجى قراءة هذه البنود بعناية قبل حجز الباقات التعليمية.',
      lastUpdatedLabel: 'آخر تحديث',
      lastUpdated: germanyLegalConfig.effectiveDateArabic,
      appliesToLabel: 'نطاق التطبيق',
      appliesTo: 'خدمات ألمانيا وأوروبا (/de/*)، الحصص التجريبية، الباقات، والتنسيق التعليمي',
      contactLabel: germanyLegalConfig.contactEmail,
    },
    tableOfContentsLabel: 'أقسام الشروط والأحكام',
    sections: [
      {
        id: 'provider',
        title: '1. مقدم الخدمة ونطاق السريان',
        paragraphs: [
          'تنظم هذه الشروط والأحكام تقديم الخدمات التعليمية والدروس الخصوصية عبر موقع Success Path Mentors في ألمانيا وأوروبا (/de/*).',
          `الطرف المتعاقد ومقدم الخدمة هو:`,
          `${germanyLegalConfig.legalEntityName}`,
          `الاسم التجاري: ${germanyLegalConfig.brandName}`,
          `العنوان المسجل: ${germanyLegalConfig.registeredAddress}`,
          `رقم السجل التجاري: ${germanyLegalConfig.registrationNumber}`,
          `الرقم الضريبي (VAT): ${germanyLegalConfig.vatId}`,
          `البريد الإلكتروني: ${germanyLegalConfig.contactEmail} | واتساب: ${germanyLegalConfig.whatsappDisplay}`,
          'تسري هذه الشروط حصرياً على خدمات ألمانيا وأوروبا وتعد مستقلة عن شروط منصة أمريكا الشمالية.',
        ],
      },
      {
        id: 'services',
        title: '2. الخدمات المقدمة',
        paragraphs: [
          'تقدم Success Path Mentors خدمات تعليمية متكاملة تشمل الدروس الخصوصية الفردية 1-لـ-1 عبر الإنترنت، ومواءمة واختيار المعلمين، والتنسيق التربوي، والحصص التجريبية المجانية، والمتابعة المستمرة.',
          'تشمل المواد الأساسية المقدمة حالياً: اللغة الألمانية، واللغة الإنجليزية، واللغة العربية، واللغة الفرنسية. تُقدم الحصص عبر منصات رقمية تفاعلية حديثة.',
        ],
      },
      {
        id: 'contracting-parties',
        title: '3. أطراف العقد والمتعلمون القُصّر',
        paragraphs: [
          'يمكن إبرام التعاقد من قبل المتعلمين البالغين لأنفسهم، أو من قبل أولياء الأمور والأوصياء القانونيين لصالح الطلاب القُصّر.',
          'بالنسبة للطلاب القُصّر، يجب أن يتم التعاقد على الباقات المدفوعة حصرياً من قبل أولياء الأمور أو الأوصياء القانونيين، مع الالتزام بتقديم بيانات دقيقة وصحيحة.',
        ],
      },
      {
        id: 'free-trial',
        title: '4. الحصة التجريبية المجانية',
        paragraphs: [
          'تتيح الحصة التجريبية المجانية للأسرة والمتعلم التعرف على أسلوب التدريس، وتحديد المستوى التعليمي، واختبار مدى ملاءمة المعلم.',
          'لا تُلزم الحصة التجريبية أياً من الطرفين بإبرام تعاقد مدفوع لاحق، كما لا تضمن تثبيت موعد أو معلم بعينه مستقبلاً دون تأكيد تعاقدي.',
        ],
      },
      {
        id: 'contract-formation',
        title: '5. إبرام العقد',
        paragraphs: [
          'يعد عرض الخدمات على الموقع الإلكتروني دعوة للتواصل والتفاوض وليس إيجاباً تعاقدياً ملزماً بذاته.',
          'ينعقد العقد الملزم للباقات المدفوعة عند الاتفاق على تفاصيل الباقة (المادة، عدد الساعات، والجدول، والسعر الإجمالي) وتأكيدها صراحة من خلال تأكيد خطي أو إلكتروني أو عبر آلية الدفع المعتمدة.',
        ],
      },
      {
        id: 'fees-payment',
        title: '6. الرسوم وطرق الدفع',
        paragraphs: [
          'تُحدد جميع الرسوم لباقات ألمانيا وأوروبا بعملة اليورو (€) شاملة للضرائب القانونية المعمول بها عند انطباقها.',
          'يتم إبلاغ العميل بأسعار الباقات بشفافية ووضوح تام قبل إتمام التعاقد. وتُعد أسعار أوروبا مستقلة كلياً عن أسعار المنصة في أمريكا الشمالية.',
          'تتم معالجة المدفوعات عبر بوابات ووسائل الدفع المعتمدة والمتفق عليها.',
        ],
      },
      {
        id: 'tutor-matching',
        title: '7. اختيار ومواءمة المعلمين والبدائل',
        paragraphs: [
          'نحرص على مواءمة واختيار المعلم الأنسب وفقاً لأهداف الطالب، ومنهجه، والمواعيد المفضلة لديه.',
          'لا يترتب على العقد حق مطلق في معلم بعينه بصورة دائمة؛ إذ يحق للمنصة في حالات التعذر (كالمرض أو انتهاء التعاون) توفير معلم بديل يتمتع بذات الكفاءة أو تعويض الحصص الملغاة.',
        ],
      },
      {
        id: 'scheduling-cancellation',
        title: '8. الجدولة وتعديل المواعيد وإلغاء الحصص',
        paragraphs: [
          'يتم تنسيق أوقات الحصص مسبقاً وبشكل مرن بالتعاون بين الأسرة والمعلم وفريق التنسيق الإداري.',
          'يتم إخطار العميل بضوابط تعديل المواعيد والإلغاء بوضوح قبل التعاقد، مع الحفاظ الكامل على حقوق المستهلك الإلزامية المقررة قانوناً.',
        ],
      },
      {
        id: 'withdrawal',
        title: '9. حق الانسحاب القانوني للمستهلك (Widerrufsbelehrung)',
        paragraphs: [
          'يتمتع المستهلك في عقود الخدمات المبرمة عن بُعد بحق قانوني في الانسحاب من العقد خلال 14 يوماً دون الحاجة لإبداء أسباب.',
        ],
        subsections: [
          {
            title: 'تعليمات وإرشادات الانسحاب',
            paragraphs: [
              'يحق لكم الانسحاب من هذا العقد خلال أربعة عشر يوماً دون إبداء أية أسباب.',
              'تبلغ مهلة الانسحاب 14 يوماً تبدأ من تاريخ إبرام العقد.',
              `لممارسة حقكم في الانسحاب، يجب إخطارنا (${germanyLegalConfig.legalEntityName}، العنوان: ${germanyLegalConfig.registeredAddress}، البريد الإلكتروني: ${germanyLegalConfig.contactEmail}، واتساب: ${germanyLegalConfig.whatsappDisplay}) بقراركم الصريح عبر إشعار لا لبس فيه (مثل رسالة بريدية أو بريد إلكتروني). يمكنكم استخدام نموذج الانسحاب القياسي المرفق أدناه، دون أن يكون ذلك إلزامياً.`,
              'يكفي لإثبات مراعاة مهلة الانسحاب إرسال الإشعار قبل انقضاء فترة الـ 14 يوماً.',
            ],
          },
          {
            title: 'الآثار المترتبة على الانسحاب',
            paragraphs: [
              'عند ممارسة حق الانسحاب، نقوم برد جميع المدفوعات المستلمة منكم دون تأخير وفي موعد أقصاه 14 يوماً من تاريخ استلامنا إشعار الانسحاب، عبر وسيلة الدفع الأصلية ذاتها ما لم يُتفق صراحة على غير ذلك، ودون تحميلكم أية رسوم لقاء الاسترداد.',
              'إذا طلبتم صراحة بدء تقديم الخدمات التعليمية خلال فترة مهلة الانسحاب، فيلتزم المستهلك بدفع مبلغ متناسب يغطي الحصص التي تم تقديمها بالفعل حتى تاريخ إخطار الانسحاب مقارنة بإجمالي الخدمة المتفق عليها في العقد.',
            ],
          },
          {
            title: 'السقوط المبكر لحق الانسحاب',
            paragraphs: [
              'يسقط حق الانسحاب في عقود الخدمات مبكراً إذا تم تنفيذ الخدمة كاملة، ولم يبدأ تقديمها إلا بعد حصولنا على موافقة المستهلك الصريحة المسبقة وإقراره بعلمه بسقوط حقه في الانسحاب بمجرد استكمال تنفيذ العقد بالكامل.',
            ],
          },
        ],
      },
      {
        id: 'satisfaction-complaints',
        title: '10. رضا العملاء والشكاوى والحلول البديلة',
        paragraphs: [
          'يأتي رضا الطلاب وأولياء الأمور في صميم أولوياتنا ("Your Satisfaction Matters").',
          'إذا واجهتكم أية ملاحظات بخصوص جودة الحصة أو التواصل مع المعلم، يرجى إبلاغ فريق التنسيق لدينا على الفور. نحرص على مراجعة كل حالة بعناية وتقديم حلول منصفة تشمل تغيير المعلم أو إعادة جدولة الحصة أو إضافة رصيد تعويضي.',
          'لا يُعد هذا البند وعداً مطلقاً أو غير مشروط باسترداد الأموال، مع بقاء حقوق المستهلك القانونية مصونة بالكامل.',
        ],
      },
      {
        id: 'user-responsibilities',
        title: '11. التزامات ومسؤوليات المستخدم',
        paragraphs: [
          'يلتزم العميل بتوفير جهاز ملائم وميكروفون وكاميرا واتصال إنترنت مستقر، وبيئة تعليمية هادئة تمكن الطالب من التركيز.',
          'يلتزم الجميع بالاحترام المتبادل والتعامل الإيجابي وتجنب أي تصرف غير لائق. ويحق للمنصة اتخاذ إجراءات تنظيمية في حال الإساءة أو تعطيل الحصص.',
        ],
      },
      {
        id: 'educational-outcomes',
        title: '12. الأهداف التعليمية وعدم ضمان النتائج الأكاديمية',
        paragraphs: [
          'تهدف دروسنا إلى تمكين الطالب وتطوير مهاراته وبناء ثقته وفهمه العميق للمادة.',
          'مع ذلك، لا تضمن Success Path Mentors درجات معينة أو نتائج محددة في الامتحانات المدرسية، إذ يعتمد التحصيل الدراسي على الجهد الفردي للطالب والتزامه وعوامل خارجة عن إرادتنا.',
        ],
      },
      {
        id: 'intellectual-property',
        title: '13. الملكية الفكرية وحقوق المواد التعليمية',
        paragraphs: [
          'تخضع كافة المواد التعليمية والمناهج والتمارين المقدمة لحماية حقوق الملكية الفكرية، وتُمنح للطالب لأغراض الدراسة الشخصية فقط.',
          'يحظر نشر هذه المواد أو تسجيلها أو إعادة بيعها أو توزيعها تجارياً دون موافقة خطية صريحة.',
        ],
      },
      {
        id: 'recording',
        title: '14. تسجيل الحصص التعليمية',
        paragraphs: [
          'لا يتم تسجيل الحصص التعليمية كإجراء افتراضي.',
          'في حال اقتراح تسجيل حصة لأغراض تربوية خاصة أو مراجعة الجودة، لا يتم ذلك إلا بإشعار مسبق وموافقة صريحة ومكتوبة من كافة الأطراف (وأولياء الأمور بالنسبة للقُصّر).',
        ],
      },
      {
        id: 'liability',
        title: '15. حدود المسؤولية القانونية',
        paragraphs: [
          'تتحمل Success Path Mentors المسؤولية الكاملة وفقاً للقانون عن الأضرار الناجمة عن المساس بالحياة أو السلامة الجسدية أو الناتجة عن العمد والإهمال الجسيم.',
          'في حالات الإهمال البسيط، تقتصر المسؤولية على الإخلال بالالتزامات التعاقدية الجوهرية وفي حدود الأضرار النموذجية المتوقعة عند إبرام العقد، دون الإخلال بحقوق المستهلك الإلزامية المقررة قانوناً.',
        ],
      },
      {
        id: 'availability',
        title: '16. جاهزية الخدمة والأعطال التقنية',
        paragraphs: [
          'نبذل قصارى جهدنا لضمان استقرار المنصة، مع احتمال حدوث انقطاعات طارئة بسبب أعمال صيانة أو مشكلات في شبكات الاتصال العامة.',
          'في حال تعذر إقامة الحصة لخلل تقني من جانبنا أو من جانب المعلم، يتم تعويض الحصة بموعد بديل دون أية تكاليف إضافية.',
        ],
      },
      {
        id: 'privacy-reference',
        title: '17. الخصوصية وحماية البيانات',
        paragraphs: [
          'تتم معالجة البيانات الشخصية وفقاً لسياسة الخصوصية الخاصة بألمانيا وأوروبا والمتاحة على الرابط: /de/ar/privacy.',
        ],
      },
      {
        id: 'applicable-law',
        title: '18. القانون الواجب التطبيق والاختصاص القضائي',
        paragraphs: [
          'تسري على كافة العلاقات التعاقدية قوانين جمهورية ألمانيا الاتحادية مع استبعاد اتفاقية الأمم المتحدة لعقود البيع الدولي للبضائع (CISG).',
          'بالنسبة للمستهلكين، لا يسلب هذا الاختيار القانوني المستهلك الحماية الممنوحة له بموجب القواعد الآمرة في قانون دولة إقامته المعتادة.',
        ],
      },
      {
        id: 'dispute-resolution',
        title: '19. تسوية نزاعات المستهلكين (VSBG § 36)',
        paragraphs: [
          'توفر المفوضية الأوروبية منصة لتسوية النزاعات عبر الإنترنت (ODR) على الرابط: https://ec.europa.eu/consumers/odr/',
          'إشعار وفق المادة 36 من قانون VSBG الألماني: إن Success Path Mentors غير ملزمة ولا تشارك حالياً في إجراءات فض النزاعات أمام هيئات تحكيم المستهلكين، ونسعى دوماً لحل أية ملاحظات مباشرة وودياً من خلال فريق التنسيق لدينا.',
        ],
      },
      {
        id: 'changes-contact',
        title: '20. التعديلات ومعلومات التواصل',
        paragraphs: [
          'يتم تحديث هذه الشروط مستقبلياً ونشرها على الموقع. وتبقى العقود السارية محكومة بالشروط التي أُبرمت في ظلها ما لم يقضِ القانون بغير ذلك.',
          `لأية استفسارات تتعلق بالشروط والأحكام، يرجى التواصل معنا عبر: ${germanyLegalConfig.contactEmail}.`,
        ],
      },
    ],
    modelWithdrawalForm: {
      title: 'نموذج الانسحاب القياسي (Muster-Widerrufsformular)',
      intro:
        'إذا رغبتم في الانسحاب من العقد، يرجى تعبئة هذا النموذج وإرساله إلينا:',
      recipientLabel: 'إلى:',
      recipientText: [
        germanyLegalConfig.legalEntityName,
        germanyLegalConfig.registeredAddress,
        `البريد الإلكتروني: ${germanyLegalConfig.contactEmail}`,
        `واتساب: ${germanyLegalConfig.whatsappDisplay}`,
      ],
      noticeStatement:
        'بهذا أُخطركم بموجب هذا الطلب بانسحابي (*) من العقد المبرم لتقديم الخدمة التعليمية التالية:',
      serviceDescriptionLabel: 'بيان الخدمة / باقة الدروس:',
      orderedOnLabel: 'تاريخ الطلب (*):',
      receivedOnLabel: 'تاريخ الاستلام (*):',
      consumerNameLabel: 'اسم المستهلك / ولي الأمر:',
      consumerAddressLabel: 'عنوان المستهلك:',
      signatureNotice: 'توقيع المستهلك (فقط في حال تقديم الطلب ورقياً):',
      dateLabel: 'التاريخ:',
    },
    closing: {
      title: 'هل لديكم أسئلة حول شروط الخدمة؟',
      description:
        'يسعد فريق التنسيق لدينا بمساعدتكم وتوضيح كافة البنود التعاقدية لراحتكم التامة.',
      contactLabel: germanyLegalConfig.contactEmail,
    },
  },
};

export function getGermanyTerms(locale: 'de' | 'en' | 'ar'): GermanyTermsContent {
  return germanyTermsContent[locale] || germanyTermsContent.de;
}


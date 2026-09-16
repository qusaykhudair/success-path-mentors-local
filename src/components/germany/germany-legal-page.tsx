'use client';

import React from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, FileText, AlertTriangle, Mail, MessageSquare, ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import type { LegalPageContent, LegalSection, LegalSubsection } from '@/types/legal-page';
import type { GermanyTermsContent } from '@/content/legal/germany/terms';
import { hasCompleteLegalEntityDetails, germanyLegalConfig } from '@/config/germany-legal';
import { getMarketLocalePath } from '@/lib/market-routing';

interface GermanyLegalPageProps {
  document: LegalPageContent | GermanyTermsContent;
  locale: 'de' | 'en' | 'ar';
  documentType: 'privacy' | 'terms';
}

export function GermanyLegalPage({ document, locale, documentType }: GermanyLegalPageProps) {
  const isRtl = locale === 'ar';
  const hasCompleteDetails = hasCompleteLegalEntityDetails();
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;
  const BreadcrumbArrow = isRtl ? ArrowLeft : ChevronRight;

  const termsDoc = documentType === 'terms' ? (document as GermanyTermsContent) : null;

  const labels = {
    de: {
      eyebrow: 'Rechtliche Informationen · Deutschland & Europa',
      home: 'Startseite',
      tocTitle: 'Inhaltsverzeichnis',
      lastUpdated: 'Stand',
      effectiveDate: 'Geltungsbereich',
      contactTitle: 'Rechtlicher Kontakt & Widerruf',
      contactDesc: 'Widerrufserklärungen, Datenschutzanfragen und rechtliche Mitteilungen können direkt an unsere europäische Koordination gerichtet werden:',
      emailLabel: 'E-Mail',
      whatsappLabel: 'WhatsApp',
      entityPlaceholderNotice: 'Hinweis für den Produktivbetrieb: Die Platzhalter für die europäische Rechtspersönlichkeit müssen vor der formalen Veröffentlichung durch die tatsächlichen Handelsregister- und USt-IdNr.-Daten ersetzt werden.',
      withdrawalFormTitle: 'Muster-Widerrufsformular',
      backToHome: 'Zurück zur Startseite',
    },
    en: {
      eyebrow: 'Legal Documentation · Germany & Europe',
      home: 'Home',
      tocTitle: 'Table of Contents',
      lastUpdated: 'Last Updated',
      effectiveDate: 'Scope',
      contactTitle: 'Legal Contact & Statutory Notices',
      contactDesc: 'Statutory withdrawal notices, privacy inquiries, and formal legal communications may be submitted directly to our European coordination office:',
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      entityPlaceholderNotice: 'Notice for production release: Legal entity placeholders must be updated with the actual European commercial register, registration number, and VAT ID prior to live production publication.',
      withdrawalFormTitle: 'Model Statutory Withdrawal Form',
      backToHome: 'Back to Home',
    },
    ar: {
      eyebrow: 'المستندات والسياسات القانونية · ألمانيا وأوروبا',
      home: 'الرئيسية',
      tocTitle: 'فهرس المحتويات',
      lastUpdated: 'تاريخ آخر تحديث',
      effectiveDate: 'النطاق الجغرافي',
      contactTitle: 'التواصل القانوني والإشعارات الرسمية',
      contactDesc: 'يمكن إرسال إشعارات الانسحاب القانونية واستفسارات حماية البيانات الرسمية مباشرة إلى فريق التنسيق الأوروبي:',
      emailLabel: 'البريد الإلكتروني',
      whatsappLabel: 'واتساب',
      entityPlaceholderNotice: 'تنبيه مرحلة الإطلاق: يجب استبدال المعرّفات المؤقتة ببيانات السجل التجاري ورقم الضريبة المعتمدة للكيان القانوني الأوروبي قبل النشر النهائي.',
      withdrawalFormTitle: 'نموذج الانسحاب القياسي القانوني',
      backToHome: 'العودة للرئيسية',
    },
  }[locale];

  return (
    <div className="min-h-screen bg-primary-950 text-white selection:bg-accent-500/30 selection:text-white" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Top Background Glow Effect */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-primary-900/40 via-primary-950/20 to-transparent" />

      <Container className="relative pt-12 pb-24 sm:pt-16 sm:pb-32">
        {/* Navigation Breadcrumb */}
        <nav aria-label={document.breadcrumbs?.ariaLabel || 'Breadcrumb'} className="mb-8 flex items-center gap-2 text-xs font-medium text-primary-400 sm:text-sm">
          <a
            href={getMarketLocalePath('germany', locale)}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded"
          >
            <BackIcon className="h-3.5 w-3.5" />
            <span>{document.breadcrumbs?.home || labels.home}</span>
          </a>
          <BreadcrumbArrow className="h-3.5 w-3.5 text-primary-600" />
          <span className="text-accent-300 font-semibold truncate max-w-[240px] sm:max-w-none">
            {document.breadcrumbs?.current || document.hero.title}
          </span>
        </nav>

        {/* Legal Entity Placeholder Warning Banner (Internal Gate Notice) */}
        {!hasCompleteDetails && (
          <div className="mb-10 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 backdrop-blur-md">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-amber-300">
                  {locale === 'de' ? 'Rechtlicher Bereitstellungshinweis' : locale === 'ar' ? 'تنبيه المراجعة القانونية' : 'Legal Provisioning Notice'}
                </h4>
                <p className="mt-1 text-xs text-amber-200/90 leading-relaxed">
                  {labels.entityPlaceholderNotice}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Document Header */}
        <header className="border-b border-white/10 pb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-accent-300">
            {documentType === 'privacy' ? <ShieldCheck className="h-3.5 w-3.5" /> : <FileText className="h-3.5 w-3.5" />}
            <span>{document.hero.eyebrow || labels.eyebrow}</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.15]">
            {document.hero.title}
          </h1>

          <p className="mt-4 max-w-3xl text-base text-primary-200/90 sm:text-lg leading-relaxed">
            {document.hero.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-primary-400 font-mono">
            <div>
              <span className="text-primary-500">{document.hero.lastUpdatedLabel || labels.lastUpdated}:</span> {document.hero.lastUpdated}
            </div>
            <span>•</span>
            <div>
              <span className="text-primary-500">{document.hero.appliesToLabel || labels.effectiveDate}:</span> {document.hero.appliesTo}
            </div>
          </div>
        </header>

        {/* Content Layout: Sticky Table of Contents + Main Articles */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Table of Contents (Desktop Sidebar) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
              <h3 className="text-sm font-bold tracking-wider uppercase text-accent-300">
                {document.tableOfContentsLabel || labels.tocTitle}
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {document.sections.map((section: LegalSection) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block py-1 text-primary-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-400 rounded"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
                {termsDoc?.modelWithdrawalForm && (
                  <li>
                    <a
                      href="#muster-widerrufsformular"
                      className="block py-1 text-accent-300 font-semibold transition-colors hover:text-accent-200"
                    >
                      {termsDoc.modelWithdrawalForm.title || labels.withdrawalFormTitle}
                    </a>
                  </li>
                )}
              </ul>

              {/* Quick Contact Card */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  {labels.contactTitle}
                </h4>
                <div className="mt-3 space-y-2 text-xs text-primary-300">
                  <div className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-accent-400 shrink-0" />
                    <a href={`mailto:${germanyLegalConfig.contactEmail}`} className="hover:text-white transition-colors underline">
                      {germanyLegalConfig.contactEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-3.5 w-3.5 text-accent-400 shrink-0" />
                    <span dir="ltr">
                      <bdi dir="ltr">&lrm;{germanyLegalConfig.whatsappDisplay}</bdi>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Legal Articles */}
          <main className="lg:col-span-8 space-y-12">
            {document.sections.map((section: LegalSection) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 rounded-3xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm"
              >
                <h2 className="text-xl font-bold text-white sm:text-2xl tracking-tight">
                  {section.title}
                </h2>

                <div className="mt-4 space-y-4 text-sm text-primary-200/90 leading-relaxed sm:text-base">
                  {section.paragraphs?.map((p: string, pIdx: number) => (
                    <p key={pIdx}>{p}</p>
                  ))}

                  {/* Bullet points if present */}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="my-4 space-y-2 ps-5 list-disc marker:text-accent-400 text-sm sm:text-base">
                      {section.bullets.map((bullet: string, bIdx: number) => (
                        <li key={bIdx} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Subsections if present */}
                  {section.subsections && section.subsections.length > 0 && (
                    <div className="mt-6 space-y-6 pt-4 border-t border-white/10">
                      {section.subsections.map((sub: LegalSubsection, sIdx: number) => (
                        <div key={sIdx} className="space-y-3">
                          <h3 className="text-base font-bold text-accent-300 sm:text-lg">
                            {sub.title}
                          </h3>
                          {sub.paragraphs?.map((subP: string, spIdx: number) => (
                            <p key={spIdx}>{subP}</p>
                          ))}
                          {sub.bullets && (
                            <ul className="space-y-1.5 ps-5 list-disc marker:text-accent-400 text-sm sm:text-base">
                              {sub.bullets.map((sb: string, sbIdx: number) => (
                                <li key={sbIdx}>{sb}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            ))}

            {/* Model Statutory Withdrawal Form (Terms only) */}
            {termsDoc?.modelWithdrawalForm && (
              <section
                id="muster-widerrufsformular"
                className="scroll-mt-28 rounded-3xl border-2 border-accent-400/30 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm shadow-xl shadow-accent-500/5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/20 text-accent-300">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white sm:text-2xl">
                      {termsDoc.modelWithdrawalForm.title}
                    </h2>
                    <p className="text-xs text-primary-300">
                      {locale === 'de' ? 'Gesetzliches Muster-Widerrufsformular gem. EGBGB Anlage 2' : locale === 'ar' ? 'نموذج الانسحاب القانوني القياسي' : 'Statutory Model Withdrawal Form'}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm text-primary-200/90 leading-relaxed italic">
                  {termsDoc.modelWithdrawalForm.intro}
                </p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-primary-900/60 p-6 font-mono text-xs sm:text-sm text-primary-100 space-y-4">
                  <div className="font-bold text-accent-300">
                    {termsDoc.modelWithdrawalForm.recipientLabel}
                  </div>
                  <div className="whitespace-pre-line text-primary-300 leading-relaxed">
                    {termsDoc.modelWithdrawalForm.recipientText.join('\n')}
                  </div>

                  <hr className="border-white/10 my-4" />

                  <div className="leading-relaxed">
                    {termsDoc.modelWithdrawalForm.noticeStatement}
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="text-primary-300">
                      <span className="text-white font-semibold">{termsDoc.modelWithdrawalForm.serviceDescriptionLabel}</span> ____________________________________
                    </div>
                    <div className="text-primary-300">
                      <span className="text-white font-semibold">{termsDoc.modelWithdrawalForm.orderedOnLabel}</span> _________________ / <span className="text-white font-semibold">{termsDoc.modelWithdrawalForm.receivedOnLabel}</span> _________________
                    </div>
                    <div className="text-primary-300">
                      <span className="text-white font-semibold">{termsDoc.modelWithdrawalForm.consumerNameLabel}</span> ____________________________________
                    </div>
                    <div className="text-primary-300">
                      <span className="text-white font-semibold">{termsDoc.modelWithdrawalForm.consumerAddressLabel}</span> ____________________________________
                    </div>
                    <div className="text-primary-300">
                      <span className="text-white font-semibold">{termsDoc.modelWithdrawalForm.signatureNotice}</span> ____________________________________
                    </div>
                    <div className="text-primary-300">
                      <span className="text-white font-semibold">{termsDoc.modelWithdrawalForm.dateLabel}</span> ____________________________________
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Closing / Contact Section */}
            {document.closing && (
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white">
                  {document.closing.title}
                </h3>
                <p className="mt-2 text-sm text-primary-200/90 leading-relaxed">
                  {document.closing.description}
                </p>
                <div className="mt-4">
                  <a
                    href={`mailto:${document.closing.contactLabel}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent-300 hover:text-accent-200 underline"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{document.closing.contactLabel}</span>
                  </a>
                </div>
              </div>
            )}

            {/* Bottom Footer Back Link */}
            <div className="pt-8 flex items-center justify-between border-t border-white/10">
              <a
                href={getMarketLocalePath('germany', locale)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent-300 hover:text-accent-200 transition-colors"
              >
                <BackIcon className="h-4 w-4" />
                <span>{labels.backToHome}</span>
              </a>

              <span className="text-xs text-primary-400">
                Success Path Mentors Europe · {new Date().getFullYear()}
              </span>
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}

import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { createLoader } from './ts-loader.mjs';

const require = createRequire(import.meta.url);
const React = require('react');

// Inspect component output, including text, URLs, styles and child props.
// Framework context is deterministic; this is not a browser interaction test.
function normalize(value) {
  if (React.isValidElement(value)) {
    const type = value.type;
    return {
      type: typeof type === 'string' ? type : type.displayName ?? type.name ?? String(type.$$typeof ?? type),
      props: normalize(value.props),
    };
  }
  if (typeof value === 'function') return '[callback]';
  if (Array.isArray(value)) return value.map(normalize);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, normalize(item)]));
  }
  return value;
}

export async function captureMarketOutput(root, locale) {
  const translator = Object.assign((key, values) => `${key}${values ? JSON.stringify(values) : ''}`, {
    raw: () => [],
  });
  const load = createLoader(root, {
    react: {
      ...React,
      useState: (initial) => [typeof initial === 'function' ? initial() : initial, () => {}],
      useRef: (current) => ({ current }), useId: () => 'stable-id',
      useCallback: (callback) => callback, useEffect: () => {},
    },
    'next-intl/server': {
      getLocale: async () => locale, getTranslations: async () => translator,
      getMessages: async () => ({}), setRequestLocale: () => {},
    },
    'next-intl': { NextIntlClientProvider: 'intl-provider', useLocale: () => locale },
    'next/navigation': { notFound: () => { throw new Error('notFound'); }, redirect: () => { throw new Error('redirect'); } },
    'next/link': 'next-link',
    'next/image': 'next-image',
    '@/i18n/navigation': { Link: 'localized-link' },
    // The layout's async descendants are checked separately below.
    '@/components/layout/site-header': { SiteHeader: 'site-header' },
    '@/components/layout/site-footer': { SiteFooter: 'site-footer' },
    '@/components/chat/n8n-chat': { N8nChat: 'chat' },
  });
  const outputs = {};
  for (const [path, name] of [
    ['src/components/layout/site-header.tsx', 'SiteHeader'],
    ['src/components/layout/site-footer.tsx', 'SiteFooter'],
    ['src/components/programme-francais/french-program-footer.tsx', 'FrenchProgramFooter'],
    ['src/components/sections/home/pricing.tsx', 'Pricing'],
  ]) {
    const tree = await load(path)[name]();
    outputs[name] = normalize(tree);
    if (name === 'SiteHeader') {
      function findMobile(node) {
        if (Array.isArray(node)) return node.map(findMobile).find(Boolean);
        if (!React.isValidElement(node)) return undefined;
        if (node.type.name === 'MobileNav') return node;
        return findMobile(node.props.children);
      }
      const mobile = findMobile(tree);
      if (!mobile) throw new Error('Missing mobile navigation output');
      outputs.MobileNav = normalize(mobile.type(mobile.props));
    }
  }
  const layout = load('src/app/[locale]/layout.tsx');
  const props = { params: Promise.resolve({ locale }), children: 'page-content' };
  outputs.layout = normalize(await layout.default(props));
  outputs.layoutMetadata = await layout.generateMetadata(props);
  outputs.homeMetadata = await load('src/app/[locale]/page.tsx').generateMetadata(props);
  outputs.pageMetadata = load('src/lib/seo/metadata.ts').buildPageMetadata({
    locale, seo: { title: 'Example', description: 'Description', pathname: '/about' },
  });
  outputs.englishSchema = load('src/lib/seo/english-subject-schema.ts').buildEnglishServiceSchema({
    locale, pathname: '/subjects/english', name: 'English', description: 'Description',
    overview: { totals: { gradeMin: 1, gradeMax: 12 }, strands: [] },
  });
  outputs.contactContent = load('src/content/pages/contact.ts');
  const contactPage = Object.values(outputs.contactContent).find((value) => value?.[locale]?.form);
  if (!contactPage) throw new Error('Missing localized contact form content');
  const contactTree = load('src/components/contact/contact-form.tsx').ContactForm({
    locale, content: contactPage[locale].form,
  });
  outputs.ContactForm = normalize(contactTree);
  const originalFetch = globalThis.fetch;
  const OriginalFormData = globalThis.FormData;
  const originalWindow = globalThis.window;
  const submission = {};
  try {
    globalThis.FormData = class extends OriginalFormData {
      constructor() {
        super();
        for (const [key, value] of Object.entries({
          contactName: ' Test Parent ', email: 'parent@example.com',
          phone: '+1 647 000 0000', whatsapp: '+1 647 000 0000',
          studentFirstName: 'Student', grade: '5', subject: 'Math & علوم',
          country: 'Canada', timeZone: 'America/Toronto',
          message: ' A question & سؤال\nsecond line ', consent: 'on',
        })) this.set(key, value);
      }
    };
    globalThis.fetch = async (url, options) => {
      const body = JSON.parse(options.body);
      delete body.startedAt; // Wall-clock anti-spam timestamp is intentionally dynamic.
      submission.request = { url, ...options, body };
      return { ok: true, json: async () => ({ ok: true, inquiryId: 'SPM-TEST' }) };
    };
    globalThis.window = {
      setTimeout: (callback, delay) => { submission.delay = delay; callback(); },
      location: { assign: (href) => { submission.redirect = href; } },
    };
    await contactTree.props.onSubmit({
      preventDefault: () => {}, currentTarget: { reset: () => { submission.reset = true; } },
    });
    if (!submission.redirect?.startsWith('https://wa.me/')) throw new Error('Contact submission did not prepare WhatsApp');
    outputs.contactSubmission = submission;
  } finally {
    globalThis.fetch = originalFetch;
    globalThis.FormData = OriginalFormData;
    if (originalWindow === undefined) delete globalThis.window;
    else globalThis.window = originalWindow;
  }
  outputs.site = load('src/config/site.ts').siteConfig;
  outputs.constants = load('src/lib/constants.ts');
  outputs.pricing = load('src/content/pricing-plans.ts');
  outputs.manifest = load('src/app/manifest.ts').default();
  outputs.llms = await load('src/app/llms.txt/route.ts').GET().text();
  const whatsapp = load('src/lib/whatsapp.ts');
  outputs.whatsapp = [
    whatsapp.buildWhatsAppHref('  Hello & مرحبا?\nTest  '),
    ...['en', 'ar', 'fr'].flatMap((language) => [
      whatsapp.buildWhatsAppHref(whatsapp.buildTrialLessonMessage(language)),
      whatsapp.buildWhatsAppHref(whatsapp.buildTrialLessonMessage(language, { subject: ' Math & علوم ', location: ' Toronto ' })),
      whatsapp.buildWhatsAppHref(whatsapp.buildGeneralInquiryMessage(language, ' Course & سؤال ')),
    ]),
    ...['en', 'ar'].map((language) => whatsapp.buildWhatsAppHref(whatsapp.buildPackageInquiryMessage(language, 'Progress', 8))),
  ];
  // Existing footers show the current year. Avoid a yearly snapshot update.
  return Object.fromEntries(Object.entries(outputs).map(([key, value]) => {
    const serialized = JSON.stringify(value).replaceAll(String(new Date().getFullYear()), '<current-year>');
    return [key, createHash('sha256').update(serialized).digest('hex')];
  }));
}

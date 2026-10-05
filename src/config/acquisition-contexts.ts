export interface AcquisitionContext {
  id: string;
  whatsapp: {
    locationContext: string | undefined;
  };
  heroOverrides?: {
    eyebrow: string;
    heading: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  reassurance?: string;
}

export function parseAcquisitionContext(value: unknown): AcquisitionContext | undefined {
  if (typeof value !== 'string') return undefined;

  const knownContexts: Record<string, AcquisitionContext> = {
    ontario: {
      id: 'ontario',
      whatsapp: { locationContext: 'Ontario' },
      heroOverrides: {
        eyebrow: 'Ontario Online Tutoring • Grades 1–12',
        heading: '1-to-1 Online Tutoring in Ontario for Grades 1–12',
        subheading: 'Personalized Math, English, Science and French tutoring aligned with the Ontario curriculum.',
        ctaPrimary: 'Chat on WhatsApp',
        ctaSecondary: 'Book a Free Trial',
      },
      reassurance: 'Ontario curriculum support • Serving families internationally',
    },
  };

  return knownContexts[value];
}

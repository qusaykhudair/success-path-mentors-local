export interface AcquisitionContext {
  id: string;
  whatsapp: {
    locationContext: string | undefined;
  };
  reassurance?: string;
}

export function parseAcquisitionContext(value: unknown): AcquisitionContext | undefined {
  if (typeof value !== 'string') return undefined;

  const knownContexts: Record<string, AcquisitionContext> = {
    ontario: {
      id: 'ontario',
      whatsapp: { locationContext: 'Ontario' },
      reassurance: 'Ontario curriculum support • Serving families internationally',
    },
  };

  return knownContexts[value];
}

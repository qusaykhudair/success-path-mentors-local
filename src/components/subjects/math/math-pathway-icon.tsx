import {
  Calculator,
  ChartNoAxesCombined,
  ChartSpline,
  Coins,
  DivideCircle,
  Shapes,
  Sigma,
  Variable,
} from 'lucide-react';

import type {
  MathPathwayIconKey,
} from '@/types/math-curriculum';

const iconByKey = {
  calculator: Calculator,
  'divide-circle':
    DivideCircle,
  variable: Variable,
  'chart-spline':
    ChartSpline,
  shapes: Shapes,
  chart:
    ChartNoAxesCombined,
  sigma: Sigma,
  coins: Coins,
} satisfies Record<
  MathPathwayIconKey,
  typeof Calculator
>;

interface MathPathwayIconProps {
  iconKey:
    MathPathwayIconKey;
  className?: string;
}

export function MathPathwayIcon({
  iconKey,
  className = '',
}: MathPathwayIconProps) {
  const Icon =
    iconByKey[iconKey];

  return (
    <Icon
      aria-hidden="true"
      className={className}
      strokeWidth={1.8}
    />
  );
}
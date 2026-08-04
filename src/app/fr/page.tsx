import {
  redirect,
} from 'next/navigation';

import {
  programmeFrancaisRoutes,
} from '@/lib/programme-francais/routes';

export default function FrenchRootPage() {
  redirect(
    programmeFrancaisRoutes.home
  );
}

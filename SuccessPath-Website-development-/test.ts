import { getPathname } from './src/i18n/navigation';
console.log(getPathname({ locale: 'ar', href: { pathname: '/subjects/[subject]', params: { subject: 'math' } } }));

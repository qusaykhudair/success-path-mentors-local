import { Challenges } from '@/components/sections/home/challenges';
import { Faq } from '@/components/sections/home/faq';
import { FinalCta } from '@/components/sections/home/final-cta';
import { Hero } from '@/components/sections/home/hero';
import { SupportedCountries } from '@/components/ui/supported-countries';
import { Pricing } from '@/components/sections/home/pricing';
import { Programs } from '@/components/sections/home/programs';
import { Services } from '@/components/sections/home/services';
import { Steps } from '@/components/sections/home/steps';
import { Testimonials } from '@/components/sections/home/testimonials';
import { VideoTestimonials } from '@/components/sections/home/video-testimonials';
import { LocalAvailabilityBlock } from '@/components/local/local-availability-block';
import type { AcquisitionContext } from '@/config/acquisition-contexts';

export function HomePageContent({ 
  locale, 
  acquisitionContext 
}: { 
  locale: string; 
  acquisitionContext?: AcquisitionContext; 
}) {
  return (
    <main className="flex flex-col gap-16 pb-16">
      <Hero acquisitionContext={acquisitionContext} />
      <SupportedCountries locale={locale as 'en' | 'ar'} />
      <Programs />
      <div className="content-auto"><Steps /></div>
      <div className="content-auto"><Services /></div>
      <div className="content-auto"><Challenges /></div>
      <div className="content-auto"><Testimonials /></div>
      <div className="content-auto"><VideoTestimonials /></div>
      <div className="content-auto"><Pricing /></div>
      <div className="content-auto"><LocalAvailabilityBlock locale={locale} /></div>
      <div className="content-auto"><Faq /></div>
      <div className="content-auto"><FinalCta /></div>
    </main>
  );
}

import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/shared/seo/build-metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { Clock, DollarSign, Users } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "becomeTutorPage.hero" });
  
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/become-tutor",
    locale: locale as Locale,
  });
}

export default async function BecomeTutorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations({ locale, namespace: "becomeTutorPage" });
  const tForm = await getTranslations({ locale, namespace: "forms.becomeTutor" });
  const tNav = await getTranslations({ locale, namespace: "navigation" });
  const tFormContact = await getTranslations({ locale, namespace: "forms.contact" });

  return (
    <>
      <Breadcrumb items={[{ label: tNav("becomeTutor"), href: "/become-tutor" }]} locale={locale} />
      
      <section className="bg-surface py-16 sm:py-24">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-10">
            <SectionHeading 
              title={t("hero.title")} 
              description={t("hero.description")} 
              align="start"
            />
            
            <div className="flex flex-col gap-8">
              <h3 className="text-foreground text-xl font-bold">{t("benefits.title")}</h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-full">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">{t("benefits.flexible")}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-full">
                    <DollarSign className="size-5" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">{t("benefits.competitive")}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-full">
                    <Users className="size-5" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">{t("benefits.support")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-border bg-muted/40 rounded-card border p-8">
            <h2 className="text-foreground mb-6 text-2xl font-bold">{tForm("title")}</h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-foreground text-sm font-medium">{tFormContact("nameLabel")}</label>
                <Input id="name" type="text" placeholder={tFormContact("nameLabel")} required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-foreground text-sm font-medium">{tFormContact("emailLabel")}</label>
                <Input id="email" type="email" placeholder={tFormContact("emailLabel")} required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-foreground text-sm font-medium">{tFormContact("phoneLabel")}</label>
                <Input id="phone" type="tel" placeholder={tFormContact("phoneLabel")} />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="resume" className="text-foreground text-sm font-medium">Resume/CV URL</label>
                <Input id="resume" type="url" placeholder="Link to your LinkedIn or resume" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-foreground text-sm font-medium">Why do you want to tutor with us?</label>
                <textarea 
                  id="message" 
                  className="border-border bg-surface text-foreground placeholder:text-muted-foreground rounded-input focus:border-primary focus:ring-primary/20 min-h-[120px] w-full border px-3.5 py-3 text-sm transition-colors duration-200 outline-none focus:ring-2"
                  placeholder="Tell us about your experience..."
                  required
                />
              </div>
              
              <Button type="submit" size="lg" className="mt-2 w-full">{tForm("submit")}</Button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}

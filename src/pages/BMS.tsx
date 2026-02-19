import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useTranslation } from "react-i18next";
import { ComponentTitle } from "@/entities/component-title";

const BMS = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-layout">
      <SEOHead />
      <div className="page-content">
        <Header />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6 sm:px-12">
            <ComponentTitle title={t("servicePages.bms.title")} />
            <ScrollReveal direction="up" delay={0.1}>
              <div className="max-w-4xl mx-auto mt-12">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                    {t("servicePages.bms.intro")}
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                    {t("servicePages.bms.systems")}
                  </p>
                  <ul className="list-disc list-inside mb-6 text-lg text-muted-foreground space-y-2">
                    {t("servicePages.bms.systemsList", { returnObjects: true }).map(
                      (system: string, index: number) => (
                        <li key={index}>{system}</li>
                      ),
                    )}
                  </ul>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                    {t("servicePages.bms.benefits")}
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                    {t("servicePages.bms.description")}
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                    {t("servicePages.bms.audit")}
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                    {t("servicePages.bms.manufacturers")}
                  </p>
                  <ul className="list-disc list-inside mb-6 text-lg text-muted-foreground space-y-2">
                    {t("servicePages.bms.manufacturersList", { returnObjects: true }).map(
                      (manufacturer: string, index: number) => (
                        <li key={index}>{manufacturer}</li>
                      ),
                    )}
                  </ul>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {t("servicePages.bms.closing")}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BMS;

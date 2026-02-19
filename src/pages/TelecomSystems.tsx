import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useTranslation } from "react-i18next";
import { ComponentTitle } from "@/entities/component-title";

const TelecomSystems = () => {
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
            <ComponentTitle title={t("servicePages.telecom.title")} />
            <ScrollReveal direction="up" delay={0.1}>
              <div className="max-w-4xl mx-auto mt-12">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {t("servicePages.telecom.description")}
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

export default TelecomSystems;

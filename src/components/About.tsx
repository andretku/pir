import ScrollReveal from "@/components/animations/ScrollReveal";
import { useTranslation } from "react-i18next";
import { ComponentTitle } from "@/entities/component-title";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="pt-20">
      <div className="container mx-auto px-6 sm:px-12">
        <ComponentTitle title={t("about.title")} subtitle={t("about.subtitle")} />

        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed">
            <p className="mb-4">{t("about.intro")}</p>
            <p className="mb-4">{t("about.philosophy")}</p>
            <p>{t("about.closing")}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;

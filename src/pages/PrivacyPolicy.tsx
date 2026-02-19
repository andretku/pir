import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-layout">
      <SEOHead />
      <div className="page-content">
        <Header />
        <main className="container mx-auto px-6 sm:px-12 pt-20 pb-4 md:pt-24 md:pb-10">
          <div className="max-w-4xl mx-auto ">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              {t("privacyPolicy.title")}
            </h1>

            <section className="privacy-section">
              <h2 className="privacy-heading">{t("privacyPolicy.sections.section1.title")}</h2>
              <p className="privacy-text">{t("privacyPolicy.sections.section1.content")}</p>
            </section>

            <section className="privacy-section">
              <h2 className="privacy-heading">{t("privacyPolicy.sections.section2.title")}</h2>
              <p className="privacy-text mb-4">{t("privacyPolicy.sections.section2.intro")}</p>
              <ul className="privacy-list">
                {(
                  t("privacyPolicy.sections.section2.items", { returnObjects: true }) as string[]
                ).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="privacy-section">
              <h2 className="privacy-heading">{t("privacyPolicy.sections.section3.title")}</h2>
              <p className="privacy-text mb-4">{t("privacyPolicy.sections.section3.intro")}</p>
              <ul className="privacy-list">
                {(
                  t("privacyPolicy.sections.section3.items", { returnObjects: true }) as string[]
                ).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="privacy-section">
              <h2 className="privacy-heading">{t("privacyPolicy.sections.section4.title")}</h2>
              <p className="privacy-text">{t("privacyPolicy.sections.section4.content")}</p>
            </section>

            <section className="privacy-section">
              <h2 className="privacy-heading">{t("privacyPolicy.sections.section5.title")}</h2>
              <p className="privacy-text">{t("privacyPolicy.sections.section5.content")}</p>
            </section>

            <section className="privacy-section">
              <h2 className="privacy-heading">{t("privacyPolicy.sections.section6.title")}</h2>
              <p className="privacy-text mb-4">{t("privacyPolicy.sections.section6.intro")}</p>
              <ul className="privacy-list">
                {(
                  t("privacyPolicy.sections.section6.items", { returnObjects: true }) as string[]
                ).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="privacy-text mt-4">{t("privacyPolicy.sections.section6.closing")}</p>
            </section>

            <section className="privacy-section">
              <h2 className="privacy-heading">{t("privacyPolicy.sections.section7.title")}</h2>
              <p className="privacy-text mb-4">{t("privacyPolicy.sections.section7.intro")}</p>
              <ul className="privacy-list">
                {(
                  t("privacyPolicy.sections.section7.items", { returnObjects: true }) as string[]
                ).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="privacy-text mt-4">{t("privacyPolicy.sections.section7.closing")}</p>
            </section>

            <section className="privacy-section">
              <h2 className="privacy-heading">{t("privacyPolicy.sections.section8.title")}</h2>
              <p className="privacy-text">{t("privacyPolicy.sections.section8.content")}</p>
            </section>

            <section className="privacy-section">
              <h2 className="privacy-heading">{t("privacyPolicy.sections.section9.title")}</h2>
              <p className="privacy-text">{t("privacyPolicy.sections.section9.content")}</p>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

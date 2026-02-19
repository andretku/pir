import { useEffect, useCallback, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useTranslation } from "react-i18next";
import { ComponentTitle } from "@/entities/component-title";
import { Mail, Phone, MapPin } from "lucide-react";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const ContactPage = () => {
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState(false);

  const handleAddressClick = useCallback(async () => {
    const address = t("contact.address");
    try {
      await navigator.clipboard.writeText(address);
      setIsCopied(true);
    } catch (error) {
      console.error("Failed to copy address:", error);
    }
  }, [t]);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const companyName = t("footer.company");
  const address = t("contact.address");
  const mapQuery = encodeURIComponent(`${address}+(${companyName})`);

  return (
    <div className="page-layout">
      <SEOHead />
      <div className="page-content">
        <Header />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6 sm:px-12">
            <ComponentTitle title={t("contact.title")} className="text-center mx-auto" />
            <ScrollReveal direction="up" delay={0.1}>
              <div className="max-w-5xl mx-auto mt-12">
                <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-3 gap-6 mb-12">
                  <StaggerItem>
                    <a
                      href={`tel:${t("contact.phone").replace(/\s/g, "")}`}
                      className="flex md:flex-col items-center gap-3 p-2 md:p-6 rounded-lg bg-card hover:bg-card/80 transition-all hover:-translate-y-1 group h-full"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div className="font-medium text-center">{t("contact.phone")}</div>
                    </a>
                  </StaggerItem>

                  <StaggerItem>
                    <a
                      href={`mailto:${t("contact.email")}`}
                      className="flex md:flex-col items-center gap-3 p-2 md:p-6 rounded-lg bg-card hover:bg-card/80 transition-all hover:-translate-y-1 group h-full"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div className="font-medium text-center break-all">{t("contact.email")}</div>
                    </a>
                  </StaggerItem>

                  <StaggerItem>
                    <button
                      onClick={handleAddressClick}
                      className="flex md:flex-col items-center gap-3 p-2 md:p-6 rounded-lg bg-card hover:bg-card/80 transition-all hover:-translate-y-1 group h-full w-full cursor-pointer relative"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="font-medium text-center relative">
                        {t("contact.address")}
                        {isCopied && (
                          <span className="absolute -top-10 md:-top-20 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1.5 rounded-md whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 z-50 shadow-lg">
                            {t("contact.copied")}
                          </span>
                        )}
                      </div>
                    </button>
                  </StaggerItem>
                </StaggerContainer>

                <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    style={{ border: 0, height: "400px" }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                    title={`${companyName} - ${address}`}
                  />
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

export default ContactPage;

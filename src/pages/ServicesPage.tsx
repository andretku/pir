import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import Services from "@/components/Services";
import { serviceContentConfig } from "@/shared/config/service-content";
import { ServiceContentBlocksRenderer } from "@/shared/ui/ServiceContentRenderer";

const ServicesPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = useMemo(
    () => [
      {
        key: "security",
        title: t("services.items.security.title"),
        description: t("services.items.security.description"),
        image: "/images/services/security.jpg",
      },
      {
        key: "fire",
        title: t("services.items.fire.title"),
        description: t("services.items.fire.description"),
        image: "/images/services/fire.jpg",
      },
      {
        key: "bms",
        title: t("services.items.bms.title"),
        description: t("services.items.bms.description"),
        image: "/images/services/bms.jpg",
      },
      {
        key: "telecom",
        title: t("services.items.telecom.title"),
        description: t("services.items.telecom.description"),
        image: "/images/services/telecom.jpg",
      },
      {
        key: "produkty",
        title: t("services.items.produkty.title"),
        description: t("services.items.produkty.description"),
        image: "/images/services/produkty.jpg",
      },
    ],
    [t],
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    const hash = location.hash.replace("#", "");
    if (hash) {
      const serviceIndex = services.findIndex((service) => service.key === hash);
      if (serviceIndex !== -1) {
        setExpandedService(serviceIndex);
      }
    }
  }, [location.hash, services]);

  const toggleService = (index: number) => {
    setExpandedService((prev) => (prev === index ? null : index));
  };

  const renderServiceContent = (serviceKey: string) => {
    const config = serviceContentConfig[serviceKey];
    if (!config) return null;

    const basePath = `servicePages.${serviceKey}`;

    return <ServiceContentBlocksRenderer blocks={config.blocks} basePath={basePath} />;
  };

  return (
    <div className="page-layout">
      <SEOHead />
      <div className="page-content">
        <Header />
        <section className="pt-32 pb-20">
          <Services
            services={services}
            onServiceClick={toggleService}
            expandedService={expandedService}
            className="pt-0"
          />

          <ScrollReveal direction="up" delay={0.2}>
            {expandedService !== null && (
              <div className="max-w-4xl mx-auto mt-12 px-4">
                <div className="p-6 rounded-lg bg-card border border-border shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">
                    {t(`servicePages.${services[expandedService].key}.title`)}
                  </h3>
                  {renderServiceContent(services[expandedService].key)}
                </div>
              </div>
            )}
          </ScrollReveal>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;

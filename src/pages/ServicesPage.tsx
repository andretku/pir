import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import Services from "@/components/Services";

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
    const basePath = `servicePages.${serviceKey}`;

    if (serviceKey === "security") {
      return (
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t(`${basePath}.intro`)}
          </p>
          <ul className="list-disc list-inside mb-6 text-lg text-muted-foreground space-y-2">
            {(t(`${basePath}.systems`, { returnObjects: true }) as string[]).map(
              (system: string, idx: number) => (
                <li key={idx}>{system}</li>
              ),
            )}
          </ul>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t(`${basePath}.description`)}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t(`${basePath}.audit`)}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
            {t(`${basePath}.manufacturers`)}
          </p>
          <ul className="list-disc list-inside mb-6 text-lg text-muted-foreground space-y-2">
            {(t(`${basePath}.manufacturersList`, { returnObjects: true }) as string[]).map(
              (manufacturer: string, idx: number) => (
                <li key={idx}>{manufacturer}</li>
              ),
            )}
          </ul>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t(`${basePath}.enterprise`)}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t(`${basePath}.closing`)}
          </p>
        </div>
      );
    }

    if (serviceKey === "fire") {
      return (
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t(`${basePath}.intro`)}
          </p>
          <ul className="list-disc list-inside mb-6 text-lg text-muted-foreground space-y-2">
            {(t(`${basePath}.systems`, { returnObjects: true }) as string[]).map(
              (system: string, idx: number) => (
                <li key={idx}>{system}</li>
              ),
            )}
          </ul>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t(`${basePath}.description`)}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t(`${basePath}.audit`)}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
            {t(`${basePath}.manufacturers`)}
          </p>
          <ul className="list-disc list-inside mb-6 text-lg text-muted-foreground space-y-2">
            {(t(`${basePath}.manufacturersList`, { returnObjects: true }) as string[]).map(
              (manufacturer: string, idx: number) => (
                <li key={idx}>{manufacturer}</li>
              ),
            )}
          </ul>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t(`${basePath}.closing`)}
          </p>
        </div>
      );
    }

    if (serviceKey === "bms") {
      return (
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t(`${basePath}.intro`)}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
            {t(`${basePath}.systems`)}
          </p>
          <ul className="list-disc list-inside mb-6 text-lg text-muted-foreground space-y-2">
            {(t(`${basePath}.systemsList`, { returnObjects: true }) as string[]).map(
              (system: string, idx: number) => (
                <li key={idx}>{system}</li>
              ),
            )}
          </ul>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t(`${basePath}.benefits`)}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t(`${basePath}.description`)}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t(`${basePath}.audit`)}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
            {t(`${basePath}.manufacturers`)}
          </p>
          <ul className="list-disc list-inside mb-6 text-lg text-muted-foreground space-y-2">
            {(t(`${basePath}.manufacturersList`, { returnObjects: true }) as string[]).map(
              (manufacturer: string, idx: number) => (
                <li key={idx}>{manufacturer}</li>
              ),
            )}
          </ul>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t(`${basePath}.closing`)}
          </p>
        </div>
      );
    }

    if (serviceKey === "telecom") {
      return (
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t(`${basePath}.intro`)}
          </p>
          <ul className="list-disc list-inside mb-6 text-lg text-muted-foreground space-y-2">
            {(t(`${basePath}.systems`, { returnObjects: true }) as string[]).map(
              (system: string, idx: number) => (
                <li key={idx}>{system}</li>
              ),
            )}
          </ul>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t(`${basePath}.description`)}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t(`${basePath}.audit`)}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
            {t(`${basePath}.manufacturers`)}
          </p>
          <ul className="list-disc list-inside mb-6 text-lg text-muted-foreground space-y-2">
            {(t(`${basePath}.manufacturersList`, { returnObjects: true }) as string[]).map(
              (manufacturer: string, idx: number) => (
                <li key={idx}>{manufacturer}</li>
              ),
            )}
          </ul>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t(`${basePath}.closing`)}
          </p>
        </div>
      );
    }

    if (serviceKey === "produkty") {
      return (
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t(`${basePath}.intro`)}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t(`${basePath}.description`)}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
            {t(`${basePath}.applications`)}
          </p>
          <ul className="list-disc list-inside mb-6 text-lg text-muted-foreground space-y-2">
            {(t(`${basePath}.applicationsList`, { returnObjects: true }) as string[]).map(
              (application: string, idx: number) => (
                <li key={idx}>{application}</li>
              ),
            )}
          </ul>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t(`${basePath}.modules`)}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t(`${basePath}.modulesExample`)}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t(`${basePath}.closing`)}
          </p>
        </div>
      );
    }

    return null;
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
              <div className="max-w-4xl mx-auto mt-12">
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

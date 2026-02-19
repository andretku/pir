import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useTranslation } from "react-i18next";
import { ComponentTitle } from "@/entities/component-title";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import { useLocation } from "react-router";
import { cn } from "@/lib/utils";

const ServicesPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const services = useMemo(
    () => [
      {
        key: "security",
        title: t("services.items.security.title"),
        description: t("services.items.security.description"),
        image: "/images/services/security.jpg",
        link: "/systemy-bezpieczenstwa",
      },
      {
        key: "fire",
        title: t("services.items.fire.title"),
        description: t("services.items.fire.description"),
        image: "/images/services/fire.jpg",
        link: "/systemy-pozarowe",
      },
      {
        key: "bms",
        title: t("services.items.bms.title"),
        description: t("services.items.bms.description"),
        image: "/images/services/bms.jpg",
        link: "/bms",
      },
      {
        key: "telecom",
        title: t("services.items.telecom.title"),
        description: t("services.items.telecom.description"),
        image: "/images/services/telecom.jpg",
        link: "/systemy-teletechniczne",
      },
      {
        key: "produkty",
        title: t("services.items.produkty.title"),
        description: t("services.items.produkty.description"),
        image: "/images/services/produkty.jpg",
        link: "/produkty",
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

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

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
          <div className="container mx-auto px-6 sm:px-12">
            <ComponentTitle title={t("services.title")} />

            <StaggerContainer
              staggerDelay={0.1}
              className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-nowrap gap-3 mt-12"
            >
              {services.map((service, index) => (
                <StaggerItem key={index} className="lg:flex-1">
                  <button
                    onClick={() => toggleService(index)}
                    className={cn(
                      "group block relative overflow-hidden rounded-lg aspect-[4/3] lg:max-w-[300px] lg:max-h-[200px] hover:scale-105 transition-transform duration-300 w-full",
                      expandedService === index && "ring-2 ring-primary",
                    )}
                  >
                    <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-accent/20">
                      {!imageErrors[index] ? (
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={() => handleImageError(index)}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/30 to-accent/30" />
                      )}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                        <h3 className="text-white text-lg lg:text-base font-bold text-center px-4 z-10">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </button>
                </StaggerItem>
              ))}
            </StaggerContainer>

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
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;

import { useState, useMemo } from "react";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import { useTranslation } from "react-i18next";
import { ComponentTitle } from "@/entities/component-title";
import { Link } from "react-router";
import { cn } from "@/lib/utils";

interface Service {
  key: string;
  title: string;
  description?: string;
  image: string;
  link?: string;
}

interface ServicesProps {
  onServiceClick?: (index: number) => void;
  showTitle?: boolean;
  className?: string;
  expandedService?: number | null;
  services?: Service[];
}

const Services = ({
  onServiceClick,
  showTitle = true,
  className = "",
  expandedService = null,
  services: customServices,
}: ServicesProps) => {
  const { t } = useTranslation();
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const services = useMemo(() => {
    if (customServices) {
      return customServices;
    }

    return [
      {
        key: "security",
        title: t("services.items.security.title"),
        image: "/images/services/security.jpg",
        link: "/zakres-uslug#security",
      },
      {
        key: "fire",
        title: t("services.items.fire.title"),
        image: "/images/services/fire.jpg",
        link: "/zakres-uslug#fire",
      },
      {
        key: "bms",
        title: t("services.items.bms.title"),
        image: "/images/services/bms.jpg",
        link: "/zakres-uslug#bms",
      },
      {
        key: "telecom",
        title: t("services.items.telecom.title"),
        image: "/images/services/telecom.jpg",
        link: "/zakres-uslug#telecom",
      },
      {
        key: "produkty",
        title: t("services.items.produkty.title"),
        description: t("services.items.produkty.description"),
        image: "/images/services/produkty.jpg",
        link: "/zakres-uslug#produkty",
      },
    ];
  }, [t, customServices]);

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const renderServiceCard = (service: Service, index: number) => {
    const cardContent = (
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
    );

    const cardClassName = cn(
      "group block relative overflow-hidden rounded-lg max-[449px]:h-[100px] aspect-[4/3] lg:max-w-[300px] lg:max-h-[200px] hover:scale-105 transition-transform duration-300 w-full",
      expandedService === index && "ring-2 ring-primary",
    );

    if (onServiceClick) {
      return (
        <button onClick={() => onServiceClick(index)} className={cardClassName}>
          {cardContent}
        </button>
      );
    }

    if (service.link) {
      return (
        <Link to={service.link} className={cardClassName}>
          {cardContent}
        </Link>
      );
    }

    return <div className={cardClassName}>{cardContent}</div>;
  };

  return (
    <section id="services" className={cn("pt-20", className)}>
      <div className="container mx-auto px-6 sm:px-12">
        {showTitle && <ComponentTitle title={t("services.title")} />}

        <StaggerContainer
          staggerDelay={0.1}
          className={cn(
            "grid grid-cols-1 min-[450px]:grid-cols-2 lg:flex lg:flex-nowrap gap-3 mt-12",
            !onServiceClick && "gap-6",
          )}
        >
          {services.map((service, index) => (
            <StaggerItem key={index} className="lg:flex-1">
              {renderServiceCard(service, index)}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Services;

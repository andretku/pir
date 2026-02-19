import { useState } from "react";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import { useTranslation } from "react-i18next";
import { ComponentTitle } from "@/entities/component-title";
import { Link } from "react-router";

const Services = () => {
  const { t } = useTranslation();
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const services = [
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
  ];

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section id="services" className="pt-20">
      <div className="container mx-auto px-6 sm:px-12">
        <ComponentTitle title={t("services.title")} />

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-nowrap gap-6 mt-12"
        >
          {services.map((service, index) => (
            <StaggerItem key={index} className="lg:flex-1">
              <Link
                to={service.link}
                className="group block relative overflow-hidden rounded-lg aspect-[4/3] lg:max-w-[300px] lg:max-h-[200px] hover:scale-105 transition-transform duration-300"
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
                    <h3 className="text-white text-lg font-bold text-center px-4 z-10">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Services;

import { useTranslation } from "react-i18next";
import { ComponentTitle } from "@/entities/component-title";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Partners = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  const partners = [
    { name: "Partner 1", image: "/images/partners/1.png" },
    { name: "Partner 2", image: "/images/partners/2.png" },
    { name: "Partner 3", image: "/images/partners/3.png" },
    { name: "Partner 4", image: "/images/partners/4.png" },
    { name: "Partner 5", image: "/images/partners/5.png" },
    { name: "Partner 6", image: "/images/partners/6.png" },
    { name: "Partner 7", image: "/images/partners/7.png" },
    { name: "Partner 8", image: "/images/partners/8.png" },
    { name: "Partner 9", image: "/images/partners/9.png" },
    { name: "Partner 10", image: "/images/partners/10.png" },
    { name: "Partner 11", image: "/images/partners/11.png" },
    { name: "Partner 12", image: "/images/partners/12.png" },
    { name: "Partner 13", image: "/images/partners/13.png" },
  ];

  return (
    <section id="partners" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-6 sm:px-12">
        <ComponentTitle title={t("partners.title")} subtitle={t("partners.subtitle")} />
        <div className="mt-12 overflow-hidden">
          <div className="flex animate-scroll gap-8">
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;

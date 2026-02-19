import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SITE_URL = "https://pir.com.pl";

const SEOHead = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    try {
      const langMap: Record<string, string> = {
        pl: "pl_PL",
        en: "en_US",
        ua: "ua_UA",
      };

      const locale = langMap[currentLang] || "pl_PL";
      const htmlElement = document.documentElement;
      if (htmlElement) {
        htmlElement.setAttribute("lang", currentLang);
      }

      const updateMetaTag = (property: string | null, name: string | null, content: string) => {
        try {
          let selector = "";
          if (property) {
            selector = `meta[property="${property}"]`;
          } else if (name) {
            selector = `meta[name="${name}"]`;
          }

          let element = document.querySelector(selector) as HTMLMetaElement;
          if (!element) {
            element = document.createElement("meta");
            if (property) {
              element.setAttribute("property", property);
            }
            if (name) {
              element.setAttribute("name", name);
            }
            if (document.head) {
              document.head.appendChild(element);
            }
          }
          if (element) {
            element.setAttribute("content", content);
          }
        } catch (error) {
          console.warn("Error updating meta tag:", error);
        }
      };

      const updateLinkTag = (rel: string, href: string, hreflang?: string) => {
        try {
          let selector = `link[rel="${rel}"]`;
          if (hreflang) {
            selector += `[hreflang="${hreflang}"]`;
          }
          let element = document.querySelector(selector) as HTMLLinkElement;
          if (!element && hreflang) {
            element = document.createElement("link");
            element.setAttribute("rel", rel);
            element.setAttribute("hreflang", hreflang);
            if (document.head) {
              document.head.appendChild(element);
            }
          } else if (!element) {
            element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
            if (!element) {
              element = document.createElement("link");
              element.setAttribute("rel", rel);
              if (document.head) {
                document.head.appendChild(element);
              }
            }
          }
          if (element) {
            element.setAttribute("href", href);
          }
        } catch (error) {
          console.warn("Error updating link tag:", error);
        }
      };

      const canonicalUrl =
        currentLang === "pl"
          ? `${SITE_URL}/`
          : `${SITE_URL}/?lang=${currentLang === "ua" ? "ua" : "en"}`;

      updateLinkTag("canonical", canonicalUrl);
      updateMetaTag("og:locale", null, locale);
      updateMetaTag("og:url", null, canonicalUrl);
    } catch (error) {
      console.error("Error in SEOHead useEffect:", error);
    }
  }, [currentLang]);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "PIR Sp. z o.o.",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/logo.png`,
          width: 512,
          height: 512,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "ul. Stępińska 22/30",
          addressLocality: "Warszawa",
          postalCode: "00-739",
          addressCountry: "PL",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+48222809300",
          email: "biuro@pir.com.pl",
          contactType: "Customer Service",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "PIR Sp. z o.o. - Systemy bezpieczeństwa i ochrony przeciwpożarowej",
        description:
          "Firma PIR służy pomocą w obszarze elektronicznych systemów zabezpieczeń i ochrony przeciwpożarowej. Projektowanie, instalacja, modernizacja i serwis systemów bezpieczeństwa, pożarowych, BMS oraz teletechnicznych.",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: ["pl", "en", "ua"],
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service`,
        serviceType: "Security Systems and Fire Protection",
        provider: {
          "@id": `${SITE_URL}/#organization`,
        },
        areaServed: {
          "@type": "Country",
          name: "Poland",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Usługi systemów bezpieczeństwa i ochrony przeciwpożarowej",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Systemy bezpieczeństwa SKD, SSWiN oraz CCTV",
                description:
                  "Projektowanie, modernizowanie, serwisowanie i wykonywanie instalacji systemów kontroli dostępu, sygnalizacji włamania i napadu oraz telewizji przemysłowej",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Systemy pożarowe i ostrzegawcze SSP i DSO",
                description:
                  "Projektowanie, wykonanie, modernizacja i serwis systemów sygnalizacji pożaru oraz dźwiękowych systemów ostrzegawczych",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "BMS - System zarządzania budynkiem",
                description:
                  "Projektowanie, wykonanie, modernizacja i serwis systemów automatyki budynkowej integrujących wszystkie systemy sterowania funkcjami technicznymi budynku",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Systemy teletechniczne",
                description:
                  "Instalacje domofonowe, video-domofonowe, interkomowe, instalacje radio i telewizja, system komunikacji bezprzewodowej, sieć transmisji danych, sieci komputerowe",
              },
            },
          ],
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "PIR Sp. z o.o. - Systemy bezpieczeństwa i ochrony przeciwpożarowej",
        description:
          "Firma PIR służy pomocą w obszarze elektronicznych systemów zabezpieczeń i ochrony przeciwpożarowej. Zlecenia realizujemy począwszy od samego projektu, przez dobór odpowiednich urządzeń, instalację systemu oraz serwis oferowanej infrastruktury teletechnicznej.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#service`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/logo.png`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default SEOHead;

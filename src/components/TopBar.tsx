import { Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const TopBar = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed top-[70px] md:top-[95px] left-0 right-0 z-40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 sm:px-12 py-4">
        <div className="flex items-center justify-between gap-2 text-sm">
          <a
            href={`tel:${t("contact.phone").replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4 flex-shrink-0" />
            <span className="whitespace-nowrap">{t("contact.phone")}</span>
          </a>
          <a
            href={`mailto:${t("contact.email")}`}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4 flex-shrink-0" />
            <span className="whitespace-nowrap">{t("contact.email")}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-4 md:py-6 border-t border-border text-muted-foreground">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="text-center md:text-start">
            <div className="font-semibold mb-1 text-base">{t("footer.company")}</div>
            <div className="text-sm">{t("footer.address")}</div>
            <div className="text-sm">{t("footer.phone")}</div>
            <a
              href={`mailto:${t("contact.email")}`}
              className="text-sm hover:text-foreground transition-colors"
            >
              {t("footer.email")}
            </a>
          </div>
          <div className="text-center md:text-end flex flex-col gap-2">
            <div className="text-sm">
              <div>NIP: 5213815786</div>
              <div>REGON: 369610824</div>
              <div>KRS: 0000721286</div>
            </div>
            <div>
              {t("footer.copyright").replace("{currentYear}", new Date().getFullYear().toString())}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

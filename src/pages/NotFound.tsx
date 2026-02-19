import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">{t("notFound.title")}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t("notFound.message")}</p>
        <Button size="lg" className="group text-base" onClick={handleGoHome}>
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {t("notFound.link")}
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

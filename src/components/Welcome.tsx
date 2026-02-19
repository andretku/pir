import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[160px] md:pt-[220px]">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="space-y-6 text-center">
              <h1 className="text-2xl md:text-3xl font-bold pt-2 md:pt-0">{t("welcome.title")}</h1>
              <div className="text-lg md:text-xl px-4 sm:px-10 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t("welcome.description")}
              </div>
              <div className="pt-4 text-right">
                <Link to="/o-nas">
                  <Button
                    size="lg"
                    className="group text-base bg-card text-card-foreground hover:bg-card/80"
                  >
                    {t("welcome.readMore")}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

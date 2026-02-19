import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import { useTranslation } from "react-i18next";

const Benefit = () => {
  const { t } = useTranslation();

  const benefits = [
    t("benefit.option1"),
    t("benefit.option2"),
    t("benefit.option3"),
    t("benefit.option4"),
    t("benefit.option5"),
  ];

  return (
    <section className="pt-20">
      <div className="container max-w-2xl mx-auto px-6 sm:px-12">
        <StaggerContainer staggerDelay={0.15}>
          {benefits.map((benefit, index) => (
            <StaggerItem key={index}>
              <div className="text-left">
                <div className="text-xl md:text-2xl font-bold text-primary py-1 md:py-2">
                  {benefit}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Benefit;

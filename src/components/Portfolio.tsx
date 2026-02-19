import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import { useTranslation } from "react-i18next";
import { ComponentTitle } from "@/entities/component-title";

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("portfolio.projects.landing.title"),
      description: t("portfolio.projects.landing.description"),
      tags: ["React", "Tailwind", "Framer Motion"],
      stats: t("portfolio.projects.landing.stats"),
    },
    {
      title: t("portfolio.projects.restaurant.title"),
      description: t("portfolio.projects.restaurant.description"),
      tags: ["Next.js", "TypeScript", "CMS"],
      stats: t("portfolio.projects.restaurant.stats"),
    },
    {
      title: t("portfolio.projects.ecommerce.title"),
      description: t("portfolio.projects.ecommerce.description"),
      tags: ["React", "Node.js", "PostgreSQL"],
      stats: t("portfolio.projects.ecommerce.stats"),
    },

    {
      title: t("portfolio.projects.saas.title"),
      description: t("portfolio.projects.saas.description"),
      tags: ["React", "Framer Motion", "Stripe"],
      stats: t("portfolio.projects.saas.stats"),
    },
    {
      title: t("portfolio.projects.corporate.title"),
      description: t("portfolio.projects.corporate.description"),
      tags: ["Next.js", "TypeScript", "Tailwind"],
      stats: t("portfolio.projects.corporate.stats"),
    },
    {
      title: t("portfolio.projects.mobile.title"),
      description: t("portfolio.projects.mobile.description"),
      tags: ["React Native", "PWA", "Firebase"],
      stats: t("portfolio.projects.mobile.stats"),
    },
  ];

  return (
    <section id="portfolio" className="pt-20">
      <div className="container mx-auto px-6 sm:px-12">
        <ComponentTitle title={t("portfolio.title")} subtitle={t("portfolio.subtitle")} />

        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <Card className="group hover:border-primary/50 transition-all duration-300 cursor-default overflow-hidden h-full">
                <div className="h-1 bg-gradient-to-r from-primary/50 to-primary group-hover:from-primary group-hover:to-primary/80 transition-all" />
                <div className="flex flex-col justify-between h-full pb-3">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2 sm:gap-0">
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 w-fit"
                      >
                        {project.stats}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Portfolio;

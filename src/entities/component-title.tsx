import ScrollReveal from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";

export const ComponentTitle = ({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) => {
  return (
    <ScrollReveal direction="up">
      <div className={cn("max-w-3xl mb-6 md:mb-10", className)}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-base text-muted-foreground">{subtitle}</p>}
      </div>
    </ScrollReveal>
  );
};

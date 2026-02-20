import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import type { ContentBlock } from "@/shared/types/service-content";

const renderParagraph = (
  t: (key: string) => string,
  basePath: string,
  key: string,
  isLast: boolean = false,
) => (
  <p className={cn("text-base text-muted-foreground leading-relaxed", !isLast && "mb-6")}>
    {t(`${basePath}.${key}`)}
  </p>
);

const renderList = (
  t: (key: string, options?: { returnObjects: boolean }) => unknown,
  basePath: string,
  key: string,
) => {
  const items = t(`${basePath}.${key}`, { returnObjects: true }) as string[];
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <ul className="list-disc list-inside mb-6 text-base text-muted-foreground space-y-2">
      {items.map((item: string, idx: number) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
};

interface ServiceContentBlocksRendererProps {
  blocks: ContentBlock[];
  basePath: string;
}

export const ServiceContentBlocksRenderer = ({
  blocks,
  basePath,
}: ServiceContentBlocksRendererProps) => {
  const { t } = useTranslation();

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {blocks.map((block, index) => {
        const isLast = index === blocks.length - 1;

        if (block.type === "paragraph") {
          return (
            <div key={`${block.key}-${index}`}>
              {renderParagraph(t, basePath, block.key, isLast)}
            </div>
          );
        }

        if (block.type === "list") {
          return <div key={`${block.key}-${index}`}>{renderList(t, basePath, block.key)}</div>;
        }

        return null;
      })}
    </div>
  );
};

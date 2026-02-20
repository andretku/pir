import type { ServiceContentConfig } from "@/shared/types/service-content";

export const serviceContentConfig: Record<string, ServiceContentConfig> = {
  security: {
    blocks: [
      { type: "paragraph", key: "intro" },
      { type: "list", key: "systems" },
      { type: "paragraph", key: "description" },
      { type: "paragraph", key: "audit" },
      { type: "paragraph", key: "manufacturers" },
      { type: "list", key: "manufacturersList" },
      { type: "paragraph", key: "enterprise" },
      { type: "paragraph", key: "closing" },
    ],
    hasEnterprise: true,
  },
  fire: {
    blocks: [
      { type: "paragraph", key: "intro" },
      { type: "list", key: "systems" },
      { type: "paragraph", key: "description" },
      { type: "paragraph", key: "audit" },
      { type: "paragraph", key: "manufacturers" },
      { type: "list", key: "manufacturersList" },
      { type: "paragraph", key: "closing" },
    ],
  },
  bms: {
    blocks: [
      { type: "paragraph", key: "intro" },
      { type: "paragraph", key: "systems" },
      { type: "list", key: "systemsList" },
      { type: "paragraph", key: "benefits" },
      { type: "paragraph", key: "description" },
      { type: "paragraph", key: "audit" },
      { type: "paragraph", key: "manufacturers" },
      { type: "list", key: "manufacturersList" },
      { type: "paragraph", key: "closing" },
    ],
  },
  telecom: {
    blocks: [
      { type: "paragraph", key: "intro" },
      { type: "list", key: "systems" },
      { type: "paragraph", key: "description" },
      { type: "paragraph", key: "audit" },
      { type: "paragraph", key: "manufacturers" },
      { type: "list", key: "manufacturersList" },
      { type: "paragraph", key: "closing" },
    ],
  },
  produkty: {
    blocks: [
      { type: "paragraph", key: "intro" },
      { type: "paragraph", key: "description" },
      { type: "paragraph", key: "applications" },
      { type: "list", key: "applicationsList" },
      { type: "paragraph", key: "modules" },
      { type: "paragraph", key: "modulesExample" },
      { type: "paragraph", key: "closing" },
    ],
  },
};

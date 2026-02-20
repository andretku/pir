export interface ContentBlock {
  type: "paragraph" | "list";
  key: string;
}

export interface ServiceContentConfig {
  blocks: ContentBlock[];
  hasEnterprise?: boolean;
}

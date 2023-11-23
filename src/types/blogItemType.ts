export type BlogItemType = {
  tag: string;
  id: string;
  text?: string;
  src?: string;
  ul?: Array<string> | Array<{ src: string; rotation: string }>;
  rotation?: string;
};
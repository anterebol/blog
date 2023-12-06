export type ButtonType = {
  cls?: Array<string>;
  title: string;
  func: () => void;
  text?: string;
  src?: string;
  icon?: Element;
  children?: JSX.Element;
};

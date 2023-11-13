export const createDynamicPath = (path: string, ...params: Array<string>) =>
  params.reduce((acc, str) => `${acc}/:${str}`, path);

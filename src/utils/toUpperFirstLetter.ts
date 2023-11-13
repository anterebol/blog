export const toUpperFirstLetter = (word: string) =>
  word.length > 0 ? word[0].toUpperCase() + word.slice(1) : word;

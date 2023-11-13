export const getRole = (key: string) => localStorage.getItem(key) || '';
export const setLocalStorage = (key: string, currentState: any) => {
  localStorage.setItem(key, JSON.stringify(currentState));
};

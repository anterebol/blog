import { months } from '../constants/months/months';

export type DateType = {
  month: string;
  day: string;
  year: string;
};
export const setDate = (date: DateType) =>
  `${date.month.includes('Month') ? 'Month' : months[date.month]} ${
    date.day
  }, ${date.year}`;

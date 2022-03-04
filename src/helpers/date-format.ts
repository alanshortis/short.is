import { daysSince } from '.';

export const dateFormat = (date: string, year?: string): string => {
  const age = daysSince(date);

  const relativeDate = new Intl.RelativeTimeFormat('en-GB', {
    numeric: 'auto',
  });

  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
  });

  if (age < 7) {
    return relativeDate.format(age * -1, 'day');
  }

  return `${formattedDate} ${year || ''}`;
};

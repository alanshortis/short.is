import { daysSince } from '.';

export const dateFormat = (date: string, hasYear?: boolean): string => {
  const age = daysSince(date);
  const options = {
    month: 'long',
    day: 'numeric',
    year: hasYear ? 'numeric' : undefined,
  } as const;

  const relativeDate = new Intl.RelativeTimeFormat('en-GB', {
    numeric: 'auto',
  });

  const formattedDate = new Date(date).toLocaleDateString('en-GB', options);

  if (age < 2) {
    return relativeDate.format(age * -1, 'day');
  }

  return formattedDate;
};

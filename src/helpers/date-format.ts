export const dateFormat = (date: string, hasYear?: boolean): string => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.toLocaleString('en-GB', { month: 'long' });
  const day = d.getDate();

  return `${day} ${month} ${hasYear ? year : ''}`;
};

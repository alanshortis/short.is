export const dateFormat = (date: string, hasYear?: boolean): string => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.toLocaleString('en-GB', { month: 'long' });
  const day = d.getDate().toString();

  const ordinal = () => {
    if (['1', '21', '31'].includes(day)) {
      return 'st';
    }
    if (['2', '22'].includes(day)) {
      return 'nd';
    }
    if (['3', '23'].includes(day)) {
      return 'rd';
    }
    return 'th';
  };

  return `${day}<sup>${ordinal()}</sup> ${month} ${hasYear ? year : ''}`;
};

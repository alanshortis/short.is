export const dateFormat = (date: string, hasYear?: boolean): string => {
  const options = {
    month: 'long',
    day: 'numeric',
    year: hasYear ? 'numeric' : undefined,
  } as const;

  return new Date(date).toLocaleDateString('en-GB', options);
};

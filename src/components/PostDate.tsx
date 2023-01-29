interface Props {
  date: string;
}

export const PostDate = ({ date }: Props) => {
  const d = new Date(date);
  const day = d.getDate().toString();
  const month = d.toLocaleString('en-GB', { month: 'long' });
  const year = d.getFullYear();

  return (
    <time dateTime={date}>
      {day} {month} {year}
    </time>
  );
};

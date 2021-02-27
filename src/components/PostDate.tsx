import dateFormat from '../helpers/date-format';
import daysSince from '../helpers/days-since';

interface Props {
  date: string;
}

const PostDate: React.FC<Props> = ({ date }) => (
  <>
    <time dateTime={date}>{dateFormat(date)}</time>
    {daysSince(date) < 38 && 'NEW'}
  </>
);

export default PostDate;

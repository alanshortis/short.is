import dateFormat from '../helpers/date-format';
import daysSince from '../helpers/days-since';

const PostDate = ({ date }) => (
  <>
    <time dateTime={date}>{dateFormat(date)}</time>
    {daysSince(date) < 30 && <span>NEW</span>}
  </>
);

export default PostDate;

import dateFormat from '../helpers/date-format';
import daysSince from '../helpers/days-since';

const PostDate = ({ date }) => (
  <p>
    <time dateTime={date}>{dateFormat(date)}</time>
    {daysSince(date) < 30 && <span>NEW</span>}
  </p>
);

export default PostDate;

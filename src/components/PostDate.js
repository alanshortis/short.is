import { dateFormat, daysSince } from '../helpers';

const PostDate = ({ date }) => (
  <>
    <time dateTime={date}>{dateFormat(date)}</time>
    {daysSince(date) < 100 && <span>NEW</span>}
  </>
);

export default PostDate;

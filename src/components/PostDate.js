import { dateFormat, daysSince } from '../helpers';

const PostDate = ({ date, updated }) => (
  <span>
    <time dateTime={date}>{dateFormat(date)}</time>
    {daysSince(date) < 28 ? <span>New</span> : daysSince(updated) < 28 && <span>Updated</span>}
  </span>
);

export default PostDate;

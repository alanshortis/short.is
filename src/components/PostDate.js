import styled from 'styled-components';
import { dateFormat, daysSince } from '../helpers';

const StyledSpan = styled(Label)`
  display: flex;
  justify-content: space-between;
  margin-bottom: calc(${p => p.theme.spacing} / 4);
`;

const PostDate = ({ date }) => (
  <StyledSpan>
    <time dateTime={date}>{dateFormat(date)}</time>
    {daysSince(date) < 100 && <span>NEW</span>}
  </StyledSpan>
);

export default PostDate;

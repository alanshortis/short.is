import styled from 'styled-components';
import { dateFormat, daysSince } from '../helpers';

const StyledSpan = styled.span`
  display: flex;
  font-size: 0.833rem;
  justify-content: space-between;
  text-transform: uppercase;
`;

const PostDate = ({ date }) => (
  <StyledSpan>
    <time dateTime={date}>{dateFormat(date)}</time>
    {daysSince(date) < 100 && <span>NEW</span>}
  </StyledSpan>
);

export default PostDate;

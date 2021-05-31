import styled from 'styled-components';
import { dateFormat, daysSince } from '../helpers';

const StyledSpan = styled.span`
  color: var(--accent);
  display: flex;
  font-size: 0.833rem;
  font-family: ${p => p.theme.font.familyMono};
  justify-content: space-between;
  margin-bottom: calc(${p => p.theme.spacing} / 2);
  text-transform: uppercase;
`;

const PostDate = ({ date }) => (
  <StyledSpan>
    <time dateTime={date}>{dateFormat(date)}</time>
    {daysSince(date) < 100 && <span>NEW</span>}
  </StyledSpan>
);

export default PostDate;

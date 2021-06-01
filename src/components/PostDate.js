import styled from 'styled-components';
import { dateFormat, daysSince } from '../helpers';
import { Label } from '../components';

const StyledSpan = styled(Label)`
  display: flex;
  justify-content: space-between;
  margin-bottom: calc(${p => p.theme.spacing} / 4);
`;

const PostDate = ({ date, updated }) => {
  const withLabel = () => {
    if (daysSince(date) < 28) return <span>New</span>;
    if (daysSince(updated) < 28) return <span>Updated</span>;

    return '';
  };

  return (
    <StyledSpan>
      <time dateTime={date}>{dateFormat(date)}</time>
      {withLabel()}
    </StyledSpan>
  );
};

export default PostDate;

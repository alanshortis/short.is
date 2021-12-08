import type { FC } from 'react';
import styled from 'styled-components';
import { dateFormat, daysSince } from '../helpers';
import { Label } from '.';

const StyledPostDate = styled(Label)`
  display: flex;
  column-gap: var(--spacing);
  justify-content: space-between;
  @media ${p => p.theme.media.small} {
    justify-content: flex-start;
  }
`;

interface Props {
  date: string;
  updated?: string;
}

export const PostDate: FC<Props> = ({ date, updated }) => {
  const isNew = daysSince(date) < 228;
  const isUpdated = !isNew && updated && daysSince(updated) < 228;

  return (
    <StyledPostDate>
      <time dateTime={date}>{dateFormat(date)}</time>
      {isNew && <span>New</span>}
      {isUpdated && <span>Updated</span>}
    </StyledPostDate>
  );
};

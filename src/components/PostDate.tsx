import type { FC } from 'react';
import styled from 'styled-components';
import { dateFormat, daysSince } from '../helpers';
import { Label } from '.';

const StyledPostDate = styled(Label)`
  line-height: 2.08rem;
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
      {isNew && <span> &middot; New</span>}
      {isUpdated && <span> &middot; Updated</span>}
    </StyledPostDate>
  );
};

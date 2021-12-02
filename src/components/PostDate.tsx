import type { FC } from 'react';
import styled from 'styled-components';
import { dateFormat, daysSince } from '../helpers';
import { Label } from '.';

const NewLabel = styled.span`
  margin-left: var(--spacing);
`;

interface Props {
  date: string;
  updated?: string;
}

export const PostDate: FC<Props> = ({ date, updated }) => {
  const isNew = daysSince(date) < 228;
  const isUpdated = updated && daysSince(updated) < 228;

  return (
    <Label>
      <time dateTime={date}>{dateFormat(date)}</time>
      {isNew && <NewLabel>New</NewLabel>}
      {isUpdated && !isNew && <NewLabel>Updated</NewLabel>}
    </Label>
  );
};

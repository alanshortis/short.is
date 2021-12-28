import type { FC } from 'react';
import styled from 'styled-components';
import { dateFormat, daysSince } from '../helpers';
import { Label } from '.';

const StyledPostDate = styled(Label)`
  line-height: 2.08rem;
`;

interface Props {
  date: string;
  year?: string;
}

export const PostDate: FC<Props> = ({ date, year }) => (
  <StyledPostDate>
    <time dateTime={date}>
      {dateFormat(date)} {year && year}
    </time>
    {daysSince(date) < 14 && <span> &middot; New</span>}
  </StyledPostDate>
);

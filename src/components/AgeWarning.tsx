import type { FC } from 'react';
import styled from 'styled-components';
import { Label } from '.';
import { daysSince } from '../helpers';

const Warning = styled.span`
  display: block;
  margin-bottom: var(--spacing);
  span {
    display: inline;
  }
  &::before {
    color: var(--accent);
    content: '△';
    margin-right: calc(var(--spacing) / 2);
    @supports (content: x / y) {
      content: '△' / 'Warning';
    }
  }
`;

interface Props {
  date: string;
}

export const AgeWarning: FC<Props> = ({ date }) => {
  const isOld = daysSince(date) > 730;

  return isOld ? (
    <Warning>
      <Label>This post is more than 2 years old</Label>
    </Warning>
  ) : null;
};

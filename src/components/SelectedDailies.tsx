import type { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import type { DailyPost } from '../types';
import { Arrow, Label } from '.';

const Container = styled.div`
  margin-top: var(--spacing);
  .header {
    margin-bottom: calc(var(--spacing) / 2);
  }
  .h4 {
    display: block;
    font-weight: ${p => p.theme.font.weightBold};
    line-height: 1.5em;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .number {
    display: inline-block;
    text-align: right;
    width: 4ch;
  }
  ${Arrow} {
    margin-top: var(--spacing);
  }
`;

interface Props {
  selectedDailies: DailyPost[];
}

export const SelectedDailies: FC<Props> = ({ selectedDailies }) => (
  <Container>
    <Label className="header" as="h2">
      Selected Dailies
    </Label>
    {selectedDailies.map(({ day, title }) => (
      <Link href={`/daily/${day}`} key={day}>
        <a className="h4">
          <span className="number">#{day}</span>: {title}
        </a>
      </Link>
    ))}
    <Link href="/daily" passHref>
      <Arrow as="a" toTheRight>
        More Dailies
      </Arrow>
    </Link>
  </Container>
);

import type { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import type { DailyPost } from '../types';
import { Label } from '.';

const Container = styled.div`
  margin-top: var(--spacing);
  ${Label} {
    margin-bottom: calc(var(--spacing) / 2);
  }
  a {
    display: block;
    & + a {
      margin-top: calc(var(--spacing) / 4);
    }
  }
  .number {
    display: inline-block;
    text-align: right;
    width: 4ch;
  }
`;

interface Props {
  selectedDailies: DailyPost[];
}

export const SelectedDailies: FC<Props> = ({ selectedDailies }) => (
  <Container>
    <Label>Selected Dailies</Label>
    {selectedDailies.map(({ day, title }) => (
      <Link href={`daily/${day}`}>
        <a>
          <h3 className="h4">
            <span className="number">#{day}</span>: {title}
          </h3>
        </a>
      </Link>
    ))}
  </Container>
);

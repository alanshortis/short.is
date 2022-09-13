import type { FC } from 'react';
import styled from 'styled-components';
import { Label } from '.';

const StyledSkip = styled.a`
  border: ${p => p.theme.borderSize} dashed var(--accent);
  left: calc(50% - 6rem);
  padding: calc(var(--spacing) / 2);
  position: absolute;
  text-align: center;
  top: 0;
  transform: translateY(-300%);
  transition: transform 250ms ease;
  width: 12rem;
  &:focus-within {
    transform: translateY(0);
  }
`;

export const Skip: FC = () => (
  <StyledSkip href="#main">
    <Label>Skip to content</Label>
  </StyledSkip>
);

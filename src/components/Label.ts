import styled, { css } from 'styled-components';

export const label = css`
  display: block;
  font-size: 0.8rem;
  font-variant-numeric: tabular-nums;
  font-variation-settings: 'wght' ${p => p.theme.font.weight};
  letter-spacing: 2px;
  line-height: 1.563;
  text-align: ${p => (p.toTheRight ? 'right' : 'inherit')};
  text-transform: uppercase;
  && {
    text-decoration: none;
  }
`;

export const Label = styled.span<{ toTheRight?: boolean }>`
  ${label};
  text-align: ${p => (p.toTheRight ? 'right' : 'inherit')};
`;

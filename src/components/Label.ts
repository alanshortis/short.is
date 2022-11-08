import styled, { css } from 'styled-components';

export const label = css`
  display: block;
  font-family: ${p => p.theme.font.faceMono};
  font-feature-settings: 'zero', 'tnum';
  font-size: 0.8rem;
  font-weight: ${p => p.theme.font.weight};
  letter-spacing: 1px;
  line-height: 1.563;
  text-transform: uppercase;
  && {
    text-decoration: none;
  }
`;

export const Label = styled.span<{ toTheRight?: boolean }>`
  ${label};
  text-align: ${p => (p.toTheRight ? 'right' : 'inherit')};
`;

export const warning = css`
  ${label};
  &::before {
    color: var(--accent);
    content: '△';
    font-family: 'WarnTriangle';
    font-size: 1rem;
    margin-right: calc(var(--spacing) / 4);
    @supports (content: x / y) {
      content: '△' / 'Warning';
    }
  }
`;

export const Warning = styled.span`
  ${warning};
`;

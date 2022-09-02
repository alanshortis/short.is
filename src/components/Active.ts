import { css } from 'styled-components';

export const activeMarker = css`
  --dot: 7px;
  --half-dot: 3.5px;
  background-color: var(--accent);
  border-radius: var(--dot);
  content: '';
  cursor: default;
  height: var(--dot);
  left: calc(50% - var(--half-dot));
  position: absolute;
  top: var(--spacing);
  width: var(--dot);
`;

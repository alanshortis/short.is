import { FC } from 'react';
import styled, { css } from 'styled-components';

// This is a bit like a mixin. But, I need it in a component and
// in some nested CSS which I can't abstract out, so here we are
export const shadowBox = css`
  background-color: var(--background);
  border: 1px solid currentColor;
  margin-bottom: calc(var(--spacing) * 2);
  padding: calc(var(--spacing) / 4);
  position: relative;
  width: calc(100% - var(--spacing) / 2);
  ::after {
    background-image: linear-gradient(
      -45deg,
      currentColor 5.56%,
      transparent 5.56%,
      transparent 50%,
      currentColor 50%,
      currentColor 55.56%,
      transparent 55.56%,
      transparent 100%
    );
    background-position: fixed;
    /* Yes, magic numbers. But decimals from em or rem make it look janky. */
    background-size: 8px 8px;
    content: '';
    height: 100%;
    left: calc(var(--spacing) / 2);
    position: absolute;
    top: calc(var(--spacing) / 2);
    width: 100%;
    z-index: -1;
  }
`;

const Box = styled.div`
  ${shadowBox};
  && p {
    margin-bottom: 0;
  }
`;

export const ShadowBox: FC = ({ children }) => <Box>{children}</Box>;

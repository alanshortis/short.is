import styled, { css } from 'styled-components';

// This is a bit like a mixin. But, I need it in a component and
// in some nested CSS which I can't abstract out, so here we are
export const shadowBox = css<{ isNegative?: boolean }>`
  background-color: var(--background);
  border: 1px solid currentColor;
  margin-bottom: calc(var(--spacing) * 1.5);
  padding: calc(var(--spacing) / 4);
  position: relative;
  width: calc(100% - var(--spacing) / 2);
  ::after {
    background-image: linear-gradient(
      -45deg,
      var(--foreground) 5.56%,
      transparent 5.56%,
      transparent 50%,
      var(--foreground) 50%,
      var(--foreground) 55.56%,
      transparent 55.56%,
      transparent 100%
    );
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

export const ShadowBox = styled.div<{ isNegative?: boolean }>`
  ${shadowBox};
  ${p =>
    p.isNegative &&
    css`
      background-color: var(--foreground);
      border-color: var(--foreground);
      color: var(--background);
    `}
  p:only-of-type, p:last-of-type {
    line-height: 1.563;
    margin-bottom: 0;
  }
`;

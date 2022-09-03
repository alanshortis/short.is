import styled, { css, keyframes } from 'styled-components';
import { Label } from './Label';

type Direction = 'left' | 'right';

const point = (direction?: Direction) => keyframes`
  50% {
    transform: ${direction === 'left' ? 'translate(0.5rem)' : 'translate(-0.5rem)'};
  }
`;

const variant = (direction?: Direction) => {
  return direction === 'left'
    ? css`
        content: '←';
        margin-right: 1rem;
      `
    : css`
        content: '→';
        margin-left: 1rem;
      `;
};

export const Arrow = styled(Label)<{ direction?: Direction }>`
  &::${p => (p.direction === 'left' ? 'before' : 'after')} {
    ${p => variant(p.direction)};
    color: var(--accent);
    display: inline-block;
    @media ${p => p.theme.media.shouldAnimate} {
      animation: ${p => point(p.direction)} 2s infinite ease;
    }
  }
`;

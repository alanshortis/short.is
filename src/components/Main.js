import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Main = styled.main`
  flex: 1;
  opacity: 1;
  transform: translateY(0);
  @media ${p => p.theme.media.shouldAnimate} {
    animation: ${slide} 500ms ease 200ms 1 forwards;
    opacity: 0;
    transform: translateY(1rem);
  }
`;

export default Main;

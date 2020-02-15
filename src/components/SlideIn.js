import styled, { keyframes, css } from 'styled-components';

const initialState = css`
  opacity: 0;
  transform: translateY(1rem);
`;

const animatedState = css`
  opacity: 1;
  transform: translateY(0);
`;

const reveal = keyframes`
  0% {
    ${initialState}
  }
  100% {
    ${animatedState};
  }
`;

const SlideIn = styled.div`
  ${initialState}
  animation: ${reveal} 500ms ease 250ms 1 forwards;
  @media (prefers-reduced-motion: reduce) {
    ${animatedState};
    animation: none;
  }
`;

export default SlideIn;

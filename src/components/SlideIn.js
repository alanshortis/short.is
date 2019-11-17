import styled, { keyframes, css } from 'styled-components';

const initialState = css`
  opacity: 0;
  transform: translateY(1rem);
`;

const reveal = keyframes`
  0% {
    ${initialState}
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SlideIn = styled.div`
  ${initialState}
  animation: ${reveal} 500ms ease 250ms 1 forwards;
`;

export default SlideIn;

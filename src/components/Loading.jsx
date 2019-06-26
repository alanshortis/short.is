import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  animation: ${rotate} 1s linear infinite;
  background-color: transparent;
  border: 5px solid ${p => p.theme.color.accent};
  border-radius: 50%;
  border-top-color: ${p => p.theme.color.accent};
  height: 2rem;
  width: 2rem;
`;

export default Loading;

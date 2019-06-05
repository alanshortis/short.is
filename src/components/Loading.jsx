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
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: transparent;
  border: 5px solid #ccc;
  border-top-color: #666;
  animation: ${rotate} 1s linear infinite;
`;

export default Loading;

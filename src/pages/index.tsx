import styled from 'styled-components';

const StyledP = styled.p`
  color: #f00;
`;

const Home = () => (
  <StyledP>This is v4 of short.is, the development of which is going to be public.</StyledP>
);

export const config = {
  unstable_runtimeJS: false,
};

export default Home;

import styled from 'styled-components';

interface HomeProps {
  message: string;
}

const StyledP = styled.p`
  color: #f00;
`;

const Home: React.FC<HomeProps> = () => <StyledP>Nah</StyledP>;

export const config = {
  unstable_runtimeJS: false,
};

export async function getStaticProps() {
  return {
    props: {
      message: 'Hello, world',
    },
  };
}

export default Home;

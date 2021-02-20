import styled from 'styled-components';
import Layout from '../components/Layout';
import type { Meta } from '../types';

interface HomeProps {
  message: string;
  meta: Meta;
}

const StyledP = styled.p`
  color: ${p => p.theme.color.type};
`;

const Home: React.FC<HomeProps> = ({ message, meta }) => {
  return (
    <Layout meta={meta}>
      <StyledP>
        {message} {meta.year}
      </StyledP>
    </Layout>
  );
};

export const config = {
  unstable_runtimeJS: false,
};

export async function getStaticProps() {
  return {
    props: {
      message: 'This is v4 of short.is, the development of which is going to be public.',
    },
  };
}

export default Home;

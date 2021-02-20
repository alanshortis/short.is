import Layout from '../components/Layout';
import type { Meta } from '../data/Meta';

interface HomeProps {
  meta: Meta;
}

const Home: React.FC<HomeProps> = ({ meta }) => {
  return (
    <Layout title="About" meta={meta}>
      <h1>About</h1>
    </Layout>
  );
};

export const config = {
  unstable_runtimeJS: false,
};

export default Home;

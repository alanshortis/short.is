import type { NextPage } from 'next';
import { Layout } from '../components';

export const config = {
  unstable_runtimeJS: false,
};
const Home: NextPage = () => (
  <Layout>
    <p>Home</p>
  </Layout>
);

export default Home;

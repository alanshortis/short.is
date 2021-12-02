import type { NextPage } from 'next';
import { Layout } from '../components';

export const config = {
  unstable_runtimeJS: false,
};

const About: NextPage = () => (
  <Layout title="About">
    <h1>About</h1>
  </Layout>
);

export default About;

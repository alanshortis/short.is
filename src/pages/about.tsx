import type { NextPage } from 'next';
import { Layout } from '../components';

export const config = {
  unstable_runtimeJS: false,
};

const About: NextPage = () => (
  <Layout title="About">
    <p>About</p>
  </Layout>
);

export default About;

import type { NextPage } from 'next';
import { Layout } from '../components';

export const config = {
  unstable_runtimeJS: false,
};

const NotFound: NextPage = () => (
  <Layout>
    <p>Not Found</p>
  </Layout>
);

export default NotFound;

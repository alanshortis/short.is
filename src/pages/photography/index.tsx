import type { NextPage } from 'next';
import { Layout } from '../../components';

export const config = {
  unstable_runtimeJS: false,
};

const Photography: NextPage = () => (
  <Layout title="Photography">
    <h1>Photography</h1>
  </Layout>
);

export default Photography;

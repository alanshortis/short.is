import type { NextPage } from 'next';
import { Layout } from '../../components';

export const config = {
  unstable_runtimeJS: false,
};

const Photography: NextPage = () => (
  <Layout title="Photography">
    <p>Photography</p>
  </Layout>
);

export default Photography;

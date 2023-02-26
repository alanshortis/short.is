import type { NextPage } from 'next';
import { PageLayout } from '@/layouts';

const Home: NextPage = () => (
  // <PageLayout>
  //   <h1 className="hidden">Home</h1>
  <>
    <p>abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890</p>
  </>
  // </PageLayout>
);

export default Home;

export const config = {
  unstable_runtimeJS: false,
};

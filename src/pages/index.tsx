import type { NextPage } from 'next';
import { Full } from '@/layouts';

const Home: NextPage = () => (
  <Full>
    <h1 className="hidden">Home</h1>
  </Full>
);

export default Home;

export const config = {
  unstable_runtimeJS: false,
};

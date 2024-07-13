import type { NextPage } from 'next';
import { Full } from '@/layouts';
import styles from './index.module.scss';

const Home: NextPage = () => (
  <>
    <Full className={styles.home}>
      <h1 className="hidden">Alan Shortis</h1>
      <div className={styles.orb} />
    </Full>
  </>
);

export default Home;

export const config = {
  unstable_runtimeJS: false,
};

import type { NextPage } from 'next';
import { Full } from '@/layouts';
import styles from '@/layouts/Full/Full.module.scss';

const Home: NextPage = () => (
  <Full>
    <h1 className="hidden">Home</h1>
    <div className={styles.grid}>
      <div>1</div>
      <div>
        <div className={styles.orb}></div>
      </div>
      <div>3</div>
      <div>4</div>
    </div>
  </Full>
);

export default Home;

export const config = {
  unstable_runtimeJS: false,
};

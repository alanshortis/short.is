/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';
import styles from './SchemeToggle.module.scss';

const SchemeToggle = () => (
  <>
    <Head>
      <script src="/scheme-toggle.js" />
    </Head>
    <div className={styles.schemeToggle}>
      <scheme-toggle />
    </div>
  </>
);

export default SchemeToggle;

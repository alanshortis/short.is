/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';

const SchemeToggle = () => (
  <>
    <Head>
      <script src="/scheme-toggle.js" />
    </Head>
    <scheme-toggle />
  </>
);

export default SchemeToggle;

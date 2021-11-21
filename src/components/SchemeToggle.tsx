import type { FC } from 'react';
import Head from 'next/head';

const SchemeToggle: FC = () => (
  <>
    <Head>
      <script src="/js/scheme-toggle.js" />
    </Head>
    <scheme-toggle />
  </>
);

export default SchemeToggle;

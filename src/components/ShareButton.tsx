import type { FC } from 'react';
import Head from 'next/head';

const ShareButton: FC = () => (
  <>
    <Head>
      <script src="/js/share-button.js" />
    </Head>
    <share-button />
  </>
);

export default ShareButton;

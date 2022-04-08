import type { FC } from 'react';
import Head from 'next/head';

interface Props {
  title: string;
  url: string;
}

const ShareButton: FC<Props> = ({ title, url }) => (
  <>
    <Head>
      <script src="/js/share-button.js" />
    </Head>
    <share-button title={title} url={url} />
  </>
);

export default ShareButton;

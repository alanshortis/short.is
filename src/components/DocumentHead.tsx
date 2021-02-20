import Head from 'next/head';
import type Meta from '../types/meta';

interface Props {
  meta: Meta;
}

const DocumentHead: React.FC<Props> = ({ meta }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content={meta.description} />
    <meta property="og:title" content={meta.title} />
    <meta property="og:description" content={meta.description} />
    <meta property="og:url" content={meta.url} />
    {/* <meta property="og:image" content="/img/og.png" /> */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={meta.twitter} />
  </Head>
);

export default DocumentHead;

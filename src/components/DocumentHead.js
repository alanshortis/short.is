import { useContext } from 'react';
import { default as NextHead } from 'next/head';
import { useRouter } from 'next/router';
import MetaContext from '../context/meta';

const Head = ({ title, intro }) => {
  const meta = useContext(MetaContext);
  const router = useRouter();
  const pageTitle = title ? `${title} — ${meta.title}` : meta.title;
  const fontFiles = [
    '/fonts/plex-subset.woff2',
    '/fonts/inter-regular-subset.woff2',
    '/fonts/inter-bold-subset.woff2',
  ];

  return (
    <NextHead>
      <title>{pageTitle}</title>
      {fontFiles.map(f => (
        <link key={f} rel="preload" href={f} as="font" type="font/woff2" crossOrigin="anonymous" />
      ))}
      <meta name="description" content={intro || meta.description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={intro || meta.description} />
      <meta property="og:url" content={meta.url + router.asPath} />
      {/* <meta property="og:image" content="/img/og.png" /> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={meta.twitter} />
      {/* <link rel="apple-touch-icon" href="/img/icon-152.png" />
      <link rel="icon" type="image/png" href="/img/icon-196.png" sizes="196x196" /> */}
      <link rel="alternate" type="application/rss+xml" href="/writing/feed.xml" title={meta.description} />
    </NextHead>
  );
};

export default Head;

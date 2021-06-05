import { default as NextHead } from 'next/head';
import { useRouter } from 'next/router';

const Head = ({ title, intro, meta }) => {
  const router = useRouter();

  return (
    <NextHead>
      <title>{(title && `${title} — `) + meta.title}</title>
      <meta name="description" content={intro || meta.description} />
      <meta property="og:title" content={(title && `${title} — `) + meta.title} />
      <meta property="og:description" content={intro || meta.description} />
      <meta property="og:url" content={meta.url + router.asPath} />
      <meta property="og:image" content="/img/og.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={meta.twitter} />
      <link rel="apple-touch-icon" href="/img/icon-152.png" />
      <link rel="icon" type="image/png" href="/img/icon-196.png" sizes="196x196" />
      <link rel="alternate" type="application/rss+xml" href="/writing/feed.xml" title={meta.description} />
    </NextHead>
  );
};

export default Head;

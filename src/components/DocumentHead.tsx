import NextHead from 'next/head';
import { useRouter } from 'next/router';

interface Props {
  title?: string;
  intro?: string;
}

export const DocumentHead = ({ title, intro }: Props) => {
  const router = useRouter();
  const pageTitle = title ? `${title}—Alan Shortis` : 'Alan Shortis';
  const description = intro || 'Alan Shortis is a web developer';

  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={'https://short.is' + router.asPath} />
      {/* <meta property="og:image" content="https://short.is/icons/og.png" /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@alanshortis" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content="https://short.is/icons/og.png" /> */}
      {/* <link rel="icon" type="image/png" href="/icons/favicon.png" /> */}
      <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
      <link rel="alternate" type="application/rss+xml" title="RSS Feed for short.is" href="/daily.xml" />
    </NextHead>
  );
};

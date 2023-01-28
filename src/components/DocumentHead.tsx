import type { FC } from 'react';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { useMeta } from '@/context';

interface Props {
  title?: string;
  intro?: string;
}

export const DocumentHead: FC<Props> = ({ title, intro }) => {
  const router = useRouter();
  const meta = useMeta();
  const pageTitle = title ? `${title}—${meta.title}` : meta.title;
  const description = intro || meta.description;

  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={meta.url + router.asPath} />
      {/* <meta property="og:image" content={`${meta.url}/icons/og.png`} /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={meta.twitter} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={`${meta.url}/icons/og.png`} /> */}
      {/* <link rel="icon" type="image/png" href="/icons/favicon.png" /> */}
      {/* <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" /> */}
    </NextHead>
  );
};

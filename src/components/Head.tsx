import type { FC } from 'react';
import { useContext } from 'react';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import type { HeadInfo } from '../types';
import { MetaContext } from '../data/meta';

export const Head: FC<HeadInfo> = ({ title, intro }) => {
  const router = useRouter();
  const meta = useContext(MetaContext);
  const pageTitle = title ? `${title} — ${meta.title}` : meta.title;
  const description = intro || meta.description;

  return (
    <NextHead>
      <title>{pageTitle}</title>
      <link rel="preload" href="/fonts/soehne-buch-subset.woff2" as="font" type="font/woff2" crossOrigin="" />
      <link
        rel="preload"
        href="/fonts/soehne-halbfett-subset.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link rel="preload" href="/fonts/soehne-mono-subset.woff2" as="font" type="font/woff2" crossOrigin="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={meta.url + router.asPath} />
      <meta property="og:image" content="/icons/og.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={meta.twitter} />
      <link rel="icon" type="image/png" href="/icons/favicon.png" />
      <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
    </NextHead>
  );
};

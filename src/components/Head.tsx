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
      <link rel="preload" href="/js/scheme-toggle.js" />
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={meta.url + router.asPath} />
      {/* <meta property="og:image" content="/img/og.png" /> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={meta.twitter} />
    </NextHead>
  );
};

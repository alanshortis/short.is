import type { FC } from 'react';
import { useContext } from 'react';
import NextHead from 'next/head';
import type { HeadInfo } from '../types';
import { MetaContext } from '../data/meta';

export const Head: FC<HeadInfo> = ({ title, intro }) => {
  const meta = useContext(MetaContext);
  const pageTitle = title ? `${title} — ${meta.title}` : meta.title;

  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta name="description" content={intro || meta.description} />
      {/* TODO: OG meta tags */}
    </NextHead>
  );
};

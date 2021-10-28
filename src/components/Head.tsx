import type { FC } from 'react';
import { useContext } from 'react';
import NextHead from 'next/head';
import { MetaContext } from '../data/meta';

interface Props {
  title?: string;
}

export const Head: FC<Props> = ({ title }) => {
  const meta = useContext(MetaContext);
  const pageTitle = title ? `${title} — ${meta.title}` : meta.title;

  return (
    <NextHead>
      <title>{pageTitle}</title>
    </NextHead>
  );
};

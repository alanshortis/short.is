import { FC } from 'react';
import NextHead from 'next/head';

interface Props {
  title?: string;
}

export const Head: FC<Props> = ({ title }) => (
  <NextHead>
    <title>{title}</title>
  </NextHead>
);

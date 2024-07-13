import Head from 'next/head';
import { useRouter } from 'next/router';

interface Props {
  title?: string;
}

export const DocumentHead = ({ title }: Props) => {
  const router = useRouter();
  const pageTitle = title ? `${title}—Alan Shortis` : 'Alan Shortis';
  const fonts = ['sohne-buch-subset', 'sohne-halbfett-subset'];

  return (
    <Head>
      <title>{pageTitle}</title>
      {fonts.map(font => (
        <link key={font} rel="preload" href={`/${font}.woff2`} as="font" type="font/woff2" crossOrigin="" />
      ))}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={title} />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </Head>
  );
};

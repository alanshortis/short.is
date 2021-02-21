import Head from 'next/head';
import type { Meta } from '../types';

interface Props {
  title?: string;
  meta: Meta;
}

const Layout: React.FC<Props> = ({ meta, title, children }) => (
  <>
    <Head>
      <title>{title ? `${title} — ${meta.title}` : meta.title}</title>
    </Head>
    <main>{children}</main>
  </>
);

export default Layout;

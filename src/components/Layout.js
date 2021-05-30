import Head from 'next/head';
import { Header, Footer } from '../components';

const Layout = ({ children, title, meta, hasFooter }) => (
  <>
    <Head>
      <title>
        {title && `${title} — `}
        {meta.title}
      </title>
    </Head>
    <Header />
    <main>{children}</main>
    {hasFooter && <Footer />}
  </>
);

export default Layout;

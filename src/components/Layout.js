import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title, meta, withFooter }) => (
  <>
    <Head>
      <title>
        {title && `${title} — `}
        {meta.title}
      </title>
    </Head>
    <Header meta={meta} />
    <main>{children}</main>
    {withFooter && <Footer meta={meta} />}
  </>
);

export default Layout;

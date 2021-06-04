import Head from 'next/head';
import { Header, Footer, Main } from '../components';

const Layout = ({ children, title, meta, hasFooter }) => (
  <>
    <Head>
      <title>
        {title && `${title} — `}
        {meta.title}
      </title>
    </Head>
    <Header />
    <Main>{children}</Main>
    {hasFooter && <Footer meta={meta} />}
  </>
);

export default Layout;

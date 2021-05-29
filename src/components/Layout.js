import Head from 'next/head';

const Layout = ({ children, title, meta }) => (
  <>
    <Head>
      <title>{title || meta.title}</title>
    </Head>
    <header>header</header>
    <main>{children}</main>
    <footer>footer</footer>
  </>
);

export default Layout;

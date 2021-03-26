import Head from 'next/head';

const Layout = ({ children, title, meta }) => (
  <>
    <Head>
      <title>
        {title && `${title} — `}
        {meta.title}
      </title>
    </Head>
    <header>
      <p>short.is v4</p>
    </header>
    <main>{children}</main>
    <footer>Footer</footer>
  </>
);

export default Layout;

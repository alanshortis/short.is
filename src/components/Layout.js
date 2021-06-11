import { Head, Header, Footer, Main } from '../components';

const Layout = ({ children, title, intro, meta, hasFooter }) => (
  <>
    <Head title={title} intro={intro} meta={meta} />
    <Header />
    <Main>{children}</Main>
    {hasFooter && <Footer meta={meta} />}
  </>
);

export default Layout;

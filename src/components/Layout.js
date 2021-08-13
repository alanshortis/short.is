import { Head, Header, Footer, Main } from '../components';

const Layout = ({ children, title, intro, hasFooter }) => (
  <>
    <Head title={title} intro={intro} />
    <Header />
    <Main>{children}</Main>
    {hasFooter && <Footer />}
  </>
);

export default Layout;

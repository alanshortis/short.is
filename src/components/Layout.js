import { DocumentHead, Header, Footer } from '../components';

const Layout = ({ children, title, intro }) => (
  <>
    <DocumentHead title={title} intro={intro} />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;

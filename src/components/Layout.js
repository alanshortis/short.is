import { useContext } from 'react';
import { Head, Header, Footer, Main } from '../components';
import MetaContext from '../data/meta';

const Layout = ({ children, title, intro, hasFooter }) => {
  const meta = useContext(MetaContext);
  return (
    <>
      <Head title={title} intro={intro} meta={meta} />
      <Header />
      <Main>{children}</Main>
      {hasFooter && <Footer meta={meta} />}
    </>
  );
}

export default Layout;

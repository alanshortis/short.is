import Head from 'next/head';
import styled from 'styled-components';

const StyledP = styled.p`
  font-weight: bold;
`;

const Layout = ({ children, title, meta }) => (
  <>
    <Head>
      <title>
        {title && `${title} — `}
        {meta.title}
      </title>
    </Head>
    <header>
      <StyledP>short.is v4</StyledP>
    </header>
    <main>{children}</main>
    <footer>{meta.year}</footer>
  </>
);

export default Layout;

import Head from 'next/head';
import PropTypes from 'prop-types';
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.shape({
    title: PropTypes.string,
    year: PropTypes.number,
  }).isRequired,
};

Layout.defaultProps = {
  title: null,
};

export default Layout;

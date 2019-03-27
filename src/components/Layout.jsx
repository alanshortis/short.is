import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/theme.json';
import Header from './Header';
import Menu from './Menu';

const Layout = ({ children, hideHeader }) => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          {!hideHeader && (
            <Header siteTitle={data.site.siteMetadata.title}>
              <Menu />
            </Header>
          )}
          <main>{children}</main>
        </>
      )}
    />
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hideHeader: PropTypes.bool,
};

Layout.defaultProps = {
  hideHeader: false,
};

export default Layout;

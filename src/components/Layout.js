import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../styles/Global';
import { Header, SlideIn } from '.';

const Layout = ({ children, isDark }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles isDark={isDark} />
      <Header isDark={isDark} />
      <SlideIn as="main">{children}</SlideIn>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isDark: PropTypes.bool,
};

Layout.defaultProps = {
  isDark: false,
};

export default Layout;

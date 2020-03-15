import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';

const Layout = ({ children }) => (
  <>
    <Nav />
    <div>{children}</div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

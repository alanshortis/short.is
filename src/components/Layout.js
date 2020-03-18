import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import SEO from './SEO';

const Layout = ({ title, description, pathName, children }) => (
  <>
    <SEO title={title} description={description} pathName={pathName} />
    <Nav />
    <div>{children}</div>
  </>
);

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pathName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  title: '',
  description: '',
  pathName: '',
};

export default Layout;

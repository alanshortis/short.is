import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => <header>{siteTitle}</header>;

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;

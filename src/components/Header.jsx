import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
  color: #ff0000;
`;

const Header = ({ children, siteTitle }) => (
  <StyledHeader>
    {siteTitle}
    {children}
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  children: PropTypes.element,
};

Header.defaultProps = {
  children: null,
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
  color: #ff0000;
`;

const Header = ({ siteTitle }) => <StyledHeader>{siteTitle}</StyledHeader>;

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;

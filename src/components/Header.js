import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Menu, Icon } from '.';

const StyledHeader = styled.header`
  align-items: center;
  backdrop-filter: blur(5px);
  background-color: ${p => (p.isDark ? p.theme.color.headerDark : p.theme.color.header)};
  display: flex;
  height: 5rem;
  justify-content: space-between;
  padding: 0 ${p => p.theme.contentMargin};
  position: fixed;
  width: 100%;
  a {
    color: currentColor;
  }
`;

const Header = ({ isDark }) => (
  <StyledHeader isDark={isDark}>
    <Link to="/">
      <Icon />
    </Link>
    <Menu
      items={[
        { label: 'Writing', url: '/writing' },
        { label: 'Photography', url: '/photography' },
        { label: 'Playlists', url: '/playlists' },
        { label: 'About', url: '/about' },
      ]}
    />
  </StyledHeader>
);

Header.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

export default Header;

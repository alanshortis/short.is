import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Menu, Icon } from '.';

const StyledHeader = styled.header`
  align-items: center;
  background-color: ${p => p.theme.color.header(p.isDark, 0.05)};
  display: flex;
  height: ${p => p.theme.headerHeight};
  justify-content: space-between;
  padding: 0 var(--margin);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;
  @supports (backdrop-filter: blur(7px)) {
    backdrop-filter: blur(7px);
    background-color: ${p => p.theme.color.header(p.isDark, 0.5)};
  }
  @media (prefers-reduced-transparency: reduce) {
    background-color: ${p => p.theme.color.header(p.isDark, 1)};
    backdrop-filter: none;
  }
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
      isDark={isDark}
      items={[
        { label: 'Writing', url: '/writing', hasChildRoutes: true },
        { label: 'Playlists', url: '/playlists' },
        { label: 'Now', url: '/now' },
      ]}
    />
  </StyledHeader>
);

Header.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

export default Header;

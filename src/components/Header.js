import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Menu, Icon, MenuButton } from '.';
import { MenuProvider } from './MenuContext';

const StyledHeader = styled.header`
  align-items: center;
  background-color: ${p => p.theme.color.header(p.isDark, 0.05)};
  display: flex;
  height: ${p => p.theme.headerHeight};
  justify-content: space-between;
  overflow: visible;
  padding: 0 ${p => p.theme.contentMargin};
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  @supports (backdrop-filter: blur(7px)) {
    backdrop-filter: blur(7px);
    background-color: ${p => p.theme.color.header(p.isDark, 0.5)};
  }
  a {
    color: currentColor;
  }
`;

const Header = ({ isDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contextValue = {
    isMenuOpen,
    toggleMenu: () => {
      setIsMenuOpen(!isMenuOpen);
    },
  };

  return (
    <MenuProvider value={contextValue}>
      <StyledHeader isDark={isDark}>
        <Link to="/">
          <Icon />
        </Link>
        <MenuButton />
        <Menu
          isDark={isDark}
          items={[
            { label: 'Writing', url: '/writing', hasChildRoutes: true },
            { label: 'Photography', url: '/photography' },
            { label: 'Playlists', url: '/playlists' },
            { label: 'About', url: '/' },
          ]}
        />
      </StyledHeader>
    </MenuProvider>
  );
};

Header.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

export default Header;

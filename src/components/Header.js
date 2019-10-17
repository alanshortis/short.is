import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Menu, Icon } from '.';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: ${p => p.theme.contentMargin};
  a {
    color: currentColor;
  }
`;

const Header = () => (
  <StyledHeader>
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

export default Header;

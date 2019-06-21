import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Menu from './Menu';
import Icon from '../img/icon.svg';

const StyledHeader = styled.header`
  align-items: center;
  background-color: ${p => p.theme.color.backgroundDark};
  color: ${p => p.theme.color.typeLight};
  display: flex;
  height: 4rem;
  justify-content: space-between;
  padding: 2rem;
  position: sticky;
  top: 0;
`;

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <Icon />
    </Link>
    <Menu sections={['writing', 'playlists', 'photography']} />
  </StyledHeader>
);

export default Header;

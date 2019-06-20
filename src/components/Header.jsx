import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { rem } from 'polished';
import Menu from './Menu';
import MenuButton from './MenuButton';
import Icon from '../img/icon.svg';

const StyledHeader = styled.header`
  align-items: center;
  background-color: ${p => p.theme.color.backgroundDark};
  color: ${p => p.theme.color.typeLight};
  display: flex;
  height: ${rem('84px')};
  justify-content: space-between;
  padding: ${rem('28px')};
  position: sticky;
  top: 0;
`;

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <Icon />
    </Link>
    <Menu sections={['writing', 'playlists', 'photography', 'about']} />
    <MenuButton />
  </StyledHeader>
);

export default Header;

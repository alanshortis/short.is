import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { rem } from 'polished';
import Menu from './Menu';

const StyledHeader = styled.header`
  background-color: ${p => p.theme.color.backgroundDark};
  color: ${p => p.theme.color.typeLight};
  height: ${rem('84px')};
  position: sticky;
  top: 0;
`;

const Header = () => (
  <StyledHeader>
    <Link to="/">Home</Link>
    <Menu />
  </StyledHeader>
);

export default Header;

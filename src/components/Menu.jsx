import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledMenu = styled.ul`
  > li {
    display: inline;
    margin: 0;
  }
`;

const Menu = () => (
  <nav>
    <StyledMenu>
      <li>
        <Link to="/writing">Writing</Link>
      </li>
      <li>
        <Link to="/playlists">Playlists</Link>
      </li>
      <li>
        <Link to="/photography">Photography</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </StyledMenu>
  </nav>
);

export default Menu;

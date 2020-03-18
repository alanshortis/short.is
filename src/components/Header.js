import React from 'react';
import { Link } from 'gatsby';
import Nav from './Nav';

const Header = () => (
  <header>
    <Link to="/">[logo]</Link>
    <Nav
      items={[
        { title: 'Writing', path: '/writing' },
        { title: 'Daily', path: '/daily' },
        { title: 'Photography', path: '/photography' },
        { title: 'Playlists', path: '/playlists' },
        { title: 'About', path: '/about' },
      ]}
    />
  </header>
);

export default Header;

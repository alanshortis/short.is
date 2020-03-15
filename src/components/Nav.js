import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <>
    <Link to="/">Home</Link>
    <Link to="/writing">Writing</Link>
    <Link to="/daily">Daily</Link>
    <Link to="/playlists">Playlists</Link>
    <Link to="/about">About</Link>
  </>
);

export default Nav;

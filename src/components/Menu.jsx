import React from 'react';
import { Link } from 'gatsby';

const Menu = () => (
  <ol>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/writing">Writing</Link>
    </li>
    <li>
      <Link to="/daily">Daily</Link>
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
  </ol>
);

export default Menu;

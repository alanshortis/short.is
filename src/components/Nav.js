import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Nav = ({ items }) => (
  <>
    {items.map(item => (
      <Link key={item.path} to={item.path}>
        {item.title}
      </Link>
    ))}
  </>
);

Nav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    })
  ).isRequired,
};

export default Nav;

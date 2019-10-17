import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { math } from 'polished';

const MenuLink = styled(Link)`
  font-size: 0.79rem;
  letter-spacing: 3px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: color ${p => p.theme.transitionSpeed} ${p => p.theme.transitionTiming};
  &:not(:last-child) {
    margin-right: ${p => p.theme.contentMargin};
  }
  &:hover,
  &.active {
    color: ${p => p.theme.color.accent};
  }
  &.active::after {
    content: '';
    position: absolute;
    top: ${p => p.theme.contentMargin};
    left: calc(50% - ${p => math(`${p.theme.border} / 2`)});
    width: ${p => p.theme.border};
    height: ${p => p.theme.border};
    border-radius: 50%;
    background-color: ${p => p.theme.color.accent};
  }
`;

const Menu = ({ items }) => (
  <nav>
    {items.map(item => (
      <MenuLink to={item.url} activeClassName="active" partiallyActive>
        {item.label}
      </MenuLink>
    ))}
  </nav>
);

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
};

export default Menu;

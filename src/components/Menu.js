import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { math } from 'polished';

const Nav = styled.nav`
  background-color: ${p => (p.isDark ? p.theme.color.backgroundDark : p.theme.color.background)};
  border: ${p => p.theme.border} solid ${p => p.theme.color.accent};
  display: none;
  padding: ${p => p.theme.contentMargin};
  position: absolute;
  right: calc(${p => p.theme.contentMargin} * 2);
  top: calc(${p => p.theme.contentMargin} * 2);
  @media ${p => p.theme.media.xSmallMin} {
    backdrop-filter: none;
    background-color: transparent;
    border: 0;
    display: block;
    height: auto;
    padding: 0;
    position: relative;
    right: auto;
    top: auto;
    width: auto;
  }
`;

const MenuLink = styled(Link)`
  display: block;
  transition: color ${p => p.theme.transitionSpeed} ${p => p.theme.transitionTiming};
  text-align: right;
  font-size: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover,
  &.active {
    color: ${p => p.theme.color.accent};
  }

  @media ${p => p.theme.media.xSmallMin} {
    font-size: 0.79rem;
    display: inline;
    &:not(:last-child) {
      margin-right: ${p => p.theme.contentMargin};
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
  }
`;

const Menu = ({ items, isDark }) => (
  <Nav isDark={isDark}>
    {items.map(item => (
      <MenuLink
        className="smallcaps"
        key={item.url}
        to={item.url}
        activeClassName="active"
        partiallyActive
      >
        {item.label}
      </MenuLink>
    ))}
  </Nav>
);

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
  isDark: PropTypes.bool,
};

Menu.defaultProps = {
  isDark: false,
};

export default Menu;

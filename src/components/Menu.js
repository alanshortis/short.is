import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { math, rem } from 'polished';
import MenuContext from './MenuContext';

const Nav = styled.nav`
  background-color: ${p => (p.isDark ? p.theme.color.backgroundDark : p.theme.color.background)};
  border: ${p => p.theme.border} solid ${p => p.theme.color.accent};
  display: ${p => (p.isMenuOpen ? 'block' : 'none')};
  padding: ${p => p.theme.contentMargin};
  padding-right: calc(${p => p.theme.contentMargin} * 1.5);
  position: absolute;
  right: ${p => p.theme.contentMargin};
  top: ${p => p.theme.headerHeight};
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
  &.active::after {
    background-color: ${p => p.theme.color.accent};
    border-radius: 50%;
    content: '';
    height: ${p => p.theme.border};
    left: auto;
    right: ${rem('-23px')};
    position: absolute;
    top: calc(50% - ${p => math(`${p.theme.border} / 2`)});
    width: ${p => p.theme.border};
  }

  @media ${p => p.theme.media.xSmallMin} {
    font-size: 0.79rem;
    display: inline;
    &:not(:last-child) {
      margin-right: ${p => p.theme.contentMargin};
    }
    &.active::after {
      left: calc(50% - ${p => math(`${p.theme.border} / 2`)});
      right: auto;
      top: ${p => p.theme.contentMargin};
    }
  }
`;

const Menu = ({ items, isDark }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <Nav isDark={isDark} isMenuOpen={isMenuOpen}>
      {items.map(item => (
        <MenuLink
          className="smallcaps"
          key={item.url}
          to={item.url}
          activeClassName="active"
          partiallyActive={item.childRoutes}
        >
          {item.label}
        </MenuLink>
      ))}
    </Nav>
  );
};

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
      childRoutes: PropTypes.bool,
    })
  ).isRequired,
  isDark: PropTypes.bool,
};

Menu.defaultProps = {
  isDark: false,
};

export default Menu;

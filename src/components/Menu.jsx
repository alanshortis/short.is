import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { rem } from 'polished';

const StyledMenu = styled.ul`
  margin: 0;
  font-family: ${p => p.theme.font.faceMono};
  text-transform: uppercase;
  li {
    display: inline;
    margin: 0;
    &:not(:last-of-type) {
      margin-right: ${rem('28px')};
    }
  }
  a {
    text-decoration: none;
    color: ${p => p.theme.color.typeLight};
    position: relative;
    &.active {
      &::after {
        position: absolute;
        top: 2em;
        left: calc(50% - 3.5px);
        background-color: ${p => p.theme.color.accent};
        border-radius: 50%;
        content: '';
        height: 7px;
        width: 7px;
      }
    }
  }
`;

const partlyActive = className => ({ isPartiallyCurrent }) => ({
  className: className + (isPartiallyCurrent ? ` active` : ``),
});

const Menu = ({ className }) => (
  <nav>
    <StyledMenu>
      <li>
        <Link to="/writing" getProps={partlyActive(className)}>
          Writing
        </Link>
      </li>
      <li>
        <Link to="/playlists" getProps={partlyActive(className)}>
          Playlists
        </Link>
      </li>
      <li>
        <Link to="/photography" getProps={partlyActive(className)}>
          Photography
        </Link>
      </li>
      <li>
        <Link to="/about" getProps={partlyActive(className)}>
          About
        </Link>
      </li>
    </StyledMenu>
  </nav>
);

Menu.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Menu;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { rem } from 'polished';

const StyledMenu = styled.ul`
  display: block;
  font-family: ${p => p.theme.font.faceMono};
  margin: 0;
  text-transform: uppercase;
  li {
    display: none;
    margin: 0;
    margin-left: ${rem('28px')};
    @media ${p => p.theme.media.collapseMenu} {
      display: inline;
    }
    &:last-of-type {
      display: inline;
      @media ${p => p.theme.media.collapseMenu} {
        display: none;
      }
    }
  }
  a,
  button {
    appearance: none;
    background-color: transparent;
    border: 0;
    color: ${p => p.theme.color.typeLight};
    cursor: pointer;
    font-family: ${p => p.theme.font.faceMono};
    font-size: 1rem;
    padding: 0;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    &.active {
      &::after {
        background-color: ${p => p.theme.color.accent};
        border-radius: 50%;
        content: '';
        height: 7px;
        left: calc(50% - 3.5px);
        position: absolute;
        top: 2em;
        width: 7px;
      }
    }
  }
`;

const partlyActive = className => ({ isPartiallyCurrent }) => ({
  className: className + (isPartiallyCurrent ? ` active` : ``),
});

const handleMenu = () => {
  console.log('Clicked!');
};

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
      <li>
        <button type="button" onClick={handleMenu}>
          Menu
        </button>
      </li>
    </StyledMenu>
  </nav>
);

Menu.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Menu;

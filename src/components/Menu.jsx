import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { rem } from 'polished';

const StyledMenu = styled.ul`
  display: none;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  @media ${p => p.theme.media.collapseMenu} {
    display: block;
  }
  li {
    display: inline;
    list-style: none;
    margin: 0;
    margin-left: ${rem('28px')};
  }
  a {
    color: ${p => p.theme.color.typeLight};
    font-family: ${p => p.theme.font.faceMono};
    font-size: 1rem;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    &.active::after {
      background-color: ${p => p.theme.color.accent};
      border-radius: 50%;
      content: '';
      height: 0.5em;
      left: calc(50% - 0.25em);
      position: absolute;
      top: 2em;
      width: 0.5em;
    }
  }
`;

const Menu = ({ sections }) => (
  <nav>
    <StyledMenu>
      {sections.map(({ slug, title }) => (
        <li>
          <Link to={slug} activeClassName="active" partiallyActive>
            {title}
          </Link>
        </li>
      ))}
    </StyledMenu>
  </nav>
);

Menu.propTypes = {
  sections: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Menu;

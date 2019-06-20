import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${p => p.theme.color.typeLight};
  display: block;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  @media ${p => p.theme.media.collapseMenu} {
    display: none;
  }
`;

const MenuButton = () => <StyledButton type="button">Menu</StyledButton>;

export default MenuButton;

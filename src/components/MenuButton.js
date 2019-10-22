import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  display: block;
  height: 100%;
  color: currentColor;
  span {
    margin: 0;
  }
  @media ${p => p.theme.media.xSmallMin} {
    display: none;
  }
`;

const MenuButton = () => (
  <StyledButton>
    <span className="smallcaps">Menu</span>
  </StyledButton>
);

export default MenuButton;

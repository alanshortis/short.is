import React, { useContext } from 'react';
import styled from 'styled-components';
import { math } from 'polished';
import MenuContext from './MenuContext';

const StyledButton = styled.button`
  background-color: transparent;
  color: currentColor;
  cursor: pointer;
  display: block;
  height: 100%;
  span {
    color: currentColor;
    margin: 0;
    &.active {
      color: ${p => p.theme.color.accent};
      &::after {
        background-color: ${p => p.theme.color.accent};
        border-radius: 50%;
        content: '';
        height: ${p => p.theme.border};
        left: calc(50% - ${p => math(`${p.theme.border} / 2`)});
        position: absolute;
        top: ${p => p.theme.contentMargin};
        width: ${p => p.theme.border};
      }
    }
  }
  @media ${p => p.theme.media.xSmallMin} {
    display: none;
  }
`;

const MenuButton = () => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);

  return (
    <StyledButton onClick={() => toggleMenu(!isMenuOpen)}>
      <span className={`smallcaps ${isMenuOpen && 'active'}`}>Menu</span>
    </StyledButton>
  );
};

export default MenuButton;

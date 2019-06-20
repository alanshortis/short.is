import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: block;
  background-color: ${p => p.theme.color.backgroundDark};
  height: 100vh;
  position: fixed;
  transform: translateY(-100%);
  transition: visibility 0s, transform 1.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  width: 100vw;
  z-index: 1;
  @media ${p => p.theme.media.collapseMenu} {
    display: none;
  }
`;

const MobileMenu = () => <StyledMenu aria-hidden="true">MENU!</StyledMenu>;

export default MobileMenu;

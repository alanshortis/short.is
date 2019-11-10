import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid currentColor;
  cursor: pointer;
  padding: calc(${p => p.theme.contentMargin} / 2) ${p => p.theme.contentMargin};
  display: block;
  z-index: 1;
  && {
    margin: 0;
  }
`;

const Button = ({ children }) => (
  <StyledButton className="smallcaps" type="button">
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;

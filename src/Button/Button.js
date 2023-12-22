// Button.js
import React from 'react';
import { StyledButtonComponent } from './Button.Styled';

const Button = ({ type, variant, text, icon }) => {
  return (
    <StyledButtonComponent type={type} variant={variant}>
      {icon} {text}
    </StyledButtonComponent>
  );
};

export default Button;

// Button.js
import React from 'react';
import { StyledButtonComponent } from './Button.Styled';

const Button = ({ type, variant, border, text, icon, outline, hovers }) => {
  return (
    <StyledButtonComponent
      type={type}
      variant={variant}
      outline={outline}
      hovers={hovers}
      border={border}
    >
      {icon} {text}
    </StyledButtonComponent>
  );
};

export default Button;

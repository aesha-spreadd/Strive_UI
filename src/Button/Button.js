// Button.js
import React from 'react';
import { StyledButtonComponent } from './Button.Styled';

const Button = ({
  type,
  variant,
  border,
  text,
  icon,
  outline,
  disableHover,
}) => {
  return (
    <StyledButtonComponent
      type={type}
      variant={variant}
      outline={outline}
      disableHover={disableHover}
      border={border}
    >
      {icon} {text}
    </StyledButtonComponent>
  );
};

export default Button;

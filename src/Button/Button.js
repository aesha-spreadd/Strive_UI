// Button.js
import React from "react";
import { StyledButtonComponent } from "./Button.Styled";

const Button = ({ type, variant, text, icon, colorEffect, hovers }) => {
  return (
    <StyledButtonComponent
      type={type}
      variant={variant}
      colorEffect={colorEffect}
      hovers={hovers}
    >
      {icon} {text}
    </StyledButtonComponent>
  );
};

export default Button;

import React from 'react';
import { StyledAlertComponent } from './Alert.Styled';

const Alert = ({ type, variant, text, outline, border }) => {
  return (
    <StyledAlertComponent
      type={type}
      variant={variant}
      outline={outline}
      border={border}
    >
      <span>{type.charAt(0).toUpperCase() + type.slice(1)}:</span>
      {text}
    </StyledAlertComponent>
  );
};

export default Alert;

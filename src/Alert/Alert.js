import React from 'react';
import { StyledAlertComponent } from './Alert.Styled';

const Alert = ({ type, variant, text }) => {
  return (
    <StyledAlertComponent type={type} variant={variant}>
      <span>{type}:</span>
      {text}
    </StyledAlertComponent>
  );
};

export default Alert;

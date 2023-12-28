import React from 'react';
import { StyledInputComponent, StyledSpan } from './Input.Styled';

const Input = ({ label, color, spantext }) => {
  return (
    <StyledInputComponent color={color}>
      <label>{label}</label>
      <input type="text" />
      {spantext && <StyledSpan>{spantext}</StyledSpan>}
    </StyledInputComponent>
  );
};

export default Input;

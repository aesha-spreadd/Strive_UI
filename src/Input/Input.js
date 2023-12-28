import React from 'react';
import { StyledInputComponent, StyledSpan } from './Input.Styled';

const Input = ({ label, color, spantext, name, placeholder }) => {
  return (
    <StyledInputComponent color={color} name={name}>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
      {spantext && <StyledSpan>{spantext}</StyledSpan>}
    </StyledInputComponent>
  );
};

export default Input;

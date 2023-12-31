import React from 'react';
import { StyledInputComponent } from './Input.Styled';

const Input = ({ name, placeholder }) => {
  return (
    <StyledInputComponent name={name}>
      <input type="text" placeholder={placeholder} />
    </StyledInputComponent>
  );
};

export default Input;

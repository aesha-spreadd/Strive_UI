import React from 'react';
import { StyledInputComponent, Prefix, Suffix } from './Input.Styled';

const Input = ({ name, placeholder, suffix, prefix }) => {
  return (
    <StyledInputComponent name={name}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <input type="text" placeholder={placeholder} />
      {suffix && <Suffix>{suffix}</Suffix>}
    </StyledInputComponent>
  );
};

export default Input;

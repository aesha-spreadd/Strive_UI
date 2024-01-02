import React from 'react';
import { StyledInputComponent } from './Input.Styled';

const Input = ({ type, id, placeholder, prefix, suffix }) => {
  return (
    <StyledInputComponent>
      <div className="input-container">
        {prefix && <span className="prefix">{prefix}</span>}
        <input type={type} id={id} placeholder={placeholder} />
        {suffix && <span className="suffix">{suffix}</span>}
      </div>
    </StyledInputComponent>
  );
};

export default Input;

import React from 'react';
import { StyledToastComponent } from './Toast.Styled';

const Toast = ({ color, text }) => {
  return <StyledToastComponent color={color}>{text}</StyledToastComponent>;
};

export default Toast;

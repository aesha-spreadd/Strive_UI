// Typography.js
import React from 'react';
import { StyledTypographyComponent } from './Typography.Styled';

const Typography = ({ type, variant, text }) => {
  return (
    <StyledTypographyComponent type={type} variant={variant}>
      {text}
    </StyledTypographyComponent>
  );
};

export default Typography;

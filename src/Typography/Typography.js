// Typography.js
import React from 'react';
import { StyledTypographyComponent } from './Typography.Styled';

const Typography = ({ type, variant, text, typeColor }) => {
  return (
    <StyledTypographyComponent
      as={type}
      variant={variant}
      typeColor={typeColor}
    >
      {text}
    </StyledTypographyComponent>
  );
};

export default Typography;

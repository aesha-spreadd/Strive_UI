import React from 'react';
import { StyledTypographyComponent } from './Typography.Styled.js';

const Typography = ({ tag, text, typeColor }) => {
  return (
    <StyledTypographyComponent as={tag} typeColor={typeColor}>
      {text}
    </StyledTypographyComponent>
  );
};

export default Typography;

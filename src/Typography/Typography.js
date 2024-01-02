import React from 'react';
import { StyledTypographyComponent } from './Typography.Styled.js';

const Typography = ({ tag, text, typeColor, style }) => {
  return (
    <StyledTypographyComponent as={tag} typeColor={typeColor} style={style}>
      {text}
    </StyledTypographyComponent>
  );
};

export default Typography;

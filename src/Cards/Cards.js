import React from 'react';
import { StyledCardComponent, labelText as LabelWrapper } from './Cards.Styled';

const Cards = ({
  title,
  text,
  textUnique,
  unique,
  imgSrc,
  labelText,
  children,
}) => {
  return (
    <StyledCardComponent unique={unique} textUnique={textUnique}>
      {imgSrc && <img src={imgSrc} alt="Images" />}
      <h2>{title}</h2>
      {children && <div>{children}</div>}
      {labelText && <LabelWrapper>{labelText}</LabelWrapper>}
      {text && <p>{text}</p>}
    </StyledCardComponent>
  );
};

export default Cards;

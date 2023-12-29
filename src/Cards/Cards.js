import React from 'react';
import {
  StyledCardComponent,
  label as LabelWrapper,
  closeIcon as CloseIconWrapper,
} from './Cards.Styled';

const Cards = ({ title, description, imgSrc, label, closeIcon, children }) => {
  return (
    <StyledCardComponent>
      {imgSrc && <img src={imgSrc} alt="Images" />}
      <h2>{title}</h2>
      {children && <div>{children}</div>}
      {label && <LabelWrapper>{label}</LabelWrapper>}
      {closeIcon && <CloseIconWrapper>{closeIcon}</CloseIconWrapper>}
      {description && <p>{description}</p>}
    </StyledCardComponent>
  );
};

export default Cards;

import React from 'react';
import {
  StyledCardComponent,
  label as LabelWrapper,
  CloseIconWrapper,
} from './Cards.Styled';

const Cards = ({ title, description, imgSrc, label, closeIcon, children }) => {
  return (
    <StyledCardComponent>
      {imgSrc && <img src={imgSrc} alt="Images" />}
      <h2>{title}</h2>
      {children && <div>{children}</div>}
      {label && <LabelWrapper>{label}</LabelWrapper>}

      {description && <p>{description}</p>}
      {closeIcon && (
        <CloseIconWrapper className="custom-close-icon">
          {closeIcon}
        </CloseIconWrapper>
      )}
    </StyledCardComponent>
  );
};

export default Cards;

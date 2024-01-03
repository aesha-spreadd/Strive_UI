import React from 'react';
import {
  StyledCardComponent,
  StyledLabelWrapper,
  StyledCloseIconWrapper,
} from './Cards.Styled';

const Cards = ({ title, description, imgSrc, label, closeIcon, children }) => {
  return (
    <StyledCardComponent>
      {imgSrc && <img src={imgSrc} alt="Images" />}
      <h2>{title}</h2>
      {children && <div>{children}</div>}
      {label && <StyledLabelWrapper>{label}</StyledLabelWrapper>}

      {description && <p>{description}</p>}
      {closeIcon && (
        <StyledCloseIconWrapper className="custom-close-icon">
          {closeIcon}
        </StyledCloseIconWrapper>
      )}
    </StyledCardComponent>
  );
};

export default Cards;

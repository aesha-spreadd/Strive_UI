import React from 'react';
import { StyledImagesComponent } from './Images.Styled';

const Images = ({ type, img }) => {
  return (
    <StyledImagesComponent type={type}>
      <img src={img} alt="Images" />
    </StyledImagesComponent>
  );
};

export default Images;

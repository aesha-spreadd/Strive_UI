import React from 'react';
import { StyledImagesComponent } from './Images.Styled';

const Images = ({ shape, img }) => {
  return (
    <StyledImagesComponent shape={shape}>
      <img src={img} alt="Images" />
    </StyledImagesComponent>
  );
};

export default Images;

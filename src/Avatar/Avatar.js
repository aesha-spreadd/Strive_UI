import React from 'react';
import { StyledAvatarComponent } from './Avatar.Styled';

const Avatar = ({ type, img, variant }) => {
  return (
    <StyledAvatarComponent type={type} variant={variant}>
      <img src={img} alt="Avatar" />
    </StyledAvatarComponent>
  );
};

export default Avatar;

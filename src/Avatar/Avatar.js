import React from 'react';
import { StyledAvatarComponent } from './Avatar.Styled';

const Avatar = ({ size, img, shape }) => {
  return (
    <StyledAvatarComponent size={size} shape={shape}>
      <img src={img} alt="Avatar" />
    </StyledAvatarComponent>
  );
};

export default Avatar;

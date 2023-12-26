import React from 'react';
import Avatar from './Avatar';
import { AvatarContainer } from './Avatar.Styled';

export default {
  title: 'Avatar',
  component: Avatar,
};

export const CircularAvatar = () => (
  <div>
    <AvatarContainer>
      <Avatar type="small" img="https://i.pravatar.cc/40" variant="circle" />
      <Avatar type="medium" img="https://i.pravatar.cc/41" variant="circle" />
      <Avatar type="large" img="https://i.pravatar.cc/42" variant="circle" />
    </AvatarContainer>
  </div>
);

export const SquareAvatar = () => (
  <div>
    <AvatarContainer>
      <Avatar type="small" img="https://i.pravatar.cc/45" variant="square" />
      <Avatar type="medium" img="https://i.pravatar.cc/44" variant="square" />
      <Avatar type="large" img="https://i.pravatar.cc/43" variant="square" />
    </AvatarContainer>
  </div>
);

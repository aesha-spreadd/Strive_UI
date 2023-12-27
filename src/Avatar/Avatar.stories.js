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
      <Avatar size="small" img="https://i.pravatar.cc/40" shape="circle" />
      <Avatar size="medium" img="https://i.pravatar.cc/41" shape="circle" />
      <Avatar size="large" img="https://i.pravatar.cc/42" shape="circle" />
    </AvatarContainer>
  </div>
);

export const SquareAvatar = () => (
  <div>
    <AvatarContainer>
      <Avatar size="small" img="https://i.pravatar.cc/45" shape="square" />
      <Avatar size="medium" img="https://i.pravatar.cc/44" shape="square" />
      <Avatar size="large" img="https://i.pravatar.cc/43" shape="square" />
    </AvatarContainer>
  </div>
);

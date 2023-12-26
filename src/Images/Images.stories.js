import React from 'react';
import { AvatarContainer } from '../Avatar/Avatar.Styled';
import Images from './Images';

export default {
  title: 'Images',
  component: Images,
};

export const CircularImages = () => (
  <div>
    <AvatarContainer>
      <Images type="circle" img="https://i.pravatar.cc/40" />
      <Images type="circle" img="https://i.pravatar.cc/41" />
    </AvatarContainer>
  </div>
);

export const SquareImages = () => (
  <div>
    <AvatarContainer>
      <Images type="square" img="https://i.pravatar.cc/45" />
      <Images type="square" img="https://i.pravatar.cc/44" />
    </AvatarContainer>
  </div>
);

export const ResponsiveImages = () => (
  <div>
    <AvatarContainer>
      <Images type="response" img="https://i.pravatar.cc/" />
    </AvatarContainer>
  </div>
);

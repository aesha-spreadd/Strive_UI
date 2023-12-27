import React from 'react';
import { AvatarContainer } from '../Avatar/Avatar.Styled';
import Images from './Images'; // Assuming Images is the correct component to use

export default {
  title: 'Images',
  component: Images,
};

export const CircularImages = () => (
  <div>
    <AvatarContainer>
      <Images shape="circle" img="https://i.pravatar.cc/40" />
      <Images shape="circle" img="https://i.pravatar.cc/41" />
    </AvatarContainer>
  </div>
);

export const SquareImages = () => (
  <div>
    <AvatarContainer>
      <Images shape="square" img="https://i.pravatar.cc/45" />
      <Images shape="square" img="https://i.pravatar.cc/44" />
    </AvatarContainer>
  </div>
);

export const ResponsiveImages = () => (
  <div>
    <AvatarContainer>
      <Images shape="response" img="https://i.pravatar.cc/" />
    </AvatarContainer>
  </div>
);

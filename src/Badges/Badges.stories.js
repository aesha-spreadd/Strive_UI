import React from 'react';
import Badges from './Badges';
import { StyledBadgesComponent } from './Badges.Styled';

export default {
  title: 'Badges',
  component: Badges,
};

export const CartBadges = () => (
  <div>
    <StyledBadgesComponent>
      <Badges
        type="small"
        variant="cart"
        img="https://adorn-components.netlify.app/assets/images/cart.svg"
        number={10}
      />
      <Badges
        type="medium"
        variant="cart"
        img="https://adorn-components.netlify.app/assets/images/cart.svg"
        number={12}
      />
      <Badges
        type="large"
        variant="cart"
        img="https://adorn-components.netlify.app/assets/images/cart.svg"
        number={15}
      />
    </StyledBadgesComponent>
  </div>
);

export const ImageBadges = () => (
  <div>
    <StyledBadgesComponent>
      <Badges
        type="small"
        variant="image"
        colorsEffect="primary"
        img="https://i.pravatar.cc/62"
      />
      <Badges
        type="medium"
        variant="image"
        colorsEffect="warning"
        img="https://i.pravatar.cc/61"
      />
      <Badges
        type="large"
        variant="image"
        colorsEffect="success"
        img="https://i.pravatar.cc/60"
      />
    </StyledBadgesComponent>
  </div>
);

import React from 'react';
import { StyledBadgesComponent } from './Badges.Styled';

const Badges = ({ type, variant, img, number, colorsEffect }) => {
  return (
    <StyledBadgesComponent
      type={type}
      number={number}
      colorsEffect={colorsEffect}
      variant={variant}
    >
      <div className="badge-content">
        <span className="badge-number">{number}</span>
        <img src={img} alt="badge" />
      </div>
    </StyledBadgesComponent>
  );
};

export default Badges;

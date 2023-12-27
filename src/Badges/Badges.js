import React from 'react';
import { StyledBadgesComponent } from './Badges.Styled';

const Badges = ({ count, type, img, size, color }) => {
  return (
    <StyledBadgesComponent type={type} count={count} color={color} size={size}>
      <div className="badge-content">
        <span className="badge-number">{count}</span>
        <img src={img} alt="badge" />
      </div>
    </StyledBadgesComponent>
  );
};

export default Badges;
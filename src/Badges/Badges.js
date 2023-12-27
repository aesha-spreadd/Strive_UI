import React from 'react';
import { StyledBadgesComponent } from './Badges.Styled';
import { count } from 'console';

const Badges = ({ count, shape, img, count, color }) => {
  return (
    <StyledBadgesComponent
      shape={shape}
      count={count}
      color={color}
      size={size}
    >
      <div className="badge-content">
        <span className="badge-number">{count}</span>
        <img src={img} alt="badge" />
      </div>
    </StyledBadgesComponent>
  );
};

export default Badges;

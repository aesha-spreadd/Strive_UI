import styled, { css } from 'styled-components';

const sizes = {
  small: { width: '34px', height: '34px' },
  medium: { width: '44px', height: '44px' },
  large: { width: '54px', height: '54px' },
};

const avatarStyles = css`
  ${({ type }) => `
    width: ${sizes[type]?.width};
    height: ${sizes[type]?.height};
  `}
`;

export const StyledAvatarComponent = styled.div`
  ${({ variant }) => css`
    img {
      border-radius: ${variant === 'square' ? '0.5rem' : '50%'};
      display: block;
      overflow: hidden;
      margin: 0 5px;
      ${avatarStyles}
    }
  `}
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export default StyledAvatarComponent;

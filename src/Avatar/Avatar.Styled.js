import styled, { css } from 'styled-components';

const sizes = {
  small: { width: '3.4rem', height: '3.4rem' },
  medium: { width: '4.4rem', height: '4.4rem' },
  large: { width: '5.4rem', height: '5.4rem' },
};

const avatarStyles = css`
  align-items: center;
  ${({ type }) => `
    width: ${sizes[type]?.width};
    height: ${sizes[type]?.height};
  `}
`;

export const StyledAvatarComponent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;

  ${({ variant }) => css`
    align-items: ${variant === 'square'
        ? 'center; flex-wrap: wrap;'
        : 'center;'}
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
`;

export default StyledAvatarComponent;

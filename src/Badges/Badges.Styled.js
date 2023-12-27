import styled, { css } from 'styled-components';
import theme from '../theme';

const sizes = {
  small: { width: '34px', height: '34px' },
  medium: { width: '44px', height: '44px' },
  large: { width: '54px', height: '54px' },
};

export const StyledBadgesComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 0.6rem;
  font-weight: bold;
  font-family: Rubik, sans-serif;
  position: relative;
  margin-right: 5px;

  span.badge-number {
    position: absolute;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    padding: 2px;
    transition:
      top 0.3s ease,
      font-size 0.3s ease;
  }

  img {
    border-radius: 50%;
    transition:
      width 0.3s ease,
      height 0.3s ease;
    ${({ size }) => `
      width: ${sizes[size]?.width};
      height: ${sizes[size]?.height};
    `}
  }

  ${({ type, color }) =>
    type === 'default'
      ? css`
          span.badge-number {
            background-color: ${theme?.[color]};
            color: ${theme?.[color]};
            top: ${color === 'primary' ? 17 : color === 'warning' ? 26 : 36}px;
          }
        `
      : css`
          span.badge-number {
            top: 1px;
            right: -3px;
            background-color: ${theme.primary};
            color: ${theme.textColor};
            border: 2px solid white;
          }
        `}
`;

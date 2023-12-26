import styled, { css } from 'styled-components';
import theme from '../theme';

const sizes = {
  small: { width: '34px', height: '34px' },
  medium: { width: '44px', height: '44px' },
  large: { width: '54px', height: '54px' },
};

export const StyledBadgesComponent = styled.div`
  flex-direction: row;
  justify-content: center;
  font-size: 0.6rem;
  font-weight: bold;
  font-family: Rubik, sans-serif;
  gap: 0.2rem;

  ${({ variant, colorsEffect }) =>
    variant === 'image'
      ? css`
          position: relative;
          margin-right: 5px;

          span.badge-number {
            position: absolute;
            top: 30px;
            height: 10px;
            width: 10px;
            background-color: ${theme?.[colorsEffect]};
            color: ${theme?.[colorsEffect]};
            border-radius: 50%;
            padding: 2px;
            transition:
              top 0.3s ease,
              font-size 0.3s ease;
          }

          img {
            border-radius: 50%;
            ${({ type }) => `
              width: ${sizes[type]?.width};
              height: ${sizes[type]?.height};
            `}
          }

          ${colorsEffect &&
          css`
            span.badge-number {
              top: ${colorsEffect === 'primary'
                ? 17
                : colorsEffect === 'warning'
                  ? 26
                  : 36}px;
            }
          `}
        `
      : css`
          position: relative;
          display: flex;
          align-items: center;
          margin-right: 5px;

          span.badge-number {
            position: absolute;
            top: 1px;
            right: -3px;
            height: 12px;
            width: 12px;
            background-color: ${theme.primary};
            color: ${theme.textColor};
            border-radius: 50%;
            padding: 2px;
            border: 2px solid white;
          }

          img {
            border-radius: 50%;

            ${({ type }) => `
              width: ${sizes[type]?.width};
              height: ${sizes[type]?.height};
            `}
          }
        `}
`;

export default StyledBadgesComponent;

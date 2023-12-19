import styled, { css } from 'styled-components';
import theme from '../theme';

export const StyledTypographyComponent = styled.div`
  font-family: 'Rubik', sans-serif;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ typeColor }) => theme[typeColor] || theme.textLinkColors};
  ${({ type, variant, typeColor }) =>
    type
      ? css`
          ${variant ? `color: ${theme?.[typeColor]};` : ''}
          ${type === 'h1'
            ? css`
                font-size: 48px;
                font-weight: 800;
                height: 50.3984px;
                line-height: 50.4px;
              `
            : type === 'h2'
            ? css`
                font-size: 36px;
                font-weight: 700;
                height: 45px;
              `
            : type === 'h3'
            ? css`
                font-size: 28px;
                font-weight: 600;
                height: 35px;
              `
            : type === 'h4'
            ? css`
                font-size: 18px;
                font-weight: 500;
                height: 21.9531px;
              `
            : type === 'h5'
            ? css`
                font-size: 14px;
                font-weight: 500;
                height: 17.0781px;
              `
            : type === 'h6'
            ? css`
                font-size: 10px;
                font-weight: 400;
                height: 12.1953px;
              `
            : ''}
          position: relative;
          &:hover::before {
            content: attr(data-type); // Show the 'type' attribute on hover
            position: absolute;
            top: 100%;
            left: 0;
            background: rgba(255, 255, 255, 0.9);
            padding: 5px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 12px;
            white-space: nowrap;
          }
        `
      : ''}
`;

export const Divider = styled.hr`
  border: 0.5px inset ${theme.textLinkColors};
  display: block;
  width: 1000px;
`;

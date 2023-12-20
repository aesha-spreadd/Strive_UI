// Button.Styled.js
import styled, { css } from 'styled-components';
import theme from '../theme';

export const StyledButtonComponent = styled.button`
  height: 38px;
  width: max-content;
  padding: 11px 28px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  margin-right: 10px;
  margin-top: 10px;
  font-family: Arial;
  font-weight: 600;
  text-transform: uppercase;

  ${({ type, variant, colorEffect, hovers }) => {
    const isOutlined = variant === 'outlined';
    const isTextButton = variant === 'textButton';
    const bgColor = colorEffect ? 'transparent' : theme?.[type];
    const textColor = colorEffect ? theme?.[type] : 'white';
    const borderColor = isOutlined
      ? theme?.[type]
      : isTextButton
      ? 'transparent'
      : theme?.[type];
    return css`
      background-color: ${bgColor};
      color: ${textColor};
      border: 2px solid ${borderColor};

      ${colorEffect &&
      hovers &&
      css`
        &:hover,
        &:active {
          background-color: ${theme?.[type]};
          color: white;
          border: 2px solid ${theme?.[type]};
        }
      `}
    `;
  }}
`;

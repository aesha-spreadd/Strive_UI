import styled, { css } from 'styled-components';
import theme from '../theme';

export const StyledButtonComponent = styled.button`
  height: 38px;
  width: max-content;
  padding: 11px 28px;
  cursor: pointer;
  border: 2px solid;
  border-radius: 4px;
  font-size: 14px;
  margin-right: 10px;
  margin-top: 10px;
  font-family: Arial;
  font-weight: 600;

  ${({ type, outline, border }) => css`
    text-transform: uppercase;
    background-color: ${outline ? 'transparent' : theme?.[type]};
    color: ${outline ? theme?.[type] : 'white'};
    border-color: ${border ? 'transparent' : theme?.[type]};
  `}

  ${css`
    padding: 10px 20px;
    text-transform: uppercase;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
  `}

  ${css`
    ${({ outline, disableHover, type }) => {
      if (outline) {
        return css`
          background-color: transparent;
          color: ${theme?.[type]};
        `;
      } else {
        return css`
          background-color: ${theme?.[type]};
          color: white;

          ${!disableHover &&
          css`
            &:hover,
            &:active {
              background-color: ${theme?.[type]};
              color: white;
            }
          `}
        `;
      }
    }}
  `}
`;

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
  text-transform: uppercase;

  ${({ type, outline, border }) => css`
    background-color: ${outline ? 'transparent' : theme?.[type]};
    color: ${outline ? theme?.[type] : 'white'};
    border-color: ${border ? 'transparent' : theme?.[type]};
  `}

  ${css`
    ${({ outline, hovers, type }) => {
      if (outline) {
        return css`
          background-color: transparent;
          color: ${theme?.[type]};
          ${hovers &&
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

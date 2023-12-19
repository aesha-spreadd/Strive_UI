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

  background-color: ${({ outline, type }) =>
    outline ? 'transparent' : theme?.[type]};
  color: ${({ outline, type }) => (outline ? theme?.[type] : 'white')};
  border-color: ${({ border, type }) =>
    border ? 'transparent' : theme?.[type]};

  padding: 10px 20px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;

  ${({ outline, hovers, type }) =>
    outline &&
    css`
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
    `}

  ${({ outline, hovers, type }) =>
    !outline &&
    css`
      background-color: ${theme?.[type]};
      color: white;
      ${!hovers &&
      css`
        &:hover,
        &:active {
          background-color: ${theme?.[type]};
          color: white;
        }
      `}
    `}
`;

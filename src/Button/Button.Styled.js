import styled, { css } from 'styled-components';
import theme from '../theme';
import { TextButtons } from './Button.stories';

export const StyledButtonComponent = styled.button`
  height: 38px;
  width: max-content;
  padding: 10px 28px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  margin-right: 10px;
  font-family: Arial;
  font-weight: 600;
  text-transform: uppercase;
  justify-content: center;

  ${({ type, variant }) => {
    const isOutlined = variant === 'outlined';
    const isTextButton = variant === 'text';
    const isContained = variant === 'contained';

    const bgColor = isTextButton ? 'transparent' : theme?.[type];
    const textColor = isOutlined || isTextButton ? theme?.[type] : 'white';
    const borderColor = isOutlined ? theme?.[type] : 'transparent';

    return css`
      background-color: ${isOutlined ? 'white' : bgColor};
      color: ${textColor};
      border: ${isTextButton || isContained
        ? 'none'
        : `2px solid ${borderColor}`};

      ${!isTextButton &&
      !isContained &&
      css`
        &:hover {
          background-color: ${isOutlined ? theme?.[type] : 'white'};
          color: ${isOutlined ? 'white' : theme?.[type]};
          border: 2px solid ${theme?.[type]};
        }
      `}
    `;
  }}
`;

import styled, { css } from 'styled-components';
import theme from '../theme';

export const StyledAlertComponent = styled.div`
  overflow: hidden;
  height: 38px;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  font-weight: 500;
  width: 400px;
  border-radius: 4px;
  opacity: 0.9;
  margin: 0.5rem 0;
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  ${({ type, variant }) => {
    const isOutlined = variant === 'outlined';
    const isContained = variant === 'contained';

    const bgColor = isOutlined ? 'transparent' : theme?.[type];
    const textColor = isOutlined ? theme?.[type] : 'white';
    const borderColor = isOutlined ? theme?.[type] : 'transparent';

    return css`
      background-color: ${isOutlined ? 'white' : bgColor};
      color: ${textColor};
      border: ${isContained ? 'none' : `2px solid ${borderColor}`};
      span {
        font-weight: bold;
        margin-right: 8px;
        text-transform: capitalize;
      }
    `;
  }}
`;

export default StyledAlertComponent;

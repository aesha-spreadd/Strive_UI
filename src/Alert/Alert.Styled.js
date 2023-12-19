import styled, { css } from 'styled-components';
import theme from '../theme';

export const StyledAlertComponent = styled.div`
  overflow: hidden;
  height: 38.5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  font-weight: 500;
  width: 100%;
  border-radius: 4px;
  opacity: 0.9;
  margin: 0.5rem 0;
  font-family: Rubik, sans-serif;
  font-size: 14px;

  ${({ type, outline, border }) => css`
    background-color: ${outline ? 'white' : theme?.[type]};
    color: ${outline ? theme?.[type] : 'white'};
    border: 1px solid ${border ? theme?.[type] : 'transparent'};

    span {
      font-weight: bold;
      margin-right: 8px;
    }
  `}
`;

export default StyledAlertComponent;

import styled, { css } from 'styled-components';
import theme from '../theme';

export const ToastContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 15px 50px;
`;

export const StyledToastComponent = styled.div`
  align-items: flex-start;
  border-radius: 5px;
  width: 100%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  overflow: hidden;
  font-weight: 500;
  margin: 5px 10px;
  opacity: 0.9;
  font-family: 'Rubik', sans-serif;
  font-size: 15px;

  ${({ type }) => css`
    background-color: ${theme.textColor};
    color: ${theme?.[color]};
    border: 2px solid ${theme?.[color]};
  `}
`;

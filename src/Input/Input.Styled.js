import styled from 'styled-components';
import theme from '../theme';

export const StyledInputComponent = styled.div`
  font-family: 'Rubik', sans-serif;
  font-size: 15px;
  padding: 0 50px;
  margin: 10px 0 0 0;
  display: flex;
  flex-direction: column;

  label {
    display: block;
    margin: 0 0 8px 0;
    font-size: 15px;
    color: ${(props) => (props.color ? theme.primary : 'black')};
  }

  .input-container {
    position: relative;
  }

  input {
    width: calc(100% - 24px);
    padding: 8px;
    margin: 0 0 16px 0;
    border: 1px solid
      ${(props) => (props.name === 'password' ? theme.primary : 'black')};
    border-radius: 3px;
    padding-left: 26px;
    box-sizing: border-box;
  }

  .prefix {
    position: absolute;
    left: 8px;
    top: 36%;
    transform: translateY(-50%);
    color: ${theme.pastelColor};
    font-weight: bold;
  }
  .suffix {
    position: absolute;
    right: 34px;
    top: 36%;
    transform: translateY(-50%);
    color: ${theme.pastelColor};
    font-weight: bold;
  }
`;

export const StyledInputType = styled.div`
  height: 100%;
  width: 100%;
  margin: 20px 0;

  .input-container {
    position: relative;
  }
`;

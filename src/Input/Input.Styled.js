import styled from 'styled-components';
import theme from '../theme';

export const StyledInputComponent = styled.div`
  column-gap: 10px;
  flex-wrap: wrap;
  font-family: 'Rubik', sans-serif;
  font-size: 15px;
  height: 182px;
  justify-content: center;
  padding: 15px 50px;
  row-gap: 10px;
  width: 800px;

  input {
    width: 100%;
    padding: 8px;
    margin: 0 0 16px 0;
    border: 1px solid ${(props) => (props.color ? theme.primary : 'black')};
    border-radius: 3px;
  }

  label {
    display: block;
    margin: 0 0 8px 0;
    font-size: 15px;
    color: ${(props) => (props.color ? theme.primary : 'black')};
  }
`;

export const Input_Container_inputs_type = styled.div`
  flex-direction: column;
  flex-wrap: nowrap;
  height: 77px;
  width: 540px;
`;

export const StyledSpan = styled.span`
  color: ${theme.primary};
  font-size: 15px;
`;

import styled from 'styled-components';
import theme from '../theme';

export const StyledInputComponent = styled.div`
  font-family: 'Rubik', sans-serif;
  font-size: 15px;
  padding: 0 50px;
  margin: 10px 0 0 0;

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
  height: 100%;
  width: 100%;
`;

export const StyledSpan = styled.span`
  color: ${theme.primary};
  font-size: 15px;
`;

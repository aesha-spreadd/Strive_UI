import styled from 'styled-components';
import theme from '../theme';

export const StyledNavbarComponent = styled.div`
  font-family: 'Rubik', sans-serif;
`;

export const StyledNavbarMainContainer = styled.div`
  background-color: rgb(255, 237, 237);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledNavbarExample = styled.div`
  background: ${theme.textColor};
  width: 100%;
  display: flex;
  align-items: center;

  h2 {
    color: ${theme.primary};
    padding: 0 0 0 18px;
    font-weight: 600;
    font-size: 30px;
    margin: 0 30px 0 0;
    line-height: 35px;
  }
`;

export const StyledNavbarContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 45.5px;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
`;

export const StyledNavbarContentContainer = styled.div`
  align-items: center;
  display: flex;

  input[type='text'] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    width: 200px;
  }
`;

export const StyledNavbarIconContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const StyledNavbarLinkContainer = styled.div`
  margin: 0;

  ul {
    list-style-type: none;
    display: inline-flex;
  }

  li {
    padding: 5px;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 4px;
  }

  li:hover {
    background-color: ${theme.textColor};
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${theme.secondary};
  }

  a:hover {
    color: ${theme.primary};
  }
`;

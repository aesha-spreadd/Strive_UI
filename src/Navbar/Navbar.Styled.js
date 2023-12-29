import styled from 'styled-components';
import theme from '../theme';

export const StyledNavbarComponent = styled.div`
  font-family: 'Rubik', sans-serif;
`;

export const NavbarMainContainer = styled.div`
  background-color: rgb(255, 237, 237);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledNavbarExample = styled.div`
  background: rgb(246, 249, 252);
  width: 100%;
  display: flex;
  align-items: center;
  h2 {
    color: ${theme.primary};
    padding-left: 18px;
    font-weight: 600;
    font-size: 30px;
    margin-right: 30px;
  }
`;

export const NavbarContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 45.5px;
  justify-content: space-between;
  width: 1000px;
`;

export const NavbarContentContainer = styled.div`
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

export const NavbarIconContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;

export const NavbarLinkContainer = styled.div`
  margin: 0;
  ul {
    list-style-type: none;
    display: inline-flex;
  }

  li {
    padding: 5px;
    margin: 5px;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 4px;
  }
  li:hover {
    background-color: white;
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

import React from 'react';
import {
  StyledNavbarComponent,
  StyledNavbarMainContainer,
} from './Navbar.Styled';

const Navbar = ({ title, children }) => {
  return (
    <StyledNavbarComponent>
      <StyledNavbarMainContainer>
        {title && <h2>{title}</h2>}
        {children}
      </StyledNavbarMainContainer>
    </StyledNavbarComponent>
  );
};

export default Navbar;

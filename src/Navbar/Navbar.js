import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledNavbarComponent,
  NavbarMainContainer,
  StyledNavbarExample,
  NavbarContentContainer,
  NavbarIconContainer,
  NavbarLinkContainer,
} from './Navbar.Styled';
import Home from '../Components/Home';
import About from '../Components/About';

import Button from '../Button/Button';
import Badges from '../Badges/Badges';

const Navbar = ({ title }) => {
  return (
    <StyledNavbarComponent>
      <NavbarMainContainer>
        <StyledNavbarExample>
          <h2>{title}</h2>
          <NavbarContentContainer>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="Search"
                style={{ marginRight: '10px' }}
              />
              <Button type="secondary" variant="outlined" text="Login" />
            </div>
          </NavbarContentContainer>

          <NavbarIconContainer>
            <Badges
              size="medium"
              type="cart"
              img="https://adorn-components.netlify.app/assets/images/heartIcon.svg"
              count={12}
            />
            <Badges
              size="medium"
              type="cart"
              img="https://adorn-components.netlify.app/assets/images/cart-outlined.svg"
              count={12}
            />
          </NavbarIconContainer>

          <NavbarLinkContainer>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
            </ul>
          </NavbarLinkContainer>
        </StyledNavbarExample>
      </NavbarMainContainer>
    </StyledNavbarComponent>
  );
};

export default Navbar;

import React from 'react';
import Navbar from './Navbar';
import {
  StyledNavbarExample,
  NavbarContentContainer,
  NavbarIconContainer,
  NavbarLinkContainer,
} from './Navbar.Styled';
import Button from '../Button/Button';
import Badges from '../Badges/Badges';

export default {
  title: 'Navbar',
  component: Navbar,
};

export const ListNavbar = () => (
  <div>
    <Navbar>
      <StyledNavbarExample>
        <h2>Adorn Box</h2>
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </NavbarLinkContainer>
      </StyledNavbarExample>
    </Navbar>
  </div>
);

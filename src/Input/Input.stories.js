import React from 'react';
import Input from './Input';
import { StyledInputType } from './Input.Styled';
import Typography from '../Typography/Typography';
import { StyledTypographyComponent } from '../Typography/Typography';

export default {
  title: 'Input',
  component: Input,
};

export const Inputs = () => (
  <div>
    <StyledInputType>
      <Typography
        tag="p"
        text="Username*"
        typeColor="textLinkColor"
        style={{ margin: '0 0 0 50px', display: 'block' }}
      />
      <Input name="username" placeholder="Enter name here" />
    </StyledInputType>
    <StyledInputType>
      <Typography
        tag="p"
        text="Password*"
        typeColor="primary"
        style={{ margin: '0 0 0 50px', display: 'block' }}
      />
      <Input name="password" placeholder="Enter password here" />
      <Typography
        tag="p"
        text="Password is incorrect"
        typeColor="primary"
        style={{ margin: '0 0 0 50px', display: 'block' }}
      />
    </StyledInputType>
  </div>
);

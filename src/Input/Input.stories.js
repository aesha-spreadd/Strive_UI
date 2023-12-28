import React from 'react';
import Input from './Input';
import { Input_Container_inputs_type } from './Input.Styled';

export default {
  title: 'Input',
  component: Input,
};

export const Inputs = () => (
  <div>
    <Input_Container_inputs_type>
      <Input label="Username*" name="username" placeholder="Enter name here" />
    </Input_Container_inputs_type>
    <Input_Container_inputs_type>
      <Input
        label="Password*"
        name="password"
        placeholder="Enter password here"
        color
        spantext="Password is incorrect"
      />
    </Input_Container_inputs_type>
  </div>
);

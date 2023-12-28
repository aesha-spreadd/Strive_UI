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
      <Input label="Username*" />
    </Input_Container_inputs_type>
    <Input_Container_inputs_type>
      <Input label="Password*" color spantext="Password is incorrect" />
    </Input_Container_inputs_type>
  </div>
);

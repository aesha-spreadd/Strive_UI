import React from 'react';
import { FaSave } from 'react-icons/fa';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const ContainedButton = () => (
  <div>
    <Button type="primary" variant="contained" text="Primary Button" />
    <Button type="secondary" variant="contained" text="Secondary Button" />
    <Button type="success" variant="contained" text="Success Button" />
    <Button type="warning" variant="contained" text="Warning Button" />
  </div>
);

export const OutlineButtons = () => (
  <div>
    <Button type="primary" variant="outlined" text="Primary Button" />
    <Button type="secondary" variant="outlined" text="Secondary Button" />
    <Button type="success" variant="outlined" text="Success Button" />
    <Button type="warning" variant="outlined" text="Warning Button" />
  </div>
);

export const TextButtons = () => (
  <div>
    <Button type="primary" variant="text" text="Primary Link Button" />
    <Button type="secondary" variant="text" text="Secondary Link Button" />
    <Button type="success" variant="text" text="Success Link Button" />
    <Button type="warning" variant="text" text="Warning Link Button" />
  </div>
);

export const IconButtons = () => (
  <div>
    <Button
      type="primary"
      variant="outlined"
      text="Save Button"
      icon={<FaSave />}
    />
    <Button
      type="primary"
      variant="contained"
      text="Save Button"
      icon={<FaSave />}
    />
  </div>
);

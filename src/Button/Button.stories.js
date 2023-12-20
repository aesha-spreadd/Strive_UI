import React from 'react';
import { FaSave } from 'react-icons/fa';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const listButton = () => (
  <div>
    <Button type="primary" variant="contained" text="Primary Button" />
    <Button type="secondary" variant="contained" text="Secondary Button" />
    <Button type="success" variant="contained" text="Success Button" />
    <Button type="warning" variant="contained" text="Warning Button" />
  </div>
);

export const OutlineButtons = () => (
  <div>
    <Button
      type="primary"
      variant="outlined"
      text="Primary Button"
      colorEffect
      hovers
    />
    <Button
      type="secondary"
      variant="outlined"
      text="Secondary Button"
      colorEffect
      hovers
    />
    <Button
      type="success"
      variant="outlined"
      text="Success Button"
      colorEffect
      hovers
    />
    <Button
      type="warning"
      variant="outlined"
      text="Warning Button"
      colorEffect
      hovers
    />
  </div>
);

export const TextButtons = () => (
  <div>
    <Button
      type="primary"
      variant="textButton"
      text="Primary Link Button"
      colorEffect
    />
    <Button
      type="secondary"
      variant="textButton"
      text="Secondary Link Button"
      colorEffect
    />
    <Button
      type="success"
      variant="textButton"
      text="Success Link Button"
      colorEffect
    />
    <Button
      type="warning"
      variant="textButton"
      text="Warning Link Button"
      colorEffect
    />
  </div>
);

export const IconButtons = () => (
  <div>
    <Button
      type="primary"
      variant="iconButton"
      text="Save Button"
      colorEffect
      hovers
      icon={<FaSave />}
    />
    <Button
      type="primary"
      variant="iconButton"
      text="Save Button"
      contained
      icon={<FaSave />}
    />
  </div>
);

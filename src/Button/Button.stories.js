import React from 'react';
import { FaSave } from 'react-icons/fa';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const listButton = () => (
  <div>
    <Button type="primary" variant="contained" text="PRIMARY BUTTON" />
    <Button type="secondary" variant="contained" text="SECONDARY BUTTON" />
    <Button type="success" variant="contained" text="SUCCESS BUTTON" />
    <Button type="warning" variant="contained" text="WARNING BUTTON" />
  </div>
);

export const OutlineButtons = () => (
  <div>
    <Button type="primary" variant="outlined" text="PRIMARY BUTTON" outline />
    <Button
      type="secondary"
      variant="outlined"
      text="SECONDARY BUTTON"
      outline
    />
    <Button type="success" variant="outlined" text="SUCCESS BUTTON" outline />
    <Button type="warning" variant="outlined" text="WARNING BUTTON" outline />
  </div>
);

export const TextButtons = () => (
  <div>
    <Button
      type="primary"
      variant="contained"
      text="Primary Link Button"
      border
      outline
      hover
    />
    <Button
      type="secondary"
      variant="contained"
      text="SECONDARY LINK BUTTON"
      border
      outline
      hover
    />
    <Button
      type="success"
      variant="contained"
      text="SUCCESS LINK BUTTON"
      border
      outline
      hover
    />
    <Button
      type="warning"
      variant="contained"
      text="WARNING LINK BUTTON"
      border
      outline
      hover
    />
  </div>
);

export const IconButtons = () => (
  <div>
    <Button
      type="primary"
      variant="outlined"
      text="Save Button"
      outline
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

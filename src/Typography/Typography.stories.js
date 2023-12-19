import React from 'react';
import Typography from './Typography';
import { Divider } from './Typography.Styled';

export default {
  title: 'Typography',
  component: Typography,
};

export const HeadingsTypography = () => (
  <div>
    <Typography type="h1" variant="heading" text="H1. Adorn Box heading" />
    <Divider />
    <Typography type="h2" variant="heading" text="H2. Adorn Box heading" />
    <Divider />
    <Typography type="h3" variant="heading" text="H3. Adorn Box heading" />
    <Divider />
    <Typography type="h4" variant="heading" text="H4 Adorn Box heading" />
    <Divider />
    <Typography type="h5" variant="heading" text="H5. Adorn Box heading" />
    <Divider />
    <Typography type="h6" variant="heading" text="H6. Adorn Box heading" />
    <Divider />
  </div>
);

export const TextTypography = () => (
  <div>
    <Typography
      type="primary"
      variant="typography"
      text="Adorn Box text with primary color"
    />
    <Divider />
    <Typography
      type="secondary"
      variant="typography"
      text="Adorn Box text with secondary color"
    />
    <Divider />
    <Typography
      type="success"
      variant="typography"
      text="Adorn Box text with success color"
    />
    <Divider />
    <Typography
      type="danger"
      variant="typography"
      text="Adorn Box text with danger color"
    />
    <Divider />
    <Typography
      type="warning"
      variant="typography"
      text="Adorn Box text with warning color"
    />
    <Divider />
  </div>
);

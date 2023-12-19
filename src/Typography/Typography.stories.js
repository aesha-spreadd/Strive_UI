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
      type="p"
      variant="typography"
      text="Adorn Box text with primary color"
      typeColor="primary"
    />
    <Divider />
    <Typography
      type="p"
      variant="typography"
      text="Adorn Box text with secondary color"
      typeColor="secondary"
    />
    <Divider />
    <Typography
      type="p"
      variant="typography"
      text="Adorn Box text with success color"
      typeColor="success"
    />
    <Divider />
    <Typography
      type="p"
      variant="typography"
      text="Adorn Box text with danger color"
      typeColor="danger"
    />
    <Divider />
    <Typography
      type="p"
      variant="typography"
      text="Adorn Box text with warning color"
      typeColor="warning"
    />
    <Divider />
  </div>
);

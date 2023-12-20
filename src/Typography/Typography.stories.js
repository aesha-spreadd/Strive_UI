import React from 'react';
import Typography from './Typography';

export default {
  title: 'Typography',
  component: Typography,
};

export const HeadingsTypography = () => (
  <div>
    <Typography tag="h1" text="H1. Adorn Box heading" />
    <Typography tag="h2" text="H2. Adorn Box heading" />
    <Typography tag="h3" text="H3. Adorn Box heading" />
    <Typography tag="h4" text="H4. Adorn Box heading" />
    <Typography tag="h5" text="H5. Adorn Box heading" />
    <Typography tag="h6" text="H6. Adorn Box heading" />
  </div>
);

export const TextTypography = () => (
  <div>
    <Typography
      tag="p"
      text="Adorn Box text with primary color"
      typeColor="primary"
    />
    <Typography
      tag="p"
      text="Adorn Box text with secondary color"
      typeColor="secondary"
    />
    <Typography
      tag="p"
      text="Adorn Box text with success color"
      typeColor="success"
    />
    <Typography
      tag="p"
      text="Adorn Box text with danger color"
      typeColor="danger"
    />
    <Typography
      tag="p"
      text="Adorn Box text with warning color"
      typeColor="warning"
    />
  </div>
);

import React from 'react';
import Alert from './Alert';

export default {
  title: 'Alert',
  component: Alert,
};

export const NormalAlerts = () => (
  <div>
    <Alert
      type="primary"
      variant="contained"
      text="This is a Primary Alert - Check it now!"
    />
    <Alert
      type="secondary"
      variant="contained"
      text="This is a Secondary Alert - Check it now!"
    />
    <Alert
      type="success"
      variant="contained"
      text="This is a Success Alert - Check it now!"
    />
    <Alert
      type="warning"
      variant="contained"
      text="This is a Warning Alert - Check it now!"
    />
  </div>
);

export const OutlineAlerts = () => (
  <div>
    <Alert
      type="primary"
      variant="outlined"
      text="This is a Primary Alert - Check it now!"
      border
      outline
    />
    <Alert
      type="secondary"
      variant="outlined"
      text="This is a Secondary Alert - Check it now!"
      border
      outline
    />
    <Alert
      type="success"
      variant="outlined"
      text="This is a Success Alert - Check it now!"
      border
      outline
    />
    <Alert
      type="warning"
      variant="outlined"
      text="This is a Warning Alert - Check it now!"
      border
      outline
    />
  </div>
);

import React from 'react';
import Toast from './Toast';
import { ToastContainer } from './Toast.Styled';

export default {
  title: 'Toast',
  component: Toast,
};

export const Toasts = () => (
  <>
    <ToastContainer>
      <Toast color="success" text="Successful toast for user action." />
      <Toast color="warning" text="Warning toast for user action." />
      <Toast color="danger" text="Danger toast for user action." />
    </ToastContainer>
  </>
);

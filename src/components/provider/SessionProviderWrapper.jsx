'use client';

import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import store from '@/store';

export default function SessionProviderWrapper({ children }) {
  return (
    <Provider store={store}>
      <SessionProvider>{children}</SessionProvider>
    </Provider>
  );
}

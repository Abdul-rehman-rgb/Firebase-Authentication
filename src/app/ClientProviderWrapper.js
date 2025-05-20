'use client';

import { UserContextProvider } from '../context/UserAuthContext';

export default function ClientProviderWrapper({ children }) {
  return (
    <UserContextProvider>
      {children}
    </UserContextProvider>
  );
}

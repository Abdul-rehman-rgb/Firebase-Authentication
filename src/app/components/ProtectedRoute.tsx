'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserAuth } from '../../context/UserAuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      // Redirect to login if not logged in
      router.replace('/');
    }
  }, [user, router]);

  if (!user) {
    // Show loading while redirecting or checking auth
    return <div>Loading...</div>;
  }

  // User is logged in, render children
  return children;
};

export default ProtectedRoute;

"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

const useAuth = (redirectAuthenticated = false) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = localStorage.getItem('token');
  const router = useRouter();

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
      if (redirectAuthenticated) {
        router.push('/detailpage');
      }

    } else {
      router.push('/login')
    }
  }, [token, redirectAuthenticated]);

  return isAuthenticated;
};

export default useAuth;

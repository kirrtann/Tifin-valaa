"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

const useAuth = (redirectAuthenticated = false) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    if (token) {
      setIsAuthenticated(true);
      if (redirectAuthenticated) {
        router.push('/home'); // Redirect if already authenticated
      }
    } else {
      if (!redirectAuthenticated) {
        router.push('/login'); // Redirect to login if not authenticated
      }
    }
  }, [router, redirectAuthenticated]);

  return isAuthenticated;
};  

export default useAuth;

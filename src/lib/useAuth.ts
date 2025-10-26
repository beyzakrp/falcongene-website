import { useState, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { AuthService } from './authService';

export interface AuthState {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    isAuthenticated: false,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthState({
        user,
        loading: false,
        isAuthenticated: !!user,
      });
    });

    return unsubscribe;
  }, []);

  const signIn = async (email: string, password: string) => {
    const result = await AuthService.signIn(email, password);
    return result;
  };

  const signUp = async (email: string, password: string, displayName?: string) => {
    const result = await AuthService.signUp(email, password, displayName);
    return result;
  };

  const signOut = async () => {
    const result = await AuthService.signOut();
    return result;
  };

  const resetPassword = async (email: string) => {
    const result = await AuthService.resetPassword(email);
    return result;
  };

  return {
    ...authState,
    signIn,
    signUp,
    signOut,
    resetPassword,
  };
};

export default useAuth;
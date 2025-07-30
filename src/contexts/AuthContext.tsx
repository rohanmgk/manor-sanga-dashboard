import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, AuthState } from '@/types/auth';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Dummy users for demonstration
const dummyUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@church.com',
    role: 'admin'
  },
  {
    id: '2',
    name: 'John Smith',
    email: 'leader@church.com',
    role: 'leader',
    groupId: 'group-1'
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    email: 'member@church.com',
    role: 'member',
    groupId: 'group-1'
  }
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false
  });

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate authentication with dummy users
    // Password is "password" for all users
    if (password === 'password') {
      const user = dummyUsers.find(u => u.email === email);
      if (user) {
        setAuthState({
          user,
          isAuthenticated: true
        });
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
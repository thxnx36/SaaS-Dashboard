'use client';
import { useState, useEffect } from 'react';
import { User } from '@/types/user';

export type AuthResponse = {
  success: boolean;
  error?: string;
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // เพิ่ม effect เพื่อตรวจสอบ session
  useEffect(() => {
    const checkAuth = () => {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string): Promise<AuthResponse> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: '1',
        name: email.split('@')[0],
        email: email,
        role: 'Admin',
        status: 'Active'
      };
      
      // Save to localStorage
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      
      return { success: true };
    } catch (_) {
      return {
        success: false,
        error: 'Invalid credentials'
      };
    }
  };

  const register = async (email: string): Promise<AuthResponse> => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: '1',
        name: email.split('@')[0],
        email: email,
        role: 'User',
        status: 'Active'
      };
      
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      
      return { success: true };
    } catch (_) {
      return {
        success: false,
        error: 'Registration failed'
      };
    }
  };

  const logout = async (): Promise<AuthResponse> => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      localStorage.removeItem('user');
      setUser(null);
      return { success: true };
    } catch (_) {
      return {
        success: false,
        error: 'Logout failed'
      };
    }
  };

  return {
    user,
    login,
    register,
    logout,
    loading
  };
}
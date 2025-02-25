'use client';
import { useEffect } from 'react';
import { useStore } from '@/store/useStore';

export function Providers({ children }: { children: React.ReactNode }) {
  const isDarkMode = useStore((state) => state.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return <>{children}</>;
}
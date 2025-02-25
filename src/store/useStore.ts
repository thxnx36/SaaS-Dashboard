import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from 'firebase/auth'; // import User type จาก firebase

interface AuthState {
  user: User | null;
  isDarkMode: boolean;
  setUser: (user: User | null) => void;
  toggleDarkMode: () => void;
}

export const useStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isDarkMode: false,
      setUser: (user: User | null) => set({ user }),
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: 'auth-storage',
    }
  )
);
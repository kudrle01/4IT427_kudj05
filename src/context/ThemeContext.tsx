import { createContext, useContext, useState, type ReactNode } from 'react';

interface ThemeContextValue {
  dark: boolean;
  toggleDark: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    const isDark = saved === 'dark';
    if (isDark) document.documentElement.classList.add('dark');
    return isDark;
  });

  const toggleDark = () => {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setDark(next);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme musí být použit uvnitř ThemeProvider');
  return ctx;
};

import { createContext, useContext, useState, ReactNode, useLayoutEffect } from 'react';

interface ThemeContextProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

// first check if site theme preference is available in localStorage, if not checks OS preference
const prefersColorSchemeDark = (): boolean => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') return true;
  if (theme === 'light') return false;
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return true;
  return false;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [darkMode, setDarkMode] = useState(prefersColorSchemeDark());
  const toggleTheme = () => setDarkMode((prev) => !prev);

  useLayoutEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  const value: ThemeContextProps = {
    darkMode,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a Theme Provider');
  }
  return context;
}

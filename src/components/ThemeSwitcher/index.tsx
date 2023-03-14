import React from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import { MdLightMode as LightModeIcon, MdDarkMode as DarkModeIcon } from 'react-icons/md';
import styles from './ThemeSwitcher.module.css';

export function ThemeSwitcher() {
  const { darkMode, toggleTheme } = useThemeContext();
  return (
    <button
      className={styles.button}
      aria-label={darkMode ? 'set theme light' : 'set theme dark'}
      onClick={toggleTheme}
    >
      {darkMode ? (
        <LightModeIcon className={`${styles.icon} ${styles.light}`} />
      ) : (
        <DarkModeIcon className={`${styles.icon} ${styles.dark}`} />
      )}
    </button>
  );
}

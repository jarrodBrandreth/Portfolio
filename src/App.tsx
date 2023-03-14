import React from 'react';
import { About } from './components/About';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';
import { ThemeProvider } from './context/ThemeContext';

export function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <About />
        <Projects />
        <Technologies />
      </main>
    </ThemeProvider>
  );
}

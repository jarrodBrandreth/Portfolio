import React from 'react';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { ScrollToTop } from './components/ScrollToTop';
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
      <ScrollToTop />
      <Footer />
    </ThemeProvider>
  );
}

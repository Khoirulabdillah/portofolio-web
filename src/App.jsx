import React, { useLayoutEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Keahlian from './components/Keahlian';
import Footer from './components/Footer';

// Mengimpor komponen animasi yang baru dibuat
import ScrollReveal from './components/ScrollReveal';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => window.localStorage.getItem('theme') === 'dark'
  );

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className="bg-slate-50 min-h-screen text-gray-800 font-sans relative pt-20">
      
      {/* Navbar tidak dibungkus animasi agar langsung muncul tanpa delay */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode((currentMode) => !currentMode)}
      />

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Setiap segmen dibungkus ScrollReveal agar muncul perlahan saat di-scroll */}
        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal stagger>
          <Project />
        </ScrollReveal>

        <ScrollReveal>
          <Keahlian />
        </ScrollReveal>
      </main>

      <ScrollReveal>
        <Footer />
      </ScrollReveal>
      
    </div>
  );
}

export default App;
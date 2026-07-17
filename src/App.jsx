import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Keahlian from './components/Keahlian';
import Footer from './components/Footer';

// Mengimpor komponen animasi yang baru dibuat
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-gray-800 font-sans relative pt-20">
      
      {/* Navbar tidak dibungkus animasi agar langsung muncul tanpa delay */}
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Setiap segmen dibungkus ScrollReveal agar muncul perlahan saat di-scroll */}
        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal>
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
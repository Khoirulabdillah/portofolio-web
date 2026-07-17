import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Keahlian from './components/Keahlian';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-gray-800 font-sans relative pt-20">
      
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <Hero />
        <About />
        <Project />
        <Keahlian />
      </main>

      <Footer />
      
    </div>
  );
}

export default App;
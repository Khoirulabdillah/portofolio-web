import React, { useLayoutEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import ProjectPage from './components/ProjectPage';
import Keahlian from './components/Keahlian';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const projectType = pathname === '/projects/web-developer'
    ? 'web-developer'
    : pathname === '/projects/system-analyst'
      ? 'system-analyst'
      : null;
  const isHomePage = pathname === '/';

  const [isDarkMode, setIsDarkMode] = useState(
    () => window.localStorage.getItem('theme') === 'dark'
  );

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useLayoutEffect(() => {
    document.title = projectType
      ? `${projectType === 'system-analyst' ? 'Project System Analyst' : 'Project Web Developer'} | Khoirul Abdillah`
      : isHomePage
        ? 'Portofolio | Khoirul Abdillah'
        : 'Halaman tidak ditemukan | Khoirul Abdillah';
  }, [isHomePage, projectType]);

  return (
    <div className="bg-slate-50 min-h-screen text-gray-800 font-sans relative pt-20">
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode((currentMode) => !currentMode)}
      />

      <main className="max-w-6xl mx-auto px-6 py-10">
        {isHomePage ? (
          <>
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
          </>
        ) : projectType ? (
          <ScrollReveal stagger>
            <ProjectPage type={projectType} />
          </ScrollReveal>
        ) : (
          <section className="py-20 text-center">
            <p className="font-mono text-sm font-bold text-blue-600">404</p>
            <h1 className="mt-3 text-3xl font-bold text-gray-900">Halaman tidak ditemukan</h1>
            <a href="/" className="mt-6 inline-flex font-semibold text-blue-600 hover:text-blue-700">
              Kembali ke beranda
            </a>
          </section>
        )}
      </main>

      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
}

export default App;
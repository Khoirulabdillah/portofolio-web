import React, { useState } from 'react';

const Navbar = ({ isDarkMode, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const isProjectPage = window.location.pathname.startsWith('/projects/');
  const sectionHref = (section) => `${isProjectPage ? '/' : ''}#${section}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative">
        
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-gray-900 tracking-tight hover:text-blue-600 transition">
          KHOIRUL<span className="text-blue-600"> ABDILLAH</span>
        </a>

        <div className="flex items-center gap-6">
          {/* Menu Desktop */}
          <ul className="hidden sm:flex gap-8 text-sm font-medium text-gray-600">
            <li><a href={sectionHref('profil')} className="hover:text-blue-600 transition">Profil</a></li>
            <li><a href={sectionHref('keahlian')} className="hover:text-blue-600 transition">Keahlian</a></li>
            <li><a href={sectionHref('project')} className="hover:text-blue-600 transition">Project</a></li>
            <li><a href={sectionHref('kontak')} className="hover:text-blue-600 transition">Kontak</a></li>
          </ul>

          <button
            type="button"
            onClick={onToggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label={isDarkMode ? 'Aktifkan light mode' : 'Aktifkan dark mode'}
            aria-pressed={isDarkMode}
            title={isDarkMode ? 'Aktifkan light mode' : 'Aktifkan dark mode'}
          >
            {isDarkMode ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" strokeWidth="2" />
                <path strokeLinecap="round" strokeWidth="2" d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.5 15.5A8.5 8.5 0 018.5 3.5 8.5 8.5 0 1020.5 15.5z" />
              </svg>
            )}
          </button>

          {/* Tombol Hamburger Mobile Animasi Kreatif */}
          <button 
            onClick={toggleMenu} 
            className="sm:hidden flex flex-col justify-between w-6 h-4 focus:outline-none group relative z-50"
            aria-label="Toggle Menu"
          >
            {/* Garis Atas */}
            <span className={`block w-full h-0.5 bg-gray-600 rounded-full transition-all duration-300 ease-in-out origin-center ${
              isOpen ? 'rotate-45 translate-y-1.5 bg-blue-600' : 'group-hover:bg-blue-600'
            }`}></span>
            
            {/* Garis Tengah (Menghilang ke kanan saat terbuka) */}
            <span className={`block w-full h-0.5 bg-gray-600 rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0 translate-x-3' : 'group-hover:bg-blue-600'
            }`}></span>
            
            {/* Garis Bawah */}
            <span className={`block w-full h-0.5 bg-gray-600 rounded-full transition-all duration-300 ease-in-out origin-center ${
              isOpen ? '-rotate-45 -translate-y-1.5 bg-blue-600' : 'group-hover:bg-blue-600'
            }`}></span>
          </button>
        </div>
      </div>

      {/* Menu Mobile dengan Transisi Halus */}
      {/* Kita hilangkan render bersyarat {isOpen && ...} agar efek close animasinya bisa berjalan */}
      <div 
        className={`sm:hidden absolute w-full left-0 top-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <ul className="flex flex-col text-base font-medium text-gray-600 px-6 gap-2 py-4">
          <li>
            <a href={sectionHref('profil')} onClick={toggleMenu} className="block py-2 hover:text-blue-600 hover:translate-x-1 transition-transform duration-300">
              Profil
            </a>
          </li>
          <li>
            <a href={sectionHref('keahlian')} onClick={toggleMenu} className="block py-2 hover:text-blue-600 hover:translate-x-1 transition-transform duration-300">
              Keahlian
            </a>
          </li>
          <li>
            <a href={sectionHref('project')} onClick={toggleMenu} className="block py-2 hover:text-blue-600 hover:translate-x-1 transition-transform duration-300">
              Project
            </a>
          </li>
          <li>
            <a href={sectionHref('kontak')} onClick={toggleMenu} className="block py-2 hover:text-blue-600 hover:translate-x-1 transition-transform duration-300">
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
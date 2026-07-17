import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative">
        
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-gray-900 tracking-tight hover:text-blue-600 transition">
          KHOIRUL<span className> ABDILLAH</span>
        </a>

        <div className="flex items-center gap-6">
          {/* Menu Desktop */}
          <ul className="hidden sm:flex gap-8 text-sm font-medium text-gray-600">
            <li><a href="#profil" className="hover:text-blue-600 transition">Profil</a></li>
            <li><a href="#keahlian" className="hover:text-blue-600 transition">Keahlian</a></li>
            <li><a href="#project" className="hover:text-blue-600 transition">Project</a></li>
            <li><a href="#kontak" className="hover:text-blue-600 transition">Kontak</a></li>
          </ul>

          {/* Tombol Hamburger Mobile */}
          <button onClick={toggleMenu} className="sm:hidden text-gray-600 focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="sm:hidden absolute w-full left-0 top-full bg-white border-b border-gray-100 shadow-lg pb-4">
          <ul className="flex flex-col text-base font-medium text-gray-600 px-6 gap-4 pt-4">
            <li><a href="#" onClick={toggleMenu} className="block hover:text-blue-600 transition">Profil</a></li>
            <li><a href="#keahlian" onClick={toggleMenu} className="block hover:text-blue-600 transition">Keahlian</a></li>
            <li><a href="#project" onClick={toggleMenu} className="block hover:text-blue-600 transition">Proyek</a></li>
            <li><a href="#kontak" onClick={toggleMenu} className="block hover:text-blue-600 transition">Kontak</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
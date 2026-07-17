import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative">
        
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-gray-900 tracking-tight hover:text-blue-600 transition">
          KHOIRUL<span className="text-blue-600"> ABDILLAH</span>
        </a>

        <div className="flex items-center gap-6">
          {/* Menu Desktop */}
          <ul className="hidden sm:flex gap-8 text-sm font-medium text-gray-600">
            <li><a href="#profil" className="hover:text-blue-600 transition">Profil</a></li>
            <li><a href="#keahlian" className="hover:text-blue-600 transition">Keahlian</a></li>
            <li><a href="#project" className="hover:text-blue-600 transition">Project</a></li>
            <li><a href="#kontak" className="hover:text-blue-600 transition">Kontak</a></li>
          </ul>

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
            <a href="#" onClick={toggleMenu} className="block py-2 hover:text-blue-600 hover:translate-x-1 transition-transform duration-300">
              Profil
            </a>
          </li>
          <li>
            <a href="#keahlian" onClick={toggleMenu} className="block py-2 hover:text-blue-600 hover:translate-x-1 transition-transform duration-300">
              Keahlian
            </a>
          </li>
          <li>
            <a href="#project" onClick={toggleMenu} className="block py-2 hover:text-blue-600 hover:translate-x-1 transition-transform duration-300">
              Proyek
            </a>
          </li>
          <li>
            <a href="#kontak" onClick={toggleMenu} className="block py-2 hover:text-blue-600 hover:translate-x-1 transition-transform duration-300">
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
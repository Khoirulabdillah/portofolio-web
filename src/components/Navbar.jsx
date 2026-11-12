import React, { useEffect, useState } from 'react';

const Navbar = ({ isDarkMode, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isProjectPage = window.location.pathname.startsWith('/projects/');
  const sectionHref = (section) => `${isProjectPage ? '/' : ''}#${section}`;

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <nav className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6" aria-label="Navigasi utama">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between rounded-full border border-gray-100 bg-white/30 px-3 py-2.5 shadow-lg shadow-slate-900/5 backdrop-blur-md transition-colors duration-300 sm:px-5 sm:py-3">
        {/* Logo */}
        <a href="/" className="min-w-0 truncate text-sm font-bold tracking-tight text-gray-900 transition hover:text-blue-600 sm:text-xl">
          KHOIRUL<span className="text-blue-600"> ABDILLAH</span>
        </a>

        <div className="ml-3 flex shrink-0 items-center gap-2 sm:gap-4">
          {/* Menu Desktop */}
          <ul className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex lg:gap-8">
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

          {/* Floating pill menu on compact screens */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden"
            aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">{isOpen ? 'Tutup' : 'Buka'} menu</span>
            <span className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${isOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
            <span className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : ''}`} />
            <span className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`absolute right-3 top-[calc(100%+0.75rem)] w-[min(18rem,calc(100vw-1.5rem))] rounded-3xl border border-gray-100 bg-white p-2 shadow-xl shadow-slate-900/10 transition-all duration-300 ease-out sm:right-6 md:hidden ${
          isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <ul className="flex flex-col gap-1 text-base font-medium text-gray-600">
          <li>
            <a href={sectionHref('profil')} onClick={() => setIsOpen(false)} className="block rounded-2xl px-4 py-3 transition hover:bg-blue-50 hover:text-blue-600">
              Profil
            </a>
          </li>
          <li>
            <a href={sectionHref('keahlian')} onClick={() => setIsOpen(false)} className="block rounded-2xl px-4 py-3 transition hover:bg-blue-50 hover:text-blue-600">
              Keahlian
            </a>
          </li>
          <li>
            <a href={sectionHref('project')} onClick={() => setIsOpen(false)} className="block rounded-2xl px-4 py-3 transition hover:bg-blue-50 hover:text-blue-600">
              Project
            </a>
          </li>
          <li>
            <a href={sectionHref('kontak')} onClick={() => setIsOpen(false)} className="block rounded-2xl px-4 py-3 transition hover:bg-blue-50 hover:text-blue-600">
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { keahlian } from '../portfolioData';

const Keahlian = () => {
  return (
    <section id="keahlian" className="mb-24 pt-20 mt-[-5rem]">
      
      {/* === HEADER SECTION === */}
      {/* Ukuran teks disesuaikan agar sama persis dengan halaman Project */}
      <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
        <span className="text-lg sm:text-xl font-bold text-blue-600 font-mono">03</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Keahlian & Teknologi</h2>
        <div className="h-[1px] flex-1 bg-gray-200 ml-2 sm:ml-4"></div>
      </div>

      {/* === GRID CARDS SECTION === */}
      {/* Menggunakan Grid agar tersusun sangat rapi: 2 kolom di HP, 3 di Tablet, 4 di Desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {keahlian.map((skill, index) => (
          <div 
            key={index} 
            className="group relative flex items-center justify-center p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden"
          >
            {/* Efek Gradasi Background (Muncul perlahan saat di-hover) */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            {/* Konten Internal Kartu */}
            <div className="relative z-10 flex items-center gap-3 w-full justify-center sm:justify-start pl-0 sm:pl-2">
              
              {/* Ikon Titik yang Beranimasi */}
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-500/80 group-hover:bg-blue-600 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 shadow-sm flex-shrink-0"></span>
              
              {/* Teks Keahlian */}
              <span className="font-semibold text-gray-700 group-hover:text-blue-700 transition-colors duration-300 text-sm sm:text-base truncate">
                {skill}
              </span>
              
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Keahlian;
import React, { useState } from 'react';
import { pengalamanProject } from '../portfolioData';

const Project = () => {
  // Membuat state untuk melacak apakah tombol "Lihat Semua" sudah diklik
  const [tampilSemua, setTampilSemua] = useState(false);

  // Jika tampilSemua = true, tampilkan semua. Jika false, potong jadi 3 saja.
  const proyekYangDitampilkan = tampilSemua ? pengalamanProject : pengalamanProject.slice(0, 3);

  return (
    <section id="project" className="mb-24 pt-20 mt-[-5rem]">
      
      {/* Header */}
      <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
        <span className="text-lg sm:text-xl font-bold text-blue-600 font-mono">02</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Pengalaman Project</h2>
        <div className="h-[1px] flex-1 bg-gray-200 ml-2 sm:ml-4"></div>
      </div>

      {/* Grid Cards (Dirender berdasarkan state proyekYangDitampilkan) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {proyekYangDitampilkan.map((proyek) => (
          <div key={proyek.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full overflow-hidden relative">
            
            <div className="w-full h-40 sm:h-48 bg-gray-100 overflow-hidden relative flex-shrink-0">
              <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none"></div>
              <img 
                src={proyek.gambar} 
                alt={`Screenshot ${proyek.judul}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5 sm:p-7 flex flex-col flex-1">
              <div className="flex-1">
                
                <div className="flex justify-between items-start mb-2 sm:mb-3">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {proyek.judul}
                  </h4>
                  
                  <a 
                    href={proyek.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-2 -mt-1 -mr-2 bg-gray-50 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all group/btn"
                    aria-label={`Lihat detail ${proyek.judul}`}
                  >
                    <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] sm:text-xs font-bold tracking-wide rounded-full mb-4 sm:mb-5">
                  {proyek.peran}
                </span>
                
                <p className="text-gray-600 text-sm mb-5 sm:mb-6 leading-relaxed text-justify line-clamp-4 sm:line-clamp-none">
                  {proyek.deskripsi}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-4 sm:pt-5 border-t border-gray-100">
                {proyek.teknologi.map((tech, idx) => (
                  <span key={idx} className="text-[10px] sm:text-xs font-mono text-gray-500 bg-gray-50 px-2 py-1 sm:px-2.5 rounded border border-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        ))}
      </div>

      {/* Tombol Interaktif "Lihat Semua / Lebih Sedikit" */}
      {pengalamanProject.length > 3 && (
        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => setTampilSemua(!tampilSemua)}
            /* Tambahan: active:scale-95, active:bg-blue-50, dan select-none */
            className="px-8 py-3.5 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-lg hover:border-blue-600 hover:text-blue-600 hover:shadow-md active:scale-95 active:bg-blue-50 transition-all duration-200 flex items-center gap-2 group select-none focus:outline-none"
          >
            {tampilSemua ? "Tampilkan Lebih Sedikit" : "Lihat Semua Proyek"}
            
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${tampilSemua ? 'rotate-180' : 'group-hover:translate-y-1'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}

    </section>
  );
};

export default Project;
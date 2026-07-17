import React from 'react';
import { biodata } from '../portfolioData';

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12 mb-24 min-h-[80vh]">
      
      {/* === KOLOM KIRI: Teks & Tombol === */}
      <div className="text-left flex flex-col justify-center order-2 lg:order-1">
        
        {/* Label Profesi */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-blue-600"></div>
          <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
            Full-Stack Web Developer
          </span>
        </div>

        {/* Headline Utama */}
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Hi, I'm<span className="text-blue-600"> Khoirul Abdillah</span>
        </h1>

        {/* Deskripsi */}
        <p className="text-gray-600 text-lg max-w-xl mb-10 leading-relaxed">
        Membangun solusi web end-to-end: Dari UI yang intuitif hingga database yang siap untuk skala produksi</p>

       {/* Tombol Aksi */}
        <div className="flex flex-row gap-3 w-full sm:w-auto mt-4">
          
          {/* Tombol Utama: Contact Me (Biru) */}
          <a 
            href="#kontak" 
            className="flex-1 sm:flex-none flex justify-center items-center gap-1.5 sm:gap-2 px-2 sm:px-8 py-3 sm:py-3.5 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 group text-sm sm:text-base whitespace-nowrap"
          >
            Contact Me
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          
          {/* Tombol Sekunder: Download CV (Garis Tepi) */}
          <a 
            href="/cv-khoirul abdillah.pdf"  /* Pastikan nama file ini sudah benar */
            download="CV_Khoirul_Abdillah.pdf"
            className="flex-1 sm:flex-none flex justify-center items-center gap-1.5 sm:gap-2 px-2 sm:px-8 py-3 sm:py-3.5 bg-transparent border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-gray-800 hover:text-gray-900 transition duration-300 group text-sm sm:text-base whitespace-nowrap"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </a>
        </div>
      </div>

      {/* === KOLOM KANAN: ID Card 3D === */}
      <div className="relative flex justify-center items-center order-1 lg:order-2">
        {/* Dekorasi Glow di belakang kartu (Biru Lembut) */}
        <div className="absolute inset-0 bg-blue-400 blur-[80px] opacity-20 rounded-full w-3/4 h-3/4 mx-auto"></div>

        {/* Kartu ID Utama */}
        <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
          
          {/* Klip ID Card (Bagian atas) */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-200 rounded-t-xl border border-gray-300 flex justify-center items-center shadow-sm">
            <div className="w-8 h-2 bg-gray-400 rounded-full"></div>
          </div>

          {/* Header Kartu */}
          <div className="flex justify-between items-center text-xs font-mono text-gray-400 mb-6 mt-2">
            <span>ID / FE-DEV</span>
            <span>2026</span>
          </div>

          {/* Area Foto Profil */}
          <div className="w-full aspect-square bg-slate-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-gray-100 shadow-inner group">
             {/* Pastikan URL gambar ini sesuai dengan fotomu */}
             <img 
               src="/foto profil.webp" 
               alt="Foto Profil Khoirul Abdillah" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
          </div>

          {/* Info Kartu */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Khoirul Abdillah</h3>
            <p className="text-xs font-mono text-blue-600 mb-6 uppercase tracking-wider">
             Full-Stack Web Developer
            </p>
            
            <div className="pt-4 border-t border-dashed border-gray-300 flex justify-between items-end">
              <span className="text-xs font-mono text-gray-500">STATUS: FRESH GRAD</span>
            </div>

            {/* Stempel Verified */}
            <div className="absolute -bottom-2 right-0 w-16 h-16 rounded-full border-2 border-blue-500 flex justify-center items-center transform -rotate-12 opacity-80 bg-white/50 backdrop-blur-sm">
              <span className="text-[10px] font-bold text-center text-blue-600 leading-tight">
                VERIFIED<br/>SKILL
              </span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
import React, { useState, useRef } from 'react';

const Hero = () => {
  // === LOGIKA ANIMASI 3D TILT (MOUSE & TOUCH) ===
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const hitungRotasi = (clientX, clientY) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = Math.max(-15, Math.min(15, ((y - centerY) / centerY) * -15));
    const rotateY = Math.max(-15, Math.min(15, ((x - centerX) / centerX) * 15));
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseMove = (e) => hitungRotasi(e.clientX, e.clientY);
  
  const handleTouchMove = (e) => {
    hitungRotasi(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleEnter = () => setIsHovering(true);
  const handleLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12 mb-24 min-h-[80vh]">
      
      {/* === KOLOM KIRI: Teks & Tombol === */}
      <div className="text-left flex flex-col justify-center order-2 lg:order-1 z-10">
        
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-blue-600"></div>
          <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
            Full-Stack Web Developer  & System Analyst
          </span>
        </div>

        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Hi, I'm<span className="text-blue-600"> Khoirul Abdillah</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-xl mb-10 leading-relaxed">
          Analis Sistem dan Pengembang Web yang analitis. Berpengalaman merancang arsitektur sistem, basis data, dan menguji perangkat lunak untuk menghasilkan solusi bisnis yang nyata dan terstruktur.
        </p>
        {/* Kumpulan Tombol */}
        <div className="flex flex-row gap-3 w-full sm:w-auto mt-4">
          
          <a 
            href="#kontak" 
            /* Tambahan: active:scale-95 dan select-none */
            className="flex-1 sm:flex-none flex justify-center items-center gap-1.5 sm:gap-2 px-2 sm:px-8 py-3 sm:py-3.5 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 active:scale-95 active:bg-blue-800 transition-all duration-200 group text-sm sm:text-base whitespace-nowrap select-none"
          >
            Contact Me
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          
          <a 
            href="/cv-khoirul abdillah.pdf"
            download="CV_Khoirul_Abdillah.pdf"
            target="_blank"
            rel="noopener noreferrer"
            /* Tambahan: active:scale-95 dan select-none */
            className="flex-1 sm:flex-none flex justify-center items-center gap-1.5 sm:gap-2 px-2 sm:px-8 py-3 sm:py-3.5 bg-transparent border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-gray-800 hover:text-gray-900 active:scale-95 active:bg-gray-100 transition-all duration-200 group text-sm sm:text-base whitespace-nowrap select-none"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </a>

        </div>
      </div>

      {/* === KOLOM KANAN: ID Card 3D Melayang === */}
      <div className="relative flex justify-center items-center order-1 lg:order-2 pt-10 sm:pt-0">
        
        {/* Efek Cahaya Latar */}
        <div className="absolute inset-0 bg-blue-400 blur-[80px] opacity-20 rounded-full w-3/4 h-3/4 mx-auto pointer-events-none"></div>

        {/* Kartu Profil */}
        <div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onTouchStart={handleEnter}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleLeave}
          style={{
            transform: isHovering 
              ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)` 
              : `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
            transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
          }}
          className="relative w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 cursor-crosshair z-10 will-change-transform touch-none"
        >

          <div className="flex justify-between items-center text-xs font-mono text-gray-400 mb-6 pointer-events-none">
            <span>IDV</span>
            <span>2026</span>
          </div>

          <div className="w-full aspect-square bg-slate-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-gray-100 shadow-inner group pointer-events-none">
             <img 
               src="/foto profil.webp" 
               alt="Foto Profil Khoirul Abdillah" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
          </div>

          <div className="relative pointer-events-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Khoirul Abdillah</h3>
            <p className="text-xs font-mono text-blue-600 mb-6 uppercase tracking-wider">
             Full-Stack Web Developer & System Analyst
            </p>
            
            <div className="pt-4 border-t border-dashed border-gray-300 flex justify-between items-end">
              <span className="text-xs font-mono text-gray-500">STATUS: FRESH GRAD</span>
            </div>

            <div className="absolute -bottom-2 right-0 w-16 h-16 rounded-full border-2 border-blue-500 flex justify-center items-center transform -rotate-12 opacity-80 bg-white/80 backdrop-blur-sm shadow-sm">
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
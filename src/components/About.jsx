import React from 'react';

const About = () => {
  return (
    <section id="profil" className="mb-24 pt-20 mt-[-5rem]">
      
      {/* Header Section dengan Penomoran */}
      <div className="flex items-center gap-4 mb-10">
        <span className="text-xl font-bold text-blue-600 font-mono">01</span>
        <h2 className="text-3xl font-bold text-gray-900">Profil Singkat</h2>
        {/* Garis horizontal pembatas */}
        <div className="h-[1px] flex-1 bg-gray-200 ml-4"></div>
      </div>

      {/* Grid Layout: Stack di Mobile, Split 7:5 di Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* Kolom Kiri: Teks Paragraf (Mengambil 7 kolom) */}
        <div className="lg:col-span-7">
          <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
            Saya Khoirul Abdillah, seorang Fullstack Web Developer fresh graduate Teknik Informatika dari Universitas Muhammadiyah Surakarta (2026). Berbekal pengalaman magang dan pengalaman membangun beberapa project, saya berfokus menciptakan aplikasi web yang fungsional, berkinerja tinggi, dan production-ready.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed text-justify">
            Dengan keahlian utama menggunakan <span className="font-semibold text-gray-800">Laravel, React, MySQL, dan Tailwind CSS, </span>saya mampu menggabungkan logika backend yang kokoh dengan desain frontend yang elegan dan bersih untuk menghadirkan pengalaman digital yang <span className="italic">user-friendly.</span>
          </p>
        </div>

        {/* Kolom Kanan: Kotak Informasi (Mengambil 5 kolom) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Box 1: Pendidikan */}
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
            <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1 block group-hover:text-blue-500 transition-colors">
              Pendidikan
            </span>
            <h4 className="text-lg font-bold text-gray-900">Teknik Informatika</h4>
            <p className="text-sm text-gray-500 mt-1 font-medium">Universitas Muhammadiyah Surakarta</p>
          </div>

          {/* Box 2: Fokus */}
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
            <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1 block group-hover:text-blue-500 transition-colors">
              Fokus Utama
            </span>
            <h4 className="text-lg font-bold text-gray-900">Fullstack Web Development</h4>
            
          </div>

          {/* Box 3: Ketersediaan */}
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
            <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1 block group-hover:text-blue-500 transition-colors">
              Ketersediaan & Domisili
            </span>
            <h4 className="text-lg font-bold text-gray-900">Terbuka untuk Peluang Baru</h4>
            <p className="text-sm text-gray-500 mt-1 font-medium">Sukoharjo, Jawa Tengah</p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default About;
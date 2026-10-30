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
          <p className="text-gray-600 text-lg leading-relaxed text-justify">
            Saya merupakan lulusan S1 Teknik Informatika Universitas Muhammadiyah Surakarta yang memiliki ketertarikan pada bidang System Analysis dan pengembangan aplikasi web. Memiliki pengalaman dalam mengembangkan PRESENSIKU sebagai proyek skripsi serta ARSIPARIS melalui program magang di Kementerian Agama Kota Surakarta. Saya memiliki pemahaman dalam Requirements Analysis, Business Process Analysis, UML Modeling, Database Design, dan Software Testing. Saya senang mempelajari permasalahan, memahami kebutuhan pengguna, serta menerjemahkannya menjadi solusi sistem yang terstruktur dan efektif.
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
            <h4 className="text-lg font-bold text-gray-900">Fullstack Web Development & System Analysis</h4>
            
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
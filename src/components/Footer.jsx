import React from 'react';

const Footer = () => {
  return (
    <section id="kontak" className="pt-24 pb-10 bg-white border-t border-gray-200 mt-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* === HEADER SECTION === */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Mari <span className="text-blue-600">bekerja sama</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Punya proyek menarik atau peluang kolaborasi? Saya siap membantu mewujudkan ide Anda menjadi produk digital yang luar biasa.
          </p>
        </div>

        {/* === GRID LAYOUT (2 KOLOM) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
          
          {/* KOLOM KIRI: Informasi Kontak */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white shadow-sm rounded-xl text-blue-600 border border-gray-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase block mb-1">Kontak</span>
                <h3 className="text-xl font-bold text-gray-900">Informasi kontak</h3>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {/* Email */}
              <a href="mailto:abdillah17khoirul@gmail.com" className="flex items-center p-4 bg-white border border-gray-200 rounded-2xl hover:border-blue-400 hover:shadow-md active:scale-95 active:bg-blue-50 transition-all duration-200 group select-none">
                <div className="p-3 bg-slate-50 text-gray-500 rounded-xl group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="ml-4 flex-1 overflow-hidden">
                  <span className="text-xs font-medium text-gray-500 block mb-0.5">Email</span>
                  <span className="text-sm sm:text-base font-bold text-gray-900 truncate block">abdillah17khoirul@gmail.com</span>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" /></svg>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/6285840275395" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-white border border-gray-200 rounded-2xl hover:border-blue-400 hover:shadow-md active:scale-95 active:bg-green-50 transition-all duration-200 group select-none">
                <div className="p-3 bg-slate-50 text-gray-500 rounded-xl group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div className="ml-4 flex-1">
                  <span className="text-xs font-medium text-gray-500 block mb-0.5">WhatsApp</span>
                  <span className="text-sm sm:text-base font-bold text-gray-900">+62 858 4027 5395</span>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" /></svg>
              </a>

              {/* Lokasi */}
              <a href="https://maps.google.com/?q=Sukoharjo,+Jawa+Tengah" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-white border border-gray-200 rounded-2xl hover:border-blue-400 hover:shadow-md active:scale-95 active:bg-red-50 transition-all duration-200 group select-none">
                <div className="p-3 bg-slate-50 text-gray-500 rounded-xl group-hover:bg-red-50 group-hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="ml-4 flex-1">
                  <span className="text-xs font-medium text-gray-500 block mb-0.5">Lokasi</span>
                  <span className="text-sm sm:text-base font-bold text-gray-900">Sukoharjo, Jawa Tengah</span>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" /></svg>
              </a>
            </div>
          </div>

          {/* KOLOM KANAN: Sosial Media */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white shadow-sm rounded-xl text-blue-600 border border-gray-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              </div>
              <div>
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase block mb-1">Sosial Media</span>
                <h3 className="text-xl font-bold text-gray-900">Temukan saya di</h3>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {/* Instagram */}
              <a href="https://instagram.com/_justfund" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-white border border-gray-200 rounded-2xl hover:border-pink-300 hover:shadow-md active:scale-95 active:bg-pink-50 transition-all duration-200 group select-none">
                <div className="p-3 bg-slate-50 text-gray-500 rounded-xl group-hover:bg-pink-50 group-hover:text-pink-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="16" height="16" x="4" y="4" strokeWidth="2" rx="4" /><circle cx="12" cy="12" r="3" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 7.5v.001" /></svg>
                </div>
                <div className="ml-4 flex-1">
                  <span className="text-xs font-medium text-gray-500 block mb-0.5">Instagram</span>
                  <span className="text-sm sm:text-base font-bold text-gray-900">@_justfund</span>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-pink-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" /></svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/khoirul-abdillah/?isSelfProfile=true" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-white border border-gray-200 rounded-2xl hover:border-blue-400 hover:shadow-md active:scale-95 active:bg-blue-50 transition-all duration-200 group select-none">
                <div className="p-3 bg-slate-50 text-gray-500 rounded-xl group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div className="ml-4 flex-1">
                  <span className="text-xs font-medium text-gray-500 block mb-0.5">LinkedIn</span>
                  <span className="text-sm sm:text-base font-bold text-gray-900">Khoirul abdillah</span>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-blue-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" /></svg>
              </a>

              {/* GitHub */}
              <a href="https://github.com/Khoirulabdillah" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-white border border-gray-200 rounded-2xl hover:border-gray-800 hover:shadow-md active:scale-95 active:bg-gray-50 transition-all duration-200 group select-none">
                <div className="p-3 bg-slate-50 text-gray-500 rounded-xl group-hover:bg-gray-800 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
                <div className="ml-4 flex-1">
                  <span className="text-xs font-medium text-gray-500 block mb-0.5">GitHub</span>
                  <span className="text-sm sm:text-base font-bold text-gray-900">@Khoirulabdillah</span>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" /></svg>
              </a>
            </div>
          </div>

        </div>

        {/* === COPYRIGHT SECTION === */}
        <div className="text-center pt-8 border-t border-gray-100 text-gray-400 text-sm font-medium">
          © {new Date().getFullYear()} Khoirul Abdillah. Dibuat dengan React & Tailwind CSS.
        </div>

      </div>
    </section>
  );
};

export default Footer;
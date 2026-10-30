import React from 'react';
import { keahlian } from '../portfolioData';

const skillTeknologi = keahlian.filter((skill) => skill !== 'System Analyst');

const Keahlian = () => (
  <section id="keahlian" className="mb-24 pt-20 mt-[-5rem]">
    <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
      <span className="text-lg sm:text-xl font-bold text-blue-600 font-mono">03</span>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Keahlian &amp; Teknologi</h2>
      <div className="h-px flex-1 bg-gray-200 ml-2 sm:ml-4"></div>
    </div>

    <p className="mb-8 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
      Teknologi yang saya gunakan untuk membangun aplikasi serta menganalisis sebuah sistem.
    </p>

    <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(16rem,1fr)] lg:gap-6">
      <div className="min-w-0 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">Web Development</h3>
            <p className="mt-1 text-sm text-gray-500">Bahasa, framework, dan database</p>
          </div>
          <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
            {skillTeknologi.length} teknologi
          </span>
        </div>

        <div className="grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-3">
          {skillTeknologi.map((skill, index) => (
            <div
              key={skill}
              className={`group flex min-w-0 min-h-14 items-center gap-3 rounded-xl border border-gray-100 bg-slate-50 px-3 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 sm:px-4 ${skillTeknologi.length % 3 === 1 && index === skillTeknologi.length - 1 ? 'sm:col-start-2' : ''}`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white font-mono text-xs font-bold text-blue-600 shadow-sm transition-colors group-hover:bg-blue-100">
                {skill.slice(0, 2).toUpperCase()}
              </span>
              <span className="min-w-0 break-words text-sm font-semibold text-gray-700 sm:text-base">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <aside className="relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
        <div className="relative flex h-full flex-col">
          <div className="mt-1 space-y-3">
            <h3 className="text-xl font-bold leading-snug text-gray-900 sm:text-2xl">System Analyst</h3>
            <p className="max-w-prose text-mm text-justify leading-6 text-gray-500">
             Menerjemahkan proses bisnis menjadi Pemodelan Sistem (UML), Rancangan Database (ERD), dan alur kerja perangkat lunak yang terstruktur sebelum tahap Development.
            </p>
          </div>

        </div>
      </aside>
    </div>
  </section>
);

export default Keahlian;

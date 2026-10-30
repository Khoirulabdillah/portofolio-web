import React from 'react';
import { pengalamanProject, systemAnalystProjects } from '../portfolioData';

const kategoriProject = [
  {
    judul: 'Web Developer',
    deskripsi: 'Jelajahi aplikasi web yang saya bangun, mulai dari antarmuka hingga backend dan integrasi database.',
    jumlah: pengalamanProject.length,
    href: '/projects/web-developer',
    aksen: 'blue',
  },
  {
    judul: 'System Analyst',
    deskripsi: 'Lihat proses analisis kebutuhan, pemodelan sistem, perancangan, dan pengujian.',
    jumlah: systemAnalystProjects.length,
    href: '/projects/system-analyst',
    aksen: 'indigo',
  },
];

const Project = () => (
  <section id="project" className="mb-24 pt-20 mt-[-5rem]">
    <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
      <span className="text-lg sm:text-xl font-bold text-blue-600 font-mono">02</span>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Project</h2>
      <div className="h-px flex-1 bg-gray-200 ml-2 sm:ml-4"></div>
    </div>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mb-8 sm:mb-10">
      Beberapa proyek yang telah saya kerjakan selama pengalaman saya sebagai Web Developer dan System Analyst.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
      {kategoriProject.map((kategori) => (
        <a
          key={kategori.judul}
          href={kategori.href}
          className="project-card group flex flex-col min-h-64 p-6 sm:p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
        >
          <div className="flex justify-between items-start gap-4 mb-6">
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${kategori.aksen === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-indigo-50 text-indigo-600'}`}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {kategori.aksen === 'blue' ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5.75A1.75 1.75 0 014.75 4h14.5A1.75 1.75 0 0121 5.75v9.5A1.75 1.75 0 0119.25 17h-5.5v3h2.5m-8.5 0h6m-3-3v3M3 8h18" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.25-4.25a11.97 11.97 0 01-8.25-3 11.97 11.97 0 01-8.25 3A12.02 12.02 0 003 8.5c0 5.25 3.42 9.7 8.15 11.27a2.5 2.5 0 001.7 0C17.58 18.2 21 13.75 21 8.5c0-.96-.11-1.89-.32-2.78z" />
                )}
              </svg>
            </div>
            <span className="shrink-0 rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-500">
              {kategori.jumlah} Project
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {kategori.judul}
          </h3>
          <p className="mt-3 flex-1 text-sm sm:text-base leading-relaxed text-gray-600">
            {kategori.deskripsi}
          </p>

          <span className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600">
            Lihat Project
            <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </span>
        </a>
      ))}
    </div>
  </section>
);

export default Project;

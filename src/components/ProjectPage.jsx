import React from 'react';
import { pengalamanProject, systemAnalystProjects } from '../portfolioData';

const ProjectPage = ({ type }) => {
  const isSystemAnalyst = type === 'system-analyst';
  const projects = isSystemAnalyst ? systemAnalystProjects : pengalamanProject;
  const title = isSystemAnalyst ? 'Project System Analyst' : 'Project Web Developer';
  const description = isSystemAnalyst
    ? 'Dokumentasi proyek yang menampilkan proses memahami masalah, menganalisis kebutuhan, merancang solusi, dan mengevaluasi sistem.'
    : 'Kumpulan aplikasi web yang saya kembangkan, mencakup implementasi antarmuka, logika aplikasi, database, dan integrasi layanan.';
  const otherProject = isSystemAnalyst
    ? { label: 'Lihat Project Web Developer', href: '/projects/web-developer' }
    : { label: 'Lihat Project System Analyst', href: '/projects/system-analyst' };

  return (
    <section className="mb-24 pt-8 sm:pt-12">
      <a
        href="/#project"
        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7 7-7-7 7-7" />
        </svg>
        Kembali ke pilihan project
      </a>

      <header className="mt-8 sm:mt-10 mb-9 sm:mb-12">
        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-600">
          {isSystemAnalyst ? 'System Analyst' : 'Web Developer'}
        </span>
        <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">{title}</h1>
            <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-gray-600">{description}</p>
          </div>
          <a
            href={otherProject.href}
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:border-blue-300 hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {otherProject.label}
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="mt-8 h-px bg-gray-200"></div>
      </header>

      <div className={`grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:auto-rows-fr ${projects.length === 1 ? 'max-w-3xl mx-auto' : ''}`}>
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl"
          >
            <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-gray-100">
              <div className="project-card-overlay pointer-events-none absolute inset-0 z-10 bg-blue-600/10 group-hover:bg-transparent"></div>
              <img
                src={project.gambar.startsWith('/') ? project.gambar : `/${project.gambar}`}
                alt={`Screenshot ${project.judul}`}
                className={`project-card-image h-full w-full ${isSystemAnalyst ? 'object-contain p-2 sm:p-3' : 'object-cover'}`}
              />
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <h2 className="project-card-title min-h-14 text-xl font-bold text-gray-900 group-hover:text-blue-600">
                  {project.judul}
                </h2>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card-link -mr-2 -mt-1 shrink-0 rounded-full bg-gray-50 p-2 text-gray-400 hover:bg-blue-50 hover:text-blue-600"
                    aria-label={`Lihat detail ${project.judul}`}
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <span className="mt-1 shrink-0 text-xs text-gray-400">Link menyusul</span>
                )}
              </div>

              <span className="mt-3 inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tracking-wide text-blue-600">
                {project.peran}
              </span>

              <p className="mt-5 text-sm leading-relaxed text-gray-600">{project.deskripsi}</p>
              {project.kontribusi && (
                <div className="mt-5 border-t border-gray-100 pt-5">
                  <h3 className="mb-2 text-sm font-bold text-gray-900">Kontribusi &amp; Proses Analisis</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{project.kontribusi}</p>
                </div>
              )}

              <div className="mt-auto flex flex-wrap gap-2 border-t border-gray-100 pt-5">
                {project.teknologi.map((technology) => (
                  <span
                    key={technology}
                    className="rounded border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-mono text-gray-500"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;

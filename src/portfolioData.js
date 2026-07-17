// 1. DATA BIODATA (Digunakan di Hero.jsx)
export const biodata = {
  nama: "Khoirul Abdillah",
  peran: "Full-Stack Web Developer",
  deskripsi: "Mengembangkan solusi web end-to-end yang tidak hanya elegan, tetapi juga fungsional. Merancang antarmuka yang intuitif hingga membangun arsitektur backend dan database yang tangguh serta siap untuk skala produksi"
};

// 2. DATA KEAHLIAN (Digunakan di Keahlian.jsx)
export const keahlian = [
  "Laravel", 
  "PHP",
  "HTML",
  "CSS", 
  "Tailwind CSS",
  "JavaScript", 
  "React", 
  "Python", 
  "Next.js", 
  "MySQL"
];


// 3. DATA PROYEK (Digunakan di Project.jsx)
export const pengalamanProject = [
  {
    id: 1,
    judul: "Presensiku",
    peran: "Web Application",
    deskripsi: "Sistem presensi pegawai berbasis web untuk Kantor Desa Watubonang. Dibangun menggunakan arsitektur backend Laravel dan basis data MySQL, serta diintegrasikan dengan Flask Python API untuk memproses komputasi fitur validasi ganda (Face Recognition & Geofencing) guna menjamin keakuratan data kehadiran secara real-time.",
    teknologi: ["Laravel", "PHP", "MySQL", "Flask Python API", "Tailwind CSS"],
    link: "https://github.com/Khoirulabdillah/presensiku.git",
    gambar: "presensiku.png" 
  },
  {
    id: 2,
    judul: "Arsip Surat Kemenag",
    peran: "Document Management System",
    deskripsi: "Platform digital untuk manajemen arsip dan dokumen dengan fitur search, kategorisasi, dan access control untuk Kementerian Agama Kota Surakarta. aplikasi ini dirancang untuk memudahkan penyimpanan surat masuk dan keluar di Kementerian Agama Kota Surakarta.",
    teknologi: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    link: "https://github.com/muchraihan/arsip-surat.git",
    gambar: "kemenag.jpg" 
  },
  {
    id: 3,
    judul: "Manajemen Perpustakaan",
    peran: "Web Application",
    deskripsi: "Perpustakaanku App adalah aplikasi web manajemen perpustakaan terpusat yang memudahkan admin dalam mengelola data buku, member, serta transaksi peminjaman dan pengembalian. Dibangun menggunakan Laravel 11, Livewire 3, dan MySQL, aplikasi ini menyediakan dashboard ringkas untuk menyederhanakan seluruh operasional harian perpustakaan.",
    teknologi: ["Laravel", "PHP", "Livewire", "Tailwind CSS", "SQLite"],
    link: "https://github.com/Khoirulabdillah/perpustakaanku-app.git",
    gambar: "perpustakaanku.png" 
  },
   {
    id: 3,
    judul: "Buku Tamu Pernikahan",
    peran: "Web Application",
    deskripsi: "Sistem buku tamu digital berbasis web yang ringan dan cepat karena dibangun tanpa framework. Aplikasi ini menawarkan antarmuka bergaya Glassmorphism yang elegan, fitur manajemen tamu lengkap (CRUD, pencarian, paginasi), dasbor analitik kehadiran real-time, serta mengekspor laporan rekapitulasi ke Excel dan PDF.",
    teknologi: ["PHP", "HTML", "Tailwind CSS", "MYSQL", "Chart.js"],
    link: "https://github.com/Khoirulabdillah/wedding-guestbook.git",
    gambar: "weding.png" 
  },
];
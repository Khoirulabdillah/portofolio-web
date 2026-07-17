import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Membuat pengamat (observer)
    const observer = new IntersectionObserver(
      ([entry]) => {
        // State isVisible akan otomatis true jika masuk layar, dan false jika keluar layar.
        // Tidak ada lagi perintah "unobserve", sehingga ini akan bekerja terus-menerus!
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15, // Efek terpicu saat 15% elemen terlihat di layar
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Pembersihan saat komponen dihapus
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      // Animasi transisi yang akan bolak-balik menyesuaikan isVisible
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
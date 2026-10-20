import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, stagger = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal${isVisible ? ' is-visible' : ''}${stagger ? ' scroll-reveal--stagger' : ''}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
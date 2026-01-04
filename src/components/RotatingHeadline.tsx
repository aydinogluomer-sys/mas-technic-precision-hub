import { useState, useEffect } from 'react';

const headlines = [
  "Yüksek Hassasiyetli Üretim",
  "Profesyonel CNC Operasyonları",
  "Stabil Kalite & Güvenilir Teslimat"
];

export const RotatingHeadline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % headlines.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[2.4em] md:min-h-[1.2em]">
      <span
        className={`block transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        {headlines[currentIndex]}
      </span>
    </div>
  );
};

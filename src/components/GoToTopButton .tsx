// GoToTopButton.tsx
import { ArrowUpIcon } from '@heroicons/react/20/solid';
import React, { useState, useEffect } from 'react';

const GoToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 300;

      setIsVisible(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } fixed shadow-[inset_0_-5px_10px_rgba(255,255,255,0.2)] bottom-4 right-1/2 translate-y-1/2 translate-x-1/2 p-2 bg-blue-500 text-white rounded-md transition-opacity duration-300 ease-in-out`}
      onClick={scrollToTop}
    >
      <ArrowUpIcon className="h-7 inline" />
      Ir Arriba
    </button>
  );
};

export default GoToTopButton;

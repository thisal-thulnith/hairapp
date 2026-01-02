'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Loading() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    // Animate loading dots
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800">
      <div className="text-center">
        {/* Logo with glow effect */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-300/30 via-primary-400/20 to-primary-500/30 dark:from-primary-600/20 dark:via-primary-700/15 dark:to-primary-800/20 blur-2xl scale-150 opacity-70 animate-pulse"></div>
          {/* Logo with scale animation */}
          <div className="relative w-full h-full animate-pulse">
            <Image
              src="/images/logo.png"
              alt="LILY Logo"
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>
        </div>

        {/* Brand name with fade-in */}
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 animate-fade-in">
          LILY
        </h2>

        {/* Loading text with animated dots */}
        <p className="text-neutral-600 dark:text-neutral-400 animate-fade-in">
          Preparing your transformation experience{dots}
        </p>

        {/* Loading bar */}
        <div className="mt-6 w-48 h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-primary-500 to-primary-700 animate-[slide_3s_ease-in-out_infinite]"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}

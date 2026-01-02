'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import HomeSection from '@/components/Home';
import Footer from '@/components/Footer';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  // Show loading screen on initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Show loading screen overlay (covers navbar)
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f8f8f8] dark:bg-black transition-colors">
        <div className="text-center">
          {/* Logo with soft glow effect */}
          <div className="relative w-28 h-28 mx-auto mb-5">
            {/* Soft circular glow/shadow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-200/50 via-blue-200/40 to-purple-200/50 dark:from-cyan-600/20 dark:via-blue-600/15 dark:to-purple-600/20 blur-2xl scale-150 opacity-60"></div>
            {/* Logo */}
            <div className="relative w-full h-full">
              <Image
                src="/images/logo.png"
                alt="LILY Logo"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </div>
          {/* Brand name */}
          <h2 className="text-[28px] font-playfair text-[#4a4a4a] dark:text-neutral-100 tracking-wide font-normal transition-colors" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            LILY
          </h2>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fdfcfb] to-[#f7f5f3] dark:from-black dark:to-neutral-950 transition-colors">
      <HomeSection />
      <Footer />
    </main>
  );
}

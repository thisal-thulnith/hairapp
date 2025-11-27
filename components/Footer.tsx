'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="/images/logo.png"
                alt="Tressora Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-lg font-playfair text-[#4a4a4a]">Tressora</span>
          </div>
          <div className="text-center text-sm text-neutral-500">
            <p>© 2024 Tressora. AI-Powered Hair Transformation Studio.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

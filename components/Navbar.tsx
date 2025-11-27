'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white border-b border-neutral-200">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <div className="max-w-full mx-auto px-6 lg:px-12 h-[56px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Tressora Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-[18px] font-medium text-[#2a2a2a]">Tressora</span>
            </Link>
          </div>

          {/* Primary Nav - Centered */}
          <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/try-hairstyles" className="text-[14px] font-normal text-[#666] hover:text-[#1a1a1a] transition-colors">
              Try Hairstyles
            </Link>
            <Link href="/find-salons" className="text-[14px] font-normal text-[#666] hover:text-[#1a1a1a] transition-colors">
              Find Salons
            </Link>
            <Link href="/products" className="text-[14px] font-normal text-[#666] hover:text-[#1a1a1a] transition-colors">
              Products
            </Link>
          </nav>

          {/* Utility Nav */}
          <div className="flex items-center gap-4">
            <Link href="/pricing" className="text-[14px] font-normal text-[#666] hover:text-[#1a1a1a] transition-colors">
              Pricing
            </Link>
            <Link href="/login" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <svg className="w-4 h-4 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-[14px] font-normal text-[#666]">Login</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <div className="max-w-full mx-auto px-4 h-[56px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-7 h-7 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Tressora Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-[16px] font-medium text-[#2a2a2a]">Tressora</span>
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button className="w-8 h-8 flex items-center justify-center text-[#666] hover:text-[#2a2a2a] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            {/* User Icon */}
            <Link href="/login" className="w-8 h-8 flex items-center justify-center text-[#666] hover:text-[#2a2a2a] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Tabs */}
        <div className="border-t border-neutral-200 px-4 py-3 flex items-center gap-2 overflow-x-auto">
          <Link href="/try-hairstyles" className="px-4 py-1.5 bg-[#f5f5f5] text-[#2a2a2a] text-[13px] font-normal rounded-full whitespace-nowrap hover:bg-[#e8e8e8] transition-colors">
            Try Hairstyles
          </Link>
          <Link href="/find-salons" className="px-4 py-1.5 bg-[#f5f5f5] text-[#2a2a2a] text-[13px] font-normal rounded-full whitespace-nowrap hover:bg-[#e8e8e8] transition-colors">
            Find Salons
          </Link>
          <Link href="/products" className="px-4 py-1.5 bg-[#f5f5f5] text-[#2a2a2a] text-[13px] font-normal rounded-full whitespace-nowrap hover:bg-[#e8e8e8] transition-colors">
            Products
          </Link>
          <Link href="/pricing" className="px-4 py-1.5 bg-[#f5f5f5] text-[#2a2a2a] text-[13px] font-normal rounded-full whitespace-nowrap hover:bg-[#e8e8e8] transition-colors">
            Pricing
          </Link>
        </div>
      </div>
    </header>
  );
}

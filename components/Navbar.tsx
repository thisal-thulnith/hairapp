'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { isLoggedIn, user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    router.push('/');
  };

  return (
    <header className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md absolute top-0 left-0 right-0 z-50 border-b border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-300">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <div className="max-w-[1400px] mx-auto px-8 h-[70px] flex items-center justify-between">
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
              <span className="text-[18px] font-medium text-[#2a2a2a] dark:text-white transition-colors">Tressora</span>
            </Link>
          </div>

          {/* Primary Nav - Centered */}
          <nav className="flex items-center gap-8">
            <Link href="/try-hairstyles" className="text-[14px] font-normal text-[#666] hover:text-[#2a2a2a] dark:text-neutral-300 dark:hover:text-white transition-colors">
              Try Hairstyles
            </Link>
            <Link href="/find-salons" className="text-[14px] font-normal text-[#666] hover:text-[#2a2a2a] dark:text-neutral-300 dark:hover:text-white transition-colors">
              Find Salons
            </Link>
            <Link href="/products" className="text-[14px] font-normal text-[#666] hover:text-[#2a2a2a] dark:text-neutral-300 dark:hover:text-white transition-colors">
              Products
            </Link>
          </nav>

          {/* Utility Nav */}
          <div className="flex items-center gap-3">
            <Link href="/pricing" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#2a2a2a] dark:text-white text-[13px] font-medium rounded-md transition-colors border border-gray-200 dark:border-neutral-700">
              Pricing
            </Link>
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center bg-gray-50 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-md transition-colors border border-gray-200 dark:border-neutral-700"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-4 h-4 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-md transition-colors border border-gray-200 dark:border-neutral-700"
                >
                  <div className="w-6 h-6 rounded-full bg-[#8B7355] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <span className="text-[13px] font-medium text-[#2a2a2a] dark:text-white">{user?.name?.split(' ')[0]}</span>
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 py-2 z-50">
                    <Link
                      href="/user-profile"
                      className="block px-4 py-2 text-sm text-[#2a2a2a] dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-md transition-colors border border-gray-200 dark:border-neutral-700">
                <svg className="w-4 h-4 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="text-[13px] font-medium text-[#2a2a2a] dark:text-white">Login</span>
              </Link>
            )}
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
              <span className="text-[16px] font-medium text-[#2a2a2a] dark:text-white transition-colors">Tressora</span>
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center text-[#666] hover:text-[#2a2a2a] dark:text-neutral-300 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* User Icon */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="w-8 h-8 rounded-full bg-[#8B7355] flex items-center justify-center"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 py-2 z-50">
                    <Link
                      href="/user-profile"
                      className="block px-4 py-2 text-sm text-[#2a2a2a] dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="w-8 h-8 flex items-center justify-center text-[#666] hover:text-[#2a2a2a] dark:text-neutral-300 dark:hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Navigation Tabs */}
        <div className="border-t border-neutral-200 dark:border-neutral-700 px-4 py-3 flex items-center gap-2 overflow-x-auto transition-colors">
          <Link href="/try-hairstyles" className="px-4 py-1.5 bg-[#f5f5f5] dark:bg-neutral-800 text-[#2a2a2a] dark:text-white text-[13px] font-normal rounded-full whitespace-nowrap hover:bg-[#e8e8e8] dark:hover:bg-neutral-700 transition-colors">
            Try Hairstyles
          </Link>
          <Link href="/find-salons" className="px-4 py-1.5 bg-[#f5f5f5] dark:bg-neutral-800 text-[#2a2a2a] dark:text-white text-[13px] font-normal rounded-full whitespace-nowrap hover:bg-[#e8e8e8] dark:hover:bg-neutral-700 transition-colors">
            Find Salons
          </Link>
          <Link href="/products" className="px-4 py-1.5 bg-[#f5f5f5] dark:bg-neutral-800 text-[#2a2a2a] dark:text-white text-[13px] font-normal rounded-full whitespace-nowrap hover:bg-[#e8e8e8] dark:hover:bg-neutral-700 transition-colors">
            Products
          </Link>
          <Link href="/pricing" className="px-4 py-1.5 bg-[#f5f5f5] dark:bg-neutral-800 text-[#2a2a2a] dark:text-white text-[13px] font-normal rounded-full whitespace-nowrap hover:bg-[#e8e8e8] dark:hover:bg-neutral-700 transition-colors">
            Pricing
          </Link>
        </div>
      </div>
    </header>
  );
}

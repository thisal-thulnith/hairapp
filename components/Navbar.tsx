'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { isLoggedIn, user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Detect scroll for sticky navbar effect and scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);

      // Always show navbar at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Show navbar when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down (after 100px)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    router.push('/');
  };

  return (
    <header className={`bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md fixed left-0 right-0 z-50 border-b border-neutral-200/50 dark:border-neutral-800/50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : 'shadow-none'
    } ${
      isVisible ? 'top-0 translate-y-0' : '-top-full -translate-y-full'
    }`}>
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <div className="max-w-[1400px] mx-auto px-8 h-[70px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="LILY Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-[20px] font-medium text-[#2a2a2a] dark:text-white transition-colors">LILY</span>
            </Link>
          </div>

          {/* Primary Nav - Grouped in One Circle */}
          <nav className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800 rounded-full px-2 py-2 transition-colors">
            <Link href="/try-hairstyles" className="px-5 py-2 text-[14px] font-normal text-[#666] hover:text-[#2a2a2a] dark:text-neutral-300 dark:hover:text-white hover:bg-white dark:hover:bg-neutral-700 rounded-full transition-all">
              Try Hairstyles
            </Link>
            <Link href="/find-salons" className="px-5 py-2 text-[14px] font-normal text-[#666] hover:text-[#2a2a2a] dark:text-neutral-300 dark:hover:text-white hover:bg-white dark:hover:bg-neutral-700 rounded-full transition-all">
              Find Salons
            </Link>
            <Link href="/products" className="px-5 py-2 text-[14px] font-normal text-[#666] hover:text-[#2a2a2a] dark:text-neutral-300 dark:hover:text-white hover:bg-white dark:hover:bg-neutral-700 rounded-full transition-all">
              Products
            </Link>
          </nav>

          {/* Utility Nav - Separate Circles */}
          <div className="flex items-center gap-3">
            {/* Pricing */}
            <Link href="/pricing" className="px-5 py-2 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#2a2a2a] dark:text-white text-[14px] font-medium rounded-full transition-colors">
              Pricing
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* Login/User */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 px-5 py-2 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#2a2a2a] dark:text-white rounded-full transition-colors"
                >
                  <svg className="w-5 h-5 text-[#2a2a2a] dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <span className="text-[14px] font-medium text-[#2a2a2a] dark:text-white">{user?.name?.split(' ')[0]}</span>
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 py-2 z-50">
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
              <Link href="/login" className="flex items-center gap-2 px-5 py-2 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#2a2a2a] dark:text-white rounded-full transition-colors">
                <svg className="w-5 h-5 text-[#2a2a2a] dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <span className="text-[14px] font-medium text-[#2a2a2a] dark:text-white">Login</span>
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
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <div className="relative w-7 h-7 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="LILY Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-[16px] font-medium text-[#2a2a2a] dark:text-white transition-colors">LILY</span>
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center text-[#666] hover:text-[#2a2a2a] dark:text-neutral-300 dark:hover:text-white transition-colors rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
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

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative z-[10000] w-10 h-10 flex items-center justify-center text-[#2a2a2a] hover:text-primary-500 dark:text-white dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-95"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed top-[56px] left-0 right-0 bottom-0 bg-black/50 z-[9998] backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            ></div>

            {/* Menu Content - Below Navbar */}
            <div className="fixed top-[56px] left-0 right-0 bottom-0 bg-white dark:bg-neutral-900 z-[9999] overflow-y-auto">
              <div className="px-4 py-6">
                {/* Navigation Links */}
                <nav className="space-y-2 mb-6">
                  <Link
                    href="/try-hairstyles"
                    className="flex items-center gap-3 px-4 py-3 text-[#2a2a2a] dark:text-white text-[15px] font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                    </svg>
                    Try Hairstyles
                  </Link>

                  <Link
                    href="/find-salons"
                    className="flex items-center gap-3 px-4 py-3 text-[#2a2a2a] dark:text-white text-[15px] font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Find Salons
                  </Link>

                  <Link
                    href="/products"
                    className="flex items-center gap-3 px-4 py-3 text-[#2a2a2a] dark:text-white text-[15px] font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Products
                  </Link>

                  <Link
                    href="/pricing"
                    className="flex items-center gap-3 px-4 py-3 text-[#2a2a2a] dark:text-white text-[15px] font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Pricing
                  </Link>
                </nav>

                {/* Divider */}
                <div className="border-t border-neutral-200 dark:border-neutral-700 my-4"></div>

                {/* User Section */}
                {isLoggedIn ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 px-4 py-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-[15px] font-medium text-[#2a2a2a] dark:text-white">{user?.name}</p>
                        <p className="text-[13px] text-[#666] dark:text-neutral-400">{user?.email}</p>
                      </div>
                    </div>

                    <Link
                      href="/user-profile"
                      className="flex items-center gap-3 px-4 py-3 text-[#2a2a2a] dark:text-white text-[15px] font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      My Profile
                    </Link>

                    <button
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-red-500 text-[15px] font-medium rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link
                      href="/login"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-700 text-white text-[15px] font-medium rounded-lg hover:from-primary-600 hover:to-primary-800 transition-all shadow-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      Login
                    </Link>

                    <Link
                      href="/signup"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-neutral-800 text-[#2a2a2a] dark:text-white text-[15px] font-medium rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

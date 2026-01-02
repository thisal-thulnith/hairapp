'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Mobile Layout */}
      <section className="lg:hidden relative">
        {/* Hero Image with Overlay */}
        <div className="relative w-full h-[500px]">
          <Image
            src="/images/HomeMain.png"
            alt="Hair Transformation"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

          {/* Content Over Image */}
          <div className="absolute inset-0 flex flex-col justify-center px-6">
            <h1 className="text-[36px] font-normal leading-[1.2] text-white mb-4">
              Transform Your Hair with AI Magic
            </h1>
            <p className="text-[13px] leading-[1.6] text-white/90 mb-6 max-w-[320px]">
              Discover perfect hairstyles, book top salons, and get personalized hair care recommendations all powered by advanced AI.
            </p>
            <div className="flex flex-col gap-3 w-full max-w-[280px]">
              <Link href="/try-hairstyles">
                <button className="w-full px-6 py-3 bg-white hover:bg-gray-100 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-[#2a2a2a] text-[13px] font-medium rounded-md transition-colors">
                  Try Virtual Studio
                </button>
              </Link>
              <Link href="/pricing">
                <button className="w-full px-6 py-3 bg-transparent border border-white hover:bg-white/10 dark:hover:bg-white/20 text-white text-[13px] font-medium rounded-md transition-colors">
                  View Pricing
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="px-4 py-6 space-y-4">
          {/* 50K+ Happy Users Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md dark:shadow-xl p-6 flex items-center justify-between transition-colors">
            <div>
              <h3 className="text-[28px] font-semibold text-[#2a2a2a] dark:text-white mb-1">50K +</h3>
              <p className="text-[13px] text-[#666] dark:text-neutral-400">Happy Users</p>
            </div>
            <div className="w-10 h-10 flex items-center justify-center">
              <svg className="w-7 h-7 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
          </div>

          {/* 200K+ Hairstyles Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md dark:shadow-xl p-6 flex items-center justify-between transition-colors">
            <div>
              <h3 className="text-[28px] font-semibold text-[#2a2a2a] dark:text-white mb-1">200K +</h3>
              <p className="text-[13px] text-[#666] dark:text-neutral-400">Hairstyles</p>
            </div>
            <div className="w-10 h-10 flex items-center justify-center">
              <svg className="w-7 h-7 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
          </div>

          {/* 10K+ Partners Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md dark:shadow-xl p-6 flex items-center justify-between transition-colors">
            <div>
              <h3 className="text-[28px] font-semibold text-[#2a2a2a] dark:text-white mb-1">10K +</h3>
              <p className="text-[13px] text-[#666] dark:text-neutral-400">Partners</p>
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-[#2a2a2a] dark:bg-white rounded-full">
              <svg className="w-5 h-5 text-white dark:text-[#2a2a2a]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Everything You Need Section */}
        <div className="px-4 py-2">
          <div className="text-center mb-6">
            <h2 className="text-[24px] font-semibold text-[#2a2a2a] dark:text-white mb-2">Everything You Need</h2>
            <p className="text-[12px] text-[#666] dark:text-neutral-400 leading-relaxed">
              Powerful AI tools to transform your hair<br />journey from start to finish
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-4">
            {/* Try Hairstyles Card */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md dark:shadow-xl p-6 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#f5f5f5] dark:bg-neutral-700 rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-semibold text-[#2a2a2a] dark:text-white mb-1">Try Hairstyles</h3>
                  <p className="text-[12px] text-[#666] dark:text-neutral-400 leading-relaxed mb-3">
                    AI-powered virtual styling with<br />instant previews
                  </p>
                  <Link href="/try-hairstyles" className="text-[12px] text-[#666] hover:text-[#2a2a2a] dark:text-neutral-400 dark:hover:text-white inline-flex items-center gap-1">
                    Get Started <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Find Salons Card */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md dark:shadow-xl p-6 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#f5f5f5] dark:bg-neutral-700 rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-semibold text-[#2a2a2a] dark:text-white mb-1">Find Salons</h3>
                  <p className="text-[12px] text-[#666] dark:text-neutral-400 leading-relaxed mb-3">
                    Book appointments with top<br />salons near you
                  </p>
                  <Link href="/find-salons" className="text-[12px] text-[#666] hover:text-[#2a2a2a] dark:text-neutral-400 dark:hover:text-white inline-flex items-center gap-1">
                    Get Started <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Products Card */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md dark:shadow-xl p-6 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#f5f5f5] dark:bg-neutral-700 rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-semibold text-[#2a2a2a] dark:text-white mb-1">Products</h3>
                  <p className="text-[12px] text-[#666] dark:text-neutral-400 leading-relaxed mb-3">
                    AI-powered hair care<br />recommendations
                  </p>
                  <Link href="/products" className="text-[12px] text-[#666] hover:text-[#2a2a2a] dark:text-neutral-400 dark:hover:text-white inline-flex items-center gap-1">
                    Get Started <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="px-4 py-6 space-y-6">
          {/* AI-Powered Section */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-[18px] font-semibold text-[#2a2a2a] dark:text-white mb-2">AI-Powered</h3>
            <p className="text-[12px] text-[#666] dark:text-neutral-400 leading-relaxed max-w-[280px] mx-auto">
              Advanced AI for perfect results<br />every time
            </p>
          </div>

          {/* Instant Preview Section */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-[18px] font-semibold text-[#2a2a2a] dark:text-white mb-2">Instant Preview</h3>
            <p className="text-[12px] text-[#666] dark:text-neutral-400 leading-relaxed max-w-[280px] mx-auto">
              See results in seconds
            </p>
          </div>

          {/* Secure & Private Section */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-[18px] font-semibold text-[#2a2a2a] dark:text-white mb-2">Secure & Private</h3>
            <p className="text-[12px] text-[#666] dark:text-neutral-400 leading-relaxed max-w-[280px] mx-auto">
              Your data is always protected
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-4 pb-8">
          <div className="bg-gradient-to-br from-[#8B7355] to-[#6B5644] dark:from-[#7a6245] dark:to-[#5a4534] rounded-2xl p-8 text-center text-white transition-colors">
            <h2 className="text-[24px] font-semibold mb-2">
              Ready to Transform<br />Your Look?
            </h2>
            <p className="text-[12px] opacity-90 mb-6 leading-relaxed">
              Join thousands using AI to find and<br />discover new perfect style today
            </p>
            <Link href="/try-hairstyles">
              <button className="w-full max-w-[280px] px-6 py-3 bg-white hover:bg-gray-100 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-[#2a2a2a] text-[14px] font-medium rounded-lg transition-colors">
                Start Free Trial
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Desktop Layout */}
      <section className="hidden lg:block bg-white dark:bg-black overflow-hidden transition-colors">
        {/* Hero Section */}
        <div className="relative pb-[500px]">
          <div className="max-w-[1400px] mx-auto px-8 pt-40 pb-12">
            <div className="grid grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8 z-10 relative animate-fade-in-left">
                <h1 className="text-[64px] font-normal leading-[1.1] text-[#A68968] dark:text-[#D4B896]">
                  Transform Your Hair with AI Magic
                </h1>
                <p className="text-[15px] leading-[1.8] text-[#5a5a5a] dark:text-neutral-300 max-w-[500px]">
                  Discover perfect hairstyles, book top salons, and get personalized hair care recommendations all powered by advanced AI.
                </p>
                <div className="flex gap-5 pt-2">
                  <Link href="/try-hairstyles">
                    <button className="px-9 py-4 bg-[#C5A885] hover:bg-[#b89775] dark:bg-[#b89775] dark:hover:bg-[#A68968] text-white text-[15px] font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-xl hover:scale-105">
                      Try Virtual Studio
                    </button>
                  </Link>
                  <Link href="/pricing">
                    <button className="px-9 py-4 bg-[#2a2a2a] hover:bg-[#1a1a1a] dark:bg-neutral-700 dark:hover:bg-neutral-600 text-white text-[15px] font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-xl hover:scale-105">
                      View Pricing
                    </button>
                  </Link>
                </div>
              </div>

              {/* Empty space for grid balance */}
              <div></div>
            </div>
          </div>

          {/* Right Image - Positioned absolutely to extend to screen edge */}
          <div className="absolute top-0 right-0 w-[45%] h-screen">
            <Image
              src="/images/HomeMain.png"
              alt="Hair Transformation"
              fill
              className="object-cover object-left"
              priority
            />
            {/* Dark overlay for dark mode */}
            <div className="absolute inset-0 bg-black/0 dark:bg-black/30 transition-colors"></div>
          </div>

          {/* Stats Section - Positioned absolutely */}
          <div className="absolute bottom-[280px] left-0 right-0 z-20">
            <div className="max-w-[1400px] mx-auto px-8">
              <div className="grid grid-cols-3 gap-6">
            {/* 50K+ Happy Users */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md dark:shadow-xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-100">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[28px] font-bold text-[#2a2a2a] dark:text-white mb-1 tracking-tight">50K +</h3>
                  <p className="text-[13px] text-[#888] dark:text-neutral-400 font-normal">Happy Users</p>
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-[#C5A885] dark:bg-[#b89775] rounded-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 200K+ Hairstyles */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md dark:shadow-xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[28px] font-bold text-[#2a2a2a] dark:text-white mb-1 tracking-tight">200K +</h3>
                  <p className="text-[13px] text-[#888] dark:text-neutral-400 font-normal">Hairstyles</p>
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-[#C5A885] dark:bg-[#b89775] rounded-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 10K+ Partners */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md dark:shadow-xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-500">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[28px] font-bold text-[#2a2a2a] dark:text-white mb-1 tracking-tight">10K +</h3>
                  <p className="text-[13px] text-[#888] dark:text-neutral-400 font-normal">Partners</p>
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-[#2a2a2a] dark:bg-white rounded-xl">
                  <svg className="w-6 h-6 text-white dark:text-[#2a2a2a]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="bg-[#f5f5f5] dark:bg-black py-16 transition-colors">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="grid grid-cols-2 gap-16 items-center">
              {/* Left Side - Text Content (Centered) */}
              <div className="flex flex-col justify-center animate-fade-in-left">
                <h2 className="text-[40px] font-semibold text-[#2a2a2a] dark:text-white mb-6 text-center">About Us</h2>
                <p className="text-[14px] text-[#666] dark:text-neutral-300 leading-relaxed text-center max-w-[500px] mx-auto">
                  LILY is your AI-powered companion for effortless hair styling. Try new looks, book trusted salons, and find products for healthy, beautiful hair — all in one place. Our mission is simple: make hair styling accessible, fun, and personalized. We believe everyone deserves to look and feel their best. LILY also empowers professionals. Register to showcase your services, connect with clients, and grow your business through our smart booking system.
                </p>
              </div>

              {/* Right Side - Three Oval Images Staggered */}
              <div className="flex gap-4 items-center justify-center animate-fade-in-right animation-delay-200">
                {/* First Image - Bottom Position */}
                <div className="w-[180px] h-[360px] rounded-full overflow-hidden shadow-lg mt-20">
                  <Image
                    src="/images/Rectangle12.png"
                    alt="Hair Styling 1"
                    width={180}
                    height={360}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Second Image - Middle Position */}
                <div className="w-[180px] h-[360px] rounded-full overflow-hidden shadow-lg -mt-10">
                  <Image
                    src="/images/Rectangle46.png"
                    alt="Salon Interior"
                    width={180}
                    height={360}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Third Image - Top Position */}
                <div className="w-[180px] h-[360px] rounded-full overflow-hidden shadow-lg -mt-32">
                  <Image
                    src="/images/Rectangle47.png"
                    alt="Hair Styling 2"
                    width={180}
                    height={360}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Everything You Need Section */}
        <div className="bg-gray-50 dark:bg-black py-20 transition-colors">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-[32px] font-semibold text-[#2a2a2a] dark:text-white mb-4">Everything You Need</h2>
              <p className="text-[16px] text-[#666] dark:text-neutral-400 leading-relaxed">
                Powerful AI tools to transform your hair journey from start to finish
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-3 gap-8">
              {/* Try Hairstyles Card */}
              <div className="bg-white dark:bg-neutral-900 rounded-xl p-8 hover:shadow-lg hover:scale-105 dark:hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-100">
                <div className="w-14 h-14 mb-6 flex items-center justify-center bg-gray-100 dark:bg-neutral-700 rounded-xl">
                  <svg className="w-7 h-7 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-semibold text-[#2a2a2a] dark:text-white mb-3">Try Hairstyles</h3>
                <p className="text-[14px] text-[#666] dark:text-neutral-400 leading-relaxed mb-4">
                  AI-powered virtual styling with custom previews
                </p>
                <Link href="/try-hairstyles" className="text-[14px] text-[#666] hover:text-[#2a2a2a] dark:text-neutral-400 dark:hover:text-white inline-flex items-center gap-1">
                  Get Started <span>→</span>
                </Link>
              </div>

              {/* Find Salons Card */}
              <div className="bg-white dark:bg-neutral-900 rounded-xl p-8 hover:shadow-lg hover:scale-105 dark:hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-300">
                <div className="w-14 h-14 mb-6 flex items-center justify-center bg-gray-100 dark:bg-neutral-700 rounded-xl">
                  <svg className="w-7 h-7 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-semibold text-[#2a2a2a] dark:text-white mb-3">Find Salons</h3>
                <p className="text-[14px] text-[#666] dark:text-neutral-400 leading-relaxed mb-4">
                  Book appointments with top stylists nearby
                </p>
                <Link href="/find-salons" className="text-[14px] text-[#666] hover:text-[#2a2a2a] dark:text-neutral-400 dark:hover:text-white inline-flex items-center gap-1">
                  Get Started <span>→</span>
                </Link>
              </div>

              {/* Products Card */}
              <div className="bg-white dark:bg-neutral-900 rounded-xl p-8 hover:shadow-lg hover:scale-105 dark:hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-500">
                <div className="w-14 h-14 mb-6 flex items-center justify-center bg-gray-100 dark:bg-neutral-700 rounded-xl">
                  <svg className="w-7 h-7 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-semibold text-[#2a2a2a] dark:text-white mb-3">Products</h3>
                <p className="text-[14px] text-[#666] dark:text-neutral-400 leading-relaxed mb-4">
                  AI-powered hair care recommendations
                </p>
                <Link href="/products" className="text-[14px] text-[#666] hover:text-[#2a2a2a] dark:text-neutral-400 dark:hover:text-white inline-flex items-center gap-1">
                  Get Started <span>→</span>
                </Link>
              </div>
            </div>

            {/* Additional Features - Icons */}
            <div className="grid grid-cols-3 gap-12 mt-20 max-w-[1000px] mx-auto">
              {/* AI-Powered */}
              <div className="text-center animate-scale-in animation-delay-200">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded-full transition-colors">
                  <svg className="w-9 h-9 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-semibold text-[#2a2a2a] dark:text-white mb-2">AI-Powered</h3>
                <p className="text-[14px] text-[#666] dark:text-neutral-400 leading-relaxed">
                  Advanced AI for perfect results
                </p>
              </div>

              {/* Instant Preview */}
              <div className="text-center animate-scale-in animation-delay-400">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded-full transition-colors">
                  <svg className="w-9 h-9 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-semibold text-[#2a2a2a] dark:text-white mb-2">Instant Preview</h3>
                <p className="text-[14px] text-[#666] dark:text-neutral-400 leading-relaxed">
                  See changes in real-time
                </p>
              </div>

              {/* Secure & Private */}
              <div className="text-center animate-scale-in animation-delay-600">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded-full transition-colors">
                  <svg className="w-9 h-9 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-semibold text-[#2a2a2a] dark:text-white mb-2">Secure & Private</h3>
                <p className="text-[14px] text-[#666] dark:text-neutral-400 leading-relaxed">
                  Your data is always protected
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 py-24 transition-colors">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="flex items-center justify-between gap-12 animate-fade-in">
              {/* Left Side - Text */}
              <div className="flex-shrink-0">
                <h2 className="text-[40px] font-semibold text-[#2a2a2a] dark:text-white mb-3 leading-tight">
                  Ready to Transform Your Look?
                </h2>
                <p className="text-[15px] text-[#666] dark:text-neutral-400 leading-relaxed">
                  Join thousands of happy users and discover<br />your perfect style today
                </p>
              </div>

              {/* Right Side - Wide Animated Button */}
              <div className="flex-1 max-w-[700px]">
                <Link href="/try-hairstyles">
                  <button className="group relative w-full px-16 py-5 bg-white dark:bg-neutral-800 text-[#666] dark:text-neutral-300 text-[17px] font-normal rounded-full shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-700 hover:ring-neutral-300 dark:hover:ring-neutral-600">
                    <span className="relative z-10 flex items-center justify-between w-full">
                      <span>Start Free Trial</span>
                      <span className="text-neutral-400 dark:text-neutral-500 transition-all duration-500 group-hover:translate-x-3 group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
                        {'>'}{'>'}{'>'}{'>'}{'>'}{'>'}{'>'}{'>'}{'>'}{'>'}{'>'}{'>'}{'>'}{'>'}{'>'}{'>'}
                      </span>
                    </span>
                    {/* Subtle hover background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-50 to-transparent dark:from-neutral-700 dark:to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

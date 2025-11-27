'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Mobile Layout */}
      <section className="lg:hidden relative">
        {/* Hero Image with Overlay */}
        <div className="relative w-full h-[600px]">
          <Image
            src="/images/HomeMain.png"
            alt="Hair Transformation"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content Over Image */}
          <div className="absolute inset-0 flex flex-col justify-center px-6">
            <h1 className="text-[36px] font-normal leading-[1.2] text-white mb-4">
              Transform Your Hair with AI Magic
            </h1>
            <p className="text-[13px] leading-[1.6] text-white/90 mb-6 max-w-[320px]">
              Discover perfect hairstyles, book top salons, and get personalized hair care recommendations all powered by advanced AI.
            </p>
            <div className="flex flex-col gap-3 w-full max-w-[280px]">
              <button className="w-full px-6 py-3 bg-white hover:bg-gray-100 text-[#2a2a2a] text-[13px] font-medium rounded-md transition-colors">
                Try Virtual Studio
              </button>
              <button className="w-full px-6 py-3 bg-transparent border border-white hover:bg-white/10 text-white text-[13px] font-medium rounded-md transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="px-4 py-6 space-y-4">
          {/* 50K+ Happy Users Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">
            <div>
              <h3 className="text-[28px] font-semibold text-[#2a2a2a] mb-1">50K +</h3>
              <p className="text-[13px] text-[#666]">Happy Users</p>
            </div>
            <div className="w-10 h-10 flex items-center justify-center">
              <svg className="w-7 h-7 text-[#2a2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
          </div>

          {/* 200K+ Hairstyles Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">
            <div>
              <h3 className="text-[28px] font-semibold text-[#2a2a2a] mb-1">200K +</h3>
              <p className="text-[13px] text-[#666]">Hairstyles</p>
            </div>
            <div className="w-10 h-10 flex items-center justify-center">
              <svg className="w-7 h-7 text-[#2a2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
          </div>

          {/* 10K+ Partners Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">
            <div>
              <h3 className="text-[28px] font-semibold text-[#2a2a2a] mb-1">10K +</h3>
              <p className="text-[13px] text-[#666]">Partners</p>
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-[#2a2a2a] rounded-full">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Everything You Need Section */}
        <div className="px-4 py-2">
          <div className="text-center mb-6">
            <h2 className="text-[24px] font-semibold text-[#2a2a2a] mb-2">Everything You Need</h2>
            <p className="text-[12px] text-[#666] leading-relaxed">
              Powerful AI tools to transform your hair<br />journey from start to finish
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-4">
            {/* Try Hairstyles Card */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#f5f5f5] rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 text-[#2a2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-semibold text-[#2a2a2a] mb-1">Try Hairstyles</h3>
                  <p className="text-[12px] text-[#666] leading-relaxed mb-3">
                    AI-powered virtual styling with<br />instant previews
                  </p>
                  <a href="#" className="text-[12px] text-[#666] hover:text-[#2a2a2a] inline-flex items-center gap-1">
                    Get Started <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Find Salons Card */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#f5f5f5] rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 text-[#2a2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-semibold text-[#2a2a2a] mb-1">Find Salons</h3>
                  <p className="text-[12px] text-[#666] leading-relaxed mb-3">
                    Book appointments with top<br />salons near you
                  </p>
                  <a href="#" className="text-[12px] text-[#666] hover:text-[#2a2a2a] inline-flex items-center gap-1">
                    Get Started <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Products Card */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#f5f5f5] rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 text-[#2a2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-semibold text-[#2a2a2a] mb-1">Products</h3>
                  <p className="text-[12px] text-[#666] leading-relaxed mb-3">
                    AI-powered hair care<br />recommendations
                  </p>
                  <a href="#" className="text-[12px] text-[#666] hover:text-[#2a2a2a] inline-flex items-center gap-1">
                    Get Started <span>→</span>
                  </a>
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
              <svg className="w-8 h-8 text-[#2a2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-[18px] font-semibold text-[#2a2a2a] mb-2">AI-Powered</h3>
            <p className="text-[12px] text-[#666] leading-relaxed max-w-[280px] mx-auto">
              Advanced AI for perfect results<br />every time
            </p>
          </div>

          {/* Instant Preview Section */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#2a2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-[18px] font-semibold text-[#2a2a2a] mb-2">Instant Preview</h3>
            <p className="text-[12px] text-[#666] leading-relaxed max-w-[280px] mx-auto">
              See results in seconds
            </p>
          </div>

          {/* Secure & Private Section */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#2a2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-[18px] font-semibold text-[#2a2a2a] mb-2">Secure & Private</h3>
            <p className="text-[12px] text-[#666] leading-relaxed max-w-[280px] mx-auto">
              Your data is always protected
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-4 pb-8">
          <div className="bg-gradient-to-br from-[#8B7355] to-[#6B5644] rounded-2xl p-8 text-center text-white">
            <h2 className="text-[24px] font-semibold mb-2">
              Ready to Transform<br />Your Look?
            </h2>
            <p className="text-[12px] opacity-90 mb-6 leading-relaxed">
              Join thousands using AI to find and<br />discover new perfect style today
            </p>
            <button className="w-full max-w-[280px] px-6 py-3 bg-white hover:bg-gray-100 text-[#2a2a2a] text-[14px] font-medium rounded-lg transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Desktop Layout */}
      <section className="hidden lg:block max-w-[1100px] mx-auto px-6 lg:px-8 pt-[80px] pb-16">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 items-start mb-20">
          {/* Left Content */}
          <div className="space-y-5 pt-8">
            <h1 className="text-[52px] lg:text-[58px] font-normal leading-[1.15] text-[#B8957A]">
              Transform Your Hair with AI Magic
            </h1>
            <p className="text-[14px] leading-[1.7] text-[#6B6B6B] font-normal max-w-[420px]">
              Discover perfect hairstyles, book top salons, and get personalized hair care recommendations all powered by advanced AI.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button className="px-6 py-2.5 bg-[#B8957A] hover:bg-[#a3846b] text-white text-[13px] font-medium rounded-md transition-colors">
                Try Virtual Studio
              </button>
              <button className="px-6 py-2.5 bg-[#5A5A5A] hover:bg-[#4a4a4a] text-white text-[13px] font-medium rounded-md transition-colors">
                View Pricing
              </button>
            </div>
            {/* Placeholder block */}
            <div className="pt-6">
              <div className="w-[280px] h-[60px] bg-[#E8E8E8] rounded-md"></div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[500px] lg:h-[580px]">
            <Image
              src="/images/HomeMain.png"
              alt="Hair Transformation"
              fill
              className="object-cover rounded-none"
              priority
            />
          </div>
        </div>

        {/* Stats Cards - Desktop */}
        <div className="grid grid-cols-3 gap-6 mb-20">
          {/* 50K+ Happy Users */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-10 h-10 text-[#B8957A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-[36px] font-semibold text-[#2a2a2a] mb-2">50K +</h3>
            <p className="text-[14px] text-[#666]">Happy Users</p>
          </div>

          {/* 200K+ Hairstyles */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-10 h-10 text-[#B8957A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-[36px] font-semibold text-[#2a2a2a] mb-2">200K +</h3>
            <p className="text-[14px] text-[#666]">Hairstyles</p>
          </div>

          {/* 10K+ Partners */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-10 h-10 text-[#B8957A]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <h3 className="text-[36px] font-semibold text-[#2a2a2a] mb-2">10K +</h3>
            <p className="text-[14px] text-[#666]">Partners</p>
          </div>
        </div>

        {/* Everything You Need Section - Desktop */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-[36px] font-semibold text-[#2a2a2a] mb-3">Everything You Need</h2>
            <p className="text-[16px] text-[#666] leading-relaxed">
              Powerful AI tools to transform your hair journey from start to finish
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Try Hairstyles Card */}
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mb-6 flex items-center justify-center bg-[#f5f5f5] rounded-xl">
                <svg className="w-7 h-7 text-[#B8957A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                </svg>
              </div>
              <h3 className="text-[20px] font-semibold text-[#2a2a2a] mb-3">Try Hairstyles</h3>
              <p className="text-[14px] text-[#666] leading-relaxed mb-4">
                AI-powered virtual styling with instant previews
              </p>
              <a href="#" className="text-[14px] text-[#B8957A] hover:text-[#a3846b] inline-flex items-center gap-1 font-medium">
                Get Started <span>→</span>
              </a>
            </div>

            {/* Find Salons Card */}
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mb-6 flex items-center justify-center bg-[#f5f5f5] rounded-xl">
                <svg className="w-7 h-7 text-[#B8957A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-[20px] font-semibold text-[#2a2a2a] mb-3">Find Salons</h3>
              <p className="text-[14px] text-[#666] leading-relaxed mb-4">
                Book appointments with top salons near you
              </p>
              <a href="#" className="text-[14px] text-[#B8957A] hover:text-[#a3846b] inline-flex items-center gap-1 font-medium">
                Get Started <span>→</span>
              </a>
            </div>

            {/* Products Card */}
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mb-6 flex items-center justify-center bg-[#f5f5f5] rounded-xl">
                <svg className="w-7 h-7 text-[#B8957A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-[20px] font-semibold text-[#2a2a2a] mb-3">Products</h3>
              <p className="text-[14px] text-[#666] leading-relaxed mb-4">
                AI-powered hair care recommendations
              </p>
              <a href="#" className="text-[14px] text-[#B8957A] hover:text-[#a3846b] inline-flex items-center gap-1 font-medium">
                Get Started <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Features Grid - Desktop */}
        <div className="grid grid-cols-3 gap-8 mb-20">
          {/* AI-Powered */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-[#f5f5f5] rounded-2xl">
              <svg className="w-10 h-10 text-[#B8957A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-[22px] font-semibold text-[#2a2a2a] mb-3">AI-Powered</h3>
            <p className="text-[14px] text-[#666] leading-relaxed">
              Advanced AI for perfect results every time
            </p>
          </div>

          {/* Instant Preview */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-[#f5f5f5] rounded-2xl">
              <svg className="w-10 h-10 text-[#B8957A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-[22px] font-semibold text-[#2a2a2a] mb-3">Instant Preview</h3>
            <p className="text-[14px] text-[#666] leading-relaxed">
              See results in seconds
            </p>
          </div>

          {/* Secure & Private */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-[#f5f5f5] rounded-2xl">
              <svg className="w-10 h-10 text-[#B8957A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-[22px] font-semibold text-[#2a2a2a] mb-3">Secure & Private</h3>
            <p className="text-[14px] text-[#666] leading-relaxed">
              Your data is always protected
            </p>
          </div>
        </div>

        {/* CTA Section - Desktop */}
        <div className="max-w-[800px] mx-auto">
          <div className="bg-gradient-to-br from-[#B8957A] to-[#9d7e62] rounded-3xl p-12 text-center text-white">
            <h2 className="text-[40px] font-semibold mb-4 leading-tight">
              Ready to Transform Your Look?
            </h2>
            <p className="text-[16px] opacity-90 mb-8 leading-relaxed">
              Join thousands using AI to find and discover new perfect style today
            </p>
            <button className="px-10 py-4 bg-white hover:bg-gray-100 text-[#2a2a2a] text-[16px] font-medium rounded-lg transition-colors shadow-lg">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

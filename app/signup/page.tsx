'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    gender: '',
    hairType: '',
    location: '',
    agreeToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt with:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfcfb] to-[#f7f5f3] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Header with Logo and Theme Toggle */}
        <div className="flex items-center justify-between mb-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image
                src="/images/logo.png"
                alt="LILY Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-[18px] font-medium text-[#2a2a2a]">LILY</span>
          </Link>

          {/* Theme Toggle */}
          <button className="w-8 h-8 flex items-center justify-center text-[#666] hover:text-[#2a2a2a] transition-colors rounded-full hover:bg-neutral-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>

        {/* Welcome Text */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-[#2a2a2a] mb-2">Create Account</h1>
          <p className="text-sm text-[#666]">Start your beauty journey today</p>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3 mb-6">
          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-sm font-medium text-[#2a2a2a]">Continue with Google</span>
          </button>

          {/* Facebook */}
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="text-sm font-medium text-[#2a2a2a]">Continue with Facebook</span>
          </button>

          {/* Apple */}
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#000000">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            <span className="text-sm font-medium text-[#2a2a2a]">Continue with Apple</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-neutral-200"></div>
          <span className="text-sm text-[#999]">or</span>
          <div className="flex-1 h-px bg-neutral-200"></div>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-[#2a2a2a] mb-2">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full pl-11 pr-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent text-sm"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#2a2a2a] mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full pl-11 pr-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent text-sm"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#2a2a2a] mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent text-sm"
                required
              />
            </div>
          </div>

          {/* Gender (Optional) */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-[#2a2a2a] mb-2">
              Gender (Optional)
            </label>
            <div className="relative">
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent text-sm appearance-none bg-white cursor-pointer"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999] pointer-events-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Hair Type (Optional) */}
          <div>
            <label htmlFor="hairType" className="block text-sm font-medium text-[#2a2a2a] mb-2">
              Hair Type (Optional)
            </label>
            <div className="relative">
              <select
                id="hairType"
                name="hairType"
                value={formData.hairType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent text-sm appearance-none bg-white cursor-pointer"
              >
                <option value="">Select gender</option>
                <option value="straight">Straight</option>
                <option value="wavy">Wavy</option>
                <option value="curly">Curly</option>
                <option value="coily">Coily</option>
                <option value="kinky">Kinky</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999] pointer-events-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-[#2a2a2a] mb-2">
              Location
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your location"
                className="w-full pl-11 pr-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent text-sm"
                required
              />
            </div>
          </div>

          {/* Terms and Privacy Checkbox */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mt-1 w-4 h-4 border-neutral-300 rounded text-[#8B7355] focus:ring-[#8B7355]"
              required
            />
            <label htmlFor="agreeToTerms" className="text-xs text-[#666]">
              I agree to the{' '}
              <Link href="/terms" className="text-[#8B7355] hover:text-[#6d5a42] underline">
                Terms of Service
              </Link>
              {' '}and{' '}
              <Link href="/privacy" className="text-[#8B7355] hover:text-[#6d5a42] underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#5a4a3a] text-white text-sm font-medium rounded-lg hover:bg-[#4a3a2a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!formData.agreeToTerms}
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center text-sm">
          <span className="text-[#666]">Already have an account? </span>
          <Link href="/login" className="text-[#8B7355] hover:text-[#6d5a42] font-medium transition-colors">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

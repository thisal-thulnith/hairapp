'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/contexts/AuthContext';

export default function UserProfile() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfcfb] to-[#f7f5f3] dark:from-black dark:to-neutral-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#2a2a2a] dark:text-white mb-2">My Profile</h1>
            <p className="text-sm text-[#666] dark:text-neutral-400">Manage your account and preferences</p>
          </div>
          <button className="w-10 h-10 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
            <svg className="w-5 h-5 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-6 mb-8 border-b border-neutral-200 dark:border-neutral-700 overflow-x-auto">
          <button className="pb-3 text-sm font-medium text-[#5a4a3a] dark:text-[#8B7355] border-b-2 border-[#5a4a3a] dark:border-[#8B7355] whitespace-nowrap">
            My Profile
          </button>
          <Link href="/find-salons" className="pb-3 text-sm font-medium text-[#999] hover:text-[#666] dark:hover:text-neutral-300 transition-colors whitespace-nowrap">
            Find Salons
          </Link>
          <Link href="/products" className="pb-3 text-sm font-medium text-[#999] hover:text-[#666] dark:hover:text-neutral-300 transition-colors whitespace-nowrap">
            Products
          </Link>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md p-6">
              <div className="flex flex-col items-center mb-6">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#8B7355] flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-[#2a2a2a] dark:text-white mb-1">{user?.name || 'Sarah Johnson'}</h2>
                <p className="text-sm text-[#666] dark:text-neutral-400 mb-4">{user?.email || 'sarah@gmail.com'}</p>
                <button className="w-full py-3 bg-[#5a4a3a] hover:bg-[#4a3a2a] dark:bg-[#6d5a42] dark:hover:bg-[#5a4a32] text-white text-sm font-medium rounded-lg transition-colors">
                  EDIT PROFILE
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#d4b896] rounded-xl p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl font-semibold text-[#2a2a2a] mb-2">12</div>
                <div className="text-xs sm:text-sm text-[#2a2a2a]/70">Saved Hairstyles</div>
              </div>
              <div className="bg-[#c9a876] rounded-xl p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl font-semibold text-[#2a2a2a] mb-2">8</div>
                <div className="text-xs sm:text-sm text-[#2a2a2a]/70">Wishlist Items</div>
              </div>
              <div className="bg-[#d4b896] rounded-xl p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl font-semibold text-[#2a2a2a] mb-2">15</div>
                <div className="text-xs sm:text-sm text-[#2a2a2a]/70">Bookings</div>
              </div>
              <div className="bg-[#c9a876] rounded-xl p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl font-semibold text-[#2a2a2a] mb-2">5</div>
                <div className="text-xs sm:text-sm text-[#2a2a2a]/70">Saved Salons</div>
              </div>
            </div>

            {/* Account Settings */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-[#2a2a2a] dark:text-white mb-4">Account Settings</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg px-2 transition-colors">
                  <span className="text-sm text-[#2a2a2a] dark:text-white">Profile Settings</span>
                  <svg className="w-4 h-4 text-[#999]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="w-full flex items-center justify-between py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg px-2 transition-colors">
                  <span className="text-sm text-[#2a2a2a] dark:text-white">Notifications</span>
                  <svg className="w-4 h-4 text-[#999]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="w-full flex items-center justify-between py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg px-2 transition-colors">
                  <span className="text-sm text-[#2a2a2a] dark:text-white">Privacy</span>
                  <svg className="w-4 h-4 text-[#999]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="w-full flex items-center justify-between py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg px-2 transition-colors">
                  <span className="text-sm text-[#2a2a2a] dark:text-white">Payment Methods</span>
                  <svg className="w-4 h-4 text-[#999]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="w-full flex items-center justify-between py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg px-2 transition-colors">
                  <span className="text-sm text-red-500">Logout</span>
                  <svg className="w-4 h-4 text-[#999]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Activity & Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Saved Hairstyles */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-[#2a2a2a] dark:text-white">Saved Hairstyles</h3>
                <button className="text-sm text-[#8B7355] hover:text-[#6d5a42] transition-colors font-medium">View All</button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-800 hover:opacity-90 transition-opacity cursor-pointer">
                  <Image
                    src="https://images.unsplash.com/photo-1595475884562-073c32c26851?w=400&h=400&fit=crop"
                    alt="Hairstyle"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-800 hover:opacity-90 transition-opacity cursor-pointer">
                  <Image
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop"
                    alt="Hairstyle"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-800 hover:opacity-90 transition-opacity cursor-pointer">
                  <Image
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop"
                    alt="Hairstyle"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden bg-[#5a4a3a] dark:bg-[#6d5a42] flex items-center justify-center hover:bg-[#4a3a2a] dark:hover:bg-[#5a4a32] transition-colors cursor-pointer">
                  <span className="text-white text-sm font-medium">+9 More</span>
                </div>
              </div>
            </div>

            {/* Upcoming Bookings */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-[#2a2a2a] dark:text-white">Upcoming Bookings</h3>
                <button className="text-sm text-[#8B7355] hover:text-[#6d5a42] transition-colors font-medium">View All</button>
              </div>
              <div className="space-y-4">
                <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-5 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-[#2a2a2a] dark:text-white mb-2">Luxe Hair Studio</h4>
                      <p className="text-sm text-[#666] dark:text-neutral-400 mb-1">Haircut & Style</p>
                      <p className="text-sm text-[#999] dark:text-neutral-500">Dec 23, 2025 • 10:00 AM</p>
                    </div>
                    <span className="px-4 py-1.5 bg-pink-100 text-pink-600 text-xs rounded-full font-medium whitespace-nowrap">UPCOMING</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 py-2.5 bg-[#5a4a3a] hover:bg-[#4a3a2a] dark:bg-[#6d5a42] dark:hover:bg-[#5a4a32] text-white text-sm font-medium rounded-lg transition-colors">
                      View Details
                    </button>
                    <button className="flex-1 py-2.5 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-[#2a2a2a] dark:text-white text-sm font-medium rounded-lg transition-colors">
                      Reschedule
                    </button>
                  </div>
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-5 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-[#2a2a2a] dark:text-white mb-2">Bella Beauty Bar</h4>
                      <p className="text-sm text-[#666] dark:text-neutral-400 mb-1">Color Treatment</p>
                      <p className="text-sm text-[#999] dark:text-neutral-500">Dec 24, 2025 • 2:00 PM</p>
                    </div>
                    <span className="px-4 py-1.5 bg-pink-100 text-pink-600 text-xs rounded-full font-medium whitespace-nowrap">UPCOMING</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 py-2.5 bg-[#5a4a3a] hover:bg-[#4a3a2a] dark:bg-[#6d5a42] dark:hover:bg-[#5a4a32] text-white text-sm font-medium rounded-lg transition-colors">
                      View Details
                    </button>
                    <button className="flex-1 py-2.5 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-[#2a2a2a] dark:text-white text-sm font-medium rounded-lg transition-colors">
                      Reschedule
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Purchase History */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-[#2a2a2a] dark:text-white">Purchase History</h3>
                <button className="text-sm text-[#8B7355] hover:text-[#6d5a42] transition-colors font-medium">View All</button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-[#2a2a2a] dark:text-white mb-1">GlowHair</h4>
                    <p className="text-sm text-[#666] dark:text-neutral-400 mb-1">BoldGlow Growth Serum</p>
                    <p className="text-sm text-[#999] dark:text-neutral-500">Dec 8, 2025</p>
                  </div>
                  <span className="text-lg font-semibold text-[#2a2a2a] dark:text-white">$33.45</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-[#2a2a2a] dark:text-white mb-1">Bella Beauty Bar</h4>
                    <p className="text-sm text-[#666] dark:text-neutral-400 mb-1">Haircut & Style</p>
                    <p className="text-sm text-[#999] dark:text-neutral-500">Nov 22, 2025</p>
                  </div>
                  <span className="text-lg font-semibold text-[#2a2a2a] dark:text-white">$14.99</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-[#2a2a2a] dark:text-white mb-1">Hair Essentials</h4>
                    <p className="text-sm text-[#666] dark:text-neutral-400 mb-1">Moisturizing Shampoo Set</p>
                    <p className="text-sm text-[#999] dark:text-neutral-500">Nov 15, 2025</p>
                  </div>
                  <span className="text-lg font-semibold text-[#2a2a2a] dark:text-white">$45.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

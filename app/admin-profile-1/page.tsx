'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AdminProfile1() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfcfb] to-[#f7f5f3] dark:from-black dark:to-neutral-950">
      {/* Spacing for fixed navbar */}
      <div className="h-[56px] md:h-[70px]"></div>

      <div className="max-w-md mx-auto px-4 pt-12 pb-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold text-[#2a2a2a] dark:text-white">Hair App</h1>
          <button className="w-10 h-10 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded-full">
            <svg className="w-5 h-5 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-6 mb-8 border-b border-neutral-200 dark:border-neutral-700">
          <button className="pb-3 text-sm font-medium text-[#5a4a3a] dark:text-[#8B7355] border-b-2 border-[#5a4a3a] dark:border-[#8B7355]">
            My Profile
          </button>
          <button className="pb-3 text-sm font-medium text-[#999]">
            Find Salons
          </button>
          <button className="pb-3 text-sm font-medium text-[#999]">
            Products
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md p-6 mb-6">
          {/* Profile Picture */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-24 h-24 rounded-full bg-[#8B7355] flex items-center justify-center mb-3">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-[#2a2a2a] dark:text-white mb-1">Sarah Johnson</h2>
            <p className="text-sm text-[#666] dark:text-neutral-400">sarah@gmail.com</p>
          </div>

          {/* Edit Profile Button */}
          <button className="w-full py-2.5 bg-neutral-100 dark:bg-neutral-800 text-[#2a2a2a] dark:text-white text-sm font-medium rounded-lg mb-4">
            MANAGE PROFILE
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#c9a876] rounded-xl p-4">
            <div className="text-2xl font-semibold text-[#2a2a2a] mb-1">12</div>
            <div className="text-xs text-[#2a2a2a]/70">Total Salons</div>
          </div>
          <div className="bg-[#d4b896] rounded-xl p-4">
            <div className="text-2xl font-semibold text-[#2a2a2a] mb-1">8</div>
            <div className="text-xs text-[#2a2a2a]/70">Total Stylists</div>
          </div>
          <div className="bg-[#c9a876] rounded-xl p-4">
            <div className="text-2xl font-semibold text-[#2a2a2a] mb-1">15</div>
            <div className="text-xs text-[#2a2a2a]/70">Active Services</div>
          </div>
          <div className="bg-[#d4b896] rounded-xl p-4">
            <div className="text-2xl font-semibold text-[#2a2a2a] mb-1">5</div>
            <div className="text-xs text-[#2a2a2a]/70">Pending Reviews</div>
          </div>
        </div>

        {/* Saved Hairstyles */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-[#2a2a2a] dark:text-white">Saved Hairstyles</h3>
            <button className="text-sm text-[#8B7355]">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-800">
              <Image
                src="https://images.unsplash.com/photo-1595475884562-073c32c26851?w=400&h=400&fit=crop"
                alt="Hairstyle"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-800">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop"
                alt="Hairstyle"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-800">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop"
                alt="Hairstyle"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden bg-[#2a2a2a] flex items-center justify-center">
              <span className="text-white text-sm font-medium">View All</span>
            </div>
          </div>
        </div>

        {/* Upcoming Bookings */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-[#2a2a2a] dark:text-white">Upcoming Bookings</h3>
            <button className="text-sm text-[#8B7355]">View All</button>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 flex items-center justify-between">
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-[#2a2a2a] dark:text-white mb-1">Luxe Hair Studio</h4>
                <p className="text-xs text-[#666] dark:text-neutral-400 mb-1">Haircut & Style</p>
                <p className="text-xs text-[#999] dark:text-neutral-500">Dec 23, 2025</p>
              </div>
              <span className="px-3 py-1 bg-pink-100 text-pink-600 text-xs rounded-full font-medium">UPCOMING</span>
            </div>
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 flex items-center justify-between">
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-[#2a2a2a] dark:text-white mb-1">Bella Beauty Bar</h4>
                <p className="text-xs text-[#666] dark:text-neutral-400 mb-1">Haircut & Style</p>
                <p className="text-xs text-[#999] dark:text-neutral-500">Dec 24, 2025</p>
              </div>
              <span className="px-3 py-1 bg-pink-100 text-pink-600 text-xs rounded-full font-medium">UPCOMING</span>
            </div>
          </div>
        </div>

        {/* Purchase History */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-[#2a2a2a] dark:text-white">Purchase History</h3>
            <button className="text-sm text-[#8B7355]">View All</button>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-[#2a2a2a] dark:text-white">GlowSerenity</h4>
                <span className="text-sm font-semibold text-[#2a2a2a] dark:text-white">$26.00</span>
              </div>
              <p className="text-xs text-[#666] dark:text-neutral-400 mb-1">Revive Hair Growth Serum</p>
              <p className="text-xs text-[#999] dark:text-neutral-500">Dec 8, 2025</p>
            </div>
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-[#2a2a2a] dark:text-white">Bella Beauty Bar</h4>
                <span className="text-sm font-semibold text-[#2a2a2a] dark:text-white">$10.00</span>
              </div>
              <p className="text-xs text-[#666] dark:text-neutral-400 mb-1">Haircut & Style</p>
              <p className="text-xs text-[#999] dark:text-neutral-500">Nov 23, 2025</p>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 mb-6">
          <h3 className="text-base font-semibold text-[#2a2a2a] dark:text-white mb-4">Account Settings</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between py-2">
              <span className="text-sm text-[#2a2a2a] dark:text-white">Profile</span>
              <svg className="w-4 h-4 text-[#999]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="w-full flex items-center justify-between py-2">
              <span className="text-sm text-[#2a2a2a] dark:text-white">Notifications</span>
              <svg className="w-4 h-4 text-[#999]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="w-full flex items-center justify-between py-2">
              <span className="text-sm text-[#2a2a2a] dark:text-white">Privacy</span>
              <svg className="w-4 h-4 text-[#999]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="w-full flex items-center justify-between py-2">
              <span className="text-sm text-[#2a2a2a] dark:text-white">Payment Methods</span>
              <svg className="w-4 h-4 text-[#999]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="w-full flex items-center justify-between py-2">
              <span className="text-sm text-red-500">Logout</span>
              <svg className="w-4 h-4 text-[#999]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

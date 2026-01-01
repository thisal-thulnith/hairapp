'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AdminProfile2() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfcfb] to-[#f7f5f3] dark:from-black dark:to-neutral-950">
      {/* Spacing for fixed navbar */}
      <div className="h-[56px] md:h-[70px]"></div>

      <div className="max-w-md mx-auto px-4 pt-12 pb-8">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between mb-6">
          <button className="w-10 h-10 flex items-center justify-center">
            <svg className="w-6 h-6 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded-full">
              <svg className="w-5 h-5 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded-full">
              <svg className="w-5 h-5 text-[#2a2a2a] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
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
            <h2 className="text-lg font-semibold text-[#2a2a2a] dark:text-white mb-1">Luxe Hair Studio</h2>
            <p className="text-sm text-[#666] dark:text-neutral-400 mb-2">NYC, USA</p>
            <div className="flex items-center gap-1 mb-2">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-[#2a2a2a] dark:text-white">4.9</span>
              <span className="text-xs text-[#999]">(324 Reviews)</span>
            </div>
            <span className="text-xs text-[#666] dark:text-neutral-400">4.5k Bookings</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 flex flex-col items-center">
            <svg className="w-6 h-6 text-[#5a4a3a] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-2xl font-semibold text-[#2a2a2a] dark:text-white mb-1">200</div>
            <div className="text-xs text-[#666] dark:text-neutral-400 text-center">Total Income</div>
          </div>
          <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 flex flex-col items-center">
            <svg className="w-6 h-6 text-[#5a4a3a] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <div className="text-2xl font-semibold text-[#2a2a2a] dark:text-white mb-1">32</div>
            <div className="text-xs text-[#666] dark:text-neutral-400 text-center">This Week</div>
          </div>
          <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 flex flex-col items-center">
            <svg className="w-6 h-6 text-[#5a4a3a] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-2xl font-semibold text-[#2a2a2a] dark:text-white mb-1">$8,450</div>
            <div className="text-xs text-[#666] dark:text-neutral-400 text-center">Revenue</div>
          </div>
          <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 flex flex-col items-center">
            <svg className="w-6 h-6 text-[#5a4a3a] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <div className="text-2xl font-semibold text-[#2a2a2a] dark:text-white mb-1">4.9</div>
            <div className="text-xs text-[#666] dark:text-neutral-400 text-center">Overall Rating</div>
          </div>
        </div>

        {/* Booking Calendar */}
        <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 mb-6">
          <h3 className="text-base font-semibold text-[#2a2a2a] dark:text-white mb-4">Booking Calendar</h3>

          {/* Calendar Header */}
          <div className="grid grid-cols-7 gap-2 mb-3">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
              <div key={day} className="text-center text-xs font-medium text-[#999]">{day}</div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((day) => (
              <button
                key={day}
                className={`aspect-square flex items-center justify-center text-sm rounded-lg ${
                  day === 15
                    ? 'bg-[#5a4a3a] text-white font-semibold'
                    : day === 10 || day === 20 || day === 25
                    ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 font-medium'
                    : 'text-[#2a2a2a] dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-[#2a2a2a] dark:text-white">Today's Schedule</h3>
            <button className="text-sm text-[#8B7355]">View All</button>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-[#2a2a2a] dark:text-white">Emma Wilson</h4>
                <span className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full font-medium">CONFIRMED</span>
              </div>
              <p className="text-xs text-[#666] dark:text-neutral-400 mb-1">Haircut & Blow Dry</p>
              <p className="text-xs text-[#999] dark:text-neutral-500">10:00 AM - 11:00 AM • $85</p>
            </div>
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-[#2a2a2a] dark:text-white">Sarah Johnson</h4>
                <span className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full font-medium">CONFIRMED</span>
              </div>
              <p className="text-xs text-[#666] dark:text-neutral-400 mb-1">Balayage + Style</p>
              <p className="text-xs text-[#999] dark:text-neutral-500">02:00 PM - 04:00 PM • $220</p>
            </div>
          </div>
        </div>

        {/* Pending Requests */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-[#2a2a2a] dark:text-white">Pending Requests</h3>
            <button className="text-sm text-[#8B7355]">View All</button>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-[#2a2a2a] dark:text-white">Jessica Martinez</h4>
                <span className="text-xs text-[#666] dark:text-neutral-400">2 hours ago</span>
              </div>
              <p className="text-xs text-[#666] dark:text-neutral-400 mb-3">Women Haircut</p>
              <p className="text-xs text-[#999] dark:text-neutral-500 mb-3">Dec 20, 2025 • 03:00 PM - 04:00 PM</p>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-[#5a4a3a] text-white text-xs font-medium rounded-lg">
                  Accept
                </button>
                <button className="flex-1 py-2 bg-neutral-100 dark:bg-neutral-800 text-[#2a2a2a] dark:text-white text-xs font-medium rounded-lg">
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 mb-6">
          <h3 className="text-base font-semibold text-[#2a2a2a] dark:text-white mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full py-3 bg-[#5a4a3a] text-white text-sm font-medium rounded-lg">
              View All Clients
            </button>
            <button className="w-full py-3 bg-neutral-100 dark:bg-neutral-800 text-[#2a2a2a] dark:text-white text-sm font-medium rounded-lg">
              Business Settings
            </button>
          </div>
        </div>

        {/* Monthly Summary */}
        <div className="bg-[#2a2a2a] dark:bg-neutral-800 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold">This Month</h3>
            <span className="text-xs text-white/70">December</span>
          </div>
          <div className="text-2xl font-bold mb-1">$28,450</div>
          <div className="text-xs text-white/70">Total Revenue</div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

// Sample salon data
const salons = [
  {
    id: 1,
    name: 'Luxe Hair Studio',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop',
    rating: 4.9,
    reviews: 324,
    distance: '0.5 km away',
    tags: ['Color', 'Cut', 'Vibe'],
  },
  {
    id: 2,
    name: 'Modern Cuts',
    image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&h=600&fit=crop',
    rating: 4.7,
    reviews: 156,
    distance: '1.2 km away',
    tags: ['Balayage', 'Cut', 'Vibe'],
  },
  {
    id: 3,
    name: 'The Cut House',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&h=600&fit=crop',
    rating: 4.8,
    reviews: 289,
    distance: '0.8 km away',
    tags: ['Perm', 'Cut', 'Vibe'],
  },
];

// Sample stylist data
const stylists = [
  {
    id: 1,
    name: 'Emma Rodriguez',
    salon: 'Luxe Hair Studio',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces',
    rating: 5,
    reviews: 189,
    experience: '8 years experience',
    specialties: ['Balayage', 'Balayage Expert'],
  },
  {
    id: 2,
    name: 'Michael Chen',
    salon: 'Modern Cuts',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces',
    rating: 4.9,
    reviews: 243,
    experience: '10 years experience',
    specialties: ['Men\'s Cuts', 'Beard Services'],
  },
  {
    id: 3,
    name: 'Sarah Williams',
    salon: 'Bella Beauty Bar',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces',
    rating: 4.8,
    reviews: 187,
    experience: '10 years experience',
    specialties: ['Natural Hair', 'Protective Styles'],
  },
  {
    id: 4,
    name: 'James Thompson',
    salon: 'The Cut House',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces',
    rating: 4.7,
    reviews: 156,
    experience: '12 years experience',
    specialties: ['Classic Cuts', 'Color Correction'],
  },
];

export default function FindSalonsPage() {
  const [activeView, setActiveView] = useState<'salon' | 'stylist'>('salon');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fdfcfb] to-[#f7f5f3] dark:from-black dark:to-neutral-950 transition-colors">
      {/* Spacing for fixed navbar */}
      <div className="h-[56px] md:h-[70px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#2a2a2a] dark:text-white mb-3 transition-colors">
            Find & Book Salons
          </h1>
          <p className="text-base text-[#666] dark:text-neutral-400 transition-colors">
            Discover top-rated salons and stylists near you
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveView('salon')}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeView === 'salon'
                ? 'bg-[#5a4a3a] dark:bg-[#6d5a42] text-white'
                : 'bg-white dark:bg-neutral-900 text-[#666] dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800'
            }`}
          >
            Salon Based
          </button>
          <button
            onClick={() => setActiveView('stylist')}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeView === 'stylist'
                ? 'bg-[#5a4a3a] dark:bg-[#6d5a42] text-white'
                : 'bg-white dark:bg-neutral-900 text-[#666] dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800'
            }`}
          >
            Stylist Based
          </button>
        </div>

        {/* Filter Bar */}
        <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm dark:shadow-xl p-4 mb-8 transition-colors">
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <button className="flex items-center gap-2 px-4 py-2 bg-neutral-50 dark:bg-neutral-700 rounded-lg text-sm text-[#666] dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search</span>
            </button>

            {/* Location */}
            <button className="flex items-center gap-2 px-4 py-2 bg-neutral-50 dark:bg-neutral-700 rounded-lg text-sm text-[#666] dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Location</span>
            </button>

            {/* Price */}
            <button className="flex items-center gap-2 px-4 py-2 bg-neutral-50 dark:bg-neutral-700 rounded-lg text-sm text-[#666] dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Price</span>
            </button>

            {/* More */}
            <button className="flex items-center gap-2 px-4 py-2 bg-neutral-50 dark:bg-neutral-700 rounded-lg text-sm text-[#666] dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
              <span>More</span>
            </button>

            {/* View Mode Toggle Buttons */}
            <div className="flex gap-2 ml-auto">
              {/* List View Button */}
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                  viewMode === 'list'
                    ? 'bg-[#5a4a3a] dark:bg-[#6d5a42] text-white'
                    : 'bg-neutral-50 dark:bg-neutral-700 text-[#666] dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-600'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                <span>List</span>
              </button>

              {/* Map View Button */}
              <button
                onClick={() => setViewMode('map')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                  viewMode === 'map'
                    ? 'bg-[#5a4a3a] dark:bg-[#6d5a42] text-white'
                    : 'bg-neutral-50 dark:bg-neutral-700 text-[#666] dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-600'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span>Map</span>
              </button>
            </div>
          </div>
        </div>

        {/* Register Salon Prompt */}
        <div className="text-center mb-8">
          <Link
            href="/register-salon"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#5a4a3a] dark:bg-[#6d5a42] hover:bg-[#4a3a2a] dark:hover:bg-[#5a4a32] text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <span>Register Your Salon Here</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Map View */}
        {viewMode === 'map' && (
          <div className="mb-8">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              {/* Map Container */}
              <div className="relative w-full h-[600px] bg-gradient-to-br from-blue-50 to-blue-100">
                {/* Map Background Image */}
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=800&fit=crop"
                  alt="Map Background"
                  fill
                  className="object-cover opacity-30"
                  priority
                />

                {/* Map Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="text-center bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl max-w-2xl">
                    <svg className="w-20 h-20 text-[#5a4a3a] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <h3 className="text-2xl font-bold text-[#2a2a2a] mb-3">Map View</h3>
                    <p className="text-base text-[#666] mb-6">Explore salon locations on an interactive map</p>

                    {/* Salon Location Markers */}
                    <div className="space-y-3 mb-6">
                      <h4 className="text-sm font-semibold text-[#2a2a2a] mb-3">Nearby Salons:</h4>
                      <div className="flex flex-wrap gap-3 justify-center">
                        {salons.map((salon) => (
                          <div key={salon.id} className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md border-2 border-[#5a4a3a]/10 hover:border-[#5a4a3a]/30 transition-colors cursor-pointer">
                            <svg className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
                              <path d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                            <div className="text-left">
                              <p className="text-sm font-semibold text-[#2a2a2a]">{salon.name}</p>
                              <p className="text-xs text-[#666]">{salon.distance}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-[#999] italic">
                      Interactive map integration coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Salon Cards Grid */}
        {viewMode === 'list' && activeView === 'salon' && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {salons.map((salon) => (
            <div key={salon.id} className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md dark:shadow-xl overflow-hidden transition-colors">
              {/* Salon Image */}
              <div className="relative w-full h-48 bg-neutral-200 dark:bg-neutral-700">
                <Image
                  src={salon.image}
                  alt={salon.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Salon Details */}
              <div className="p-5">
                {/* Name */}
                <h3 className="text-lg font-semibold text-[#2a2a2a] dark:text-white mb-3">
                  {salon.name}
                </h3>

                {/* Rating and Distance */}
                <div className="flex items-center gap-4 mb-3">
                  {/* Rating */}
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-[#2a2a2a] dark:text-white">{salon.rating}</span>
                    <span className="text-xs text-[#999] dark:text-neutral-500">({salon.reviews})</span>
                  </div>

                  {/* Distance */}
                  <div className="flex items-center gap-1.5 text-[#666] dark:text-neutral-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs">{salon.distance}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {salon.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-[#666] dark:text-neutral-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Book Now Button */}
                <button className="w-full py-3 bg-[#5a4a3a] dark:bg-[#6d5a42] hover:bg-[#4a3a2a] dark:hover:bg-[#5a4a32] text-white text-sm font-medium rounded-lg transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
          </div>
        )}

        {/* Stylist Cards List */}
        {viewMode === 'list' && activeView === 'stylist' && (
          <div className="grid gap-6 sm:grid-cols-2 max-w-6xl mx-auto">
            {stylists.map((stylist) => (
              <div key={stylist.id} className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md dark:shadow-xl overflow-hidden transition-colors">
                <div className="p-5 flex gap-4">
                  {/* Stylist Profile Image */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-neutral-200 dark:bg-neutral-700">
                    <Image
                      src={stylist.image}
                      alt={stylist.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>

                  {/* Stylist Details */}
                  <div className="flex-1">
                    {/* Name */}
                    <h3 className="text-base font-semibold text-[#2a2a2a] dark:text-white mb-1">
                      {stylist.name}
                    </h3>

                    {/* Salon */}
                    <p className="text-xs text-[#666] dark:text-neutral-400 mb-2">{stylist.salon}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-medium text-[#2a2a2a] dark:text-white">{stylist.rating}</span>
                      <span className="text-xs text-[#999] dark:text-neutral-500">({stylist.reviews})</span>
                    </div>

                    {/* Experience */}
                    <p className="text-xs text-[#666] dark:text-neutral-400 mb-3">{stylist.experience}</p>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {stylist.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#e8f4f4] dark:bg-teal-900/30 text-[#14b8a6] dark:text-teal-400 text-xs rounded-full font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    {/* View Availability Button */}
                    <button className="w-full py-2.5 bg-[#5a4a3a] dark:bg-[#6d5a42] hover:bg-[#4a3a2a] dark:hover:bg-[#5a4a32] text-white text-sm font-medium rounded-lg transition-colors">
                      View Availability
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}

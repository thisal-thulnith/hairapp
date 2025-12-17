'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProductsPage() {
  const [uploadMethod, setUploadMethod] = useState<'camera' | 'gallery' | null>(null);

  const handleTakePhoto = () => {
    setUploadMethod('camera');
    // Camera functionality would be implemented here
    console.log('Opening camera...');
  };

  const handleUploadFromGallery = () => {
    setUploadMethod('gallery');
    // Gallery upload functionality would be implemented here
    console.log('Opening gallery...');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Header Spacing */}
      <div className="h-[70px] md:h-[70px]"></div>

      {/* Main Content */}
      <div className="max-w-[480px] mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-[28px] font-semibold text-[#2a2a2a] dark:text-white mb-2">
            AI Hair Scan & Products
          </h1>
          <p className="text-[14px] text-[#666] dark:text-neutral-400">
            Get personalized product recommendations powered by AI
          </p>
        </div>

        {/* First AI Hair Analysis Card */}
        <div className="mb-6">
          <h2 className="text-[16px] font-medium text-[#2a2a2a] dark:text-white mb-4">
            AI Hair Analysis
          </h2>

          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 overflow-hidden transition-colors">
            {/* Upload Area */}
            <div className="p-8 flex flex-col items-center justify-center min-h-[280px] bg-[#fafafa] dark:bg-neutral-800/50">
              {/* Camera Icon */}
              <div className="mb-6">
                <svg
                  className="w-16 h-16 text-[#999] dark:text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                  />
                </svg>
              </div>

              {/* Text */}
              <div className="text-center mb-8">
                <p className="text-[15px] font-medium text-[#2a2a2a] dark:text-white mb-1">
                  Upload or capture your photo
                </p>
                <p className="text-[13px] text-[#999] dark:text-neutral-500">
                  AI will analyze your hair condition
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-6 space-y-3">
              <button
                onClick={handleTakePhoto}
                className="w-full py-3.5 bg-[#8b7355] hover:bg-[#7a6349] text-white text-[14px] font-medium rounded-lg transition-colors"
              >
                Take Photo
              </button>
              <button
                onClick={handleUploadFromGallery}
                className="w-full py-3.5 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-[#2a2a2a] dark:text-white text-[14px] font-medium rounded-lg border border-neutral-200 dark:border-neutral-700 transition-colors"
              >
                Upload from Gallery
              </button>
            </div>
          </div>
        </div>

        {/* Second AI Hair Analysis Card */}
        <div className="mb-6">
          <h2 className="text-[16px] font-medium text-[#2a2a2a] dark:text-white mb-4">
            AI Hair Analysis
          </h2>

          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 overflow-hidden transition-colors">
            {/* Upload Area */}
            <div className="p-8 flex flex-col items-center justify-center min-h-[280px] bg-[#fafafa] dark:bg-neutral-800/50">
              {/* Camera Icon */}
              <div className="mb-6">
                <svg
                  className="w-16 h-16 text-[#999] dark:text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                  />
                </svg>
              </div>

              {/* Text */}
              <div className="text-center mb-8">
                <p className="text-[15px] font-medium text-[#2a2a2a] dark:text-white mb-1">
                  Upload or capture your photo
                </p>
                <p className="text-[13px] text-[#999] dark:text-neutral-500">
                  AI will analyze your hair condition
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-6 space-y-3">
              <button
                onClick={handleTakePhoto}
                className="w-full py-3.5 bg-[#8b7355] hover:bg-[#7a6349] text-white text-[14px] font-medium rounded-lg transition-colors"
              >
                Take Photo
              </button>
              <button
                onClick={handleUploadFromGallery}
                className="w-full py-3.5 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-[#2a2a2a] dark:text-white text-[14px] font-medium rounded-lg border border-neutral-200 dark:border-neutral-700 transition-colors"
              >
                Upload from Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

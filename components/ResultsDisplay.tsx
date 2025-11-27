'use client';

import Image from 'next/image';
import { GenerationResult } from '@/lib/types';

interface ResultsDisplayProps {
  result: GenerationResult | null;
  isGenerating: boolean;
}

export default function ResultsDisplay({ result, isGenerating }: ResultsDisplayProps) {
  if (!result && !isGenerating) {
    return null;
  }

  return (
    <div className="w-full mt-8 animate-fade-in">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          {isGenerating ? 'Generating Your New Look...' : 'Your Transformation'}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          {isGenerating ? 'AI is working its magic' : 'Compare before and after results'}
        </p>
      </div>

      {isGenerating ? (
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-12 border border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 border-4 border-primary-200 dark:border-primary-900 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-primary-600 dark:border-primary-400 rounded-full border-t-transparent animate-spin"></div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Transforming Your Hair Style
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                This may take a few moments...
              </p>
            </div>
          </div>
        </div>
      ) : result ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Original Image */}
            <div className="group relative">
              <div className="absolute -top-3 left-4 z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900 text-white shadow-lg">
                  Original
                </span>
              </div>
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden border-2 border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <Image
                  src={result.originalImage}
                  alt="Original"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Generated Image */}
            <div className="group relative">
              <div className="absolute -top-3 left-4 z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-600 text-white shadow-lg">
                  Transformed
                </span>
              </div>
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden border-2 border-primary-500 dark:border-primary-600 bg-white dark:bg-neutral-900 shadow-xl shadow-primary-500/20">
                <Image
                  src={result.generatedImage}
                  alt="Generated"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Prompt Info */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              Generated with prompt:
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
              "{result.prompt}"
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = result.generatedImage;
                link.download = `hair-style-${result.id}.png`;
                link.click();
              }}
              className="flex-1 sm:flex-initial px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40"
            >
              Download Result
            </button>
            <button
              onClick={() => window.location.reload()}
              className="flex-1 sm:flex-initial px-6 py-3 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 font-semibold rounded-xl transition-colors border border-neutral-200 dark:border-neutral-700"
            >
              Try Another Style
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

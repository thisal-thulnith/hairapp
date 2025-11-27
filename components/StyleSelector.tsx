'use client';

import { useState } from 'react';
import { HairStyle } from '@/lib/types';
import { hairStyles, categories } from '@/lib/hairStyles';

interface StyleSelectorProps {
  onStyleSelect: (style: HairStyle) => void;
  selectedStyle: HairStyle | null;
}

export default function StyleSelector({ onStyleSelect, selectedStyle }: StyleSelectorProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredStyles = activeCategory === 'all'
    ? hairStyles
    : hairStyles.filter(style => style.category === activeCategory);

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Choose Hair Style
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Style Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto pr-2">
        {filteredStyles.map((style) => (
          <button
            key={style.id}
            onClick={() => onStyleSelect(style)}
            className={`group relative p-6 rounded-xl text-left transition-all duration-300 ${
              selectedStyle?.id === style.id
                ? 'bg-primary-600 text-white shadow-xl shadow-primary-500/30 scale-[1.02]'
                : 'bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-750 border border-neutral-200 dark:border-neutral-700 hover:shadow-lg hover:scale-[1.01]'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className={`font-semibold text-lg ${
                selectedStyle?.id === style.id
                  ? 'text-white'
                  : 'text-neutral-900 dark:text-neutral-100'
              }`}>
                {style.name}
              </h3>
              {selectedStyle?.id === style.id && (
                <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
            <p className={`text-sm mb-3 ${
              selectedStyle?.id === style.id
                ? 'text-primary-100'
                : 'text-neutral-600 dark:text-neutral-400'
            }`}>
              {style.description}
            </p>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
              selectedStyle?.id === style.id
                ? 'bg-white/20 text-white'
                : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300'
            }`}>
              {style.category}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

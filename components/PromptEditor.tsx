'use client';

import { useState, useEffect } from 'react';
import { HairStyle } from '@/lib/types';

interface PromptEditorProps {
  selectedStyle: HairStyle | null;
  customPrompt: string;
  onPromptChange: (prompt: string) => void;
}

export default function PromptEditor({ selectedStyle, customPrompt, onPromptChange }: PromptEditorProps) {
  const [localPrompt, setLocalPrompt] = useState(customPrompt);

  useEffect(() => {
    if (selectedStyle) {
      setLocalPrompt(selectedStyle.prompt);
      onPromptChange(selectedStyle.prompt);
    }
  }, [selectedStyle]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setLocalPrompt(value);
    onPromptChange(value);
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <label className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          Style Prompt
        </label>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          Customize the AI prompt to refine your hair style transformation
        </p>
      </div>

      <div className="relative">
        <textarea
          value={localPrompt}
          onChange={handleChange}
          placeholder="Describe the hair style you want to achieve..."
          rows={4}
          className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-all"
        />
        <div className="absolute bottom-3 right-3 text-xs text-neutral-400 dark:text-neutral-500">
          {localPrompt.length} characters
        </div>
      </div>

      {selectedStyle && (
        <div className="mt-4 p-4 bg-primary-50 dark:bg-primary-950/20 border border-primary-200 dark:border-primary-800 rounded-xl">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-400">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 dark:text-primary-100 mb-1">
                Selected: {selectedStyle.name}
              </h4>
              <p className="text-xs text-primary-700 dark:text-primary-300">
                {selectedStyle.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 space-y-2">
        <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
          Quick Modifiers
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            'add highlights',
            'add layers',
            'add volume',
            'make it darker',
            'make it lighter',
            'add texture',
            'make it sleeker',
            'add fringe'
          ].map((modifier) => (
            <button
              key={modifier}
              onClick={() => {
                const newPrompt = localPrompt + ', ' + modifier;
                setLocalPrompt(newPrompt);
                onPromptChange(newPrompt);
              }}
              className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all"
            >
              + {modifier}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Footer from '@/components/Footer';

export default function PricingPage() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  const handleSubscribe = (plan: string) => {
    if (!isLoggedIn) {
      router.push('/login');
    } else {
      // Handle subscription logic here
      alert(`Subscribing to ${plan} plan! Payment integration coming soon.`);
    }
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fdfcfb] to-[#f7f5f3] dark:from-black dark:to-neutral-950 transition-colors">
      {/* Spacing for fixed navbar */}
      <div className="h-[56px] md:h-[70px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#2a2a2a] dark:text-white mb-3 transition-colors">
            Choose Your Plan
          </h1>
          <p className="text-base text-[#666] dark:text-neutral-400 max-w-2xl mx-auto transition-colors">
            Unlock the full power of LILY with premium features
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {/* Free Plan */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md p-8 flex flex-col transition-colors">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12 text-[#666] dark:text-neutral-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>

            {/* Plan Name */}
            <h2 className="text-xl font-semibold text-[#2a2a2a] dark:text-white text-center mb-2 transition-colors">
              Free
            </h2>

            {/* Price */}
            <div className="text-center mb-2">
              <span className="text-5xl font-bold text-[#2a2a2a] dark:text-white transition-colors">$0</span>
            </div>
            <p className="text-sm text-[#999] dark:text-neutral-500 text-center mb-8 transition-colors">forever</p>

            {/* Features List */}
            <div className="space-y-4 flex-grow mb-8">
              {/* Included Features */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#4ade80] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[#2a2a2a] dark:text-white transition-colors">5 hairstyle tries per month</span>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#4ade80] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[#2a2a2a] dark:text-white transition-colors">3 color options</span>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#4ade80] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[#2a2a2a] dark:text-white transition-colors">Basic filters</span>
              </div>

              {/* Not Included Features */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#d1d5db] dark:text-neutral-600 flex-shrink-0 mt-0.5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                </svg>
                <span className="text-sm text-[#999] dark:text-neutral-500 transition-colors">Salon booking</span>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#d1d5db] dark:text-neutral-600 flex-shrink-0 mt-0.5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                </svg>
                <span className="text-sm text-[#999] dark:text-neutral-500 transition-colors">AI hair scan</span>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#d1d5db] dark:text-neutral-600 flex-shrink-0 mt-0.5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                </svg>
                <span className="text-sm text-[#999] dark:text-neutral-500 transition-colors">Premium hairstyles</span>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#d1d5db] dark:text-neutral-600 flex-shrink-0 mt-0.5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                </svg>
                <span className="text-sm text-[#999] dark:text-neutral-500 transition-colors">Priority support</span>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() => router.push('/try-hairstyles')}
              className="w-full py-3 bg-[#e5e7eb] dark:bg-neutral-700 text-[#2a2a2a] dark:text-white text-sm font-medium rounded-lg hover:bg-[#d1d5db] dark:hover:bg-neutral-600 transition-colors cursor-pointer"
            >
              Current Plan
            </button>
          </div>

          {/* Pro Plan - With Gradient Border */}
          <div className="relative bg-gradient-to-br from-[#5eead4] via-[#6ee7b7] to-[#34d399] rounded-2xl p-[2px] shadow-lg">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 h-full flex flex-col transition-colors">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-[#14b8a6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>

              {/* Plan Name */}
              <h2 className="text-xl font-semibold text-[#2a2a2a] dark:text-white text-center mb-2 transition-colors">
                Pro
              </h2>

              {/* Price */}
              <div className="text-center mb-1">
                <span className="text-5xl font-bold text-[#2a2a2a] dark:text-white transition-colors">$9.99</span>
                <span className="text-base text-[#666] dark:text-neutral-400 transition-colors">/month</span>
              </div>
              <p className="text-sm text-[#999] dark:text-neutral-500 text-center mb-8 transition-colors">per month</p>

              {/* Features List */}
              <div className="space-y-4 flex-grow mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#2a2a2a] dark:text-white font-medium transition-colors">Unlimited hairstyle tries</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#2a2a2a] dark:text-white font-medium transition-colors">All color tools & techniques</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#2a2a2a] dark:text-white font-medium transition-colors">Advanced filters</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#2a2a2a] dark:text-white font-medium transition-colors">Salon booking included</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#2a2a2a] dark:text-white font-medium transition-colors">Priority support</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#2a2a2a] dark:text-white font-medium transition-colors">Download high-res images</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#2a2a2a] dark:text-white font-medium transition-colors">AI hair scan</span>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={() => handleSubscribe('Pro')}
                className="w-full py-3 bg-gradient-to-r from-[#14b8a6] to-[#10b981] text-white text-sm font-medium rounded-lg hover:from-[#0d9488] hover:to-[#059669] transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                Subscribe Now
              </button>

              {/* Cancel Info */}
              <p className="text-xs text-[#999] dark:text-neutral-500 text-center mt-3 transition-colors">
                Cancel anytime • No commitments
              </p>
            </div>
          </div>

          {/* Elite Plan - With Purple Gradient Border */}
          <div className="relative bg-gradient-to-br from-[#c084fc] via-[#a855f7] to-[#9333ea] rounded-2xl p-[2px] shadow-lg">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 h-full flex flex-col transition-colors">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-[#9333ea] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>

              {/* Plan Name */}
              <h2 className="text-xl font-semibold text-[#2a2a2a] dark:text-white text-center mb-2 transition-colors">
                Elite
              </h2>

              {/* Price */}
              <div className="text-center mb-1">
                <span className="text-5xl font-bold text-[#2a2a2a] dark:text-white transition-colors">$19.99</span>
                <span className="text-base text-[#666] dark:text-neutral-400 transition-colors">/month</span>
              </div>
              <p className="text-sm text-[#999] dark:text-neutral-500 text-center mb-8 transition-colors">per month</p>

              {/* Features List */}
              <div className="space-y-4 flex-grow mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#9333ea] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#2a2a2a] dark:text-white font-medium transition-colors">Everything in Pro</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#9333ea] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#2a2a2a] dark:text-white font-medium transition-colors">AI hair scan & analysis</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#9333ea] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#2a2a2a] dark:text-white font-medium transition-colors">Personalized recommendations</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#9333ea] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#2a2a2a] dark:text-white font-medium transition-colors">50% off salon bookings</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#9333ea] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#2a2a2a] dark:text-white font-medium transition-colors">15% off products</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#9333ea] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#2a2a2a] dark:text-white font-medium transition-colors">Early access to features</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#9333ea] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#2a2a2a] dark:text-white font-medium transition-colors">Dedicated support</span>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={() => handleSubscribe('Elite')}
                className="w-full py-3 bg-gradient-to-r from-[#9333ea] to-[#7e22ce] text-white text-sm font-medium rounded-lg hover:from-[#7e22ce] hover:to-[#6b21a8] transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                Subscribe Now
              </button>

              {/* Cancel Info */}
              <p className="text-xs text-[#999] dark:text-neutral-500 text-center mt-3 transition-colors">
                Cancel anytime • No commitments
              </p>
            </div>
          </div>
        </div>

        {/* All Plans Include Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#2a2a2a] dark:text-white text-center mb-8 transition-colors">
            All Plans Include
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* AI-Powered */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md p-6 text-center transition-colors">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-[#666] dark:text-neutral-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#2a2a2a] dark:text-white mb-2 transition-colors">
                AI-Powered
              </h3>
              <p className="text-sm text-[#666] dark:text-neutral-400 transition-colors">
                Advanced AI for perfect results
              </p>
            </div>

            {/* Instant Preview */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md p-6 text-center transition-colors">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-[#666] dark:text-neutral-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#2a2a2a] dark:text-white mb-2 transition-colors">
                Instant Preview
              </h3>
              <p className="text-sm text-[#666] dark:text-neutral-400 transition-colors">
                See changes in real-time
              </p>
            </div>

            {/* Secure & Private */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md p-6 text-center transition-colors">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-[#666] dark:text-neutral-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#2a2a2a] dark:text-white mb-2 transition-colors">
                Secure & Private
              </h3>
              <p className="text-sm text-[#666] dark:text-neutral-400 transition-colors">
                Your data is always protected
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

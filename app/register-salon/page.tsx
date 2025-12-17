'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface SalonData {
  // Step 1: Basic Information
  ownerName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  country: string;

  // Step 2: Services & Prices
  services: string[];
  priceRange: 'budget' | 'moderate' | 'premium' | '';
  specialties: string[];

  // Step 3: Additional Details
  description: string;
  photos: File[];
  officialWebsite: string;
  facebookLink: string;

  // Step 4: Verification
  verificationDocument: File | null;
}

export default function RegisterSalonPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<SalonData>({
    ownerName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    country: '',
    services: [],
    priceRange: '',
    specialties: [],
    description: '',
    photos: [],
    officialWebsite: '',
    facebookLink: '',
    verificationDocument: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSpecialtyToggle = (specialty: string) => {
    setFormData(prev => ({
      ...prev,
      specialties: prev.specialties.includes(specialty)
        ? prev.specialties.filter(s => s !== specialty)
        : [...prev.specialties, specialty]
    }));
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#fdfcfb] to-[#f7f5f3] dark:from-black dark:to-neutral-950 transition-colors">
        <Navbar />

        <div className="max-w-2xl mx-auto px-4 py-12 sm:py-20">
          <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-xl p-8 sm:p-12 text-center transition-colors">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-[#2a2a2a] dark:text-white mb-4">
              Registration Submitted!
            </h1>
            <p className="text-base text-[#666] dark:text-neutral-400 mb-8">
              Thank you for registering your salon. We will review your details and contact you shortly.
            </p>

            <button
              onClick={() => window.location.href = '/find-salons'}
              className="px-8 py-3 bg-[#5a4a3a] dark:bg-[#6d5a42] hover:bg-[#4a3a2a] dark:hover:bg-[#5a4a32] text-white font-medium rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fdfcfb] to-[#f7f5f3] dark:from-neutral-950 dark:to-neutral-900 transition-colors">
      <Navbar />

      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
        <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-xl p-6 sm:p-10 transition-colors">
          {/* Header */}
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2a2a2a] dark:text-white text-center mb-8">
            Salon Registration
          </h1>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-10">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${
                      step <= currentStep
                        ? 'bg-[#5a4a3a] dark:bg-[#6d5a42] text-white'
                        : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400'
                    }`}
                  >
                    {step}
                  </div>
                </div>
                {step < 4 && (
                  <div
                    className={`flex-1 h-1 mx-2 transition-colors ${
                      step < currentStep
                        ? 'bg-[#5a4a3a] dark:bg-[#6d5a42]'
                        : 'bg-neutral-200 dark:bg-neutral-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="mb-8">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-xl font-semibold text-[#2a2a2a] dark:text-white mb-6">
                  1. Basic Information
                </h2>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#2a2a2a] dark:text-white mb-2">
                      Owner Name*
                    </label>
                    <input
                      type="text"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-[#5a4a3a] dark:focus:ring-[#6d5a42] focus:border-transparent bg-white dark:bg-neutral-700 text-[#2a2a2a] dark:text-white transition-colors"
                      placeholder="Enter owner name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#2a2a2a] dark:text-white mb-2">
                        Email*
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-[#5a4a3a] dark:focus:ring-[#6d5a42] focus:border-transparent bg-white dark:bg-neutral-700 text-[#2a2a2a] dark:text-white transition-colors"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2a2a2a] dark:text-white mb-2">
                        Phone*
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-[#5a4a3a] dark:focus:ring-[#6d5a42] focus:border-transparent bg-white dark:bg-neutral-700 text-[#2a2a2a] dark:text-white transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2a2a2a] dark:text-white mb-2">
                      Street Address*
                    </label>
                    <input
                      type="text"
                      value={formData.streetAddress}
                      onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-[#5a4a3a] dark:focus:ring-[#6d5a42] focus:border-transparent bg-white dark:bg-neutral-700 text-[#2a2a2a] dark:text-white transition-colors"
                      placeholder="123 Main St"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#2a2a2a] dark:text-white mb-2">
                        City*
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-[#5a4a3a] dark:focus:ring-[#6d5a42] focus:border-transparent bg-white dark:bg-neutral-700 text-[#2a2a2a] dark:text-white transition-colors"
                        placeholder="New York"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2a2a2a] dark:text-white mb-2">
                        Country*
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-[#5a4a3a] dark:focus:ring-[#6d5a42] focus:border-transparent bg-white dark:bg-neutral-700 text-[#2a2a2a] dark:text-white transition-colors"
                        placeholder="United States"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Services & Prices */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-xl font-semibold text-[#2a2a2a] dark:text-white mb-6">
                  2. Services & Prices
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#2a2a2a] dark:text-white mb-3">
                      What services does your salon offer?
                    </label>
                    <p className="text-xs text-[#666] dark:text-neutral-400 mb-3">Select all that apply</p>
                    <div className="flex flex-wrap gap-3">
                      {['Haircut', 'Color', 'Balayage', 'Highlights', 'Blowout', 'Beard Trim', 'Styling', 'Kids Cut', 'Perms', 'Korean Treatment', 'Hair Extensions'].map((service) => (
                        <button
                          key={service}
                          onClick={() => handleServiceToggle(service)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            formData.services.includes(service)
                              ? 'bg-[#5a4a3a] dark:bg-[#6d5a42] text-white'
                              : 'bg-neutral-100 dark:bg-neutral-700 text-[#666] dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2a2a2a] dark:text-white mb-3">
                      What is the typical price range for your primary services? (Select one)
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { value: 'budget', label: 'Budget' },
                        { value: 'moderate', label: 'Moderate' },
                        { value: 'premium', label: 'Premium' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setFormData({ ...formData, priceRange: option.value as any })}
                          className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                            formData.priceRange === option.value
                              ? 'bg-[#5a4a3a] dark:bg-[#6d5a42] text-white'
                              : 'bg-neutral-100 dark:bg-neutral-700 text-[#666] dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Additional Details */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-xl font-semibold text-[#2a2a2a] dark:text-white mb-6">
                  3. Additional Details
                </h2>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#2a2a2a] dark:text-white mb-2">
                      Salon Description (Max 800 characters)
                    </label>
                    <p className="text-xs text-[#666] dark:text-neutral-400 mb-2">
                      A catchy salon slogan/tagline to showcase your salon, mission, specialized or personalized service
                    </p>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      maxLength={800}
                      rows={4}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-[#5a4a3a] dark:focus:ring-[#6d5a42] focus:border-transparent bg-white dark:bg-neutral-700 text-[#2a2a2a] dark:text-white transition-colors resize-none"
                      placeholder="Tell us about your salon..."
                    />
                    <p className="text-xs text-[#999] dark:text-neutral-500 mt-1 text-right">
                      {formData.description.length}/800
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2a2a2a] dark:text-white mb-2">
                      Upload Salon Photos
                    </label>
                    <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-600 rounded-lg p-8 text-center hover:border-[#5a4a3a] dark:hover:border-[#6d5a42] transition-colors cursor-pointer">
                      <input type="file" multiple accept="image/*" className="hidden" id="salon-photos" />
                      <label htmlFor="salon-photos" className="cursor-pointer">
                        <svg className="w-12 h-12 mx-auto mb-3 text-neutral-400 dark:text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm text-[#666] dark:text-neutral-400 mb-1">Main Photo*</p>
                        <p className="text-xs text-[#999] dark:text-neutral-500">Click to upload or drag and drop</p>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2a2a2a] dark:text-white mb-3">
                      Social Media & Website
                    </label>
                    <div className="space-y-3">
                      <input
                        type="url"
                        value={formData.officialWebsite}
                        onChange={(e) => setFormData({ ...formData, officialWebsite: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-[#5a4a3a] dark:focus:ring-[#6d5a42] focus:border-transparent bg-white dark:bg-neutral-700 text-[#2a2a2a] dark:text-white transition-colors"
                        placeholder="Official Website"
                      />
                      <input
                        type="url"
                        value={formData.facebookLink}
                        onChange={(e) => setFormData({ ...formData, facebookLink: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-[#5a4a3a] dark:focus:ring-[#6d5a42] focus:border-transparent bg-white dark:bg-neutral-700 text-[#2a2a2a] dark:text-white transition-colors"
                        placeholder="Facebook Link"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Verification & Review */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-xl font-semibold text-[#2a2a2a] dark:text-white mb-6">
                  4. Verification & Review
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#2a2a2a] dark:text-white mb-2">
                      Business Verification
                    </label>
                    <p className="text-xs text-[#666] dark:text-neutral-400 mb-3">
                      Please upload one valid document (Business License, Utility Bill) to verify your business address and identity
                    </p>
                    <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-600 rounded-lg p-6 text-center hover:border-[#5a4a3a] dark:hover:border-[#6d5a42] transition-colors cursor-pointer">
                      <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" id="verification-doc" />
                      <label htmlFor="verification-doc" className="cursor-pointer">
                        <svg className="w-10 h-10 mx-auto mb-2 text-neutral-400 dark:text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-sm text-[#5a4a3a] dark:text-[#C5A885] font-medium">Choose File</p>
                        <p className="text-xs text-[#999] dark:text-neutral-500 mt-1">No file chosen</p>
                      </label>
                    </div>
                    <p className="text-xs text-orange-600 dark:text-orange-400 mt-2">Pending Upload</p>
                  </div>

                  <div className="bg-neutral-50 dark:bg-neutral-700/50 rounded-lg p-6 space-y-4">
                    <h3 className="font-semibold text-[#2a2a2a] dark:text-white mb-4">Review Your Information</h3>

                    <div>
                      <p className="text-xs text-[#999] dark:text-neutral-400 mb-1">Basic Information</p>
                      <p className="text-sm text-[#2a2a2a] dark:text-white">Salon: {formData.ownerName || 'N/A'}</p>
                      <p className="text-sm text-[#2a2a2a] dark:text-white">Owner: {formData.ownerName || 'N/A'}</p>
                      <p className="text-sm text-[#2a2a2a] dark:text-white">Contact: {formData.email || 'N/A'} / {formData.phone || 'N/A'}</p>
                      <p className="text-sm text-[#2a2a2a] dark:text-white">Address: {formData.streetAddress || 'N/A'}, {formData.city || 'N/A'}</p>
                    </div>

                    <div>
                      <p className="text-xs text-[#999] dark:text-neutral-400 mb-1">Services & Pricing</p>
                      <p className="text-sm text-[#2a2a2a] dark:text-white">Price Tier: {formData.priceRange ? formData.priceRange.toUpperCase() : 'N/A'}</p>
                      <p className="text-sm text-[#2a2a2a] dark:text-white">Services: {formData.services.length > 0 ? formData.services.join(', ') : 'N/A'}</p>
                    </div>

                    <div>
                      <p className="text-xs text-[#999] dark:text-neutral-400 mb-1">Additional Details</p>
                      <p className="text-sm text-[#2a2a2a] dark:text-white">Description: {formData.description || 'N/A'}</p>
                      <p className="text-sm text-[#2a2a2a] dark:text-white">Social: Instagram: N/A | Website: {formData.officialWebsite || 'N/A'}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="terms" className="mt-1" />
                    <label htmlFor="terms" className="text-xs text-[#666] dark:text-neutral-400">
                      I accept the "Terms and Conditions" and confirm all provided information is accurate.
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="flex-1 px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-[#666] dark:text-neutral-300 font-medium rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
              >
                Back
              </button>
            )}

            {currentStep < totalSteps ? (
              <button
                onClick={handleNext}
                className="flex-1 px-6 py-3 bg-[#5a4a3a] dark:bg-[#6d5a42] hover:bg-[#4a3a2a] dark:hover:bg-[#5a4a32] text-white font-medium rounded-lg transition-colors"
              >
                Next: {currentStep === 1 ? 'Services & Prices' : currentStep === 2 ? 'Additional Details' : 'Verification & Review'}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex-1 px-6 py-3 bg-[#5a4a3a] dark:bg-[#6d5a42] hover:bg-[#4a3a2a] dark:hover:bg-[#5a4a32] text-white font-medium rounded-lg transition-colors"
              >
                Submit Registration
              </button>
            )}
          </div>
        </div>

        {/* Helper text */}
        <p className="text-center text-xs text-[#999] dark:text-neutral-500 mt-6">
          Step {currentStep} of {totalSteps}
        </p>
      </div>

      <Footer />
    </main>
  );
}

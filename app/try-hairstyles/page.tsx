'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TryHairstyles() {
  const [selectedGender, setSelectedGender] = useState<'female' | 'male' | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('Long');
  const [selectedHairstyle, setSelectedHairstyle] = useState<string | null>(null);
  const [coloringTechnique, setColoringTechnique] = useState<string>('Solid Color');
  const [selectedColor, setSelectedColor] = useState<string>('#000000');
  const [colorIntensity, setColorIntensity] = useState<number>(100);

  const categories = ['Long', 'Medium', 'Short', 'Braids', 'Updo'];
  const techniques = ['Solid Color', 'Highlights', 'Balayage', 'Ombre'];
  const presetColors = ['#3B82F6', '#06B6D4', '#10B981', '#EF4444', '#EC4899', '#8B5CF6', '#6366F1'];

  const hairstyles = {
    Long: [
      { id: 1, name: 'Sea Waves', image: '/images/hairstyles/sea-waves.jpg' },
      { id: 2, name: 'Dark Straight', image: '/images/hairstyles/dark-straight.jpg' },
      { id: 3, name: 'Layered Cut', image: '/images/hairstyles/layered-cut.jpg' },
      { id: 4, name: 'Afrocut Curly', image: '/images/hairstyles/afrocut-curly.jpg' },
    ],
    Medium: [
      { id: 5, name: 'Bob Cut', image: '/images/hairstyles/bob-cut.jpg' },
      { id: 6, name: 'Wavy Mid', image: '/images/hairstyles/wavy-mid.jpg' },
    ],
    Short: [
      { id: 7, name: 'Pixie Cut', image: '/images/hairstyles/pixie-cut.jpg' },
      { id: 8, name: 'Short Bob', image: '/images/hairstyles/short-bob.jpg' },
    ],
    Braids: [
      { id: 9, name: 'French Braid', image: '/images/hairstyles/french-braid.jpg' },
      { id: 10, name: 'Box Braids', image: '/images/hairstyles/box-braids.jpg' },
    ],
    Updo: [
      { id: 11, name: 'High Bun', image: '/images/hairstyles/high-bun.jpg' },
      { id: 12, name: 'Top Knot', image: '/images/hairstyles/top-knot.jpg' },
    ],
  };

  const handleNextStep = () => {
    if (currentStep === 1 && selectedGender) {
      setCurrentStep(2);
    } else if (currentStep === 2 && selectedHairstyle) {
      setCurrentStep(3);
    }
  };

  const handleColorWheelClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();

    // Get click position relative to the element
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate center and position relative to center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const dx = x - centerX;
    const dy = y - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const radius = rect.width / 2;

    // Only pick color if within circle
    if (distance > radius) return;

    // Calculate angle from center
    let angle = Math.atan2(dy, dx) * 180 / Math.PI;
    if (angle < 0) angle += 360;

    // Calculate saturation based on distance from center
    const saturation = Math.min(100, (distance / radius) * 100);

    // Convert HSL to HEX
    const hslToHex = (h: number, s: number, l: number) => {
      l /= 100;
      const a = s * Math.min(l, 1 - l) / 100;
      const f = (n: number) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
      };
      return `#${f(0)}${f(8)}${f(4)}`;
    };

    const hexColor = hslToHex(angle, saturation, 50);
    setSelectedColor(hexColor.toUpperCase());
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fdfcfb] to-[#f7f5f3]">
      <Navbar />

      {/* Mobile View */}
      <div className="lg:hidden">
        {/* Top Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 px-4 pt-6 pb-4">
          <button className="px-5 py-2 bg-[#5A5A5A] text-white text-[13px] font-medium rounded-full">
            Try Hairstyles
          </button>
          <button className="px-5 py-2 bg-white text-[#666] text-[13px] font-medium rounded-full border border-gray-200">
            Find Salons
          </button>
          <button className="px-5 py-2 bg-white text-[#666] text-[13px] font-medium rounded-full border border-gray-200">
            Products
          </button>
        </div>

        {/* Main Content */}
        <div className="px-4 pb-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-[28px] font-semibold text-[#2a2a2a] mb-2">
              Virtual Hairstyle Studio
            </h1>
            <p className="text-[13px] text-[#666] leading-relaxed">
              Powerful AI tools to transform your hair<br />journey
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8 max-w-[280px]">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-medium mb-1 ${
                currentStep >= 1 ? 'bg-[#8B7355] text-white' : 'bg-gray-200 text-[#666]'
              }`}>
                1
              </div>
              <span className="text-[11px] text-[#666]">Upload</span>
            </div>
            <div className={`flex-1 h-[2px] mx-2 mt-[-20px] ${currentStep >= 2 ? 'bg-[#8B7355]' : 'bg-gray-200'}`}></div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-medium mb-1 ${
                currentStep >= 2 ? 'bg-[#8B7355] text-white' : 'bg-gray-200 text-[#666]'
              }`}>
                2
              </div>
              <span className="text-[11px] text-[#666]">Style</span>
            </div>
            <div className={`flex-1 h-[2px] mx-2 mt-[-20px] ${currentStep >= 3 ? 'bg-[#8B7355]' : 'bg-gray-200'}`}></div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-medium mb-1 ${
                currentStep >= 3 ? 'bg-[#8B7355] text-white' : 'bg-gray-200 text-[#666]'
              }`}>
                3
              </div>
              <span className="text-[11px] text-[#666]">Result</span>
            </div>
          </div>

          {/* Live Preview Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
            <h2 className="text-[18px] font-semibold text-[#2a2a2a] mb-4">Live Preview</h2>

            {/* Upload Area */}
            <div className="bg-gray-50 rounded-xl p-8 mb-4 flex flex-col items-center justify-center min-h-[240px]">
              {uploadedImage ? (
                <div className="relative w-full h-[240px]">
                  <Image src={uploadedImage} alt="Uploaded" fill className="object-cover rounded-lg" />
                </div>
              ) : (
                <>
                  <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[13px] text-[#666] text-center mb-1">Upload or capture your photo</p>
                  <p className="text-[11px] text-gray-400 text-center">
                    AI will transform your look in real<br />time
                  </p>
                </>
              )}
            </div>

            {/* Upload Buttons */}
            <div className="space-y-3">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-[#8B7355] to-[#6B5644] hover:from-[#7a6349] hover:to-[#5a4838] text-white text-[14px] font-medium rounded-lg transition-colors">
                Take Photo
              </button>
              <button className="w-full px-6 py-3 bg-white hover:bg-gray-50 text-[#2a2a2a] text-[14px] font-medium rounded-lg border border-gray-200 transition-colors">
                Upload from Gallery
              </button>
            </div>
          </div>

          {/* Step 1: Choose Gender */}
          {currentStep === 1 && (
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-[18px] font-semibold text-[#2a2a2a] mb-4">Step 1: Choose Gender</h2>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Female Option */}
                <button
                  onClick={() => setSelectedGender('female')}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    selectedGender === 'female'
                      ? 'border-[#B8957A] bg-[#B8957A]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <svg className="w-10 h-10 text-[#2a2a2a] mb-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[14px] font-medium text-[#2a2a2a]">Female</span>
                  </div>
                </button>

                {/* Male Option */}
                <button
                  onClick={() => setSelectedGender('male')}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    selectedGender === 'male'
                      ? 'border-[#B8957A] bg-[#B8957A]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <svg className="w-10 h-10 text-[#2a2a2a] mb-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[14px] font-medium text-[#2a2a2a]">Male</span>
                  </div>
                </button>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNextStep}
                disabled={!selectedGender}
                className={`w-full px-6 py-3 text-white text-[14px] font-medium rounded-lg transition-all ${
                  selectedGender
                    ? 'bg-gradient-to-r from-[#8B7355] to-[#6B5644] hover:from-[#7a6349] hover:to-[#5a4838]'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                Next: Choose Hairstyle <span className="ml-1">›</span>
              </button>
            </div>
          )}

          {/* Step 2: Select Hairstyle */}
          {currentStep === 2 && (
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-[18px] font-semibold text-[#2a2a2a] mb-4">Step 2: Select Hairstyle</h2>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-[13px] font-medium rounded-full transition-all ${
                      selectedCategory === category
                        ? 'bg-[#8B7355] text-white'
                        : 'bg-gray-100 text-[#666] hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Hairstyle Grid */}
              <div className="grid grid-cols-2 gap-4">
                {hairstyles[selectedCategory as keyof typeof hairstyles]?.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedHairstyle(style.name)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all ${
                      selectedHairstyle === style.name
                        ? 'border-[#B8957A] ring-2 ring-[#B8957A]/30'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 relative">
                      {/* Placeholder for hairstyle image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-3 bg-white">
                      <p className="text-[13px] font-medium text-[#2a2a2a] text-center">{style.name}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Back and Next Buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="flex-1 px-6 py-3 bg-white border-2 border-gray-200 text-[#2a2a2a] text-[14px] font-medium rounded-lg hover:border-gray-300 transition-colors"
                >
                  ‹ Back
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={!selectedHairstyle}
                  className={`flex-1 px-6 py-3 text-white text-[14px] font-medium rounded-lg transition-all ${
                    selectedHairstyle
                      ? 'bg-gradient-to-r from-[#8B7355] to-[#6B5644] hover:from-[#7a6349] hover:to-[#5a4838]'
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                >
                  Next: Pick Color ›
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Pick Color */}
          {currentStep === 3 && (
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-[18px] font-semibold text-[#2a2a2a] mb-4">Step 3: Pick Color</h2>

              {/* Coloring Technique */}
              <div className="mb-6">
                <label className="block text-[11px] text-[#999] mb-3">Coloring Technique</label>
                <div className="flex flex-wrap gap-2">
                  {techniques.map((technique) => (
                    <button
                      key={technique}
                      onClick={() => setColoringTechnique(technique)}
                      className={`px-3 py-1.5 text-[11px] font-medium rounded transition-all ${
                        coloringTechnique === technique
                          ? 'bg-[#8B7355] text-white'
                          : 'bg-[#f5f5f5] text-[#666] hover:bg-gray-200'
                      }`}
                    >
                      {technique}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hair Color Section */}
              <div className="mb-6">
                <label className="block text-[11px] text-[#999] mb-4">Hair Color</label>

                {/* Color Wheel */}
                <div
                  className="relative w-[160px] h-[160px] mx-auto mb-6 cursor-crosshair"
                  onClick={handleColorWheelClick}
                >
                  {/* Color wheel with smooth gradient matching reference */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `
                        radial-gradient(circle at center,
                          rgba(255,255,255,1) 0%,
                          rgba(255,255,255,0.3) 35%,
                          rgba(255,255,255,0) 70%
                        ),
                        conic-gradient(
                          from 90deg,
                          hsl(0, 100%, 50%) 0deg,
                          hsl(30, 100%, 50%) 30deg,
                          hsl(60, 100%, 50%) 60deg,
                          hsl(90, 100%, 50%) 90deg,
                          hsl(120, 100%, 50%) 120deg,
                          hsl(150, 100%, 50%) 150deg,
                          hsl(180, 100%, 50%) 180deg,
                          hsl(210, 100%, 50%) 210deg,
                          hsl(240, 100%, 50%) 240deg,
                          hsl(270, 100%, 50%) 270deg,
                          hsl(300, 100%, 50%) 300deg,
                          hsl(330, 100%, 50%) 330deg,
                          hsl(360, 100%, 50%) 360deg
                        )
                      `,
                      boxShadow: '0 2px 12px rgba(0,0,0,0.1)'
                    }}
                  ></div>

                  {/* Color indicator - small circle */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className="w-4 h-4 rounded-full border-2 border-white"
                      style={{
                        backgroundColor: selectedColor,
                        boxShadow: '0 0 0 1px rgba(0,0,0,0.2)'
                      }}
                    ></div>
                  </div>
                </div>

                {/* Two Sliders */}
                <div className="space-y-3 mb-6">
                  {/* First Slider */}
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={colorIntensity}
                      onChange={(e) => setColorIntensity(Number(e.target.value))}
                      className="w-full h-1.5 rounded-full appearance-none cursor-pointer slider-thumb"
                      style={{
                        background: 'linear-gradient(to right, #667eea 0%, #764ba2 100%)'
                      }}
                    />
                  </div>

                  {/* Second Slider */}
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      defaultValue="50"
                      className="w-full h-1.5 rounded-full appearance-none cursor-pointer slider-thumb"
                      style={{
                        background: 'linear-gradient(to right, #000000 0%, #ffffff 100%)'
                      }}
                    />
                  </div>
                </div>

                {/* Preset Colors */}
                <div className="flex gap-2 justify-center mb-6">
                  {presetColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded transition-all ${
                        selectedColor === color ? 'ring-2 ring-[#667eea] ring-offset-1' : ''
                      }`}
                      style={{ backgroundColor: color }}
                    ></button>
                  ))}
                </div>

                {/* Hex Input and Percentage */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 bg-white border border-gray-200 rounded px-3 py-2">
                    <span className="text-[11px] text-[#999]">Hex</span>
                    <input
                      type="text"
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="w-16 bg-transparent text-[11px] text-[#2a2a2a] outline-none font-mono"
                      placeholder="#000000"
                    />
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-gray-200 rounded px-3 py-2 flex-1">
                    <input
                      type="text"
                      value={selectedColor.replace('#', '')}
                      onChange={(e) => setSelectedColor('#' + e.target.value)}
                      className="flex-1 bg-transparent text-[11px] text-[#2a2a2a] outline-none font-mono text-center"
                      placeholder="000000"
                    />
                  </div>
                  <div className="bg-white border border-gray-200 rounded px-3 py-2">
                    <span className="text-[11px] text-[#2a2a2a] font-medium">{colorIntensity}%</span>
                  </div>
                </div>
              </div>

              {/* Back and Apply Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="flex-1 px-6 py-3 bg-white border-2 border-gray-200 text-[#2a2a2a] text-[14px] font-medium rounded-lg hover:border-gray-300 transition-colors"
                >
                  ‹ Back
                </button>
                <button
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-[#8B7355] to-[#6B5644] hover:from-[#7a6349] hover:to-[#5a4838] text-white text-[14px] font-medium rounded-lg transition-colors"
                >
                  Apply Transformation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block max-w-[1200px] mx-auto px-8 pt-[100px] pb-16">
        {/* Top Navigation Tabs */}
        <div className="flex items-center gap-3 mb-8">
          <button className="px-6 py-2.5 bg-[#B8957A] text-white text-[14px] font-medium rounded-lg">
            Try Hairstyles
          </button>
          <button className="px-6 py-2.5 bg-white text-[#666] text-[14px] font-medium rounded-lg border border-gray-200 hover:border-gray-300">
            Find Salons
          </button>
          <button className="px-6 py-2.5 bg-white text-[#666] text-[14px] font-medium rounded-lg border border-gray-200 hover:border-gray-300">
            Products
          </button>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-[42px] font-semibold text-[#2a2a2a] mb-3">
            Virtual Hairstyle Studio
          </h1>
          <p className="text-[16px] text-[#666] leading-relaxed">
            Powerful AI tools to transform your hair journey
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-start mb-12 max-w-[500px]">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#B8957A] text-white flex items-center justify-center text-[16px] font-medium mb-2">
              1
            </div>
            <span className="text-[13px] text-[#666] font-medium">Upload</span>
          </div>
          <div className="flex-1 h-[2px] bg-gray-200 mx-4 mt-[-30px]"></div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gray-200 text-[#666] flex items-center justify-center text-[16px] font-medium mb-2">
              2
            </div>
            <span className="text-[13px] text-[#666] font-medium">Style</span>
          </div>
          <div className="flex-1 h-[2px] bg-gray-200 mx-4 mt-[-30px]"></div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gray-200 text-[#666] flex items-center justify-center text-[16px] font-medium mb-2">
              3
            </div>
            <span className="text-[13px] text-[#666] font-medium">Result</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left Side - Live Preview */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-[24px] font-semibold text-[#2a2a2a] mb-6">Live Preview</h2>

            {/* Upload Area */}
            <div className="bg-gray-50 rounded-xl p-12 mb-6 flex flex-col items-center justify-center min-h-[400px]">
              {uploadedImage ? (
                <div className="relative w-full h-[400px]">
                  <Image src={uploadedImage} alt="Uploaded" fill className="object-cover rounded-lg" />
                </div>
              ) : (
                <>
                  <svg className="w-16 h-16 text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[16px] text-[#666] text-center mb-2">Upload or capture your photo</p>
                  <p className="text-[14px] text-gray-400 text-center">
                    AI will transform your look in real time
                  </p>
                </>
              )}
            </div>

            {/* Upload Buttons */}
            <div className="space-y-3">
              <button className="w-full px-6 py-4 bg-gradient-to-r from-[#B8957A] to-[#9d7e62] hover:from-[#a3846b] hover:to-[#8c6d51] text-white text-[15px] font-medium rounded-xl transition-colors shadow-md">
                Take Photo
              </button>
              <button className="w-full px-6 py-4 bg-white hover:bg-gray-50 text-[#2a2a2a] text-[15px] font-medium rounded-xl border border-gray-200 transition-colors">
                Upload from Gallery
              </button>
            </div>
          </div>

          {/* Right Side - Step Content */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            {/* Step 1: Gender Selection */}
            {currentStep === 1 && (
              <>
                <h2 className="text-[24px] font-semibold text-[#2a2a2a] mb-6">Step 1: Choose Gender</h2>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  {/* Female Option */}
                  <button
                    onClick={() => setSelectedGender('female')}
                    className={`p-10 rounded-2xl border-2 transition-all ${
                      selectedGender === 'female'
                        ? 'border-[#B8957A] bg-[#B8957A]/5 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <svg className="w-14 h-14 text-[#2a2a2a] mb-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[18px] font-medium text-[#2a2a2a]">Female</span>
                    </div>
                  </button>

                  {/* Male Option */}
                  <button
                    onClick={() => setSelectedGender('male')}
                    className={`p-10 rounded-2xl border-2 transition-all ${
                      selectedGender === 'male'
                        ? 'border-[#B8957A] bg-[#B8957A]/5 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <svg className="w-14 h-14 text-[#2a2a2a] mb-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[18px] font-medium text-[#2a2a2a]">Male</span>
                    </div>
                  </button>
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNextStep}
                  disabled={!selectedGender}
                  className={`w-full px-6 py-4 text-white text-[15px] font-medium rounded-xl transition-all mb-6 ${
                    selectedGender
                      ? 'bg-gradient-to-r from-[#B8957A] to-[#9d7e62] hover:from-[#a3846b] hover:to-[#8c6d51] shadow-md'
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                >
                  Next: Choose Hairstyle <span className="ml-1">›</span>
                </button>
              </>
            )}

            {/* Step 2: Hairstyle Selection */}
            {currentStep === 2 && (
              <>
                <h2 className="text-[24px] font-semibold text-[#2a2a2a] mb-6">Step 2: Select Hairstyle</h2>

                {/* Category Tabs */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-5 py-2.5 text-[14px] font-medium rounded-lg transition-all ${
                        selectedCategory === category
                          ? 'bg-[#B8957A] text-white'
                          : 'bg-gray-100 text-[#666] hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Hairstyle Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6 max-h-[400px] overflow-y-auto">
                  {hairstyles[selectedCategory as keyof typeof hairstyles]?.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedHairstyle(style.name)}
                      className={`relative rounded-xl overflow-hidden border-2 transition-all ${
                        selectedHairstyle === style.name
                          ? 'border-[#B8957A] ring-2 ring-[#B8957A]/30'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 relative">
                        {/* Placeholder for hairstyle image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-3 bg-white">
                        <p className="text-[14px] font-medium text-[#2a2a2a] text-center">{style.name}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Back and Next Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="flex-1 px-6 py-4 bg-white border-2 border-gray-200 text-[#2a2a2a] text-[15px] font-medium rounded-xl hover:border-gray-300 transition-colors"
                  >
                    ‹ Back
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={!selectedHairstyle}
                    className={`flex-1 px-6 py-4 text-white text-[15px] font-medium rounded-xl transition-all ${
                      selectedHairstyle
                        ? 'bg-gradient-to-r from-[#B8957A] to-[#9d7e62] hover:from-[#a3846b] hover:to-[#8c6d51] shadow-md'
                        : 'bg-gray-300 cursor-not-allowed'
                    }`}
                  >
                    Next: Pick Color ›
                  </button>
                </div>
              </>
            )}

            {/* Step 3: Pick Color */}
            {currentStep === 3 && (
              <>
                <h2 className="text-[24px] font-semibold text-[#2a2a2a] mb-6">Step 3: Pick Color</h2>

                {/* Coloring Technique */}
                <div className="mb-6">
                  <label className="block text-[14px] text-[#666] mb-3">Coloring Technique</label>
                  <div className="flex flex-wrap gap-3">
                    {techniques.map((technique) => (
                      <button
                        key={technique}
                        onClick={() => setColoringTechnique(technique)}
                        className={`px-5 py-2.5 text-[13px] font-medium rounded-lg transition-all ${
                          coloringTechnique === technique
                            ? 'bg-[#B8957A] text-white'
                            : 'bg-gray-100 text-[#666] hover:bg-gray-200'
                        }`}
                      >
                        {technique}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hair Color Section */}
                <div className="mb-6">
                  <label className="block text-[14px] text-[#666] mb-4">Hair Color</label>

                  {/* Color Wheel */}
                  <div
                    className="relative w-full aspect-square max-w-[320px] mx-auto mb-6 cursor-crosshair"
                    onClick={handleColorWheelClick}
                  >
                    {/* Color wheel matching reference design */}
                    <div
                      className="absolute inset-0 rounded-full overflow-hidden"
                      style={{
                        background: `
                          conic-gradient(
                            from 0deg,
                            #ff0000 0deg,
                            #ff8000 60deg,
                            #ffff00 120deg,
                            #80ff00 180deg,
                            #00ff00 240deg,
                            #00ff80 300deg,
                            #00ffff 360deg,
                            #0080ff 420deg,
                            #0000ff 480deg,
                            #8000ff 540deg,
                            #ff00ff 600deg,
                            #ff0080 660deg,
                            #ff0000 720deg
                          )
                        `
                      }}
                    >
                      {/* Radial white gradient overlay for saturation control */}
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 15%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0) 70%)'
                        }}
                      ></div>
                    </div>

                    {/* Color indicator */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div
                        className="w-8 h-8 rounded-full border-4 border-white"
                        style={{
                          backgroundColor: selectedColor,
                          boxShadow: '0 0 0 1px rgba(0,0,0,0.2), 0 2px 5px rgba(0,0,0,0.3)'
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Sliders */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-[13px] text-[#666]">Intensity</label>
                        <span className="text-[13px] text-[#2a2a2a] font-medium">{colorIntensity}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={colorIntensity}
                        onChange={(e) => setColorIntensity(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #B8957A 0%, #B8957A ${colorIntensity}%, #e5e7eb ${colorIntensity}%, #e5e7eb 100%)`
                        }}
                      />
                    </div>
                  </div>

                  {/* Preset Colors */}
                  <div className="flex gap-3 justify-center mb-6">
                    {presetColors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-12 h-12 rounded-lg transition-all ${
                          selectedColor === color ? 'ring-2 ring-[#B8957A] ring-offset-2' : ''
                        }`}
                        style={{ backgroundColor: color }}
                      ></button>
                    ))}
                  </div>

                  {/* Hex Input */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                      <span className="text-[13px] text-[#666]">Hex</span>
                      <input
                        type="text"
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                        className="flex-1 bg-transparent text-[14px] text-[#2a2a2a] outline-none font-mono"
                        placeholder="#000000"
                      />
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                      <span className="text-[13px] text-[#666]">{colorIntensity}%</span>
                    </div>
                  </div>
                </div>

                {/* Back and Apply Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="flex-1 px-6 py-4 bg-white border-2 border-gray-200 text-[#2a2a2a] text-[15px] font-medium rounded-xl hover:border-gray-300 transition-colors"
                  >
                    ‹ Back
                  </button>
                  <button
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-[#B8957A] to-[#9d7e62] hover:from-[#a3846b] hover:to-[#8c6d51] text-white text-[15px] font-medium rounded-xl transition-colors shadow-md"
                  >
                    Apply Transformation
                  </button>
                </div>
              </>
            )}

            {/* Additional Info */}
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-[16px] font-semibold text-[#2a2a2a] mb-2">Next Steps</h3>
              <ul className="space-y-2 text-[14px] text-[#666]">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#B8957A] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Choose from 200K+ hairstyle options</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#B8957A] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>See instant AI-powered previews</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#B8957A] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Download or share your results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

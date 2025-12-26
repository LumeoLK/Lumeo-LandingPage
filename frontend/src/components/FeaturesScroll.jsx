import React, { useState } from 'react';

const contentData = [
  {
    id: 1,
    title: 'True-to-Life AR Visualization',
    description: 'Eliminate the guesswork. Use our advanced Augmented Reality to visualize exactly how furniture fits and looks in your physical space specifically to scale before you buy.',
    image: 'https://images.unsplash.com/photo-1633511090164-b43840ea1607?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'From Blueprints to 3D Reality',
    description: 'Transform flat 2D floor plans into immersive 3D models instantly. Visualize complex layouts and spatial arrangements effortlessly without needing professional design software.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'AI-Powered Style Curation',
    description: 'Let our intelligent algorithms do the hunting. We analyze your preferences and room aesthetics to recommend furniture that matches your unique style profile perfectly.',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Bespoke Seller Collaboration',
    description: 'Need something unique? Connect directly with specific sellers to request custom dimensions, fabrics, or finishes, bridging the gap between mass retail and custom craftsmanship.',
    image: 'https://images.unsplash.com/photo-1581539250439-c92302a6f46d?q=80&w=2070&auto=format&fit=crop'
  }
];

const FeatureSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* 1. BACKGROUND GRADIENT LAYER */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#e5e5e5] to-[#b9b9b9]" />

      {/* 2. CONTENT CONTAINER (relative z-10 to sit above background) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side: Accordion List */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {contentData.map((item, index) => (
              <div 
                key={item.id}
                className={`group cursor-pointer border-l-4 pl-6 transition-all duration-300 ${
                  activeIndex === index ? 'border-[#ffb443d0]' : 'border-gray-400 hover:border-gray-600'
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                  activeIndex === index ? 'text-[#fbb0407c]' : 'text-[#4a4a4a]'
                }`}>
                  {item.title}
                </h3>
                
                {/* Content: Visible only if active */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Image Display */}
          <div className="w-full lg:w-1/2 h-[500px] relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/30">
            {contentData.map((item, index) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  activeIndex === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                }`}
              />
            ))}
            
            {/* Optional: Overlay to make images blend slightly better with the grey theme */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
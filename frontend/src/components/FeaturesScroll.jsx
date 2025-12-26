import React, { useState } from 'react';

const contentData = [
  {
    id: 1,
    title: 'Intuitive Analytics',
    description: 'Get real-time insights into your performance with our detailed analytics dashboard. Track growth, engagement, and reach effortlessly.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Global Connectivity',
    description: 'Connect with teams across the globe instantly. Our platform ensures low latency and high reliability for all your communication needs.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Secure Infrastructure',
    description: 'Your data is protected by enterprise-grade encryption. We prioritize security to ensure your information never falls into the wrong hands.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 4,
    title: '24/7 Support',
    description: 'Our dedicated support team is available around the clock to assist you with any issues or questions you might have.',
    image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2073&auto=format&fit=crop'
  }
];

const FeatureSection = () => {
  // Default to the first item (0) being open
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Left Side: Accordion List */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {contentData.map((item, index) => (
            <div 
              key={item.id}
              className="group cursor-pointer border-l-4 border-transparent hover:border-blue-600 pl-6 transition-all duration-300"
              onMouseEnter={() => setActiveIndex(index)}
            >
              <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${activeIndex === index ? 'text-blue-600' : 'text-gray-800'}`}>
                {item.title}
              </h3>
              
              {/* Content: Visible only if active */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Image Display */}
        <div className="w-full lg:w-1/2 h-[500px] relative rounded-xl overflow-hidden shadow-2xl">
          {contentData.map((item, index) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                activeIndex === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default FeatureSection;
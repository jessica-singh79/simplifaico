import React, { useState, useEffect } from 'react';

interface Feature {
  step: string;
  title: string;
  content: string;
  image: string;
}

interface FeatureStepsProps {
  features: Feature[];
  title: string;
  autoPlayInterval: number;
  imageHeight: string;
}

export function FeatureSteps({ features, title, autoPlayInterval, imageHeight }: FeatureStepsProps) {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, features.length]);

  const handleFeatureSelect = (index: number) => {
    setCurrentFeatureIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentFeature = features[currentFeatureIndex];

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
      </div>

      {/* Feature Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="order-2 lg:order-1">
          <div className={`${imageHeight} rounded-3xl overflow-hidden shadow-2xl`}>
            <img
              src={currentFeature.image}
              alt={currentFeature.title}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2 space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-sm font-semibold text-purple-300">{currentFeature.step}</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight">
              {currentFeature.title}
            </h3>
            
            <p className="text-base sm:text-lg md:text-xl font-body text-gray-300 leading-relaxed">
              {currentFeature.content}
            </p>
          </div>

          {/* Navigation Dots */}
          <div className="flex space-x-3">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => handleFeatureSelect(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentFeatureIndex
                    ? 'bg-purple-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/20 rounded-full h-1">
            <div 
              className="bg-gradient-to-r from-purple-400 to-blue-400 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentFeatureIndex + 1) / features.length) * 100}%` }}
            />
          </div>

          {/* Auto-play indicator */}
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`} />
            <span className="font-body">{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
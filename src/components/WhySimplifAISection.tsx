import React from 'react';
import { FeatureSteps } from './blocks/feature-section';

const features = [
  { 
    step: 'Why SimplifAI #1', 
    title: 'AI That Gets Better With Time',
    content: 'Most agencies build and leave. We stay. Our ongoing support means your AI continuously learns, adapts, and improves. Monthly optimizations, performance reviews, and updates keep your automation running at peak efficiency—no stagnation, just growth.', 
    image: 'https://pqovoczqptaqfxwwlalt.supabase.co/storage/v1/object/public/SimplifAI%20Image/Gemini_Generated_Image_h5mwx1h5mwx1h5mw%20(1).png' 
  },
  { 
    step: 'Why SimplifAI #2',
    title: 'Built Around Your Business',
    content: 'No templates. No compromises. We design custom AI solutions that fit your exact workflows and goals. From intelligent chatbots to process automation, you get technology that works the way you work—not the other way around.',
    image: 'https://pqovoczqptaqfxwwlalt.supabase.co/storage/v1/object/public/SimplifAI%20Image/Gemini_Generated_Image_5rooon5rooon5roo.png'
  },
  { 
    step: 'Why SimplifAI #3',
    title: 'Results That Actually Matter',
    content: 'Our clients save 15-30 hours weekly and cut operational costs by 40% on average. Every project includes clear KPIs and regular reporting so you know exactly what ROI you\'re getting. Real impact, real numbers, real fast.',
    image: 'https://pqovoczqptaqfxwwlalt.supabase.co/storage/v1/object/public/SimplifAI%20Image/Gemini_Generated_Image_97pezk97pezk97pe.png'
  },
];

export function WhySimplifAISection() {
  return (
    <section id="why-simplifai" className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <FeatureSteps 
        features={features}
        title="Why SimplifAI?"
        autoPlayInterval={5000}
        imageHeight="h-[250px] sm:h-[300px] md:h-[400px]"
      />
    </section>
  );
}
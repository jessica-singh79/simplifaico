import React from 'react';
import { ArrowRight, Clock, DollarSign, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            The Story Behind SimplifAI
          </h2>
        </div>

        {/* Mission Statement */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed text-center">
            SimplifAI started with a mission: to help businesses overcome tedious processes and missed opportunities by building tools that make everyday work easier and more efficient.
          </p>
        </div>

        {/* Stats/Results Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-text-primary mb-2">2–3 Weeks</div>
            <p className="text-text-secondary">From first idea to working automation</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-text-primary mb-2">40% Less</div>
            <p className="text-text-secondary">Average operational costs saved</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="text-3xl font-bold text-text-primary mb-2">25+ Hours</div>
            <p className="text-text-secondary">Time freed up each week</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-accent transition-all duration-300 inline-flex items-center space-x-2 shadow-xl"
          >
            <span>See What We Do</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;

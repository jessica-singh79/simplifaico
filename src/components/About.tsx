import React from 'react';
import { Target, ArrowRight, Clock, DollarSign, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-50 px-4 py-2 rounded-full mb-6">
            <Target className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm font-semibold text-purple-800">What Drives Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Story Behind SimplifAI
          </h2>
        </div>

        {/* New Mission Statement */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center">
            SimplifAI started with a mission: to help businesses overcome tedious processes and missed opportunities by building tools that make everyday work easier and more efficient.
          </p>
        </div>

        {/* Stats/Results Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">2–3 Weeks</div>
            <p className="text-gray-600">From first idea to working automation</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">40% Less</div>
            <p className="text-gray-600">Average operational costs saved</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">25+ Hours</div>
            <p className="text-gray-600">Time freed up each week</p>
          </div>
        </div>

        {/* Origin Story (Authentic) */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-purple-100">
            <p className="text-gray-700 leading-relaxed text-center">
              <span className="font-semibold text-gray-900">SimplifAI started with a simple frustration.</span> 
              After seeing businesses struggle with tedious processes and missed opportunities, we wanted to build something that made everyday work just a little easier.
              <span className="block mt-4 font-semibold text-purple-700">
                Our goal: Help people spend less time on tasks that drain their energy, and more on the work that matters to them.
              </span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2 shadow-xl"
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

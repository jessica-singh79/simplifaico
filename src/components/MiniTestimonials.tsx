import React from 'react';
import { Quote } from 'lucide-react';

const MiniTestimonials = () => {
  const testimonials = [
    {
      quote: "SimplifAI saved us hours on client reporting every week.",
      author: "Alex R.",
      role: "Small Business Owner",
      initials: "AR",
      color: "from-blue-500 to-cyan-500"
    },
    {
      quote: "I didn't think automation was for us, but setup was fast and easy.",
      author: "Jamie L.",
      role: "Consultant",
      initials: "JL",
      color: "from-purple-500 to-pink-500"
    },
    {
      quote: "Feels like having an extra team member who never sleeps.",
      author: "Priya S.",
      role: "Startup Founder",
      initials: "PS",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-purple-400 mb-4" />
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniTestimonials;
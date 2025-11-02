"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { ChevronLeft, ChevronRight } from "lucide-react";

const faqs = [
  {
    icon: "🔧",
    question: "Do I need technical skills?",
    answer: "No technical skills required! We handle all the setup and deliver ready-to-use tools. Our team takes care of the complex technical work so you can focus on running your business. Everything is designed to be intuitive and user-friendly."
  },
  {
    icon: "⚡",
    question: "What kind of tasks can be automated?",
    answer: "We automate repetitive tasks like customer inquiries, data entry, appointment scheduling, email responses, report generation, and workflow management. From admin work to customer support, if it's repetitive, we can automate it."
  },
  {
    icon: "🔒",
    question: "How secure is this?",
    answer: "Security is our top priority. We use enterprise-grade encryption, secure data storage, and comply with industry standards like GDPR. Your data is protected with multiple layers of security, and we never share your information with third parties."
  },
  {
    icon: "💰",
    question: "What's the pricing structure?",
    answer: "We offer flexible pricing based on your needs. Our retainer model includes ongoing support, monthly optimizations, and unlimited updates. Custom solutions are priced per project. Book a free consultation to get a tailored quote for your business."
  },
  {
    icon: "⏱️",
    question: "How long does implementation take?",
    answer: "Most projects are up and running within 2-4 weeks. Simple automations can be deployed in days, while complex custom solutions may take 4-8 weeks. We provide a clear timeline during our initial consultation."
  },
  {
    icon: "🤝",
    question: "What kind of support do you provide?",
    answer: "We provide ongoing support through our retainer model, including monthly performance reviews, system optimizations, bug fixes, and feature updates. You'll have direct access to our team via email, chat, or scheduled calls."
  }
];

export function FAQCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % faqs.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + faqs.length) % faqs.length);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <BackgroundBeamsWithCollision className="py-20 min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <div id="faq" className="max-w-5xl mx-auto px-4 relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg md:text-xl font-body text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about SimplifAI and how it can transform your business.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 relative z-30"
            >
              {/* Icon */}
              <div className="text-6xl mb-6 text-center">
                {faqs[currentIndex].icon}
              </div>

              {/* Question */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-6 text-center text-gray-900">
                {faqs[currentIndex].question}
              </h3>

              {/* Answer */}
              <p className="text-base md:text-lg font-body text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                {faqs[currentIndex].answer}
              </p>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {faqs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-gradient-to-r from-blue-600 to-purple-600"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to question ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={previous}
            className="absolute left-2 sm:left-4 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-12 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Previous question"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={next}
            className="absolute right-2 sm:right-4 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-12 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Next question"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Counter */}
        <div className="text-center mt-8 font-body text-gray-600 font-medium">
          {currentIndex + 1} / {faqs.length}
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
import React from 'react';
import { ArrowRight, Clock, DollarSign, TrendingUp } from 'lucide-react';

const StatCard = ({ icon: Icon, title, subtitle }: { icon: any; title: React.ReactNode; subtitle: string }) => (
  <div className="text-center p-6 rounded-2xl bg-background-primary border border-border-light shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon className="w-6 h-6 text-primary" aria-hidden />
    </div>
    <div className="text-3xl font-semibold text-text-primary mb-2">{title}</div>
    <p className="text-sm text-text-secondary">{subtitle}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-background-primary">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-text-primary leading-tight mb-4">
            Here's what we actually do
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-text-secondary">
            Most web shops build you a site and walk away. We build sites that work for you—capturing leads, booking appointments, and following up automatically. Think of it as hiring a full-time assistant who never sleeps.
          </p>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard
            icon={Clock}
            title="2–3 weeks"
            subtitle="From kickoff call to launch. No six-month projects here."
          />
          <StatCard
            icon={DollarSign}
            title="40% less"
            subtitle="What our clients save on average in the first three months."
          />
          <StatCard
            icon={TrendingUp}
            title="25+ hours"
            subtitle="Back in your week when you stop doing things manually."
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-primary-dark hover:scale-105 transform transition-all duration-300"
            aria-label="See our services"
          >
            <span>See What We Build</span>
            <ArrowRight className="w-4 h-4" aria-hidden />
          </button>
          <p className="mt-4 text-sm text-text-secondary max-w-xl mx-auto">
            Got something specific in mind?{' '}
            <button 
              className="underline text-primary font-medium hover:text-primary-dark transition-colors" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's talk
            </button>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
import React, { useState } from 'react';
import { MapPin, Mail, ArrowRight, CheckCircle } from 'lucide-react';

const WORKER_URL = 'https://simplify-form-submission.jessicasingh7900.workers.dev';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      service: ''
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
      isValid = false;
    }

    if (!formData.service) {
      newErrors.service = 'Please select an option';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const response = await fetch(WORKER_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fullName: formData.name,
            email: formData.email,
            phone: formData.phone,
            aiSolution: formData.service
          })
        });

        const result = await response.json();

        if (response.ok) {
          console.log('✅ Form submitted successfully to Airtable!');
          setIsSubmitted(true);
          
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', service: '' });
          }, 5000);
        } else {
          console.error('❌ Error:', result.error);
          alert('Something went wrong. Please try again or contact us directly.');
        }
      } catch (error) {
        console.error('❌ Network error:', error);
        alert('Network error. Please check your connection and try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <footer className="relative bg-background-secondary">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        {/* Contact Form Section */}
        <div id="contact" className="mb-16 sm:mb-20">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Ready to Stop Doing This Manually?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary">
              Book a 15-minute call. We'll walk through what's taking your time and how we'd automate it.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-background-primary rounded-2xl p-6 sm:p-8 border border-border-light shadow-lg">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Your Name
                  </label>
                  <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-background-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-text-primary" placeholder="John Smith" />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email Address
                  </label>
                  <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-background-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-text-primary" placeholder="john@example.com" />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                    Phone Number
                  </label>
                  <input type="tel" id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-background-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-text-primary" placeholder="(555) 123-4567" />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-2">
                    What do you need help with?
                  </label>
                  <select id="service" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-4 py-3 bg-background-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-text-primary">
                    <option value="">Select an option</option>
                    <option value="Website + Booking System">Website + Booking System</option>
                    <option value="Automated Follow-ups">Automated Follow-ups</option>
                    <option value="24/7 Chat Support">24/7 Chat Support</option>
                    <option value="All of the above">All of the above</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                  {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full px-8 py-4 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary-dark hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg flex items-center justify-center gap-2">
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-text-primary mb-2">Got It!</h3>
                <p className="text-text-secondary">We'll get back to you within 24 hours.</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 pt-12 border-t border-border-light">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10">
                <img src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/logo.png" alt="SimplifAI Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold text-text-primary">SimplifAI</span>
            </div>
            <p className="text-text-secondary mb-6 text-sm sm:text-base">
              Booking, follow-ups, and support that run automatically. Built for small businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} className="text-text-secondary hover:text-primary transition-colors text-left text-sm sm:text-base">Home</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-text-secondary hover:text-primary transition-colors text-left text-sm sm:text-base">What We Build</button></li>
              <li><button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="text-text-secondary hover:text-primary transition-colors text-left text-sm sm:text-base">How It Works</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-text-secondary hover:text-primary transition-colors text-left text-sm sm:text-base">Contact</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-text-secondary text-sm sm:text-base">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Middletown, NY</span>
              </li>
              <li className="flex items-start gap-2 text-text-secondary text-sm sm:text-base">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@simplifaico.com" className="hover:text-primary transition-colors">info@simplifaico.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border-light">
          <p className="text-text-secondary text-sm">
            © 2025 SimplifAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
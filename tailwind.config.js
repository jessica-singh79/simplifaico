const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Work Sans', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // Primary Brand Colors (with shades)
        primary: {
          DEFAULT: '#4F46E5', // indigo-600
          light: '#6366F1',   // indigo-500
          dark: '#4338CA',    // indigo-700
          50: '#EEF2FF',
          100: '#E0E7FF',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
        },
        secondary: {
          DEFAULT: '#7C3AED', // violet-600
          light: '#8B5CF6',   // violet-500
          dark: '#6D28D9',    // violet-700
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
        },
        accent: {
          DEFAULT: '#06B6D4', // cyan-500
          light: '#22D3EE',   // cyan-400
          dark: '#0891B2',    // cyan-600
        },
        
        // Backgrounds
        background: {
          primary: '#FFFFFF',
          secondary: '#F8FAFC', // slate-50
          subtle: '#EEF2FF',    // indigo-50
        },
        
        // Text
        text: {
          primary: '#0F172A',   // slate-900
          secondary: '#475569', // slate-600
          tertiary: '#94A3B8',  // slate-400
        },
        
        // Borders
        border: {
          DEFAULT: '#E2E8F0', // slate-200
          light: '#F1F5F9',   // slate-100
          dark: '#CBD5E1',    // slate-300
        },

        // Keep these for compatibility
        foreground: '#1F2937',
        muted: '#F3F4F6',
      },
      
      fontSize: {
        // Simplified - only 2 breakpoints max
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        aurora: 'aurora 60s linear infinite',
      },
      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}
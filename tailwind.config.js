const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // Flattened color keys for Tailwind utilities generation
        'background-primary': '#ffffff',   // White
        'background-secondary': '#f8fafc', // Slate-50
        'background-subtle': '#eef2ff',    // Indigo-50

        foreground: '#1f2937',              // Original slate-800

        primary: '#4F46E5',                 // Indigo-600
        secondary: '#7C3AED',               // Violet-600
        accent: '#06B6D4',                  // Cyan-500

        muted: '#f3f4f6',
        border: '#e5e7eb',

        'text-primary': '#0F172A',          // Slate-900
        'text-secondary': '#475569',        // Slate-600
        'text-tertiary': '#94A3B8',         // Slate-400
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
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// CSS variable injection for dynamic theming
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}

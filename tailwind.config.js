// Updated tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // Use flattened keys here
        'background-primary': '#ffffff',   // White
        'background-secondary': '#f8fafc', // Slate-50
        'background-subtle': '#eef2ff',    // Indigo-50
        primary: '#4F46E5',
        secondary: '#7C3AED',
        accent: '#06B6D4',
        muted: '#f3f4f6',
        border: '#e5e7eb',
        // Text roles
        'text-primary': '#0F172A',
        'text-secondary': '#475569',
        'text-tertiary': '#94A3B8',
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = Object.entries(theme('colors'));
  let newVars = Object.fromEntries(
    allColors.map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}

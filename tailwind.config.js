const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // We'll update fonts separately after colors, keeping these temporarily
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // Map the color roles you can use in classes; assign CSS variables for flexibility
        background: {
          primary: 'var(--background-primary, #ffffff)',    // White
          secondary: 'var(--background-secondary, #f8fafc)',// Slate-50
          subtle: 'var(--background-subtle, #eef2ff)',      // Indigo-50
        },
        foreground: 'var(--foreground, #1f2937)',            // From your original

        // Core Indigo/violet/cyan palette using CSS variables for easy theming
        primary: 'var(--primary, #4F46E5)',                   // Indigo-600
        secondary: 'var(--secondary, #7C3AED)',               // Violet-600
        accent: 'var(--accent, #06B6D4)',                     // Cyan-500

        // Muted colors for borders/text
        muted: 'var(--muted, #f3f4f6)',
        border: 'var(--border, #e5e7eb)',

        // Text colors by role - overrides or can be extended in your utility classes
        text: {
          primary: 'var(--text-primary, #0F172A)',            // Slate-900
          secondary: 'var(--text-secondary, #475569)',        // Slate-600
          tertiary: 'var(--text-tertiary, #94A3B8)',          // Slate-400
        }
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

// This injects CSS variables to :root for your colors to be easily overridden or themed dynamically
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}

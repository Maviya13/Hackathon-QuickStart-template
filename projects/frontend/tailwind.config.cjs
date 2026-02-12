/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        institutional: {
          "primary": "#10b981", // Emerald
          "secondary": "#3b82f6", // Soft Blue
          "accent": "#f59e0b", // Gold/Amber
          "neutral": "#1f2937", // Gray-800
          "base-100": "#1a1d21", // Deep Charcoal
          "base-200": "#111315", // Darker Charcoal
          "base-300": "#0b0c0e", // Darkest
          "info": "#3b82f6",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
      "winter", // Fallback for components not yet migrated
    ],
    logs: false,
  },
  plugins: [require('daisyui')],
}

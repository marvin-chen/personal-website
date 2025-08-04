/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.svg"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Menlo", "Monaco", "monospace"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(5px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
          },
          '50%': {
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
          },
        },
        'neon-flicker': {
          '0%, 100%': { opacity: '1' },
          '1%, 3%, 5%, 7%': { opacity: '0.8' },
          '2%, 4%, 6%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(100px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'bounce-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05)',
          },
          '70%': {
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'text-shimmer': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.2s ease-out forwards',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'neon-flicker': 'neon-flicker 1.5s infinite linear',
        'float': 'float 3s ease-in-out infinite',
        'slide-in-right': 'slide-in-right 0.3s ease-out forwards',
        'bounce-in': 'bounce-in 0.3s ease-out forwards',
        'text-shimmer': 'text-shimmer 2s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      colors: {
        // Subtle accent colors for professional look
        accent: {
          blue: '#0ea5e9', // sky-500
          purple: '#8b5cf6', // violet-500
          emerald: '#10b981', // emerald-500
          amber: '#f59e0b', // amber-500
        },
        // Professional gray scale
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        primary: {
          100: '#e0f7fa',
          200: '#b2ebf2',
          300: '#80deea',
          400: '#4dd0e1',
          500: '#26c6da',
          600: '#00bcd4',
          700: '#00acc1',
          800: '#0097a7',
          900: '#00838f',
        },
        secondary: {
          100: '#f0f4c3',
          200: '#e6ee9c',
          300: '#dce775',
          400: '#c4dd00',
          500: '#aeea00',
          600: '#76ff03',
          700: '#64dd17',
          800: '#4caf50',
          900: '#388e3c',
        },
        dark: {
          100: '#0f0f0f',
          200: '#1a1a1a',
          300: '#262626',
          400: '#404040',
          500: '#525252',
          600: '#737373',
          700: '#a3a3a3',
          800: '#d4d4d4',
          900: '#f5f5f5',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-primary-vertical': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(135deg, rgba(14,165,233,0.05), rgba(139,92,246,0.05))',
        'gradient-card': 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

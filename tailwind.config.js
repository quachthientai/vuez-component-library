const colors = require("tailwindcss/colors");

module.exports =  {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    
    
  ],
  theme: {
    colors:{
      white: colors.white,
      black: colors.black,
      'light': '#F8FAFC',
      'dark': '#1E293B',
      primary: {
        50: '#F0F9FF',
        100: '#E0F2FE',
        200: '#BAE6FD',
        300: '#7DD3FC',
        400: '#38BDF8',
        500: '#0EA5E9',
        600: '#0284C7',
        700: '#0369A1',
        800: '#075985',
        900: '#0C4A6E',
      },
      secondary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
      info: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
      success: { 
        50: '#F0FDF4',
        100: '#DCFCE7',
        200: '#BBF7D0',
        300: '#86EFAC',
        400: '#4ADE80',
        500: '#22C55E',
        600: '#16A34A',
        700: '#15803D',
        800: '#166534',
        900: '#14532D',
      },
      warning: {
        50: '#FFFBEB',
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#FCD34D',
        400: '#FBBF24',
        500: '#F59E0B',
        600: '#D97706',
        700: '#B45309',
        800: '#92400E',
        900: '#78350F',
      },
      danger: {
        50: '#FEF2F2',
        100: '#FEE2E2',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        500: '#EF4444',
        600: '#DC2626',
        700: '#B91C1C',
        800: '#991B1B',
        900: '#7F1D1D',
      },
    },
    extend: {
      textColor:{
        'light': '#E2E8F0',
        'dark': '#000000',
      },
      fontFamily:{
        Montserrat:["Montserrat","san-serif"]
      },  
      fontSize: {
        'h1': '3.5rem',
        'h2': '2.5rem',
        'h3': '1.75rem',
        'h4': '1.625rem',
        'h5': '1.375rem',
        'h6': '1.25rem',
        'content-1': '2.16rem',
        'content-2': '1.54rem',
        'content-3': '1.08rem',
        'content-4': '1rem',
        'content-5': '0.85rem',
        'content-6': '0.77rem',
      }
    },
  },
  plugins: [
    
  ],
};



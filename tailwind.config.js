// const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require('tailwindcss/plugin')
module.exports =  {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/assets/scss/**/*.{vue,js,ts,jsx,tsx,scss}"
  ],
  theme: {
    screens: {
      'xxs': {'max': '300px'},
      'xs': {'max': '475px'},
      ...defaultTheme.screens
    },
    extend: { 
      backgroundColor: {
        'ripple-primary': 'rgb(56 189 248 / 0.4)',
        'ripple-secondary': 'rgb(148 163 184 / 0.4)',
        'ripple-success': 'rgb(74 222 128 / 0.4)',
        'ripple-warning': 'rgb(251 191 36 / 0.4)',
        'ripple-danger': 'rgb(248 113 113 / 0.4)',
        'ripple-info': 'rgb(96 165 250 / 0.4)',
        'ripple-plain': 'rgb(222 219 219 / 0.8)'
      },
      boxShadow: {
        'elevation-1': '0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)',
        'elevation-2': '0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)',
        'elevation-3': '0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)',
        'elevation-4': '0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)',
        'elevation-5': '0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)'
      },
      animation: {
        'ripple' : 'ripple 700ms linear',
        'tada' : 'tada 1s ease-in-out infinite'
      },
      transitionProperty: {
        'max-height': 'max-height',
        'height': 'height',
        'border-width': 'border-width'
      },
      keyframes: {
        progress: {
          '100%' : {right: '100%'},
        },
        ripple: {
          '100%' : { transform: 'scale(4)', opacity: '0'},
        },
        tada: {
          '0' : { transform: 'scaleZ(1)'},
          '10%, 20%' : { transform: 'scaleZ(.95) rotate3d(0,0,1,-10deg)'},
          '30%, 50%, 70%, 90%' : { transform: 'scaleZ(1) rotate3d(0,0,1,10deg)'},
          '40%, 60%, 80%' : { transform: 'rotate3d(0,0,1,-10deg)'},
          'to' : { transform: 'scaleZ(1)'},
        }
      },
      colors: {
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
        plain: {
          50 : '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        ...defaultTheme.colors
      },
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
    require('@tailwindcss/forms'),
    plugin(function({matchUtilities, theme}) {
      matchUtilities({
        elevation: (value) => ({
          elevationValue : value
        })
      },
      {
        values: theme('boxShadow')
      })
    })
  ],
};


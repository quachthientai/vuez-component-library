const colors = require("tailwindcss/colors");

module.exports =  {
  content: [
    "./index.html",
    "./src/components/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        'darkMode': '#E2E8F0',
        'lighMode': '#000000',
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



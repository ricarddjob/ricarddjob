/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
    'verde': '#72F285',
    'negro': '#19171F',
    'negro-f': '#0d0d0f',
    'blanco': '#EDEDED',
    'negro-2': '#1E1E37',
    'negro-claro': '#30304F',
  },
  fontFamily: {
    'roboto': ["Roboto Condensed", "Roboto", "sans"],
  },

  animation: {
    'marquee': 'marquee2 40s linear infinite',

    //header
    'circulo1': 'circulo1 linear forwards',
    'circulo2': 'circulo2 linear forwards',
    'circulo3': 'circulo3 linear forwards',
    'circulo4': 'circulo4 linear forwards',

    //programas y tegnologia
    'titulo1': 'titulo1 linear forwards',
    'titulo2': 'titulo2 linear forwards',
    'linea': 'linea linear forwards',
    'cuadro1': 'cuadro1 linear forwards',
    'cuadro2': 'cuadro2 linear forwards',
    'cuadro3': 'cuadro3 linear forwards',

    //Experiencia
    'circulo5': 'circulo5 linear forwards',

  },
  keyframes: {
    marquee2: {
      '0%, 100%': { transform: 'translateX(5%)' },
      '50%': { transform: 'translateX(-35%)' },  
    },

    circulo1: { 
      from: { transform: "translateY()", },
      to: { transform: "translateY(-10dvh)",},
    },

    circulo2: {
      from: {transform: "translateY()",},
      to: {transform: "translateY(25dvh)",},
    },

    circulo3: {
      from: {transform: "translateX()", },   
      to: {transform: "translateX(0dvw)", transform: "translateY(27dvh)",},    
    },

    circulo4: {
      from: {transform: "translateX()",},
      to: {transform: "translateX(-6dvw)", transform: "translateY(27dvh)",},
    },
    titulo1: {
      '0%': {opacity: "0%", transform: "translateX(-50dvw)",},
      '50%': {opacity: "0%",},
      '100%': {opacity: "100%",},
    },
    titulo2: {
      '0%': {opacity: "0%", transform: "translateX(-50dvw)",},
      '60%': {opacity: "0%",},
      '100%': {opacity: "100%",},
    },
    linea: {
      '0%': {opacity: "0%", width: "0%",},
      '50%': {opacity: "0%",},
      '100%': {opacity: "100%",},
    },

    cuadro1: {
      '0%': {opacity: "0%", scale: "0", },
      '70%': {opacity: "0%", transform: "translateY(20dvh)", },
      '100%': {opacity: "100%",},
    },

    cuadro2: {
      '0%': {opacity: "0%", scale: "0",},
      '70%': {opacity: "0%", transform: "translateY(20dvh)", },
      '100%': {opacity: "100%",},
    },

    cuadro3: {
      '0%': {opacity: "0%", scale: "0", transform: 'rotate(150deg)',},
      '70%': {opacity: "50%", transform: "translateX(-25dvh)", },
      '100%': {opacity: "100%",},
    },

    circulo5: { 
      from: { },
      to: { transform: "translateY(114dvh)",},
    },

    
      
        
        
      
        
        
      
        
        
      
        
        
      
        
        
      
      
      
      
      
      

        
        
      

    
      
      
    
        
        
        
        
      





  },

  supports: {
    "no-scroll-driven-animations": "not(animation-timeline: scroll())",
  },

  }},
  plugins: [],
}


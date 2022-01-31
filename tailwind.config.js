const backgroundImage = "https://www.themoviedb.org/t/p/w1280/m3Ys7UDzUzOyoPYKzp4GhKKokUr.jpg";
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['IBM Plex Sans'],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
      'display': ['Oswald', ],
      'body': ['"Open Sans"', ],
    },
    screens:{
      '0smx':{'max': '300px'},
      'smx': {'max': '575px'},
      'mdx': {'max':'767px'},
      'lgx': {'max': '1023px'},
      'lxx': {'max': '1279px'},
      'sm': '576px',
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

    },
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },

      backgroundImage: theme => ({
        'Poster': `url(${backgroundImage})`,
        // 'footerBg' : `url(${footerbackground})`,
       }),
      color:{
        primary: "#585858", //Gray
        headingBg: "#1BC860", //Green
        bodyBg: "#EFEFEF", //LightDark 
        navbg: "#1E1E1E", //LightDark 
        textWhite: "#FFFFFF",
      },
    },
  },
  plugins: [],
}

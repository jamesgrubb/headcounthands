const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    content: ["public/**/*.html"],
    options: {
      whitelist: [],
    },
  },
    theme: {
      container: (theme) => ({
        center: true,
        padding: {          
          default: theme("spacing.4"),
          sm: theme("spacing.5"),
          lg: theme("spacing.6"),
          xl: theme("spacing.8"),
        },
      }),
        extend: {
        fontFamily: {
            'headline': ['RightGrotesk-TallBold', 'Helvetica', 'Arial', 'sans-serif'],
            'body': ['Montserrat','sans-serif'],
            'brand': ['RightGrotesk-Medium','sans-serif']
            },  
          colors: {
            gray: colors.coolGray,
            red: colors.rose,
            yellow: colors.amber,
            green: colors.emerald,
            "hospital": {
              "100": "#f6f9f7",
              "200": "#eaf1ed",
              "300": "#dbe6e0",
              "400": "#ceded5",
              "500": "#bfd4c8",
              "600": "#8cb09c",
              "700": "#5d8871",
              "800": "#385244",
              "900": "#151e19"
            },
            "brown": {
              "100": "#faf7f5",
              "200": "#e3d4c9",
              "300": "#cdb29d",
              "400": "#b48d6e",
              "500": "#946b4c",
              "600": "#79583f",
              "700": "#5b422f",
              "800": "#402e21",
              "900": "#221811"
            }
          }
        }
      },
      variants: {},
      plugins: [
        require('tailwindcss-debug-screens'),
      ],
}
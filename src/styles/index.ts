import { createStitches } from "@stitches/react";

export const {
  config,
  theme,
  createTheme,
  styled,
  css,
  getCssText,
  globalCss,
  keyframes,
} = createStitches({
  theme: {
    colors: {
      rocketseat: '#8257E6',
      imageBackground: 'linear-gradient(180deg, #1EA483 0%, #7465D4 180%)',

      white: '#FFF',

      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e',
    },
    
    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem'
    }
  }
})
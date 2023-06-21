import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primaryBase: '#C662FF',
      secondaryBase: '#D3D6DC',
      tertiary: '#030212',
    },

    fonts: {
      primary: 'var(--font-inter)',
      secondary: 'var(--font-rajdhani)',
    },
    fontSizes: {
      xxs: '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem', // 14px
      md: '1rem', // 16px
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem', // 24px
      '4xl': '2rem', // 32
      '5xl': '2.25rem',
      '6xl': '3rem', // 48px
      '7xl': '4rem',
      '8xl': '4.5rem',
      '9xl': '6rem',
    },

    fontWeights: {
      light: '300',
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
    },
  },
})

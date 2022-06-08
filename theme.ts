import { makeTheme } from 'dripsy';

export const fontName = 'Inter';

const theme = makeTheme({
  colors: {
    $primary: '#001F2D',
    $secondary: '#4D626C',
    $white: '#fff',
    $gray: '#74858C',
  },
  customFonts: {
    [fontName]: {
      bold: 'InterBold',
      default: fontName,
      normal: fontName,
      '300': 'InterLight',
      '400': fontName,
      '500': 'InterMedium',
      '600': 'InterSemibold',
      '700': 'InterBold',
    },
  },
  fonts: {
    root: fontName,
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
  },
  space: {
    $0: 0,
    $1: 4,
    $2: 8,
    $2_5: 10,
    $3: 12,
    $3_5: 14,
    $4: 16,
    $4_5: 18,
    $5: 20,
    $6: 24,
  },
  radii: [14, 24],
  shadows: {
    light: {
      shadowColor: '#74858C',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    medium: {
      shadowColor: '#74858C',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    dark: {
      shadowColor: '#74858C',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
      elevation: 14,
    },
  },
  types: {
    reactNativeTypesOnly: true,
  },
});

type MyTheme = typeof theme;

declare module 'dripsy' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DripsyCustomTheme extends MyTheme {}
}

export default theme;

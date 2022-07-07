import { extendTheme } from '@chakra-ui/react';

const colors = {
  gray: {
    50: '#F7FAFC',
    100: '#EDF2F7',
    200: '#E2E8F0',
    300: '#CBD5E0',
    400: '#A0AEC0',
    500: '#718096',
    600: '#4A5568',
    700: '#2D3748',
    800: '#1A202C',
    900: '#171923',
  },
  sage: {
    base: '#c58af9',
    dark: '#ac75ea',
    darker: '#D37B4A',
  },
  dust: {
    light: '#74503D',
    base: '#483327',
    dark: '#ac75ea',
    darker: '#1B1512',
  },
  dustAlpha: {
    light: 'rgba(254, 180, 140, 0.45)',
    base: 'rgba(254, 180, 140, 0.28)',
    dark: 'rgba(254, 180, 140, 0.21)',
    darker: 'rgb(32, 33, 36)',
  },
  maincolor: {
    corebg: 'rgb(32, 33, 36)',
    midbg: 'rgb(48, 49, 54)',
    coretext: 'rgb(248, 249, 250)',
    midtext: 'rgb(210, 211, 215)',
    bordergray: 'rgb(88, 91, 99)',
  },
};

const fonts = {
  heading: 'PolySans, -apple-system, system-ui, sans-serif',
  body: 'Inter, -apple-system, system-ui, sans-serif',
  mono: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
};

const theme = {
  colors,
  fonts,
  space: {
    vGutter: '6.25rem',
  },
  styles: {
    global: {
      'html, body': {
        bg: 'rgb(32, 33, 36)',
        color: 'rgb(248, 249, 250)',
        minH: '100vh',
        overflowX: 'hidden',
        fontSize: 'clamp(1rem, 0.96rem + 0.18vw, 1.125rem)',
      },
      '*:focus, *[data-focus]': {
        outline: '2px solid',
        outlineColor: 'sage.base',
        outlineOffset: '3px',
      },
      'h2,h3,h4': {
        scrollMarginTop: '4rem',
        '&:hover': {
          'a.anchor': {
            opacity: 1,
          },
        },
      },
      '.img': {
        rounded: 'lg',
        maxWidth: '100%',
        height: 'auto',
      },
      '.wrapper': {
        marginInline: 'auto',
        width: 'clamp(16rem, 95vw, 85rem)',
        paddingInline: 'clamp(1.375rem, 1.2rem + 0.89vw, 2rem)',
        position: 'relative',
      },
      '.section': {
        paddingBlock: 'clamp(3.75rem, 3.21rem + 2.68vw, 5.625rem)',
      },
      '.switcher > *': {
        flexGrow: '1',
        flexBasis: 'calc( (var(50rem, 40rem) - 100%) * 999 )',
      },
      'code': {
        fontSize: 'clamp(1rem, 0.96rem + 0.18vw, 1.125rem) !important',
      },
      'a.anchor': {
        opacity: 0,
        marginX: '3',
        '&:before': {
          content: `"#"`,
          color: 'sage.base',
        },
        '&:focus': {
          opacity: 1,
        },
      },
    },
  },
};

export default extendTheme(theme);

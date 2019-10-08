const common = {
  font: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  typography: {
    h1: '4.8rem',
    h2: '4rem',
    headline: '2.4rem',
    default: '1.8rem',
    paragraph: '1.6rem',
    medium: '1.4rem',
    small: '1.2rem',
  },
  breakpoints: {
    sm: 0,
    md: '768px',
    lg: '1023px',
    tv: '1224px',
  },
}

const defaultColors = {
  colors: {
    bg: '#ffffff',
    primary: '#48525b',
    secondary: '#273CAF',
  },
}

const darkColors = {
  colors: {
    bg: '#061A40',
    primary: '#fafafa',
    secondary: '#250F8A',
  },
}

const theme = { ...defaultColors, ...common }
const darkTheme = { ...darkColors, ...common }

const attrSpreader = (obj, attrPrefix) => {
  let spreadedAttrs = ''
  // eslint-disable-next-line no-unused-vars
  for (const attr in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, attr)) {
      spreadedAttrs += `${attrPrefix}${attr}:${obj[attr]};`
    }
  }
  return spreadedAttrs
}

export const cssVariables = `
  :root{
    ${attrSpreader(theme.colors, '--color-')}
    ${attrSpreader(theme.font, '--font-')}
    ${attrSpreader(theme.typography, '--typography-')}
  }
  `

export { theme as default, darkTheme }

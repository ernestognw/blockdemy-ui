import { lighten, darken, transparentize } from 'polished';
import media from './media';

const brand = {
  primary: '#5B97F2',
  secondary: '#8265FC',
  info: '#30CEE7',
  default: '#1F262D',
  success: '#00E18D',
  warning: '#FFAB00',
  danger: '#FF4F64'
};

const tone = {};
const soft = {};

Object.keys(brand).forEach(color => {
  tone[color] = [];
  tone[color][900] = darken(0.28, brand[color]);
  tone[color][800] = darken(0.21, brand[color]);
  tone[color][700] = darken(0.14, brand[color]);
  tone[color][600] = darken(0.07, brand[color]);
  tone[color][500] = brand[color];
  tone[color][400] = lighten(0.07, brand[color]);
  tone[color][300] = lighten(0.14, brand[color]);
  tone[color][200] = lighten(0.21, brand[color]);
  tone[color][100] = lighten(0.28, brand[color]);
});

Object.keys(brand).forEach(color => {
  soft[color] = [];
  soft[color][900] = transparentize(0.1, brand[color]);
  soft[color][800] = transparentize(0.2, brand[color]);
  soft[color][700] = transparentize(0.3, brand[color]);
  soft[color][600] = transparentize(0.4, brand[color]);
  soft[color][500] = transparentize(0.5, brand[color]);
  soft[color][400] = transparentize(0.6, brand[color]);
  soft[color][300] = transparentize(0.7, brand[color]);
  soft[color][200] = transparentize(0.8, brand[color]);
  soft[color][100] = transparentize(0.9, brand[color]);
});

const grey = {
  darker: '#121217',
  dark: '#151A1F',
  semiDark: '#474B4F',
  lightDark: '#6F737A',
  lightGrey: '#AAAEB3',
  veryLightGrey: '#ECEDEF',
  light: '#F2F2F2',
  veryLight: '#F6F8FA',
  lighter: '#FFFFFF'
};

const colors = {
  ...brand,
  ...grey,
  tone,
  soft,
  gradient: `linear-gradient(135deg, ${brand.info}, ${brand.secondary});`
};

const theme = {
  media,
  font: 'SF Pro Text, system-ui, serif',
  shadow: '0 0 2rem 0 rgba(136, 152, 170, 0.15)',
  shadowHover: '0 0 4rem 0 rgba(136, 152, 170, 0.3)',
  radius: '.3rem',
  maxWidth: '1170px',
  colors,
  space: [],
  fontSize: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.75rem',
    h4: '1.5rem',
    h5: '1.25rem',
    h6: '1rem',
    d1: '3.3rem',
    d2: '2.75rem',
    d3: '2.1875rem',
    d4: '1.6275rem',
    heading: '1rem',
    headingTitle: '1.375rem',
    headingSection: '1.45rem',
    paragraph: '1rem',
    leadText: '1.25rem',
    muted: '0.85rem'
  }
};

export default theme;

import media from "./media";

const brand = {
  primary: "#5B97F2",
  secondary: "#8265FC",
  info: "#30CEE7",
  default: "#1F262D",
  success: "#00E18D",
  warning: "#FFAB00",
  danger: "#FF4F64"
};

const softColors = {};
Object.keys(brand).forEach(color => (softColors[color] = `${brand[color]}33`));

const grey = {
  darker: "#121217",
  dark: "#151A1F",
  semiDark: "#474B4F",
  lightDark: "#6F737A",
  lightGrey: "#AAAEB3",
  veryLightGrey: "#ECEDEF",
  light: "#F2F2F2",
  lighter: "#FFFFFF"
};

const colors = {
  ...brand,
  ...grey,
  gradient: "linear-gradient(135deg, #30CEE7, #8265FC);"
};

const theme = {
  media,
  font: "system-ui, sans-serif",
  shadow: "0 0 2rem 0 rgba(136, 152, 170, 0.15)",
  shadowHover: "0 0 4rem 0 rgba(136, 152, 170, 0.3)",
  radius: ".3rem",
  maxWidth: "1170px",
  colors,
  softColors,
  space: [],
  fontSize: {
    heading1: "2.5rem",
    heading2: "2rem",
    heading3: "1.75rem",
    heading4: "1.5rem",
    heading5: "1.25rem",
    heading6: "1rem",
    display1: "3.3rem",
    display2: "2.75rem",
    display3: "2.1875rem",
    display4: "1.6275rem",
    heading: ".85rem",
    headingTitle: "1.375rem",
    headingSection: "1.25rem",
    paragraph: "1rem",
    leadText: "1rem",
    muted: "0.85rem"
  }
};

export default theme;

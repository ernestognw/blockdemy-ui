const addSpacing = ({ font }) =>
  font &&
  font !== 'light' &&
  font !== 'lightItalic' &&
  `
    letter-spacing: 0.5px;
  `;

const underline = ({ underline: ul }) => ul && 'text-decoration: underline';
const uppercase = ({ uppercase: uc }) => uc && 'text-transform: uppercase';
const capitalize = ({ capitalize: cp }) => cp && 'text-transform: capitalize';
const fontSize = ({ fontSize: fs }) => fs && `font-size: ${fs}`;

export { addSpacing, underline, uppercase, capitalize, fontSize };

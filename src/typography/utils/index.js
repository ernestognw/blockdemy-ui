const addSpacing = ({ font }) =>
  font &&
  font !== "light" &&
  font !== "lightItalic" &&
  `
    letter-spacing: 0.5px;
  `;

const underline = ({ underline }) => underline && "text-decoration: underline";
const uppercase = ({ uppercase }) => uppercase && "text-transform: uppercase";
const fontSize = ({ fontSize }) => fontSize && `font-size: ${fontSize}`;

export { addSpacing, underline, uppercase, fontSize };

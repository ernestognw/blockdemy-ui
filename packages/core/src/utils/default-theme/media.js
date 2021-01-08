import { css } from 'styled-components';

const screenSizes = {
  pc: 1170,
  desktop: 992,
  tablet: 768,
  phone: 576,
  smallPhone: 320
};

const media = Object.keys(screenSizes).reduce((acc, label) => {
  acc[label] = (...args) =>
    css`
      @media (max-width: ${screenSizes[label] / 16}em) {
        ${css(...args)};
      }
    `;

  return acc;
}, {});

export { screenSizes };

export default media;

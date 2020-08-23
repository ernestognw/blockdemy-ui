import { keyframes, css } from 'styled-components';

const stripeKeyframe = keyframes`
  from { background-position: 1rem 0}
  to { background-position: 0 0 }
`;

const getIndeterminateStyle = ({ indeterminate }) =>
  indeterminate
    ? `width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;`
    : '';

const getStripeStyle = ({ stripe }) =>
  stripe
    ? `background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1rem 1rem;`
    : '';

const getAnimateStyle = ({ animate }) =>
  animate
    ? css`
        animation: ${stripeKeyframe} 1s linear infinite;
      `
    : '';

export { getIndeterminateStyle, getStripeStyle, getAnimateStyle };

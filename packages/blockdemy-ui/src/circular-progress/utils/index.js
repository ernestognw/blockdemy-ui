const getCircleProps = ({ strokeWidth, strokeDasharray, strokeDashoffset, viewBox, radius }) => `
  fill: transparent;
  stroke-width: ${strokeWidth};
  stroke-dasharray: ${strokeDasharray};
  stroke-dashoffset: ${strokeDashoffset};
  cx: ${viewBox};
  cy: ${viewBox};
  r: ${radius};
  stroke: currentColor;
`;

export { getCircleProps };

const sizes = {
  small: {
    width: '1.375rem',
    height: '0.75rem'
  },
  normal: {
    width: '1.875rem',
    height: '1rem'
  },
  large: {
    width: '2.875rem',
    height: '1.5rem'
  }
};

const getControlBoxSize = ({ size }) =>
  `width: ${sizes[size].width}; height: ${sizes[size].height};`;

const getCircleBoxSize = ({ size }) =>
  `width: ${sizes[size].height}; height: ${sizes[size].height};`;

const getCircleTranslate = ({ size, checked }) => {
  if (checked) return `transform: translateX(calc(${sizes[size].width} - ${sizes[size].height}))`;

  return 'transform: translateX(0)';
};

export { getControlBoxSize, getCircleBoxSize, getCircleTranslate };

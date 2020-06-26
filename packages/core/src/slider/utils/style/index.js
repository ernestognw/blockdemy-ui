const getThumbSize = ({ size }) => {
  if (typeof size === 'number') return `${size}px`;
  switch (size) {
    case 'large':
      return '16px';
    case 'small':
      return '10px';
    default:
      return '14px';
  }
};

const getTrackHeight = ({ size }) => {
  switch (size) {
    case 'large':
      return '4px';
    case 'small':
      return '2px';
    default:
      return '4px';
  }
};

export { getThumbSize, getTrackHeight };

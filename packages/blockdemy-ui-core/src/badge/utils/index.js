const getPosition = ({ position, distance }) => {
  switch (position) {
    case 'top-right':
      return `top: ${distance}; right: ${distance}`;
    case 'top-left':
      return `top: ${distance}; left: ${distance}`;
    case 'bottom-right':
      return `bottom: ${distance}; right: ${distance}`;
    case 'bottom-left':
      return `bottom: ${distance}; left: ${distance}`;
    default:
      return `top: ${distance}; right: ${distance}`;
  }
};

export default getPosition;

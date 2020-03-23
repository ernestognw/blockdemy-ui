const getPadding = ({ size }) => {
  switch (size) {
    case 'small':
      return 'padding: 0.725rem 0.8rem 0.675rem;';
    case 'large':
      return 'padding: 1.25rem 1.15rem 1.3125rem;';
    default:
      return 'padding: 1rem 1rem 0.95rem;';
  }
};

export default getPadding;

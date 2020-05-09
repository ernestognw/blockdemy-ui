const getSize = ({ size }) => {
  switch (size) {
    case 'small':
      return 'width: 0.825rem; height: 0.825rem;';
    case 'large':
      return 'width: 1.25rem; height: 1.25rem;';
    default:
      return 'width: 1rem; height: 1rem;';
  }
};

export default getSize;

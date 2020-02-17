const getOptionsButtonTop = ({ label, message }) => {
  if ((label && message) || (!label && !message)) {
    return 'calc(52% - 8px)';
  }
  if (label) {
    return '62%';
  }
  return '18%';
};

export default getOptionsButtonTop;

const getOptionsButtonTop = ({ label, message }) => {
  if ((label && message) || (!label && !message)) {
    return 'calc(52% - 12px)';
  }
  if (label) {
    return '55%';
  }
  return '10%';
};

export default getOptionsButtonTop;

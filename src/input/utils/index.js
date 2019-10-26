const getOptionsButtonTop = ({ label, message }) => {
  if ((label && message) || (!label && !message)) {
    return "calc(50% - 12px)";
  }
  if (label) {
    return "50%";
  }
  return "10%";
};

export default getOptionsButtonTop;

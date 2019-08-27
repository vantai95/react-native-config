const formatNumber = (num) => {
  return num > 999 ? `${(num / 1000).toFixed(1)}k` : num;
};

const truncateText = (textString, maxLength) => {
  if (textString.length > maxLength) {
    textString = textString.substr(0, maxLength) + '...';
  }
  return textString;
};

module.exports = {
  formatNumber,
  truncateText
};

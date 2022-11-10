const stringSumEvaluator = (inputString) => {
  splitString = inputString.split(" ");
  if (splitString.length > 1) {
    return [inputString, 2];
  }
  return [inputString, 1];
};

module.exports = stringSumEvaluator;

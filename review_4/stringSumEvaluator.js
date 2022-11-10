const stringSumEvaluator = (inputString) => {
  splitString = inputString.split(" ");

  if (splitString.length == 1) return [inputString, 1];
  console.log(splitString);
  console.log(parseInt(splitString[2]));

  return [inputString, parseInt(splitString[0]) + parseInt(splitString[2])];
};

module.exports = stringSumEvaluator;

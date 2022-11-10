const stringSumEvaluator = (inputString) => {
  splitString = inputString.split(" ");

  if (splitString.length == 1) return [inputString, parseInt(inputString)];

  return [
    inputString,
    parseStringCalculation(splitString[0], splitString[1], splitString[2]),
  ];
};

const parseStringCalculation = (num1Str, operator, num2Str) => {
  num1 = parseInt(num1Str);
  num2 = parseInt(num2Str);
  if (operator == "+") {
    return num1 + num2;
  } else return num1 * num2;
};
module.exports = stringSumEvaluator;

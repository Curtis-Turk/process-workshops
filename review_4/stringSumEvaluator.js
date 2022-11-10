const evaluateStringSum = (inputString) => {
  splitString = inputString.split(" ");

  if (splitString.length == 1) return [inputString, parseInt(inputString)];

  console.log(parseInt("one"));

  return [
    inputString,
    parseStringCalculation(splitString[0], splitString[1], splitString[2]),
  ];
};

const parseStringCalculation = (num1Str, operator, num2Str) => {
  num1 = parseInt(num1Str);
  num2 = parseInt(num2Str);
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      break;
  }
};

module.exports = evaluateStringSum;

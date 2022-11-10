const stringSumEvaluator = (inputString) => {
  splitString = inputString.split(" ");

  if (splitString.length == 1) return [inputString, parseInt(inputString)];

  let operators = "+-*/";
  console.log(splitString[0]);

  return [
    inputString,
    stringOperator(
      splitString[1],
      parseInt(splitString[0]),
      parseInt(splitString[2])
    ),
  ];
};

const parseStringCalculation = (num1, operator, num2) => {
  if (operator == "+") {
    return parseInt(num1) + parseInt(num1);
  } else return num1 * num2;
};
module.exports = stringSumEvaluator;

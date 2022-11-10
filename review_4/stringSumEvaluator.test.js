const stringSumEvaluator = require("./stringSumEvaluator");

test("Returns a input as an array of the input and a number", () => {
  expect(stringSumEvaluator("1")).toEqual(["1", 1]);
});
test("Returns a calcluation of 1 + 1", () => {
  expect(stringSumEvaluator("1 + 1")).toEqual(["1 + 1", 2]);
});

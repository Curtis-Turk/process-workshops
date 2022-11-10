const stringSumEvaluator = require("./stringSumEvaluator");

test("Returns a input as an array of the input and a number", () => {
  expect(stringSumEvaluator("1")).toEqual(["1", 1]);
});
test("Returns a input as an array of the input and a number", () => {
  expect(stringSumEvaluator("2")).toEqual(["2", 2]);
});
test("Returns a calcluation of 1 + 1", () => {
  expect(stringSumEvaluator("1 + 1")).toEqual(["1 + 1", 2]);
});
test("Returns a calcluation of 2 + 1", () => {
  expect(stringSumEvaluator("2 + 1")).toEqual(["2 + 1", 3]);
});
test("Returns a calcluation of 1 * 1", () => {
  expect(stringSumEvaluator("1 * 1")).toEqual(["1 * 1", 1]);
});
test("Returns a calcluation of 2 * 1", () => {
  expect(stringSumEvaluator("2 * 1")).toEqual(["2 * 1", 2]);
});
test("Returns a calcluation of 2 - 1", () => {
  expect(stringSumEvaluator("2 - 1")).toEqual(["2 - 1", 1]);
});
test("Returns a calcluation of 4 / 2", () => {
  expect(stringSumEvaluator("4 / 2")).toEqual(["4 / 2", 2]);
});

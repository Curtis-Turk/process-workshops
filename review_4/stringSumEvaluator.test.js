const evaluateStringSum = require("./evaluateStringSum");

test("Returns a input as an array of the input and a number", () => {
  expect(evaluateStringSum("1")).toEqual(["1", 1]);
});
test("Returns a input as an array of the input and a number", () => {
  expect(evaluateStringSum("2")).toEqual(["2", 2]);
});
test("Returns a calcluation of 1 + 1", () => {
  expect(evaluateStringSum("1 + 1")).toEqual(["1 + 1", 2]);
});
test("Returns a calcluation of 2 + 1", () => {
  expect(evaluateStringSum("2 + 1")).toEqual(["2 + 1", 3]);
});
test("Returns a calcluation of 1 * 1", () => {
  expect(evaluateStringSum("1 * 1")).toEqual(["1 * 1", 1]);
});
test("Returns a calcluation of 2 * 1", () => {
  expect(evaluateStringSum("2 * 1")).toEqual(["2 * 1", 2]);
});
test("Returns a calcluation of 2 - 1", () => {
  expect(evaluateStringSum("2 - 1")).toEqual(["2 - 1", 1]);
});
test("Returns a calcluation of 4 / 2", () => {
  expect(evaluateStringSum("4 / 2")).toEqual(["4 / 2", 2]);
});

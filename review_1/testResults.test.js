const testResults = require("./testResults");

describe("test results function", () => {
  fit("returns the number of greens", () => {
    expect(testResults("Green, Green")).toEqual("Green: 2");
  });
  it("returns the a formatted string", () => {
    expect(testResults("Green, Green, Red, Amber, Red")).toEqual(
      "Green: 2\nAmber: 1\nRed: 2"
    );
  });
});

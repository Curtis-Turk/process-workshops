const Report = require("./report");

describe("Class setup", () => {
  test("should be able to add a score", () => {
    const report = new Report();
    report.addScores("Green");
    expect(report.getScores()).toEqual("Green");
  });
});

describe("Score counter", () => {
  test("gets count from test scores", () => {
    const report = new Report();
    report.addScores("Green");
    expect(report.countScores("Green")).toEqual(1);
  });
  test("gets count from two results", () => {
    const report = new Report();
    report.addScores("Green, Green");
    expect(report.countScores("Green")).toEqual(2);
  });
  test("gets count from two different results", () => {
    const report = new Report();
    report.addScores("Green, Red");
    expect(report.countScores("Green")).toEqual(1);
  });
  test("gets count from three different results", () => {
    const report = new Report();
    report.addScores("Green, Red, Amber");
    expect(report.countScores("Amber")).toEqual(1);
  });
  test("gets count with 2 multiples with one other", () => {
    const report = new Report();
    report.addScores("Green, Amber, Amber");
    expect(report.countScores("Amber")).toEqual(2);
  });
});

describe("Generate scores", () => {
  test("formats report from scores", () => {
    const report = new Report();
    const consoleSpy = jest.spyOn(console, "log");
    report.addScores("Green");
    report.generate();

    expect(consoleSpy).toHaveBeenCalledWith(
      "Test 1:\nGreen: 1\nAmber: 0\nRed: 0"
    );
  });
  test("formats report from 2 green scores", () => {
    const report = new Report();
    const consoleSpy = jest.spyOn(console, "log");
    report.addScores("Green, Green");
    report.generate();

    expect(consoleSpy).toHaveBeenCalledWith(
      "Test 1:\nGreen: 2\nAmber: 0\nRed: 0"
    );
  });
  test("formats report with red addition", () => {
    const report = new Report();
    const consoleSpy = jest.spyOn(console, "log");
    report.addScores("Green, Green, Red");
    report.generate();

    expect(consoleSpy).toHaveBeenCalledWith(
      "Test 1:\nGreen: 2\nAmber: 0\nRed: 1"
    );
  });
});

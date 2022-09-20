const bandpassFilter = require("./bandpassFilter");

describe("bandpassFilter", () => {
  it("should return a frequency array", () => {
    expect(bandpassFilter([], 0, 0)).toEqual([]);
  });
  // it("returns a given array", () => {
  //   expect(bandpassFilter([10], 0, 0)).toEqual([10]);
  // });
  it("returns an array when given a limit", () => {
    expect(bandpassFilter([10], 11, 0)).toEqual([11]);
  });
  it("returns an array of multiple values outside of the limit", () => {
    expect(bandpassFilter([10, 10], 11, 0)).toEqual([11, 11]);
  });
  it("returns an array when given both limits", () => {
    expect(bandpassFilter([10, 10], 11, 20)).toEqual([11, 11]);
  });
  it("returns the correct array when both limits", () => {
    expect(bandpassFilter([10, 30], 11, 20)).toEqual([11, 20]);
  });
  it("throws an error if a band is negative", () => {
    expect(() => {
      bandpassFilter([-1], 0, 0);
    }).toThrow("Frequencies are corrupted");
  });
  it("gives a default upper filter of 1000", () => {
    expect(bandpassFilter([10], 11)).toEqual([1000]);
  });
});

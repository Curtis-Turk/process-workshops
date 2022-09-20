const testResults = (string) => {
  let stringArr = string.split(", ");

  // const obj = {};

  // for (const key of stringArr) {
  //   obj[key] = stringArr.filter((x) => x === "Green").length;
  // }

  let greenCount = String(stringArr.filter((x) => x === "Green").length);
  let amberCount = String(stringArr.filter((x) => x === "Amber").length);
  let redCount = String(stringArr.filter((x) => x === "Red").length);

  return `Green: ${greenCount}\nAmber: ${amberCount}\nRed: ${redCount}`;
};

module.exports = testResults;

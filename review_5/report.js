class Report {
  constructor() {
    this.testScores;
  }

  addScores(testScores) {
    this.testScores = testScores;
  }

  getScores() {
    return this.testScores;
  }

  countScores(scoreToCount) {
    let scoreArray = this.testScores.split(", ");
    return scoreArray.filter((scoreColour) => scoreColour === scoreToCount)
      .length;
  }

  generate() {
    let greenCount = this.countScores("Green");
    let amberCount = this.countScores("Amber");
    let redCount = this.countScores("Red");
    console.log(
      `Test 1:\nGreen: ${greenCount}\nAmber: ${amberCount}\nRed: ${redCount}`
    );
  }
}

module.exports = Report;

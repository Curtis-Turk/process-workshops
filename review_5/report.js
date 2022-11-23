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
    console.log(
      `Test 1:\nGreen: ${this.countScores("Green")}\nAmber: 0\nRed: 0`
    );
  }
}

module.exports = Report;

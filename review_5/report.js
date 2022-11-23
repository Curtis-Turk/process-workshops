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

  formatReport() {}
}

module.exports = Report;

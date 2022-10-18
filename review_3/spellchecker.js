const checkSpelling = (string) => {
  const strArr = string.split(" ")

  let checkedArray = []

  strArr.map((word) => {
    let lowerWord = word.toLowerCase()
    if(dictionery.includes(lowerWord)){
      checkedArray.push(word)
    }else {
      checkedArray.push(`~${word}~`)
    }
  })

  return checkedArray.join(" ")
}

const dictionery = ["these", "words", "are", "spelt", "correctly"]
const punctuation = ["."]

module.exports = checkSpelling
const checkSpelling = require("./spellchecker")

describe("spellchecker",()=>{
  test("Returns a correctly spelt word",()=>{
    expect(checkSpelling("These")).toEqual("These")
  })
  it("Returns an incorrectly spelt word", () => {
    expect(checkSpelling("Thesee")).toEqual("~Thesee~")
  })
  test("Returns two words spelt correctly", ()=>{
    expect(checkSpelling("These words")).toEqual("These words")
  })
  test("Returns two highlighted words",()=>{
    expect(checkSpelling("Thesee wordss")).toEqual("~Thesee~ ~wordss~")
  })
  test("Returns a sentance with a mixture of correct and incorrect words",()=>{
    expect(checkSpelling("Thesee words")).toEqual("~Thesee~ words")
  })
  test("Returns any given sentance correctly",()=>{
    expect(checkSpelling("These words are spnelt correclty")).toEqual("These words are ~spnelt~ ~correclty~")
  })
  test("Returns an uncapitalized word",()=>{
    expect(checkSpelling("these")).toEqual("these")
  })
  test("Returns a randomly capitalised correct word",()=>{
    expect(checkSpelling("ThEsE")).toEqual("ThEsE")
  })
  test("Returns a sentance that has capitalised incorrect word", ()=>{
    expect(checkSpelling("These worDs Are spEelt cOrreclty")).toEqual("These worDs Are ~spEelt~ ~cOrreclty~")
  })
  test("Returns sentance with a full stop", () =>{
    expect("These words.").toEqual("These words.")
  })
  test("Returns corrected sentance with a full stop", () =>{
    expect("These wordss.").toEqual("These ~wordss~.")
  })
})
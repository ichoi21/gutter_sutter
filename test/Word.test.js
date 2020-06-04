const Word = require("../util/Word");

describe("Word", () => {
  describe("Success", () => {
    it("Should create a new word object with the word set to argument", () => {
      const testWord = new Word("test");
      expect(testWord).toEqual({ word: "test" });
    });
  });
  describe("getWord", () => {
    it("Should return word", () => {
      const testWord = new Word("test");
      expect(testWord.getWord).toBe("test");
    });
  });
  describe("setWord", () => {
    it("Should provide word that was passed", () => {
      const testWord = new Word("test");
      testWord.setWord = "thing";
      expect(testWord).toEqual({ word: "thing" });
    });
  });
});
//you want to write the code to pass the test not test to pass the code.

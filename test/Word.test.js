const Word = require("../util/Word");

describe("Word", () => {
  describe("Success", () => {
    it("Should create a new word object with the word set to argument", () => {
      const testWord = new Word("test");
      expect(testWord).toEqual({ word: "test" });
    });
  });
  describe("rev", () => {
    it("Should return a new object with initial word reversed", () => {
      const testWord = new Word("prop");
      expect(testWord.rev).toEqual({ word: "porp" });
    });
  });
  describe("cap", () => {
    it("Should return a new object with ALL CAPS", () => {
      const testWord = new Word("test");
      expect(testWord.cap).toEqual({ word: "TEST" });
    });
  });
  describe("getWord", () => {
    it("Should return word", () => {
      const testWord = new Word("test");
      expect(testWord.getWord).toBe("test");
    });
  });
  describe("isPal", () => {
    it("Should return true if the word is a palindrome, else false", () => {
      const testWord = new Word("dad");
      const testWord2 = new Word("test");
      expect(testWord.isPal).toBe(true);
      expect(testWord2.isPal).toBe(false);
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

//there is no notEqual, but you would want to use toEqual with the errors instead.

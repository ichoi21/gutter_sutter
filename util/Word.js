//functions that creates an OBJECT
class Word {
  constructor(wrd) {
    this.word = wrd;
  }

  get rev() {
    return new Word(this.word.split("").reverse().join(""));
  }

  get cap() {
    return new Word(this.word.toUpperCase());
  }

  get getWord() {
    return this.word;
  }

  get isPal() {
    const val = this.word.split("").reverse().join("") === this.word;
    return val;
  }

  set setWord(wrd) {
    this.word = wrd;
  }
}

module.exports = Word;

//old way which is the same as above.
// function Word(wrd) {
//   this.word = wrd;
// }

// Word.prototype.getWord = function () {
//   return this.word;
// };

//gutters can not get a getter and  return anything.
//getter has to return something.
//setter used to set things.

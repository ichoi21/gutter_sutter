//functions that creates an OBJECT
class Word {
  constructor(wrd) {
    this.word = wrd;
  }
  get getWord() {
    return this.word;
  }

  setWord(wrd) {
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

//gutters can not get a getter or return anything.
//setter used to set things.

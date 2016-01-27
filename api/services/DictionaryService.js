module.exports = {
  getWords: function(next) {
    Word.find().exec(function(err, words) {
      if(err) throw err;
      next(words);
    });
  },
  selectWord: function(wordVal, next) {
    Word.find({word: wordVal}).exec(function(err, word) {
      if(err) throw err;
      next(word);
    });
  }
};

module.exports = {
  addWord: function(wordVal, next) {
    Word.create({word: wordVal}).exec(function(err, word) {
      if(err) throw err;
      next(word);
    })
  },
  addDef: function(defVal, imgVal, wordVal, next) {
    Definition.create({definition: defVal, image: imgVal, word: wordVal}).exec(function(err, def) {
      if(err) throw err;
      next(def);
    })
  },
  addSyn: function(wordVal, defVal, next) {
    Synonym.create({word: wordVal, definition: defVal}).exec(function(err, syn) {
      if(err) throw err;
      next(syn);
    })
  }
}

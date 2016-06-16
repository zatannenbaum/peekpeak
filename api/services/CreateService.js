module.exports = {
  addUnit: function(nameVal,numVal, next) {
    Unit.create({unit_name: nameVal, unit_number: numVal}).exec(function(err, unit) {
      if(err) throw err;
      next(unit);
    })
  },
  addSchool: function(schoolVal, cityVal, stateVal, next) {
    School.create({school_name: schoolVal, city: cityVal, state: stateVal}).exec(function(err, school) {
      if(err) throw err;
      next(school);
    })
  },
  addWord: function(wordVal, unitVal, next) {
    Word.create({word: wordVal, unit: unitVal}).exec(function(err, word) {
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
  },
  addMC: function(unitVal, wordVal, typeVal, diffVal, qVal, aVal, bVal, cVal, dVal, eVal, answerVal, next) {
    Question.create({unit: unitVal, word: wordVal, questiontype: typeVal, difficulty: diffVal, question: qVal, a1: aVal, b1: bVal, c1: cVal, d1: dVal, e1: eVal, answer_a: answerVal}).exec(function(err, mc) {
      if(err) throw err;
      next(mc);
    })
  },
  addFITB: function(unitVal, wordVal, typeVal, diffVal, qVal, aVal, bVal, cVal, dVal, eVal, answerVal, next) {
    Question.create({unit: unitVal, word: wordVal, questiontype: typeVal, difficulty: diffVal, question: qVal, a1: aVal, b1: bVal, c1: cVal, d1: dVal, e1: eVal, answer_a: answerVal}).exec(function(err, fitb) {
      if(err) throw err;
      next(fitb);
    })
  },
  addMatch: function(unitVal, wordVal, typeVal, diffVal, qVal, a1Val, b1Val, c1Val, d1Val, e1Val, f1Val, g1Val, a2Val, b2Val, c2Val, d2Val, e2Val, f2Val, g2Val, answeraVal, answerbVal, answercVal, answerdVal, answereVal, answerfVal, answergVal, next) {
    Question.create({unit: unitVal, word: wordVal, questiontype: typeVal, difficulty: diffVal, question: qVal, a1: a1Val, b1: b1Val, c1: c1Val, d1: d1Val, e1: e1Val, f1: f1Val, g1: g1Val, a2: a2Val, b2: b2Val, c2: c2Val, d2: d2Val, e2: e2Val, f2: f2Val, g2: g2Val, answer_a: answeraVal, answer_b: answerbVal, answer_c: answercVal, answer_d: answerdVal, answer_e: answereVal, answer_f: answerfVal, answer_g: answergVal}).exec(function(err, match) {
      if(err) throw err;
      next(match);
    })
  },
  addPM: function(unitVal, wordVal, typeVal, diffVal, qVal, a1Val, b1Val, c1Val, d1Val, e1Val, f1Val, g1Val, a2Val, b2Val, c2Val, d2Val, e2Val, f2Val, g2Val, answeraVal, answerbVal, answercVal, answerdVal, answereVal, answerfVal, answergVal, next) {
    Question.create({unit: unitVal, word: wordVal, questiontype: typeVal, difficulty: diffVal, question: qVal, a1: a1Val, b1: b1Val, c1: c1Val, d1: d1Val, e1: e1Val, f1: f1Val, g1: g1Val, a2: a2Val, b2: b2Val, c2: c2Val, d2: d2Val, e2: e2Val, f2: f2Val, g2: g2Val, answer_a: answeraVal, answer_b: answerbVal, answer_c: answercVal, answer_d: answerdVal, answer_e: answereVal, answer_f: answerfVal, answer_g: answergVal}).exec(function(err, pm) {
      if(err) throw err;
      next(pm);
    })
  }


}

module.exports = {
  getUnits: function(next) {
    Unit.find().exec(function(err, units) {
      if(err) throw err;
      next(units);
    });
  },
  getQuestions: function(next) {
    Question.find().exec(function(err, questions) {
      if(err) throw err;
      next(questions);
    });
  }
};

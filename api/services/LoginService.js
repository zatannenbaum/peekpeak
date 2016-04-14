module.exports = {
  loginAttempt: function(un, password, next) {
    User.findOne({username: un, password: password}).exec(function(err, user) {
      if (err) throw err;
      next(user);
    })
  }
};

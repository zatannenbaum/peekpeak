module.exports = {
  loginAttempt: function(un, password, next) {
    User.findOne({username: un, password: password}).exec(function(err, user) {
      if (err) throw err;
      next(user);
    })
  },
  loggedIn: function(user, datetime, next) {
    User.update({username: user.username}, {lastlogin: datetime}).exec(function(err, u) {
      if (err) throw err;
      next(u);
    })
  }
};

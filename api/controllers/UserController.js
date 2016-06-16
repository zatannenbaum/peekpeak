/**
 * UserController.js
 *
 * @module      :: Controller
 * @description :: Provides the base user
 *                 actions
 *
 */

module.exports = {
  userSearch: function(req, res) {
    var un = (req.body.username) ? req.body.username : undefined
    SignupService.userSearch(un, function(user) {
      res.json(user);
    });
  },
  getUsers: function(req, res) {
    SignupService.getUsers(function(users) {
      res.json(users);
    });
  },
  createUser: function(req, res) {
    var first = (req.body.first) ? req.body.first : undefined
    var last = (req.body.last) ? req.body.last : undefined
    var email = (req.body.email) ? req.body.email : undefined
    var un = (req.body.username) ? req.body.username : undefined
    var school_id = (req.body.school_id) ? req.body.school_id : undefined
    var teacher_id = (req.body.teacher_id) ? req.body.teacher_id : undefined
    var password = (req.body.password) ? req.body.password : undefined

    SignupService.createUser(first, last, email, un, school_id, teacher_id, password, function(user) {
      req.session.username = user.username;
      req.session.usertype = user.usertype;
      req.session.authenticated = true;
      res.send();
    })
  },
  login: function(req, res) {
    var un = (req.body.username) ? req.body.username : undefined
    var password = (req.body.password) ? req.body.password : undefined

    var encrypt = 0;
    for (i = 0; i < password.length; i++) {
        char = password.charCodeAt(i);
        encrypt = ((encrypt<<5)-encrypt)+char;
        encrypt = encrypt & encrypt; // Convert to 32bit integer
    }

    LoginService.loginAttempt(un, encrypt, function(user) {
      if (user !== undefined) {
        var currentdate = new Date();
        var datetime = (currentdate.getMonth()+1) + "/"
                    + currentdate.getDate() + "/"
                    + currentdate.getFullYear() + " "
                    + currentdate.getHours() + ":"
                    + currentdate.getMinutes() + ":";
        if (currentdate.getSeconds() < 10) datetime += ("0" + currentdate.getSeconds());
        else datetime += currentdate.getSeconds();
        LoginService.loggedIn(user, datetime, function(u) {});
        req.session.username = user.username;
        req.session.usertype = user.usertype;
        req.session.authenticated = true;
        res.send();
      } else {
        res.json({username: null});
      }
    })
  },
  logout: function(req, res) {
    req.session.username = null;
    req.session.usertype = null;
    req.session.authenticated = false;
    res.send();
  }

};

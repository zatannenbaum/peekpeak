module.exports = {
  // emailSearch: function(email, next) {
  //   User.find({email: email}).exec(function(err, user) {
  //     if(err) throw err;
  //     next(user);
  //   });
  // },
  userSearch: function(un, next) {
    User.find({username: un}).exec(function(err,user) {
      if(err) throw err;
      next(user);
    });
  },
  createUser: function(first, last, email, un, password, next) {
    var encrypt = 0;
    for (i = 0; i < password.length; i++) {
        char = password.charCodeAt(i);
        encrypt = ((encrypt<<5)-encrypt)+char;
        encrypt = encrypt & encrypt; // Convert to 32bit integer
    }

    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1) + "/"
                + currentdate.getFullYear() + " "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();

    User.create({firstname: first, lastname: last, email: email, username: un, password: encrypt, lastlogin: datetime, units: [1], currentunit: 1, strugglingwords: []}).exec(function(err, user) {
      if(err) throw err;
      next(user);
    });
  }
};

module.exports = {
  userSearch: function(un, next) {
    User.find({username: un}).exec(function(err,user) {
      if(err) throw err;
      next(user);
    });
  },
  createUser: function(first, last, email, un, school_id, teacher_id, password, next) {
    var encrypt = 0;
    for (i = 0; i < password.length; i++) {
        char = password.charCodeAt(i);
        encrypt = ((encrypt<<5)-encrypt)+char;
        encrypt = encrypt & encrypt; // Convert to 32bit integer
    }

    var currentdate = new Date();
    var datetime = (currentdate.getMonth()+1) + "/"
                + currentdate.getDate() + "/"
                + currentdate.getFullYear() + " "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();

    User.create({school: school_id, teacher_id: teacher_id, firstname: first, lastname: last, email: email, username: un, password: encrypt, usertype: "student", lastlogin: datetime, units: [1], currentunit: 1, strugglingwords: []}).exec(function(err, user) {
      if(err) throw err;
      next(user);
    });
  },
  getUsers: function(next) {
    User.find().exec(function(err, users) {
      if(err) throw err;
      next(users);
    });
  }
};

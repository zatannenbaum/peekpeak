/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 */

module.exports = {
  attributes: {
    school: {
      model: "school"
    },

    teacher_id: "string",

    firstname: "string",

    lastname: "string",

    email: {
      type: "string",
      unique: true
    },

    username: {
      type: "string",
      unique: true
    },

    password: "string",

    usertype: {
      type: "string",
      enum: ["student", "teacher", "admin"],
      defaultsTo: "student"
    },

    lastlogin: "datetime",

    units: "array",

    currentunit: "integer",

    strugglingwords: "array"
  }
};

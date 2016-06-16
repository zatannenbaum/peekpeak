/**
* School.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    school_name: "string",
    city: "string",
    state: "string",
    users: {
      collection: "user",
      via: 'school'
    }
  }
};

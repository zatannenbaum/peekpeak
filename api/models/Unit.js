/**
* Unit.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    unit_name: "string",
    unit_number: {
      type: "integer"
    },
    words: {
      collection: "word",
      via: "unit"
    },
    questions: {
      collection: "question",
      via: "unit"
    }
  }
};

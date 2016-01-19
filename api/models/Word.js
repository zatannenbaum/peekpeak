/**
* Word.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    word: {
      type: "string",
      required: "true",
      alpha: "true"
    },
    definitions: {
      collection: "definition",
      via: "word"
    }
  }
};

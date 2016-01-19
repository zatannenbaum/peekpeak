/**
* Definition.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    definition: {
      text: "string",
      required: "true"
    },
    synonyms: {
      collection: "synonym",
      via: "definition"
    },
    word: {
      model: "word",
      required: "true"
    }
  }
};

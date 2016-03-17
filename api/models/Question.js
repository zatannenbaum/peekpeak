/**
* MCQuestion.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    unit: {
      model: "unit",
    },
    
    word: "string", //word being quizzed

    questiontype: {
      type: "string",
      enum: ['MC', 'FITB', 'M', 'PM']
      //MC=Multiple Choice, FITB=Fill In The Blank, M=Matching, PM=Picture Matching
    },

    difficulty: {
      type: "integer",
      enum: [1, 2, 3, 4, 5]
    },

    question: "string",

    // Used for MC/FITB options or left side of M/PM
    a1: "string",
    b1: "string",
    c1: "string",
    d1: "string",
    e1: "string",
    f1: "string",
    g1: "string",

    // Used for right side of M/PM
    a2: "string",
    b2: "string",
    c2: "string",
    d2: "string",
    e2: "string",
    f2: "string",
    g2: "string",

    // Answer for MC/FITB and answer for a in M/PM
    answer_a: "string",

    // Rest of answers for M/PM
    answer_b: "string",
    answer_c: "string",
    answer_d: "string",
    answer_e: "string",
    answer_f: "string",
    answer_g: "string"
  }

};

/**
 * QuestionController
 *
 * @description :: Server-side logic for managing definitions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getQuestions: function(req, res) {
		PlaynowService.getQuestions(function(questions) {
			res.json(questions);
		});
	},
	addMC: function(req, res) {
		var unitVal = (req.body.unit) ? req.body.unit : undefined
		var wordVal = (req.body.word) ? req.body.word : undefined
		var typeVal = (req.body.questiontype) ? req.body.questiontype : undefined
		var diffVal = (req.body.difficulty) ? req.body.difficulty : undefined
		var qVal = (req.body.question) ? req.body.question : undefined
		var aVal = (req.body.a1) ? req.body.a1 : undefined
		var bVal = (req.body.b1) ? req.body.b1 : undefined
		var cVal = (req.body.c1) ? req.body.c1 : undefined
		var dVal = (req.body.d1) ? req.body.d1 : undefined
		var eVal = (req.body.e1) ? req.body.e1 : undefined
		var answerVal = (req.body.answer_a) ? req.body.answer_a : undefined
		CreateService.addMC(unitVal, wordVal, typeVal, diffVal, qVal, aVal, bVal, cVal, dVal, eVal, answerVal, function(success) {
			res.json(success);
		});
	},
	addFITB: function(req, res) {
		var unitVal = (req.body.unit) ? req.body.unit : undefined
		var wordVal = (req.body.word) ? req.body.word : undefined
		var typeVal = (req.body.questiontype) ? req.body.questiontype : undefined
		var diffVal = (req.body.difficulty) ? req.body.difficulty : undefined
		var qVal = (req.body.question) ? req.body.question : undefined
		var aVal = (req.body.a1) ? req.body.a1 : undefined
		var bVal = (req.body.b1) ? req.body.b1 : undefined
		var cVal = (req.body.c1) ? req.body.c1 : undefined
		var dVal = (req.body.d1) ? req.body.d1 : undefined
		var eVal = (req.body.e1) ? req.body.e1 : undefined
		var answerVal = (req.body.answer_a) ? req.body.answer_a : undefined
		CreateService.addFITB(unitVal, wordVal, typeVal, diffVal, qVal, aVal, bVal, cVal, dVal, eVal, answerVal, function(success) {
			res.json(success);
		});
	},
	addMatch: function(req, res) {
		var unitVal = (req.body.unit) ? req.body.unit : undefined
		var wordVal = (req.body.word) ? req.body.word : undefined
		var typeVal = (req.body.questiontype) ? req.body.questiontype : undefined
		var diffVal = (req.body.difficulty) ? req.body.difficulty : undefined
		var qVal = (req.body.question) ? req.body.question : undefined
		var a1Val = (req.body.a1) ? req.body.a1 : undefined
		var b1Val = (req.body.b1) ? req.body.b1 : undefined
		var c1Val = (req.body.c1) ? req.body.c1 : undefined
		var d1Val = (req.body.d1) ? req.body.d1 : undefined
		var e1Val = (req.body.e1) ? req.body.e1 : undefined
		var f1Val = (req.body.f1) ? req.body.f1 : undefined
		var g1Val = (req.body.g1) ? req.body.g1 : undefined
		var a2Val = (req.body.a2) ? req.body.a2 : undefined
		var b2Val = (req.body.b2) ? req.body.b2 : undefined
		var c2Val = (req.body.c2) ? req.body.c2 : undefined
		var d2Val = (req.body.d2) ? req.body.d2 : undefined
		var e2Val = (req.body.e2) ? req.body.e2 : undefined
		var f2Val = (req.body.f2) ? req.body.f2 : undefined
		var g2Val = (req.body.g2) ? req.body.g2 : undefined
		var answeraVal = (req.body.answer_a) ? req.body.answer_a : undefined
		var answerbVal = (req.body.answer_b) ? req.body.answer_b : undefined
		var answercVal = (req.body.answer_c) ? req.body.answer_c : undefined
		var answerdVal = (req.body.answer_d) ? req.body.answer_d : undefined
		var answereVal = (req.body.answer_e) ? req.body.answer_e : undefined
		var answerfVal = (req.body.answer_f) ? req.body.answer_f : undefined
		var answergVal = (req.body.answer_g) ? req.body.answer_g : undefined

		CreateService.addMatch(unitVal, wordVal, typeVal, diffVal, qVal, a1Val, b1Val, c1Val, d1Val, e1Val, f1Val, g1Val, a2Val, b2Val, c2Val, d2Val, e2Val, f2Val, g2Val, answeraVal, answerbVal, answercVal, answerdVal, answereVal, answerfVal, answergVal, function(success) {
			res.json(success);
		});
	},
	addPM: function(req, res) {
		var unitVal = (req.body.unit) ? req.body.unit : undefined
		var wordVal = (req.body.word) ? req.body.word : undefined
		var typeVal = (req.body.questiontype) ? req.body.questiontype : undefined
		var diffVal = (req.body.difficulty) ? req.body.difficulty : undefined
		var qVal = (req.body.question) ? req.body.question : undefined
		var a1Val = (req.body.a1) ? req.body.a1 : undefined
		var b1Val = (req.body.b1) ? req.body.b1 : undefined
		var c1Val = (req.body.c1) ? req.body.c1 : undefined
		var d1Val = (req.body.d1) ? req.body.d1 : undefined
		var e1Val = (req.body.e1) ? req.body.e1 : undefined
		var f1Val = (req.body.f1) ? req.body.f1 : undefined
		var g1Val = (req.body.g1) ? req.body.g1 : undefined
		var a2Val = (req.body.a2) ? req.body.a2 : undefined
		var b2Val = (req.body.b2) ? req.body.b2 : undefined
		var c2Val = (req.body.c2) ? req.body.c2 : undefined
		var d2Val = (req.body.d2) ? req.body.d2 : undefined
		var e2Val = (req.body.e2) ? req.body.e2 : undefined
		var f2Val = (req.body.f2) ? req.body.f2 : undefined
		var g2Val = (req.body.g2) ? req.body.g2 : undefined
		var answeraVal = (req.body.answer_a) ? req.body.answer_a : undefined
		var answerbVal = (req.body.answer_b) ? req.body.answer_b : undefined
		var answercVal = (req.body.answer_c) ? req.body.answer_c : undefined
		var answerdVal = (req.body.answer_d) ? req.body.answer_d : undefined
		var answereVal = (req.body.answer_e) ? req.body.answer_e : undefined
		var answerfVal = (req.body.answer_f) ? req.body.answer_f : undefined
		var answergVal = (req.body.answer_g) ? req.body.answer_g : undefined

		CreateService.addPM(unitVal, wordVal, typeVal, diffVal, qVal, a1Val, b1Val, c1Val, d1Val, e1Val, f1Val, g1Val, a2Val, b2Val, c2Val, d2Val, e2Val, f2Val, g2Val, answeraVal, answerbVal, answercVal, answerdVal, answereVal, answerfVal, answergVal, function(success) {
			res.json(success);
		});
	},
};

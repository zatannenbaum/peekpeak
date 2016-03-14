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
	}
	// addDef: function(req, res) {
	// 	var defVal = (req.body.def) ? req.body.def : undefined
	// 	var imgVal = (req.body.image) ? req.body.image : undefined
	// 	var wordVal = (req.body.word) ? req.body.word : undefined
	// 	CreateService.addDef(defVal, imgVal, wordVal, function(success) {
	// 			res.json(success)
	// 	})
	// }


};

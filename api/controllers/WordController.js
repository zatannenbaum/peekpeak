/**
 * WordController
 *
 * @description :: Server-side logic for managing words
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getWords: function(req, res) {
		DictionaryService.getWords(function(words) {
			res.json(words);
		});
	},
	selectWord: function(req, res) {
		var wordVal = (req.body.word) ? req.body.word : undefined
		DictionaryService.selectWord(wordVal, function(success) {
			res.json(success);
		});
	}
};

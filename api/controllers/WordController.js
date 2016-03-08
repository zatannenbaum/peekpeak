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
	addWord: function(req, res) {
		var wordVal = (req.body.word) ? req.body.word : undefined
		CreateService.addWord(wordVal, function(success) {
				res.json(success)
		})
	}
};

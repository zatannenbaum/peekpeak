/**
 * SynonymController
 *
 * @description :: Server-side logic for managing synonyms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getSynonyms: function(req, res) {
		DictionaryService.getSynonyms(function(synonyms) {
			res.json(synonyms);
		});
	},
	addSyn: function(req, res) {
		var wordVal = (req.body.word) ? req.body.word : undefined
		var defVal = (req.body.def) ? req.body.def : undefined
		CreateService.addSyn(wordVal, defVal, function(success) {
				res.json(success)
		})
	}
};

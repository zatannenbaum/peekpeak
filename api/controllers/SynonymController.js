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
	}

};

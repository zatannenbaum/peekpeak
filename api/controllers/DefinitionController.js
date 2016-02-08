/**
 * DefinitionController
 *
 * @description :: Server-side logic for managing definitions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getDefinitions: function(req, res) {
		DictionaryService.getDefinitions(function(definitions) {
			res.json(definitions);
		});
	}

};

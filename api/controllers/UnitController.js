/**
 * UnitController
 *
 * @description :: Server-side logic for managing definitions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getUnits: function(req, res) {
		PlaynowService.getUnits(function(units) {
			res.json(units);
		});
	},
	addUnit: function(req, res) {
		var nameVal = (req.body.unitname) ? req.body.unitname : undefined
		var numVal = (req.body.unitnum) ? req.body.unitnum : undefined
		CreateService.addUnit(nameVal, numVal, function(success) {
				res.json(success)
		})
	}


};
